const express = require('express');


const SessionController = require('./Controllers/SessionController');
const ProfileController = require('./Controllers/ProfileController');
const IncidentController = require('./controllers/incidentController');
const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.delete('/deleteAll', async (req, res) => {

    await connection('ongs').del();
    await connection('incidents').del();
    return res.status(201).json({
      Deleted: "All"
    })
});

routes.post('/sessions', SessionController.create );

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index );
    module.exports = routes;

