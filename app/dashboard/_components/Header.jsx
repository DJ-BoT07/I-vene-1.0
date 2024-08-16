"use client";
import { Hero } from "@/components/component/hero";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const path = usePathname();
	useEffect(() => {
		console.log(path);
		// console.log(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
	}, []);
	return (
		<>
			<div>
				<div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
					<Image src={"/logo.svg"} alt="logo" width={50} height={60} />
					<ul className="hidden md:flex gap-6">
						<Link
							href={"/"}
							className={`hover:text-primary hover:font-bold transition-all cursor-pointer
		  ${path === "/" ? "text-primary font-bold" : ""}
	  `}
						>
							Home
						</Link>
						<Link
							href={"/dashboard"}
							className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path === "/dashboard" ? "text-primary font-bold" : ""}
            `}
						>
							Dashboard
						</Link>
						<Link
							href={"/notFound"}
							className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${
									path === "/dashboard/questions"
										? "text-primary font-bold"
										: ""
								}
            `}
						>
							404
						</Link>
					</ul>
					<UserButton />
				</div>
			</div>
		</>
	);
}
