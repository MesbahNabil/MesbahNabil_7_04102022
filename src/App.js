// App
import React from "react"

// Style reset
import "./style/app.css"

// Routes
import Routes from "./Routes/routes"

// Components

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

const App = () => {
	return (
		<div className="body">
			<div className="body__layout">
				<Header />
				<Routes />
			</div>
			<Footer />
		</div>
	)
}

export default App
