const SlaughterAnimalModel = require('../models/SlaughterAnimalModel');

module.exports.getAllAnimals = async function(){
    return await SlaughterAnimalModel.find({});
}

module.exports.getAllAnimalsOfUser = async function(email){
    const animal = await SlaughterAnimalModel.find({useremail:email});
    if (!animal) {
        throw new Error('No Animals Shown');
    }

    return animal;
}

module.exports.addAnimal = async function(Animal){
    if (!Animal) {
        throw new Error('Animal object cannot be null');
    }

    const existingAnimal = await SlaughterAnimalModel.findOne({animalcode: Animal.animalcode});
    if (existingAnimal) {
        throw new Error('Animal already exists');
    }

    const animal = new SlaughterAnimalModel(Animal);
    await animal.save();        
}
