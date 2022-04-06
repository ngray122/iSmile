# iSmile :star2:

> **iSmile** is a blog-style platform developed with the MERN stack

## Installation

### Env Variables

Create a .env file in your root folder and add the following:

```
db_name = "your_database_here"
SECRET_KEY = "santa_is_real"
```

### Install dependencies

Back-End

In the root folder:

```
npm install
```

Front-End

```
cd client
npm install
```

### DB

In config.js, `"your_database_here"` needs to be your mongo database name.

`mongoose.connect()` is your cluster name in the Mongodb cloud.

> Feel free to use an alternate database connection

### Run

```
# front-end runs on port 3000
npm start

# back-end runs on port 8000
npm run server.js
```

## Things in progress :new:

- Bookmark/pin favorite posts
- External APIs
- Like, Comment and Share
