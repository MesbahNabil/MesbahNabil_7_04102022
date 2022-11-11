import React from "react"
import { useParams, redirect } from "react-router-dom"

// style
import "./lodging.scss"

// Data
import Data from "../../data/data.json"

// pages
import Error from "../Error/Error"

// component
import ImageSlider from "../../Components/ImageSlider/ImageSlider.js"
import Dropdown from "../../Components/Dropdown/Dropdown.js"
import StarRating from "../../Components/StarRating/StarRating"

const Lodging = () => {
	const urlId = useParams().id
	const itemData = Data.find((item) => item.id === urlId)

	if (itemData) {
		const dataRating = parseFloat(itemData.rating)
		const dataTags = itemData.tags.map((i, index) => (
			<span key={index}>{i}</span>
		))
		return (
			<div className="lodging">
				<ImageSlider data={itemData.pictures} />

				<div className="lodging__layout">
					<div className="lodging__title">
						<p>{itemData.title}</p>
						<span className="lodging__title__location">
							{itemData.location}
						</span>

						<span className="lodging__title__tags">{dataTags}</span>
					</div>
					<div className="lodging__host">
						<div className="lodging__host-layout">
							<span className="lodging__host__name">
								{itemData.host.name}
							</span>
							<img
								className="lodging__host__img"
								src={itemData.host.picture}
								alt="Visage de l'hôte"
							/>
						</div>
						<div className="lodging__host__rating">
							<StarRating value={dataRating} />
						</div>
					</div>
				</div>

				<div className="lodging__dropdown">
					<div className="lodging__dropdown--items">
						<Dropdown
							title="Description"
							content={itemData.description}
							key={itemData.description}
						/>
					</div>

					<div className="lodging__dropdown--items">
						<Dropdown
							title="Équipements"
							content={itemData.equipments}
							key={itemData.equipments}
						/>
					</div>
				</div>
			</div>
		)
	} else {
		return <Error />
	}
}

export default Lodging
