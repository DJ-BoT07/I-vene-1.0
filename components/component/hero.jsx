/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/j4eSHo2Nw0u
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import Image from "next/image";
import luffy from "../../components/blueblack.jpeg"; // Corrected import path

export function Hero() {
	return (
		<div>
			<section className="relative w-full h-[80vh] flex items-center justify-center">
				<div className="absolute inset-0 z-0"/>
					<Image
						src={luffy}
						alt="Luffy Background"
						layout="fill" // This makes the image fill the container
						objectFit="cover" // Ensures the image covers the area
						quality={100} // Optional: Adjust image quality
						priority
            className="mix-blend-multiply" // Optional: Loads image with priority
					/>
				<div className="absolute inset-0 bg-black/50 z-0" />
				<div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 lg:px-8 ">
					<h1 className="text-6xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white hover:scale-105 transition-all">
						Elevate Your Career with I-vene
					</h1>
					<p className="mt-6 text-lg leading-8 text-white font-medium ">
						Experience the power of personalized interview preparation with our
						expert-led mock interviews. Get ready to showcase your skills and
						land your dream job.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href={"/dashboard"}
							className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:scale-105 transition-all cursor-pointer hover:font-extrabold"
							prefetch={false}
						>
							Schedule a Mock Interview
						</Link>
					</div>
				</div>
			</section>
			<section className="py-20 bg-gray-100">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all">
							<h3 className="text-xl font-bold mb-4">Mock Interviews</h3>
							<p className="text-gray-600 mb-4">
								Get personalized feedback and practice with our expert-led mock
								interviews.
							</p>
							<Link
								href="#"
								className="text-primary hover:text-primary/90 font-medium"
								prefetch={false}
							>
								Learn More
							</Link>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all">
							<h3 className="text-xl font-bold mb-4">Resume Review</h3>
							<p className="text-gray-600 mb-4">
								Optimize your resume with our professional review and feedback.
							</p>
							<Link
								href="#"
								className="text-primary hover:text-primary/90 font-medium"
								prefetch={false}
							>
								Change it
							</Link>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all">
							<h3 className="text-xl font-bold mb-4">Career Coaching</h3>
							<p className="text-gray-600 mb-4">
								Get personalized guidance and support to achieve your career
								goals.
							</p>
							<Link
								href="#"
								className="text-primary hover:text-primary/90 font-medium"
								prefetch={false}
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20 bg-gray-100">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-8">
						Why Choose I-vene?
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all" >
							<BriefcaseIcon className="w-12 h-12 text-primary mb-4" />
							<h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
							<p className="text-gray-600">
								Benefit from the expertise of our experienced career coaches and
								interview specialists.
							</p>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all">
							<ClipboardCheckIcon className="w-12 h-12 text-primary mb-4" />
							<h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
							<p className="text-gray-600">
								Receive tailored support to address your unique career goals and
								challenges.
							</p>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all">
							<RocketIcon className="w-12 h-12 text-primary mb-4" />
							<h3 className="text-xl font-bold mb-2">Proven Results</h3>
							<p className="text-gray-600">
								Our clients have successfully landed their dream jobs after
								working with us.
							</p>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-all">
							<ClockIcon className="w-12 h-12 text-primary mb-4" />
							<h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
							<p className="text-gray-600">
								Convenient scheduling options to fit your busy schedule.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-8">Get Started</h2>
					<div className="max-w-2xl mx-auto">
						<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<div className="mb-4">
								<label
									className="block text-gray-700 font-bold mb-2"
									htmlFor="name"
								>
									Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Enter your name"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter your email"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-bold mb-2"
									htmlFor="message"
								>
									Message
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="message"
									rows="3"
									placeholder="Enter your message"
								/>
							</div>
							<div className="flex items-center justify-between">
								<button
									className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

function BriefcaseIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
			<rect width="20" height="14" x="2" y="6" rx="2" />
		</svg>
	);
}

function ClipboardCheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
			<path d="m9 14 2 2 4-4" />
		</svg>
	);
}

function ClockIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

function RocketIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
			<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
			<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
		</svg>
	);
}
