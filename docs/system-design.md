System Design Document (SDD)
Project Name: City Mobile Shop Management System

Version: 1.0.0

Author: Senior Software Architect

Target Audience: Engineering Team, Full-Stack Developers, DevOps Engineers

1. System Overview
The City Mobile Shop Management System is a production-grade, full-stack web application designed to digitize the operational workflows of a retail mobile accessory and pre-owned smartphone establishment. The system transitions the shop from a highly vulnerable, manual, paper-diary operational model into a streamlined digital ecosystem.

The application architecture serves a dual purpose:

Administrative ERP/POS Interface: A secure, authenticated dashboard for the Admin (Shop Owner) to govern inventory, trace complex supplier credit balances, execute retail sales, and review core business analytics.

Public Catalog Interface: A lightweight, unauthenticated client-facing portal enabling Customers to dynamically browse, search, and filter available accessories and second-hand smartphone inventory, with direct calls-to-action (CTAs) for WhatsApp inquiries and direct calling.

2. High-Level Architecture
The system utilizes a decoupled, client-server architecture designed for rapid deployment, ease of maintenance, and structured future scalability.

+-----------------------------------+      +-----------------------------------+
|     Admin Dashboard (React)       |      |     Public Catalog (React)        |
+---------------------------------+-+      +-+---------------------------------+
                                  |          |
                           HTTPS  |          |  HTTPS
                                  v          v
                        +----------------------+
                        | API Gateway / Router |
                        +----------+-----------+
                                   |
                                   v
                        +----------------------+
                        | Node.js / Express.js |  Runtime Environment
                        |   Application Core   |
                        +----------+-----------+
                                   |
                                   v
                        +----------------------+
                        | SQLite Database Engine| (Planned PostgreSQL Migration)
                        +----------------------+
Frontend Layer: Built with React, separating administrative views from public browse vectors. The client state communicates with the backend exclusively via asynchronous RESTful API transactions.

Backend Application Layer: A Node.js runtime executing an Express.js web server. The backend handles request routing, strict validation middleware, business logic processing, and database transaction abstraction.

Data Tier: An embedded, file-based SQLite engine will serve as the initial database to minimize infrastructure complexity during early deployment phases, structured to seamlessly transition to a production-grade relational PostgreSQL instance.

Hosting Env: The entire stack is provisioned for automated continuous deployment (CI/CD) hosting via Render.

3. Application Modules
3.1 Administrative Modules (Authenticated)
Authentication & Session Guard: Implements state verification checkpoints utilizing JSON Web Tokens (JWT) to secure sensitive administrative endpoints.

Inventory & Product Matrix: Handles data management for two distinct catalog types: bulk accessory items (tracked by quantities and SKUs) and second-hand mobile devices (tracked via unique serial profiles, conditions, and attributes).

Procurement & Supplier Ledger: Manages vendor profiles and updates outstanding balances, recording rolling credit limits as stock purchases are committed.

POS Point-of-Sale Checkout: A transaction interface that processes sales selections, calculates discounts/taxes, modifies active stock quantities, and logs payment modes.

Analytics Engine: Aggregates line-item revenue records to display daily gross margins, accounts payable liabilities, and exportable periodic financial logs.

3.2 Public Customer Modules (Unauthenticated)
Dynamic Catalog Browser: A read-only interface rendering real-time product cards directly connected to active inventory datasets.

Faceted Search & Filtering: Client-side and database-indexed filtering mechanics allowing customers to parse stock by category, price, brand, or second-hand phone parameters.

Lead-Capture CTA Links: Hardcoded action links routing target item descriptions directly into structured WhatsApp message pre-fills ([https://wa.me/](https://wa.me/)) or initiating localized cellular telephone calls.

4. Authentication Flow
To maintain secure session management without heavy state overhead on the Express server, the system employs stateless JWT (JSON Web Tokens).

[Admin Client] -------- 1. Submit Credentials (POST /api/auth/login) --------> [Express Server]
[Admin Client] <------- 2. Validate & Return Encrypted JWT Token ------------ [Express Server]
                                    |
                       (Token stored in HTTP-Only Cookie)
                                    |
[Admin Client] -------- 3. Request Protected Route (Header: Bearer <Token>) -> [Express Server]
[Admin Client] <------- 4. Middleware Decodes Token & Transmits Payload ------ [Express Server]
Handshake: The Admin inputs credentials which pass through a secure HTTPS POST payload to the backend auth endpoint.

Verification: The server validates the credentials against the hashed administrator record. Upon match, the server signs a JWT payload containing user identification and an expiration timestamp.

Storage: The token is transmitted back to the client and securely stored in memory or an HTTP-Only cookie to neutralize Cross-Site Scripting (XSS) intercept vectors.

Verification Middleware: Subsequent requests to administrative endpoints must embed this token within the Authorization header. The server decodes it using a protected environment secret before executing downstream business functions.

5. Data Flow
5.1 Public Browsing & Query Pathway
The customer lands on the public web interface, triggering a fetch request to /api/products.

The Express router accepts the query parameters (e.g., category=second-hand-phones).

The server executes an optimal SELECT query against the SQLite engine.

The dataset is returned to the Node runtime, framed into a uniform JSON array, and rendered on the client side.

5.2 Transaction & Stock Mutation Pathway (Admin POS)
The Admin confirms a cash sale checkout, sending a POST payload to /api/sales containing product IDs, sold quantities, and total payments.

The validation middleware verifies the JWT signature and checks data structural integrity.

The backend establishes a database transaction block:

Step A: Verifies on-hand item counts are greater than or equal to the requested sale quantity.

Step B: Executes an incremental update reducing the product stock table.

Step C: Generates a unique transaction row mapping items, pricing, and timestamp profiles.

Upon successful execution of all transactional sub-tasks, the server commits the state change and issues a 201 Created receipt payload to the frontend.

6. Folder Structure
The workspace implements a decoupled monorepo architecture, enforcing an absolute separation between client-side view managers and server-side logic patterns:

Plaintext
city-mobile-shop-management-system/
├── client/                      # Frontend React Application
│   ├── public/                  # Static assets & index entry HTML
│   └── src/
│       ├── components/          # Reusable presentation assets (Buttons, Inputs)
│       ├── context/             # Global application state managers
│       ├── hooks/               # Encapsulated state side-effects
│       ├── layouts/             # Master structural wrappers (Admin vs. Public)
│       ├── pages/               # Discrete route layouts (Dashboard, Catalog, POS)
│       ├── services/            # API communication clients (Axios configs)
│       └── App.js               # Root Router declaration
├── server/                      # Backend Node.js / Express.js Application
│   ├── src/
│   │   ├── config/              # Environment vars & database connector initializers
│   │   ├── controllers/         # Direct endpoint logic controllers
│   │   ├── db/                  # Migrations and initial SQLite engine files
│   │   ├── middleware/          # JWT authorization guards and input error sanitizers
│   │   ├── models/              # Relational data schema abstraction layers
│   │   ├── routes/              # Express endpoint routing maps
│   │   └── app.js               # Main application config factory
│   └── package.json
└── README.md
7. Scalability Considerations
While the initial blueprint utilizes localized file architectures to suit operational constraints, the system is designed to seamlessly scale as transactional workloads increase:

Database Migration Path: The application logic will decouple raw SQL string operations from system controllers by utilizing an Object-Relational Mapper (ORM) or clean abstract query interfaces. This configuration ensures that switching from an embedded SQLite data structure to a high-concurrency PostgreSQL cluster requires only a connection string adjustment and minimal migration tracking.

Stateless Server Design: The Express backend maintains no persistent local cache structures or stateful in-memory user sessions. This allows the backend instance to be horizontally duplicated across multiple micro-containers behind a load balancer if customer browsing traffic scales up.

Static Client Distribution: The built React build artifacts can be deployed to high-speed Content Delivery Networks (CDNs) to reduce server resource utilization by offloading asset rendering entirely from the backend core.

8. Security Considerations
Data Sanitization & Injection Prevention: Every incoming HTTP parameter route parameter must execute parameterized query structures to prevent SQL Injection (SQLi) attempts against the data store.

Cross-Origin Resource Sharing (CORS): The Express engine will incorporate strict CORS policy headers, explicitly authorizing only designated client-side domain strings while systematically dropping stray third-party requests.

Payload Protection: Transport Layer Security (TLS/HTTPS) will be globally enforced via Render infrastructure configurations to secure over-the-air parameters (specifically passwords and JWT authorizations) against man-in-the-middle sniffing actions.

Input Size Threshold Control: Explicit body parsing payload limitations will be wired to the Express runtime to neutralize potential Denial of Service (DoS) attacks attempting server memory overflow via large data injections.

9. Future Improvements
Migration to PostgreSQL: Transitioning the persistence layer out of file-locked configurations into an independent relational database service to manage complex concurrent multi-row write cycles safely.

Asynchronous Background Queues: Integrating Redis paired with worker pools to offload resource-heavy analytical compilations or batch processing completely outside the primary client request loop.

Native Real-Time Inventory Scanning: Establishing abstract peripheral interface layers within the POS module layout to hook and read standard hardware barcode/QR scanner sequences dynamically.