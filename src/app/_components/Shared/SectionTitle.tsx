import React from "react";

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-center text-gray-800">{title}</h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
