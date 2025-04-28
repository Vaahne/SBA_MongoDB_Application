import User from '../models/Users.mjs';

async function addUser(req,res){
    let newUser = await User.create(req.body);
    res.json(newUser);
}
async function deleteUser(req,res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser){
        res.json({message: `User Not found `});
    }
    res.json(deletedUser);
}
async function getAllUsers(req,res) {
    const allUsers = await User.find({});
    if(allUsers.length == 0) res.json({message: `No Data found !!`})
    res.json(allUsers);
}
async function getSpecificUsers(req,res) {
    const user = await User.findById(req.params.id);
    if(!user) res.json({message: `No user found with given id!!`});
    res.json(user);
}

async function updateUser(req,res) {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!user) res.json({message: `No user found with given id!!`});
    res.json(user);
}


export default {deleteUser,updateUser,getAllUsers,getSpecificUsers,addUser,seed};