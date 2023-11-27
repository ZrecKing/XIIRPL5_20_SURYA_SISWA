// getting-started.js
const mongoose = require('mongoose');


const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PRAKTIKUAS');
  console.log('Database berhasil connect')

}

module.exports = mongoDB