# My Portfolio

[![Deploy Portfolio](https://github.com/brar-karamjit/my_portfolio/actions/workflows/deploy-portfolio.yml/badge.svg)](https://github.com/brar-karamjit/my_portfolio/actions/workflows/deploy-portfolio.yml)

<p align="center">
  <img src="src/Assets/home-main.png" alt="Portfolio hero preview" width="640" />
</p>

> Modern, modular React portfolio that highlights experience, certifications, and projects with polished motion design. ✨

## Quick Links
| Live Site | Resume | Contact |
| --- | --- | --- |
| [Portfolio](https://brar-karamjit.github.io/my_portfolio) | [Download CV](src/Assets/Karamjit_Brar.pdf) | [Connect on LinkedIn](https://www.linkedin.com/in/brarkaramjit) |

## Highlights
- Animated landing page with hero particles, social links, and curated tech stack spotlight.
- Adaptive About section featuring timeline, certifications gallery, and GitHub contribution heatmap.
- Projects grid with reusable cards, modal deep-dives, and quick filters for faster discovery.
- React Bootstrap driven design system with themed overrides for consistent, accessible styling.

## Tech Stack at a Glance

**Frameworks & Languages**<br>
<img src="src/Assets/TechIcons/React.svg" alt="React" height="40" />
<img src="src/Assets/TechIcons/Python.svg" alt="Python" height="40" />
<img src="src/Assets/TechIcons/Java.svg" alt="Java" height="40" />

**Platforms & Tooling**<br>
<img src="src/Assets/TechIcons/Git.svg" alt="Git" height="40" />
<img src="src/Assets/TechIcons/Docker.svg" alt="Docker" height="40" />
<img src="src/Assets/TechIcons/Kubernates.svg" alt="Kubernetes" height="40" />
<img src="src/Assets/TechIcons/Postman.svg" alt="Postman" height="40" />
<img src="src/Assets/TechIcons/AWS.svg" alt="AWS" height="40" />
<img src="src/Assets/TechIcons/terraform.svg" alt="Terraform" height="40" />
<img src="src/Assets/TechIcons/jenkins.svg" alt="Jenkins" height="40" />
<img src="src/Assets/TechIcons/ansible.svg" alt="Ansible" height="40" />
<img src="src/Assets/TechIcons/prometheus.svg" alt="Prometheus" height="40" />
<img src="src/Assets/TechIcons/gcp.svg" alt="Google Cloud" height="40" />
<img src="src/Assets/TechIcons/powershell.svg" alt="PowerShell" height="40" />

## Getting Started
1. `npm install` – install dependencies.
2. `npm start` – run the development server at `http://localhost:3000`.
3. `npm run build` – create a production build in the `build/` directory.

### Optional Local Preview Checklist
- `npm run build` – confirm the production bundle succeeds locally.
- `npx serve build` – serve the static build to validate routing and asset loading before publishing.

## Project Structure
```
src/
	components/
		Home/        # Landing page hero plus tech stack sections
		About/       # Timeline, certifications, and GitHub widgets
		Projects/    # Project cards and filters
		Animations/  # Visualization playgrounds
	Assets/        # Images, PDFs, and SVG icons used across the site
```

## Deployment Notes
- Update assets in `src/Assets` and component copy before building for production.
- Review links for GitHub, LinkedIn, and resumes to ensure they reflect current destinations.

## GitHub Pages Deployment

<details>
  <summary>How the automated deployment works</summary>

  1. Push or merge to the `main` branch – the `Deploy Portfolio` workflow builds the React app and publishes it to GitHub Pages.
  2. The first time you deploy, open **Settings → Pages** in your repository, choose **GitHub Actions** as the source, and save.
  3. Visit `https://brar-karamjit.github.io/my_portfolio` once the workflow finishes. Allow a minute for cache invalidation.

</details>

## GitHub Actions Workflow
- Workflow file: `.github/workflows/deploy-portfolio.yml`.
- Trigger: runs on every push to `main` so the live site mirrors the default branch.
- Build stage: checks out the repo, caches npm dependencies, runs `npm ci`, and generates the production bundle with `npm run build`.
- Deploy stage: uploads the production `build/` directory as a Pages artifact and publishes it with `actions/deploy-pages`.
- Troubleshooting: open the latest run in the **Actions** tab to inspect build output or rerun a failed job.

## License
MIT
