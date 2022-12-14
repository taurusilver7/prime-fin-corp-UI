# Prime Finance Corps

> A fully responsive website with modern UI/UX design with React & TailwindCSS.

This project was scaffolded using [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), a build tool for providing faster & leaner development experience.

The design by [oneweekwonders](https://www.oneweekwonders.com/). It offers many wonderful designs.

```bash
npm create vite@latest
#and
Enter the project name, framework & programming language to work with.
# and
cd <project_name>
# and
yarn install (or) npm install (to add default dependencies)
# and
yarn dev (to start the development server)
```

## dependencies

Import tailwind & its surrounding dependencies into the project.

```bash
yarn add tailwindcss postcss autoprefixer -D
# and
npx tailwindcss init -p
```

## Config

The `vite.config.js` confirms the programming language & the key library for building the application through its plugin.

The `tailwind.config.cjs` holds the predefined styles & configuration snippets for tailwindcss.

Create a /constants directory to store the static texts for the application. The headings, paragraphs, and footer notes can all be modified at one spot in the constants.

Create the Navbar component to hold the title, logo & the navLinks. Style & customize the styling for mobile view & other breakpoints.

Create the hero component with the gradients from the pre-built styles, and imported stock files.

Create a stat component to populate the the stats from the static text.

The business & billing components are `flex-col md:flex-row && flex-col-reverse md:flex-row` type of components to highlight the billing image & feature points.

The CardDetail component is similar to the billing,
