import React from "react"

import { Routes, Route } from "react-router-dom"

// Pages
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Error from "../Pages/Error/Error"
import Lodging from "../Pages/Lodging/Lodging"

const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/lodging/:id" element={<Lodging />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error />} />
		</Routes>
	)
}

export default routes
