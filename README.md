# Motherbrain Fullstack Challenge

This project is a fullstack TypeScript application built with Clean Architecture in mind. It includes a backend using **Express**, **Apollo Server**, **GraphQL**, **Prisma ORM**, and a frontend built in **React** using **Vite**, **TailwindCSS**, and **Apollo Client**.

---

## Architecture

### Backend

The backend follows **Robert C. Martin's Clean Architecture** approach. It is split into clear layers:

- **Domain Layer**: Core business logic (entities and repository interfaces)
- **Use Cases Layer**: Application-specific logic (fetching funding rounds)
- **Infrastructure Layer**: Technical details (Prisma ORM implementation)
- **Interfaces Layer**: GraphQL schema and resolvers
- **Main**: Application entrypoint with server setup

Prisma is used to communicate with a SQLite database. The database schema includes two models:
- `Organization`: Represents a company
- `FundingRound`: Represents a funding event for an organization

GraphQL is used for API communication between frontend and backend.

---

### Frontend

The frontend is a minimal **React** app using:

- **Apollo Client** for fetching data
- **Recharts** for visualizing funding data
- **TailwindCSS** for quick styling

The architecture is kept simple for this coding challenge:
- A single `FundingChart` component fetches and displays funding data
- There is little abstraction, but this was intentional to stay concise and focused

> The frontend can benefit from further improvements like component-level separation of concerns, hooks for data fetching, and state management if the application grows. This is a good topic for discussion in an interview.

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone <repo_url>
cd motherbrain-fullstack-challenge
```

### 2. Setup the Backend

```bash
cd backend
cp .env.example .env
# Make sure it contains: DATABASE_URL="file:./dev.db"

yarn install
npx prisma generate
npx prisma db push
yarn dev
```

The backend will run at: `http://localhost:4000/graphql`

### 3. Setup the Frontend

```bash
cd ../frontend
yarn install
yarn dev
```

Then open your browser at: `http://localhost:5173` (or the next available port)

---

## Testing

The backend includes unit tests for the use case:

```bash
cd backend
yarn test
```

Frontend tests can be added easily using Jest + React Testing Library.


## Summary

This project demonstrates:

- Clean backend architecture with clear separation of concerns
- Minimal React frontend with data visualization
- GraphQL communication between frontend and backend
- Quick development setup using Vite and TailwindCSS

Further abstractions can improve the frontend, but the current setup is clean and ready for discussion.

I haven’t added containers or infrastructure tweaks yet — we can discuss them.