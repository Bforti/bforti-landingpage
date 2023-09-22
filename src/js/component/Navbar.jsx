import React from "react"

const Navbar= ()=>{
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark  ">

  <div className="container-fluid justify-content-between">
    <div className="d-flex justify-content-between">
    <a className="navbar-brand me-5 " href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   </div>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">about</a>
        <a className="nav-link" href="#">service</a>
        <a className="nav-link" >contact</a>
      </div>
    </div>
  </div>
</nav>
</>
    );

}



export default Navbar