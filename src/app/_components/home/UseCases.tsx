import SectionTitle from "../Shared/SectionTitle";

export default function UseCases() {
  return (
    <section className="py-32 pb-48">
      <div className="container mx-auto px-6 lg:px-0">
        <SectionTitle
          title=" AI for Every Industry"
          subTitle="No matter your business, our AI solutions integrate seamlessly into
          your workflow to drive efficiency and growth."
        />

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {/* Customer Support */}
          <div className="hover:text-white group transition-transform transform hover:scale-105 shadow-lg hover:bg-black rounded-md p-8 duration-300">
            <h3 className="text-2xl font-semibold">Customer Support</h3>
            <p className="mt-4 leading-relaxed">
              Automate chat responses, provide quick solutions, and improve
              customer satisfaction with intelligent AI assistance.
            </p>
          </div>

          {/* E-Commerce */}
          <div className="hover:text-white group transition-transform transform hover:scale-105 shadow-lg hover:bg-black rounded-md p-8 duration-300">
            <h3 className="text-2xl font-semibold">E-Commerce</h3>
            <p className="mt-4 leading-relaxed">
              Enhance user experience with personalized recommendations and
              automated shopping assistants that boost sales.
            </p>
          </div>

          {/* Healthcare */}
          <div className="hover:text-white group transition-transform transform hover:scale-105 shadow-lg hover:bg-black rounded-md p-8 duration-300">
            <h3 className="text-2xl font-semibold">Healthcare</h3>
            <p className="mt-4 leading-relaxed">
              Leverage AI to automate patient interactions, streamline
              administrative tasks, and improve overall healthcare management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// import useCasesData from "@/lib/useCasesData"; // Ensure to create this data file
// import Image from "next/image";

// export default function UseCases() {
//   return (
//     <section className="pb-32">
//       <div className="container mx-auto px-6 lg:px-0">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800">
//           AI for Every Industry
//         </h2>
//         <p className="text-center text-gray-600">
//           No matter your business, our AI solutions fit seamlessly into your
//           workflow.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 hover:cursor-pointer">
//           {useCasesData.map((useCase, idx) => (
//             <div
//               key={idx}
//               className="group transition-transform transform hover:scale-105 shadow-lg hover:bg-black rounded-md p-8 duration-300"
//             >
//               <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 group-hover:bg-blue-600 group-hover:text-white space-y-5">
//                 <div className="rounded-lg">
//                   <Image
//                     src={useCase.icon}
//                     alt={useCase.alt}
//                     width={80}
//                     height={80}
//                     className="rounded-lg bg-gray-200 p-4"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold">{useCase.title}</h3>
//                 <p>{useCase.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
