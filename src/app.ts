import express from 'express';
const app =express();

app.get('/',(req,res) => {
    return res.send('hello form merun')
})
app.post('')
app.listen(3002,()=>{
    console.log('application listenign at http://localhost:3002');
})