import React from 'react';
import HeaderNavigation from '@components/HeaderNavigation';
import { useSession, signOut } from 'next-auth/react';

function Dashboard() {
    const { data } = useSession();

    console.log(data)


    const options = [
        {
            name: 'Dashboard',
            link: '/dashboard'
        },
        {
            name: 'Atletas',
            link: '/atletas'
        }
    ];

    return (
        <div className="min-h-full">
            <HeaderNavigation options={options} imageProps={{ src: '/favicon.ico' }} />
            <button onClick={() => signOut()}>deslogar</button>
        </div>
    )
}


export default Dashboard;