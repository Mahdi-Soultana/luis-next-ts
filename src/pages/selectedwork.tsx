function SelectedWork() {
  return (
    <section className="w-full  h-screen flex  ">
      {['Blue Bottles', 'Top Stories ', 'Dragon Memorie', 'Unique Culture'].map(
        (item, index) => (
          <article
            key={item}
            className={`flex  justify-between items-end h-[83%]   relative ${
              index == 1 ? 'bg-gray-200/20 w-[100%]' : 'w-[66%]'
            } `}
          >
            <span className=" group top-0 bottom-0 h-full absolute   w-full object-cover ">
              {/* <img
                className="w-full h-full hidden group-hover:block object-cover"
                src="/person.png"
              /> */}
              <img
                className="w-full h-full top-0 bottom-0 absolute   object-cover"
                src="/Texture.png"
              />
            </span>
            <span className="top-0 bottom-0 h-full absolute w-[.06px] bg-gray-200 pointer-events-none" />

            <p
              className={`absolute pointer-events-none ${
                index == 1 ? 'bottom-4 left-[22%]' : 'bottom-4 left-[40%]'
              } origin-bottom-left rotate-[270deg] `}
            >
              <span className="block font-extralight ">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className=" block text-5xl font-light whitespace-nowrap">
                {item}
              </span>
            </p>
          </article>
        ),
      )}{' '}
    </section>
  );
}

export default SelectedWork;
