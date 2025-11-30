export function getAdminEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  workerCount?: string;
  industry?: string;
  message: string;
  timestamp: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - Gig Shield</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; background: linear-gradient(135deg, #6A38FF 0%, #4B1BC6 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                🔔 New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0; color: #FFC700; font-size: 14px; font-weight: 500;">
                Gig Shield - Contact Form
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Timestamp -->
              <div style="background-color: #f8f9fa; padding: 12px 16px; border-radius: 6px; margin-bottom: 24px;">
                <p style="margin: 0; color: #6c757d; font-size: 13px;">
                  <strong>Received:</strong> ${data.timestamp}
                </p>
              </div>

              <!-- Contact Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <strong style="color: #495057; font-size: 14px;">Name:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                    <span style="color: #212529; font-size: 14px;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <strong style="color: #495057; font-size: 14px;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                    <a href="mailto:${data.email}" style="color: #6A38FF; font-size: 14px; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <strong style="color: #495057; font-size: 14px;">Phone:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                    <a href="tel:${data.phone}" style="color: #6A38FF; font-size: 14px; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${data.company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <strong style="color: #495057; font-size: 14px;">Company:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                    <span style="color: #212529; font-size: 14px;">${data.company}</span>
                  </td>
                </tr>
                ` : ''}
                ${data.workerCount ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <strong style="color: #495057; font-size: 14px;">Worker Count:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                    <span style="color: #212529; font-size: 14px;">${data.workerCount}</span>
                  </td>
                </tr>
                ` : ''}
                ${data.industry ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <strong style="color: #495057; font-size: 14px;">Industry:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                    <span style="color: #212529; font-size: 14px;">${data.industry}</span>
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- Message -->
              <div style="margin-top: 24px;">
                <strong style="color: #495057; font-size: 14px; display: block; margin-bottom: 8px;">Message:</strong>
                <div style="background-color: #f8f9fa; padding: 16px; border-radius: 6px; border-left: 4px solid #6A38FF;">
                  <p style="margin: 0; color: #212529; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>

              <!-- CTA -->
              <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${data.email}?subject=Re: Your inquiry to Gig Shield" style="display: inline-block; padding: 14px 32px; background-color: #6A38FF; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                  Reply to ${data.name.split(' ')[0]}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0 0 8px; color: #6c757d; font-size: 13px;">
                <strong>Gig Shield</strong> - Affordable Insurance for Gig Workers
              </p>
              <p style="margin: 0; color: #adb5bd; font-size: 12px;">
                This is an automated notification from your website contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function getCustomerConfirmationTemplate(data: {
  name: string;
  message: string;
}) {
  const firstName = data.name.split(' ')[0];
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Gig Shield</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; background: linear-gradient(135deg, #6A38FF 0%, #4B1BC6 100%); border-radius: 8px 8px 0 0; text-align: center;">
              <div style="width: 64px; height: 64px; background-color: #FFC700; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 32px;">✅</span>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Thank You, ${firstName}!
              </h1>
              <p style="margin: 12px 0 0; color: #FFC700; font-size: 16px; font-weight: 500;">
                We've received your message
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <p style="margin: 0 0 20px; color: #212529; font-size: 16px; line-height: 1.6;">
                Hello <strong>${firstName}</strong>,
              </p>

              <p style="margin: 0 0 20px; color: #495057; font-size: 15px; line-height: 1.6;">
                Thank you for reaching out to <strong>Gig Shield</strong>! We've successfully received your inquiry and our team will review it shortly.
              </p>

              <p style="margin: 0 0 24px; color: #495057; font-size: 15px; line-height: 1.6;">
                You can expect a response from us within <strong>24 hours</strong> during business days.
              </p>

              <!-- Message Copy -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #6A38FF; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #6c757d; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Your Message:
                </p>
                <p style="margin: 0; color: #212529; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>

              <!-- Info Box -->
              <div style="background: linear-gradient(135deg, #6A38FF 0%, #4B1BC6 100%); padding: 24px; border-radius: 8px; margin-bottom: 24px;">
                <p style="margin: 0 0 12px; color: #FFC700; font-size: 18px; font-weight: 700;">
                  🛡️ Why Choose Gig Shield?
                </p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: #ffffff; font-size: 14px; line-height: 1.8;">
                  <li>Affordable coverage starting at ₹40/month</li>
                  <li>Fast WhatsApp-based claims processing</li>
                  <li>Comprehensive accident & medical benefits</li>
                  <li>Trusted by 10,000+ gig workers</li>
                </ul>
              </div>

              <!-- CTA Buttons -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px;">
                    <a href="https://gig-shield.com" style="display: block; padding: 14px 24px; background-color: #6A38FF; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; text-align: center;">
                      Visit Our Website
                    </a>
                  </td>
                  <td style="padding: 8px;">
                    <a href="tel:+916362665904" style="display: block; padding: 14px 24px; background-color: #FFC700; color: #1E1E1E; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; text-align: center;">
                      Call Us Now
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.6;">
                In the meantime, feel free to explore our website or contact us directly if you have urgent questions.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="text-align: center; padding-bottom: 16px;">
                    <h2 style="margin: 0 0 8px; color: #1E1E1E; font-size: 20px; font-weight: 700;">
                      Gig Shield
                    </h2>
                    <p style="margin: 0; color: #6c757d; font-size: 14px;">
                      Affordable Insurance for Gig Workers
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-bottom: 16px;">
                    <a href="mailto:contact@gig-shield.com" style="color: #6A38FF; text-decoration: none; font-size: 14px; margin: 0 12px;">
                      contact@gig-shield.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; border-top: 1px solid #dee2e6; padding-top: 16px;">
                    <p style="margin: 0; color: #adb5bd; font-size: 12px;">
                      © 2025 Gig Shield. All rights reserved.
                    </p>
                    <p style="margin: 8px 0 0; color: #adb5bd; font-size: 12px;">
                      You received this email because you contacted us through our website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
