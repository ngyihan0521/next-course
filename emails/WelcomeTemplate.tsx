import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import React, { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Abroad</Preview>
      <Tailwind>
        <Body className="bg-yellow-300">
          <Container>
            <Text className="font-bold text-6xl">Hello {name}</Text>
            <Link href="https://www.youtube.com/">www.youtube.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
