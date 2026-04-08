-- Hartley & Webb — Seed Data

-- ── Departments ──────────────────────────────────────────
INSERT INTO departments (id, name, slug) VALUES
  (1,  'Electricals',         'electricals'),
  (2,  'Home & Furniture',    'home-furniture'),
  (3,  'Women''s Fashion',    'womens-fashion'),
  (4,  'Men''s Fashion',      'mens-fashion'),
  (5,  'Children''s',         'childrens'),
  (6,  'Beauty & Fragrance',  'beauty'),
  (7,  'Garden',              'garden'),
  (8,  'Toys & Games',        'toys'),
  (9,  'Sports & Leisure',    'sports'),
  (10, 'Food & Beverage',     'food');

-- ── Products ─────────────────────────────────────────────

-- Electricals
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-E001', 'SKU-E001', 'Samsung 65" QLED 4K Smart TV',           'Stunning 4K QLED display with Quantum HDR and built-in Alexa. Perfect for the living room.',  1, 'Samsung',   1299.00),
  ('HW-E002', 'SKU-E002', 'Sony WH-1000XM5 Wireless Headphones',    'Industry-leading noise cancellation with 30-hour battery life and multipoint connection.',     1, 'Sony',       329.00),
  ('HW-E003', 'SKU-E003', 'De''Longhi Magnifica Evo Coffee Machine', 'Bean-to-cup coffee machine with LatteCrema system. Makes perfect espresso and cappuccino.',    1, 'De''Longhi',  649.00),
  ('HW-E004', 'SKU-E004', 'Dyson V15 Detect Cordless Vacuum',        'Laser dust detection and intelligent suction adjustment. Up to 60 minutes of run time.',       1, 'Dyson',      649.00),
  ('HW-E005', 'SKU-E005', 'Apple MacBook Air 15" M3',                '15-inch Liquid Retina display, M3 chip, 8GB RAM, 256GB SSD. All-day battery life.',            1, 'Apple',     1299.00),
  ('HW-E006', 'SKU-E006', 'Ninja Foodi 9-in-1 Multi-Cooker',         'Air fry, roast, bake, grill, steam, slow cook, sear and more in one appliance.',               1, 'Ninja',      199.00),
  ('HW-E007', 'SKU-E007', 'Nespresso Vertuo Next Coffee Machine',    'Centrifusion technology for barista-quality coffee at home. Includes welcome kit.',            1, 'Nespresso',  149.00),
  ('HW-E008', 'SKU-E008', 'Samsung Galaxy S24 128GB Phantom Black',  '6.2-inch Dynamic AMOLED display, 50MP camera, Galaxy AI features. Android 14.',                1, 'Samsung',    799.00),
  ('HW-E009', 'SKU-E009', 'Kenwood Chef Titanium Stand Mixer',       '1500W motor with 6.7L bowl. Comes with K-beater, dough hook and whisk.',                       1, 'Kenwood',    499.00),
  ('HW-E010', 'SKU-E010', 'Bose SoundLink Max Portable Speaker',     'Premium portable speaker with up to 20 hours battery. IP67 water resistant.',                   1, 'Bose',       349.00);

-- Home & Furniture
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-H001', 'SKU-H001', 'Habitat Kemi 3-Seater Sofa in Charcoal', 'Contemporary 3-seater sofa in soft woven fabric. Solid wood legs. Easy assembly.',            2, 'Habitat',    899.00),
  ('HW-H002', 'SKU-H002', 'Le Creuset Cast Iron Casserole 26cm',     'Iconic cast iron casserole in Volcanic orange. Oven safe to 260°C. Lifetime guarantee.',      2, 'Le Creuset', 249.00),
  ('HW-H003', 'SKU-H003', 'Denby Halo Blue 12-Piece Dinnerware Set', 'Handcrafted stoneware in deep blue glaze. Microwave and dishwasher safe.',                    2, 'Denby',      120.00),
  ('HW-H004', 'SKU-H004', 'Emma Bridgewater Polka Dot Mug',          'Classic half pint mug in signature polka dot design. Hand decorated in Stoke-on-Trent.',      2, 'Emma Bridgewater', 18.50),
  ('HW-H005', 'SKU-H005', 'Silentnight Eco Comfort Mattress King',   'Eco-friendly mattress with recycled fibre filling. Medium tension. 10-year guarantee.',       2, 'Silentnight', 549.00),
  ('HW-H006', 'SKU-H006', 'Robert Welch Signature Knife Block 7pc',  'Seven-piece stainless steel knife set with solid beech block. Dishwasher safe.',              2, 'Robert Welch', 299.00);

-- Women's Fashion
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-WF001', 'SKU-WF001', 'Phase Eight Floral Ruffle Midi Dress',   'Elegant floral print midi dress with ruffle detailing. Perfect for occasions.',             3, 'Phase Eight',  89.00),
  ('HW-WF002', 'SKU-WF002', 'Hobbs London Camden Wool Coat',          'Classic double-breasted coat in pure new wool. Fully lined. Dry clean only.',              3, 'Hobbs',        299.00),
  ('HW-WF003', 'SKU-WF003', 'White Stuff Organic Breton Stripe Top',  '100% organic cotton Breton top in navy/white. Machine washable.',                         3, 'White Stuff',   45.00),
  ('HW-WF004', 'SKU-WF004', 'Clarks Hamble Lane Leather Courts',      'Classic leather court shoe with cushioned footbed and low block heel.',                    3, 'Clarks',        85.00),
  ('HW-WF005', 'SKU-WF005', 'Boden Ponte Fitted Blazer',              'Smart ponte blazer with single button fastening. Machine washable. Multiple colours.',     3, 'Boden',        130.00);

-- Men's Fashion
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-MF001', 'SKU-MF001', 'Ted Baker Slim Fit Wool Suit Jacket',    'Slim fit jacket in wool blend. Partially lined. Dry clean only. Available in navy.',      4, 'Ted Baker',   249.00),
  ('HW-MF002', 'SKU-MF002', 'Barbour Beaufort Wax Jacket',            'Iconic British wax jacket with corduroy collar. Waterproof and windproof.',               4, 'Barbour',     279.00),
  ('HW-MF003', 'SKU-MF003', 'Paul Smith Tailored Fit Oxford Shirt',   'Classic Oxford shirt with signature Paul Smith stripe detail on the cuff.',               4, 'Paul Smith',   95.00),
  ('HW-MF004', 'SKU-MF004', 'Levi''s 501 Original Fit Jeans',        'The original straight fit jeans. 99% cotton denim. Button fly.',                          4, 'Levi''s',      85.00),
  ('HW-MF005', 'SKU-MF005', 'Timberland Premium 6-Inch Waterproof Boot', 'Iconic waterproof boot in full-grain leather. Padded collar for comfort.',             4, 'Timberland',  185.00);

-- Children's
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-C001', 'SKU-C001', 'Joules Girls Floral Jersey Dress Age 7-8', 'Bright floral jersey dress in organic cotton. Machine washable.',                         5, 'Joules',       35.00),
  ('HW-C002', 'SKU-C002', 'Clarks Astro Jump Boa School Shoes',       'Durable leather school shoes with easy Boa closure system. Sizes 10-5.',                  5, 'Clarks',       52.00);

-- Beauty & Fragrance
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-B001', 'SKU-B001', 'Charlotte Tilbury Pillow Talk Lipstick',   'Iconic pinky-nude lip colour. Long-wearing formula with light-reflecting pigments.',      6, 'Charlotte Tilbury', 29.00),
  ('HW-B002', 'SKU-B002', 'Jo Malone English Pear & Freesia 100ml',   'Signature cologne combining ripe pears and white freesia. The scent of autumn.',          6, 'Jo Malone',    145.00),
  ('HW-B003', 'SKU-B003', 'Elemis Pro-Collagen Marine Cream 50ml',    'Award-winning anti-ageing moisturiser. Clinically proven to reduce wrinkles in 14 days.', 6, 'Elemis',       115.00),
  ('HW-B004', 'SKU-B004', 'Clinique Moisture Surge 100H Hydrator',    'Oil-free gel-cream moisturiser. Suitable for all skin types. 50ml.',                      6, 'Clinique',      38.00);

-- Garden
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-G001', 'SKU-G001', 'Hartman Amalfi 6-Seat Garden Furniture Set', '6-seat rattan effect dining set with parasol hole. All-weather resistant.',             7, 'Hartman',     799.00),
  ('HW-G002', 'SKU-G002', 'Flymo SimpliMow 330R Robotic Lawn Mower',    'Automatic robotic mower for lawns up to 400m². Quiet operation, rain sensor.',          7, 'Flymo',       599.00),
  ('HW-G003', 'SKU-G003', 'Gardena Comfort Flex Hose Set 30m',           'Kink-resistant garden hose with spray gun and connectors. Frost-resistant.',            7, 'Gardena',      79.00);

-- Toys & Games
INSERT INTO products (id, sku, name, description, department_id, brand, price) VALUES
  ('HW-T001', 'SKU-T001', 'LEGO Technic Bugatti Bolide 42151',        '905-piece LEGO Technic set. Detailed replica with aerodynamic bodywork. Age 10+.',        8, 'LEGO',        449.00),
  ('HW-T002', 'SKU-T002', 'Barbie Dreamhouse 2023',                    '3-storey dollhouse with slide, pool and 75+ accessories. Age 3+.',                       8, 'Barbie',       229.00),
  ('HW-T003', 'SKU-T003', 'Ravensburger Colourful Companions 1000pc',  '1000-piece jigsaw puzzle. Finished size 70x50cm. Age 12+.',                               8, 'Ravensburger',  22.00);

-- ── Inventory ────────────────────────────────────────────
INSERT INTO inventory (product_id, stock_level, warehouse_location) VALUES
  ('HW-E001', 14,  'A1-01'), ('HW-E002', 32,  'A1-02'), ('HW-E003', 8,   'A1-03'),
  ('HW-E004', 0,   'A1-04'), ('HW-E005', 21,  'A1-05'), ('HW-E006', 45,  'A1-06'),
  ('HW-E007', 67,  'A1-07'), ('HW-E008', 3,   'A1-08'), ('HW-E009', 12,  'A1-09'),
  ('HW-E010', 19,  'A1-10'),
  ('HW-H001', 6,   'B2-01'), ('HW-H002', 28,  'B2-02'), ('HW-H003', 15,  'B2-03'),
  ('HW-H004', 94,  'B2-04'), ('HW-H005', 4,   'B2-05'), ('HW-H006', 11,  'B2-06'),
  ('HW-WF001', 22, 'C3-01'), ('HW-WF002', 9,  'C3-02'), ('HW-WF003', 51, 'C3-03'),
  ('HW-WF004', 17, 'C3-04'), ('HW-WF005', 13, 'C3-05'),
  ('HW-MF001', 8,  'C4-01'), ('HW-MF002', 11, 'C4-02'), ('HW-MF003', 24, 'C4-03'),
  ('HW-MF004', 38, 'C4-04'), ('HW-MF005', 2,  'C4-05'),
  ('HW-C001', 19,  'D5-01'), ('HW-C002', 33,  'D5-02'),
  ('HW-B001', 88,  'E6-01'), ('HW-B002', 14,  'E6-02'), ('HW-B003', 7,   'E6-03'),
  ('HW-B004', 42,  'E6-04'),
  ('HW-G001', 3,   'F7-01'), ('HW-G002', 5,   'F7-02'), ('HW-G003', 29,  'F7-03'),
  ('HW-T001', 0,   'G8-01'), ('HW-T002', 8,   'G8-02'), ('HW-T003', 55,  'G8-03');

-- ── Customers ────────────────────────────────────────────
INSERT INTO customers (id, account_number, first_name, last_name, email, phone, address_line1, city, postcode, loyalty_points, tier, member_since) VALUES
  ('cust-001', 'HW-100234', 'Sarah',    'Mitchell',  'sarah.mitchell@gmail.com',     '07734 521893', '45 Maple Road',        'Bristol',      'BS1 2AB', 4820, 'gold',     '2019-03-14'),
  ('cust-002', 'HW-100235', 'James',    'Thornton',  'j.thornton@outlook.com',       '07891 234567', '12 Victoria Street',   'Manchester',   'M2 3HN',  1650, 'silver',   '2021-07-22'),
  ('cust-003', 'HW-100236', 'Emma',     'Clarke',    'emma.clarke88@gmail.com',      '07654 321098', '8 Oak Avenue',         'Leeds',        'LS1 4JK',  390, 'standard', '2023-01-08'),
  ('cust-004', 'HW-100237', 'David',    'Patel',     'david.patel@hotmail.com',      '07712 345678', '23 Park Lane',         'Birmingham',   'B1 1LT',  6140, 'gold',     '2018-11-30'),
  ('cust-005', 'HW-100238', 'Charlotte','Hughes',    'charlotte.h@gmail.com',        '07823 456789', '5 The Green',          'Oxford',       'OX1 2DQ',  210, 'standard', '2024-02-14'),
  ('cust-006', 'HW-100239', 'Michael',  'Bennett',   'm.bennett@yahoo.co.uk',        '07934 567890', '17 Kings Road',        'London',       'SW3 4RP', 2380, 'silver',   '2020-09-03'),
  ('cust-007', 'HW-100240', 'Sophie',   'Williams',  'sophie.w@gmail.com',           '07845 678901', '34 Church Street',     'Edinburgh',    'EH1 3BG',  870, 'standard', '2022-05-19'),
  ('cust-008', 'HW-100241', 'Robert',   'Davies',    'r.davies@gmail.com',           '07756 789012', '9 Mill Lane',          'Cardiff',      'CF10 1FJ',7290, 'gold',     '2017-06-25'),
  ('cust-009', 'HW-100242', 'Olivia',   'Johnson',   'olivia.j@outlook.com',         '07867 890123', '28 High Street',       'Bath',         'BA1 5AT',  560, 'standard', '2022-11-07'),
  ('cust-010', 'HW-100243', 'Thomas',   'Wilson',    't.wilson@gmail.com',           '07978 901234', '15 Rose Gardens',      'Newcastle',    'NE1 6TH', 1920, 'silver',   '2021-04-11'),
  ('cust-011', 'HW-100244', 'Isabella', 'Moore',     'i.moore@gmail.com',            '07689 012345', '62 Elm Drive',         'Norwich',      'NR1 2PQ',  140, 'standard', '2024-08-21'),
  ('cust-012', 'HW-100245', 'William',  'Taylor',    'w.taylor@hotmail.com',         '07590 123456', '3 Grosvenor Square',   'London',       'W1K 6JP', 9870, 'gold',     '2016-12-01');

-- ── Orders ───────────────────────────────────────────────
INSERT INTO orders (id, customer_id, status, total_amount, delivery_address, delivery_method, tracking_number, created_at, updated_at) VALUES
  -- Sarah Mitchell (cust-001) — Gold
  ('HW-ORD-001', 'cust-001', 'delivered',   1628.00, '45 Maple Road, Bristol, BS1 2AB',         'express',       'HW-TRK-88291047', '2026-03-01 09:15:00', '2026-03-04 14:22:00'),
  ('HW-ORD-002', 'cust-001', 'dispatched',   429.00, '45 Maple Road, Bristol, BS1 2AB',         'standard',      'HW-TRK-88291183', '2026-04-05 11:30:00', '2026-04-07 08:14:00'),
  ('HW-ORD-010', 'cust-001', 'returned',     649.00, '45 Maple Road, Bristol, BS1 2AB',         'standard',      NULL,              '2026-02-14 16:45:00', '2026-02-21 10:30:00'),
  -- James Thornton (cust-002) — Silver
  ('HW-ORD-003', 'cust-002', 'delivered',    364.00, '12 Victoria Street, Manchester, M2 3HN',  'standard',      'HW-TRK-88291062', '2026-03-10 14:20:00', '2026-03-14 11:45:00'),
  ('HW-ORD-011', 'cust-002', 'processing',   471.00, '12 Victoria Street, Manchester, M2 3HN',  'standard',      NULL,              '2026-04-07 10:05:00', '2026-04-07 10:05:00'),
  -- Emma Clarke (cust-003) — Standard
  ('HW-ORD-004', 'cust-003', 'delivered',    369.00, '8 Oak Avenue, Leeds, LS1 4JK',            'standard',      'HW-TRK-88291074', '2026-02-28 13:10:00', '2026-03-04 09:30:00'),
  -- David Patel (cust-004) — Gold
  ('HW-ORD-005', 'cust-004', 'delivered',   1299.00, '23 Park Lane, Birmingham, B1 1LT',        'express',       'HW-TRK-88291091', '2026-03-18 08:55:00', '2026-03-20 13:20:00'),
  ('HW-ORD-012', 'cust-004', 'dispatched',   648.00, '23 Park Lane, Birmingham, B1 1LT',        'express',       'HW-TRK-88291201', '2026-04-06 15:40:00', '2026-04-07 07:55:00'),
  -- Charlotte Hughes (cust-005) — Standard
  ('HW-ORD-006', 'cust-005', 'pending',      118.00, '5 The Green, Oxford, OX1 2DQ',            'standard',      NULL,              '2026-04-08 09:22:00', '2026-04-08 09:22:00'),
  ('HW-ORD-013', 'cust-005', 'cancelled',    799.00, '5 The Green, Oxford, OX1 2DQ',            'standard',      NULL,              '2026-03-25 12:15:00', '2026-03-26 09:45:00'),
  -- Michael Bennett (cust-006) — Silver
  ('HW-ORD-007', 'cust-006', 'delivered',    344.00, '17 Kings Road, London, SW3 4RP',          'click_collect', NULL,              '2026-03-20 17:30:00', '2026-03-22 11:10:00'),
  -- Sophie Williams (cust-007) — Standard
  ('HW-ORD-008', 'cust-007', 'delivered',    260.00, '34 Church Street, Edinburgh, EH1 3BG',    'standard',      'HW-TRK-88291109', '2026-03-05 10:45:00', '2026-03-10 14:55:00'),
  ('HW-ORD-014', 'cust-007', 'dispatched',   130.00, '34 Church Street, Edinburgh, EH1 3BG',    'standard',      'HW-TRK-88291214', '2026-04-06 13:20:00', '2026-04-07 09:30:00'),
  -- Robert Davies (cust-008) — Gold
  ('HW-ORD-009', 'cust-008', 'delivered',    899.00, '9 Mill Lane, Cardiff, CF10 1FJ',          'express',       'HW-TRK-88291118', '2026-02-10 09:00:00', '2026-02-13 16:40:00'),
  ('HW-ORD-015', 'cust-008', 'processing',   649.00, '9 Mill Lane, Cardiff, CF10 1FJ',          'express',       NULL,              '2026-04-07 14:55:00', '2026-04-07 14:55:00'),
  ('HW-ORD-016', 'cust-008', 'delivered',    270.00, '9 Mill Lane, Cardiff, CF10 1FJ',          'standard',      'HW-TRK-88291132', '2026-03-22 11:30:00', '2026-03-27 10:15:00'),
  -- Olivia Johnson (cust-009) — Standard
  ('HW-ORD-017', 'cust-009', 'delivered',    678.00, '28 High Street, Bath, BA1 5AT',           'standard',      'HW-TRK-88291145', '2026-01-20 15:20:00', '2026-01-25 12:00:00'),
  ('HW-ORD-018', 'cust-009', 'returned',      89.00, '28 High Street, Bath, BA1 5AT',           'standard',      NULL,              '2026-03-14 09:10:00', '2026-03-19 14:20:00'),
  -- Thomas Wilson (cust-010) — Silver
  ('HW-ORD-019', 'cust-010', 'delivered',    799.00, '15 Rose Gardens, Newcastle, NE1 6TH',     'express',       'HW-TRK-88291156', '2026-03-28 12:40:00', '2026-03-31 09:50:00'),
  ('HW-ORD-020', 'cust-010', 'processing',   199.00, '15 Rose Gardens, Newcastle, NE1 6TH',     'standard',      NULL,              '2026-04-08 08:10:00', '2026-04-08 08:10:00'),
  -- Isabella Moore (cust-011) — Standard
  ('HW-ORD-021', 'cust-011', 'delivered',     67.00, '62 Elm Drive, Norwich, NR1 2PQ',          'standard',      'HW-TRK-88291168', '2026-03-30 14:00:00', '2026-04-04 11:30:00'),
  -- William Taylor (cust-012) — Gold
  ('HW-ORD-022', 'cust-012', 'delivered',   1398.00, '3 Grosvenor Square, London, W1K 6JP',    'express',       'HW-TRK-88291177', '2026-02-20 10:30:00', '2026-02-23 14:00:00'),
  ('HW-ORD-023', 'cust-012', 'dispatched',   349.00, '3 Grosvenor Square, London, W1K 6JP',    'express',       'HW-TRK-88291219', '2026-04-07 16:10:00', '2026-04-08 07:45:00'),
  ('HW-ORD-024', 'cust-012', 'delivered',    549.00, '3 Grosvenor Square, London, W1K 6JP',    'standard',      'HW-TRK-88291190', '2026-03-08 09:45:00', '2026-03-13 15:20:00');

-- ── Order Items ──────────────────────────────────────────
INSERT INTO order_items (order_id, product_id, product_name, quantity, unit_price) VALUES
  -- HW-ORD-001: Sarah — TV + Headphones
  ('HW-ORD-001', 'HW-E001', 'Samsung 65" QLED 4K Smart TV',          1, 1299.00),
  ('HW-ORD-001', 'HW-E002', 'Sony WH-1000XM5 Wireless Headphones',   1,  329.00),
  -- HW-ORD-002: Sarah — Wool Coat + Blazer
  ('HW-ORD-002', 'HW-WF002', 'Hobbs London Camden Wool Coat',         1,  299.00),
  ('HW-ORD-002', 'HW-WF005', 'Boden Ponte Fitted Blazer',             1,  130.00),
  -- HW-ORD-010: Sarah — Coffee Machine (returned)
  ('HW-ORD-010', 'HW-E003', 'De''Longhi Magnifica Evo Coffee Machine', 1, 649.00),
  -- HW-ORD-003: James — Barbour + Levi''s
  ('HW-ORD-003', 'HW-MF002', 'Barbour Beaufort Wax Jacket',           1,  279.00),
  ('HW-ORD-003', 'HW-MF004', 'Levi''s 501 Original Fit Jeans',       1,   85.00),
  -- HW-ORD-011: James — LEGO + Puzzle
  ('HW-ORD-011', 'HW-T001', 'LEGO Technic Bugatti Bolide 42151',      1,  449.00),
  ('HW-ORD-011', 'HW-T003', 'Ravensburger Colourful Companions 1000pc', 1,  22.00),
  -- HW-ORD-004: Emma — Dinnerware + Casserole
  ('HW-ORD-004', 'HW-H003', 'Denby Halo Blue 12-Piece Dinnerware Set', 1, 120.00),
  ('HW-ORD-004', 'HW-H002', 'Le Creuset Cast Iron Casserole 26cm',   1,  249.00),
  -- HW-ORD-005: David — MacBook Air
  ('HW-ORD-005', 'HW-E005', 'Apple MacBook Air 15" M3',               1, 1299.00),
  -- HW-ORD-012: David — Kenwood Mixer + Nespresso
  ('HW-ORD-012', 'HW-E009', 'Kenwood Chef Titanium Stand Mixer',      1,  499.00),
  ('HW-ORD-012', 'HW-E007', 'Nespresso Vertuo Next Coffee Machine',   1,  149.00),
  -- HW-ORD-006: Charlotte — Floral Dress + Lipstick
  ('HW-ORD-006', 'HW-WF001', 'Phase Eight Floral Ruffle Midi Dress',  1,   89.00),
  ('HW-ORD-006', 'HW-B001',  'Charlotte Tilbury Pillow Talk Lipstick',1,   29.00),
  -- HW-ORD-013: Charlotte — Garden Furniture (cancelled)
  ('HW-ORD-013', 'HW-G001', 'Hartman Amalfi 6-Seat Garden Furniture Set', 1, 799.00),
  -- HW-ORD-007: Michael — Ted Baker + Paul Smith
  ('HW-ORD-007', 'HW-MF001', 'Ted Baker Slim Fit Wool Suit Jacket',   1,  249.00),
  ('HW-ORD-007', 'HW-MF003', 'Paul Smith Tailored Fit Oxford Shirt',  1,   95.00),
  -- HW-ORD-008: Sophie — Jo Malone + Elemis
  ('HW-ORD-008', 'HW-B002', 'Jo Malone English Pear & Freesia 100ml', 1,  145.00),
  ('HW-ORD-008', 'HW-B003', 'Elemis Pro-Collagen Marine Cream 50ml',  1,  115.00),
  -- HW-ORD-014: Sophie — Breton Top + Courts
  ('HW-ORD-014', 'HW-WF003', 'White Stuff Organic Breton Stripe Top', 1,   45.00),
  ('HW-ORD-014', 'HW-WF004', 'Clarks Hamble Lane Leather Courts',     1,   85.00),
  -- HW-ORD-009: Robert — Sofa
  ('HW-ORD-009', 'HW-H001', 'Habitat Kemi 3-Seater Sofa in Charcoal', 1,  899.00),
  -- HW-ORD-015: Robert — Dyson Vacuum
  ('HW-ORD-015', 'HW-E004', 'Dyson V15 Detect Cordless Vacuum',       1,  649.00),
  -- HW-ORD-016: Robert — Timberland + Levi''s
  ('HW-ORD-016', 'HW-MF005', 'Timberland Premium 6-Inch Boot',        1,  185.00),
  ('HW-ORD-016', 'HW-MF004', 'Levi''s 501 Original Fit Jeans',       1,   85.00),
  -- HW-ORD-017: Olivia — Barbie + LEGO
  ('HW-ORD-017', 'HW-T002', 'Barbie Dreamhouse 2023',                 1,  229.00),
  ('HW-ORD-017', 'HW-T001', 'LEGO Technic Bugatti Bolide 42151',      1,  449.00),
  -- HW-ORD-018: Olivia — Floral Dress (returned)
  ('HW-ORD-018', 'HW-WF001', 'Phase Eight Floral Ruffle Midi Dress',  1,   89.00),
  -- HW-ORD-019: Thomas — Galaxy S24
  ('HW-ORD-019', 'HW-E008', 'Samsung Galaxy S24 128GB Phantom Black', 1,  799.00),
  -- HW-ORD-020: Thomas — Ninja Multi-Cooker
  ('HW-ORD-020', 'HW-E006', 'Ninja Foodi 9-in-1 Multi-Cooker',        1,  199.00),
  -- HW-ORD-021: Isabella — Clinique + Charlotte Tilbury
  ('HW-ORD-021', 'HW-B004', 'Clinique Moisture Surge 100H Hydrator',  1,   38.00),
  ('HW-ORD-021', 'HW-B001', 'Charlotte Tilbury Pillow Talk Lipstick', 1,   29.00),
  -- HW-ORD-022: William — Garden Furniture + Robotic Mower
  ('HW-ORD-022', 'HW-G001', 'Hartman Amalfi 6-Seat Garden Furniture Set', 1, 799.00),
  ('HW-ORD-022', 'HW-G002', 'Flymo SimpliMow 330R Robotic Lawn Mower', 1, 599.00),
  -- HW-ORD-023: William — Bose Speaker
  ('HW-ORD-023', 'HW-E010', 'Bose SoundLink Max Portable Speaker',    1,  349.00),
  -- HW-ORD-024: William — Mattress
  ('HW-ORD-024', 'HW-H005', 'Silentnight Eco Comfort Mattress King',  1,  549.00);
