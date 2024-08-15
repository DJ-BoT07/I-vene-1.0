"use client"
import { Hero } from "@/components/component/hero";
import { Button } from "@/components/ui/button";
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
          href={"/dashboard"}
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path === "/dashboard" ? "text-primary font-bold" : ""}
            `}
				>
					Dashboard
				</Link>
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path === "/dashboard/questions" ? "text-primary font-bold" : ""}
            `}
				>
					Question
				</li>
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path === "/dashboard/upgrade" ? "text-primary font-bold" : ""}
            `}
				>
					Upgrade
				</li>
				<li
					className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path === "/dashboard/how" ? "text-primary font-bold" : ""}
            `}
				>
					How it Works
				</li>
			</ul>
			<UserButton />
		</div>
    </div>
	<Hero/>
	</>
  );
}
