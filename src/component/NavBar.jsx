import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
      
      <nav className="navbar sticky-top" style={{backgroundColor: '#191919'}} >
          <div className="container-fluid">
          <a class="navbar-brand text-light fs-2">Personajes de Marvel</a>
              <form className="d-flex">
                  <input className="form-control me-2 justify-content-end" type="search" placeholder="personaje" />
                  <button className="btn btn-light " type="submit">Search</button>
              </form>
          </div>
      </nav>

  )
}

export default NavBar