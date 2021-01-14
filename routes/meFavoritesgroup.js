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
    let sql = `select travelbuddies.*,
    member.member_name as tr_membername,
    travelbuddies.themeName as tr_name,
    travelbuddies.dateBegin as tr_datebegin,
    travelbuddies.dateEnd as tr_dataend,
    travelbuddies.genderNeeded_id as tr_needid,
    citycategory.city as tr_city,
    regioncategory.region as tr_region
    from ticket
    natural join regioncategory
    natural join citycategory
    natural join travelbuddies
    natural join member
    `

    conn.query(sql,[], function (err, rows) {
    if(err){
        console.log(err);
    }
        res.send(JSON.stringify(rows));
        });
    
});

module.exports  =  router;