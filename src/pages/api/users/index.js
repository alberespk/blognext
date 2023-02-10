const { routeHandler } = require('../../../utils/routes');
const { hash } = require('../../../services/bcrypt');

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

const routes = {
    get: async (req, res) => {
        const result = await prisma.admin.findMany(
        );

        res.status(200).send(result);
    },
    any: async (req, res) => {
        res.status(404).send({});
    }
}

export default function handler(req, res) {
    routeHandler(routes, req, res);
}
  