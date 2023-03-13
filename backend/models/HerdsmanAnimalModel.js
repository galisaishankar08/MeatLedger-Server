const mongoose = require('mongoose')

const HerdsmanAnimalSchema = new mongoose.Schema(
    {
        "animalcode":{type: String, unique:true, require:true},
        "colustrumfeeding": {type: String, required: true},
        "weaning": {type: String, required: true},
        "disbudding": {type: String, required: true},
        "eartagging": {type: String, required: true},
        "castration": {type: String, required: true},
        "vaccinationschedule": {type: String, required: true},
        "disinfection": {type: String, required: true},
        "quarantine": {type: String, required: true},
        "isolationofsickanimals": {type: String, required: true},
        "insuringtheanimals": {type: String, required: true},
        "breeding": {type: String, required: true},
        "birthdate": {type: Date, required: true},
        "birthcountry": {type: String, required: true},
        "age": {type: String, required: true},
        "meatcategory": {type: String, required: true},
        "gender": {type: String, required: true},
        "weight": {type: String, required: true},
        "useremail": {type: String, required: true},
    }
)

module.exports = mongoose.model("HerdsmanAnimal", HerdsmanAnimalSchema);