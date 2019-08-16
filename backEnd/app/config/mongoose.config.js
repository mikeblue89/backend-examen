const mongoose = require('mongoose');
const dbConfig = require('../config/database.config');
const logger = require('../utils/logger');

const mongooseConfig = {
    configure: ()=>{
        mongoose.Promise = global.Promise;
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);

        mongoose.connect(dbConfig.url,{
            useNewUrlParser = true
        }).then(()=>{
            logger({method: 'configuration', message: 'Connection was stablised with data base on' + dbConfig.url});
        }).catch(err =>{
            logger({method: 'configuration', message: 'Unable to connect with data base '+dbConfig.url+'. ERROR: '+ err.toString()});
            process.exit();
        });
    }
}

module.exports = mongooseConfig;