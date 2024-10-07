export default function UseCases() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          AI for Every Industry
        </h2>
        <p className="text-center text-gray-600 mt-4">
          No matter your business, our AI solutions fit seamlessly into your
          workflow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Customer Support
            </h3>
            <p className="mt-3 text-gray-500">
              Automate chat responses, provide quick solutions, and improve
              customer satisfaction.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700">E-Commerce</h3>
            <p className="mt-3 text-gray-500">
              Enhance user experience with personalized recommendations and
              automated shopping assistants.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700">Healthcare</h3>
            <p className="mt-3 text-gray-500">
              Leverage AI to automate patient interactions and streamline
              administrative tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
