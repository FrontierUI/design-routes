import {
  Accordion,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordions';

const PricingAccordion = () => {
  return (
    <AccordionContainer>
      <Accordion defaultValue={0}>
        <AccordionItem value={0}>
          <AccordionHeader>Who is it for?</AccordionHeader>
          <AccordionPanel>
            Our service suits all types of businesses and entrepreneurs – it is
            for anyone who needs cost-effective, high-quality Product design on
            an ongoing basis. The Hire Designer service makes you feel like you
            have an in-house designer, but without the hefty price tag.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={1}>
          <AccordionHeader>
            What does unlimited requests and revisions really mean?
          </AccordionHeader>
          <AccordionPanel>
            With all our plans, you can submit as many design requests as you
            would like and our designers will work on it every business day.
            Revisions are unlimited too! Regardless of how many requests or
            revisions you submit, the price stays the same. You are only limited
            in terms of speed as we are real humans doing real work but can
            always upgrade to our Business plan to have 2 designers working on
            your account every day.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={2}>
          <AccordionHeader>What is the turnaround time?</AccordionHeader>
          <AccordionPanel>
            Our designers will work on your requests every business day, all
            year long. In 90% of the case, we deliver the first update the same
            or the next day but for complex requests this can take 48h.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={3}>
          <AccordionHeader>What kind of designs can I request?</AccordionHeader>
          <AccordionPanel>
            The list is pretty wide, and depends on the package you choose.{' '}
            <br />
            1) Website design 2) Logo design 3) Advertising banners design 4)
            Images for social media posts 5) Infographics design 6) Brand
            merchandise design 7) Brochure design 8) Pitch deck design 9) Flyers
            design 10) Brand identity design 11) Emails design 12) GIFs design
            13) Brand book design 14) Package design 15) Graphic videos design
            16) Images design 17) & more
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={4}>
          <AccordionHeader>Do I own the rights to the designs?</AccordionHeader>
          <AccordionPanel>
            Yes. All of our work is done for you and for you only. You have
            complete ownership of the files as soon as you received them and are
            free to use them as you please. <br />
            Source files (PSD, AI, INDD, FIG, SKETCH) are always included along
            with PNG, JPEG, SVG & PDF.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value={5}>
          <AccordionHeader>Can I pause my subscription?</AccordionHeader>
          <AccordionPanel>
            Yes, you can pause a subscription for up to 7 days.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionContainer>
  );
};

export default PricingAccordion;
