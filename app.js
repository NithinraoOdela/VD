const express = require("express")
const path = require("path")
const fs = require("fs");
const { clearLine } = require("readline");
const app = express();
const port = 80;
app.use("/static", express.static("static"))
app.use(express.urlencoded())


app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views")) 

app.get("/", (req, res)=>{
    const con = "this is pug"
    const params ={"title":"pug is the bes", "content": con}
    res.status(200).render("index.pug", params)
})


app.post("/", (req, res)=>{
    end_year = req.body.end_year
    intensity = req.body.intensity
    sector = req.body.sector
    topic= req.body.topic
    insight = req.body.insight
    url = req.body.url
    region = req.body.region
    start_year = req.body.start_year
    impact = req.body.impact
    added= req.body.added
    published = req.body.published
    country= req.body.country
    relevance = req.body.relevance
    pestle = req.body.pestle
    source = req.body.source
    title = req.body.title
    likelihood = req.body.likelihood

    let out=
   `"end_year": ${year},
   "intensity": ${intensity},
   "sector": ${sector},
   "topic": ${topic},
   "insight": ${insight},
   "url": ${url},
   "region": ${region},
   "start_year":${start_year},
   "impact": ${impact},
   "added": ${added},
   "published":${published},
   "country":${country},
   "relevance":${relevance},
   "pestle": ${pestle},
   "source": ${source},
   "title": ${title},
   "likelihood": ${likelihood}
     ` 

    

    fs.appendFileSync("output.txt", out)
    console.log(req.body)
    const params ={"message":"Your form has been saved succesfully"}
    res.status(200).render("index.pug", params)
})


app.listen(port, ()=>{
    console.log("Building a server page")
})
 