```javascript
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api', apiRoutes);

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```