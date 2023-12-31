// import user.js here
const User = require('../models/user');

module.exports.profile = function(req, res) {
    return res.render('user-profile', {
        title: 'user Profile'
    })
}

// user sing up page render
module.exports.singUp = function(req, res) {
    return res.render('user_sing_up', {
        title: 'Codial | Sing Up'
    })
}

// user sing in form render
module.exports.singIn = function(req, res) {
    return res.render('user_sing_in', {
        title: 'Codial | Sing In'
    })
}

// sing-up action 
module.exports.create = function(req, res) {
    if (req.body.password != req.body.comfirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if (err){console.log('error in finding user in singup'); return;}

        if (!user){
            User.create(req.body, function(err, user){
                if (err){console.log('error in creating user signing up'); return;}

                return res.redirect('/users/sing-in')
            })
        }

        else{
            return res.redirect('back')
        }
    })
}

