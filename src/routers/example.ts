import express from 'express';
import bodytest from '../controller/example/bodytest';
import queryTest from '../controller/example/queryTest';
import parmsTest from '../controller/example/parmsTest';

const example = express.Router();

//get
example.get('/parmsTest/:bbb', parmsTest) //GET /parmsTest/<value>
example.get('/queryTest', queryTest) //GET  /queryTest?ccc=<value>

//post
example.get('/bodytest', bodytest)

export default example;