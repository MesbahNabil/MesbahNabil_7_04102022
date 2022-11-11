import React from "react"
import "../../style/footer.css"
import LogoNB from "./logoNB.png"

const Footer = () => {
	return (
		<footer className="footer">
			<img src={LogoNB} alt="Logo de Kasa en noir et blanc" />
			<span>© 2020 Kasa. All rights reserved</span>
		</footer>
	)
}

export default Footer
