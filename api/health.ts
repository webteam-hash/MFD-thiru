export default async function handler(_req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.status(200).json({
    status: 'ok',
    service: 'mfdthiru-api',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
  })
}
