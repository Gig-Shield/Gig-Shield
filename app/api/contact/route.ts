import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getAdminEmailTemplate, getCustomerConfirmationTemplate } from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      workerCount,
      industry,
      message
    } = body;

    // Validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const fullName = `${firstName}${lastName ? ' ' + lastName : ''}`;
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const emailData = {
      name: fullName,
      email,
      phone,
      company,
      workerCount,
      industry,
      message,
      timestamp
    };

    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const adminEmail1 = process.env.ADMIN_EMAIL_1 || 'afridgp2@gmail.com';
    const adminEmail2 = process.env.ADMIN_EMAIL_2 || 'syed.ai.ml.308@gmail.com';
    const orgEmail = 'contact@gig-shield.com';

    // Send emails in parallel
    const [adminResult1, adminResult2, customerResult] = await Promise.allSettled([
      // Email to Admin 1
      resend.emails.send({
        from: `Gig Shield <${fromEmail}>`,
        to: adminEmail1,
        subject: `🔔 New Contact Form: ${fullName} - ${company || 'Inquiry'}`,
        html: getAdminEmailTemplate(emailData),
      }),

      // Email to Admin 2
      resend.emails.send({
        from: `Gig Shield <${fromEmail}>`,
        to: adminEmail2,
        subject: `🔔 New Contact Form: ${fullName} - ${company || 'Inquiry'}`,
        html: getAdminEmailTemplate(emailData),
      }),

      // Confirmation email to customer
      resend.emails.send({
        from: `Gig Shield <${fromEmail}>`,
        to: email,
        replyTo: orgEmail,
        subject: 'Thank you for contacting Gig Shield! We\'ve received your message',
        html: getCustomerConfirmationTemplate({ name: fullName, message }),
      }),
    ]);

    // Check if all emails were sent successfully
    const failures = [];
    if (adminResult1.status === 'rejected') failures.push(`Admin 1 (${adminEmail1}): ${adminResult1.reason}`);
    if (adminResult2.status === 'rejected') failures.push(`Admin 2 (${adminEmail2}): ${adminResult2.reason}`);
    if (customerResult.status === 'rejected') failures.push(`Customer (${email}): ${customerResult.reason}`);

    if (failures.length > 0) {
      console.error('Email sending failures:', failures);
      return NextResponse.json(
        { 
          error: 'Some emails failed to send',
          details: failures,
          success: false
        },
        { status: 207 } // Multi-Status
      );
    }

    // All emails sent successfully
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
      emailIds: {
        admin1: adminResult1.status === 'fulfilled' ? adminResult1.value.data?.id : null,
        admin2: adminResult2.status === 'fulfilled' ? adminResult2.value.data?.id : null,
        customer: customerResult.status === 'fulfilled' ? customerResult.value.data?.id : null,
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}
