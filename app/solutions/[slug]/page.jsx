import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DetailedFunctionalitiesClient from '../../components/DetailedFunctionalitiesClient';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'retailers' },
    { slug: 'wholesalers' },
    { slug: 'manufacturers' },
    { slug: 'digital' },
  ];
}

const solutionsData = {
  retailers: {
    title: 'Retailers',
    subtitle: 'Run high-velocity stores with full control of stock and customers.',
    description: 'Transform your retail jewelry business with Effission. Our comprehensive POS and inventory management solutions are designed specifically for the complexities of jewelry retail, giving you real-time visibility across all your locations.',
    image: '/images/retailers.png',
    features: [
      {
        title: 'Jewelry-Specific POS',
        description: 'Handle gold, diamond, and fashion jewelry with specialized billing, metal rate calculations, and certification tracking.',
        icon: '💻'
      },
      {
        title: 'Real-Time Inventory',
        description: 'Track every piece across multiple stores with RFID integration. Manage transfers, approvals, and stocktakes effortlessly.',
        icon: '📦'
      },
      {
        title: 'CRM & Loyalty',
        description: 'Build lasting relationships with integrated customer profiles, purchase history, and targeted loyalty programs.',
        icon: '🤝'
      }
    ],
    tags: ['Single Store', 'Multi-Store', 'Franchise Networks'],
    detailedFunctionalitiesTitle: 'How Retail Jewelry Software Benefits Your Business',
    detailedFunctionalities: [
      {
        category: 'P.O.S Functionalities',
        items: [
          { 
            title: 'Estimation & Billing', 
            icon: '📝',
            details: [
              "Deliver a seamless customer experience from store walk-in to final billing with Effission Jewellery Retail ERP.",
              "Engage customers instantly as they enter the store with a smart and interactive retail experience.",
              "Touchscreen and kiosk-enabled interface allows customers to search and select jewellery using multiple filters.",
              "Generate estimation slips instantly from iPads, desktops, or any connected device with detailed or summarized pricing.",
              "Fast and simplified billing process designed for modern jewellery retail operations.",
              "Supports complex billing scenarios including: Daily Gold Rate pricing with QR Code generation, Old Gold adjustments, Sales returns and exchange handling, Loyalty point updates in real time, Advance payments and deposit adjustments, Buyback credit management.",
              "Accept payments through multiple modes including Credit Card, Debit Card, UPI, Online Banking, Cash, Cheque, and DD.",
              "Multi-currency billing support for global operations.",
              "Complete billing for existing customers within minutes.",
              "Automatically send digitally signed invoices through Email.",
              "Instantly deliver Thank You messages, invoices, and purchase confirmations via SMS and WhatsApp."
            ]
          },
          { 
            title: 'Loyalty Management', 
            icon: '🏆',
            details: [
              "Build stronger customer relationships and improve retention.",
              "Integrated customer loyalty management system.",
              "Customers can view accumulated reward points anytime.",
              "Redeem loyalty points directly during billing.",
              "Reward points are automatically added after every purchase.",
              "Customers move to higher reward tiers based on shopping activity.",
              "Seamless redemption and billing from a single counter.",
              "Deliver a memorable and premium retail experience."
            ]
          },
          { 
            title: 'CRM', 
            icon: '👤',
            details: [
              "Connect with customers using meaningful engagement.",
              "Capture customer details including birthdays and anniversaries.",
              "Automated reminders for customer care teams.",
              "Run personalized offers and special discounts.",
              "Group family profiles for better analysis and targeted campaigns.",
              "Access complete customer purchase history instantly including purchases, exchanges, repairs, advances, schemes, EMIs, and loyalty points.",
              "Improve customer engagement with accurate and timely information."
            ]
          },
          { 
            title: 'Repair Management', 
            icon: '⚙️',
            details: [
              "Manage every repair request with complete visibility and control.",
              "Handle jewellery repairs of all sizes efficiently through a centralized system.",
              "Automatically calculate labour charges, metal usage, and additional repair materials.",
              "Offer flexible charging options based on company policies.",
              "Track repair orders in real time with status visibility.",
              "Notify customers instantly via SMS and Email once repairs are completed."
            ]
          },
          { 
            title: 'Layaway Support', 
            icon: '🛍️',
            details: [
              "Simplify special orders and advance booking processes.",
              "Manage custom and occasion-based orders with integrated layaway support.",
              "Accept advances and deposits with or without order references.",
              "Link or reassign deposits across orders whenever required.",
              "Improve order flexibility and customer convenience."
            ]
          },
          { 
            title: 'Discount Management', 
            icon: '🏷️',
            details: [
              "Control discounts while maintaining operational efficiency.",
              "Configure role-based discount approvals.",
              "Assign discount limits to salespersons, managers, and authorized users.",
              "Enable approval workflows for additional discount requests.",
              "Managers receive approval requests instantly through Email and SMS.",
              "Approve or reject discounts remotely without disrupting sales.",
              "Maintain complete approval history and audit records."
            ]
          },
          { 
            title: 'Customer Checks & Balances', 
            icon: '✅',
            details: [
              "Monitor financial and metal transactions with complete transparency.",
              "View receivables and payables in real time.",
              "Track metal balances and adjustments instantly.",
              "Maintain accurate financial visibility across operations."
            ]
          },
          { 
            title: 'Buy Back / Old Metal Purchase / Exchange', 
            icon: '⚖️',
            details: [
              "Offer transparent exchange and buyback experiences.",
              "Manage jewellery exchanges with flexible business rules.",
              "Define lifetime or limited-period exchange policies.",
              "Support old gold purchases with automated valuation calculations.",
              "Enable customer upgrades using exchange credits.",
              "Maintain transparency across value and weight calculations."
            ]
          },
          { 
            title: 'Scheme Management', 
            icon: '🌟',
            details: [
              "Drive customer retention through attractive savings programs.",
              "Configure and manage gold saving schemes effortlessly.",
              "Create multiple scheme structures based on business needs.",
              "Integrate schemes directly with POS and billing.",
              "Monitor scheme performance with centralized management."
            ]
          },
          { 
            title: 'Digital Catalogue', 
            icon: '📱',
            details: [
              "Showcase products with an intelligent catalogue experience.",
              "Generate catalogues directly from stock or design masters.",
              "Search items using multiple filters including: Metal Weight, Price Range, Diamond Weight, Stone Specifications.",
              "Convert selected items into quotations, orders, estimates, and invoices instantly."
            ]
          },
          { 
            title: 'Stock Taking', 
            icon: '📦',
            details: [
              "Physical stock verification to compare system stock with actual stock.",
              "Supports Barcode and RFID-based stock counting for faster and more accurate inventory checks.",
              "Automatically identifies excess stock and shortage stock.",
              "Helps maintain accurate inventory records and reduce inventory discrepancies."
            ]
          },
          { 
            title: 'Tally Integration', 
            icon: '⚙️',
            details: [
              "Effission Software provides seamless Tally integration to manage accounting information efficiently.",
              "Key Benefits:",
              "Automatic accounting data synchronization",
              "Reduced manual data entry",
              "Improved financial accuracy",
              "Easy management of sales, purchase, and ledger entries"
            ]
          },
          { 
            title: 'Stock Transfer (Store to Store)', 
            icon: '🔄',
            details: [
              "Transfer stock seamlessly from one store location to another.",
              "Generate Store Transfer Challan / Transfer Note automatically.",
              "Support for Barcode / QR Code–based stock transfer.",
              "Real-time inventory update at source and destination stores.",
              "Transfer by Item, Category, Design, Lot, or Batch."
            ]
          }
        ]
      },
      {
        category: 'Back Office Functionalities',
        items: [
          { 
            title: 'Pricing Rules', 
            icon: '🪄',
            details: [
              "Enable dynamic and intelligent jewellery pricing.",
              "Configure flexible pricing models with zero vendor dependency.",
              "Support MRP-based and daily gold rate pricing.",
              "Create custom pricing formulas using a powerful rule engine.",
              "Simplify pricing updates through guided workflows.",
              "Deliver complete pricing flexibility through cloud-enabled operations."
            ]
          },
          { 
            title: 'Style Master', 
            icon: '💎',
            details: [
              "Build and manage jewellery definitions with precision.",
              "Create detailed Bill of Materials (BOM) structures.",
              "Support both simple and complex jewellery definitions.",
              "Attach multiple images to designs and master records.",
              "Configure attributes for every jewellery category.",
              "Enable faster cataloguing and product identification."
            ]
          },
          { 
            title: 'Order Management', 
            icon: '📋',
            details: [
              "Deliver a smooth made-to-order jewellery experience.",
              "Manage bespoke jewellery orders with ease.",
              "Book orders directly from master catalogues or customer-provided designs.",
              "Support order creation with or without advance payments.",
              "Track order progress from booking to delivery.",
              "Send automatic notifications when orders are ready for collection.",
              "Generate complete order status reports for faster follow-ups."
            ]
          },
          { 
            title: 'Procurement', 
            icon: '🎯',
            details: [
              "Purchase smarter with intelligent procurement management.",
              "Improve buying decisions based on demand and sales trends.",
              "Ensure controlled and verified purchasing workflows.",
              "Procure: Gold, Silver, Platinum, Precious and Semi-Precious Stones, Diamonds and CZ Stones, Finished Jewellery, Findings and Accessories, Packaging and Non-Jewellery Inventory.",
              "Support dual units for stone measurement (Carats and Pieces).",
              "Enable bulk purchasing and quick master creation during procurement.",
              "Maintain a secure, scalable, and efficient procurement process."
            ]
          },
          { 
            title: 'Barcode / RFID Management', 
            icon: '📇',
            details: [
              "Track every jewellery piece with speed and accuracy.",
              "Assign unique identification to each jewellery item.",
              "Support Barcode and RFID-based inventory management.",
              "Perform stock audits instantly and identify variances.",
              "Reprice inventory without changing physical barcodes.",
              "Scan using handheld devices, tablets, and smartphones.",
              "Enable anytime, anywhere billing and inventory tracking."
            ]
          },
          { 
            title: 'Inventory Management', 
            icon: '📦',
            details: [
              "Gain complete control over inventory visibility and movement.",
              "Track every gram, piece, and transaction with built-in validations.",
              "Support weighted average valuation methodology.",
              "View inventory by location, barcode, or consolidated stock.",
              "Manage customer goods with complete traceability.",
              "Improve inventory accuracy across operations."
            ]
          },
          { 
            title: 'Stock Valuation', 
            icon: '📊',
            details: [
              "Maintain accurate and reliable inventory valuation.",
              "Generate real-time stock valuation reports.",
              "Improve financial visibility and inventory planning.",
              "Ensure precise stock costing and decision-making."
            ]
          },
          { 
            title: 'Subcontractor Production / Karigar Management', 
            icon: '💼',
            details: [
              "Manage production and outsourcing with complete traceability.",
              "Control and monitor outsourced manufacturing processes.",
              "Link production directly with customer orders.",
              "Define subcontractor-wise allowable wastage.",
              "Manage labour payable based on processes and contractors.",
              "Track issue, receipt, and material settlement in real time.",
              "Enable traceability from raw material to finished jewellery.",
              "Support both simple and advanced production workflows."
            ]
          },
          { 
            title: 'Franchisee Management', 
            icon: '🏢',
            details: [
              "Operate and scale franchise businesses efficiently.",
              "Manage the complete franchise network from a centralized platform.",
              "Handle inventory movement between company and franchise locations.",
              "Support cross-location ordering, invoicing, and inventory handling.",
              "Manage returns and stock movements seamlessly.",
              "Improve visibility across distributed operations."
            ]
          },
          { 
            title: 'Multi Branch / Multi Location Management', 
            icon: '📍',
            details: [
              "Expand business operations without limitations.",
              "Manage multiple branches and locations from a single system.",
              "Transfer inventory across locations in real time.",
              "Synchronize sales and stock instantly.",
              "Redeem vouchers across locations with automatic validation.",
              "Access consolidated reports with a single click."
            ]
          },
          { 
            title: 'Financial Control & Accounting', 
            icon: '💰',
            details: [
              "Strengthen financial management with integrated controls.",
              "Built-in financial accounting integrated.",
              "Configure approval workflows from the back office.",
              "Manage branch-level accounting efficiently.",
              "Control petty cash and daily transactions.",
              "Enable automatic accounting entries.",
              "profit & loss and balance sheet reports."
            ]
          },
          { 
            title: 'Memo Management', 
            icon: '📋',
            details: [
              "Manage approval and memo-based inventory effortlessly.",
              "Receive inventory on approval or credit from vendors.",
              "Track issued and returned memo stock accurately.",
              "Provide goods to customers on approval basis.",
              "Maintain complete visibility of incoming and outgoing memo inventory.",
              "Simplify stock reconciliation and closure processes."
            ]
          },
        ]
      }
    ]
  },
  wholesalers: {
    title: 'Wholesalers',
    subtitle: 'Sell more designs with less physical inventory.',
    description: 'Empower your sales team and expand your reach with Effission’s wholesale solutions. Streamline memo tracking, B2B ordering, and inventory distribution.',
    image: '/images/wholesellers.png',
    features: [
      {
        title: 'B2B eCatalog',
        description: 'Equip traveling reps with an interactive tablet app to showcase inventory, take orders, and check stock in real-time.',
        icon: '📱'
      },
      {
        title: 'Memo Control',
        description: 'Tighten control over goods on consignment. Track due dates, approvals, and returns with automated alerts.',
        icon: '📋'
      },
      {
        title: 'Manufacturing Link',
        description: 'Live integration with manufacturing for fast order fulfillment, custom requests, and precise delivery estimates.',
        icon: '🔗'
      }
    ],
    tags: ['Diamond Traders', 'Jewelry Distributors', 'Sales Teams'],
    detailedFunctionalitiesTitle: 'How Effission For Wholesale Benefits Your Business',
    detailedFunctionalities: [
      {
        category: '',
        items: [
          { 
            title: 'Pricing Rules', 
            icon: '🪄',
            details: [
              "Flexible Pricing Engine for Dynamic Business Models",
              "Manage pricing with complete flexibility and adapt instantly to changing market conditions.",
              "Configure multiple pricing rules based on business requirements.",
              "Use pre-defined pricing templates for quick implementation.",
              "Support different pricing structures for retailers and wholesale customers.",
              "Dynamic Formula Builder enables pricing updates without vendor dependency.",
              "Modify and deploy pricing strategies instantly."
            ]
          },
          { 
            title: 'Multi location Management', 
            icon: '📍',
            details: [
              "One Platform for Multiple Locations",
              "Operate and monitor multiple branches with real-time synchronization.",
              "Centralized multi-branch and multi-location management.",
              "Location-wise Profit & Loss reporting.",
              "Real-time sales visibility across locations.",
              "Instant stock transfer between branches.",
              "Unified operational control with centralized reporting."
            ]
          },
          { 
            title: 'Style Master', 
            icon: '💎',
            details: [
              "Build Smarter Product Definitions",
              "Create and manage jewellery masters with unlimited flexibility.",
              "Attach multiple product images and videos.",
              "Generate catalogues directly from master definitions or stock.",
              "Configure attributes for simple to complex product structures.",
              "Support advanced Bill of Materials (BOM) with hundreds of line items.",
              "Manage both detailed and simplified product definitions."
            ]
          },
          { 
            title: 'Order Management', 
            icon: '📋',
            details: [
              "Streamline Order Processing",
              "Handle multiple order types efficiently through a unified workflow.",
              "Create orders directly from product catalogues.",
              "Accept custom designs from customers.",
              "Manage Sales Orders, Repair Orders, and Stock Orders.",
              "Categorize orders for better analysis and reporting.",
              "Improve visibility throughout the order lifecycle."
            ]
          },
          { 
            title: 'Procurement', 
            icon: '💠',
            details: [
              "Smarter Purchasing with Better Control",
              "Ensure efficient procurement with controlled purchasing workflows.",
              "Generate purchase orders automatically or manually.",
              "Verify purchases before procurement approval.",
              "Procure: Gold, Silver, Diamonds and Stones, Semi-finished Products, Finished Jewellery, Findings and Components.",
              "Support dual measurement units for stones (Carats & Pieces)."
            ]
          },
          { 
            title: 'Inventory Management', 
            icon: '📦',
            details: [
              "Complete Inventory Visibility and Control",
              "Track inventory accurately across every location and transaction.",
              "Access location-wise and consolidated inventory instantly.",
              "Search inventory through barcode tracking.",
              "Manage customer goods with complete traceability.",
              "Built-in validations ensure every piece, gram, and value is tracked.",
              "Weighted Average supported as the standard valuation method."
            ]
          },
          { 
            title: 'Barcoding / RFID Management', 
            icon: '📇',
            details: [
              "Faster Tracking with Intelligent Identification",
              "Digitize inventory tracking and stock verification.",
              "Barcode and RFID-enabled inventory operations.",
              "One-click stocktake with variance detection.",
              "Repricing without changing physical barcodes.",
              "Automatic price updates during scanning.",
              "Support scanning via handheld devices, tablets, and smartphones."
            ]
          },
          { 
            title: 'Jewellery Production (Subcontracting / Jobwork)', 
            icon: '💼',
            details: [
              "End-to-End Production Visibility",
              "Manage outsourced manufacturing and job work operations efficiently.",
              "Process-wise subcontracting and production control.",
              "Link manufacturing activities with customer orders.",
              "Define and track contractor-wise allowable wastage.",
              "Configure standard labour rates by process.",
              "Monitor bulk issue and receipt transactions.",
              "Maintain real-time production ledgers."
            ]
          },
          { 
            title: 'Financial Accounting / Controls', 
            icon: '💰',
            details: [
              "Integrated Finance for Better Business Decisions",
              "Manage financial operations directly within ERP.",
              "Built-in financial accounting system.",
              "Approval workflows managed centrally.",
              "Branch-level accounting support.",
              "Automatic accounting entry posting.",
              "Profit & Loss and Balance Sheet reporting."
            ]
          },
          { 
            title: 'Customer Checks & Balances', 
            icon: '✅',
            details: [
              "Real-Time Financial and Metal Tracking",
              "Maintain complete visibility of customer balances.",
              "Real-time receivables and payables.",
              "Metal balance tracking.",
              "Instant metal adjustment visibility.",
              "Faster reconciliation and customer account management."
            ]
          },
          { 
            title: 'Repair Management', 
            icon: '⚙️',
            details: [
              "Simplified Jewellery Repair Operations",
              "Manage repair requests efficiently with complete tracking.",
              "End-to-end repair order management.",
              "Automated calculation of labour and material usage.",
              "Flexible charging policies.",
              "Real-time repair status monitoring."
            ]
          },
          { 
            title: 'Sales', 
            icon: '🚚',
            details: [
              "Flexible Sales Operations for Wholesale Business",
              "Handle all types of sales transactions in one system.",
              "Supported Sales Types: Outright Sales, Consignment Sales, Memo Sales.",
              "Transaction Support: Sales Orders, Sales Invoices, Memo Approval Notes, Memo Returns, Sales Returns, Inter-location Transfers, Intra-location Transfers, Stock Transfer Acknowledgements."
            ]
          },
          { 
            title: 'Metal Accounting', 
            icon: '⚖️',
            details: [
              "Complete Control Over Precious Metal Tracking",
              "Track metal movement with complete transparency.",
              "End-to-end metal accounting.",
              "Customer metal inward tracking.",
              "Real-time metal balance visibility.",
              "Accurate reconciliation and reporting."
            ]
          },
          { 
            title: 'Stock Taking', 
            icon: '📋',
            details: [
              "Effission Software offers an easy-to-use stock-taking module that allows users to effortlessly tally inventory using:",
              "Barcode Gun",
              "QR Code Scanner",
              "RFID Scanner",
              "Benefits:",
              "Maintains accurate inventory records",
              "Ensures product availability for sales and operations",
              "Reduces stock-outs and overstock situations",
              "Helps prevent inventory loss and theft"
            ]
          }
        ]
      }
    ]
  },
  manufacturers: {
    title: 'Manufacturers',
    subtitle: 'Orchestrate complex production with cost and WIP under control.',
    description: 'Take command of your jewelry manufacturing floor. Effission provides end-to-end visibility from CAD to casting, setting, and final polish.',
    image: '/images/Manufacturers.png',
    features: [
      {
        title: 'Multi-Stage Workflows',
        description: 'Manage complex BOMs, route cards, and job work tracking across internal departments and external contractors.',
        icon: '🏭'
      },
      {
        title: 'Precise Accounting',
        description: 'Account for every cent and milligram. Track metal loss, stone breakage, and sieve sizes with granular accuracy.',
        icon: '⚖️'
      },
      {
        title: 'Costing & Scheduling',
        description: 'Integrate real-time material costs and labor to ensure profitability, while optimizing delivery schedules.',
        icon: '📅'
      }
    ],
    tags: ['Manufacturers', 'Job Workers', 'Contractors'],
    detailedFunctionalitiesTitle: 'How Effission Helps Execute Jewelry Manufacturing',
    detailedFunctionalities: [
      {
        category: '',
        items: [
          { 
            title: 'Product Development', 
            icon: '🪄',
            details: [
              "Comprehensive prototyping and product development workflow designed to manage the complete pilot-piece production cycle.",
              "The workflow begins with concept creation and advances through Concept, Project, Rough Sketch, Semi-Final Sketch, Final Sketch, and Style Design stages.",
              "Supports cost estimation for sketches, drawings, and style designs.",
              "Effission Jewellery Production ERP manages the complete product development lifecycle through a unified and centralized interface.",
              "Routing-driven process flow ensures structured and efficient execution.",
              "Enables performance tracking and efficiency evaluation of designers."
            ]
          },
          { 
            title: 'Style Master', 
            icon: '💎',
            details: [
              "Style and Design Master allows configuration with Bill of Material (BOM), operations, and product attributes.",
              "Maintains customer-specific information including Customer SKU, customized BOM, and labor specifications.",
              "Stores vendor-related details such as Vendor Name, Vendor SKU, and labor information.",
              "Effission Jewellery Manufacturing and Retail ERP enables master-level control for setting minimum order quantity, maximum stock levels, delivery timelines, and routing parameters for proactive planning.",
              "Advanced BOM functionality supports complex jewellery combinations such as Pink Gold, Yellow Gold, Gold with Silver, multiple components, and detailed stone breakups, making the system scalable and easy to manage.",
              "The ERP also supports defining Center Stones, Side Stones, and Matched Pairs as part of the style specifications."
            ]
          },
          { 
            title: 'Estimate Generation', 
            icon: '☑️',
            details: [
              "Generate customer-specific estimates based on unique requirements and pricing structures.",
              "Workflow-based approval process ensures estimate validation before submission to clients.",
              "Estimations can be created for Jewellery, Diamonds, Stones, Chains, Coins, and related product categories."
            ]
          },
          { 
            title: 'Order Management', 
            icon: '📋',
            details: [
              "Once quotations are approved, sales orders can be entered directly into the Jewellery Manufacturing ERP system.",
              "For US customers, orders received in Excel format can be automatically imported and converted into sales orders.",
              "Supports order imports from major retail chains including Zales, JCPenney, Wal-Mart, Fred Meyer, Sterling Inc., and AAFES.",
              "Automatically generates Customer Cost Sheets and Customer Specification Sheets in retailer-specific formats."
            ]
          },
          { 
            title: 'Procurement', 
            icon: '💠',
            details: [
              "Effission Jewellery Manufacturing ERP offers a workflow-driven procurement process with approvals at critical stages and purchase-linked goods receipt.",
              "Procurement Process:",
              "Available inventory is validated against order requirements.",
              "Purchase Requisition (PR) is generated based on demand.",
              "Approved requisitions are converted into Purchase Orders (PO).",
              "Purchase Orders are processed and released after approval.",
              "Goods receipt supports outright purchase as well as consignment, memo, and approval-based procurement."
            ]
          },
          { 
            title: 'Vendor Management', 
            icon: '🏪',
            details: [
              "Generates automated as well as manual vendor purchase orders.",
              "Upon sales order approval, the system can automatically generate vendor purchase orders based on vendor mapping to styles or designs.",
              "Vendor purchase orders can be created for Finished Goods (FG), Mounts, Semi-Mounts, or Center Stones."
            ]
          },
          { 
            title: 'Inventory Management', 
            icon: '📦',
            details: [
              "Supports metal inflow through multiple channels including Purchase, Old Gold Purchase, Sales Return, Melting, and related transactions.",
              "Metals are maintained in their original form and purity (karat), while the system also provides consolidated stock visibility in Pure Gold (PG).",
              "Includes dedicated alloying and melting processes with proper loss accounting and metal traceability for conversion into required karats.",
              "The Jewellery Manufacturing ERP platform is highly scalable and supports management across multiple metal types without limitations."
            ]
          },
          { 
            title: 'Stone Inventory Management', 
            icon: '💎',
            details: [
              "The Jewellery Manufacturing ERP system is designed to efficiently manage inventory for all precious and semi-precious stones, including Diamonds, Cubic Zirconia (CZ), Pearls, Lab-Grown Diamonds, and colored stones such as Ruby, Yellow Sapphire, White Sapphire, and more.",
              "Supports advanced stone assortment and classification based on the 4Cs and customizable attribute definitions.",
              "Enables complete solitaire traceability from procurement to final sale while also managing ancillary inventory items.",
              "The ERP supports inventory control across Raw Materials (RM), Work-in-Progress (WIP), and Finished Goods (FG), ensuring end-to-end visibility and control."
            ]
          },
          { 
            title: 'Stock Valuation', 
            icon: '📊',
            details: [
              "The online Jewellery Manufacturing ERP maintains inventory valuation using the Weighted Average Cost method.",
              "Inventory value is captured at the time of initial receipt, ensuring cost integrity by restricting unauthorized stock price modifications.",
              "For stone inventory, valuation is maintained lot-wise, and when multiple lots are merged, the system automatically recalculates and updates the weighted average value."
            ]
          },
          { 
            title: 'Sequential Manufacturing Process', 
            icon: '🔄',
            details: [
              "Effission Jewellery Manufacturing ERP supports flexible production models including in-house manufacturing, full subcontracting, and partial subcontracting with complete process visibility and traceability.",
              "In-House Manufacturing Workflow:",
              "Upon sales order approval, Job Bags or Batch Cards are generated and routed to the Wax Injection department for wax model creation.",
              "Stone Control validates stone availability for production requirements.",
              "If stock is unavailable, procurement is initiated; otherwise, diamond and stone batches are prepared.",
              "For wax-studded designs, batches move to Wax Setting; alternatively, wax trees are created.",
              "Stone batches and wax models are assigned to workers for wax setting operations.",
              "Completed batches proceed to Wax Tree preparation based on metal type, karat, and color specifications.",
              "Metal Control issues Pure Metal and Alloy for production where required.",
              "Casting receives wax trees and alloyed metal for casting execution.",
              "The casting department records cast weight and process losses during production.",
              "After tree cutting, casted models and recoverable materials are returned to Metal Control with loss tracking.",
              "Casted pieces are transferred into Job Bags and routed to Filing operations.",
              "Filing operations include filing, soldering, assembly, linking, and additional finishing activities with material tracking and loss management.",
              "Job Bags are transferred to Pre-Polishing, where production and process loss are recorded.",
              "Metal Setting or Wax Setting finishing is performed before moving to Final Polishing.",
              "Final polishing records production completion and process loss before transfer to Quality Control (QC).",
              "QC verifies all quality checkpoints and redirects pieces for repair if required.",
              "Approved products are finally transferred to the Finished Goods (FG) inventory."
            ]
          },
          { 
            title: 'Sub Contracting Job Work', 
            icon: '💼',
            details: [
              "Full Subcontracting: Raw materials including Metal, Stones, Diamonds, and Findings are issued to subcontractors who manufacture and return completed Finished Goods.",
              "Partial Subcontracting: Semi-Finished Goods (WIP), Metals, Stones, Diamonds, and Findings are issued for specific outsourced operations, with subcontractors returning either WIP or Finished Goods.",
              "Finished Goods (FG) Purchase: Ready-made jewellery is procured directly from vendors, with optional raw material issuance by the company."
            ]
          },
          { 
            title: 'Post Manufacturing Cost Calculation', 
            icon: '🧮',
            details: [
              "After production completion, the ERP automatically calculates post-manufacturing costing for each finished piece.",
              "The system determines the actual consumption cost of raw materials incorporated into Finished Goods.",
              "Users can include additional overhead expenses and indirect costs for accurate product costing.",
              "The finalized FG cost serves as the basis for Gross Profit (GP) analysis during sales and profitability evaluation."
            ]
          },
          { 
            title: 'Barcode Generation & Invoicing', 
            icon: '📇',
            details: [
              "A unique barcode is automatically generated for every finished jewellery piece, enabling seamless retail operations such as sales, memo movement, stock tracking, and product identification.",
              "Effission Jewellery Manufacturing ERP supports invoicing across all inventory categories including Raw Materials (RM), Work-in-Progress (WIP), and Finished Goods (FG).",
              "Generate both local and export invoices instantly with a single-click invoicing process."
            ]
          },
          { 
            title: 'MRP Generation', 
            icon: '💰',
            details: [
              "Once post-manufacturing costing is completed, the system automatically calculates the MRP (Maximum Retail Price) or selling price of each piece.",
              "The Jewellery Manufacturing ERP computes pricing based on predefined rates for each Bill of Material (BOM), along with applicable labor and manufacturing charges.",
              "For customer-specific orders, pricing is generated according to the agreed rates finalized at the order stage."
            ]
          },
          { 
            title: 'Stock Reservation', 
            icon: '🔒',
            details: [
              "Automated Reservation: Effission Jewellery Manufacturing ERP automatically reserves Finished Goods, Raw Materials, and Semi-Finished Goods immediately after an approved sales order is created, ensuring inventory availability and production continuity.",
              "Manual Reservation: Users can manually reserve inventory against customer orders, including: Raw Materials (Metal, Stones, Findings), Work-in-Progress (Molding, Semi-Studded Mounts, etc.), Finished Goods."
            ]
          },
          { 
            title: 'Sales & Distribution', 
            icon: '🚚',
            details: [
              "Effission Jewellery Management Software supports multiple sales models including Outright Sales, Consignment Sales, and Memo Sales.",
              "The system manages complete sales operations including Sales Orders, Sales Invoices, Memo Approval Notes, Memo Returns, and Sales Returns.",
              "Supports both inter-location and intra-location stock transfers with transfer acknowledgment, ensuring accountability and complete stock movement visibility."
            ]
          },
          { 
            title: 'Loss Management', 
            icon: '📉',
            details: [
              "Effission Jewellery Manufacturing ERP includes an advanced Loss Management Module for monitoring and controlling production losses.",
              "Losses can be tracked by: Order-wise, Customer-wise, Worker-wise, Department-wise, Work Center-wise.",
              "Users can define acceptable loss tolerance levels, and the system automatically highlights deviations at the time of process completion and goods receipt.",
              "The system also provides complete tracking of diamond and stone losses during studded jewellery manufacturing with detailed categorization such as: Burnt Diamonds, Broken Diamonds, Lost Diamonds."
            ]
          },
          { 
            title: 'Dust Collection & Refining', 
            icon: '🧺',
            details: [
              "The ERP includes a comprehensive Refining Module to manage metal dust collection and refining operations.",
              "Metal dust can be collected department-wise and processed periodically.",
              "Dust may be refined either internally or through outsourced refining partners.",
              "The system estimates expected Pure Metal recovery based on issued dust quantity.",
              "Once refined metal is received, it is automatically added back into inventory as Pure Metal stock."
            ]
          },
          { 
            title: 'Repair Management', 
            icon: '⚙️',
            details: [
              "Effission Jewellery Management Software comes with a dedicated Repair Management Module for complete repair order tracking.",
              "Separate repair orders can be created and monitored independently from regular production workflows.",
              "Products can be routed to specific departments or repair processes for execution.",
              "The system tracks additional material usage during repairs including Metal and Stone consumption.",
              "Repair invoices can be generated based on: Metal Cost, Stone Cost, Labor Charges, Zero-Value Repair Billing.",
              "Dedicated repair dashboards provide complete visibility into repair status, pending activities, and delivery timelines.",
              "This improves customer service by enabling faster response times and accurate repair delivery commitments."
            ]
          },
          { 
            title: 'Weighing Machine Integration', 
            icon: '⚖️',
            details: [
              "Real-Time Weight Capture",
              "Automatically captures weight directly from the weighing machine into the ERP system without manual entry.",
              "Accurate Data Recording",
              "Eliminates manual errors and ensures precise weight measurements across transactions.",
              "Production Process Integration",
              "Supports weight tracking across different manufacturing stages including: Material Issue, Receive Process, Finished Goods Management",
              "Production Loss & Wastage Tracking",
              "Monitors process loss, wastage, and material consumption accurately for better production control."
            ]
          },
          { 
            title: 'Stock Taking', 
            icon: '📋',
            details: [
              "Effission Software provides a simple and efficient stock-taking process for manufacturing inventory management.",
              "Supports:",
              "Barcode Gun",
              "QR Code Scanner",
              "RFID Scanner",
              "Advantages:",
              "Accurate inventory reconciliation",
              "Improved warehouse control",
              "Reduced stock mismatches",
              "Better production planning and inventory availability"
            ]
          }
        ]
      }
    ]
  },
  digital: {
    title: 'Digital-First Brands',
    subtitle: 'Launch immersive digital experiences with operational discipline behind them.',
    description: 'Bridge the gap between your online presence and back-office operations. Effission powers modern jewelry brands with seamless omni-channel infrastructure.',
    image: '/images/digital-band-1.png',
    features: [
      {
        title: 'E-Commerce Integration',
        description: 'Connect Shopify, Magento, or custom stores directly to your ERP and POS for unified inventory and order management.',
        icon: '🛒'
      },
      {
        title: '3D & Virtual Try-On',
        description: 'Elevate the buying experience with interactive 3D configurators and augmented reality virtual try-on journeys.',
        icon: '👓'
      },
      {
        title: 'AI-Rendered Assets',
        description: 'Generate photorealistic imagery for web, marketplaces, and social campaigns directly from CAD files using AI.',
        icon: '✨'
      }
    ],
    tags: ['D2C Brands', 'Online Brands', 'Marketplaces'],
    detailedFunctionalitiesTitle: 'How Effission Empowers Digital-First Brands',
    detailedFunctionalities: [
      {
        category: '',
        items: [
          { title: 'Omni-Channel Inventory Sync', icon: '🔄' },
          { title: 'E-Commerce Platform Integration', icon: '🛒' },
          { title: '3D Product Configurators', icon: '🧊' },
          { title: 'Virtual Try-On (AR)', icon: '👓' },
          { title: 'AI-Powered Asset Generation', icon: '✨' },
          { title: 'Digital Marketing Analytics', icon: '📈' },
          { title: 'Automated Order Routing', icon: '🛤️' },
          { title: 'Real-Time Pricing Engine', icon: '🏷️' },
          { title: 'Dropshipping Management', icon: '✈️' },
          { title: 'Personalized CRM Journeys', icon: '💖' },
          { title: 'Secure Payment Gateway Integrations', icon: '🔒' },
          { title: 'Return & Exchange Automation', icon: '🔁' }
        ]
      }
    ]
  }
};

export default async function SolutionPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data = solutionsData[slug];

  if (!data) {
    return (
      <>
        <Header />
        <main style={{ padding: '200px 0', textAlign: 'center', minHeight: '80vh' }}>
          <h1>Solution not found</h1>
          <Link href="/" style={{ color: 'var(--accent-gold)', marginTop: '20px', display: 'inline-block' }}>
            Return Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505' }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          paddingTop: '180px',
          paddingBottom: '100px',
          overflow: 'hidden'
        }}>
          {/* Background Image with Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 0,
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '800px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, var(--accent-gold))' }}></div>
                <span style={{ color: 'var(--accent-gold)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  WHO WE SERVE
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '24px', lineHeight: 1.1 }}>
                {data.title}
              </h1>
              <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--accent-gold)', marginBottom: '32px', lineHeight: 1.4 }}>
                {data.subtitle}
              </p>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '40px' }}>
                {data.description}
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                fontWeight: 600,
                borderRadius: '30px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }} className="hover-lift">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ padding: '30px 0', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <h2 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', textAlign: 'center', marginBottom: '60px' }}>
              Key Capabilities
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {data.features.map((feature, idx) => (
                <div key={idx} style={{
                  background: '#111',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 180, 50, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }} className="feature-card">
                  <div style={{ fontSize: '48px', marginBottom: '24px' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Functionalities Section */}
        {data.detailedFunctionalities && (
          <section className="section" style={{ padding: '30px 0', backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
              <DetailedFunctionalitiesClient data={data} />
            </div>
          </section>
        )}

        {/* Typical Users & CTA */}
        <section className="section" style={{ padding: '30px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(145deg, #1a1a1a 0%, #050505 100%)',
              padding: '60px',
              borderRadius: '32px',
              border: '1px solid rgba(255, 180, 50, 0.2)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <h3 style={{ fontSize: '28px', marginBottom: '24px' }}>Typical Users Include</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
                {data.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    fontSize: '16px',
                    padding: '10px 24px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'var(--accent-gold)',
                    background: 'rgba(255,255,255,0.05)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 style={{ fontSize: '32px', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>
                Ready to transform your operations?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>
                Join the leading {data.title.toLowerCase()} who trust Effission.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex',
                padding: '14px 28px',
                border: '1px solid var(--accent-gold)',
                color: 'var(--accent-gold)',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} className="hover-glow">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 180, 50, 0.05);
          border-color: rgba(255, 180, 50, 0.3) !important;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 180, 50, 0.4);
        }
        .hover-glow:hover {
          background-color: rgba(255, 180, 50, 0.1);
          box-shadow: 0 0 20px rgba(255, 180, 50, 0.2);
        }
        .detailed-feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 180, 50, 0.4) !important;
          background: rgba(255, 180, 50, 0.02) !important;
          box-shadow: 0 5px 20px rgba(255, 180, 50, 0.05);
        }
      `}} />
      <Footer />
    </>
  );
}
