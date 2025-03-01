"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiCloseLine } from "react-icons/ri"
import { TbMenu } from "react-icons/tb"

const Nav = ({ nav, setNav }) => {
	const pathname = usePathname()
	const [active, setActive] = useState("/")

	useEffect(() => {
		setActive(pathname) // Update active link on navigation
		document.documentElement.style.scrollBehavior = "smooth";
	}, [pathname])

	const NavLink = ({ href, title }) => (
		<li className="relative group">
			<Link onClick={() => setNav(false)} href={href} className={`py-4 px-6 relative text-white transition-all duration-300`}>
				{title}
				{/* Animated Indicator */}
				<span className={`absolute left-1/2 bottom-0 w-0 h-1 bg-green-400 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${active === href ? "w-full" : "w-0"}`} />
			</Link>
		</li>
	)

	return (
		<>
			{/* Navbar */}
			<nav className="fixed top-0 w-full bg-black p-4 shadow-lg z-50">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					{/* Logo */}
					<Link href="/" className="text-white text-2xl font-bold">
						FITNESS
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden md:flex gap-6 uppercase font-[teko] text-white text-sm lg:text-base relative">
						<NavLink href="/" title="Home" />
						<NavLink href="#team-section" title="About us" />
						<NavLink href="#team-section" title="Team" />
						<NavLink href="#classes-section" title="Classes" />
						<NavLink href="/pricing" title="Pricing" />
						<NavLink href="/contact" title="Contact" />
					</ul>

					{/* Mobile Menu Button */}
					<button onClick={() => setNav(!nav)} className="md:hidden text-white">
						{nav ? <RiCloseLine size={30} /> : <TbMenu size={30} />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{nav && (
				<ul className="md:hidden flex flex-col items-center bg-black text-white fixed top-14 left-0 w-full h-screen gap-6 uppercase text-sm tracking-widest pt-8">
					<NavLink href="/" title="Home" />
					<NavLink href="#team-section" title="About us" />
					<NavLink href="#team-section" title="Team" />
					<NavLink href="#classes-section" title="Classes" />
					<NavLink href="/pricing" title="Pricing" />
					<NavLink href="/contact" title="Contact" />
				</ul>
			)}
		</>
	)
}

export default Nav








