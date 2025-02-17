#!/bin/bash
echo "Building the project..."
npm run build

echo "Deploying to Netlify..."
npx netlify deploy --prod

echo "Deployment complete!"
