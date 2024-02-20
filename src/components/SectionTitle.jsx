import React from "react";

const SectionTitle = ({
  title,
  highlightedText,
  style = "text-center",
  description,
}) => {
  return (
    <div>
      <h2
        className={`text-3xl ${style} leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl`}
      >
        {title} <span className="text-yellow-500">{highlightedText}</span>
      </h2>
      {description && (
        <p className="mt-1 text-lg leading-6 text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
