import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar';
import Quizeasy from './quizeasy';

const QuizEsL = () => {
  return (
    <>
      <Helmet>
        <title>Coding Quiz Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <Quizeasy />
      </div>
    </>
  );
};
export default QuizEsL;
