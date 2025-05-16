import { Helmet } from 'react-helmet-async';
import { NavBar } from '../components/NavBar';
import QuizT from './QuizT';

const QuizL = () => {
  return (
    <>
      <Helmet>
        <title>Coding Quiz Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <QuizT />
      </div>
    </>
  );
};
export default QuizL;
