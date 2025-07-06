# BGRemover-frontend

This repository contains the frontend of the **BGRemover** application – a web-based tool to remove backgrounds from images instantly.

Built with **React**, **Vite**, **Tailwind CSS**, and modern frontend tooling, it offers a responsive and minimal interface with support for drag-and-drop, light/dark theme toggling (including Clerk theme sync), and Clerk authentication.

---

## ✨ Features

- 🖼️ Remove background from PNG, JPG, or WebP images
- ⚡ Lightning-fast performance with Vite
- 🌙 Light/Dark mode toggle with synced Clerk UI
- 📂 Drag & drop + file upload support with validation
- 🔐 User authentication via Clerk
- 💳 Payments handled via Razorpay
- 🎨 Tailwind CSS for clean and responsive design
- 🔔 Toast notifications using React Hot Toast

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/) for authentication
- [React Hot Toast](https://react-hot-toast.com/) for notifications
- ESLint with `@eslint/js`, `react-hooks`, and `react-refresh` plugins

---

## 📁 Folder Structure

```plaintext
BGRemover-frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and category data
│   ├── clerk/              # Clerk-specific components/configs
│   ├── components/         # Reusable UI components
│   ├── context/            # React Context providers (App, User)
│   ├── customHooks/        # Reusable custom hooks
│   ├── pages/              # Page components (e.g., Home, Result)
│   ├── services/           # API and helper service functions
│   ├── App.css             # App-wide styles
│   ├── App.jsx             # Main App component
│   ├── index.css           # Tailwind + global styles
│   └── main.jsx            # App entry point
├── .env                    # Environment variables (not committed)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### ✅ Step 1: Clone the Repository

```bash
git clone https://github.com/apoorv199-bit/BGRemover-frontend.git
cd BGRemover-frontend
```

### ✅ Step 2: Install Dependencies

```bash
npm install
```

### ✅ Step 3: Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-key
VITE_RAZORPAY_KEY_ID=your-razorpay-key-id
VITE_BACKEND_URL=your-backend-url
```

### ✅ Step 4: Run the Development Server

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

---

## 📝 Environment Variables

| Variable                     | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `VITE_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key for authentication |
| `VITE_RAZORPAY_KEY_ID`       | Your Razorpay key ID for payment processing   |
| `VITE_BACKEND_URL`           | Backend URL for image processing              |

---

## 🌐 Demo

To be added later.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [@apoorv199-bit](https://github.com/apoorv199-bit)
- Email: [apoorvsahu199@gmail.com]

---

⭐ If you found this project helpful, please give it a star!
