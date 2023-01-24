import { sign } from '../../../services/jwt';

const { User } = require('../../../services/databank').models;
const { routeHandler } = require('../../../utils/routes');
const { compare } = require('../../../services/bcrypt');

function verifyBody(body, keys = []) {
    body = Object.assign({}, body);

    const cleanBody = {};

    for(const [key, value] of Object.entries(body)) {
        if(value)
            cleanBody[key] = value;
    }

    if(keys.every(key => Object.keys(cleanBody).includes(key)))
        return cleanBody;
    return null;
}

function verifyMail(mail) {
    return /.*@.*[.].*/.test(mail);
}

function verifyPass(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pass);
}

const routes = {
    post: async (req, res) => {
        const body = verifyBody(req.body, ['mail', 'pass']);
        
        if(!body) {
            return res.status(400).send('Faltando informações!');
        }

        const user = await User.findOne({
            where: {
                mail: body.mail 
            }
        });

        if(!user) {
            return res.status(400).send('Usuário não existente!');
        }

        if(!compare(body.pass, user.pass)) {
            return res.status(400).send('Senha inválida!');
        }

        const token = await sign({ userId: user.id }, process.env.JWT_SECRET, '1d');

        user.pass = undefined;

        res.status(200).send({ user, token });
    },
    any: async (req, res) => {
        res.status(404).send({});
    }
}

export default function handler(req, res) {
    routeHandler(routes, req, res);
}
  