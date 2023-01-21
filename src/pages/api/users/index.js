const { User } = require('../../../services/databank').models;

export default async function handler(req, res) {
    const result = await User.findAll({});

    res.status(200).send(result);
}
  