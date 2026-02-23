import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const GHL_API_BASE = 'https://services.leadconnectorhq.com';

function splitName(name: string): { firstName: string; lastName: string } {
  const trimmed = String(name).trim();
  const spaceIndex = trimmed.indexOf(' ');
  if (spaceIndex === -1) {
    return { firstName: trimmed || 'Unknown', lastName: '' };
  }
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, offer } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { firstName, lastName } = splitName(name);
    const locationId = process.env.GHL_LOCATION_ID;
    const apiKey = process.env.GHL_API_KEY;

    // Send to GoHighLevel if configured
    if (locationId && apiKey) {
      const tags = ['KPP Website'];
      if (offer && String(offer).toLowerCase().includes('road to 90')) {
        tags.push('Road to 90');
      }
      const ghlRes = await fetch(`${GHL_API_BASE}/contacts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          Version: '2021-07-28',
        },
        body: JSON.stringify({
          locationId,
          firstName,
          lastName,
          email: String(email).trim(),
          phone: String(phone).trim(),
          source: 'KPP Website',
          tags,
        }),
      });
      if (!ghlRes.ok) {
        const errText = await ghlRes.text();
        console.error('GoHighLevel create contact failed:', ghlRes.status, errText);
        return NextResponse.json(
          { error: 'Failed to submit lead' },
          { status: 500 }
        );
      }
    }

    // Optional: send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'KPP Website <onboarding@resend.dev>',
        to: ['cmcccortland@gmail.com'],
        subject: `New Lead: ${name} - ${offer || 'Website Inquiry'}`,
        html: `
        <h2>New Lead from KPP Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Offer:</strong> ${offer || 'N/A'}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Sent from kirkspitchingperformance.com</p>
      `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
