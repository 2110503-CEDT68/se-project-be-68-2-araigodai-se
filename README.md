# Hotel Booking System API

A Hotel Booking System API built with Node.js, Express, and MongoDB.

## Deployment on Render

### Quick Deploy

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Render will auto-detect the `render.yaml` configuration

### Manual Setup (Alternative)

If not using `render.yaml`:

1. Create a new Web Service on Render
2. Connect your repository
3. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node

### Environment Variables

Set these in Render Dashboard → Environment:

| Variable | Value | Notes |
|----------|-------|-------|
| `NODE_ENV` | `production` | Required |
| `MONGO_URI` | Your MongoDB connection string | Required - Get from MongoDB Atlas |
| `JWT_SECRET` | Random secure string | Required - Auto-generated or custom |
| `JWT_EXPIRE` | `30d` | Optional - defaults to 30 days |
| `JWT_COOKIE_EXPIRE` | `30` | Optional - defaults to 30 |

### MongoDB Atlas Setup

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist Render's IP (or use `0.0.0.0/0` for all IPs)
4. Get your connection string and add it to Render's `MONGO_URI` environment variable

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example config/config.env

# Edit config/config.env with your values
```

### Running Locally

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start

# Seed database
npm run seed

# Clear and seed database
npm run seed:clear
```

### Testing

```bash
# Run Newman tests
npm test

# Verbose test output
npm test:verbose
```

## API Documentation

Once deployed, access Swagger documentation at:
- Local: `http://localhost:5000/api-docs`
- Production: `https://your-app.onrender.com/api-docs`

## API Endpoints

Base URL: `/api/v1`

- **Auth**: `/auth` - User authentication
- **Hotels**: `/hotels` - Hotel management
- **Bookings**: `/bookings` - Booking management

## Security Features

- Helmet.js for security headers
- XSS protection
- Rate limiting (100 requests per 10 minutes)
- HPP protection
- CORS enabled
- MongoDB sanitization
- JWT authentication

## Performance

- Request timeout: 3 seconds
- Server timeout: 3 seconds

## License

ISC
