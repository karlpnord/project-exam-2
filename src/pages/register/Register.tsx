import MaxWidthWrapper from '../../utils/MaxWidthWrapper';
import image from '../../assets/image-2.png';
import RegisterForm from '../../components/forms/RegisterForm';

const Register = () => {
  return (
    <main className="flex-1 bg-whiteBg font-inter">
      <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-12 pt-24 md:pb-36 md:pt-36">
        <div className="bg-foreground rounded-md shadow-md overflow-hidden px-6 py-8 w-full max-w-[540px] lg:max-w-7xl lg:flex lg:p-0">
          <figure className="hidden lg:flex lg:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-ratio aspect-ratio-16/9">
              <img
                src={image}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </figure>
          <div className="flex flex-col gap-6 w-full lg:w-1/2 p-8 xl:p-12">
            <div>
              <h1 className="text-4xl text-textDark font-semibold mb-1">
                Create an account
              </h1>
              <h2 className="text-textLight text-sm">
                Already have an account?{' '}
                <span className="underline text-secondary">Log in</span>
              </h2>
            </div>
            <RegisterForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Register;
