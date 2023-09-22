import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component


const Home = () => {
	
	
	return(
	     <>
		<div className="container-fluid">
			<Navbar />
		</div>
		<div className="container-fluid bg-body-tertiary m-2">
			<Jumbotron />
		</div>
		<div className="container-fluid">
				
			<div className="row d-flex">
				<div className="col-3"><Card/></div>	
				<div className="col-3"><Card/></div>	
				<div className="col-3"><Card/></div>	
				<div className="col-3"><Card/></div>	
			
</div>
					
		
		</div>			



		 </>
					)
					}

					export default Home;
				