import React from "react"
import Card from "../Card/Card"
import Data from "../../data/data.json"

// Style
import "../../style/gallery.css"

const Gallery = () => {
	return (
		<section className="gallery">
			{Data.map((element, index) => (
				<Card key={element.id} title={element.title} cover={element.cover} id={element.id} />
			))}
		</section>
	)
}

export default Gallery
