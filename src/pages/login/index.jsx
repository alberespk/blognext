import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login(props) {
    const { data } = useSession();

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: async values => {
            console.log(await signIn('login', {
                login: values.login,
                password: values.password,
                callbackUrl: `${window.location.origin}/dashboard`,
            }));

            return false;
        },
        validationSchema: Yup.object({
            login: Yup.string()
              .required('Obrigatório!'),
            password: Yup.string()
              .required('Obrigatório!'),
          })
    });

    // return <div>
    //     {data ? 'logado' : 'não logado'}
    //     <button onClick={() => signOut()}>Deslogar</button>
    //     <button onClick={() => signIn()}>Logar</button>
    //     <h1 classNameName="text-m font-bold underline">
    //         Hello world!
    //     </h1>
    // </div>;
    const onSubmit = (e) => {
        e.preventDefault();
        alert(e.target);
    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Realmatismo</h2>
                </div>
                
                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            {/* <label htmlFor="login" className="sr-only">Usuário ou CPF</label> */}
                            <input 
                                id="login" 
                                name="login" 
                                type="text" 
                                onChange={formik.handleChange}
                                value={formik.values.login}
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" 
                                placeholder="Usuário ou CPF"></input>

                            {formik.errors.login && (
                                <>Campo Obrigatório!</>
                            )}
                        </div>
                        <div>
                            {/* <label htmlFor="password" className="sr-only">Senha</label> */}
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm" 
                                placeholder="Senha"></input>
                            {formik.errors.password && (
                                <>Campo Obrigatório!</>
                            )}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
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