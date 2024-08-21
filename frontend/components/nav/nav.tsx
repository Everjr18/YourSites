"use client";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "../theme/theme";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export function Nav() {
	const router = useRouter();
	const pathname = usePathname();
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
		<section className="hidden md:flex md:flex-row md:gap-2">
			<Select onValueChange={switchLocale}>
				<SelectTrigger className="w-[180px]">
					<SelectValue
						placeholder={currentLocale === "es" ? "Español" : "English"}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="es">Español</SelectItem>
						<SelectItem value="en">English</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href={getLocalizedHref("/yoursite")} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{t("firstmenunav")}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href={getLocalizedHref("/nosotros")} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{t("secondmenunav")}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<ModeToggle />
		</section>
	);
}
