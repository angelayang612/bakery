# Bakery Shop - Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- MongoDB Atlas account

## Step 1: Push your code to GitHub

1. Initialize git (if not already done):
```bash
cd /Users/angelayang/projects/bakery
git init
git add .
git commit -m "Initial commit - ready for deployment"
```

2. Create a new repository on GitHub
3. Push your code:
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`

## Step 3: Add Environment Variables in Vercel

1. In your Vercel project settings, go to "Environment Variables"
2. Add the following variables:
   - `MONGO_URI`: Your MongoDB connection string from MongoDB Atlas
   - `PORT`: 3000

3. Make sure to add them for all environments (Production, Preview, Development)

## Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

## API Endpoints

Once deployed:
- Frontend: `https://your-project-name.vercel.app/`
- Backend API: `https://your-project-name.vercel.app/api/`

## Troubleshooting

### MongoDB Connection Issues
- Make sure to whitelist Vercel's IP addresses in MongoDB Atlas
- Or allow access from anywhere (0.0.0.0/0) in Network Access

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Make sure node_modules is in .gitignore

### CORS Issues
- The backend already has CORS enabled
- If issues persist, update CORS settings in server.js

## Local Development

To run locally:

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3001`
Backend will run on `http://localhost:3000`

**Note:** For local development, update fetch URLs back to `/products` and `/order` instead of `/api/products` and `/api/order`, or use environment variables.
