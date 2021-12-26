var express = require("express");
var app = express();

info_1 = {
    first_name: "subhan",
    last_name: "de",
    branch: "master",
    app: "app-2"
}

app.get("/api", (req, res, next) => {
    res.json(info_1);
   });



app.listen(6000, '0.0.0.0', () => {
 console.log("Server running on port 6000");
});