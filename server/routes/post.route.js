const PostController = require('../controllers/post.contoller');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const PostModel = require('../models/post.model')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}




let upload = multer({ storage, fileFilter });

module.exports = (app) => {
    // ========>> IF HAVING TROUBLE WITH ROUTES: 
    //1. "/" at START of API call after the first  \\'// , 
    //2. verify http, https
    //3. server routes in server.js file <<========

    //@route POST -- create new post
    app.post('/api/posts/create', upload.single('photo'),PostController.createPost)

    // @route GET -- get all posts
    app.get('/api/posts/getall', PostController.findAllPosts)

    // @route GET -- get one post
    app.get('/api/posts/getone/:id', PostController.findOnePost)

    // @route PUT -- edit post
    app.put('/api/posts/edit/:id', PostController.updatePost)

    // @route DELETE -- delete post
    app.delete('/api/posts/delete/:id', PostController.deletePost)
    



    //show all the posts belonging to id
    app.get('/api/posts/user/:userId', PostController.findPostFromUser)
}






