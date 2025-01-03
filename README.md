<p align="center">
    <img src="public/Boilerplate%20banner%20-%2001.jpg" alt="Next.js Boilerplate">
</p>

<p align="center">
    <img src="public/Frameworks.svg" alt="Next.js Boilerplate">
</p>

<br />

<div align="center">
    <div align="center"><strong>Non-opinionated TypeScript starter for Next.js</strong></div>
    <div align="center">Highly scalable foundation with the best DX. All the tools you need to build your next project.</div>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/castrogusttavo/nextjs-boilerplate?style=flat-square&color=5e17eb&labelColor=000000">

  <a href="https://x.com/intent/follow?screen_name=gustta_dev">
    <img src="https://img.shields.io/twitter/follow/gustta_dev?style=flat-square&color=5e17eb&labelColor=000000" alt="Follow @gustta_dev" />
  </a>
</div>

<div align="center">
  <sub>Created by <a href="https://x.com/gustta_dev">Gusttavo Castro</a> with the help of many <a href="https://github.com/castrogusttavo/next-boilerplate/graphs/contributors">wonderful contributors</a>.</sub>
</div>

<br />

## Features

- ⚡️ Next.js 15 (App Router)
- ⚛️ React 19
- ⛑ TypeScript
- 📏 Biome — To find and fix problems in your code
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- 🗂 Path Mapping — Import components or images using the `@` prefix
- 🔐 CSP — Content Security Policy for enhanced security (default minimal policy)
- 🧳 T3 Env — Type-safe environment variables
- 🪧 Redirects — Easily add redirects to your application

## Quick Start

The best way to start with this template is using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```
# pnpm
pnpm create next-app -e https://github.com/castrogusttavo/nextjs-boilerplate

# yarn
yarn create next-app -e https://github.com/castrogusttavo/nextjs-boilerplate

# npm
npx create-next-app -e https://github.com/castrogusttavo/nextjs-boilerplate
```

### Development

To start the project locally, run:

```bash
pnpm dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- [Node.js >= 20](https://nodejs.org/)
- [pnpm >= 9](https://pnpm.io/)

### Directory Structure

- [`.github`](.github) - GitHub configuration including the CI workflows.<br>
- [`.husky`](.husky) - Husky configuration and hooks.<br>
- [`public`](./public) - Static assets such as robots.txt, images, and favicon.<br>
- [`app`](./app) - Application source code.<br>

### Tasks (Scripts)

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm lint` — Runs Biome for all files in the `app` directory.
- `pnpm format` — Runs Biome for fix all files in the `app` directory .
- `pnpm format:check` — Checks all files in the `app` directory for correct formatting.

### Path Mapping

This boilerplate uses the `@` prefix to import components or images. This is configured in the `tsconfig.json` file.

```tsx
import { Button } from '@/components/Button';
// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```
### Switch to Yarn/npm

This starter uses Deno by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the deno.lock file, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.

> **Note:** If you use Yarn, make sure to follow these steps from the [Husky documentation](https://typicode.github.io/husky/troubleshoot.html#yarn-on-windows) so that Git hooks do not fail with Yarn on Windows.

### Environment Variables

We use [Dot Env](https://www.npmjs.com/package/dotenv) to manage environment variables. Create a `.env.local` file in the root of the project and add your environment variables there.

When adding additional environment variables, the schema in `./app/lib/env/client.ts` or `./app/lib/env/server.ts` should be updated accordingly.

### Redirects

To add redirects, update the `redirects` array in `./redirects.ts`. It's typed, so you'll get autocompletion for the properties.

### CSP (Content Security Policy)

The Content Security Policy (CSP) is a security layer that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks. The CSP is implemented in the `next.config.ts` file.

It contains a default and minimal policy that you can customize to fit your application needs. It's a foundation to build upon.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.