var cloudant= require('../cloudant/cloudant_connection').cloudant;
var db = cloudant.db.use('wedding');

var functions = (function() {
  var list = function() {
    return new Promise(function(fulfill, reject) {
      db.list({include_docs: true}, function(err, data) {
        if (data) {
          var result = [];
          data.rows.forEach(function(user) {
            delete user.doc._rev;
            user.doc.url="https://clarissayjuancarlos25.com/?id="+user.doc._id;
            result.push(user.doc);
          });
          fulfill(result);
        } else {
          reject(404);
        }
      });
    });
  }
  var confirm = function(new_object) {
    return new Promise(function(fulfill, reject) {
      if(new_object != undefined){
        db.get(new_object, function(err, data){
          if(data){
            data.confirmed=true;
            db.insert(data, function(err, object){
              if(object){
                delete data._rev;
                fulfill(data);
              }else{
                reject(500);
              }
            });
          }else{
            reject(204);
          }
        })
      }else{
        reject(400);
      }
    });
  }
  var listone = function(username) {
    return new Promise(function(fulfill, reject) {
      if(username){
        db.get(username, function(err, data){
          if(data){
            delete data._rev;
            fulfill(data);
          }else{
            reject(204);
          }
        })
      }else{
        reject(400);
      }
    });
  }

  return {
    'list': list,
    'confirm': confirm,
    'listone': listone
  };

})();
module.exports = functions;
