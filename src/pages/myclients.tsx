function MyClients() {
  return (
    <section className="p-6 h-full">
      <h1 className="text-5xl w-[50%] font-light">
        I had the chance to work for top brands and small beautiful ones
      </h1>
      <div className="flex h-full pt-5">
        <div className="  h-full w-[30%]" />
        <div className="  h-[60vh] w-[70%] grid grid-cols-3 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <img
              key={i}
              src={`/clients/Group ${i + 108}.png`}
              className="block  w-full h-[100px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyClients;
