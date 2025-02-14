file structure:

healthy_food_project/
│-- backend/
│   ├── node_modules/           # Dependencies (generated after npm install)
│   ├── database/
│   │   ├── healthy_food.db      # SQLite database file (auto-generated)
│   │   ├── schema.sql           # SQL schema to create tables
│   │   ├── seed_data.sql         # Initial data for testing
│   ├── routes/
│   │   ├── foodRoutes.js         # Routes for food operations
│   │   ├── userRoutes.js         # Routes for user operations
│   ├── models/
│   │   ├── db.js                 # Database connection
│   │   ├── foodModel.js           # Food model
│   │   ├── userModel.js           # User model
│   ├── app.js                    # Main entry point
│   ├── package.json               # Project dependencies
│   ├── .gitignore                 # Ignore node_modules, db files
│   ├── [README.md](http://readme.md/)                  # Project instructions
│-- frontend/                      # (Optional frontend in React or HTML)

SAMPLE INPUT:-
{
  "name": "Samosa",
  "category": "Snacks",
  "cuisine": "Indian",
  "serving_size": "1 piece",
  "calories": 250,
  "protein": 6,
  "carbs": 35,
  "fats": 12,
  "sugar": 2,
  "sodium": 400,
  "fiber": 4,
  "source_name": "Domino’s",
  "source_type": "Restaurant",
  "location": "High Street, City",
  "contact": "8800123456",
  "available_on": "2025-02-09",
  "price": 50
}
