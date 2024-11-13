const Statistics = () => {
  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "100+", label: "Projects Delivered On Time" },
    { number: "40%", label: "Average Cost Savings" },
    { number: "24/7", label: "Support Response Time" }
  ];

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics; 