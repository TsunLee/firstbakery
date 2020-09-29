import React from "react";
import { Title, Container, Input, Text, Back, Button } from "./Contact.element";

const Contact = () => {
  return (
    <Back>
      <Container>
        <Title>CONTACT</Title>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Text type="text" placeholder="想對我們說的話..." />
        <Button>確認</Button>
      </Container>
    </Back>
  );
};

export default Contact;
