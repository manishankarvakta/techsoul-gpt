import Image from "next/image";
import team__1 from "@/assets/team1.jpg";

export default function About() {
  return (
    <section className="bg-gray-50 py-16 pt-32">
      <div className="container mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          About Us
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          At [Your Company], we are dedicated to leveraging the power of AI to
          drive innovation and create meaningful solutions for businesses around
          the world.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Mission */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4">
              Our mission is to empower businesses with cutting-edge AI
              technologies that enable them to automate tasks, gain deeper
              insights, and enhance their productivity. We believe in harnessing
              the potential of AI to create intelligent solutions that transform
              industries.
            </p>
          </div>

          {/* Our vision */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              We’ve worked with numerous businesses across various industries to
              help them integrate AI seamlessly into their operations. Our AI
              solutions have transformed workflows, reduced operational costs,
              and enhanced decision-making processes.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Meet the Team
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Our team is composed of AI enthusiasts, data scientists, and
            experienced developers committed to delivering innovative AI-powered
            solutions.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member */}
            <div className="text-center bg-white shadow-md rounded-md">
              <Image
                src={team__1}
                quality={100}
                alt="Team Member"
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                John Doe
              </h3>
              <p className="text-gray-500">Lead AI Developer</p>
            </div>
            <div className="text-center bg-white shadow-md rounded-md">
              <Image
                src={team__1}
                quality={100}
                alt="Team Member"
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                John Doe
              </h3>
              <p className="text-gray-500">Lead AI Developer</p>
            </div>
            <div className="text-center bg-white shadow-md rounded-md">
              <Image
                src={team__1}
                quality={100}
                alt="Team Member"
                className="mx-auto rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                John Doe
              </h3>
              <p className="text-gray-500">Lead AI Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
