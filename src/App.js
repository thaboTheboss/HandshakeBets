import React from 'react';
import Home from "./components/Home";
import styled from "styled-components";
import BetAndEarn from "./components/BetAndEarn";

export default function App() {
  return (
  <Section>
    <Home />
    <BetAndEarn />
  </Section>
  );
  
}

const Section = styled.section``;