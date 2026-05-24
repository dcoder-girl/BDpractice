import express from 'express';

const app = express();


app.use(express.json());



app.get('/', (req,res)=> {
    res.send('my week 2 API')
})
app.post('/api/user', (req, res) => {
    const user = req.body.name;
    const {name, email} = req.body;
    if (!user) return res.status(400).send('missing data');

    res.send( `hello ${user}`);

})
app.get('/user/:id', (req, res) => {
    const params = req.params.id;
    console.log(params);
    res.send(params);
    
})

app.listen(3000, ()=>{
    console.log( `listening`)
})