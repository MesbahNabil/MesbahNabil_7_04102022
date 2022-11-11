import React from "react"

// Images
import headerImage from "./headerLandscape.jpg"
import headerImageAbout from "./headerAbout.jpg"
import headerImageAboutSmall from "./headerAboutSmall.jpg"

// Style
import "../../style/headerbanner.css"

const Headerbanner = ({ page }) => {
	const media = window.matchMedia("max-width:550px")

	return (
		<section
			className={
				page == "home"
					? "headerbanner"
					: "headerbanner headerbanner--about"
			}
		>
			<picture>
				<source
					srcSet={
						page == "home" ? headerImage : headerImageAboutSmall
					}
					className="headerbanner--about"
					media="(max-width:500px)"
				/>
				<img
					className={"headerbanner__img"}
					src={page == "home" ? headerImage : headerImageAbout}
					alt="Rivage montagneux"
				></img>
			</picture>

			<div className="headerbanner__darken"></div>
			{page == "home" ? (
				<span className="headerbanner__txt">
					Chez vous,{media ? <br /> : null} partout et ailleurs
				</span>
			) : null}
		</section>
	)
}

export default Headerbanner
