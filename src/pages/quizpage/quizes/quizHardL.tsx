import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar';
import QuizHhard from './quizhard';

const QuizHardL = () => {
  return (
    <>
      <Helmet>
        <title>Coding Quiz Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <QuizHhard />
      </div>
    </>
  );
};
export default QuizHardL;
