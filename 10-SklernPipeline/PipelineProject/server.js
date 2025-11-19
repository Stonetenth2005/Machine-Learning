const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Prediction endpoint
app.post('/api/predict', (req, res) => {
    try {
        const data = req.body;
        
        // Validate required fields
        if (!data.pclass || !data.sex || !data.fare || !data.embarked) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Spawn Python process to run prediction
        const pythonProcess = spawn('python', ['predict.py']);
        let output = '';
        let errorOutput = '';
        
        // Send input data to Python process
        pythonProcess.stdin.write(JSON.stringify(data));
        pythonProcess.stdin.end();
        
        // Collect output from Python process
        pythonProcess.stdout.on('data', (data) => {
            output += data.toString();
        });
        
        pythonProcess.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });
        
        // Handle process completion
        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                console.error('Python process error:', errorOutput);
                return res.status(500).json({ 
                    error: 'Prediction failed', 
                    details: errorOutput 
                });
            }
            
            try {
                const result = JSON.parse(output);
                res.json(result);
            } catch (parseError) {
                console.error('Parse error:', parseError);
                console.error('Output:', output);
                res.status(500).json({ 
                    error: 'Failed to parse prediction result',
                    details: output 
                });
            }
        });
        
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api/predict`);
});

