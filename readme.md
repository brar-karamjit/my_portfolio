# My Portfolio

Personal portfolio website built with React to showcase professional experience, tools, and projects.

## Highlights
- Modern landing page with animated hero, quick contact links, and featured tech stack blocks.
- “Tools and Platforms” and “Operating Systems” sections surfaced directly on the home page for faster scanning.
- Dedicated About page with experience timeline, certifications, and GitHub activity embed.
- Modular component structure with reusable styling via React Bootstrap.

## Tech Stack
- React 18
- React Bootstrap
- react-icons

## Getting Started
1. `npm install` – install dependencies.
2. `npm start` – run the development server at `http://localhost:3000`.
3. `npm run build` – create a production build in the `build/` directory.

## Project Structure
```
src/
	components/
		Home/        # Landing page hero plus tech stack sections
		About/       # Timeline, certifications, and GitHub widgets
		Projects/    # Project cards and filters
		Animations/  # Visualization playgrounds
	Assets/        # Images and SVG icons used across the site
```

## Deployment Notes
- Update the assets in `src/Assets` to reflect new projects or branding.
- Adjust environment-specific links (GitHub, LinkedIn, resumes) inside the relevant components before publishing.

## GitHub Pages Deployment
1. Push or merge to the `main` branch – the included workflow automatically builds the React app and publishes it to the `gh-pages` branch using GitHub Actions.
2. The first time you deploy, open **Settings → Pages** in your repository, choose **GitHub Actions** as the source, and save.
3. Visit `https://brar-karamjit.github.io/my_portfolio` once the workflow finishes. Cache invalidation can take a minute.

### Local verification before pushing (optional)
- `npm run build` – confirm the production bundle succeeds locally.
- Serve the `build/` directory (for example, with `npx serve build`) to preview the exact assets that will ship to GitHub Pages.

## License
MIT
