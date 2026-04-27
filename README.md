# Digital Asset Tracker

A beginner-friendly full-stack project for managing digital assets.

- Frontend: `Next.js` app in `client/`
- Backend: `Express` API in `server/`

## What it does

This app lets you:

- Create new asset records
- View a dashboard of saved assets
- Edit asset title, description, and status
- Delete assets

The backend stores asset data in memory, so it resets when the server restarts.

## Folder structure

- `client/` — Next.js frontend app
  - `app/` — page routes and UI components
  - `package.json` — frontend dependencies and scripts
- `server/` — Express backend API
  - `server.js` — REST API routes for asset CRUD
- `package.json` — root workspace scripts for running both client and server together

## Prerequisites

- Node.js 18 or newer
- npm (comes with Node.js)

## Setup

1. Open a terminal in the project root:

```bash
cd c:\vscode\digital-asset-tracker
```

2. Install dependencies:

```bash
npm install
npm install --prefix client
```

## Run the app

Start both the backend and frontend together from the root:

```bash
npm run dev
```

- Backend server runs on `http://localhost:5000`
- Frontend runs on `http://localhost:3000`

If you want to run the client only:

```bash
npm --prefix client run dev
```

To start just the server:

```bash
npm run server
```

## Build the frontend

To verify the Next.js app builds successfully:

```bash
npm --prefix client run build
```

## API endpoints

The backend exposes these routes:

- `GET /assets` — list all assets
- `GET /assets/:id` — get one asset
- `POST /assets` — create a new asset
- `PUT /assets/:id` — update an asset
- `DELETE /assets/:id` — remove an asset

## Notes for beginners

- The frontend uses `axios` to call the Express API.
- The backend stores data in a simple array, so it is not persisted across restarts.
- This project is great for learning how a React/Next.js UI talks to a backend API.

## Helpful commands

```bash
npm run dev              # start both client + server
npm --prefix client run dev   # run only frontend
npm run server           # run only backend
npm --prefix client run build # build the Next.js app
```

## Want to improve it?

Some easy next steps:

- Add persistent storage with a database
- Show confirmation dialogs before deleting assets
- Add asset search or filters
- Add user authentication
