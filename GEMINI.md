# Gemini Workspace Documentation

This document provides an overview of the project, its structure, and how to work with it.

## About the Project

A real time Agile Project Management platform for development teams using scrum or kanban methodologies. Built with Nextjs 15, Typescript, Tailwindcss, Motion, Zustand, Zod, PostgreSQL, Drizzle-orm and more.

## Features

- Role based access control (Admin, Project owner, Scrum Master, Developer, viewer)
- Projects, Sprints, Tasks, Backlog
- Task types (Bug, Story, Task, Feature, Epic)
- Kanban board with drag and drop
- Real time updates via socket.io
- JWT auth with Better-Auth (with inactivity timeout)
- Advanced filtering, search and analytics
- File uploads (UploadThing and Supabase as fallback)
- Burndown chart, velocity tracking
- Mobile first accessible ui

## Tech Stack

### Frontend

- Nextjs 15 with app router
- React 19
- Typescript
- Tailwindcss
- Motion
- Zustand for state management
- Zod for form validation
- Sonner for toast notifications

### Backend

- Nextjs api routes and server actions
- socket.io + redis adapter for real time updates
- Better-Auth for RBAC and JWT auth
- Supabase for file uploads
- UploadThing for file uploads

### Tooling

- Drizzle-orm for database access
- PostgreSQL
- SWR for data fetching
- Sentry for error tracking

## Getting Started

To get started with this project, follow these steps:

1.  Install the dependencies:

    ```bash
    bun install
    ```

2.  Run the development server:

    ```bash
    bun run dev
    ```

3.  Open your browser to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

Here is an overview of the important files and directories in this project:

*   `app/`: Contains the main application code, including pages and API routes.
*   `components/`: Contains reusable React components.
*   `db/`: Contains the database schema and Drizzle ORM configuration.
*   `lib/`: Contains utility functions and libraries.
*   `public/`: Contains static assets like images and fonts.
*   `package.json`: Lists the project's dependencies and scripts.
*   `next.config.ts`: The configuration file for Next.js.
*   `tsconfig.json`: The configuration file for TypeScript.

## Scripts

The following scripts are available in this project:

*   `bun run dev`: Starts the development server with Turbopack.
*   `bun run build`: Builds the application for production.
*   `bun run start`: Starts the production server.
*   `bun run lint`: Lints the code using Next.js's built-in linter.
*   `bun run biome:ts`: Checks and formats all TypeScript files.
*   `bun run biome:tsx`: Checks and formats all TSX files.
*   `bun run db:migrate`: Creates a new database migration.
*   `bun run db:generate`: Generates the Drizzle ORM client.
*   `bun run db:push`: Pushes the database schema to the database.
