import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

const TeamExpertise = () => {
  const experts = [
    {
      specialty: "Frontend Development",
      certifications: ["React Certified", "Next.js Expert"],
      experience: "10+ years"
    },
    {
      specialty: "Backend Development",
      certifications: ["AWS Certified", "Node.js Expert"],
      experience: "8+ years"
    },
    {
      specialty: "UI/UX Design",
      certifications: ["Adobe Certified", "Figma Expert"],
      experience: "7+ years"
    }
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card key={index} className=" p-6 ">
              <CardTitle className="text-xl font-semibold mb-4">{expert.specialty}</CardTitle>
              <CardContent className="">
                <h4 className="font-medium mb-2">Certifications:</h4>
                <ul className="list-disc list-inside">
                  {expert.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="text-primary font-medium">
                Experience: {expert.experience}
              </CardFooter>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamExpertise; 