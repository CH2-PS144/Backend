Backend service:
This is a JavaScript code built using Node.js, so make sure you have Node.js installed on your system.
This service is using MySQL as the database, so you also have to run MySQL on your system.

1. Clone the repository then open it using your code editor.
2. Open terminal in the project root directory, then run ```npm install``` to install the dependencies.
3. you have to create a database in mysql on my server with the name ```physedu ```
4. In the root directory of this project, make a new file named .env to provide the configurations needed.
Provide these details in the .env file:

```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://root:@localhost:3306/physedu"
LOCAL_APP_PORT=5000
5. Run these commands to configure the database migrations: ```npx prisma migrate dev```
6. Run the app using the command: ```npm run dev```
7. The server will run in the localhost with the port 5000, open http://localhost:5000/api/status to view message 
```json
{
  "status": "OK",
  "message": "server is up and ready to go! 🚀"
}
```

You can check the public API documentation that we used for the mobile app [here](https://github.com/CH2-PS144/Backend/tree/master/docs)

```
