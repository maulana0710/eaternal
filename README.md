# ![Eaternal](/app/icon.png) Eaternal Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This application is built using TypeScript for type safety, styled with Tailwind CSS for utility-first CSS styling, and utilizes shadcn/ui for pre-built UI components. The website features a primary gradient color theme.

# Eaternal UI
### Transaction Page
![Eaternal - Transaction UI](/app/ui-preview-transaction.png)
### Products Page
![Eaternal - Products UI](/app/ui-preview-products.png)

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing the development experience with static types.
- **ESLint**: A static code analysis tool for identifying problematic patterns in JavaScript/TypeScript code.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without having to leave your HTML.
- **shadcn/ui**: A component library that provides reusable UI components for building responsive user interfaces.
- **Inter**: A highly legible and modern sans-serif font family used throughout the application for improved readability and aesthetics.
- **Gradient Color**: The primary color scheme of the website incorporates a gradient design for visual appeal.

## Getting Started

First, install modules with

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Gradient Color Definitions

The primary gradient colors used in the project are defined using HSL at global.css:

```css
:root {
    --gradient-primary: hsl(202, 82%, 44%);
    --gradient-secondary: hsl(237, 90%, 61%);
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn SHADCN UI](https://ui.shadcn.com/docs) - A tutorial for components from SHADCN UI.
- [Learn Tailwind CSS](https://tailwindcss.com/docs/installation) - A tutorial for styling from Tailwind CSS.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
