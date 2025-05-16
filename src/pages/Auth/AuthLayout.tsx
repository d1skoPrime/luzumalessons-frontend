import { Helmet } from 'react-helmet-async';
import { NavBar } from '../components/NavBar';
import LoginForm from './LoginForm';

const AuthLayout = () => {
  return (
    <>
      <Helmet>
        <title>Auth | LuZumalessons.io</title>
        <meta name="description" content="Dynamic Title" />
      </Helmet>
      <div>
        <NavBar />
        <LoginForm />
      </div>
    </>
  );
};
export default AuthLayout;
