import React from "react";
import Navbar from "./HeroSection/Navbar/Navbar";
import NavLogo from "./HeroSection/Navbar/NavLogo.jsx";
import HeroSection from "./HeroSection/HeroSection";
import MainGroup from "./HeroSection/MainGroup/MainGroup";
import TextGroup from "./HeroSection/MainGroup/TextGroup";
import SkillsMarquee from "./HeroSection/SkillsMarquee/SkillsMarquee";
import ServiceSection from "./ServiceSection/ServiceSection";
import AboutSection from "./AboutSection/AboutSection";
import Services from "./ServiceSection/Services";
import ServiceCard from "./ServiceSection/ServiceCard";
import {
  services,
  experiences,
  education,
  projects,
  items,
  socialLinks,
} from "../assets/data.js";
import PortfolioSection from "./PortfolioSection/PortfolioSection.jsx";
import Tabs from "./PortfolioSection/Tabs/Tabs.jsx";
import Tab from "./PortfolioSection/Tabs/Tab.jsx";
import TabsBody from "./PortfolioSection/Tabs/TabsBody.jsx";
import TimeLine from "./PortfolioSection/TimeLine/TimeLine.jsx";
import TimeLineItem from "./PortfolioSection/TimeLine/TimeLineItem.jsx";
import ProjectsSection from "./ProjectsSection/ProjectsSection.jsx";
import ProjectCard from "./ProjectsSection/ProjectCard.jsx";
import ContactSection from "./ContactSection/ContactSection.jsx";
import Footer from "./Footer/Footer.jsx";
import ItemGroup from "./Footer/ItemGroup.jsx";
import SuccessToast from "./Notification/SuccessToast.jsx";

function App() {
  const [activeTab, setActiveTab] = React.useState("education");
  return (
    <div>
      <HeroSection id="hero-section">
        
        <div className="absolute w-full h-full -z-10 inset-0 overflow-hidden">
          <img
            src="/images/home-shape.png"
            alt="Background Shape"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <Navbar></Navbar>
        <MainGroup>
          <TextGroup></TextGroup>
        </MainGroup>
        <SkillsMarquee></SkillsMarquee>
      </HeroSection>
      <AboutSection id="about-section"></AboutSection>
      <ServiceSection id="services-section">

        <Services>
          {services.map((service) => {
            return (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            );
          })}
        </Services>
      </ServiceSection>

      <PortfolioSection id="portfolio-section">
        <h3 className="text-gray-700 font-nunito text-center font-[700] text-3xl px-8">
          From Learning to Leading
        </h3>
        <p className="text-gray-500 font-nunito text-center font-[500] text-lg lg:mt-1 px-8 my-4">
          Explore my diverse range of work, showcasing my skills, creativity,
          and passion in every project
        </p>
        <Tabs>
          <Tab key={"education"} value={"education"} active={activeTab}>
            <div onClick={() => setActiveTab("education")} active={activeTab}>
              Education
            </div>
          </Tab>
          <Tab key={"experience"} value={"experience"} active={activeTab}>
            <div onClick={() => setActiveTab("experience")} active={activeTab}>
              Experience
            </div>
          </Tab>
        </Tabs>
        <TabsBody
          hidden={activeTab !== "education"}
          content={{
            title: "Experience",
            description:
              "Experiences help us develop skills, build expertise, and navigate challenges, shaping our professional growth and success.",
          }}
        >
          <TimeLine>
            {experiences.map((experience) => {
              return (
                <TimeLineItem
                  key={experience.id}
                  experience={experience}
                ></TimeLineItem>
              );
            })}
          </TimeLine>
        </TabsBody>
        <TabsBody
          hidden={activeTab !== "experience"}
          content={{
            title: "Education",
            description:
              "Education empowers individuals with knowledge and skills, driving personal growth and societal progress.",
          }}
        >
          <TimeLine>
            {education.map((ed) => {
              return <TimeLineItem key={ed.id} experience={ed}></TimeLineItem>;
            })}
          </TimeLine>
        </TabsBody>
      </PortfolioSection>

      <ProjectsSection id="projects-section">
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            ></ProjectCard>
          );
        })}
      </ProjectsSection>
      <ContactSection id="contact-section"></ContactSection>

      <Footer>
        <div className="mx-auto">
          <NavLogo>Avinash Gupta</NavLogo>
        </div>
        <ItemGroup items={items} isImage={false}>
          References
        </ItemGroup>
        <ItemGroup items={socialLinks} onlyImage={true}>
          Follow me at
        </ItemGroup>
      </Footer>
    </div>
  );
}

export default App;
