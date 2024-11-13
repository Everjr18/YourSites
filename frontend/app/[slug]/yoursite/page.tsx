
import ComparisonTable from "./content/comparisontable";
import IndustryAwards from "./content/industryawards";
import Statistics from "./content/statistics";
import TeamExpertise from "./content/teamexpertise";
import WhyChooseUs from "./content/whychooseus";
import VideoBackground from "./videobackground/videobackground";

export default function yoursitePage() {
	return (
		<section className="">
			<VideoBackground />
			<WhyChooseUs />
			<Statistics />        
			<ComparisonTable />   
			<TeamExpertise />     
			<IndustryAwards />
		</section>
	);
}
