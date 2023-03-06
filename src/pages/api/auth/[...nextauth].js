import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'login',
            name: 'Login',
            credentials: {
                login: {
                    label: 'Login',
                    type: 'text'
                },
                password: {
                    label: 'Senha',
                    type: 'password'
                }
            },
            async authorize(credentials, req) {
                const admin = await prisma.admin.findFirst({
                    where: {
                        email: credentials.login
                    }
                });

                console.log(admin)
                console.log('id: ' + admin.id)
                
                if(admin)
                    return null
                    // return {
                        // id: admin.id
                    // };
                
                const player = await prisma.user.findFirst({
                    where: {
                        email: credentials.login
                    }
                });

                if(player)
                    return {
                        id: player.id
                    };

                return null;
            }
        })
    ],

}

export default NextAuth(authOptions);