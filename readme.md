About the App:
    The Travel Journal App is a simple web application built with Node.js and Express.js that allows users to create, view, update, and delete records of their travel experiences. The app uses the Pug templating engine for rendering views and stores travel entries in a temporary in-memory data structure (array). It is designed for educational purposes to demonstrate CRUD operations and MVC architecture.

How to Run the App Locally:
    1. Clone the Repository:
        git clone https://github.com/diyorbekabdullayev/WT.00018656.git
        Navigate to the project folder.
    2. Install Dependencies
        Make sure Node.js is installed on your system. Then run:
            npm install
        This will install all necessary dependencies listed in package.json.
    3. Run the Application
        Start the app with:
            node app.js
        The application will start on:
            http://localhost:3000

Application Dependencies:
    express - Web framework for Node.js
    body-parser - Parses incoming request bodies
    pug - Template engine for rendering views
    express-validator -	For server-side input validation

Project Structure:
    /travel-journal-app
    │
    ├── app.js               # Entry point of the application
    ├── package.json         # Project configuration file
    ├── .gitignore           # Ignored files/folders for Git (includes node_modules)
    │
    ├── /public              # Static assets for client-side
    │   ├── /images
    │   ├── /javascripts
    │   └── /styles
    │       └── style.css
    │
    ├── /routes              # Routing definitions
    │   ├── index.js         # Main route handler
    │   └── /trips
    │       └── index.js     # Trips route handler
    │
    ├── /views               # Templates for rendering views
    │   ├── layout.pug       # Layout template
    │   ├── index.pug        # Homepage view
    │   └── /trips
    │       ├── index.pug    # Trips list view
    │       ├── create.pug   # Create trip form view
    │       └── edit.pug     # Edit trip form view
    │
    ├── /controllers         # Controller logic for handling routes
    │   ├── index.js
    │   └── /trips
    │       └── index.js
    │
    └── /services            # Service layer for business logic
        ├── index.js
        └── /trips
            └── index.js
        
GitHub Repository:
    https://github.com/diyorbekabdullayev/WT.00018656

