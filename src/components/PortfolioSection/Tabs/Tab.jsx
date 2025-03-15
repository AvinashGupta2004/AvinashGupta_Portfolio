function Tab({ children, active, value }) {
  return value === active ? (
    <div className="flex p-2 rounded-md text-md uppercase font-rubik font-[600] border-b-2 border-b-yellow-400 text-blue-700">
      {children}
    </div>
  ) : (
    <div className="flex p-2 rounded-md text-md text-gray-700 uppercase font-rubik font-[600] hover:text-blue-700">
      {children}
    </div>
  );
}

export default Tab;
