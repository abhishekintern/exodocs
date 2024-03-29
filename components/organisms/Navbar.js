import { onAuthStateChanged } from "firebase/auth"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { auth } from "../../config/firebaseConfig"
import { DarkModeButton, LoginButton, SignUpButton } from "../atoms/buttons"

const Navbar = ({ toggleSidebar }) => {
	const [login, setLogin] = useState("")

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setLogin(true)
				// setUserObject(user)
				// console.debug(user);
			} else {
				setLogin(false)
			}
		})
	}, [])

	return (
		<nav className="p-2 sm:p-4 overflow-x-hidden text-slate-800 bg-customlight dark:bg-slate-800 dark:text-customwhite border-b-2 dark:border-b-gray">
			<div className="flex justify-between items-center">
				<div className="flex space-x-2">
					{login && (
						<button
							className="focus:outline-none"
							onClick={toggleSidebar}
						>
							{/* Mobile menu button */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
								/>
							</svg>
						</button>
					)}
					<h1 className="text-2xl font-bold">
						<Link href={"/"}>ExoDocs</Link>
					</h1>
				</div>
				<DarkModeButton />
				{!login && (
					<div className="flex space-x-2">
						<LoginButton />
						<SignUpButton />
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
