import React, {useState} from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import Modal from "../Modal/Modal";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Button
} from "./FooterStyles";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <FooterWrapper>
        {showModal && <Modal show={showModal} onClose={() => setShowModal(false)}/>}
        <SocialIconsContainer>
        <Button id="contact" onClick={() => setShowModal(true)}>Contact</Button>
          <CompanyContainer>
            <Slogan>
              Seeking to deliver premium quality sites and applications
            </Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/vhelfrih" target="_blank">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/viktor-helfrih-596a4333/"
              target="_blank"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.instagram.com/vhelfrih/"
              target="_blank"
            >
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
