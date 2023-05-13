"use client";
import React from "react";
import Banner from "./Banner";
import ExperienceCard from "./ExperienceCard";
import Qualification from "./Qualification";
import MyProject from "./MyProject";
import ProjectCard from "./ProjectCard";
import DegitalService from "./DegitalService";
import Feedback from "./Feedback";
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
