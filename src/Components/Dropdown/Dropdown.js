import React, { useState, useRef } from "react"

// image
import logoVector from "./vector.png"

// Style
import "../../style/dropdown.css"

const Dropdown = ({ title, content, childKey }) => {
	const [isOpen, setIsOpen] = useState(false)
	const heightRef = useRef()

	

	// condition du compo en fonction si array ou txt, typeof array or string

	return (
		<div key={childKey} className="dropdown">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={
					isOpen ? "dropdown__banner active" : "dropdown__banner"
				}
			>
				<h3 className="dropdown__banner__title">{title}</h3>
				<img
					className={
						isOpen
							? "dropdown__banner__logo active"
							: "dropdown__banner__logo"
					}
					src={logoVector}
				></img>
			</div>
			<div
				className="dropdown__content"
				ref={heightRef}
				style={
					isOpen
						? { height: heightRef.current.scrollHeight + "px" }
						: { height: "0px" }
				}
			>
				<div className="dropdown__content__child">
					{typeof content === "string" ? (
						content
					) : (
						<ul>
							{content.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

export default Dropdown
