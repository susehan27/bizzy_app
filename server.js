const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const http = require("http");

const users = require("./routes/api/users");
const items = require("./routes/api/items");

const app = express();

//bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose.connect(
    db,
    {useNewUrlParser: true}
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// mongoose.connect(db, 
//     { server: { 
//         // sets how many times to try reconnecting
//         reconnectTries: Number.MAX_VALUE,
//         // sets the delay between every retry (milliseconds)
//         reconnectInterval: 1000 
//         } 
//     }
// );

//passport middleware
app.use(passport.initialize());

// //spotify http server to handle requests
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

//passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users);
app.use("/api/items", items);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
// app.set("port", (process.env.PORT || 5000));
app.listen(port, () => console.log(`Server up and running on port ${port}!`));

