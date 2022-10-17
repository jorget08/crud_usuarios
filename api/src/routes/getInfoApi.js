const axios = require("axios")
const {User} = require('../db')
const avatar = require('gravatar')


const getAndCreateUsers = async () => {
    const apiInfo = await axios.get('https://jsonplaceholder.typicode.com/users')
    apiInfo.data.forEach(element => {
        delete element.id
        element.avatar=avatar.url(element.email)
    });
    await User.bulkCreate(apiInfo.data)
}

module.exports = {getAndCreateUsers}