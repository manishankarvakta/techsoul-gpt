import { Button } from "@/components/ui/button";
import pricingData from "@/lib/pricingData";

export default function Pricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Simple pricing for every business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingData.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg shadow-md hover:shadow-lg duration-300 hover:cursor-pointer p-8 text-center flex flex-col justify-between ${
                item.plan === "Basic" &&
                "bg-green-50/30 hover:bg-green-50 duration-300"
              } ${
                item.plan === "Pro" &&
                "bg-red-50/30 hover:bg-red-50 duration-300"
              } ${
                item.plan === "Enterprise" &&
                "bg-blue-50/30 hover:bg-blue-50 duration-300"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-700">
                  {item.plan}
                </h3>
                <p className="mt-4 text-gray-600">
                  {item.price !== "Custom Pricing" && <span>$</span>}
                  <span>{item.price}</span>
                  {item.price !== "Custom Pricing" && <span>/month</span>}
                </p>
                <p className="mt-2 text-gray-500">{item.subtile}</p>
              </div>
              <div>
                <Button variant="outline" className="bg-transparent mt-5 h-9">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
