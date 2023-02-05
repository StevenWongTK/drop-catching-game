# Drop Catching Game

This is a drop catching game. You can catch the drop by moving the catch to get score.

## Application setup guide

In the project directory, please run the following step by step:

### `npm install`

It will instead all dependencies of this project.

### `npm run start`

It will run the frontend and the backend at the same time.\
The frontend will be using port `3000`.\
The backend will be using port `8000`.\
Please make sure you are not using any of these before running this script.\
The web application should be popped up through your brower.\
Otherwise, you can go http://localhost:3000 manually.

## APIs

### `post /record/set`

This api stores the record to db.\
Requset: { name: string, score: number }\
Response: N/A

### `get /record/get-top-100`

This api gets the top 100 records with highest score from db.\
Request: N/A\
Response: { name: string, score: number }[]
