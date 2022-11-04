import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxText, ExternalLinks } from "./FollowsStyles";

import Typewriter from "typewriter-effect";
import { ImYoutube2 } from "react-icons/im";

const data = [
  {
    name: "Traversy Media",
    text: "A leader in free web development tutorials on YouTube and project-based courses on Udemy.",
    link: 'https://www.youtube.com/c/TraversyMedia'
  },
  {
    name: "The Net Ninja",
    text: "Shaun Pelling - Easy to follow tutorials on JavaScript, Firebase, Vue.js, React, Node.js, PHP & Python.",
    link: 'https://www.youtube.com/c/TheNetNinja'
  },
  {
    name: "Leigh Halliday",
    text: "A full-stack developer specializing in React and Ruby on Rails.",
    link: 'https://www.youtube.com/c/leighhalliday'
  },
  {
    name: "Ben Awad",
    text: "Videos about React, React Native, GraphQL, Typescript, Node.js, PostgreSQL, Python.",
    link: 'https://www.youtube.com/c/BenAwad97'
  },
  {
    name: "JavaScript Mastery",
    text: "Project-based great tutorials in React.",
    link: 'https://www.youtube.com/c/JavaScriptMastery'
  },
  {
    name: "Kevin Powell",
    text: "Trying to help people fall in love with CSS.",
    link: 'https://www.youtube.com/kepowob'
  },
  {
    name: "James Q Quick",
    text: "From tips and tricks to web dev crash courses.",
    link: 'https://www.youtube.com/c/JamesQQuick'
  },
  {
    name: "Mike Dane",
    text: "Complete tutorials on various programming languages.",
    link: 'https://www.youtube.com/c/GiraffeAcademy'
  },
  {
    name: "Online Tutorials",
    text: "1800+ great tutorials on CSS, HTML and JavaScript.",
    link: 'https://www.youtube.com/c/OnlineTutorials4Designers'
  },
  {
    name: "Web Dev Simplified",
    text: '"My job is to simplify the web for you"',
    link: 'https://www.youtube.com/c/WebDevSimplified'
  },
  {
    name: "Coding Garden",
    text: "An open, interactive and engaging community where any coder can learn and grow together.",
    link: 'https://www.youtube.com/c/CodingGarden'
  },
  {
    name: "Academind",
    text: "A leading channel on Udemy by Maximilian Schwarzmüller.",
    link: 'https://www.youtube.com/c/Academind'
  },
];

const Follows = () => (
  <Section>
    <SectionTitle>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Some Youtubers I Follow")
            .callFunction(() => {})
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {})
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
    </SectionTitle>
    <SectionText>I like to study new technologies from Youtube videos by not only just building the example projects, but thriving to understand every single line of code and adding new features to them. This requires to look up documentations and search various online sources to find working solutions, e.g. StackOverflow, css-tricks, dev.to articles etc. One example is this portfolio page built in NextJS with styled-components, which is an upgraded version of a project by Adrian Hajdin of JavaScript Mastery.</SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.name}</BoxTitle>
          <BoxText>{card.text}</BoxText>
          <ExternalLinks href={card.link} target="_blank">
            <ImYoutube2 />
          </ExternalLinks>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Follows;
