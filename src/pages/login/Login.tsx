import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import image from '../../assets/image-2.png';
import LoginForm from '../../components/forms/LoginForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <main className='flex-1 bg-whiteBg font-inter'>
      <MaxWidthWrapper className='relative z-20 flex flex-col items-center justify-center pb-12 pt-24 md:pb-36 md:pt-36'>
        <div className='bg-foreground rounded-md shadow-md overflow-hidden lg:min-h-[700px] px-6 py-8 w-full max-w-[540px] lg:max-w-7xl lg:flex lg:p-0'>
          <figure className='hidden lg:flex lg:w-1/2 flex-shrink-0'>
            <div className='relative w-full aspect-ratio aspect-ratio-16/9'>
              <img
                src={image}
                className='absolute inset-0 object-cover w-full h-full'
              />
            </div>
          </figure>
          <motion.div
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 1,
            }}
            className='flex flex-col self-center gap-6 w-full lg:w-1/2 lg:px-12'
          >
            <div>
              <h1 className='text-4xl text-textDark font-semibold mb-1'>
                Welcome back!
              </h1>
              <h2 className='text-textLight text-sm'>
                Don't have an account?{' '}
                <Link to='/sign-up' className='underline text-secondary'>
                  Register
                </Link>
              </h2>
            </div>
            <LoginForm />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Login;
