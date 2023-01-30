import { auth, provider } from "../firebase/firebaseConfig"
import {
	signInWithPopup,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "@firebase/auth"
import React, { useEffect, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import NavbarBasic from "../components/NavbarBasic"
import { useRouter } from "next/router"
import Link from "next/link"

const Login = () => {
	const router = useRouter()
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				router.push("/")
			}
		})
	}, [])

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleGoogleClick = () => {
		signInWithPopup(auth, provider)
			.then(user => {
				// console.log(user)
				alert("Login Successfull")
			})
			.catch(err => {
				console.log(err)
				alert("Login Failed")
			})
	}

	const handleLoginClick = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				// console.log(user)
				alert("Login Successfull")
			})
			.catch(err => {
				console.log(err)
				alert("Login Failed")
			})
	}

	return (
		<>
			<NavbarBasic></NavbarBasic>
			<section className="text-gray-600 body-font relative">
				<div className="container px-5 py-4 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Log In
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Please Login To Your Account to continue.
							<br />
							<span>
								Or{" "}
								<Link
									className="text-slate-600 hover:underline"
									href={"/signup"}
								>
									Create an Account
								</Link>
							</span>
						</p>
					</div>
					<div className="lg:w-1/3 md:w-1/2 mx-auto">
						<div className="flex flex-wrap -m-2">
							<div className="p-2 w-full">
								<div className="relative">
									<div
										onClick={handleGoogleClick}
										className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 text-center outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex items-center justify-center cursor-pointer"
									>
										<FcGoogle className="mx-2" />
										Continue with Google
									</div>
								</div>
							</div>
							<div className="p-2 w-full">
								<div className="relative">
									<label
										htmlFor="email"
										className="leading-7 text-sm text-gray-600"
									>
										Email
									</label>
									<input
										type="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										id="email"
										name="email"
										className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="p-2 w-full">
								<div className="relative">
									<label
										htmlFor="message"
										className="leading-7 text-sm text-gray-600"
									>
										Password
									</label>
									<input
										type="password"
										id="password"
										value={password}
										onChange={e =>
											setPassword(e.target.value)
										}
										name="email"
										className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="p-2 w-full flex justify-around items-center">
								<button
									onClick={handleLoginClick}
									className="flex text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg"
								>
									Log In
								</button>
								<Link
									className="hover:text-slate-500 transition-all"
									href={"/forgotpassword"}
								>
									Forgot Password
								</Link>
							</div>
							<div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
								<p className="leading-normal my-5">
									All Rights Reserved
									<br />
									ExoDocs &copy; 2023
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Login