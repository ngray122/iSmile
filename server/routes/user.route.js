const UserController = require('../controllers/User.controller');



module.exports = (app) => {


// ========>> IF HAVING TROUBLE WITH ROUTES: "/" start of API call, verify http, server routes in server.js <<========


    //@route GET -- TEST
    // app.get('/api/user/test', UserController.test)


    //@route POST -- create new user, registration
    app.post('/api/user/register', UserController.registerUser)


    // //@route POST -- user 
    // app.post('/api/user/login')



    // @route GET -- get all users
    app.get('/api/user/getall', UserController.findAllUsers)

    // // @route GET -- get one user
    // app.get('/api/user/getone/:id', UserController.findOneUser)

    // // @route PUT -- edit user
    // app.put('/api/user/edit/:id', UserController.updateUser)

    // // @route DELETE -- delete user
    // app.delete('/api/user/delete/:id', UserController.deleteUser)

}