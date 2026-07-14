# Database Schema Document (DSD)

**Project Name:** City Mobile Shop Management System

**Version:** 1.0.0

**Author:** Senior Database Architect

**Target Audience:** Backend Engineers, Database Administrators, Integration Specialists

---

## 1. System Database Overview

The **City Mobile Shop Management System** utilizes a normalized relational schema designed to eliminate error-prone handwritten workflows. The database tracks bulk accessory quantities alongside highly detailed, serialized pre-owned smartphone configurations within a unified storage architecture.

To accommodate the initial lightweight infrastructure constraints while preparing for enterprise scale, this schema enforces complete database engine portability. All data types, key constraints, and index structures chosen are strictly standard ANSI SQL compliant, facilitating a zero-downtime, frictionless migration from **SQLite** to **PostgreSQL**.

---

## 2. Table Schemas & Data Dictionary

### 2.1 `admins`

* **Purpose:** Stores secure authentication, credential hashes, and access profiles for the system administrator.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique internal system identifier for the admin. |
| `username` | VARCHAR(50) | UNIQUE, NOT NULL | Unique login name chosen by the administrator. |
| `email` | VARCHAR(100) | UNIQUE, NOT NULL | Primary communication email address. Used for recovery workflows. |
| `password_hash` | VARCHAR(255) | NOT NULL | Secure salted cryptographic hash of the user's password. |
| `last_login` | TIMESTAMP | NULL | Audit trail timestamp tracking the most recent successful authentication. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Database record generation timestamp. |
| `updated_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Auto-updating timestamp capturing profile adjustments. |

### 2.2 `categories`

* **Purpose:** Establishes organizational namespaces to classify high-volume accessories and pre-owned smartphones for rapid querying and public catalog filtering.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique system identifier for the category. |
| `name` | VARCHAR(100) | UNIQUE, NOT NULL | Display name of the category (e.g., "Tempered Glass", "Smartphones"). |
| `slug` | VARCHAR(100) | UNIQUE, NOT NULL | URL-sanitized token generated from the name for public website routes. |
| `description` | TEXT | NULL | Contextual information outlining what items fall under this classification. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Timestamp when the category was established. |

### 2.3 `suppliers`

* **Purpose:** Replaces the scattered ledger book entries by tracking external distributor metadata and rolling credit lines.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique internal system identifier for the supplier. |
| `company_name` | VARCHAR(150) | UNIQUE, NOT NULL | Formal corporate name of the supplying vendor. |
| `contact_name` | VARCHAR(100) | NOT NULL | Primary point of contact or agent representing the distributor. |
| `phone` | VARCHAR(20) | NOT NULL | Contact telephone number for order matching and validation. |
| `email` | VARCHAR(100) | NULL | Electronic mail address for procurement dispatching. |
| `total_balance_due` | DECIMAL(12,2) | NOT NULL, DEFAULT 0.00 | Real-time aggregate rolling debt liability owed to this supplier. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Initial vendor profile logging timestamp. |
| `updated_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Tracks modification times for balance updates or contact edits. |

### 2.4 `products`

* **Purpose:** A unified catalog tracking both bulk accessories and distinct pre-owned mobile hardware. Serial numbers and hardware conditions remain null for standard accessories but are strictly mandatory for second-hand device indexing.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique system identifier for the product entity. |
| `category_id` | INTEGER | FOREIGN KEY (`categories.id`), NOT NULL | Links the product to its specific operational group. |
| `sku` | VARCHAR(50) | UNIQUE, NULL | Stock Keeping Unit code, optimized for accessory barcode lookups. |
| `name` | VARCHAR(150) | NOT NULL | Marketing or functional name of the inventory item. |
| `brand` | VARCHAR(100) | NOT NULL | Manufacturer name (e.g., Apple, Samsung, Spigen). |
| `model_number` | VARCHAR(100) | NULL | Hardware model designation string. |
| `serial_or_imei` | VARCHAR(50) | UNIQUE, NULL | Hardware-specific identification string. Enforced unique for second-hand phones. |
| `cosmetic_grade` | VARCHAR(5) | NULL | Quality assessment index for used phones (e.g., "A+", "B"). |
| `battery_health` | INT | NULL | Calculated maximum battery capacity percentage for pre-owned devices. |
| `stock_quantity` | INT | NOT NULL, DEFAULT 0 | Real-time on-hand count. Automatically modified via sales/purchases. |
| `alert_threshold` | INT | NOT NULL, DEFAULT 5 | Low-stock notification trigger limit for accessories. |
| `cost_price` | DECIMAL(10,2) | NOT NULL | The base acquisition price paid to the distributor per unit. |
| `retail_price` | DECIMAL(10,2) | NOT NULL | Standard client-facing baseline selling price. |
| `is_active` | BOOLEAN | NOT NULL, DEFAULT TRUE | Soft-delete mechanism to hide phased-out listings from the catalog. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Catalog initialization timestamp. |

### 2.5 `purchases`

* **Purpose:** Summarizes incoming B2B inventory restock procurement events, matching them against vendor liabilities.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique system tracking code for the purchase order. |
| `supplier_id` | INTEGER | FOREIGN KEY (`suppliers.id`), NOT NULL | Maps the purchase block to the originating distributor. |
| `purchase_date` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | The explicit processing date of the bulk restock invoice. |
| `total_amount` | DECIMAL(12,2) | NOT NULL | Gross financial valuation calculated across all invoice line items. |
| `amount_paid` | DECIMAL(12,2) | NOT NULL, DEFAULT 0.00 | Immediate monetary down-payment made to the supplier. |
| `amount_due` | DECIMAL(12,2) | NOT NULL | Post-checkout debt remainder (`total_amount` - `amount_paid`). |
| `payment_status` | VARCHAR(20) | NOT NULL | Categorical standing flags: `PAID`, `PARTIAL`, `UNPAID`. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Record generation log. |

### 2.6 `purchase_items`

* **Purpose:** Line-item breakdown table detailing specific product counts and custom incoming unit costs inside a parent `purchases` invoice.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Line-item specific unique primary system key. |
| `purchase_id` | INTEGER | FOREIGN KEY (`purchases.id`), NOT NULL | Links to the primary parent procurement receipt transaction. |
| `product_id` | INTEGER | FOREIGN KEY (`products.id`), NOT NULL | Target item catalog index that received new inventory additions. |
| `quantity` | INT | NOT NULL | Volume of units checking into store inventory stacks. |
| `unit_cost` | DECIMAL(10,2) | NOT NULL | Specific purchase unit price negotiated for this batch order. |
| `subtotal` | DECIMAL(12,2) | NOT NULL | Total cost calculation for this row instance (`quantity` * `unit_cost`). |

### 2.7 `sales`

* **Purpose:** Parent billing register housing macro transactional metrics for consumer checkouts completed at the retail POS desk.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique system invoice and transaction identification number. |
| `sale_date` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Exact date-time stamp marking customer order validation. |
| `total_amount` | DECIMAL(10,2) | NOT NULL | Gross billing sum before deductions or tax implementations. |
| `discount_applied` | DECIMAL(10,2) | NOT NULL, DEFAULT 0.00 | Flat promotional deduction subtracted from the initial total sum. |
| `tax_amount` | DECIMAL(10,2) | NOT NULL, DEFAULT 0.00 | Government levy components processed dynamically. |
| `final_amount` | DECIMAL(10,2) | NOT NULL | Total customer charge (`total_amount` - `discount` + `tax`). |
| `payment_method` | VARCHAR(30) | NOT NULL | Audit payment tracking categories: `CASH`, `UPI`, `CARD`, `SPLIT`. |

### 2.8 `sale_items`

* **Purpose:** Granular manifest recording individual quantities and final customized sale costs for items assigned under a parent `sales` billing entry.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique line item identifier code. |
| `sale_id` | INTEGER | FOREIGN KEY (`sales.id`), NOT NULL | Mapping reference back to the parent order checkout record. |
| `product_id` | INTEGER | FOREIGN KEY (`products.id`), NOT NULL | Catalog product key representing the specific accessory or phone sold. |
| `quantity` | INT | NOT NULL | Numeric inventory units subtracted out from store reserves. |
| `unit_sale_price` | DECIMAL(10,2) | NOT NULL | Real checkout price per unit (allows handling unique counter discounts). |
| `subtotal` | DECIMAL(10,2) | NOT NULL | Extended total calculation for this transaction row (`quantity` * `unit_sale_price`). |

### 2.9 `customer_inquiries`

* **Purpose:** Captures lead tracking data from unauthenticated users interacting with catalog links on the storefront.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique database tracking code for the client inquiry. |
| `product_id` | INTEGER | FOREIGN KEY (`products.id`), NOT NULL | The product index context card the shopper initiated an action on. |
| `inquiry_type` | VARCHAR(20) | NOT NULL | Explicit traffic routing categories: `WHATSAPP`, `DIRECT_CALL`. |
| `ip_address` | VARCHAR(45) | NULL | Network tracking metric capturing geographical context of lead creation. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Log generation time marking when the CTA was clicked. |

### 2.10 `purchase_requests`

* **Purpose:** Internal tracking mechanism to queue automated item replenishment lists when bulk accessories hit low-stock markers.

| Column Name | Data Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique entry request ID code. |
| `product_id` | INTEGER | FOREIGN KEY (`products.id`), NOT NULL | Links to the item that breached safety stock configurations. |
| `suggested_supplier_id` | INTEGER | FOREIGN KEY (`suppliers.id`), NULL | Auto-populates vendor matching references based on last purchase history. |
| `current_stock_level` | INT | NOT NULL | The exact item count at the moment the notification triggered. |
| `request_status` | VARCHAR(20) | NOT NULL, DEFAULT 'PENDING' | Status lifecycle states: `PENDING`, `ORDERED`, `DISMISSED`. |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Automatic record initialization time. |

---

## 3. Database Relationships

The database architecture leverages cascading foreign key strategies to maintain data integrity across core business modules:

* **Catalog Core:** The `categories` table sits at the root of navigation. A **One-to-Many (1:N)** mapping links `categories.id` down into the `products` entity collection, dynamically organizing the store's stock profile.
* **Procurement Flow:** The `suppliers` registry forms a structural connection with the backend operations tracker. When ordering stock, a **One-to-Many (1:N)** linkage pairs `suppliers.id` with incoming `purchases` invoices. The macro billing receipt breaks out into an isolated **One-to-Many (1:N)** split with the child `purchase_items` line register. The detailed items inside reference back to the primary structural catalog via a **Many-to-One (N:1)** link from `purchase_items.product_id` to `products.id`.
* **Point of Sale (POS) Cycle:** Every transaction processed generates a master row tracking sheet within `sales`. This row maintains a strict **One-to-Many (1:N)** dependency down into the `sale_items` component manifest. Each row within the `sale_items` tracking table identifies its corresponding catalog index through a **Many-to-One (N:1)** mapping referencing back into `products.id`.
* **Public Engagement Vector:** Unauthenticated traffic tracking utilizes loose relational ties. A **One-to-Many (1:N)** map connects any single item in `products.id` down to multiple engagement records inside the `customer_inquiries` lead logging tables.
* **Automated Back-Office Flow:** The system monitors inventory depletion. When safe stock margins drop, a **One-to-Many (1:N)** association charts the specific structural unit configuration inside `products.id` directly into the `purchase_requests` table.

---

## 4. Database Design Principles

### 4.1 Normalization Architecture

The database conforms to **Third Normal Form (3NF)** standards to protect transactional operations from database anomalies:

* **Redundancy Mitigation:** Product parameters, supplier contact information, and core category descriptions exist strictly in isolated reference tables to reduce maintenance footprints.
* **Historical Data Preservation:** Historical product unit costs and transaction-specific item sale costs are hard-logged directly inside `purchase_items` and `sale_items` vectors. This prevents historical transaction invoices from shifting out of alignment when master prices are updated in the root `products` table.

### 4.2 Automated Inventory Control via Database Constraints

Inventory count updates utilize strict transactional database operations. Application services must wrap purchase intakes and POS sales checkout flows in atomic database transactions:

* **Sales Mutations:** When an individual transaction commits, the application decreases `products.stock_quantity` by the corresponding `sale_items.quantity`.
* **Purchase Intakes:** Confirming an incoming restock increases `products.stock_quantity` by the quantity defined in `purchase_items.quantity`.
* **Integrity Assurance:** The system applies database check constraints (`CHECK (stock_quantity >= 0)`) to the data structure to prevent out-of-order execution from dropping inventory numbers below zero.

### 4.3 Indexing Optimization Blueprint

To maintain high performance as data rows expand over multiple fiscal quarters, strategic database index matrices are implemented across frequent search criteria fields:

* **Public Catalog Browsing:** Composite indexes cover `products(is_active, category_id)` to speed up customer page loads and catalog filtering operations.
* **Text Query Optimization:** B-Tree indexes track `products(name, brand)` to handle alphanumeric filtering and pattern searches.
* **Hardware Validation Queries:** A unique index maps `products(serial_or_imei)` to enable sub-millisecond search lookups for second-hand device trade-in validations.
* **Reporting Pathways:** Indexes cover `sales(sale_date)` and `purchases(purchase_date)` to accelerate custom dashboard analytics rendering and periodic financial calculations.

### 4.4 Engine Portability & Future Scale

To ensure smooth migration from a local embedded **SQLite** environment to a distributed production **PostgreSQL** deployment, the database enforces engine-agnostic parameters:

* **ANSI SQL Standard Data Types:** Avoids using engine-locked column assignments. Standard formats such as `VARCHAR`, `DECIMAL`, and `TIMESTAMP` ensure cross-platform compatibility.
* **Normalization of Computations:** Avoids relying on engine-specific database triggers or localized virtualization scripts. Calculations like rolling margins and supplier account adjustments are handled natively inside the core application service tier using standardized SQL database inputs.