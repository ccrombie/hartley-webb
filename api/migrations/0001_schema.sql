-- Hartley & Webb — Database Schema

CREATE TABLE IF NOT EXISTS departments (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
  id            TEXT PRIMARY KEY,
  sku           TEXT NOT NULL UNIQUE,
  name          TEXT NOT NULL,
  description   TEXT,
  department_id INTEGER REFERENCES departments(id),
  brand         TEXT,
  price         REAL NOT NULL,
  created_at    TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS inventory (
  product_id         TEXT PRIMARY KEY REFERENCES products(id),
  stock_level        INTEGER NOT NULL DEFAULT 0,
  warehouse_location TEXT,
  last_updated       TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS customers (
  id             TEXT PRIMARY KEY,
  account_number TEXT NOT NULL UNIQUE,
  first_name     TEXT NOT NULL,
  last_name      TEXT NOT NULL,
  email          TEXT NOT NULL UNIQUE,
  phone          TEXT,
  address_line1  TEXT,
  address_line2  TEXT,
  city           TEXT,
  postcode       TEXT,
  loyalty_points INTEGER NOT NULL DEFAULT 0,
  tier           TEXT NOT NULL DEFAULT 'standard',
  member_since   TEXT,
  created_at     TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS orders (
  id               TEXT PRIMARY KEY,
  customer_id      TEXT REFERENCES customers(id),
  status           TEXT NOT NULL DEFAULT 'pending',
  total_amount     REAL NOT NULL,
  delivery_address TEXT,
  delivery_method  TEXT NOT NULL DEFAULT 'standard',
  tracking_number  TEXT,
  notes            TEXT,
  created_at       TEXT NOT NULL,
  updated_at       TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS order_items (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id     TEXT REFERENCES orders(id),
  product_id   TEXT,
  product_name TEXT NOT NULL,
  quantity     INTEGER NOT NULL DEFAULT 1,
  unit_price   REAL NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_customers_email   ON customers(email);
CREATE INDEX IF NOT EXISTS idx_customers_phone   ON customers(phone);
CREATE INDEX IF NOT EXISTS idx_customers_account ON customers(account_number);
CREATE INDEX IF NOT EXISTS idx_orders_customer   ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
