var path = require('path'),
    config;
config = {
    production: {
        url: 'http://mytestblog.com', //替换为你自己的域名。
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host     : 'db',
                user     : 'root',
                password : 'mysqlroot',
                database : 'ghost',
                port: '3306',
                charset  : 'utf8'
            },
            debug: false
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }

    }
};
module.exports = config;
