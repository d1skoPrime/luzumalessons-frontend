import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTakeQuiz = () => {
    if (location.pathname !== '/coding/quiz/level/select') {
      navigate('/coding/quiz/level/select');
    }
  };

  return (
    <div className="fixed top-0 w-full h-22 bg-[url('/darkpt.png')] z-50">
      <div className="relative top-7 left-40 text-3xl flex">
        <img src="/L.png" alt="" className="h-14 w-14 cursor-pointer " />
        <h1
          className="text-gray-200 relative right-5 top-2 cursor-pointer"
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          uZuma<span className="text-teal-500 font-semibold">lessons.io</span>
        </h1>
      </div>
      <div className="flex text-4xl items-center justify-center relative bottom-7 left-150">
        <a
          href="/signin"
          className="text-teal-600 font-bold font-serif relative after:content-[''] after:block after:w-0 after:h-[4px] after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full mr-10"
        >
          Login
        </a>
        <span
          onClick={handleTakeQuiz}
          className="cursor-pointer text-teal-600 font-bold font-serif relative after:content-[''] after:block after:w-0 after:h-[4px] after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          Take Quiz
        </span>
      </div>
    </div>
  );
};
