export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }

  try {
    const { name, email, phone, city, requirement } = req.body || {}

    if (!name || !email || !phone || !city) {
      return res.status(400).json({ success: false, error: 'Full name, email, contact number, and city are required' })
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY

    if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Investor Details Lead: ${name} (${requirement || 'Personalised Guidance'})`,
          from_name: name,
          email,
          phone,
          city,
          requirement: requirement || 'Personalised Guidance',
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        return res.status(500).json({ success: false, error: data.message || 'Failed to submit investor details' })
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your investor details have been submitted successfully.',
    })
  } catch (error: any) {
    console.error('API Investor Details Error:', error)
    return res.status(500).json({ success: false, error: error?.message || 'Internal Server Error' })
  }
}
