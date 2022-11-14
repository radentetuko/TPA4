import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'
import Logo from '../img/logo.jpeg'

const Navbar = () => {
  return (
    <>
      <header>
        <section className='container'>
            <nav>
                <img src={Logo}/>
                <ul id="nav-item">
                    <li>
                        <Link className='Home' to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className='Article' to={"/article"}>Article</Link>
                    </li>
                    <li>
                        <Link className='Portofolio' to={"/portofolio"}>Portofolio</Link>
                    </li>
                    <li>
                        <Link className='About' to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
    </>
  )
}

export default Navbar
