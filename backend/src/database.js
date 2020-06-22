const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/lineaesperanza", {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

const connection  = mongoose.connection;


connection.once("open", () => {
    console.log("DB esta conectada");
});
