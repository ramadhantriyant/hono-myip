import { Hono } from 'hono'

const app = new Hono()

app.get('/', c => {
  const resp = {
    ip: c.req.header('x-real-ip'),
    asn: c.req.raw.cf?.asn,
    isp: c.req.raw.cf?.asOrganization,
    city: c.req.raw.cf?.city,
    country: c.req.raw.cf?.country
  }
  return c.json(resp)
})

export default app
