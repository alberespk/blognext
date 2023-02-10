import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
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
                const player = { id: 1 };
                
                if(player)
                    return player;

                return null;
            }
        })
    ]
}

export default NextAuth(authOptions);