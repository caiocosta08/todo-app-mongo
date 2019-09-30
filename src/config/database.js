const dotenv = require('dotenv');
dotenv.config();

console.log(process.env)
export const api_url = process.env.API_URL || 'https://nodejs-expressjs-todo-server.herokuapp.com' || "http://192.168.43.194:8000";
export const api_name = "todo-server";