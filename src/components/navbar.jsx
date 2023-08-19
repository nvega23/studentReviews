import './navBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/"><img className="clinicaImage" src="https://southkernsol.org/wp-content/uploads/2023/08/Screenshot-2023-08-09-at-7.03.04-PM.png" alt="clinica"/></a>
            </div>
            <ul className="navbarNav">
                <li className="navItem"><a href="/">Home</a></li>
                <li className="navItem"><a href="/about">About</a></li>
                <li className="navItem"><a href="/services">Services</a></li>
                <li className="navItem"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;