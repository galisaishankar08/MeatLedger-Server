const userModel = require('../models/UserModel');

module.exports.getAllUsers = async function(){
    return await userModel.find({});
}

module.exports.getUserProfile = async function(email){
    return await userModel.find({email});
}

module.exports.createUser = async function(User){
    if (!User) {
        throw new Error('User object cannot be null');
    }

    const existingUser = await userModel.findOne({email: User.email});
    if (existingUser) {
        throw new Error('User already exists');
    }


    const user = new userModel(User);
    await user.save();
}

module.exports.UpdateUser = async function(User){

    const { email, username, address, contact } = User;
    const filter = { email };
    const update = { };
    
    if(username) update.name = username;
    if(address) update.address = address;
    if(contact) update.contact = contact;
    

    await userModel.updateOne(filter, { $set: update });

    const user = await userModel.findOne(filter);
    return user;
}