import React from 'react';
import Link from './Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Bus', link: '/bus' },
        { id: 2, name: 'Truck', link: '/truck' },
        { id: 3, name: 'Lory', link: '/lory' },
        { id: 4, name: 'Private Car', link: '/private_car' },

    ]


    return (
        <nav>
            <ul>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}



                    >
                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;