# Saro Chic & Conseil

A sophisticated e-commerce and consulting website for women's fashion and Campus France application assistance.

Saro Chic & Conseil is a sophisticated, minimalist e-commerce and service website designed for Saro Services. The platform elegantly showcases a curated collection of women's beauty accessories and dresses, while also offering specialized consulting services for the Campus France application process. The design prioritizes a visually stunning, warm, and inviting user experience, blending product sales and professional services into a single, cohesive brand identity. The application will be built with a mobile-first approach, ensuring a seamless experience across all devices, and will feature beautiful micro-interactions and animations to delight the user.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/PierradrienneSaleme-Miserilove/generated-app-20251017-095554)

## ✨ Key Features

-   **Elegant E-commerce:** A curated collection of women's beauty accessories and dresses.
-   **Professional Services:** Specialized consulting for the Campus France application process.
-   **Visually Stunning UI:** A minimalist, warm, and inviting design aesthetic.
-   **Responsive First:** Flawless user experience on desktops, tablets, and mobile devices.
-   **Interactive Polish:** Smooth animations and micro-interactions for a delightful user journey.

## 🚀 Technology Stack

-   **Framework:** React (Vite)
-   **Routing:** React Router
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Icons:** Lucide React
-   **Animation:** Framer Motion
-   **Deployment:** Cloudflare Pages & Workers

## 🏁 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/saro_chic_et_conseil.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd saro_chic_et_conseil
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## 💻 Development

To start the local development server, run the following command:

```sh
bun run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:3000` in your web browser. The server supports Hot Module Replacement (HMR), so changes you make to the code will be reflected live in the browser.

## 📦 Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command bundles the application and outputs the static files to the `dist` directory, ready for deployment.

## ☁️ Deployment

This project is optimized for deployment on the Cloudflare network.

To deploy the application directly to your Cloudflare account, ensure you have the Wrangler CLI configured, then run:

```sh
bun run deploy
```

This will trigger the build process and deploy the application using the configuration in `wrangler.toml`.

Alternatively, you can connect your GitHub repository to Cloudflare Pages for continuous deployment.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/PierradrienneSaleme-Miserilove/generated-app-20251017-095554)