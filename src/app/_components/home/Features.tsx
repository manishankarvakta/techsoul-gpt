import featuresData from "@/lib/featuresData";
import Image from "next/image";

export default function Features() {
  return (
    <section className="pb-32">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Key Features
        </h2>
        <p className="text-center text-gray-600">
          Discover the powerful AI features designed to enhance your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 hover:cursor-pointer">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="group transition-transform transform hover:scale-105"
            >
              <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 group-hover:bg-black group-hover:text-white space-y-5">
                <div className="rounded-lg">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={80}
                    height={80}
                    className="rounded-lg bg-black p-4"
                  />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="">{feature.subtile}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
