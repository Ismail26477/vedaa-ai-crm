# CRM Application with MongoDB Backend

A full-stack CRM application with React frontend and Express + MongoDB backend.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

The `.env` file is already configured with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://ismail:ismail123@cluster0.t63ghmf.mongodb.net/?appName=Cluster0
PORT=5000
```

### 3. Seed the Database

Run this command to populate your MongoDB with sample data:

```bash
npm run seed
```

This will create:
- 4 users (3 callers + 1 admin)
- 5 sample leads
- Activities and call logs

### 4. Start the Application

Run both frontend and backend together:

```bash
npm run dev
```

This will start:
- Frontend (Vite): http://localhost:5173
- Backend (Express): http://localhost:5000

## Login Credentials

After seeding the database, use these credentials:

**Admin Account:**
- Username: `admin`
- Password: `admin123`

**Caller Account:**
- Username: `rahul_sharma`
- Password: `password123`

## API Endpoints

- `POST /api/auth/login` - User authentication
- `GET /api/leads` - Get all leads
- `POST /api/leads` - Create new lead
- `PUT /api/leads/:id` - Update lead
- `DELETE /api/leads/:id` - Delete lead
- `GET /api/callers` - Get all callers
- `GET /api/activities` - Get all activities
- `GET /api/call-logs` - Get all call logs
- `GET /api/dashboard/stats` - Get dashboard statistics

## Project Structure

```
├── server/
│   ├── index.js          # Express server entry point
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── seed.js           # Database seeding script
├── src/
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── lib/
│   │   └── api.ts        # API client functions
│   ├── pages/            # Application pages
│   └── types/            # TypeScript types
└── package.json
```

## Features

- User authentication with role-based access
- Lead management (CRUD operations)
- Dashboard with real-time statistics
- Caller performance tracking
- Activity logging
- Call log management
- MongoDB integration for data persistence
