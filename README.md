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

### Database

For this app, MongoDB cloud was utilized - you can use an alternate connection if you'd like

local development: locate the config file in the config folder, which exports your `db.uri` connection. In config.js, `"your_database_here"` needs to be your mongo database name.

### Run

```
## front-end runs on port 3000

npm start

```

On execution, your brower should open to localhost.3000

```
## back-end runs on port 8000
npm run server.js
```

On execution, you should see `Listening on port 8000`
