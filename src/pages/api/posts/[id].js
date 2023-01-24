const { Post } = require('../../../services/databank').models;
const { routeHandler } = require('../../../utils/routes');

const routes = {
    get: async (req, res) => {
        const { id } = req.query; 

        const result = await Post.findAll({
            where: {
                id
            }
        });

        if(!result) {
            return res.status(404).send('Post não encontrado!');
        }

        res.status(200).send(result);
    },
    any: async (req, res) => {
        res.status(404).send({});
    }
}

export default function handler(req, res) {
    routeHandler(routes, req, res);
}