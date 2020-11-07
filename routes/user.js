const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs');

const { User } = require("../models");
const { addFollowing } = require("../controller/user")
const { isLoggedIn } = require("./middlewares")

const router = express.Router();

router.post('/:id/follow', isLoggedIn, addFollowing)

module.exports = router;