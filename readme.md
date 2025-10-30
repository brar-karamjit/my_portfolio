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

## License
MIT
