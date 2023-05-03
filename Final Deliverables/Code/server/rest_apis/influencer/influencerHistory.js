const sanitize = require('mongo-sanitize')
const orderModel = require('../../../server/database/Schema/Order')

async function getInfluencerHistory(req,res){
    orderModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
        console.log(result)
    })
}

module.exports = {getInfluencerHistory}