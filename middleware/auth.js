const auth = require('basic-auth');

module.exports = (req, res, next) => {
    const credentials = auth(req);

    if (!credentials || credentials.name !== 'admin' || credentials.pass !== '123') {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Access denied');
    }

    next();
};
