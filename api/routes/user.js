'use strict'

const express = require('express');
const UserController = require('../controllers/user');

const api =express.Router();
const md_auth = require('../middleware/authenticated');
// const multipart = require('connect-multiparty');
// const md_upload = ({uploadDir:'../uploads/users'});

// api.use(multipart({ uploadDir: path }));

api.get('/testing-controllers', md_auth.ensureAuth, UserController.testing);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
// api.post('/upload-image-user/:id',[md_auth.ensureAuth, md_upload], UserController.uploadImage);

module.exports = api;

