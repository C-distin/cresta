# Agile Project Management Web App

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
