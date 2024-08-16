"use client";
import type React from "react";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import Link from "next/link";
import { IconLinkedin, IconSquareGithub } from "./icons";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";

const data = [
	{
		id: "1",
		name: "Ever Rojas",
		linkedin: "https://www.linkedin.com/in/ever-jose-rojas-perez-39aa0722a/",
		photo: "/EverFoto.webp",
		github: "https://github.com/Everjr18",
		role1: "Programador Web",
		role2: "English Proficiency",
	},
	{
		id: "2",
		name: "Diego Nicita",
		photo: "/DiegoFoto.jpg",
		linkedin: "https://www.linkedin.com/in/diegonicita/",
		github: "https://github.com/diegonicita",
		role1: "Programador Web",
		role2: "Médico Especialista",
	},
];

export default function Cards() {
	return (
		<section className="mt-8 mb-8 max-w-lg mx-auto">
			<h1 className="font-bold text-2xl md:text-3xl text-center mb-5">
				Nuestro Team
			</h1>
			{data.map((item) => (
				<Card
					key={item.id}
					className="glow:border glow:border-[#216140]  mt-10 p-4 z-10"
				>
					<div className="flex justify-center items-center sm:items-stretch">
						<figure className="rounded-tl-xl to-blue-700 from-red-700 bg-gradient-to-b opacity-90 w-9/12 sm:max-w-40 flex-shrink-0">
							<Image
								src={item.photo}
								alt="profile"
								className="rounded-tl-md w-full h-full glow:border-2 glow:border-[#216140] object-cover opacity-80"
								height={50}
								width={50}
								sizes="full"
							/>
						</figure>
						<div className="hidden w-full bg-base-300 sm:flex items-center opacity-50 rounded-tr-md">
							<div className="flex w-full flex-col m-0 p-0">
								<div className="mockup-window bg-base-300 rounded-none rounded-tr-md">
									<div className="bg-base-200 flex justify-center px-4 py-16">
										Hello World!
									</div>
								</div>
							</div>
						</div>
					</div>
					<GlowCapture>
						<Glow color="red" className="text-center">
							<div className="mx-auto w-9/12 sm:w-full ">
								<div className="items-center sm:items-start text-start py-3 bg-base-300 flex flex-row justify-between">
									<div className="flex flex-col max-w-max">
										<CardTitle className=" glow:text-[#216140]">
											{item.name}
										</CardTitle>
										<div className="text-lg glow:text-[#216140]">
											{item.role1}
										</div>
										<div className="text-lg glow:text-[#216140]">
											{item.role2}
										</div>
									</div>
									<div className=" flex-col items-center justify-end ">
										<Link href={item.github} target="_blank">
											<span>
												<IconSquareGithub className="w-10 h-10" />
											</span>
										</Link>
										<Link href={item.linkedin} target="_blank">
											<span>
												<IconLinkedin className="w-9 h-9 ml-[2px]" />
											</span>
										</Link>
									</div>
								</div>
							</div>
						</Glow>
					</GlowCapture>
				</Card>
			))}
		</section>
	);
}
