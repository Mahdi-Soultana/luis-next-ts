function Aside() {
  return (
    <aside className="fixed bottom-6 left-[70px] h-[80vh] flex flex-col justify-between items-center ">
      <p className="font-light p-1">Home</p>
      <span className="w-[1.4px] h-full bg-gray-100"></span>
      <p className="flex item-center ">
        <span className="text-5xl font-semibold">01</span>
        <span className="font-light">/09</span>
      </p>
    </aside>
  );
}

export default Aside;
