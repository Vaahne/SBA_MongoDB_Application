import User from '../models/Users.mjs';
// to add user to the db
async function addUser(req,res){
    let newUser = await User.create(req.body);
    res.json(newUser);
}
// to delete user from db by id
async function deleteUser(req,res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if(!deletedUser) return res.json({message: `User Not found `});
    res.json(deletedUser);
}
// to get all users from db
async function getAllUsers(req,res) {
    const allUsers = await User.find({});
    if(allUsers.length == 0) return res.json({message: `No Data found !!`})
    res.json(allUsers);
}
// to get specific user by id
async function getSpecificUsers(req,res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.json({message: `No user found with given id!!`});
    res.json(user);
}
// to update user by id
async function updateUser(req,res) {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!user) return res.json({message: `No user found with given id!!`});
    res.json(user);
}


export default {deleteUser,updateUser,getAllUsers,getSpecificUsers,addUser};