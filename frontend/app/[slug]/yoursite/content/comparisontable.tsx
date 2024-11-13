const ComparisonTable = () => {
  const features = [
    { name: "Custom Development", us: true, others: false },
    { name: "24/7 Support", us: true, others: false },
    { name: "Fixed Price Guarantee", us: true, others: false },
    { name: "Agile Methodology", us: true, others: "Sometimes" },
    { name: "Source Code Ownership", us: true, others: "Varies" },
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 font-bold border py-4">
            <div className="ml-4">Feature</div>
            <div className="text-center text-primary">Us</div>
            <div className="text-center text-gray-500">Others</div>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 py-4 border ">
              <div className="ml-4">{feature.name}</div>
              <div className="text-center ">
                {feature.us === true ? "✓" : feature.us}
              </div>
              <div className="text-center text-gray-500 ">
                {feature.others === true ? "✓" : feature.others === false ? "✗" : feature.others}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable; 