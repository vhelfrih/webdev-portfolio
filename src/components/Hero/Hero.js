import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Webdev Portfolio
      </SectionTitle>
      <SectionText>
        
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;