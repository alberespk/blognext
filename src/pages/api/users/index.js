const { Op } = require('../../../services/databank').Sequelize;
const { User } = require('../../../services/databank').models;
const { routeHandler } = require('../../../utils/routes');
const { hash } = require('../../../services/bcrypt');

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
    get: async (req, res) => {
        const result = await User.findAll({});

        res.status(200).send(result);
    },
    post: async (req, res) => {
        const body = verifyBody(req.body, ['name', 'mail', 'pass']);
        
        if(!body) {
            return res.status(400).send('Faltando informações!');
        }

        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { name: body.name },
                    { mail: body.mail }
                ]
            }
        });

        if(user) {
            return res.status(400).send('Usuário já existente!');
        }

        if(!verifyMail(body.mail)) {
            return res.status(400).send('Email inválido!');
        }

        if(!verifyPass(body.pass)) {
            return res.status(400).send('A senha precisa ter 8 caracteres e ao menos 1 letra maiúscula, 1 letra minúscula e 1 número!');
        }

        const newUser = await User.create({ 
            ...body,
            pass: await hash(body.pass)
        });

        newUser.pass = undefined;

        res.status(200).send(newUser);
    },
    any: async (req, res) => {
        res.status(404).send({});
    }
}

export default function handler(req, res) {
    routeHandler(routes, req, res);
}
  