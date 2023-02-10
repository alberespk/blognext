import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]";

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const routes = {
    get: async (req, res) => {
        const { id } = req.query;

        const results = await prisma.gallery.findMany({
            where: {
                id
            }
        });

        return res.status(200).send({ results });
    },
    post: async (req, res) => {
        const { url } = req.body;

        const newImage = await prisma.gallery.create({
            data: {
                image: url
            }
        });

        return res.status(200).send({ id: newImage.id });
    },
    any: () => {
        return res.status(404).send({});
    }
}

function routeHandler(routes, req, res) {
    const route = routes[req.method.toLowerCase()] || routes['any'];
  
    return route(req, res);
}

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);

    console.log(session);
    if(!session)
        return res.status(401).send('não logado!');

    return routeHandler(routes, req, res);
}
  