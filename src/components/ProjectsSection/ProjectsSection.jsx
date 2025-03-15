function ProjectsSection({children}) {
  return (
    <div className="h-full bg-gray-100 lg:p-10 py-10">
      <h3 className="text-gray-700 font-nunito text-center font-[700] text-3xl">
        Our Projects
      </h3>
      <p className="text-lg font-[500] text-gray-500 text-center font-nunito mt-1 px-4">
        Here are the services that we offer to our clients
      </p>
      <div className="flex w-full justify-start items-stretch gap-5 mt-5 mx-auto lg:p-6 overflow-x-auto lg:overflow-x-hidden lg:w-[90%] lg:flex-wrap px-4 lg:grid lg:grid-cols-3 lg:gap-18">
        {children}
      </div>
    </div>
  );
}

export default ProjectsSection;
