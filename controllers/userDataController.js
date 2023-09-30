const userModel = require('../models/signUpModel')
const jwt = require('jsonwebtoken')
const JWT_TOKEN = 'cfghnbvcxsdrtyujnbvcxfghi'

const userData = async (request,response)=>{
    const {token} = request.body
    try{
        const loggedInUser = jwt.verify(token,JWT_TOKEN)
        const loggedInUserEmail = loggedInUser.email 
        userModel.findOne({email : loggedInUserEmail})
        .then((data)=>{
            response.status(200).json({data : data})
        })
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {userData}