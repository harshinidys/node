// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./models/Item'); // Import the model you created

const app = express();
app.use(bodyParser.json());

// // Connect to the MongoDB database
// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let con = mongoose.connection; 

// con.on('connected', function() {
//   console.log('Mongoose Db was connected');
// })

// con.on('error',function(error) {
//   console.log('DB not connected : ', error);
// })
// // Create a new item
// app.post('/items', async (req, res) => {
//   try {
//     const newItem = await Item.create(req.body);
//     res.json(newItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating item' });
//   }
// });

// // Get all items
// app.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ error: 'Error retrieving items' });
//   }
// });

// // Update an item
// app.put('/items/:id', async (req, res) => {
//   try {
//     const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating item' });
//   }
// });

// // Delete an item
// app.delete('/items/:id', async (req, res) => {
//   try {
//     await Item.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Item deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting item' });
//   }
// });

app.get('/:value',function(req,res){
    res.status(200).json({ message: `Hello World ${req.params.value}` });
})

const PORT = 4006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
