import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const BIDAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>
            What is included in the Brand Identity Design Product?
          </AccordionHeader>
          <AccordionPanel>
            Our product include comprehensive brand development, logo design,
            brand guidelines creation, brand story development, and rebranding.
            We offer both full-scope branding for new businesses and refreshes
            for established brands seeking a new look.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={1}>
          <AccordionHeader>Who are these product for?</AccordionHeader>
          <AccordionPanel>
            These product are designed for brand, creative, and marketing teams
            looking to establish or elevate their brand identity. Whether you're
            launching a new brand or refreshing an existing one, our team of
            experienced designers is here to help.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={2}>
          <AccordionHeader>
            What is the process for creating a brand identity?
          </AccordionHeader>
          <AccordionPanel>
            Our brand identity design process includes four main steps:
            <br />
            <b>Research & Strategy:</b> We study your business landscape, market
            trends, and competitors to ensure your brand aligns with your goals
            and market demands.
            <br />
            <b>Conceptualization:</b> We brainstorm and create initial designs,
            including logos, colors, and typography.
            <br />
            <b>Design Execution:</b> We refine the concepts based on feedback
            and ensure they resonate with your target audience.
            <br /> <b>Implementation:</b> We apply the finalized designs across
            all touchpoints, ensuring brand consistency across platforms.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>
            How fast can I expect to receive my designs?
          </AccordionHeader>
          <AccordionPanel>
            We offer same-day delivery for your design requests, so you can move
            quickly and keep your projects on track.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>
            How does the fixed monthly rate work?
          </AccordionHeader>
          <AccordionPanel>
            For $4999 per month, you get access to unlimited design requests,
            revisions, and same-day delivery with no hidden costs. This package
            ensures ongoing support for all your branding needs.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={5}>
          <AccordionHeader>
            What types of businesses do you work with?
          </AccordionHeader>
          <AccordionPanel>
            We work with businesses of all sizes, from startups to established
            companies, helping them develop or refine their brand identity to
            stand out in their respective markets.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={6}>
          <AccordionHeader>
            What’s included in the $4999/month package?
          </AccordionHeader>
          <AccordionPanel>
            The monthly package covers brand concept development, key visual
            creation, campaign adaptations, email design, digital and social
            media ads, motion graphics, and 24/7 design support.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default BIDAccordion;
