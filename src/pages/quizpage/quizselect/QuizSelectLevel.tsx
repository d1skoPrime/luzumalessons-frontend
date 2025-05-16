const QuizSelectLevel = () => {
  return (
    <div>
      <div className="absolute left-0 h-full w-full bg-[#1D1E24] ">
        <div className="flex justify-center text-center text-5xl items-center h-full flex-col">
          <h1 className="text-gray-100 font-bold mb-10">
            Choose Level Of Your Quiz
          </h1>
          <a
            href="easy"
            className="font-bold mb-10 bg-teal-400 px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-700 ease-in-out"
          >
            Easy
          </a>
          <a
            href="medium"
            className="font-bold mb-10 bg-orange-400 px-5 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-700 ease-in-out"
          >
            Medium
          </a>
          <a
            href="hard"
            className="font-bold mb-10 bg-purple-400 px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-700 ease-in-out"
          >
            Insane
          </a>
        </div>
      </div>
    </div>
  );
};
export default QuizSelectLevel;
