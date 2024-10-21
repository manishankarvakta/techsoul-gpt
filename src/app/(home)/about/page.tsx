import Image from "next/image";
import team__1 from "@/assets/team1.jpg";
import team__img from "@/assets/our-team.jpeg";
import mission__png from "@/assets/mission.png";
import vision__png from "@/assets/vison.png";
import value__png from "@/assets/value.png";

export default function About() {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative bg-no-repeat bg-cover bg-center w-full h-[700px] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${team__img.src})`,
        }}
      >
        {/* Bottom to top gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        {/* Text content */}
        <div className="z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-white text-lg leading-relaxed drop-shadow-md">
            At Teachsoul, we are dedicated to leveraging the power of AI to
            drive innovation and create meaningful solutions for businesses
            around the world.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
        {/* Company Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-48 w-full max-w-6xl">
          {/* Company Mission */}
          <div className="text-center flex flex-col items-center space-y-6 border-b-2 md:border-b-0 border-r-0 md:border-r-2 lg:border-r border-gray-200 py-4 px-8">
            <Image
              height={150}
              width={150}
              src={mission__png}
              alt="Mission image"
              className="object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower businesses with cutting-edge AI
              technologies that enable them to automate tasks, gain deeper
              insights, and enhance their productivity. We believe in harnessing
              the potential of AI to create intelligent solutions that transform
              industries.
            </p>
          </div>

          {/* Company Vision */}
          <div className="text-center flex flex-col items-center space-y-6 border-b-2 lg:border-b-0 border-r-0 lg:border-r-2 border-gray-200 py-4 px-8">
            <Image
              height={150}
              width={150}
              src={vision__png}
              alt="Vision image"
              className="object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where AI seamlessly integrates into business
              processes, enhancing efficiency and providing deep insights. Our
              goal is to lead this transformation across industries, helping
              companies innovate and thrive.
            </p>
          </div>

          {/* Company Value */}
          <div className="text-center flex flex-col items-center space-y-6 py-4 px-8">
            <Image
              height={150}
              width={150}
              src={value__png}
              alt="Value image"
              className="object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              We value integrity, innovation, and collaboration. Our team
              believes in building trust with our clients and delivering
              impactful solutions that create long-lasting value.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32 w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
            Our team is composed of AI enthusiasts, data scientists, and
            experienced developers committed to delivering innovative AI-powered
            solutions.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-3xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <Image
                  src={team__1}
                  quality={100}
                  alt="Team Member"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-gray-100 shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                  John Doe
                </h3>
                <p className="text-gray-500">Lead AI Developer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
