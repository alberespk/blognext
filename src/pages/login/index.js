import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function Login(props) {
    const { data } = useSession();

    // return <div>
    //     {data ? 'logado' : 'não logado'}
    //     <button onClick={() => signOut()}>Deslogar</button>
    //     <button onClick={() => signIn()}>Logar</button>
    //     <h1 className="text-m font-bold underline">
    //         Hello world!
    //     </h1>
    // </div>;

    const onSubmit = (e) => {
        e.preventDefault();
        alert(e.target);
    }

    return (
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Realmatismo</h2>

                </div>
                <form class="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                <input type="hidden" name="remember" value="true"></input>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                    <label for="user-input" class="sr-only">Usuário ou CPF</label>
                    <input id="user-input" name="user" type="text" autocomplete="off" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Usuário ou CPF"></input>
                    </div>
                    <div>
                    <label for="password" class="sr-only">Senha</label>
                    <input id="password" name="password" type="password" autocomplete="off" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" placeholder="Senha"></input>
                    </div>
                </div>

                <div>
                    <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    Logar
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;