# Rooish Entrepreneurship Center

## Overview
A React + TypeScript + Vite frontend website for an entrepreneurship center (in Persian/Farsi). The site is designed for right-to-left (RTL) reading and uses Tailwind CSS via CDN.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN) with custom theme
- **Font**: Vazirmatn (Persian font via Google Fonts)

## Project Structure
```
/
├── components/        # React components
├── App.tsx           # Main App component
├── index.tsx         # Entry point
├── index.html        # HTML template
├── index.css         # CSS styles
├── constants.tsx     # Constants and configuration
├── types.ts          # TypeScript type definitions
├── vite.config.ts    # Vite configuration
└── package.json      # Dependencies
```

## Development
- Run `npm run dev` to start the development server on port 5000
- The site uses Tailwind CSS CDN for styling

## Email Integration Note
The user has dismissed the native Resend integration. Currently, form submissions are simulated and logged to the console. To enable real email sending to `soheil.power@gmail.com`, an API key (e.g., Resend, SendGrid) should be stored as a secret, or the native integration should be authorized.
