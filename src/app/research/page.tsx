import SectionTitle from "../_components/Shared/SectionTitle";

export default function Research() {
  return (
    <section className="bg-gray-50 py-48">
      <div className="container mx-auto px-6 lg:px-0">
        <SectionTitle
          title="Our Research & Innovations"
          subTitle=" We are at the forefront of AI research, constantly developing new ways
          to enhance business operations with intelligent technology."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                AI in Healthcare
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We are exploring how AI can improve patient care, enhance
                diagnostics, and streamline healthcare operations.
              </p>
              <a
                href="/research/healthcare"
                className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        {/* Ongoing Projects */}
        <div className="mt-32">
          <SectionTitle
            title="Ongoing Projects"
            subTitle="Stay updated on our ongoing research projects and how they are
            shaping the future of AI."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Ongoing Project 1 */}
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Project Alpha: AI for Customer Service
                </h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  We are developing a customer service AI system that adapts to
                  user behavior to provide faster, smarter responses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
