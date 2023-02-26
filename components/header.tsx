import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import '@/styles/globals.css'
import Image from 'next/image'
import Logo from 'public/logo.webp'
const DynamicScriptLoader = dynamic(() => import('./DynamicScriptLoader'), { ssr: false })

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    const handleCoursesClick = () => {
        console.log('Courses clicked');
        setShowSubMenu(!showSubMenu)
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <Image src={Logo} className="logoImg" alt="logo"></Image>

                {/* <Link legacyBehavior href="/">
                    <a className="navbar-brand">Panaverse DAO</a>
                </Link> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <DynamicScriptLoader />
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link legacyBehavior href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/about">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                onClick={handleCoursesClick}
                            >
                                Courses
                            </a>
                            <div className="container">
                                <nav className="navbar">
                                    {/* Navbar content */}
                                </nav>
                                {showSubMenu && (
                                    <ul className="nav-submenu">
                                        <li><a href="#">Course 1</a></li>
                                        <li><a href="#">Course 2</a></li>
                                        <li><a href="#">Course 3</a></li>
                                    </ul>
                                )}
                            </div>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link legacyBehavior href="/courses/html">
                                    <a className="dropdown-item">HTML</a>
                                </Link>
                                <Link legacyBehavior href="/courses/css">
                                    <a className="dropdown-item">CSS</a>
                                </Link>
                                <Link legacyBehavior href="/courses/javascript">
                                    <a className="dropdown-item">JavaScript</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/contact">
                                <a className="nav-link">Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                    <div className='EndItems'>

                                <button id='getStarted'>
                                    Get Started
                                </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
