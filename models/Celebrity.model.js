//  Add your code here
const {model, Schema} = require('mongoose'),

const CelebritySchema = new Schema({
    name : String,
    occupation : String,
    catchPhrase : String,
})

const Celebrity = model("celebrity", CelebritySchema)

module.exports = Celebrity;

// Where are seeds ?? or bin folder ?