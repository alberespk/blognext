const { Post } = require('../../../services/databank').models;
const { routeHandler } = require('../../../utils/routes');

const routes = {
    get: async (req, res) => {
        const result = await Post.findAll({});

        console.log(req.cookies);

        res.status(200).send(result);
    },
    post: async (req, res) => {
        const { title, content, image } = req.body;
        
        console.log(req.cookies);

        if(!title || !content) {
            return res.status(400).send('Faltando informações!');
        }

        const result = await Post.create({
            title, content, image
        });

        res.status(200).send(result);
    },
    put: async (req, res) => {
        const { id } = req.body;

        if(!id) {
            return res.status(400).send('Faltando informações!');
        }

        Post.update(req.body, {
            where: {
                id
            }
        })
            .then(result => {
                res.status(200).send('Post alterado!');
            })
            .catch(error => {
                return res.status(404).send('Post não encontrado!');
            });
    },
    delete: async (req, res) => {
        const { id } = req.body;

        if(!id) {
            return res.status(400).send('Faltando informações!');
        }
        
        const result = await Post.destroy({
            where: {
                id
            }
        })

        if(!result) {
            return res.status(404).send('Post não encontrado para deletar!');
        }

        res.status(200).send('Post deletado!');
    },
    any: async (req, res) => {
        res.status(404).send({});
    }
}

export default function handler(req, res) {
    routeHandler(routes, req, res);
}
  