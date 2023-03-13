const mongoose = require('mongoose')

const SlaughterAnimalSchema = new mongoose.Schema(
    {
        "preslaughterhandling":{type: String, require:true},
        "stunning": {type: String, required: true},
        "slaughtering": {type: String, required: true},
        "plantcode": {type: String, required: true},
        "plantcountry": {type: String, required: true},
        "age": {type: String, required: true},
        "weight": {type: String, required: true},
        "halal": {type: Boolean, required: true},
        "wastage": {type: String, required: true},
        "storagetemperature": {type: String, required: true},
        "meattype": {type: String, required: true},
        "expirydate": {type: Date, required: true},
        "packagedate": {type: Date, required: true},
        "packingmode": {type: String, required: true},
        "certified": {type: String, required: true},
        "companydetails": {type: String, required: true},
        "address": {type: String, required: true},
    }
)

module.exports = mongoose.model("SlaughterAnimal", SlaughterAnimalSchema);