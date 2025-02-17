// import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const CCAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>
            What services are included in the Creative Campaign Product?
          </AccordionHeader>
          <AccordionPanel>
            The product includes the development of campaign key visuals, up to
            5 Point-of-Sale Materials (POSM) adaptations, digital ads, motion
            graphic videos, email design, and campaign presentation design.
            These services help create cohesive and engaging campaigns across
            multiple channels.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={1}>
          <AccordionHeader>Who are these product for?</AccordionHeader>
          <AccordionPanel>
            This product is built for communication, strategy, and marketing
            teams that need high-quality ad creative to drive their campaigns.
            It’s perfect for teams looking to outsource their ad design needs to
            a professional, global design team.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={2}>
          <AccordionHeader>
            How does the Fixed Monthly Rate work?
          </AccordionHeader>
          <AccordionPanel>
            For $1599 per month, you can access a full range of creative
            campaign services with no hidden costs. The fixed rate covers all
            requests, revisions, and access to professional designers, ensuring
            consistent quality and delivery.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>Are revisions included?</AccordionHeader>
          <AccordionPanel>
            Yes, we offer unlimited revisions. You can request as many revisions
            as your project needs to ensure the final product aligns perfectly
            with your vision.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>
            What does 24/7 Timezone Coverage mean?
          </AccordionHeader>
          <AccordionPanel>
            Our global team operates around the clock, ensuring that no matter
            your location, we can meet your design needs and provide support
            whenever required.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default CCAccordion;
