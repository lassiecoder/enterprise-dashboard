# Enterprise Dashboard

A modern, feature-rich enterprise dashboard built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This dashboard provides comprehensive business analytics, eCommerce management, and data visualization capabilities with a beautiful dark/light theme support.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS
- **Theme Support**: Seamless dark/light mode toggle with `next-themes`
- **Responsive Design**: Fully responsive layout with collapsible sidebars
- **Interactive Charts**: Data visualization using Recharts and Syncfusion Maps
- **Component Library**: Radix UI primitives for accessible, customizable components
- **Real-time Search**: Debounced search functionality across the application
- **Advanced Filtering**: Multi-criteria filtering and sorting capabilities

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd enterprise-dashboard

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
enterprise-dashboard/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page (redirects to Overview)
│   ├── layout.tsx                # Root layout with theme provider
│   ├── globals.css               # Global styles
│   ├── theme-toggle.jsx          # Theme switcher component
│   ├── dashboard/                # Dashboard default view
│   │   └── page.tsx
│   ├── overview/                 # Overview page
│   │   └── page.tsx
│   └── order-list/               # Order list management
│       └── page.tsx
├── components/                   # React components
│   ├── app-sidebar.tsx           # Left navigation sidebar
│   ├── app-sidebar-right.tsx    # Right notification sidebar
│   ├── ecommerce-cards.tsx      # eCommerce metrics cards
│   ├── revenue-and-revenue-location.tsx  # Revenue visualizations
│   ├── top-selling-prods-and-total-sales.tsx  # Sales components
│   ├── charts/                   # Chart components
│   │   ├── ProjectionsChart.tsx
│   │   ├── RevenueGraph.tsx
│   │   └── TotalSalesPieChart.tsx
│   ├── location/                 # Location-based components
│   │   └── RevenueByLocationStatic.tsx
│   └── ui/                       # UI primitives (Radix-based)
│       ├── sidebar.tsx
│       ├── card.tsx
│       ├── button.tsx
│       └── ...
├── hooks/                        # Custom React hooks
│   └── use-mobile.ts
├── lib/                          # Utility functions
│   └── utils.ts
└── public/                       # Static assets
```

## 📄 Pages & Features

### 1. Overview Page (`/overview`)

![OverviewDarkMode](https://github.com/user-attachments/assets/90a59637-6135-4cf9-b9c7-8a502474b246)

![OverviewLightMode](https://github.com/user-attachments/assets/5b8272ed-b1d8-412d-ac0f-0a82c959bd8d)

**Default Landing Page** - Provides a high-level summary of business performance.

**Features:**

- **Key Metrics Dashboard**
  - Total Revenue: $45,231.89 (+20.1% from last month)
  - Active Users: 2,350 (+180 from last week)
  - Sales: 12,234 (+19% from last month)
- **Recent Activity Feed**
  - Real-time display of orders, customer feedback, and inventory updates
  - Timestamped activity entries with contextual information
- **Responsive Layout**
  - Grid-based metric cards that adapt to screen sizes
  - Mobile-optimized header with collapsible navigation

**Components Used:**

- Breadcrumb navigation (Dashboard / Overview)
- Search bar with global search capability
- Theme toggle for dark/light mode
- Collapsible sidebar navigation
- History and notification icons

### 2. Dashboard > Default (`/dashboard`)

![DashboardDarkMode](https://github.com/user-attachments/assets/eee2f806-af9a-4ace-897c-b0a88c43359b)

![DashboardLightMode](https://github.com/user-attachments/assets/cf75e156-0b4a-42a7-b7f3-adb032e8bbd5)

**Comprehensive eCommerce Analytics** - The main dashboard for detailed business insights.

**Features:**

#### eCommerce Metrics Cards

Four key performance indicators displayed in a 2x2 grid:

1. **Customers**: 3,781 (↑ +11.01%)
2. **Orders**: 1,219 (↓ -0.03%)
3. **Revenue**: $695 (↑ +15.03%)
4. **Growth**: 30.1% (↑ +6.08%)

Each card features:

- Highlighted background for positive metrics
- Trend indicators (TrendingUp/TrendingDown icons)
- Percentage change from previous period

#### Projections vs Actuals Chart

- Visual comparison of projected vs actual performance
- Interactive line/bar chart using Recharts
- Responsive design that adapts to container size

#### Revenue Analysis Section

**Revenue Graph:**

- Week-over-week comparison
  - Current Week: $58,211
  - Previous Week: $68,768
- Color-coded line chart with legend
- Custom CSS variables for theming
- Mobile-responsive with optimized padding

**Revenue by Location:**

- Geographic revenue distribution
- Static map visualization using Syncfusion Maps
- Visual representation of revenue across different regions

#### Sales Analysis Section

**Top Selling Products Table:**
Features a comprehensive product performance table with:

| Product Name            | Price   | Quantity | Amount    |
| ----------------------- | ------- | -------- | --------- |
| ASOS Ridley High Waist  | $79.49  | 82       | $6,518.18 |
| Marco Lightweight Shirt | $128.50 | 37       | $4,754.50 |
| Half Sleeve Shirt       | $39.99  | 64       | $2,559.36 |
| Lightweight Jacket      | $20.00  | 184      | $3,680.00 |
| Marco Shoes             | $79.49  | 64       | $1,965.81 |

Features:

- Scrollable table on mobile devices
- Formatted currency display
- Product performance metrics

**Total Sales Breakdown:**
Donut chart showing sales by channel:

- **Direct**: $300.56
- **Affiliate**: $135.18
- **Sponsored**: $154.02
- **E-mail**: $48.96

Features:

- Interactive pie chart with color-coded segments
- Legend with exact values
- CSS custom properties for consistent theming

### 3. eCommerce > Order List (`/order-list`)

![OrderListDarkMode](https://github.com/user-attachments/assets/a63749a5-16b9-44db-a001-c5d4c5521381)

![OrderListLightMode](https://github.com/user-attachments/assets/043e8a5c-c63c-40a2-bf0e-14ba35ac4d26)

**Advanced Order Management System** - Complete order tracking and management interface.

**Features:**

#### Order Table

Displays comprehensive order information:

- **Order ID**: Unique identifier (e.g., #CM9801)
- **User**: Customer name with avatar placeholder
- **Project**: Associated project name
- **Address**: Delivery/project address
- **Date**: Order timestamp (relative or absolute)
- **Status**: Current order state with visual indicators

#### Status Types & Colors

- **In Progress** (Purple): #8A8CD9
- **Complete** (Green): #4AA785
- **Pending** (Blue): #59A8D4
- **Approved** (Yellow): #FFC555
- **Rejected** (Gray): #A0A0A0

#### Advanced Filtering System

**Status Filter:**

- Multi-select checkbox interface
- Filter by one or multiple status types
- Active filter count badge
- Dropdown with color-coded status indicators
- Click-outside-to-close behavior

**Search Functionality:**

- Real-time search by project name
- Minimum 3 character requirement
- Debounced search (300ms delay)
- Character counter for minimum requirement
- Search across all filtered results

**Sort by Date:**

- Three-state sorting:
  - No sort (default order)
  - Descending (newest first) ↓
  - Ascending (oldest first) ↑
- Parses various date formats:
  - Relative: "Just now", "A minute ago", "1 hour ago", "Yesterday"
  - Absolute: "Feb 2, 2023"
- Visual indicator showing current sort direction

#### Bulk Selection

- **Select All**: Checkbox in table header
- **Indeterminate State**: Shows partial selection
- **Individual Selection**: Per-row checkboxes
- Selection persists across filtering (by index)
- Visual feedback for selected rows

#### Pagination

- **10 items per page**
- Page number buttons (1, 2, 3, ...)
- Previous/Next navigation arrows
- Disabled state for boundary pages
- Current page highlighting
- Dynamic page count based on filtered results

#### Action Buttons

- **Add New Order** (Plus icon)
- **Filter** (with active filter badge)
- **Sort** (with direction indicator)

#### Responsive Design

- Horizontal scroll on mobile for table
- Optimized header controls for small screens
- Adaptive column widths
- Touch-friendly interactive elements

## 🎨 UI Components

### Layout Components

- **AppSidebar**: Left navigation with collapsible sections
  - Favorites: Overview, Projects
  - Dashboard sections: Default, eCommerce
  - Pages: User Profile, Account, Corporate, Blogs, Social
- **AppSidebarRight**: Notifications and quick actions panel
- **Header**: Consistent across all pages with breadcrumbs, search, theme toggle

### UI Primitives (Radix UI)

- Avatar
- Breadcrumb
- Button
- Card
- Chart
- Collapsible
- Dropdown Menu
- Input
- Searchbar
- Separator
- Sheet
- Sidebar
- Skeleton
- Tooltip

### Custom Charts

- **ProjectionsChart**: Projections vs Actuals comparison
- **RevenueGraph**: Week-over-week revenue trends
- **TotalSalesPieChart**: Sales distribution by channel

## 🛠️ Technologies

### Core Framework

- **Next.js 16.0.3**: React framework with App Router
- **React 19.2.0**: UI library
- **TypeScript 5**: Type-safe development

### Styling

- **Tailwind CSS 4**: Utility-first CSS framework
- **@tailwindcss/postcss 4**: PostCSS integration
- **tw-animate-css**: Animation utilities
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Class name utilities
- **next-themes**: Theme management

### UI & Visualization

- **Radix UI**: Accessible component primitives
  - @radix-ui/react-avatar
  - @radix-ui/react-collapsible
  - @radix-ui/react-dialog
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-separator
  - @radix-ui/react-slot
  - @radix-ui/react-tooltip
- **Recharts 2.15.4**: Chart library for data visualization
- **Syncfusion EJ2 Maps**: Interactive map components
- **Lucide React**: Icon library
- **React Icons**: Additional icon set

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing

## 🎨 Theming

The application supports both light and dark modes with seamless transitions.

### Theme Toggle

- Available in header across all pages
- Persists user preference
- Smooth transition animations
- Custom CSS variables for charts and components

### Custom CSS Variables

```css
/* Revenue Chart Colors */
--revenue-current-week
--revenue-previous-week

/* Sales Chart Colors */
--sales-chart-1
--sales-chart-2
--sales-chart-3
--sales-chart-4
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Special breakpoints:

- `show-at-920`: Shows elements at 920px and above
- `max-[460px]`: Custom mobile breakpoint for very small screens
- `max-[767px]`: Tablet breakpoint adjustments

## 🚀 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔧 Configuration Files

- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.mjs`: ESLint rules
- `postcss.config.mjs`: PostCSS setup
- `components.json`: Shadcn/UI components configuration
- `tailwind.config`: Tailwind CSS customization

<!-- ## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request -->
