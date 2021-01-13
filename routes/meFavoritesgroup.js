//收藏揪團

var express  =  require(`express`);
var router  =  express.Router();
var mysql  =  require('mysql');
var conn  =  mysql.createConnection({
    host: process.env["dbhost"],
  user: process.env["dbuser"],
  password: process.env["dbpassword"],
  database: process.env["database"],
});

conn.connect(function(err){
    if(err){
        console.log(err);
    }
})

router.get(`/`, function (req, res, next) {
    let sql = `select member.*,
    travelbuddies.themeName as tr_name,
    travelbuddies.dateBegin as tr_datebegin,
    travelbuddies.dateEnd as tr_dataend,
    travelbuddies.genderNeeded_id as tr_needid
    from citycategory
    join travelbuddies on travelbuddies.id = travelbuddies.id
    join member on travelbuddies.id = member.newsid`
conn.query(sql,[], function (err, rows) {
    if(err){
        console.log(err);
    }
        res.send(JSON.stringify(rows));
        });
    
});

module.exports  =  router;