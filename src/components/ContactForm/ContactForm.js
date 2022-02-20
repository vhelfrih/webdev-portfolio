import React from "react";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import {
  Container,
  Div1,
  Button,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  FormWrapper,
  Form,
  Input,
  MessageInput,
  ButtonContainer
} from "./ContactFormStyles";

const ContactForm = ({onClose}) => {
  // const handleClose = () => {
  //   props.onClose()
  // }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title:
              "Thanks! Message was sent successfully. I will get back to you ASAP.",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <FormWrapper id="contact">
      <Form onSubmit={handleOnSubmit}>
        <Input
          control={Input}
          label="Email"
          name="email"
          placeholder="Email…"
          required
        />
        <Input
          control={Input}
          label="Name"
          name="name"
          placeholder="Name…"
          required
        />
        <MessageInput
          label="Message"
          name="message"
          placeholder="Message…"
          required
        />
        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
