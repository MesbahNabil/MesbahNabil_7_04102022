import React from "react"
import { NavLink } from "react-router-dom"

// Images
import logo from "./logo.png"

// Style
import "../../style/header.css"

const Header = () => {
	return (
		<header className="header">
			<nav className="header-nav">
				<NavLink to={"/home"}>
					<img
						className="header-nav__logo"
						src={logo}
						alt="Logo de kasa"
					/>
				</NavLink>

				<div className="header-nav__list">
					<NavLink
						className={({ isActive }) =>
							isActive ? "link-active" : "link"
						}
						to={"/home"}
					>
						Accueil
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "link-active" : "link"
						}
						to={"/about"}
					>
						A propos
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
