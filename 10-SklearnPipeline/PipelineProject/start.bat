@echo off
echo Starting Titanic Survival Predictor...
echo.
echo Starting backend server...
start cmd /k "npm start"
timeout /t 3 /nobreak >nul
echo.
echo Starting frontend server...
start cmd /k "cd client && npm run dev"
echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
pause

