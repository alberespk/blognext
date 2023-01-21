const { Post } = require('../../../services/databank').models;

export default async function handler(req, res) {
    const result = await Post.findAll({});

    res.status(200).send(result);
}
  