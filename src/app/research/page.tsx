export default function Research() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Our Research & Innovations
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We are at the forefront of AI research, constantly developing new ways
          to enhance business operations with intelligent technology.
        </p>

        {/* Latest Research Projects */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              AI in Natural Language Processing
            </h2>
            <p className="text-gray-600 mt-4">
              Our latest research delves into improving text understanding and
              generation, enabling businesses to communicate more efficiently
              with AI-driven chat systems.
            </p>
            <a
              href="/research/nlp"
              className="mt-4 inline-block text-blue-600 font-semibold"
            >
              Read more
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              Predictive Analytics for E-Commerce
            </h2>
            <p className="text-gray-600 mt-4">
              Our predictive AI models help e-commerce platforms forecast
              trends, optimize pricing strategies, and increase sales.
            </p>
            <a
              href="/research/predictive-analytics"
              className="mt-4 inline-block text-blue-600 font-semibold"
            >
              Read more
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              AI in Healthcare
            </h2>
            <p className="text-gray-600 mt-4">
              We are exploring how AI can improve patient care, enhance
              diagnostics, and streamline healthcare operations.
            </p>
            <a
              href="/research/healthcare"
              className="mt-4 inline-block text-blue-600 font-semibold"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Ongoing Projects
          </h2>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated on our ongoing research projects and how they are
            shaping the future of AI.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project Alpha: AI for Customer Service
              </h3>
              <p className="text-gray-600 mt-4">
                We are developing a customer service AI system that adapts to
                user behavior to provide faster, smarter responses.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project Beta: AI-Driven Content Creation
              </h3>
              <p className="text-gray-600 mt-4">
                A research project focused on automating content generation for
                digital marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
