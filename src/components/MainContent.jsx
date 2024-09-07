const MainContent = () => {
  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      {/* Back Button */}
      <div className="flex items-center text-sm mb-4">
        <button className="mr-2">&larr;</button>
        <span>Back to Questions</span>
      </div>
      {/* Question Card */}
      <div className="bg-white text-black rounded-lg p-4 mb-6">
        <div className="flex justify-between">
          <div>
            <div className="space-x-2">
              <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded">
                Design
              </span>
              <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded">
                Technology
              </span>
            </div>
            <p className="font-bold mt-2">
              A travel startup wants Amazon to pre-install their personal travel
              agent bot on existing Amazon Echos. What is the value of the
              partnership to the travel startup?
            </p>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400">100 Views</span>
          </div>
        </div>
      </div>

      {/* Answers Section */}
      <h2 className="text-xl mb-4">Answers (23)</h2>
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-start">
          <div className="bg-purple-300 rounded-full h-10 w-10 mr-4"></div>
          <div>
            <h3 className="text-lg font-bold">Neha Bhat (You)</h3>
            <p className="text-gray-400 text-sm">Jun 27, 2023</p>
            <p className="mt-2 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipiscing elit...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
