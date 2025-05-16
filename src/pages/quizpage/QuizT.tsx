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
            className="font-bold mb-10 bg-teal-400 px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-700 ease-in-out"
          >
            Start Quiz, To Know your knowledge at coding!
          </a>
          <h2 className="text-red-500 mb-10">
            You <span className="text-teal-500 font-bold">MAY</span> use google
            to answer questions that you don't know.
          </h2>
          <h2 className="text-yellow-500 font-bold mb-10">
            Puedes usar Google para encontrar respuestas a preguntas que no
            conoces.
          </h2>
          <h2 className="text-gray-100 mb-10 font-bold">
            你可以用谷歌来寻找你不知道的问题的答案
          </h2>
          <h2 className="text-green-500 mb-10 font-bold">
            bạn có thể sử dụng google để tìm câu trả lời cho những câu hỏi bạn
            không biết
          </h2>
        </div>
      </div>
    </div>
  );
};
export default QuizT;
