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
    const { name, email, phone, interest, message } = req.body || {}

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, error: 'Name, email, and contact number are required' })
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY || '49478990'

    if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New MFDthiru Contact Enquiry from ${name}`,
          from_name: name,
          email,
          phone,
          interest: interest || 'General Enquiry',
          message: message || 'N/A',
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        return res.status(500).json({ success: false, error: data.message || 'Failed to submit enquiry' })
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been submitted successfully.',
    })
  } catch (error: any) {
    console.error('API Contact Error:', error)
    return res.status(500).json({ success: false, error: error?.message || 'Internal Server Error' })
  }
}
