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
const PrivacyPolicy = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "#f5f7fa", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}>
            Privacy & Security Policy
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            Green Junction Technologies Pvt. Ltd. (“ChargingAdda”, "we", "us" or "our") respects your (expression includes “Company” "you" or "your") privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our digital platforms (expression includes our website or mobile application). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS OUR DIGITAL PLATFORMS.
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            While this Privacy Policy applies to all our services, we’ll also provide additional information about privacy related to particular services where necessary. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.
</Typography><Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, including those which may also collect and use data about you. We are not responsible for any of the data collected by any such third party.
          </Typography>

          <ol style={numberedListStyle}>
            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>1. Collection of your personal information</Typography>
              <Typography>
                We collect personal information that you provide directly, information about how you use our services and information from third party sources. We use this information to provide you with services, understand the way you use our services so we can improve and personalize your experience and to develop the most relevant apps, technologies, and content for our customers.
              </Typography>
              <Typography>
                We also use personal information to provide customized advertising relevant to you. Some instances when you may provide your personal information directly are as follows:
              </Typography>
              <ul style={bulletListStyle}>
                <li>When you create an account or register with us, we may ask for information such as your name, date of birth, your Pincode or email address.</li>
                <li>If you request for a service or product from us, we may ask for your name, address, contact information, preferences, interests and shipping and payment information to process your order.</li>
                <li>To provide responses when you contact our Customer Service, we may need information to verify your identify and the product you’re inquiring about.</li>
                <li>When you communicate with our Customer Service staff or others, your communications will be transmitted through our systems.</li>
                <li>Any additional items of "sensitive personal data or information," as defined by
the Information Technology (Reasonable Security Practices And Procedures
And Sensitive Personal Data Of Information) Rules, 2011, which were enacted
under the Information Technology Act of 2000.</li></ul>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>2. Sharing your personal information</Typography>
              <Typography>
               We may share your personal information with our affiliates, as well as with those who provide
services on our behalf. We may also share your personal information with trusted partner
companies, such as original equipment manufacturers (OEMs) or insurance companies, that
provide you with products and services that you request and information about products and
services you may be interested in. We share personal information with law enforcement
agencies when it’s required by law or to protect us and our users. </Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>3. Push Notifications</Typography>
              <Typography>
               We may request to send you push notifications for relevant information. If you wish to optout from receiving these types of communications, you may turn them off in your device's
settings.</Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>4. Collection of service-related information</Typography>
              <Typography>
                In addition to the information you directly provide, we will collect information about your use
of our services. We may collect, among other things:
              </Typography>
              <ul style={bulletListStyle}>
                <li>Product information: Your product model, product hardware information,
unique product identifications, serial number, sales code, software version,
your electronic device details, MAC address, IP address, cookies, pixels,
subscription information, operating system versions, and settings of the
devices you use to access Services.
</li>
                <li>Log information: Diagnostic, technical, error, and usage information such as the
time and duration of your use of services, search query terms when you enter
search terms into your device in connection with our particular service, and
any information stored in cookies that we have set on your devices. We utilize
the READ_CALL_LOG permission to display caller information (such as name
and number) on the connected bike cluster. Please note that we retain call
information and do not distribute it to external third parties.</li>
                <li>Location information: Your device’s GPS signal or information about nearby WiFi access points and cell towers that may be transmitted to us when you use
certain services and enable the Location function</li>
                <li>Voice information: Recordings of your voice that we make and store on our
servers when you contact our Customer Service team. Note that if we work
with a third-party service provider that provides customer services on our
behalf, this provider may receive and store your voice information in
accordance with the contract concluded between us and our trusted third
party service provider</li>
                <li>Session information: Your use of our services per session or your use of our
products.</li>
                <li>Viewing Information: Our digital platforms including mobile applications,
websites visited, and videos or content viewed on your devices and the amount
of time spent viewing them.
</li>
                <li>Other information about your use of third-party content offered through our
services or other information about you, your devices, or your use of our
services that you consent to send us.</li>
              </ul>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>5. Collection of Anonymized and Aggregated Data</Typography>
              <Typography>
                In case where we are legally or contractually bound not to collect the personal information or
service related information directly, we may collect such information based on extracts of such
information related to our service in aggregated and non-identifiable forms, for our legitimate
business interests, including for testing, development, controls and operations of our products
and services, and for commercializing such data, pursuant to the applicable law or contractual
obligation undertaken by us. </Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>6. Publicly or Commercially Available or Shared Information</Typography>
              <Typography>
               We sometimes gather publicly or commercially available information and combine this with
other information about you so that we can better understand your needs, interests, and
preferences. We also sometimes gather information about you when other people provide it
using our Services, such as offering our services to you or paying for you.</Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>7. Use of your data</Typography>
              <Typography>
                Having accurate information about you permits us to provide you with a smooth, efficient,
and customized experience. Specifically, we may use information collected about you to:
              </Typography>
              <ul style={bulletListStyle}>
                <li>Help you or your device register for our Services</li>
                <li>Provide a Service or feature you request</li>
                <li>Provide customized content and personalized services based on your past
activities on our Services</li>
                <li>Deliver targeted advertising, newsletters, and offers that might interest you on
our online platforms, third-party websites, and social media</li>
                <li>Provide promotions and offers by way of direct marketing communications,
only where you have given us your separate consent</li>
                <li>Analyze our products and services to help us better understand our customers
to offer the most relevant communications, services, and experiences to you</li>
                <li>Ask you for your feedback, opinions on our products and services and to carry
out customer surveys, with your separate consent if required</li>
                <li>Provide software updates, maintenance services, and support for your devices</li>
                <li>Comply with the law and legal processes</li>
                <li>Protect our rights, property, or safety, or any of our affiliates, business partners,
or customers</li>
                <li>Increase the efficiency and operation of our online platforms</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
              </ul>
            </li>

            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>8. Data Processing</Typography>
            <Typography>The information or data collected by us is processed by us for the purposes described above
in accordance with law, including but not limited to the Information Technology Act, 2000.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>9. Data Sharing</Typography>
            <Typography>We will disclose your data or information internally within our business, but only to those who
need it to further provide services or to help with your requests. We will also disclose your
information to the following entities, only to the extent that this will be necessary to provide
our Services:</Typography>
<ul style={bulletListStyle}>
                <li>Affiliates: Our Group companies which we control or own.</li>
                <li>Business Partners: Trusted Partners who we work together with to provide you
the Services you’ve requested or bought.</li>
                <li>Service Providers: Carefully selected those who provide services for or on
behalf of us, such as companies that help us with repairs, customer contact
centers, customer care activities, advertising (including customized advertising
on our websites, third-party websites, or digital platforms), conducting
customer satisfaction surveys, or billing, or that send emails on our behalf.
These providers are also committed to protecting your information.</li>
                <li>Other Parties when Required by Law or as Necessary to Protect Our Services:
For example, it may be necessary by law, legal process, or court order from
governmental authorities to disclose your information. They may also seek
your information from us for the purposes of law enforcement, national
security, antiterrorism, or other issues that are related to public security. It may
also be necessary for the purposes of verification of identity or for prevention,
detection, investigation including cyber incidents, prosecution, and
punishment of offences</li>
                <li>Other Parties in Connection with Corporate Transactions: We may disclose your
information to a third party as part of a merger or transfer, acquisition, or sale,
or in the event of a bankruptcy.</li>
                <li>Third Parties with Your Consent or at Your Direction: In addition to the
disclosures described in this Privacy Policy, we may share information about
you with third parties when you separately consent to or request such sharing.</li>
              </ul></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>10. Data Security</Typography>
            <Typography>We use administrative, technical, and physical security measures to help protect your personal
information. While we have taken reasonable steps to secure the personal information you
provide to us, please be aware that despite our efforts, no security measures are perfect or
impenetrable, and no method of data transmission can be guaranteed against any
interception or other type of misuse. Any information disclosed online is vulnerable to
interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete
security if you provide personal information.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>11. Data Transfer</Typography>
            <Typography>Your use of our Products and Services may involve transfer, storage, and processing of your
data. The applicable data protection law and this policy will apply to safeguard your interest.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>12. Disclosure of Data</Typography>
            <Typography>Your personal information belongs to you. We will not share it with any third party except for
what is agreed by you and expressly stated here. You can ask us to provide details about what
we’ve collected, and you can ask us to delete it or correct any inaccuracies. You can also ask
us to restrict or limit processing, sharing, or transfer of your personal information, as well as
to provide to you your personal information that we’ve collected so you can use it for your
own purposes. However, requesting the deletion of your personal information may also result
in a loss of access to services we provide. We won’t delete data that we’re required by law to
retain. To make a request, contact us at <Link href="mailto:legal@chargingadda.com">legal@chargingadda.com</Link>.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>13. Duration of Data Retention</Typography>
            <Typography>We won’t keep your personal information for longer than is necessary for the purpose for
which it was collected. This means that information will be destroyed or erased from our
systems when it’s no longer required. We take appropriate steps to ensure that we process
and retain information about you based on the following logic:</Typography>
<ul style={bulletListStyle}>
                <li>At least the duration for which the information is used to provide you with a
service</li>
                <li>As required under law, a contract, or with regard to our statutory obligations</li>
                <li>Only for as long as is necessary for the purpose for which it was collected, is
processed, or longer if required under any contract, by applicable law, or for
statistical purposes, subject to appropriate safeguards.</li>
              </ul>
</li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>14. Third Party Services</Typography>
            <Typography>Some of the content, advertising, and functionality in our Products and Services is provided
by third parties. These third parties may use cookies, beacons, tracking pixels, and other tools
to collect information about your use of these Services. These third parties are not controlled
directly by us, so we recommend that you check their privacy policies to understand how they
use your data.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>15. Third Party Links</Typography>
            <Typography>Our Services may link to third-party websites and services that are outside our control. We
are not responsible for the security or privacy of any information collected by such websites
or other services. You should exercise caution and review the privacy statements applicable
to the third party websites and services you use. We also may make available to you certain
products or services developed by third parties. We are not responsible for these third-party
products or services.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>16. Tracking Technologies</Typography>
            <Typography>We may use cookies, web beacons, tracking pixels, and other tracking technologies to help
customize and improve your experience.</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>17. Policy for Minors</Typography>
            <Typography>We do not knowingly solicit information from or market to children under the age of 18. If you
become aware of any data we have collected from children under age 18, please contact us
at  <Link href="mailto:legal@chargingadda.com">legal@chargingadda.com</Link> .</Typography></li>
            <li><Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>18. Amendments and Modifications</Typography>
            <Typography>We reserve the right, in our sole and absolute discretion to amend, delete, modify, vary, or
supplement any of these Terms at any time and will endeavor to give prior notice of seven
days for such changes.</Typography></li>
          </ol>

          <Typography variant="h6" sx={{fontWeight: 600, mt: 4 }}>Contact Us:</Typography>
          <Typography>
            You can contact us to update your preferences, correct your information, submit a request, or ask us questions at <Link href="mailto:support@chargingadda.com">support@chargingadda.com</Link>.
          </Typography>

          <Typography variant="body2" sx={{ textAlign: "center", mt: 6, color: "gray" }}>
            Last updated: August 6, 2025
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
