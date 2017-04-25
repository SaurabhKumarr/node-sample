var user = require('./library');

var userService = function (app) {
    
    app.get('/api/getinfo', function (req, res) {
       user.find(function(err, data){
            res.json(data);
       });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });

    app.post('/api/userinfo', function (req, res) {      
      user.create({
            name: req.body.name,
            username: req.body.userName,
            password: req.body.password
        }, function (err, data) {            
             res.json(data);
            if (err)
                res.json(err);
           
        });
    });

    app.delete('/api/deleteinfo/:id', function (req, res) {

        user.remove({
            _id: req.params.id
        }, function (err, data) {
             res.json(data);
            if (err)
                res.send(err);
        });
    });
};


module.exports = userService;