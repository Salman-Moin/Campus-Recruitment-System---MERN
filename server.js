const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const crsRoutes = express.Router();
const PORT = 4000;

let crs = require('./crs.model');

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://127.0.0.1:27017/crs', { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established successfully');
})

crsRoutes.route('/').get(function(req, res){
    crs.find(function(err, crs){
        if (err){
            console.log('getting error man...' + err);
        } else {
            res.json(crs);
        }
    });
});

crsRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    crs.findById(id, function(err, crs){
        res.json(crs);
    });
});

crsRoutes.route('/add').post(function(req, res){
    crs = new crs(req.body);
    crs.save()
        .then(crs => {
            res.status(200).json({ 'crs': 'record added successfully'}); 
        })
        .catch(err => {
            res.status(400).send('adding new record failed!!');
        });
});

crsRoutes.route('/update/:id').post(function(req, res){
    crs.findById(req.params.id, function(err, crs){
        if(!crs)
            res.status(404).send('data is not found');
        else 
            crs.crs_co_name = req.body.crs.crs_co_name;
            crs.crs_co_email = req.body.crs.crs_co_email;
            crs.crs_co_address = req.body.crs.crs_co_address;
            crs.crs_co_phone = req.body.crs.crs_co_phone;
            crs.crs_co_website = req.body.crs.crs_co_website;
            crs.crs_co_pass = req.body.crs.crs_co_pass;
            crs.crs_co_blocked = req.body.crs.crs_co_blocked;
            crs.crs_st_name = req.body.crs.crs_st_name;
            crs.crs_st_education = req.body.crs.crs_st_education;
            crs.crs_st_percent = req.body.crs.crs_st_percent;
            crs.crs_st_email = req.body.crs.crs_st_email;
            crs.crs_st_pass = req.body.crs.crs_st_pass;
            crs.crs_st_phone = req.body.crs.crs_st_phone;
            crs.crs_st_blocked = req.body.crs.crs_st_blocked;

            crs.save().then(crs => {
                res.json('Record updated!!');
            })
            .catch(err => {
                res.status(400).send('Update is not possible');
            });
    });
});

app.use('/crs', crsRoutes);

app.listen(PORT, function(){
    console.log('Server is running on Port: ' + PORT);
})
