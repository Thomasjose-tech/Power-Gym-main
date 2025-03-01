"use client"
import { useState, useEffect } from "react"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
	const [scrollY, setScrollY] = useState(0)
	const [nav, setNav] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [scrollY])

	// Function to handle smooth scrolling
	const handleNavClick = (id) => {
		const section = document.getElementById(id)
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 80, // Adjust offset for fixed header
				behavior: "smooth",
			})
		}
	}

	return (
		<header
			className={`flex flex-wrap w-full items-center justify-between md:justify-around fixed top-0 h-16 py-4 z-[100] mx-auto bg-white ${
				scrollY === 0 ? "md:bg-transparent" : "md:bg-black"
			}`}
			style={{ transition: "background-color 0.4s ease" }}
		>
			<Logo setNav={setNav} />
			<Nav
				nav={nav}
				setNav={setNav}
				handleNavClick={handleNavClick} // Pass function to Nav
			/>
		</header>
	)
}

export default Header

