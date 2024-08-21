"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "../theme/theme";
import { useTranslations } from "next-intl";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function NavMobile() {
	const pathname = usePathname();
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const t = useTranslations("HomePageNav");

	// Get the current locale from the pathname
	const currentLocale = pathname.startsWith("/es") ? "es" : "en";

	function switchLocale(locale: string) {
		// e.g. '/en/about' or '/fr/contact'
		const newPath = pathname.replace(/^\/(es|en)/, "");
		const updatePath = `/${locale}${newPath}`;
		window.history.replaceState(null, "", updatePath);
		router.push(updatePath);
	}
	function getLocalizedHref(path: string) {
		// Ensure the path doesn't already start with a locale
		if (path.startsWith("/es") || path.startsWith("/en")) {
			return path;
		}
		return `/${currentLocale}${path}`;
	}
	return (
		<section className=" md:hidden ">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="outline">
						<HamburgerMenuIcon />
					</Button>
				</SheetTrigger>
				<SheetContent className="md:hidden">
					<div className=" flex flex-col gap-y-6 items-start ">
						<Select onValueChange={switchLocale}>
							<SelectTrigger className="w-[180px]">
								<SelectValue
									placeholder={currentLocale === "es" ? "Español" : "English"}
									className="font-semibold"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="es">Español</SelectItem>
									<SelectItem value="en">English</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<Link
							onClick={() => {
								setOpen(false);
							}}
							href={getLocalizedHref("/yoursite")}
							className="font-semibold text-sm"
						>
							{t("firstmenunav")}
						</Link>

						<Link
							onClick={() => {
								setOpen(false);
							}}
							href={getLocalizedHref("/nosotros")}
							className="font-semibold text-sm"
						>
							{t("secondmenunav")}
						</Link>
						<ModeToggle />
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
}
