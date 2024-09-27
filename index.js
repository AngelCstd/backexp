const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    database = require("./routes/database"),
    app = express(),
    port = process.env.PORT || 3000;


app.use(cors({
    origin: [
        "http://127.0.0.1:5500/",
        "http://localhost:5500",
        "https://expoemprendealondra.github.io/Evento/"]
}))
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async function(req, res){
    try{
        res.send("ya estoy")
        res.end()
    }catch(err){
        console.error(err)
    }
});

app.use('/add', database);

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
})

app.listen(port, () => {
    console.log('server iniciado paps')
})
