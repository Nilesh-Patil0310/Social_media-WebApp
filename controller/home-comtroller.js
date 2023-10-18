module.exports.home = function(req, res){
    return res.end('<h1>Express is running for Codial</h1>')
}

module.exports.display = function(req, res) {
    return res.end('<h1>Second view from home controller</h1>')
}