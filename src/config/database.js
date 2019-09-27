require('dotenv').config();

module.exports = {
    api_url: process.env.API_URL || "http://192.168.43.194:8000",
    api_name: "todo-server"
}