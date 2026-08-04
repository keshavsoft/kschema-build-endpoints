import express from 'express';

import funcFromshowAll from './showAll/controller.js';

const tableName = "doctors.json";
const tablePath = "Data/doctors.json";
const configPath = "Config/Schemas/doctors.json";

const router = express.Router();

router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));

export { router };