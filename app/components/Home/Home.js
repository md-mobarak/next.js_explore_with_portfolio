"use client";
import Banner from "./Banner";
import DegitalService from "./DegitalService";
import ExperienceCard from "./ExperienceCard";
import Feedback from "./Feedback";
import MyProject from "./MyProject";
import ProjectCard from "./ProjectCard";
import Qualification from "./Qualification";
import Communicate from "./Communicate";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExperienceCard></ExperienceCard>
      <Qualification></Qualification>
      <MyProject></MyProject>
      <ProjectCard></ProjectCard>
      <DegitalService></DegitalService>
      <Feedback></Feedback>
      <Communicate></Communicate>
    </div>
  );
};

export default Home;
