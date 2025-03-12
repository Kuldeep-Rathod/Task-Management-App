# Task Management App

## Description

A simple task management application built using NestJS, PostgreSQL, and TypeORM.

## Features
- User Authentication (Login/Signup)
- Create, Read, Update, and Delete (CRUD) Tasks
- Search Functionality for Tasks
- Real-time Updates using WebSockets

## Tech Stack
- **Backend:** NestJS, TypeORM
- **Database:** PostgreSQL

## Project Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Kuldeep-Rathod/Task-Management-App.git
   cd task-management-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables in `.env` file:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/taskdb
   ```

## Compile and Run the Project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints
| Method | Endpoint         | Description                |
|--------|----------------|----------------------------|
| POST   | `/auth/signup`  | Register a new user       |
| POST   | `/auth/login`   | Authenticate a user       |
| GET    | `/tasks`        | Get all tasks             |
| GET    | `/tasks/:id`        | Get Task By Id            |
| GET | `/tasks?query`    | Get Task With Filter             |
| POST   | `/tasks`        | Create a new task         |
| PATCH  | `/tasks/:id`    | Update a task             |
| DELETE | `/tasks/:id`    | Delete a task             |





