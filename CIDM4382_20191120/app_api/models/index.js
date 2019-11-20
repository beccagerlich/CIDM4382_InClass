const mongoose = require('mongoose');
/* 
db.inClass.insertOne(
{
“realname” : “Becca”, 
“clienttype” : “PILOT”, 
“planned_desairport” : “KMAi”,
“planned_depairport” : ”KPHX”, 
”altitude” : “32000”
}
)
 */

var clientSchema = new mongoose.Schema(
    { 
        realName: 'string', 
        clientType: 'string',
        planned_desairport: 'string', 
        planned_depairport: 'string',
        altitude: 'number', 
    }
);
var Tank = mongoose.model('Tank', schema);