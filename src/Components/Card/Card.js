import React from "react"
import { NavLink } from "react-router-dom"

// style
import "../../style/card.css"

const Card = ({ title, cover, id }) => {
	return (
		<div className="card">
			<NavLink to={"/lodging/" + id}>
				<img className="card__img" src={cover} alt="Photo de l'appartement" />
				<div className="card__darken"></div>
				<div className="card__txt">{title}</div>
			</NavLink>
		</div>
	)
}


export default Card
