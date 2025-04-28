import User from '../models/Users.mjs';
import data from '../utilities/data.mjs';

async function addUser(req,res){
    let newUser = await User.create(req.body);
    res.json(newUser);
}
async function deleteUser(req,res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
}
async function getAllUsers(req,res) {
    const allUsers = await User.find({});
    res.json(allUsers);
}
async function getSpecificUsers(req,res) {
    const user = await User.findById(req.params.id);
    res.json(user);
}

async function updateUser(req,res) {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(user);
}

async function seed(req,res){
    const userData = data.users;
    await User.insertMany(userData);
    res.json({message: 'Successfully seeded'});
}


export default {deleteUser,updateUser,getAllUsers,getSpecificUsers,addUser,seed};