import React from "react"

//style
import "./starRating.scss"

// image
import starInactive from "./starInactive.svg"
import starActive from "./starActive.svg"

const StarRating = ({ value }) => {
	// En partant d'un tableau vide,

	const rating = []
	// on remplit autant de fois que le nombre de paramètres de notre composant,
	for (let index = 0; index < value; index++) {
		rating.push(
			<img key={index} className="starActive star" src={starActive}></img>
		)
	}
	// ensuite on remplit le tableau avec des étoiles vides
	for (let index = value; index < 5; index++) {
		rating.push(
			<img
				key={index}
				className="starInactive star"
				src={starInactive}
			></img>
		)
	}

	// et on affiches les 5 premiers éléments de ce tableau
	return <>{rating}</>
}

export default StarRating
