function ProjectsSection({ id, children }) {
  return (
    <div
      id={id}
      className="h-full py-12 lg:py-14 px-4 sm:px-6 lg:px-8 relative" 
      style={{backgroundImage:'url("/images/bg-pattern.png")'}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 font-nunito">
            Our Projects
          </h3>
          <p className="mt-1 text-lg text-gray-600 font-nunito font-medium">
            Here are the services that we offer to our clients
          </p>
        </div>

        {/* Projects Container with Horizontal Scroll on Small Screens */}
        <div className="flex overflow-x-auto pb-6 gap-8 lg:overflow-x-visible lg:grid lg:grid-cols-3 lg:gap-18">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
