# User Interface Wireframe Document

**Project Name:** City Mobile Shop Management System

**Version:** 1.0.0

**Author:** Senior UI/UX Designer

**Target Audience:** Frontend Developers, UI/UX Teams, Project Stakeholders

---

## Part 1: Admin Dashboard

### 1.1 Login Page

* **Layout Style:** Centered, single-column card interface with high contrast focusing on minimizing cognitive load.
* **Accessibility:** Clear input borders, persistent placeholders, and prominent focus states.

```text
+-------------------------------------------------------------+
|                                                             |
|                      [ CITY MOBILE SHOP ]                   |
|                            (Logo)                           |
|                                                             |
|               +-----------------------------+               |
|               | Secure Administrator Login  |               |
|               +-----------------------------+               |
|               |                             |               |
|               |  Email Address              |               |
|               |  [ admin@citymobile.com   ] |               |
|               |                             |               |
|               |  Password                   |               |
|               |  [ ************           ] |               |
|               |                             |               |
|               |  [X] Remember this device   |               |
|               |                             |               |
|               |  +-----------------------+  |               |
|               |  |       LOG IN          |  |               |
|               |  +-----------------------+  |               |
|               |                             |               |
|               |  <u>Forgot Password?</u>       |               |
|               +-----------------------------+               |
|                                                             |
+-------------------------------------------------------------+

```

---

### 1.2 Dashboard

* **Layout Style:** Persistent left-hand sidebar navigation paired with a top contextual navbar and a fluid grid system for operational metrics.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | TOP NAVBAR                                                      [Admin Logout] |
+--------------------+------------------------------------------------------------------------------+
| [■] Dashboard      | Dashboard Overview // Quick Actions: [+ New Sale]  [+ New Purchase]          |
| [📦] Products      +------------------------------------------------------------------------------+
| [🗂️] Categories    |  +---------------+  +---------------+  +---------------+  +---------------+  |
| [🤝] Suppliers     |  | TODAY'S SALES |  | MONTHLY SALES |  | NET PROFIT    |  | PENDING DUETS |  |
| [📥] Purchases     |  | $1,420.00     |  | $32,450.00    |  | $8,910.00     |  | $4,120.00     |  |
| [🛒] Sales         |  | (+12% vs yesterday) | (+4% vs prev mth) | (Margin: 27%) | (3 Suppliers) |  |
| [📊] Reports       |  +---------------+  +---------------+  +---------------+  +---------------+  |
| [💬] Inquiries     |  | [!] LOW STOCK ALERT: 8 items require immediate attention      [View Details] |  |
| [📋] Requests      +------------------------------------------------------------------------------+
|                    |  MONTHLY SALES & NET PROFIT GRAPH             | TOP SELLING PRODUCTS CHART   |
|                    |  [Jan]   |--######------------------          | 1. iPhone 13 Pro (Used)  [==] |
|                    |  [Feb]   |--########----------------          | 2. Privacy Glass Pro     [===]|
|                    |  [Mar]   |--###########-------------          | 3. 20W Type-C Charger    [=]  |
|                    |  [Apr]   |--##############----------          | 4. Silicone Case Pro     [=]  |
|                    +-----------------------------------------------+------------------------------+
|                    |  RECENT TRANSACTIONS TABLE                                     [View All Sales] |
|                    |  Invoice ID   | Time     | Items Summary         | Total Amount  | Status    |
|                    |  #INV-9402    | 14:32 PM | 1x Used iPhone 11     | $349.00       | [ SUCCESS]|
|                    |  #INV-9401    | 14:15 PM | 3x Tempered Glass     | $45.00        | [ SUCCESS]|
+--------------------+------------------------------------------------------------------------------+

```

---

### 1.3 Products Page

* **Layout Style:** Unified data table interface featuring comprehensive global searching, quick-filtering facets, and direct inline crud operations.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | PRODUCTS DIRECTORY                                                           |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | Search Products: [ Search SKU, Name, Brand...  ] Category: [ All Categories v] |
| [■] Products       | Stock Status:   [ All Stock Status   v]         Action:   [+ ADD NEW PRODUCT] |
| [ ] Categories     +------------------------------------------------------------------------------+
| [ ] Suppliers      | Image | SKU     | Product Title         | Category  | Stock | Cost  | Retail| Action |
| [ ] Purchases      | +---+ | ACC-012 | Spigen Armor Case     | Cases     | 45    | $8.00 | $19.99| [E] [D]|
| [ ] Sales          | |IMG| | MBL-881 | Apple iPhone 12 (Used)| Phones    | 2     | $290  | $420.00| [E] [D]|
| [ ] Reports        | +---+ | ACC-043 | Type-C to C Cable 1m  | Cables    | 0 [!] | $2.50 | $12.00| [E] [D]|
| [ ] Inquiries      | +---+ | ACC-092 | Anker 20W Wall Plug   | Chargers  | 18    | $7.00 | $18.50| [E] [D]|
| [ ] Requests       +------------------------------------------------------------------------------+
|                    | Showing 1-4 of 182 Products                  << First  < Prev  [1] 2 3  Next >   |
+---------------------------------------------------------------------------------------------------+

```

---

### 1.4 Suppliers Page

* **Layout Style:** Multi-column accounts payable tracking screen highlighting supplier communication metrics, current credit balances, and transaction history cards.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | SUPPLIER MANAGEMENT & CREDIT LEDGERS                                         |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | Search Suppliers: [ Enter company name... ]         Action:   [+ ADD NEW SUPPLIER] |
| [ ] Products       +------------------------------------------------------------------------------+
| [ ] Categories     | Supplier Details         | Contact Metric | Pending Balance | Quick Actions  |
| [ ] Suppliers      | **Matrix Accessories**    | +91 98765 43210| $1,850.00       | [View History] |
| [■] Purchases      | Reg. ID: SUP-001         | sales@matrix.com|                 | [Log Payment]  |
| [ ] Sales          |--------------------------+----------------+-----------------+----------------|
| [ ] Reports        | **Om Pre-Owned Phones**   | +91 87654 32109| $2,270.00       | [View History] |
| [ ] Inquiries      | Reg. ID: SUP-002         | info@omphones.in|                 | [Log Payment]  |
| [ ] Requests       |--------------------------+----------------+-----------------+----------------|
|                    | **CellShield Distribution**|+91 76543 21098| $0.00           | [View History] |
|                    | Reg. ID: SUP-003         | supply@shield.com|                | [Log Payment]  |
+--------------------+------------------------------------------------------------------------------+

```

---

### 1.5 Purchases Page (Inventory Procurement)

* **Layout Style:** Dynamic double-column form. Left layout handles procurement order metadata entry; right layout handles active items in the delivery batch receipt.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | RECORD INCOMING PROCUREMENT BATCH                                            |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | PURCHASE INTAKE ENTRY               | BATCH INVOICE MANIFEST                 |
| [ ] Products       +-------------------------------------+----------------------------------------+
| [ ] Categories     | Supplier:                           | Selected Items Profile:                |
| [ ] Suppliers      | [ Select Registered Supplier     v] | 1. Spigen Armor Case                   |
| [■] Purchases      |                                     |    Qty: [ 50 ]  Unit Cost: [ $8.00  ]  |
| [ ] Sales          | Add Product Item to Batch:          |    Subtotal: $400.00          [ Remove] |
| [ ] Reports        | [ Search SKU / Item Name...      v] | 2. Anker 20W Wall Plug                 |
| [ ] Inquiries      |                                     |    Qty: [ 20 ]  Unit Cost: [ $7.00  ]  |
| [ ] Requests       | Dynamic Inputs for Second-Hand:     |    Subtotal: $140.00          [ Remove] |
|                    | IMEI/Serial:   [ Enter Device IMEI ]|----------------------------------------|
|                    | Cosmetic Grade:[ Select Grade    v] | SUMMARY DATA:                          |
|                    |                                     | Gross Cost Total:  $540.00             |
|                    | +---------------------------------+ | Cash Advance Paid: [ $200.00 ]         |
|                    | | ADD ITEM TO MANIFEST            | | Rolling Debt Added: $340.00            |
|                    | +---------------------------------+ |                                        |
|                    |                                     | [ SUBMIT & LOG INCOMING BATCH ]        |
+--------------------+-------------------------------------+----------------------------------------+

```

---

### 1.6 Sales Page (Point of Sale Counter)

* **Layout Style:** High-velocity desktop counter interface optimization optimized for swift product querying and fast invoice calculations.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | POINT OF SALE (POS) CUSTOMER CHECKOUT                                        |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | ACTIVE CHECKOUT BASKET                                                       |
| [ ] Products       +------------------------------------------------------------------------------+
| [ ] Categories     | Add Checkout Item: [ Scan Barcode or Type Product SKU/Name...             ] |
| [ ] Suppliers      +------------------------------------------------------------------------------+
| [ ] Purchases      | Item Code | Item Description             | Qty     | Unit Price | Total   |   |
| [■] Sales          | ACC-012   | Spigen Armor Case            | [ 2 ]   | $19.99     | $39.98  |[X]|
| [ ] Reports        | MBL-881   | Apple iPhone 12 (Used - Gr A)| [ 1 ]   | $420.00    | $420.00 |[X]|
| [ ] Inquiries      +------------------------------------------------------------------------------+
| [ ] Requests       | INVOICE CALCULATOR MATRIX                 | PAYMENT TRANSACTION ROUTING      |
|                    | Gross Base Subtotal:   $459.98            | Select Mode:                     |
|                    | Apply Coupon/Discount: [ $19.98     ]     | ( ) Cash   (•) UPI   ( ) Card     |
|                    | Estimated Tax (GST):   $0.00              |                                  |
|                    | Final Charge Collect:  $440.00            | [ COMPLETE TRANSACTION & PRINT ] |
+--------------------+------------------------------------------------------------------------------+

```

---

### 1.7 Reports & Profit Analytics Page

* **Layout Style:** Date-filtered reporting interface utilizing dashboard widgets to isolate variables like inventory assets, operational overhead, and profit margins.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | SYSTEM REPORTING & PROFIT ANALYTICS ENGINE                                   |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | Date Range: [ 2026-06-01 ] to [ 2026-06-30 ]  Preset: [ Last 30 Days       v] |
| [ ] Products       +------------------------------------------------------------------------------+
| [ ] Categories     | GROSS REVENUE CHART               | PROFITABILITY SUMMARY DATA               |
| [ ] Suppliers      | $40k|      _/\_                   | Total Sales Count:   342 Invoices        |
| [ ] Purchases      | $30k|     /    \                  | Gross Revenue Log:   $38,420.00          |
| [ ] Sales          | $20k|  /\_      \_                | Cost of Goods Sold:  $26,100.00          |
| [■] Reports        | $10k| /   \       \               | Operational Margins: $12,320.00          |
| [ ] Inquiries      |  $0k+--------------------         | Net Profit Metric:   **32.06%**          |
| [ ] Requests       |     05  10  15  20  25  30            | [ EXPORT PROFIT SUMMARY TO CSV / PDF ]   |
|                    +-----------------------------------+------------------------------------------+
|                    | TOP PRODUCT REVENUE LEADERBOARD                                              |
|                    | Product Code | Description            | Units Sold | Total Generated Revenue |
|                    | MBL-881      | Apple iPhone 12 (Used) | 12 Units   | $5,040.00               |
|                    | ACC-012      | Spigen Armor Case      | 140 Units  | $2,798.60               |
+--------------------+------------------------------------------------------------------------------+

```

---

### 1.8 Customer Inquiries Log

* **Layout Style:** Unauthenticated engagement logging monitor enabling the administrator to parse leads and open direct external customer communications instantly.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | INBOUND CUSTOMER ENGAGEMENT TRACKING LEDGER                                  |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | Status Filter: [ All Open Requests v] Target Category: [ All Categories   v] |
| [ ] Products       +------------------------------------------------------------------------------+
| [ ] Categories     | Target Product Details        | Inquiry Channel| Click Time     | Quick Action|
| [ ] Suppliers      | **Apple iPhone 12 (Used)**    | [ WHATSAPP ]   | 2026-07-15     | [LAUNCH WA] |
| [ ] Purchases      | SKU: MBL-881 // Grade A       |                | 14:32 PM       |             |
| [ ] Sales          |-------------------------------+----------------+----------------+-------------|
| [ ] Reports        | **Spigen Armor Case**         | [ DIRECT CALL ]| 2026-07-15     | [DIAL PHONE]|
| [■] Inquiries      | SKU: ACC-012 // Black Color   |                | 11:14 AM       |             |
| [ ] Requests       |-------------------------------+----------------+----------------+-------------|
|                    | **Anker 20W Wall Plug**       | [ WHATSAPP ]   | 2026-07-14     | [LAUNCH WA] |
|                    | SKU: ACC-092 // White Color   |                | 09:45 AM       |             |
+--------------------+------------------------------------------------------------------------------+

```

---

### 1.9 Purchase Requests Page (Auto-Restock Planner)

* **Layout Style:** Order planning desk summarizing depleted accessories to facilitate bulk purchase creation.

```text
+---------------------------------------------------------------------------------------------------+
| SIDEBAR            | AUTOMATED INVENTORY REPLENISHMENT PLANNER                                    |
+--------------------+------------------------------------------------------------------------------+
| [ ] Dashboard      | Review auto-generated restocking entries based on product trigger metrics.  |
| [ ] Products       +------------------------------------------------------------------------------+
| [ ] Categories     | [X] | Product Description     | Current Count | Reorder Minimum | Suggested Vendor |
| [ ] Suppliers      | [X] | Type-C to C Cable 1m    | 0 Units [!]   | 15 Units        | Matrix Access.   |
| [ ] Purchases      | [X] | Privacy Glass Pro       | 2 Units [!]   | 20 Units        | Matrix Access.   |
| [ ] Sales          | [ ] | Silicone Case iPhone 13 | 4 Units       | 10 Units        | CellShield Dist. |
| [ ] Reports        | [X] | 20W Type-C Charger      | 1 Unit  [!]   | 12 Units        | Matrix Access.   |
| [ ] Inquiries      +------------------------------------------------------------------------------+
| [■] Requests       | Combined Summary Matrix: 3 items flagged for procurement generation.        |
|                    | +------------------------------------+  +------------------------------------+ |
|                    | | COPY REORDER BATCH LIST TO CLIPBD  |  | GENERATE FORMAL PROCUREMENT INTAKE | |
|                    | +------------------------------------+  +------------------------------------+ |
+--------------------+------------------------------------------------------------------------------+

```

---

## Part 2: Customer Website (No Login Required)

### 2.1 Home Page

* **Layout Style:** Conversion-centric clean interface showcasing inventory categories and direct WhatsApp hooks.

```text
+---------------------------------------------------------------------------------------------------+
| [CITY MOBILE]                                    [ HOME ]  [ ACCESSORIES ]  [ USED PHONES ]  [ CONTACT ] |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|   HERO BANNER MODULE                                                                              |
|   Premium Mobile Accessories & Certified Pre-Owned Smartphones                                    |
|   Find top brands with real hardware grading warranties.                                          |
|                                                                                                   |
|   [ 🔍 Search Accessories or Phone Models...                                                    ] |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
| BROWSE STORES CATEGORIES                                                                          |
| +------------------+  +------------------+  +------------------+  +------------------+            |
| | [📱] USED PHONES |  | [🔌] CHARGERS    |  | [🛡️] GLASS PRO   |  | [🎧] AUDIO GEAR  |            |
| +------------------+  +------------------+  +------------------+  +------------------+            |
+---------------------------------------------------------------------------------------------------+
| FEATURED PRODUCT SHOWCASE RELEASES                                                                |
| +------------------------+  +------------------------+  +------------------------+                |
| | +--------------------+ |  | +--------------------+ |  | +--------------------+ |                |
| | |       [IMG]        | |  | |       [IMG]        | |  | |       [IMG]        | |                |
| | +--------------------+ |  | +--------------------+ |  | +--------------------+ |                |
| | Apple iPhone 12 (Used) |  | Spigen Armor Case Pro  | |  | Anker 20W Wall Charger |                |
| | Price: $420.00         |  | Price: $19.99          |  | Price: $18.50          |                |
| | [ VIEW FULL DETAILS ]  |  | [ VIEW FULL DETAILS ]  |  | [ VIEW FULL DETAILS ]  |                |
| +------------------------+  +------------------------+  +------------------------+                |
+---------------------------------------------------------------------------------------------------+
| FLOATING CTA BUTTON FOOTER HOOKS                         [ 💬 INSTANT WHATSAPP CHAT ENQUIRY ]     |
| © 2026 City Mobile Inc. // Address: Local Storefront Main St. // Call Store: +91 98765 43210      |
+---------------------------------------------------------------------------------------------------+

```

---

### 2.2 Products Browser Catalog Page

* **Layout Style:** Standard asymmetric browsing layout featuring a sticky filter sidebar combined with a clean multi-column card directory.

```text
+---------------------------------------------------------------------------------------------------+
| [CITY MOBILE]                                    [ HOME ]  [ ACCESSORIES ]  [ USED PHONES ]  [ CONTACT ] |
+---------------------------------------------------------------------------------------------------+
| SEARCH DIRECTORY: [ Search by keyword...           ] | Sorted By: [ Price: Low to High         v] |
+---------------------------------------------------------------------------------------------------+
| FILTER SIDEBAR       | ACTIVE PRODUCT GRID                                                        |
|                      | Showing 1-3 of 3 Matches                                                   |
| Category Matrix:     | +------------------------+  +------------------------+  +----------------+ |
| [X] Used Smartphones | | +--------------------+ |  | +--------------------+ |  | +------------+ | |
| [ ] Power Chargers   | | |       [IMG]        | |  | |       [IMG]        | |  | |   [IMG]    | | |
| [ ] Defense Cases    | | +--------------------+ |  | +--------------------+ |  | +------------+ | |
|                      | | Apple iPhone 12        |  | Apple iPhone 11        |  | Samsung S21    | |
| Pricing Tier:        | | Grade: Excellent (A+)  |  | Grade: Good (B)        |  | Grade: Mint (A)| |
| Min: [ $100 ]        | | Price: $420.00         |  | Price: $299.00         |  | Price: $380.00 | |
| Max: [ $600 ]        | |                        |  |                        |  |                | |
|                      | | [ VIEW DETAILS ]       |  | [ VIEW DETAILS ]       |  | [ VIEW DETAILS ] |
| Device Condition:    | +------------------------+  +------------------------+  +----------------+ |
| (•) All Grades       |                                                                            |
| ( ) Grade A+ Only    |                                                                            |
+----------------------+----------------------------------------------------------------------------+

```

---

### 2.3 Product Details Page

* **Layout Style:** Split presentation interface separating device specifications and hardware validation logs from communication call-to-actions.

```text
+---------------------------------------------------------------------------------------------------+
| [CITY MOBILE]                                    [ HOME ]  [ ACCESSORIES ]  [ USED PHONES ]  [ CONTACT ] |
+---------------------------------------------------------------------------------------------------+
| <-- Back to Browsing Directory                                                                    |
+---------------------------------------------------------------------------------------------------+
| PRODUCT IMAGES GALLERY            | MAIN SPECIFICATION SHEET & INQUIRY MECHANISM                  |
| +-------------------------------+ |                                                               |
| |                               | | **Apple iPhone 12 (Certified Pre-Owned)**                    |
| |                               | | Category: Used Smartphones // Brand: Apple                  |
| |             [IMG]             | | Retail Price: **$420.00**                                   |
| |                               | | Stock Availability: [ 2 Units Left In-Store ]               |
| |                               | |-------------------------------------------------------------|
| +-------------------------------+ | HARDWARE QUALITY METRICS LOG (VERIFIED BY SHOP):             |
|   [Thumb 1] [Thumb 2] [Thumb 3]   | Cosmetic Grade Status:   [ GRADE A+ ] - Flawless Casing       |
|                                   | Battery Health Summary:  89% Operating Capacity               |
|                                   | Network Connectivity:   Unlocked to all Carriers              |
|                                   |-------------------------------------------------------------|
|                                   | INTERESTED IN THIS SPECIFIC DEVICE?                         |
|                                   | Click below to connect directly with our sales counter:     |
|                                   |                                                             |
|                                   | +---------------------------------------------------------+ |
|                                   | | [💬] INQUIRE ABOUT THIS PHONE VIA WHATSAPP              | |
|                                   | +---------------------------------------------------------+ |
|                                   | | [📞] CALL OUTLET DIRECTLY FOR CUSTOMER RESERVATION      | |
|                                   | +---------------------------------------------------------+ |
+-----------------------------------+-------------------------------------------------------------+

```

---

### 2.4 Contact Page

* **Layout Style:** Layout emphasizing clear store discovery, complete business metadata, and simple communication interfaces.

```text
+---------------------------------------------------------------------------------------------------+
| [CITY MOBILE]                                    [ HOME ]  [ ACCESSORIES ]  [ USED PHONES ]  [ CONTACT ] |
+---------------------------------------------------------------------------------------------------+
| RETAIL STOREFRONT DISCOVERY HUB                                                                   |
+---------------------------------------------------------------------------------------------------+
| BUSINESS PROFILE METADATA         | GOOGLE MAPS LOCATION PLACEHOLDER                              |
|                                   | +-----------------------------------------------------------+ |
| **City Mobile Shop**              | |                                                           | |
|                                   | |                                                           | |
| **Physical Address:**             | |               [ GRAPHIC MAP CONTAINER INTERFACE ]         | |
| 102 Retail Galleria, Main Street  | |               Cross Streets: Opposite Metro Station       | |
| Chhatrapati Sambhajinagar, India  | |                                                           | |
|                                   | |                                                           | |
| **Operational Hours:**            | +-----------------------------------------------------------+ |
| Monday - Saturday: 10 AM - 9 PM   | QUICK CONNECT VECTOR LINKS:                                 |
| Sunday: Closed                    | +-----------------------------+ +---------------------------+ |
|                                   | | [💬] START CHAT ON WHATSAPP | | [📞] VOICE CALL OVER PHONE| |
| **Direct Communication:**         | +-----------------------------+ +---------------------------+ |
| Tel Line:  +91 98765 43210        |                                                               |
| Electronic: support@citymob.in    | [!] No user login account profiles are required to visit.    |
+-----------------------------------+-------------------------------------------------------------+

```