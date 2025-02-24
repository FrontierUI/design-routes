import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const PDAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>
            What services are included in your Presentation Design product?
          </AccordionHeader>
          <AccordionPanel>
            Our Presentation Design services include custom PowerPoint designs,
            presentation templates, custom and motion graphics, data
            visualization, infographics, business presentations, elevator and
            pitch decks, sales decks and reports, investor decks, and slide
            decks.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={1}>
          <AccordionHeader>
            How much does a presentation design project cost?
          </AccordionHeader>
          <AccordionPanel>
            The cost for a presentation design project is $1,199, for 10 slides
            with a fixed project rate and no hidden costs.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={2}>
          <AccordionHeader>
            Can I request unlimited designs and revisions?
          </AccordionHeader>
          <AccordionPanel>
            Yes, you can request unlimited designs and revisions to ensure your
            presentation meets your expectations.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>
            What is the typical turnaround time for designs?
          </AccordionHeader>
          <AccordionPanel>
            We offer same-day delivery for your designs, with turnaround times
            starting from 12 hours for most tasks.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>
            Which presentation platforms do you work with?
          </AccordionHeader>
          <AccordionPanel>
            We are proficient in all major presentation design platforms,
            including Microsoft PowerPoint, Google Slides, Apple Keynote, and
            Figma. We can adapt to your preferred tool for maximum impact.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={5}>
          <AccordionHeader>
            How do you ensure the presentations are tailored to my needs?
          </AccordionHeader>
          <AccordionPanel>
            Our team of professional designers works closely with you to
            understand your objectives and audience, ensuring that each
            presentation is uniquely crafted to engage and persuade effectively.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default PDAccordion;
