import React from "react";
import Canvas_container from "./Canvas_container";

const MonumentPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Canvas_container />
        </div>
        <a
          href="https://example.com/monument-video"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          Watch Video
        </a>
      </div>
      <div className="flex flex-col justify-center">
        
        <h1 className="text-4xl font-bold text-gray-500 mb-4">Taj Mahal</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-500 mb-2">
            Information
          </h2>
          <p className="text-gray-300">
            This is a brief description of the monument or place. It contains
            historical facts, architectural details, and other interesting
            aspects related to the monument.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-500 mb-2">
            Rituals and Beliefs
          </h2>
          <p className="text-gray-300">
            This section covers the cultural, religious, or local rituals and
            beliefs associated with the monument. It can talk about traditional
            practices or spiritual significance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonumentPage;
