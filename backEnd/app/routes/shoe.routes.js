module.exports = (app)=>{
    const shoe =  require('../models/shoe.model');
    
    app.get('/api/shoe/metadata', shoe.metadata);

    app.post('/api/shoe', shoe.create);
}