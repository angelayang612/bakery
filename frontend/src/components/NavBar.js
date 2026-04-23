import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <h1 className="logo">Bakery</h1>
                    <div className="nav-links">
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/products'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to='/order'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Order
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
