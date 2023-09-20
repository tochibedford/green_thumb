# Tochi's Gardening Website Kit

```sh
npm create astro@latest -- --template tochibedford/green_thumb
```

## 📚 Stack

- [Astro](https://astro.build/)
- CSS - [TailwindCss](https://tailwindcss.com/)
- Icons - [Astro-Icons](https://www.astroicon.dev/)

## ✨Features

- Gardening Home Page
- Blog Section
- Blog Posts Page
- Form collection is handled by [Form spark](https://formspark.io/)
- Parallax scroll built-in

## Desktop-First

I've added TailwindCss as an Astro integration, and all breakpoints are desktop first. Can be easily changed to tailwinds mobile-first style by:

- Deleting the screens entry from the tailwind.config.cjs file:

  ![image](https://github.com/tochibedford/green_thumb/assets/34871260/79b0225f-15be-4789-ad16-6d91f0e0955d)

- Deleting the `tailwindbase.css` file. Don't forget to remove it's import in the main Layout file:

  ![image](https://github.com/tochibedford/green_thumb/assets/34871260/49e80ca3-15bc-4ca0-9383-b13356d98b49)

- Then Removing the `applyBaseStyles` entry from the `astro.config.mjs file` here:

  ![image](https://github.com/tochibedford/green_thumb/assets/34871260/cc0b93f3-2c30-4dc0-9579-fca7736fdf55)

## 🚀 Project Structure

Inside of this Astro template, you'll see the following project structure:

```text
📦green_thumb
 ┣ 📂public
 ┃ ┗ 📜favicon.svg
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜...png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜BlogCard.astro
 ┃ ┃ ┣ 📜BorderlessCard.astro
 ┃ ┃ ┣ 📜Footer.astro
 ┃ ┃ ┣ 📜MainButton.astro
 ┃ ┃ ┗ 📜Navbar.astro
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜Layout.astro
 ┃ ┃ ┗ 📜tailwindbase.css
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂blog
 ┃ ┃ ┃ ┣ 📜index.astro
 ┃ ┃ ┃ ┗ 📜[postId].astro
 ┃ ┃ ┗ 📜index.astro
 ┃ ┣ 📜blogposts.ts
 ┃ ┗ 📜env.d.ts
 ┣ 📜.gitignore
 ┣ 📜astro.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tailwind.config.cjs
 ┗ 📜tsconfig.json
```
