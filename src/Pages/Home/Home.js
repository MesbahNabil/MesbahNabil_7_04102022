import React, { useEffect } from "react"
import "../../style/home.css"

import Headerbanner from "../../Components/Headerbanner/Headerbanner"
import Gallery from "../../Components/Gallery/Gallery"
import { useNavigate } from "react-router-dom"

const Home = () => {

	// Au premier chargement du composant, le use effect est appellé puisque 
	// tableau de dépendance est vide, cela permet de crée une redirection sur home
	const navigate = useNavigate()
	useEffect(() => {
		navigate("/home")
	}, [])

	return (
		<div className="home">
			<Headerbanner page={"home"} />
			<Gallery />
		</div>
	)
}

export default Home
