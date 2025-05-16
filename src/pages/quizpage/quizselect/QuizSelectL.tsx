import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar';
import QuizSelectLevel from './QuizSelectLevel';

const QuizSelectL = () => {
  return (
    <>
      <Helmet>
        <title>Coding Quiz Level Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <QuizSelectLevel />
      </div>
    </>
  );
};
export default QuizSelectL;
