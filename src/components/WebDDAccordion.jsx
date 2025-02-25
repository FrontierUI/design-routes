import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const WebDDAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>
            What services are included in your web design and development
            package?
          </AccordionHeader>
          <AccordionPanel>
            Our package includes custom UI/UX design, responsive web
            development, CMS integration (such as WordPress and Shopify),
            e-commerce solutions, website maintenance and support, and
            SEO-friendly development.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={1}>
          <AccordionHeader>
            Do you provide full-stack services for website UI/UX design and
            development?
          </AccordionHeader>
          <AccordionPanel>
            Yes, we provide full-stack services. For this, you can book an
            appointment through the 'Book a Call' page, and our sales and
            support team will contact you. We do not provide full-stack services
            under this package.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={2}>
          <AccordionHeader>
            How much does the web design and development product cost?
          </AccordionHeader>
          <AccordionPanel>
            The product is priced at $1,799 per project, with no hidden costs.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>
            Can I request unlimited designs and revisions?
          </AccordionHeader>
          <AccordionPanel>
            Yes, you can request as many designs and revisions as needed
            throughout the project to ensure your satisfaction.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>
            What is the turnaround time for design requests?
          </AccordionHeader>
          <AccordionPanel>
            We offer same-day delivery for your design requests, with turnaround
            times starting from 12 hours for most content.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={5}>
          <AccordionHeader>
            How does the designer matching process work?
          </AccordionHeader>
          <AccordionPanel>
            Each design request is matched with the most qualified designer for
            the job, ensuring that your project is handled by a professional
            with the relevant expertise and experience.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={6}>
          <AccordionHeader>
            Do you provide website strategy and content development product?
          </AccordionHeader>
          <AccordionPanel>
            Yes, our product include website strategy consulting and content
            development, where our copywriters create compelling and clear
            content to communicate your message effectively and drive
            conversions.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default WebDDAccordion;
