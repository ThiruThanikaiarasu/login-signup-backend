const userModel = require('../models/signUpModel')

const addNewUser = async (request,response)=>{
    const user = new userModel({
        firstName : request.body.firstName,
        lastName : request.body.lastName,
        email : request.body.email,
        password : request.body.email
    })

    try{
        const newUser = await user.save()
        response.send(201).json(newUser)
    }
    catch(error)
    {
        response.status(500).json(message.error)
    }
}


module.exports = {addNewUser}