import React from "react";
import Navbar from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const dataCards=[{tittle: "first", content="lorem-picsum" },
                 	{tittle: "second", content="lorem-picsum" },
                 	{tittle: "third", content="lorem-picsum" },
                 	{tittle: "four", content="lorem-picsum" }

                      ]
	return (<>
		<Navbar/>
		<div className="container bg-"><Jumbotron/></div>
		<div className="container text-center">
			<div className ="row">
				{dataCards.map((cardObject,index)=>{
					return(
						<Card title 
						/>
					);
				}
				)}
				<div>
			</div>
		</>
		);
};

export default Home;
