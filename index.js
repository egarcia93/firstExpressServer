const { request, response } = require('express');
let express =  require('express');
let app =  express();

app.use(express.static('public'));

app.get('/about', (request, response) => {
    response.send("this is an about page");
});
app.get('/mipagina',(request,response)=>{
    response.send("HOLAHOLA");
});
app.get('/data',(request,response)=>{
    let sampleData = {'name':'enrique'}
    response.json(sampleData);
});

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
})

