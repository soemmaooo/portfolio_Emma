const Hero = () => {
  return (
    <section className="flex md:flex-row items-center gap-12 relative h-lvh">
      <div className="flex-1 space-y-6 text-center md:text-left z-1">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-wider text-center">
          Hello! <br />
          I'm
          <span className="font-silkscreen text-6xl md:text-8xl ms-7 font-normal text-main-yellow-600">
            Emma
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-main-yellow-400 text-center tracking-wider">
          React 前端工程師
        </p>
        <div className="flex justify-center gap-14 pt-8">
          <a
            href="#projects"
            className="bg-main-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 hover:scale-105 transition shadow-md inline-flex items-center"
          >
            查看作品
          </a>
          <a
            href="#contact"
            className="border-3 border-black-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-main-yellow-600 hover:scale-105 transition"
          >
            聯絡我
          </a>
        </div>
      </div>
      <img
        className="absolute top-1/2 left-1/4 z-1 hidden md:block"
        src="src/assets/img/cat.png"
        alt="cat"
      />
      <img
        className="absolute top-1/4 right-1/3 z-1 hidden md:block"
        src="src/assets/img/code.png"
        alt="code"
      />
      <img
        className="w-dvw absolute left-1/2 -translate-x-1/2 bottom-0 z-0"
        src="src/assets/img/hero_bg.png"
        alt="hero_c"
      />
    </section>
  );
};

export default Hero;
