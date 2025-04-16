import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Routes.Design</title>
        <meta
          name="description"
          content="Read Routes.Design's terms and conditions to understand how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="relative w-full h-full">
        <Navbar />

        <div className="flexy w-full h-full py-6 lg:pt-12 px-5 lg:px-12">
          <div className="itemsStart flex-col w-full mt-6 lg:mt-20 lg:mb-6">
            <div className="flexStart flex-col max-lg:mt-20">
              <h1 className="text-4xl font-monaBold">Routes.Design</h1>
              <h1 className="text-2xl font-monaBold">Terms & Conditions</h1>
            </div>

            <div className="flexStart flex-col space-y-3 lg:space-y-6 w-full lg:w-4/5 mt-8">
              <span className="text-sm">Last updated: 15 April 2024</span>
              <p className="text-sm">
                Pursuant to these Terms and Conditions,
                <Link target="_blank" to={'/'}>
                  <b> Routes.Design </b>
                </Link>
                Ltd, the company incorporated and acting under the laws of
                United Kingdom, registration number: 14717011, having its
                registered office at 128, City Road, London, EC1V 2NX, UNITED
                KINGDOM, renders the services specified in the invoice to the
                Customer.
              </p>

              <ul className="flex flex-col items-start justify-start list-decimal list-inside space-y-2 lg:space-y-6 mt-4 w-full">
                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Acceptance of Terms
                  </h4>
                  <p className="text-sm">
                    The Products are offered and provided subject to your
                    acceptance of the terms and conditions contained herein and
                    all other policies (including, without limitation,
                    <Link
                      target="_blank"
                      to={'https://routes.design/privacy-policy'}
                    >
                      <b> Privacy Policy, Refund Policy</b>){' '}
                    </Link>
                    and procedures that can be published from time to time by
                    <Link target="_blank" to={'/'}>
                      <b> Routes.Design </b>
                    </Link>
                    Ltd. related to the Services, which shall be incorporated
                    herein by reference. By receiving and using the Services,
                    you agree to the
                    <Link
                      target="_blank"
                      to={'https://routes.design/terms-and-conditions'}
                    >
                      <b> Terms and Conditions </b>
                    </Link>
                    here in.
                  </p>
                </li>
                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">Changes</h4>
                  <p className="text-sm">
                    We may make changes to the Terms and Conditions and/ or our
                    policies and/ or procedures from time to time, in our sole
                    and absolute discretion. We will notify you of any changes
                    to the Terms and Conditions by posting the updated Terms and
                    Conditions on the website of
                    <Link target="_blank" to={'/'}>
                      <b> Routes.Design </b>
                    </Link>
                    Ltd
                    <Link
                      target="_blank"
                      href="https://routes.design/"
                      className="font-monaSemibold"
                    >
                      <b> https://routes.design/ </b>
                    </Link>
                    and we will revise the “Updated” date above. It is your
                    responsibility to review the Terms and Conditions frequently
                    and to remain informed of any changes to them. The
                    then-current version of the Terms and Conditions will
                    supersede all earlier versions. You agree that your
                    continued receipt and use of the services after such changes
                    have been published will constitute your acceptance of such
                    revised Terms and policies and/ or procedures (as
                    applicable).
                  </p>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">Definitions</h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>3.1. Contractor –</b>
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd, </b>
                      </Link>
                      the company incorporated and acting under the laws of
                      United Kingdom, registration number: 14717011, having its
                      registered office at 128, City Road, London, EC1V 2NX,
                      UNITED KINGDOM, rendering the Services.
                    </li>
                    <li className="text-sm">
                      <b>3.2. Customer – </b>
                      the legal entity or natural person ordering the Services
                      by signing an Invoice issued by the Contractor or filling
                      in the form for payment process.
                    </li>
                    <li className="text-sm">
                      <b>3.3. Agreement – </b>
                      the agreement between the Contractor and the Customer for
                      the rendering of services in accordance with these Terms
                      and Conditions and an Invoice.
                    </li>
                    <li className="text-sm">
                      <b>3.4. Services – </b>
                      the monthly subscriptions (applicable
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      monthly plans) that are described in website
                      <Link
                        target="_blank"
                        to="https://routes.design/"
                        className="font-monaSemibold"
                      >
                        <b> https://routes.design/ </b>
                      </Link>
                      and specified in the invoice (here in after the “Invoice”)
                      or upon invoicing the Customer through the paying agent.
                      <br />
                      Paying the monthly Services (applicable
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      monthly plans) for the first time the Customer have agreed
                      to be subscribed for monthly Services, which means that
                      every month Customer’s card will be debited in amount of
                      monthly services fee, specified on website.
                      <Link
                        target="_blank"
                        to="https://routes.design/"
                        className="font-monaSemibold"
                      >
                        <b> https://routes.design/ </b>
                      </Link>
                      after that the Customer can receive the monthly Services.
                      The Customer can reject the subscription by notify the
                      Contractor via email
                      <Link
                        target="_blank"
                        to="mailo:support@routes.design"
                        className="font-monaSemibold"
                      >
                        <b> support@routes.design </b>
                      </Link>
                      or sending a message in Trello not less than 3 calendar
                      days before the renewal cycle.
                    </li>

                    <li className="text-sm">
                      <b>3.5. Additional Services – </b>
                      services that are not included in
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      monthly plans, are ordered by the Customer additionally or
                      separately, and specified in the invoice issued by the
                      Contractor.
                    </li>
                    <li className="text-sm">
                      <b>3.6. Party to the Agreement – </b>
                      individually referred to as the Contractor or the
                      Customer.
                    </li>
                    <li className="text-sm">
                      <b>3.7. Parties to the Agreement – </b>
                      jointly referred to as the Contractor and the Customer.
                    </li>
                    <li className="text-sm">
                      <b>3.8. Business Day: </b>
                      3.8. Business Day: a day other than a Saturday, Sunday or
                      public holiday in England, when banks in London are open
                      for business.
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Procedure for the entering into force of the Agreement
                    <Link target="_blank" to={'/'}>
                      <b> Routes.Design </b>
                    </Link>
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>4.1. </b> In the Terms and Conditions hereunder, the
                      Contractor undertakes an obligation to render Services
                      according to clauses 3.4. and 3.5. of the Terms and
                      Conditions and shall perform it subject to each Customer
                      who applied to the Contractor for rendering services. The
                      publication of the text of the Terms and Conditions on the
                      website
                      <Link
                        target="_blank"
                        to="https://routes.design/"
                        className="font-monaSemibold"
                      >
                        <b> https://routes.design/ </b>
                      </Link>
                      at or presenting it to the Customer in any other manner
                      shall constitute an offer by the Contractor to the
                      Customer to enter into the Agreement on terms and
                      conditions, specified herein.
                    </li>
                    <li className="text-sm">
                      <b>4.2. </b> The Agreement shall be deemed to be entered
                      into on acceptance of the offer by the Customer. The
                      acceptance of the offer from Customer side shall be deemed
                      to be an advance payment of 100% of the value of the
                      Services/Additional Services as specified in the Invoice
                      issued by the Contractor or issued through the paying
                      agent, unless otherwise agreed by the Parties in writing.
                    </li>

                    <li className="text-sm">
                      <b>4.3. </b> By accepting the offer, the Customer fully
                      agrees to all the provisions of Terms and conditions,
                      Privacy Policy, Refund Policy without any waivers,
                      exclusions or disclaimers.
                    </li>
                    <li className="text-sm">
                      <b>4.4. </b> The Terms and conditions are not required to
                      be drawn up on paper and signed with a handwritten
                      signature.
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Scope of the Agreement
                    <Link target="_blank" to={'/'}>
                      <b> Routes.Design </b>
                    </Link>
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>5.1.</b> Use of Services and Availability.
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      Ltd gives a right, in its sole and absolute discretion, to
                      use of the Services/Additional Services to anyone in
                      accordance with the clause 3.2. of the Terms and
                      Сonditions and for any reason based on the legal grounds.
                    </li>
                    <li className="text-sm">
                      <b>5.2.</b> The subject matter of the Agreement shall be
                      the rendering of the Services/Additional Services that are
                      specified in the Invoice issued by the Contractor or upon
                      invoicing the Customer through the paying agent.
                    </li>
                    <li className="text-sm">
                      <b>5.3.</b> The Contractor shall be entitled to engage the
                      third parties to provide the Services/Additional Services
                      to the Customer.
                    </li>
                    <li className="text-sm">
                      <b>5.4.</b> The key points about the Services/Additional
                      Services can be added to the Invoice issued by the
                      Contracto.
                    </li>
                    <li className="text-sm">
                      <b>5.5.</b> Every kind of service into the
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      plan is rendered separately one by one, based under the
                      receipt of tasks from the Customer.
                    </li>
                    <li className="text-sm">
                      <b>5.6.</b> The Contractor is rendering
                      Services/Additional services during business days only and
                      in working time 10:00 am – 6:00 pm GMT+2. The Contractor
                      should notify the Customer about the local public holidays
                      not less than 3 days before the public holidays
                    </li>
                    <li className="text-sm">
                      <b>5.7.</b> The Contractor communicates with the Customer
                      via the collaboration work system Trello (hereinafter the
                      «Trello»), where the Customer appoints tasks, sets all
                      requirements and transfers all particular information for
                      services rendering.
                      <br />
                      For getting Services the Customer will granted with the
                      access to Trello. The Customer should provide a valid
                      email address for each person from Customer’s side who
                      will authorized for Trello access. The Customer may use
                      the Services for any number of projects that the Customer
                      has subscribed for under the applicable
                      <Link
                        href="https://routes.design/"
                        className="font-monaSemibold"
                      >
                        <b> https://routes.design/ </b>
                      </Link>
                      product plan. While the Contractor accepts unlimited
                      requests and revisions, our output volume depends on many
                      factors, namely depending on the total request volume and
                      complexity. The Contractor will do the best to work with
                      the Customer to accommodate any priority items and
                      timelines, but the Contractor suggests that the Customer
                      do not use Services for time-sensitive projects.
                    </li>
                    <li className="text-sm">
                      <b>5.8.</b> All results of rendering services will located
                      in Trello. During 1 month from the date of rendered
                      services, the Customer can download all results, after a
                      month the Contractor can delete all materials from Trello.
                      The Contractor does the best to minimize any mistakes.
                      However, due to the nature of creative design, the
                      Contractor cannot guarantee all files delivered will be
                      100% error-free. When the Contractor delivers a file to
                      the Customer, the Customer agrees to review and proof all
                      files for any errors or omissions and notify the
                      Contractor if any changes or corrections are needed within
                      2 (two) days of receipt. The Contractor will do the best
                      to rush edits to correct any mistakes that the Customer
                      notifies about during 2 (two) calendar days. If the
                      Customer notifies of any errors after that time period,
                      the Contractor are not required to but intend to try to
                      work with the Customer to make corrections.5.8. Under the
                      Customer’s request sending not later than 1 month after
                      services provided, the Contractor should transfer all
                      original files to the Customer.
                    </li>
                    <li className="text-sm">
                      <b>5.9. </b>The time of the Contractor’s response to the
                      Customer’s request in the Trello workspace should not
                      exceed 4 hours during the working hours 10:00 am – 6:00 pm
                      GMT+2. The Project manager is the person who is
                      responsible for reply to the Customer timely and take part
                      in meeting with the Customer when found appropriate.
                    </li>
                    <li className="text-sm">
                      <b>5.10.</b> The deadlines for any tasks should be agreed
                      with the responsible person of the Contractor. If the
                      deadlines are over a month or the Contractor will not
                      execute the task timely due to additional Customer’s
                      requirements or lack of acceptance of services by the
                      Customer, the duration of services will be prolonged to
                      the next month and the Customer should pay a monthly
                      services fee. The Contractor can provide the voiceover
                      services as Additional Services. In that case the
                      Contractor can appoint in his discretion the executor for
                      voiceover services without approving from the Customer’s
                      side.
                    </li>
                    <li className="text-sm">
                      <b>5.11.</b> The Client can book the Services with the
                      list of designers by making 100 % prepayment not less than
                      14 calendar days before the starting of the Services.
                    </li>
                    <li className="text-sm">
                      <b>5.12.</b> Paying the monthly Services (applicable
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      monthly product plans) for the first time the Customer
                      have agreed to be subscribed for monthly Services, which
                      means that every month Customer’s card will be debited in
                      amount of monthly services fee, specified on website
                      <Link target="_blank" to={'https://routes.design'}>
                        <b> https://routes.design </b>
                      </Link>
                      after that the Customer can receive the monthly Services.
                      The Customer can reject the subscription by notify the
                      Contractor via email
                      <Link
                        target="_blank"
                        to="mailto:contact@routes.design"
                        className="font-monaSemibold"
                      >
                        <b> contact@routes.design </b>
                      </Link>
                      or sending a message in Trello not less than 3 calendar
                      days before the renewal cycle.
                    </li>
                    <li className="text-sm">
                      <b>5.14.</b> Pausing the subscription will not affect the
                      automatic renewal process of the subscription agreement.
                      Should the Customer choose to temporarily pause their
                      subscription, this action does not alter or extend the
                      pre-determined renewal date of the subscription. Rather,
                      the duration for which the Customer’s subscription is
                      paused will be compensated by adding an equivalent number
                      of days to the final month of the current subscription
                      period. This ensures that while the Customer may pause the
                      service, the continuity and renewal cycle of the
                      subscription remains unaffected.
                    </li>
                    <li className="text-sm">
                      <b>5.15.</b> The Contractor agrees that the allocated
                      resources for design-related tasks shall not exceed four
                      hours per day for any monthly package provided. This
                      allocation is subject to adjustment based on mutual
                      agreement between the Contractor and the Customer.
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Rights and Obligations of the Parties
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>6.1.</b> The Contractor is entitled to:
                    </li>
                    <li className="text-sm">
                      <b>6.1.1.</b> refuse following the Customer’s instructions
                      for the rendering of services if fulfilment thereof leads
                      to a breach of the current legislation of United Kingdom,
                      or the legislation of the countries within whose territory
                      the services are rendered.
                    </li>
                    <li className="text-sm">
                      <b>6.1.2.</b> suspend or terminate the provision of
                      services under the Agreement where the Customer fails to
                      fulfil its obligations thereof.
                    </li>
                    <li className="text-sm">
                      <b>6.1.3.</b> The Contractor may unilaterally refuse to
                      perform the Agreement by notifying the Customer at least
                      10 (ten) calendar days before the date of termination of
                      the Agreement, and at the same time reimburse the Customer
                      for the value of the services paid but not delivered.
                    </li>
                    <li className="text-sm">
                      <b>6.2.</b> The Contractor is obliged to:
                    </li>
                    <li className="text-sm">
                      <b>6.2.1. </b>render the services to the Customer in the
                      extent, at the time and within the period specified in the
                      Invoice issued by the Contractor and accepted by the
                      Customer, subject to payment in full and subject to full
                      compliance by the Customer with all the requirements of
                      this Agreement.
                    </li>
                    <p className="text-sm">
                      <b>6.2.2. </b>ensure the confidentiality of information
                      provided by the Customer.
                    </p>
                    <li className="text-sm">
                      6.3. The Customer is entitled to:
                    </li>
                    <li className="text-sm">
                      <b>6.3.1. </b>demand efficient provision of the services
                      from the Contractor.
                    </li>
                    <li className="text-sm">
                      <b>6.3.2. </b>require a refund from the Contractor within
                      7 days from the day of the payment. After this 7-day
                      period, the Contractor does not make a refund. The
                      Contractor may deny the refund request if, at his
                      discretion, evidence of fraud, refund abuse, resale of the
                      Contractor’s services to the third parties or other
                      manipulative actions is found. The Contractor may deny a
                      refund request if a task was accepted or revised by the
                      Customer. After the Customer will require a refund, he
                      loses the right to use any result of the services. The
                      availability of a 7-day money-back guarantee is not
                      applicable if a discount has been provided to the
                      Customer.
                    </li>
                    <li className="text-sm">
                      <b>6.3.3. </b>The Customer may unilaterally refuse to
                      perform the Agreement by notifying the Contractor at least
                      10 (ten) calendar days before the date of termination. In
                      the event of a unilateral refusal by a Customer (the legal
                      entity) of the performance of the Agreement after the
                      commencement of the performance of the Service by the
                      Contractor, the Contractor shall deduct a fine equal to
                      the value of the Services paid for but not rendered due to
                      the Customer’s rejection of the Agreement.
                    </li>
                    <li className="text-sm">
                      6.4. The Customer is obliged to:
                    </li>
                    <li className="text-sm">
                      <b>6.4.1. </b>pay the Contractor for the services as set
                      out in the Invoice.
                    </li>
                    <li className="text-sm">
                      <b>6.4.2. </b>provide the Contractor with the information
                      required for the provision of the services at the
                      Contractor’s request.
                    </li>
                    <li className="text-sm">
                      <b>6.4.3. </b>avoid actions directed at disrupting the
                      correct operation of the software and computer software of
                      the Contractor and undermining network security.
                    </li>
                    <li className="text-sm">
                      <b>6.4.4. </b>ensure the confidentiality of information
                      obtained under these Terms and Conditions or provided by
                      the Contractor.
                    </li>
                    <li className="text-sm">
                      <b>6.5. </b>The Parties shall be liable for the failure to
                      perform or improper performance of their obligations under
                      these Terms and Conditions in accordance with the laws of
                      United Kingdom.
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Payment for the Services
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>7.1. </b>The services fee is approved by the Contractor
                      and is based on the Contractor’s costs and amounts to:
                    </li>
                    <li className="text-sm">
                      <b>7.1.1. </b>stated amount in the Contractor’s price
                      list/plan posted on the Website
                      <Link target="_blank" to={'https://routes.design'}>
                        <b> https://routes.design </b>
                      </Link>
                      or
                    </li>
                    <li className="text-sm">
                      <b>7.1.2. </b>agreed amount by the Parties via e-mail,
                      messenger (Telegram, Slack, WhatsApp), or online chat on
                      the Website of Routes.Design Ltd.
                      <Link target="_blank" to={'https://routes.design'}>
                        <b> https://routes.design </b>
                      </Link>
                    </li>
                    <li className="text-sm">
                      <b>7.2. </b>The payment for the Services shall be made on
                      a 100% prepayment basis by debit or credit card under the
                      Invoice issued by the Contractor/ or issued through the
                      paying agent. The payment for the Additional Services
                      shall be made on a 100% prepayment basis by non-cash bank
                      transfer based on the payment order / by transfer of funds
                      to the Contractor’s current account online / by
                      transferring cryptocurrencies on the Contractor’s account
                      (wallet) under the Invoice issued by the Contractor/ by
                      debit or credit card.
                    </li>
                    <li className="text-sm">
                      <b>7.3. </b>The services shall be deemed to be paid from
                      the moment the money is received in the Contractor’s
                      account / cryptocurrencies in the Contractor’s account
                      (wallet).
                    </li>
                    <li className="text-sm">
                      <b>7.4. </b>Paying the monthly Services (applicable
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design </b>
                      </Link>
                      monthly product plans) for the first time the Customer
                      have agreed to be subscribed for monthly Services, which
                      means that every month Customer’s card will be debited in
                      amount of monthly services fee, specified on website
                      <Link target="_blank" to={'https://routes.design'}>
                        <b> https://routes.design </b>
                      </Link>
                      , after that the Customer can receive the monthly
                      Services. The Customer can reject the subscription by
                      notify the Contractor via email
                      <Link
                        to="mailto:contact@routes.design"
                        className="font-font-monaSemibold"
                      >
                        <b> contact@routes.design </b>
                      </Link>
                      or sending a message in Trello not less than 3 calendar
                      days before the subscription termination.
                    </li>
                    <li className="text-sm">
                      <b>7.5. </b>Customer Onboarding Additional Days Clause:
                      During the term of the 30-day subscription, any working
                      days dedicated to Customer onboarding activities shall be
                      considered as an extension of the subscription period.
                      These additional days will be added to the last month of
                      the Customer’s subscription, ensuring that the Customer
                      receives the full value of the subscription. However, that
                      payment for the subscription will continue to be processed
                      automatically after the initial 30 days.
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Service Acceptance Procedure
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>8.1. </b>The fulfillment of the services under this
                      Agreement shall be confirmed by a Service delivery report
                      which shall be drawn up and signed by the Contractor
                      unilaterally
                    </li>
                    <li className="text-sm">
                      <b>8.2. </b>The services shall be deemed duly and fully
                      rendered if within five (5) business days from the expiry
                      date of the services, the Contractor has not received any
                      written complaints from the Customer about the quality and
                      scope of the services rendered.
                    </li>
                    <li className="text-sm">
                      <b>8.3. </b>All exclusive rights to the results of
                      services and intellectual property created by the
                      Contractor during the execution of the Agreement are
                      transferred from the Contractor to the Customer at the
                      moment of Service delivery without any additional
                      documents. The Customer has the right to use results of
                      services without mentioning the author’s personal name.
                    </li>
                    <li className="text-sm">
                      <b>8.4. </b>
                      The Contractor reserves the right to use results of
                      Services, and the Customer’s name and logo as part of
                      Contractor’s portfolio on Contractor’s website or other
                      digital media, print samples, the right to display the
                      result of Services on social channels, in competitions, at
                      any festivals or shows.
                    </li>
                    <li className="text-sm">
                      <b>8.5. </b>
                      Portfolio Rights You hereby grant us a limited,
                      nonexclusive, royalty-free worldwide license to use,
                      publish, and display any deliverables that we prepare or
                      develop in connection with the services as well as
                      Customer’s name and logo for purpose of marketing and
                      advertising (the “Portfolio Rights License”).
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Disclaimer of Warranties and Limitation of Liability
                    <Link target="_blank" to="https://routes.design/">
                      <b> Routes.Design</b>
                    </Link>
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>9.1. Disclaimer of Warranties </b> the services, are
                      provided by
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      to you on an “as is,” basis, except as expressly set forth
                      in the terms.
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      does not make any other warranty of any kind whether
                      express, statutory and/ or implied, including but not
                      limited to any implied warranties of title,
                      non-infringement, merchantability, and/ or fitness for a
                      particular purpose, accuracy, and from course of dealing,
                      all of which
                      <Link target="_blank" to={'https://routes.agency/'}>
                        <b> Routes Digital Ltd </b>
                      </Link>
                      expressly disclaims. without limiting the foregoing,
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      makes no warranty that (i) the services will meet your
                      requirements and/ or will be constantly available,
                      uninterrupted, timely, secure and/ or error-free; (ii) the
                      results that may be obtained from the use of the services
                      will be effective, accurate and/ or reliable; (iii)
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      will be liable and/ or otherwise responsible for any
                      failure and/ or delay in updating the services and/ or any
                      content. no advice and/ or information, whether oral and/
                      or written, obtained by you from
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      and/ or through your use of the services shall create any
                      warranty not expressly stated in the terms and conditions.
                      if applicable law requires any warranties with respect to
                      the services, all such warranties are limited in duration
                      to sixty (60) days from the date of the beginning of the
                      service.
                    </li>
                    <li className="text-sm">
                      <b>9.2. limitation of liability.</b> in no event will
                      <Link target="_blank" to={'https://routes.agency/'}>
                        <b> Routes Digital Ltd, </b>
                      </Link>
                      its officers, directors, employees, partners, and/ or
                      subcontractors be liable to you and/ or anyone else for
                      (i) any special, incidental, indirect, consequential and/
                      or punitive damages whatsoever, including those resulting
                      from loss of use, data and/ or profits, whether or not
                      foreseeable, regardless of the form of action, whether in
                      contract, tort (including negligence), warranty, strict
                      liability, and/ or any other legal or equitable theory,
                      even if
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      has been advised of the possibility of such damages in
                      advance.
                    </li>
                  </ol>
                </li>

                <li className="flex flex-col space-y-1 my-2">
                  <h4 className="font-monaSemibold text-lg">
                    Disclaimer of Warranties and Limitation of Liability
                    <Link target="_blank" to="https://routes.design/">
                      <b> Routes.Design </b>
                    </Link>
                  </h4>
                  <ol className="flex flex-col space-y-1 list-outside list-disc ml-4">
                    <li className="text-sm">
                      <b>10.1. Entire Agreement; </b>Conflict Unless otherwise
                      agreed to by
                      <Link target="_blank" to="https://routes.design/">
                        <b> Routes.Design </b>
                      </Link>
                      and you in writing, the Terms and Conditions (including,
                      without limitation, the terms and conditions set forth
                      herein, Privacy Policy, Refund Policy, and other policies
                      as can be described above) constitutes the entire
                      agreement between
                      <Link target="_blank" to="https://routes.design/">
                        <b> Routes.Design </b>
                      </Link>
                      and you concerning the subject matter hereof.
                    </li>
                    <li className="text-sm">
                      <b>10.2. Entire Agreement; </b>These Terms and Conditions
                      and any use of the Services will be governed by the laws
                      of United Kingdom. The Parties shall be liable for the
                      failure to perform or improper performance of their
                      obligations under these Terms and Conditions in accordance
                      with the law of United Kingdom.
                    </li>
                    <li className="text-sm">
                      <b>10.3. Jurisdiction. </b>The Parties shall make every
                      effort to resolve any disputes through negotiations. If no
                      agreement is reached as a result of the negotiations, the
                      disputes shall be settled in a complaint (pre-trial)
                      procedure.
                      <br />
                      Any claims and notices shall be sent in writing by post
                      with notice of delivery. The Party that received the claim
                      undertakes to review and respond to such a claim within 20
                      (twenty) business days of its receipt. If a claim is
                      rejected, in whole or in part, or the submitting Party
                      does not receive a response within the specified time for
                      its consideration, the submitting Party may apply to the
                      proper Courts of London. Each party irrevocably agrees
                      that the Courts of London shall have exclusive
                      jurisdiction to settle any dispute or claim arising out of
                      or in connection with the Terms and Conditions.
                      <br />
                      The parties agree that any cause of action or claim
                      arising out of or relating to these terms and conditions
                      must be commenced within one (1) year after the cause of
                      action accrues; otherwise, such cause of action or claim
                      is permanently barred.
                    </li>
                    <li className="text-sm">
                      <b>10.4. Electronic Signatures. </b> Documents executed
                      and transmitted electronically as well as documents signed
                      by electronic signatures or using the systems Docusign,
                      PandaDoc or with a facsimile signature (reproduced
                      mechanically using clichés) shall be deemed original for
                      purposes of these Terms and Conditions and all matters
                      related thereto. Documents with such scanned and
                      electronic signatures, signature through the systems
                      Docusign, PandaDoc or with facsimile signature (reproduced
                      mechanically using clichés) are having the same legal
                      effect as documents with original signatures.
                    </li>
                    <li className="text-sm">
                      <b>10.5. </b>For communication and transmission of
                      documents and information with legal effect, the
                      Contractor will use the following e-mail address:
                      <Link
                        target="_blank"
                        to="mailto:support@routes.design"
                        className="font-monaSemibold"
                      >
                        <b> support@routes.design </b>
                      </Link>
                      the Customer will use e-mail address specified in invoice
                      issued by the Contractor or by the paying agent. Other
                      e-mail addresses are not permitted. The Contractor replies
                      on the request of the Customer during 10 business days via
                      <Link
                        target="_blank"
                        to="mailto:support@routes.design"
                        className="font-monaSemibold"
                      >
                        <b> support@routes.design </b>
                      </Link>
                    </li>
                    <li className="text-sm">
                      <b>10.6. Reference. </b>You agree that
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd, </b>
                      </Link>
                      its subcontractors and affiliates may reference you as our
                      customer, and that
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      may reasonably use, on a royalty-free basis, your
                      trademark and/or logo for such purpose.
                    </li>
                    <li className="text-sm">
                      <b>10.7. Severability. </b> If any part of the Terms and
                      Conditions is held invalid or unenforceable, that part
                      will be construed to reflect the parties’ original intent,
                      and the remaining portions will remain in full force and
                      effect. A waiver by either party of any term or condition
                      of the Terms and Conditions and/or any breach thereof, in
                      any one instance, will not waive such term and/ or
                      condition or any subsequent breach thereof.
                    </li>
                    <li className="text-sm">
                      <b>10.8. Assignment. </b>You may not assign your rights
                      under the Terms and Conditions to any third party without
                      express prior written consent of
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd. </b>
                      </Link>
                      <br />
                      Routes.Design Ltd may assign its rights under the Terms
                      and Condition to the third party. In that case, these
                      Terms and Conditions will be binding upon and will inure
                      to the benefit of the third party, their successors and
                      permitted assignees.
                    </li>
                    <li className="text-sm">
                      <b>10.9. Force Majeure. </b> Except for payment
                      obligations, neither
                      <Link target="_blank" to={'/'}>
                        <b> Routes.Design Ltd </b>
                      </Link>
                      nor the Customer will be liable by reason of any failure
                      or delay in the performance of its obligations on account
                      of events beyond the reasonable control of a party, which
                      may include a failure by a third-party hosting provider or
                      utility provider, shortages, riots, pandemics, fires, acts
                      of God, war, strikes, terrorism, and governmental action,
                      natural disasters, military actions, actions of third
                      parties, the entry into force of laws, regulations and
                      directives of State bodies and organizations that directly
                      or indirectly prohibit rendering the Services, other
                      circumstances independent of the will of the Contractor or
                      the Customer. A Party that has defaulted on an obligation
                      under the Terms and Conditions due to force majeure shall
                      promptly notify the other Party. Such a Party is obliged
                      to prove the existence of force majeure and its effect on
                      the impossibility of proper performance of obligations
                      under these Terms and Conditions.
                    </li>
                    <li className="text-sm">
                      <b>10.10. Survival. </b> All provisions of the Terms and
                      Conditions by their nature should survive termination,
                      including, without limitation, warranty disclaimers,
                      indemnity provisions and limitations of liability.
                    </li>
                    <li className="text-sm">
                      <b>10.11. No Waiver. </b> No failure or delay on the part
                      of either Party in exercising any power, right or remedy
                      under these Terms and Conditions will operate as a waiver
                      thereof, nor will any single or partial exercise of any
                      such power, right or remedy preclude any other or further
                      exercise thereof or the exercise of any other power, right
                      or remedy.
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;
