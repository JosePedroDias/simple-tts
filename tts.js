/*jshint node:true, eqeqeq:true, undef:true, curly:true, laxbreak:true, forin:true, smarttabs:true */
/*global */



(function() {
    
    'use strict';
    
    

    var spawn = require('child_process').spawn,
        fs    = require('fs');



    var speak = function(text, o) {
        if (!('lang'   in o)) { o.lang   = 'en'; }
        if (!('format' in o)) { o.format = 'mp3'; }
        
        var f;
        
        if ('filename' in o) {
            f = fs.createWriteStream(o.filename + '.' + o.format, {encoding:'binary'});
        }
        else if ('stream' in o) {
            f = o.stream;
        }
        else {
            throw 'either stream or filename must be passed in!';
        }
        
        var program = ['tts_', o.format, '_', o.lang, '.sh'].join('');
        var args = [program, '"' + text + '"'];
        var child = spawn('bash', args, {cwd:__dirname});
        
        child.stdout.on('data', function(data) {
            f.write(data, 'binary');
        });
        
        child.stderr.on('data', function(data) {
            if (o.cb) {
                return o.cb(data);
            }
            else {
                throw data;
            }
        });
        
        child.on('exit', function(code) {
            f.end();
            if ('cb' in o) {
                if (code !== 0) {
                    return o.cb('Process returned error code=' + code);
                }
                o.cb(null);
            }
        });
        
    };

    module.exports = speak;

})();
