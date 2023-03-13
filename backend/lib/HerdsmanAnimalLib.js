const HerdsmanAnimalModel = require('../models/HerdsmanAnimalModel');

module.exports.getAllAnimals = async function(){
    return await HerdsmanAnimalModel.find({});
}

module.exports.getAllAnimalsOfUser = async function(email){
    const animal = await HerdsmanAnimalModel.find({useremail:email});
    if (!animal) {
        throw new Error('No Animals Shown');
    }

    return animal;
}

module.exports.addAnimal = async function(Animal){
    if (!Animal) {
        throw new Error('Animal object cannot be null');
    }

    const existingAnimal = await HerdsmanAnimalModel.findOne({animalcode: Animal.animalcode});
    if (existingAnimal) {
        throw new Error('Animal already exists');
    }

    const animal = new HerdsmanAnimalModel(Animal);
    await animal.save();
}
