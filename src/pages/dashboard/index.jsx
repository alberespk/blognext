import React from 'react';
import HeaderNavigation from '@components/HeaderNavigation';

function Dashboard() {
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
        </div>
    )
}


export default Dashboard;