function AboutMe() {
  return (
    <section className="p-8">
      <h1 className="text-5xl font-light">
        I am passionate about typography, code, photography, and Art Direction.{' '}
      </h1>
      <article className="font-light text-sm gap-14 mt-6 grid-cols-2 grid w-[65%]">
        <div>
          I’m a visual designer from Germany I had the chance to work for top
          brands and small beautiful ones. I believe good design is first of all
          about emotions and feelings and then your hard and technical skills.
        </div>
        <div>
          When you achieve a sense of new, or different, exactly at this moment
          you communicating and connecting with people on an emotional level.
          Now that's good design.
        </div>
      </article>
      <div className="h-[250px] mt-4 w-full bg-gray-300 relative">
        <span className="text-gray-300 absolute font-light text-lg -top-10 right-2">
          +6 years experience
        </span>
      </div>
    </section>
  );
}

export default AboutMe;
