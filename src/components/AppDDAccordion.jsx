import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const AppDDAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>
            What does your app design and development service include?
          </AccordionHeader>
          <AccordionPanel>
            Our service includes UI/UX design, native and hybrid app
            development, backend development, app testing and quality assurance,
            app store deployment, and post-launch support and maintenance.
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
            How much does the app design and development product cost?
          </AccordionHeader>
          <AccordionPanel>
            The product is priced at $6,999 per project, with a fixed monthly
            rate and no hidden costs.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>
            Can I request unlimited designs and revisions?
          </AccordionHeader>
          <AccordionPanel>
            Yes, you can make unlimited design requests and revisions to ensure
            the final product meets your expectations.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>
            What is the turnaround time for design requests?
          </AccordionHeader>
          <AccordionPanel>
            We offer same-day delivery for your design requests, with turnaround
            times starting from 12 hours for most tasks.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={5}>
          <AccordionHeader>
            How do you ensure my app is responsive across different devices?
          </AccordionHeader>
          <AccordionPanel>
            We design apps using flexible grid systems, adaptive UI components,
            and responsive image techniques to ensure compatibility and optimal
            performance across mobile, tablet, and desktop devices.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={6}>
          <AccordionHeader>
            How do you handle cross-platform functionality?
          </AccordionHeader>
          <AccordionPanel>
            We build cross-platform solutions using frameworks like React Native
            or Flutter for mobile and React, Angular, or Vue for web, ensuring a
            consistent user experience across all platforms.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default AppDDAccordion;
