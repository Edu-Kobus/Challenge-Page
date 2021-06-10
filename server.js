
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public')) //css

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
}) //config. njk

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/content-page", function(req, res){
    return res.render("content-page")
})

server.get("/courses", function(req, res){
    return res.render("courses")
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found")
    }

    return res.render("video", { item: video })

})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
    return res.send(`O id fornecido na rota é: ${id}`);
  });

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5000, function(){
    console.log("server is running!")
})