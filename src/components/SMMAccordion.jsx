import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const SMMAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>
            What services are included in the Social Media Management package?
          </AccordionHeader>
          <AccordionPanel>
            Our package includes social media strategy development, content
            creation (posts, stories, videos), scheduling and posting, community
            management, social media advertising, and analytics and reporting.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={1}>
          <AccordionHeader>
            How much does the Social Media Management product cost?
          </AccordionHeader>
          <AccordionPanel>
            The service is available for a fixed monthly rate of $1199, which
            includes all listed services with no hidden costs.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={2}>
          <AccordionHeader>
            Can I request unlimited designs and revisions?
          </AccordionHeader>
          <AccordionPanel>
            Yes, you can request as many designs and revisions as needed
            throughout the month. We aim to ensure you're fully satisfied with
            the content we provide.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>
            How quickly can I expect my designs?
          </AccordionHeader>
          <AccordionPanel>
            We offer same-day delivery for your design requests, with turnaround
            times as fast as 12 hours for most content.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>
            Which social media platforms do you specialize in?
          </AccordionHeader>
          <AccordionPanel>
            We have expertise across various platforms, including LinkedIn,
            Instagram, TikTok, YouTube, and Facebook, allowing us to create
            tailored content for each platform's unique requirements.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={5}>
          <AccordionHeader>
            How does the designer matching process work?
          </AccordionHeader>
          <AccordionPanel>
            Each request is matched with the most qualified designer for the
            task, ensuring that your content is crafted by professionals with
            the right expertise and skills.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default SMMAccordion;
