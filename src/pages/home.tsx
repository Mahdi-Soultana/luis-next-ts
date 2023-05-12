import MouseTap from '../components/commun/MouseTap';

function Home() {
  return (
    <div className=" flex flex-col justify-between items-start relative  ">
      <h1 className="text-7xl w-[26%] font-light mb-20 mt-5 ">
        Hi, I’m George Lewis{' '}
      </h1>
      <div>
        <p className=" w-[50%] font-light uppercase">
          a visual designer who takes photos, codes and teaches.
        </p>
        <MouseTap />
      </div>
    </div>
  );
}

export default Home;
