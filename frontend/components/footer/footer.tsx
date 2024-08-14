import Image from "next/image";
export default function Footer() {
	return (
		<section className=" flex flex-row items-center border-t-2 p-8 mt-6 gap-x-5">
			<Image src="/footer.png" width={170} height={170} alt="footer" />
			<h6 className="font-medium text-lg">
				From WebApp Corporation © 2023 - All right reserved
			</h6>
		</section>
	);
}
