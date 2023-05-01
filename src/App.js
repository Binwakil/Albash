import "./App.css";
import { Navbar, Footer } from "./components";
import {
	Home,
	Create,
	Login,
	Register,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import * as React from "react";

// page :::::::::::::::::

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
