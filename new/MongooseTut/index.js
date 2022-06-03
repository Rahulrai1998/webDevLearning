const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.connect('mongodb://localhost:27017/test');
}

const kittySchema = new mongoose.Schema({
    name: String
}); const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
// NOTE: methods must be added to the schema before compiling it with mongoose.model()

const fluffy = new Kitten({ name: 'fluffy' });

fluffy.save();

const kittens = Kitten.find();
console.log(kittens);
