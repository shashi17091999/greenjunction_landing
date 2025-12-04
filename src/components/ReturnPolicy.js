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
const ReturnPolicy = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "#f5f7fa", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "center", mb: 4 }}>
            Return & Refund Policy
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            At ChargingAdda, we strive to give you the finest online shopping experience possible. 
            In the odd event that a manufacturing error occurs, you will be offered full support in replacing the item. 
            Send an email to 
            <Link href="mailto:support@chargingadda.com"> support@chargingadda.com </Link> {" "}
             if you have any further questions.
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1, fontWeight: 550}}>
                Cancellation Policy
            </Typography><Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                We handle orders on the same day to bring them to you as quickly as possible. 
                We can cancel and refund your order as long as it hasn't been processed.
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                To cancel your order, please contact our support team at the email 
                address or phone number listed below:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>If you need to cancel an order, please contact {" "}
                    <Link href="mailto:support@chargingadda.com">support@chargingadda.com</Link> {" "} or phone 
                    +91-96869 81633 with your order number. </Typography></li>
            </ul>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                If ChargingAdda finds that your payments have not been received, your orders can be cancelled. 
                For more information, see the following:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                        In the event that payment for an order is not received, ChargingAdda will immediately cancel the order. 
                        An email notification is sent to you when we cancel the order.</Typography></li>
            </ul>

          <ol style={numberedListStyle}>
            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>Charging Session Refund Policy</Typography>
              </li>
            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>1. User Registration</Typography>
              <Typography>
                Any individual seeking to access the services provided by ChargingAdda must register as a user ("User" or "Customer") 
                through the ChargingAdda EV Charging mobile application ("Application"), available for download on the Web application 
                or Google Play Store or Apple App Store.
              </Typography>
              <Typography sx={{mt:1}}>
                1.1 Registration shall require submission of essential personal details including, but not limited to, the User's full name, valid mobile number, and email address.
              </Typography>
              <Typography sx={{mt:1}}>
                1.2 The User may register using a valid mobile number or email address.
              </Typography>
              <Typography sx={{mt:1}}>
                1.3 ChargingAdda reserves the right to request additional personal or vehicle-specific information post-registration, depending on the scope of services requested by the User.
              </Typography>
              </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>2. Charging Session</Typography>
              <Typography sx={{mt: 1}}>
                2.1 A Charging Session shall commence upon successful booking of the charger via the Application or 
                CMS dashboard and activation of charging from the charger's end.
                </Typography>
                <Typography sx={{mt:1}}>
                    2.2 A session shall be deemed Terminated when the booking time elapses or the estimated energy 
                    to be consumed during the session is fully dispensed by the charger.
                 </Typography>
              <Typography sx={{mt:1}}>
               2.3 A session shall be deemed Ended when it is manually ended by the User via the Application or CMS dashboard.
              </Typography>
              <Typography sx={{mt:1}}>
                2.4 A session shall be deemed Cancelled if (i) the charging does not commence following a successful booking; or
                 (ii) no energy is dispensed during the session.
                 </Typography>

                 <Typography sx={{ mt: 1, fontStyle: 'italic' }}>
  <strong style={{ fontStyle: 'normal' }}>Note:</strong> It is the responsibility of the User to ensure that the charging session has
  begun and completes successfully. Users may confirm the status of charging through (a) the LED indicators on the charger; or (b) the
  "Monitor Charging" screen available on the Application.
</Typography>

              <Typography sx={{mt:1}}>
                For Bluetooth-enabled chargers, real-time consumption data is shown on the monitor screen if the mobile device is connected to the charger. 
                For internet-connected chargers, consumption is updated in real time.
              </Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>3. Refund Eligibility and Conditions</Typography>
              <Typography sx={{mt: 1}}>
                3.1 Refunds shall be processed only in cases where the charging session is adversely affected by a technical
                 fault attributable to the ChargingAdda charging device, and only if the User's attempt to sync the session fails
                  and the issue is reported within five (5) calendar days from the date and time of the booking.
                </Typography>
                <Typography sx={{mt:1}}>
                    3.2 The following scenarios shall qualify for partial or full refund eligibility, subject to the above conditions:
                 </Typography>

                 <ul style={bulletListStyle}>
                <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                    The device transitions to an auto cut-off state immediately after initiating a "Start Charging" command.</Typography></li>
                    <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                       The device fails to dispense energy due to a firmware malfunction, including but not limited to a "Programming Error" 
                       state (as may be indicated by the device's LED status or system diagnostics).</Typography></li>
                        <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                        The payment is successfully completed, but the User is unable to initiate the charging session. 
                        Upon validation of the transaction ID and internal verification, a refund shall be processed if found eligible.</Typography></li>
            </ul>

            <Typography sx={{mt:1, fontWeight: 550}}>
                Note
            </Typography>
            <ul style={bulletListStyle}>
                <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                    Refund requests will not be entertained for sessions where energy has been dispensed successfully or where the device is found to be functional, unless otherwise stated herein.
                    </Typography></li>
                    <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                       In cases where the charging session terminates abruptly due to a technical malfunction and only partial energy is delivered, a partial refund may be initiated based on actual energy usage.
                       </Typography></li>
                        <li>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt:1 }}>
                        In the event of a payment failure during transaction processing, Users shall automatically receive refunds within 7 business days via the payment gateway. ChargingAdda shall not be held liable
                         for delays arising from banking or third-party gateway partners.
                        </Typography></li>
            </ul>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>4. Refund Procedure and Timeline</Typography>
              <Typography sx={{mt: 1}}>
                4.1 The User may initiate a refund request by sending an email to <Link href="mailto:support@chargingadda.com"> support@chargingadda.com</Link> {" "}, 
                clearly stating the reason for the refund and attaching relevant transaction references, 
                including booking ID, transaction ID, session time, and any supporting evidence.
                </Typography>
                <Typography sx={{mt:1}}>
                    4.2 Refund requests must be submitted within five (5) calendar days from the date and time of the original booking. 
                    Requests made beyond this period shall not be eligible for refund consideration.
                 </Typography>
              <Typography sx={{mt:1}}>
               4.3 Upon submission, the refund request will undergo a validation process, which may take 3 to 5 
               business days for review and settlement.
              </Typography>
            </li>

            <li>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>5. General Disclaimer</Typography>
              <Typography>
                ChargingAdda (GREEN JUNCTION TECHNOLOGIES PRIVATE LIMITED) shall not be liable for refund
                 processing delays arising out of technical issues caused by third-party banking partners 
                 or payment gateways. Users are advised to retain all booking references and transaction IDs until resolution.
              </Typography>
              </li>
          </ol>

          <Typography variant="body2" sx={{ textAlign: "center", mt: 6, color: "gray" }}>
            Last updated: August 6, 2025
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};


export default ReturnPolicy;