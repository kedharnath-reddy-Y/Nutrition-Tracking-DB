const express = require('express');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');
const userRoutes = require('./routes/userRoutes');
const database = require('./models/db'); // Import the database

const app = express();

app.use(cors());
app.use(express.json());

// Ensure database is initialized before routing
database.initialize().then(() => {
    console.log("✅ Database initialized and connected");

    // Routes
    app.use('/api/foods', foodRoutes); // Food & Nutrition APIs
    app.use('/api/users', userRoutes); // User APIs

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("❌ Database connection failed", error);
    process.exit(1); // Exit if connection fails
});
