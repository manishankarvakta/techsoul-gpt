import React from "react";
import SectionTitle from "../_components/Shared/SectionTitle";

const Blogs = () => {
  return (
    <section className="bg-gray-50 py-24 h-screen">
      <div className="container mx-auto px-6 lg:px-0">
        <SectionTitle
          title="Latest Insights"
          subTitle="Stay updated on the latest trends in AI technology and innovation."
        />
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((_, idx: number) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                The Future of AI in Healthcare
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Explore how AI is transforming patient care and administrative
                processes in the healthcare industry.
              </p>
              <a
                href="/blog/ai-healthcare"
                className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
