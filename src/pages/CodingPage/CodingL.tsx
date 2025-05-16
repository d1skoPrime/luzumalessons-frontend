import { Helmet } from 'react-helmet-async';
import { NavBar } from '../components/NavBar';
import Coding from './Coding';

const CodingL = () => {
  return (
    <>
      <Helmet>
        <title>Coding Practice Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <Coding />
      </div>
    </>
  );
};
export default CodingL;
