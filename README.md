# Signalist 📈 - Your Personalized Stock Market Dashboard

Signalist is a cutting-edge web application designed to provide users with a personalized and insightful view of the stock market. Leveraging the power of Next.js, React, Tailwind CSS, and AI, Signalist delivers real-time market data, personalized news, and user-specific investment insights, all within a sleek and intuitive interface. It solves the problem of information overload by curating relevant data based on user preferences and risk profiles.

## 🚀 Key Features

- **Personalized Dashboard:** Tailored market data and news based on user's investment goals, risk tolerance, and preferred industries.
- **Real-time Market Data:** Up-to-the-minute stock quotes, charts, and market analysis powered by TradingView widgets.
- **AI-Powered Personalization:** Uses AI (Gemini) to generate personalized welcome messages and potentially future features like investment recommendations.
- **User Authentication:** Secure user accounts with email/password authentication using Better Auth.
- **Protected Routes:** Ensures only authenticated users can access the main application dashboard.
- **Responsive Design:**  Optimized for viewing on various devices, from desktops to mobile phones.
- **Notification System:**  Provides real-time updates and alerts using a notification toaster.
- **Asynchronous Task Management:** Uses Inngest for reliable background task execution, such as sending welcome emails.

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   Next.js
    *   Tailwind CSS
    *   `clsx` & `tailwind-merge` (for CSS class management)
    *   `lucide-react` (for icons)
    *   `@/components/ui/*` (custom UI components)
    *   `next/font/google` (for Google Fonts)
    *   `@/components/ui/sonner` (for notifications)
*   **Backend:**
    *   Node.js
    *   Next.js API routes
*   **Database:**
    *   MongoDB (with Mongoose)
*   **Authentication:**
    *   Better Auth
*   **AI:**
    *   Google Gemini (via Inngest)
*   **Task Management:**
    *   Inngest
*   **Email:**
    *   Nodemailer
*   **Other:**
    *   TradingView Widgets
    *   Environment Variables (for configuration)

## 📦 Getting Started / Setup Instructions

### Prerequisites

1.  **Node.js:** Ensure you have Node.js (version 18 or higher) installed.
2.  **MongoDB:** You need a MongoDB database instance running, either locally or in the cloud (e.g., MongoDB Atlas).
3.  **Environment Variables:** Create a `.env.local` file in the root directory and set the following environment variables:

    ```
    MONGODB_URI=<your_mongodb_connection_string>
    BETTER_AUTH_SECRET=<a_strong_random_secret>
    BETTER_AUTH_BASE_URL=http://localhost:3000 # Or your deployed URL
    GEMINI_API_KEY=<your_google_gemini_api_key>
    NODEMAILER_EMAIL=<your_nodemailer_email>
    NODEMAILER_PASSWORD=<your_nodemailer_password>
    ```

    *   Replace `<your_mongodb_connection_string>` with your MongoDB connection string.
    *   Generate a strong, random secret for `BETTER_AUTH_SECRET`.
    *   Set `BETTER_AUTH_BASE_URL` to your application's URL (e.g., `http://localhost:3000` for local development).
    *   Obtain a Google Gemini API key and set it as `GEMINI_API_KEY`.
    *   Configure Nodemailer with your email credentials for sending emails.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running Locally

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

2.  **Open your browser:** Navigate to `http://localhost:3000` to view the application.
3. 

## 📂 Project Structure

```
signalist/
├── app/                       # Next.js app directory
│   ├── (root)/                # Route group for authenticated routes
│   │   ├── layout.tsx         # Layout for authenticated routes (requires login)
│   │   ├── page.tsx           # Home page
│   ├── layout.tsx             # Root layout for the entire application
│   ├── page.tsx               # Public landing page (if any)
├── components/                # React components
│   ├── Header.tsx             # Header component
│   ├── NavItems.tsx           # Navigation items component
│   ├── UserDropdown.tsx       # User dropdown component
│   ├── TradingViewWidget.tsx  # TradingView widget component
├── database/                  # Database connection logic
│   ├── mongoose.ts          # Mongoose connection setup
├── lib/                       # Utility functions and constants
│   ├── actions/               # Server actions
│   │   ├── auth.actions.ts    # Authentication actions
│   ├── butter-auth/           # Better Auth configuration
│   │   ├── auth.ts            # Better Auth instance
│   ├── constants.ts           # Application constants
│   ├── inngest/               # Inngest configuration
│   │   ├── client.ts          # Inngest client initialization
│   │   ├── function.ts        # Inngest functions (e.g., send welcome email)
│   │   ├── prompts.ts         # AI prompts
│   ├── nodemailer.ts          # Nodemailer configuration
│   ├── utils.ts               # Utility functions
├── middleware/                # Middleware
│   ├── index.ts               # Authentication middleware
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.js          # PostCSS configuration
├── README.md                  # This file
├── tailwind.config.js         # Tailwind CSS configuration
```bash
# To run the app.
npm run dev
# To run the inngest
npx inngest-cli@latest dev
```

## 📸 Screenshots

(Add screenshots of the application here to showcase its features and design.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [your_email@example.com](mailto:your_email@example.com).

## 💖 Thanks Message

Thank you for checking out Signalist! I hope you find it useful and informative. Your feedback and contributions are greatly appreciated.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/)
