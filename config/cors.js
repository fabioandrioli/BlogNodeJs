module.exports = {
    cors(req,res,next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', ' Origin, X-Requested-With, content-type, Accept');
        next();
    }
}