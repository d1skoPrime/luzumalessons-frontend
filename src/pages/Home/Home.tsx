const Home = () => {
  return (
    <div>
      <div className="absolute left-0 h-full w-full bg-[#1D1E24]">
        <div className="flex justify-center text-center text-8xl items-center h-full flex-col">
          <h1 className="text-gray-100 font-bold mb-10">
            Welcome to Home Page
          </h1>
          <a
            href="coding/sandbox"
            className="font-bold bg-teal-400 px-5 py-2 rounded-lg mb-10 hover:bg-teal-700 transition-colors duration-700 ease-in-out"
          >
            Practice Coding
          </a>
          <a
            href="coding/quiz"
            className="font-bold bg-orange-400 px-5 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-700 ease-in-out"
          >
            Take A Quiz
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
