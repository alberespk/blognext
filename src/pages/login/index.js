import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function Login(props) {
    const { data } = useSession();

    return <div>
        {data ? 'logado' : 'não logado'}
        <button onClick={() => signOut()}>Deslogar</button>
        <button onClick={() => signIn()}>Logar</button>
    </div>;
}

export default Login;