const express = require('express');
const router = express.Router();

const books=[];

router.get('/', (req,res)=>{
    res.json(books);
});

router.post('/', (req, res) => {
    books.push(req.body);
    res.status(201).send('Book added');
  });

router.put('/',(req,res)=>{
    const {id}= req.params;
    const index = books.findIndex(book=>book.id == id);
    if (index >=0){
        books[index]=req.body;
        res.send('book updated');
    } else{
        res.status(404).send('Book not found');
    }
});

router.delete('/:id',(req,res)=>{
    const{id}=req.params;
    const index = books.findIndex(book => book.id == id);
    if(index >= 0 ){
        books.splice(index, 1);
        req.send('Book deleted');
    } else {
        res.status(404).send('Book not found');
    }
});

module.exports=router;