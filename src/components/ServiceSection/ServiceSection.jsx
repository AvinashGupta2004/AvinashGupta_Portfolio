function ServiceSection({ id,children }) {
  return (
    <div id = {id} className="h-full w-full bg-gray-50 pt-[10%] p-6">
      <div>
        <h2 className="lg:text-3xl font-[700] font-nunito text-gray-700 text-center tracking-[1px] text-[1.8rem]">
          Awesome Service
        </h2>
        <p className="text-lg font-[500] text-gray-500 text-center font-nunito mt-1">
          Here are the services that we offer to our clients
        </p>
      </div>
      {children}
    </div>
  );
}

export default ServiceSection;
