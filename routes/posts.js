const express = require("express");
const User = require("../models/UserModel");
const { sequelize } = require("../models/UserModel");
const router = express.Router();

/*
const posts = [
  {
    id: 1,
    heading: "Important news",
    content: "Tell mom and dad something",
    category: 'Personal',
    author: {
        name: 'Mega Author',
        lastName: 'Hernandez',
        imgProfile: '',
        bio: 'Some good stuff about this man'
    }
  },
];
*/

router.get('/', async (req, res) => {
    const posts = await sequelize.models.User.findAll();
    return res.json(posts)
});
router.post('/', async (req, res) => {
    const { body } = req;
    const Post = await Content.build({
        heading: body.heading,
        content: body.content,
        author: body.author,
    })
    Post.save();
    return res.json({ message: 'Post added succesfully', data: Post});
});
router.put('/:id', async (req, res) => {
    const {body, params: {id}} = req;
    const Post = await sequelize.models.Content.findOne({id})
    if (!Post){
        response.status(404).json({message: 'Post not found'})
    }
    const UpdatePost = await Post.update({
        heading: body.heading,
        content: body.content,
        author: body.author,
    })
    return res.json({ message: 'Note changed succesfully', data: UpdatePost})
});
router.delete('/:id', async (req, res) => {
    const {params: {id}} = req;
    const Post = await sequelize.models.Content.findOne({id});
    if (!Post){
        response.status(404).json({message: 'Post not found'})
    }
    await Post.destroy();
    return res.json({ message: 'Note deleted succesfully'})
});