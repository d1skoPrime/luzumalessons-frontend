import { Helmet } from 'react-helmet-async';
import { NavBar } from '../components/NavBar';
import SignUpForm from './SignUpForm';

const SignUpL = () => {
  return (
    <>
      <Helmet>
        <title>Auth | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <SignUpForm />
      </div>
    </>
  );
};
export default SignUpL;
