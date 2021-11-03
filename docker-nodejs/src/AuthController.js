const authService = require('./AuthService');

exports.register = (req, res) => {
    authService.Register(req.body, (err, result) => {
        if (err) res.send(err);
        res.send(result)
    })
}

exports.activate = (req, res) => {
    authService.Activate(req.body, (err, result) => {
        if(err) res.send(err);
        res.send(result)
    })
}

exports.login = (req, res) => {
    authService.Login(req.body, (err, result) => {
        if (err) res.send(err);
        res.send(result)
    })
}