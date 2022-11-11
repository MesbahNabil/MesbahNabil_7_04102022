import React, { useState } from "react"
import "../../style/imageSlider.css"
import chevron from "./chevron.svg"

const Slider = ({ data }) => {
	let [index, setIndex] = useState(0)
	const length = data.length

	const sliderNext = () => {
		// si on est déjà au dernier et on vas a zero sinon +1
		if (index === length - 1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}

	const sliderPrev = () => {
		// Si on est au début, on vas au dernier, sinon -1
		if (index === 0) {
			setIndex(length - 1)
		} else {
			setIndex(index - 1)
		}
	}

	if (length === 1) {
		return (
			<div className="slider">
				<img
					className="slider__img"
					src={data[index]}
					alt="Photo de l'appartement"
				/>
			</div>
		)
	} else {
		return (
			<div className="slider">
				<span className="slider__count">
					{index + 1}/{length}
				</span>
				<div
					onClick={sliderNext}
					className="slider__chevron-container slider__chevron-container--right"
				>
					<img
						src={chevron}
						className="slider__chevron-next slider__chevron-slider"
						alt="chevron"
					/>
				</div>

				<div
					onClick={sliderPrev}
					className="slider__chevron-container slider__chevron-container--left"
				>
					<img
						src={chevron}
						className="slider__chevron-prev slider__chevron-slider"
						alt="chevron"
					/>
				</div>

				<img
					className="slider__img"
					src={data[index]}
					alt="Photo de l'appartement"
				/>
			</div>
		)
	}
}

export default Slider
