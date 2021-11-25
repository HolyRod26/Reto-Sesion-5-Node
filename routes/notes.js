const express = require("express");
const router = express.Router();

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

router.get('/', async (req, res) => {
    return res.json(posts)
});
router.post('/', async (req, res) => {
    return res.json({ message: 'Post added succesfully'})
});
router.put('/:id', async (req, res) => {
    return res.json({ message: 'Note changed succesfully'})
});
router.delete('/:id', async (req, res) => {
    return res.json({ message: 'Note deleted succesfully'})
});