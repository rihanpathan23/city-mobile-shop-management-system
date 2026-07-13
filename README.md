# 📱 city-mobile-shop-management-system

[![Project Status: Active](https://img.shields.io/badge/Project%20Status-In%20Development-yellow.svg)](https://github.com/RihanPathan/city-mobile-shop-management-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/RihanPathan/city-mobile-shop-management-system/pulls)

A production-grade, full-stack ERP and Point of Sale (POS) web application designed specifically for retail mobile accessory hubs and second-hand smartphone businesses. This system transitions brick-and-mortar mobile stores from error-prone manual bookkeeping to a secure, automated, and analytical digital platform.

---

## 📌 Project Overview

The **City Mobile Shop Management System** is engineered to streamline specialized retail ecosystems. Unlike generalized POS solutions, this system natively handles complex workflows distinct to the mobile trade—such as tracking unique **IMEI/Serial numbers** for pre-owned smartphones, managing dynamic second-hand grading (A/B/C conditions), executing multi-stage supplier payment structures, and cataloging thousands of high-turnover accessory SKUs.

By unifying inventory, procurement, point-of-sale, and supplier ledgering into a centralized web-based dashboard, this application empowers store owners to optimize margins, prevent inventory leakage, and make data-driven purchasing decisions.

---

## 🛑 Problem Statement

Currently, traditional mobile shop owners manage their entire business operational lifecycle using **handwritten diaries and physical ledger logs**. This manual architecture suffers from severe operational vulnerabilities:

*   **Inventory Discrepancy & Leakage:** Tracking high-volume, low-cost accessories (tempered glass, cases, cables) alongside high-value second-hand devices leads to untraceable stock shrinkage and auditing nightmares.
*   **Lack of Hardware-Specific Tracking:** Pre-owned phones require rigorous tracking via unique IMEI codes to comply with legal compliance frameworks and track repair/refurbishment histories. Handwritten diaries fail to search or validate these numbers efficiently.
*   **Opaque Supplier Ledgers:** Procurement involves partial advances, post-dated credit terms, and trade-in balances. Manual records lead to discrepancies in due amounts, strained supplier relations, and missed payment deadlines.
*   **Zero Real-Time Analytics:** Owners cannot instantly evaluate daily profit margins, identify top-selling accessory categories, or assess the depreciation rate of sitting second-hand stock.

---

## ✨ Features

### 📋 Current Implemented Features
*   **Granular Inventory Tracking:** Separate indexing structures for brand-new bulk accessories and individualized pre-owned devices.
*   **IMEI-Level Cataloging:** Automated field validation enforcing unique IMEI/Serial data injection for every second-hand phone acquired.
*   **Dynamic Supplier Ledger:** Real-time balance calculations supporting cash, digital payment records, and outstanding credit logs per supplier.
*   **Digital Invoicing Engine:** Generates lightweight, printable web invoices featuring automated GST/tax breakdowns and customizable store terms.
*   **Secure Authentication & RBAC:** Role-Based Access Control distinguishing Owner (Full administrative access) from Counter Sales Executives (Restricted POS execution only).

### 🚀 Planned Features (Next Milestone)
*   **Automated Device Grading Evaluation:** A wizard UI to input functional defects (screen scratches, battery health, camera condition) to auto-calculate fair market buying/selling rates for second-hand phones.
*   **WhatsApp Business API Integration:** Automatic automated dispatch of invoices, repair update alerts, and outstanding balance reminders directly to customers and suppliers.
*   **Barcode & QR Code Scanner Integration:** Native support for USB/Bluetooth barcode guns to rapidly scan accessory SKUs during checkout cycles.
*   **Low-Stock Predictive Alerts:** Visual dashboards highlighting accessories dropping below safe baseline thresholds, integrated with rapid Reorder Email drafts.

---

## 🛠️ Planned Tech Stack

The architecture is built on a modern, decoupled stack prioritizing high performance, minimal maintenance overhead, and rapid deployment.

### Backend Pipeline
*   **Framework:** Python Flask (with Flask-RESTful for clean API endpoint separation)
*   **Database:** PostgreSQL (Production-grade relational mapping ensuring strict transactional ACID compliance for sales data)
*   **ORM:** SQLAlchemy (For robust, migration-friendly database modeling)
*   **Task Queue:** Celery + Redis (To handle asynchronous WhatsApp notification dispatches and daily backup operations)

### Frontend Engine
*   **Structure & Styling:** Modern HTML5, CSS3, and TailwindCSS (For an optimized, utility-first responsive layout tailored for counter tablets and desktop monitors)
*   **Interactivity:** Vanilla Javascript / Alpine.js (Lightweight reactive client states avoiding heavy SPA overhead)

---

## 📂 Folder Structure

The project implements a clean, modular **Factory Pattern** architecture separating business logic, database blueprints, and layout components:

```text
city-mobile-shop-management-system/
├── app/
│   ├── __init__.py          # Application factory initialization
│   ├── config.py            # Environment & database configurations
│   ├── models/              # SQLAlchemy database blueprints
│   │   ├── __init__.py
│   │   ├── user.py          # Authentication & RBAC tables
│   │   ├── product.py       # Accessories & Phone records
│   │   ├── supplier.py      # Supplier profile & credit ledgers
│   │   └── sales.py         # Invoices & Transaction details
│   ├── routes/              # HTTP Request routing split by domains
│   │   ├── auth.py
│   │   ├── dashboard.py
│   │   ├── inventory.py
│   │   └── billing.py
│   ├── static/              # Compiled assets (CSS, JS, UI icons)
│   └── templates/           # Server-side rendered HTML views
├── migrations/              # Database schema versioning history
├── tests/                   # PyTest automation coverage suites
├── .env.example             # Template for secure environment variables
├── .gitignore
├── requirements.txt         # Main Python dependencies manifests
├── README.md                # System documentation core
└── run.py                   # High-level application bootstrapper
```

---

## 🗺️ Development Roadmap

### Phase 1: Core Foundation & Schema Design ⚙️ (Current Phase)
- [x] Configure modular application factory using Flask.
- [x] Establish PostgreSQL database migrations and entity relations (Users, Inventory, Ledgers).
- [x] Deploy secure JWT/Session-based authentication protocols with role restrictions.

### Phase 2: Inventory & Ledger Matrix 📱
- [ ] Build UI modules for Accessory Batch intake and unique Second-hand Phone registration.
- [ ] Implement live CRUD functionalities for Supplier ledger tables tracking credit metrics.
- [ ] Write integration test cases verifying mathematical precision on multi-item invoicing.

### Phase 3: Interactive POS Engine & Integrations 🛒
- [ ] Implement client-side dynamic item calculation fields using JavaScript.
- [ ] Embed native barcode processing triggers within the invoice field matrix.
- [ ] Set up external API infrastructure hook for WhatsApp messaging queues.

### Phase 4: Analytical Reporting & Optimization 📊
- [ ] Integrate Chart.js modules into the central Dashboard displaying monthly profit trends.
- [ ] Run localized performance profiling and index optimizations on SQL query structures.

---

## 🚦 Project Status

*   **Current State:** `Alpha Development`
*   **Milestone:** Infrastructure setup, schema blueprint mappings, and primary authentication layouts are fully complete. Current active focus is centered on refining the data entry workflow interfaces for second-hand device grading tracking.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` in the root repository for explicit terms regarding open-source contribution and deployment rights.