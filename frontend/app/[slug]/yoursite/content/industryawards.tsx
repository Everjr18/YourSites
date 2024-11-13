import { Card, CardTitle } from "@/components/ui/card";

const IndustryAwards = () => {
  const awards = [
    {
      title: "Best Web Development Agency 2023",
      organization: "Tech Excellence Awards",
      year: "2023"
    },
    {
      title: "Innovation in Digital Solutions",
      organization: "Digital Impact Awards",
      year: "2022"
    },
    {
      title: "Top Developer Recognition",
      organization: "Clutch",
      year: "2023"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <CardTitle className="text-3xl font-bold text-center text-white mb-12">Recognition & Awards</CardTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className=" p-6">
              <div className="text-xl font-semibold text-primary mb-2">
                {award.title}
              </div>
              <div className="text-gray-300 mb-1">
                {award.organization}
              </div>
              <div className="text-sm text-gray-400">
                {award.year}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryAwards; 