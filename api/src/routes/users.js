const {Router} = require('express')
const {User} = require('../db')
const router = Router()
const avatar = require('gravatar')

router.get('/', async (req, res, next) => {
    try {
        const {name} = req.query
        const users = await User.findAll({
            attributes: {exclude:['createdAt', 'updatedAt']}
        })
        if(name){
            let userName = users.filter(e => e.name.toLowerCase().includes(name.toString().toLowerCase()))
            userName ? res.status(200).json(userName) : res.send('there is no user with that name')
        }else{
            res.status(200).json(users)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        const user = await User.findOne({
            where:{id:id},
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
})

router. post('/', async (req, res, next) => {
    try {
        const {name, username, email, phone, website,
               street, suite, city, zipcode, lat, lng,
               companyName, catchPhrase, bs} = req.body
        const user = {
            name: name,
            username: username,
            email: email,
            phone: phone,
            website: website,
            address: {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
                geo: {
                    lat: lat,
                    lng: lng
                }
            },
            company: {
                name: companyName,
                catchPhrase: catchPhrase,
                bs: bs
            },
            avatar: avatar.url(email)
        }
        await User.create(user)
        res.status(201).send("User created successfully")
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', async(req, res, next) => {
    const {id} = req.params
    const {lat, lng, city, suite, street, zipcode, bs, catchPhrase, companyName} = req.body
    const user = await User.findOne({
        where:{id:id}
    })
    if(lat){
        let address = user.address
        let geo = user.address.geo
        user.update({
            address:{
                ...address,
                geo:{
                    ...geo,
                    lat:lat
                }
            }
        })
    }
    if(lng){
        let address = user.address
        let geo = user.address.geo
        user.update({
            address:{
                ...address,
                geo:{
                    ...geo,
                    lng:lng
                }
            }
        })
    }
    if(city){
        let address = user.address
        user.update({
            address:{
                ...address,
                city: city
            }
        })
    }
    if(suite){
        let address = user.address
        user.update({
            address:{
                ...address,
                suite: suite
            }
        })
    }
    if(street){
        let address = user.address
        user.update({
            address:{
                ...address,
                street: street
            }
        })
    }
    if(zipcode){
        let address = user.address
        user.update({
            address:{
                ...address,
                zipcode: zipcode
            }
        })
    }
    if(bs){
        let company = user.company
        user.update({
            company:{
                ...company,
                bs: bs
            }
        })
    }
    if(catchPhrase){
        let company = user.company
        user.update({
            company:{
                ...company,
                catchPhrase: catchPhrase
            }
        })
    }
    if(companyName){
        let company = user.company
        user.update({
            company:{
                ...company,
                name: companyName
            }
        })
    }
    await user.update(req.body)
    res.status(201).send("User updated")
})

router.delete('/:id', async(req, res, next) => {
    const {id} = req.params
    User.destroy({
        where:{id:id}
    })
    res.status(201).send("User was deleted")
})

module.exports = router