import React, { Component } from 'react'
import Portofolio from './Portofolio';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return <>
   <nav class="navbar navbar-expand-lg nav-ba">
  <div class="container my-3">
    <Link class="navbar-brand fs-1 fw-bold text-white" to="/home">START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white fw-bold" aria-current="page" to="/about" >ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold text-white" to="/portfolio">PORTOFOLIO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  }
}
