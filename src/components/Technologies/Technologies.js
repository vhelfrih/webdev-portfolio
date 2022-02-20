import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import Typewriter from "typewriter-effect";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>
    <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Technologies")
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
    <SectionText>
      I am constantly studying and exploring the latest developments of
      front-end technologies in order to be up-to-date and being familiar with the essential topics of web development. Therefore, I checked and tried Gatsby, NextJS, TypeScript, styled-components, Sass, Node.js, Materialize, MaterialUI, MongoDB, Firebase and Tailwind.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
