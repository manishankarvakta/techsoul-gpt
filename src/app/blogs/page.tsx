import React from "react";

const Blogs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Latest Insights
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Stay updated on the latest trends in AI technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              How AI is Revolutionizing Customer Service
            </h3>
            <p className="mt-4 text-gray-500">
              Discover how businesses are using AI to improve customer
              satisfaction and reduce response times.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              Automating Workflows: A Game-Changer for Efficiency
            </h3>
            <p className="mt-4 text-gray-500">
              Learn how automation through AI is saving businesses countless
              hours and increasing productivity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              The Future of AI in Healthcare
            </h3>
            <p className="mt-4 text-gray-500">
              Explore how AI is transforming patient care and administrative
              processes in the healthcare industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
