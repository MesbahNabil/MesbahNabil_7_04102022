import React from "react"
import { NavLink } from "react-router-dom"
import "../../style/error.css"
import "../../style/app.css"

const Error = () => {
	return (
		<div className="error">
			<h1>404</h1>
			<h2>Oups! La page que vous demandez n'existe pas.</h2>
			<NavLink to={"/"} className="error__linkToHome">
				Retourner sur la page d’accueil
			</NavLink>
		</div>
	)
}

export default Error
