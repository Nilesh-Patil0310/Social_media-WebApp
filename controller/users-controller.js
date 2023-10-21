module.exports.profile = function(req, res) {
    return res.render('user-profile', {
        title: 'user Profile'
    })
}

// user sing up action
module.exports.singUp = function(req, res) {
    return res.render('user_sing_up', {
        title: 'Codial | Sing Up'
    })
}

// user sing in action
module.exports.singIn = function(req, res) {
    return res.render('user_sing_in', {
        title: 'Codial | Sing In'
    })
}


