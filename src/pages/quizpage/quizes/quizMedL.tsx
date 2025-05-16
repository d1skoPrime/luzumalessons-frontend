import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar';
import QuizzMed from './quizmed';

const QuizMedL = () => {
  return (
    <>
      <Helmet>
        <title>Coding Quiz Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <QuizzMed />
      </div>
    </>
  );
};
export default QuizMedL;
