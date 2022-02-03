const UserController = require('../controllers/User.controller');



module.exports = (app) => {
// ========>> IF HAVING TROUBLE WITH ROUTES: "/" start of API call, verify http, server routes in server.js <<========

    //@route POST -- create new user, registration
    app.post('/api/user/register', UserController.registerUser)
    //@route POST -- user 
    app.post('/api/user/login', UserController.login)
    // @route GET -- get all users
    app.get('/api/user/getall', UserController.findAllUsers)
    // @route GET -- get one user
    app.get('/api/user/getone', UserController.getOneLoggedInUser)

    // @route GET- logout user
    app.get('/api/user/logout', UserController.logout)


}





    // // @route PUT -- edit user
    // app.put('/api/user/edit/:id', UserController.updateUser)

    // // @route DELETE -- delete user
    // app.delete('/api/user/delete/:id', UserController.deleteUser)