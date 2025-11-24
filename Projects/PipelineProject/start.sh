#!/bin/bash

echo "Starting Titanic Survival Predictor..."
echo ""
echo "Starting backend server..."
npm start &
sleep 3
echo ""
echo "Starting frontend server..."
cd client && npm run dev &
echo ""
echo "Both servers are starting..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

