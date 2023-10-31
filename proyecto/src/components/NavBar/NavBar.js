import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';

const NavBar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
        <Link class="navbar-brand" to="/" className='w-25'><img src={Logo} className='w-50' alt="Logo de la tienda" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center align-items-center mx-5" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/guitarra">Guitarras</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/bajo">Bajos</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/teclado">Teclados</Link>
                </li>
            </ul>
        </div>
            <div>
                <Link to="*"><button className='border-1 bg-secondary'><CartWidget/></button></Link>
            </div>
    </div>
</nav>
  )
}

export default NavBar