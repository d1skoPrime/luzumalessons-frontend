const QuizT = () => {
  return (
    <div>
      <div className="absolute left-0 h-full w-full bg-[#1D1E24]">
        <div className="flex justify-center text-center text-5xl items-center h-full flex-col">
          <h1 className="text-gray-100 font-bold mb-10">
            Welcome to Quiz Page
          </h1>
          <a
            href="quiz/level/select"
            className="font-bold bg-teal-400 px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-700 ease-in-out"
          >
            Start Quiz, To Know your knowledge at coding!
          </a>
        </div>
      </div>
    </div>
  );
};
export default QuizT;
