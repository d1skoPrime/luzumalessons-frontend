import { Helmet } from 'react-helmet-async';
import { NavBar } from '../components/NavBar';
import Home from './Home';

const HomeL = () => {
  return (
    <>
      <Helmet>
        <title>Home Page | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <Home />
      </div>
    </>
  );
};
export default HomeL;
