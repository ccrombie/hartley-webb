# Hartley & Webb

Demo retail platform for **Hartley & Webb** — a fictional British department store (think John Lewis). Built for AI agent demos on 8x8 AI Studio.

## What's in here

| | |
|---|---|
| `api/` | Cloudflare Worker REST API + D1 database |
| `web/` | Website (coming soon) |

---

## API — Quick Start

### 1. Install dependencies
```bash
cd api && npm install
```

### 2. Create the D1 database
```bash
npx wrangler d1 create hartley-webb
```
Copy the `database_id` from the output and paste it into `api/wrangler.toml`:
```toml
database_id = "paste-your-id-here"
```

### 3. Run migrations + seed data
```bash
npm run db:setup
```

### 4. Deploy
```bash
npm run deploy
```

Your API will be live at `https://hartley-webb-api.<your-subdomain>.workers.dev`

---

## API Endpoints

### Customer Lookup
```
GET /api/customers?phone=07734521893
GET /api/customers?email=sarah.mitchell@gmail.com
GET /api/customers?account=HW-100234
GET /api/customers/:id
GET /api/customers/:id/orders
```

### Orders
```
GET /api/orders/:id                     # e.g. HW-ORD-001
GET /api/orders?customerId=cust-001
```

### Products
```
GET /api/products?search=coffee
GET /api/products?department=electricals
GET /api/products/:id                   # e.g. HW-E003
```

### Inventory
```
GET /api/inventory/:productId           # e.g. HW-E004
```

### Departments
```
GET /api/departments
```

---

## Demo Customers

| Name | Account | Phone | Email | Tier |
|---|---|---|---|---|
| Sarah Mitchell | HW-100234 | 07734 521893 | sarah.mitchell@gmail.com | Gold |
| James Thornton | HW-100235 | 07891 234567 | j.thornton@outlook.com | Silver |
| Emma Clarke | HW-100236 | 07654 321098 | emma.clarke88@gmail.com | Standard |
| David Patel | HW-100237 | 07712 345678 | david.patel@hotmail.com | Gold |
| Charlotte Hughes | HW-100238 | 07823 456789 | charlotte.h@gmail.com | Standard |
| Michael Bennett | HW-100239 | 07934 567890 | m.bennett@yahoo.co.uk | Silver |
| Sophie Williams | HW-100240 | 07845 678901 | sophie.w@gmail.com | Standard |
| Robert Davies | HW-100241 | 07756 789012 | r.davies@gmail.com | Gold |
| Olivia Johnson | HW-100242 | 07867 890123 | olivia.j@outlook.com | Standard |
| Thomas Wilson | HW-100243 | 07978 901234 | t.wilson@gmail.com | Silver |
| Isabella Moore | HW-100244 | 07689 012345 | i.moore@gmail.com | Standard |
| William Taylor | HW-100245 | 07590 123456 | w.taylor@hotmail.com | Gold |

---

## Push to GitHub
```bash
cd /path/to/hartley-webb
git init
git add .
git commit -m "Initial commit — Hartley & Webb API"
git remote add origin https://github.com/ccrombie/hartley-webb.git
git push -u origin main
```
