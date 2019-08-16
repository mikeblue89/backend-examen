const bodyParser = require('body-parser');
const logger = require("../utils/logger");
const wrapper = require("../utils/wrapper");

const server = {
    configure: (app)=>{
        app.all('/*', (req,res,next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Acess-Control-Allow-Headers", "X-Requested-With, Content-Type");
            next();
        });

        app.use(bodyParser.urlencoded({extended: true}));

        app.use(bodyParser.json());
    },

    checkApi: (app, port)=>{
        app.get('/api', (req, res)=>{
            const response = {"status": "Okay", "message": "Api is running on port " +port, "error": false, "data": undefined};
            return wrapper.sendResponse({method: "GET /api", response: response, httpCode: 200, res: res});
        });
    },

    listen: (app, port)=>{
        app.listen(port, ()=>{
            logger({method: "configuration", message: "Server is listen in port " + port});
        });
    }

}

module.exports = server;