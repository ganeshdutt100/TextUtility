import React ,{useState}from 'react';

export default function Navbar(props) {

  return (
    <div >
      <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode} `}>
        <div className="container">
          <a className="navbar-brand" href="/">TextUtility</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Project</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/action1">Action 1</a>
                  <a className="dropdown-item" href="/action2">Action 2</a>
                </div>
              </li>
            </ul>
            <div class={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}  >
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Dark Mode</label>
</div>
          </div>
        </div>
      </nav>
    </div>
  )
}
