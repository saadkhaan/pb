import Head from "next/head";
import { useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [agreed, setAgreed] = useState(false);

	return (
		<>
			<Head>
				<title>Contact us for a great website design and development</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
				<div className="relative mx-auto max-w-xl">
					<svg
						className="absolute left-full translate-x-1/2 transform"
						width={404}
						height={404}
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={404}
							fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
						/>
					</svg>
					<svg
						className="absolute right-full bottom-0 -translate-x-1/2 transform"
						width={404}
						height={404}
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={404}
							fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
						/>
					</svg>
					<div className="text-center">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							Contact us
						</h2>
						<p className="mt-4 text-lg leading-6 text-gray-500">
							Let&apos;s set things in motion! We&apos;re excited to hear more
							about you and your concepts.
						</p>
					</div>
					<div className="mt-12">
						<form
							action="#"
							method="POST"
							className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-medium text-gray-700"
								>
									First name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										required
										className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-medium text-gray-700"
								>
									Last name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="company"
									className="block text-sm font-medium text-gray-700"
								>
									Company
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="company"
										id="company"
										autoComplete="organization"
										className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm font-medium text-gray-700"
								>
									Phone Number
								</label>
								<div className="relative mt-1 rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 flex items-center">
										<label htmlFor="country" className="sr-only">
											Country
										</label>
										<select
											id="country"
											name="country"
											className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
										>
											<option>US</option>
											<option>CA</option>
											<option>EU</option>
										</select>
									</div>
									<input
										type="text"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
										placeholder="+1 (555) 987-6543"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									Message
								</label>
								<div className="mt-1">
									<textarea
										id="message"
										name="message"
										rows={4}
										className="block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<button type="submit" className="btn btn-dark w-full">
									Let&apos;s talk
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
