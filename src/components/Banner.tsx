import banner from "../assets/banner-stack.png"
const Banner = () => {
  return (
    <section className="bg-white px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">


        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {" Build your ideal "}
            <span className="bg-linear-to-r from-orange-500   to-purple-700 bg-clip-text text-transparent">
              Development stack
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Explore frontend,backend,database and trolling options
            compare them side by side ,and put together the stack that fits your
            next project.

          </p>


          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="bg-linear-to-r from-orange-500 via-orange-600   to-purple-600 inline-flex items-center justify-center rounded-lg    px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="bg-linear-to-r inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600"
            >
              Learn more
            </a>
          </div>
        </div>


        <div className="w-[70%] max-w-md shrink-0 md:max-w-lg">
          <img
            src={banner}
            alt="banner img"
            className="h-[50] w-full rounded-2xl object-cover "
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;