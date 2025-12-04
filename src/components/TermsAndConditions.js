import React from "react";
import Layout from "./Layout";
import { Box, Typography, Container, Link } from "@mui/material";
const bulletListStyle = {
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
  color: '#000',
};
const numberedListStyle = {
  listStyleType: 'none'// Match Typography variant="h6"
};
const TermsAndConditions = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "#f5f7fa", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}>
            Terms and Conditions of Use
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            Green Junction Technologies Pvt. Ltd. (“ChargingAdda”) owns and operates all ChargingAdda products,
             which will be referred to as "we," "our," and "us" Please read the following terms and conditions carefully as it sets
            out the terms of a legally binding agreement between you (expression includes “Company” "you" or "your") and Green Junction Technologies Pvt. Ltd. (“ChargingAdda”). Where you have been provided access to the Portal by your employer, you confirm that you have the authority to bind your employer as well as yourself to these Terms.
           </Typography>

          <ol style={numberedListStyle}>
            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>1. Introduction</Typography>
              <Typography>
  This following sets out the terms and conditions on which you may use the content on{" "}
  <Link href="https://www.chargingadda.com" target="_blank" rel="noopener noreferrer">
    www.chargingadda.com
  </Link>{" "}
  website, mobile browser site, our mobile applications and other digital publishing services owned by us, all the relevant services, product or documentation thereof herein will be referred to as “Services”.
</Typography></li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>2. Sharing your personal information</Typography>
              <Typography>
We welcome users to register on our digital platforms to avail services. 
Our services may be subject to change in the future. 
All changes will be appended in the terms and conditions page and communicated to existing users by email or appropriate mode. 
Our services apply for individual and multiple subscribers for the same account as pre-decided in the Sales Order. 
Subscription rates may vary for different subscriptions. We may in exceptional circumstances cease to provide our services. We will give you at least 7 days notice of this, if possible.
 If we do so, then we will have no further obligation to you. </Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>3. Privacy Policy and Registration</Typography>
              <Typography>
               All information received by us from your registration on chargingadda.com or our other digital products will be used by us in accordance with our Privacy Policy. 
               Kindly read the below mentioned details. On registration, we expect you to provide us with an accurate and complete information of the compulsory fields. 
               We also expect you to keep the information secure, specifically access passwords and payment information. Kindly update the information periodically to keep your account relevant. 
               We will rely on any information you provide to us. On registration, you will choose a user name and password ("ID"). 
               You are not allowed to share your ID or give access to your account to anyone else.</Typography>
               <Typography>Upon knowledge of any activity violative of these Terms, we may cancel or suspend your access to our services.
You are responsible for all the use of our service made available to you and for preventing unauthorised use of your ID.
 If you believe there has been any breach of security such as the disclosure, theft or unauthorised use of your ID or any payment information, you must notify us immediately by e-mailing us at <Link href="mailto:legal@chargingadda.com">legal@chargingadda.com</Link> .

We recommend that you do not select an obvious user password (such as your name) and that you change it regularly.
</Typography>
<Typography>If you provide us with an email address that will result in any messages
     we may send you being sent to you via a network or device operated or owned by a third party
      (e.g. your employer) then you promise that you are entitled to receive those messages. 
      To ensure email's land in your inbox, you will add our email id to your safe list. 
      You also agree that we may stop sending messages to you without notifying you.</Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>4. Important - Kindly note</Typography>
              <ul style={bulletListStyle}>
                <li>When you participate and choose to subscribe to joint service offered by us with our partners; 
                    your email id, access password and entered personal information will be shared with our partner 
                    brand via an encrypted server to server protocol. This sharing is to facilitate your seamless access
                     across the partner brand's platform. Once you login to the partner brand's platform, 
                    specific terms and privacy policies of the partner brand (mentioned on its website) will apply
</li>
                <li>You are advised to study the offer before you subscribe. Merely subscribing to such a joint 
                    service does not make you eligible to gain services of our brand partner.
                     We do not take responsibility of providing you with an access to the partner service.</li>
                <li>When you subscribe to joint services; specific brands would ask you to share personal or private 
                    information in lieu of a value that the brand extends. By participating in such offers you implicitly
                     and by confirming the terms of the offer you agree to share your registration information and personal
                      data with the concerned brand. The brand or its associates may use this personal information to contact
                       you with their promotional offers. Further by participating to such offers your will be additionally
                        governed by the privacy policy and terms and conditions of the concerned brand.
                     You are advised to go through them carefully before you decide to opt in.</li>
                <li>As a registered customer or user of our services, you may choose to use our "Remember me" log
                     in feature that enables you to be logged in automatically to our portal whenever you visit us without 
                     having to manually log in each time. We recommend that you do not enable this feature on any electronic 
                     device that is or may be used by anyone other than you in order to prevent unauthorized access by third
                      parties to both your subscription details and features of our services personal to you.</li>
              </ul>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>5. Types of services</Typography>
              <Typography>
               Services may differ from country to country and the device from which you subscribe. 
               Subscription cost may also vary time to time.</Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>6. Contract formation</Typography>
              <Typography>
               We will try to process your service request but do not guarantee that your service request will be 
               complete by any specified time. By submitting your payment and other service request details, 
               you are making an offer to us. Your offer will only be accepted by us and a contract formed when we have 
               successfully verified your payment details and email address, at which point we will provide you with access to your service. 
               We reserve the right to reject any offer in our discretion, for any or no reason.</Typography>
               <Typography>We may partner with third parties to offer bundled services, under which the payment for both the services will be collected by us. 
                We will endeavor to provide you a seamless access to all such third parties service with a single one point access. 
                There could be a gap in this seamless access due to a reason or any factors beyond the reasonable control of REVOS.
                 In such cases the contract will be formed once the access to the partner services are restored.</Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>7. Payment details</Typography>
              <Typography>
                When you purchase a service, you must provide us with complete and accurate payment information.
                 By submitting payment details you promise that you are entitled to purchase a service using those payment details.
                  If we do not receive payment authorization or any authorization is subsequently cancelled, we may immediately terminate or suspend your access to your service. 
                  In suspicious circumstances we may contact the issuing bank/payment provider and/or law enforcement authorities or other appropriate third parties.
                   If you are entitled to a refund under these terms and conditions we will credit that refund to the card or other payment method you used to submit payment, unless it has expired in which case we will contact you.
We may use the services of quality third party payment service providers to process your payment in our wallet which is governed by the Supplementary Terms of Payment mentioned on our website.
              </Typography>
            </li>

            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>8.	Pricing and Currency</Typography>
            <Typography>The currency in which your service request is payable will be specified during the order process, depending on the service and your country of residence. 
                Eligibility for any discounts is ascertained at the time you request and cannot be changed during the term of your subscription.
                 We will always tell you in advance of any increase in the price of your service and offer you an opportunity to cancel it if you do not wish to pay the new price.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>9. Taxes</Typography>
            <Typography>Services fall under the purview of Service Tax as per the current indirect taxation policy, Government of India. 
                Taxes are applicable for availing services for customers based in India and outside the country.
                 Unless otherwise indicated, prices stated on our website are exclusive of applicable Service Tax, any applicable value added tax (VAT) or other sales taxes.</Typography>
</li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>10. Pricing errors</Typography>
            <Typography>If we incorrectly state a price to you whether online or otherwise, we are not obliged to provide you with a service at that price, even if
                 we have mistakenly accepted your offer to buy a service at that price, and we reserve the right to subsequently notify you of any pricing error.
                  If we do this, you may cancel the service request without any obligation to us and we will refund you any money you have paid us in full, 
                  or you may pay the correct price. If you refuse to exercise either of these choices then we may cancel your service request and will refund you any money you have paid us in full. 
                We will always act in good faith in determining whether a genuine pricing error has occurred.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>11. Other costs</Typography>
            <Typography>In addition to any service fees you pay, you are responsible for paying any third party service charges that you may incur by 
                using the services available on it. For example, if you use any of online services then your network operator may charge you for 
                data or messaging services.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>12. Subscription Period of Service, Renewal and Cancellation</Typography>
            <Typography>Please read these terms and conditions of use ('Terms and Conditions') carefully before purchasing or availing the products and services (“Products”) of Green Junction
                 Technologies Private Limited (“Company”). These Terms and Conditions govern your (“you”, “your” and “yourself”) purchase of Company's Products. 
                 Purchasing the Company's Products indicates that you have read, understood, accepted and agreed to be bound by these Terms and Conditions. 
                 Thank you for purchasing the Products from the Company. Notwithstanding anything to the contrary contained in any documents including purchase order, 
                 your purchase of the Products of the Company shall be governed by the following terms:</Typography>
                 <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>Renewals</Typography>
                 <Typography>If you chose to pay monthly, your subscription will continue until you tell us that you no longer wish to receive it, 
                    in which case you will stop paying the monthly fees. We will notify you at least 7 days in advance of any changes to the price 
                    in your subscription that will apply upon next monthly renewal. Please visit the "How to cancel" section below for details of 
                    how to cancel your monthly subscription. Unless you notify us before the end of your chosen subscription period that you no longer 
                    wish to receive it, your subscription will renew for another period as applicable. We will charge the subscription using the same 
                    card or other payment method that you previously used</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>Cancellation Policy</Typography>
                 <Typography>For subscription of service by placing your order, you agree that we may start your subscription immediately 
                    upon our accepting your order. This means that you are not entitled to a refund if you change your mind after we have 
                    provided you with access to your subscription. Except as set out in the previous section, you do not have any right to 
                    cancel your subscription or any part of it until the end of your then current subscription period. Although you may notify 
                    us of your intention to cancel at any time, such notice will only take effect at the end of your then current subscription period,
                     and you will not receive a refund.</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>How to cancel?</Typography>
                 <Typography>You may notify us of your wish to cancel your subscription by contacting our Customer Services team at 
                    <Link href="mailto:support@chargingadda.com"> support@chargingadda.com</Link> .</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>Cancellation by us</Typography>
                 <Typography>We reserve the right to suspend or terminate your subscription if you breach these terms and conditions, with or without 
                    notice and without further obligation to you. We may also suspend or terminate your subscription if we are prevented from providing 
                    services to you by circumstances beyond our control. If we terminate your subscription for any reason and/or permanently cease to 
                    provide subscription services then, unless there are exceptional circumstances, we will provide you with a pro rata refund to your 
                    original source of transaction. This means that we will refund you with any amounts that you have paid us in advance that relate to any
                     remaining and unexpired period of your subscription.</Typography>
                 </li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>13. Platform Fee Adjustment</Typography>
            <Typography>ChargingAdda reserves the right to modify platform, service or payment processing fee at its sole discretion based on market conditions, 
                usage patterns, or service improvements. Any fee adjustments will be transparently reflected on the ChargingAdda platform. Continued use of the 
                platform or participation—whether for using or hosting charging services—after such changes will constitute acceptance of the updated fee structure.</Typography>
</li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>14. Third Party Sites and Services</Typography>
            <Typography>We may provide links to other Internet websites or online and mobile services provided by independent third parties, including websites of our partners, advertisers 
                and sponsors (what we call "Third Party Sites"), either directly or through frames. Third Party Sites also include co-branded with Green Junction and so include 
                Green Junction's trade marks.</Typography>
                <Typography sx={{ mt: 1 }}>It is your decision whether you purchase or use any third party products or services made available on or via Third Party Sites and our 
                    liability in that regard is none. Our Privacy Policy does not apply to Third Party Sites. Our online portals may contain advertising and sponsorship. 
                    Advertisers and sponsors are responsible for ensuring that material submitted for inclusion on our online portals comply with international and national law.
                     We are not responsible for any error or inaccuracy in advertising, incorrect links or sponsorship material.</Typography>
                     <Typography sx={{ mt: 1 }}>Copyright in any service that is made available by us belongs to us. Your use of the service is governed by the terms of any licence 
                        agreement that may accompany or be included with the service. Do not use any of the service unless you agree to such licence agreement. 
                        We are not responsible for any technical or other issues that may happen if you avail third party services.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>15. Our Liabilities towards You</Typography>
            <Typography>A summary of what this section means: this section is important and you should read it carefully. It makes clear to what extent, if any, we accept liability to
                 you for your use of our online portal or services or in respect of any third party products or services that we refer to or advertisements or any other link to on our 
                 online portals. If you are our customer or service subscriber, we limit our financial responsibility to you arising from your use of our online portals and/or the services 
                 you directly consume on our online portals to the price you paid for your subscription.</Typography>
                 <Typography sx={{ mt: 1 }}>In no circumstances do we accept responsibility for your use of Third Party Sites or services not limited to advertisements, 
                    links in respect of any Third Party Products. By Third Party Sites we mean websites, online or mobile services provided by third parties, including websites of advertisers and sponsors that may appear on our online portals.
                     By Third Party Products we mean products or services provided by third parties.</Typography>
                     <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>Nature and Limitation of content published on our online portal</Typography>
                 <Typography>All content published on our online portal (including any information we publish regarding Third Party Products) is only for your general information and 
                    is not intended to address your particular requirements. In particular, any content provided by us or third parties and distributed by us, does not constitute any
                     form of advice, recommendation, representation, endorsement or arrangement by us. It is not intended to be and should not be relied upon by you in making
                      (or refraining from making) any specific investment, purchase, sale or other decisions. Appropriate independent advice should be obtained before making any such decision, 
                      such as from a qualified expert. Any agreements, transactions or other arrangements made between you and any third party named on (or linked to from) our online portals are at 
                      your own responsibility and entered into at your own risk.</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>What we promise</Typography>
                 <Typography>We promise to develop and operate our services with reasonable skill and care and will use reasonable efforts to promptly remedy any faults of which we
                     are aware or made aware of.</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>What we do not promise</Typography>
                 <Typography>We do not provide any promises or warranties other than defined above. Our service is provided on an "as is" and "as available" basis. 
                    While we make the best efforts to put together accurate, complete and authentic information and services, we do not make any promises in respect 
                    of information and/or the services and functions available on or through our service or of the quality, completeness or accuracy of the information 
                    published on or linked to from our online portals other than as expressly stated above.</Typography>
                    <Typography sx={{ mt: 1 }}>The above disclaimers apply to your use of our service and online portals. Without limiting the above, we are not liable for matters 
                        beyond our reasonable control. We do not control third party communications networks (including mobile carrier communications, internet service provider etc.), 
                        the internet, acts of god or the acts of third parties.</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 550, mt: 2 }}>Our liability limitations</Typography>
                 <Typography>You agree that if we are in breach of these terms and conditions, we will only be responsible to you for any damages that you incur arising out of your use of our services 
                    (to the extent our liability is not otherwise excluded) as follows:
                    </Typography>
                    <Typography sx={{mt:1}}>If you incur any loss as a result of using our services outside the scope of these terms and conditions, we accept no liability towards you for this.
                        </Typography>
                        <Typography sx={{mt:1}}>You will be responsible for all claims, liabilities, damages, cost and expenses suffered or incurred as a
                             result of your breach of these terms and conditions.
                             </Typography>
                             <Typography sx={{mt:1}}>We will only be responsible for loss or damage you suffer which is the reasonably foreseeable result of our breach of a legal duty of care owed to you, 
                                or whatever we expressly accept in an exclusive and separate agreement with you.
                                </Typography>
                                <Typography sx={{mt:1}}>We will not be responsible to you for any loss or damage suffered by your business, such as lost data, lost profits or any business interruption.
                                    </Typography>
                                    <Typography sx={{mt:1}}>If you have a subscription to our service then you may terminate your subscription by writing to us at 
                                        <Link href="mailto:support@chargingadda.com"> support@chargingadda.com</Link> . 
                                        If we are unavailable or inaccessible to you for more than 5 business days in a 30 day period, as a result of the fault or failure of our part, 
                                        we will refund you any amount that you have paid to us in advance that relates to any period which was still to run on your subscription. 
                                        You may instead at your option receive a renewal to your subscription of service free-of-charge at the point of renewal.
                                        </Typography>
                                        <Typography sx={{mt:1}}>This limitations of liability apply for our benefit, our affiliates, and all of our respective officers, directors, employees, 
                                            agents or any company who we transfer our rights and obligations to in accordance with these terms and conditions.
                                            </Typography>
                                            <Typography sx={{mt:1}}>To the full extent permitted by law you acknowledge and agree that our third party content and information on third party service 
                                                have no liability whatsoever to you in respect of any of the information supplied to you as part of our services or on our online portals.
                                                </Typography>
                                                <Typography sx={{mt:1}}>Our liability will not be limited in the case of death or personal injury directly caused by our negligence in those 
                                                    countries where it is unlawful for us to seek to exclude such liability.
</Typography>
                     </li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>16. Choice of Law and Jurisdiction</Typography>
            <Typography>Irrespective of your jurisdiction, principal place of business and principal residence, these substantive terms and conditions will be subject to Indian law.
                 You agree that Indian law will apply without any regard to conflict of laws principle, to the extent permissible.
                 </Typography>
                 <Typography sx={{mt:1}}>However, if you are located by any means within the territorial limits of India, both you and we agree that the competent courts in Bengaluru, 
                    India will have exclusive jurisdiction. You agree that merely in order to evade competent courts in Bengaluru, India you will not state yourself to be located outside
                     the territorial limits of India. </Typography>
                     <Typography sx={{mt:1}}>If you are located outside the territorial limits of India, both you and we agree that the competent courts in Singapore will have exclusive jurisdiction.
</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>17. Dispute Resolution and Arbitration</Typography>
            <Typography variant="h6" sx={{ fontWeight: 550, mt: 1 }}>If you are located by any means within territorial limits of India</Typography>
            <Typography>In case of any dispute, arising under or in connection with this Agreement, both you and we agree to cooperate to resolve
                 the dispute by mediation between respective representatives. If both you and we fail to amicably settle the dispute by mediation
                  within thirty (30) days, then it shall exclusively be referred to arbitration to be conducted in accordance with the Arbitration 
                  and Conciliation Act, 1996 or any statutory modifications made thereof from time to time, by appointing a sole arbitrator mutually 
                  agreed upon by both you and us. The seat and venue for the arbitration shall be Bengaluru, India and the language used in arbitration shall be English.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>18. Miscellaneous</Typography>
            <Typography>You may not license or transfer any of your rights under these terms and conditions. We may transfer any of our rights or obligations under these terms and 
                conditions to any individual, organization or entity but if we do so we will ensure that any company/individual/entity to whom we transfer our rights or obligations 
                will continue to honour your rights under them. Any resultant changes to the terms and conditions will be intimated to you via email and updated on this website.</Typography></li>
            <Typography sx={{mt:1}}>If any provision of these terms and conditions is found to be invalid by any court having competent jurisdiction, the invalidity of that provision will not affect the 
                validity of the remaining provisions of these terms and conditions, which will remain in full force and effect.</Typography>
            <Typography sx={{mt: 1}}>Failure by either party to exercise any right or remedy under these terms and conditions does not constitute a waiver of that right or remedy. 
                Headings in these terms and conditions are for convenience only and will have no legal meaning or effect.</Typography>
            <Typography sx={{mt: 1}}>These terms and conditions constitute the entire agreement between you and us for your use of our online portals and our services. They supersede all previous communications,
                 representations and arrangements, either written or oral.</Typography>
                  <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>19. Content ownership</Typography>
            <Typography>All Content created and published on the digital platforms under the url {" "}
                <Link href="https://www.chargingadda.com" target="_blank" rel="noopener noreferrer">
    www.chargingadda.com
  </Link>{" "}
                 and online portals including but not limited to the mobile browser site, applications, 
                and its licensors own all intellectual property rights (including copyright and database rights). No intellectual property rights in any of the content are transferred to you while you 
                consume our services. "Green Junction" & “ChargingAdda” is a registered trade mark of GREEN JUNCTION TECHNOLOGIES PRIVATE LIMITED and you may not use it without prior written permission from us. 
                You are permitted to use the content on this platform only as set out in our Copyright Policy.</Typography>
</li>
<li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>20. Changes to Terms and Conditions</Typography>
            <Typography>We reserve the right, in our sole and absolute discretion to amend, delete, modify, vary, or supplement any of these Terms at any time and will endeavor to give
                 prior notice of seven days for such changes.</Typography>
</li>
          </ol>

          <Typography variant="h6" sx={{fontWeight: 600, mt: 4 }}>Contact Us:</Typography>
          <Typography>
            Please contact us using the email ID
            <Link href="mailto:support@chargingadda.com"> support@chargingadda.com</Link> . if you have any queries regarding this Privacy Policy.  </Typography>

          <Typography variant="body2" sx={{ textAlign: "center", mt: 6, color: "gray" }}>
            Last updated: August 6, 2025
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default TermsAndConditions;
