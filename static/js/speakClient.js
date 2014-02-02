(function(window) {
    
    'use strict';

    /*jshint browser:true, eqeqeq:true, undef:true, curly:true, laxbreak:true, forin:false, smarttabs:true */
    /*global SAPO:false, s$:false */
    
    

    var objectToQueryString = function(o) {
        var parts = [];
        for (var k in o) {
            if (!o.hasOwnProperty(k)) { continue;   }
            parts.push( [k, '=', encodeURIComponent(o[k])].join('') );
        }
        return parts.join('&');
    };

    var geckoRgx = /firefox/gi;
    var useOgg = geckoRgx.test(navigator.userAgent);

    /**
     * @author jose.p.dias AT co.sapo.pt
     * 
     * @function {Object} ?
     * @param {Object} o
     * @... {           String}     text
     * @... {optional   Number}     amplitude   espeak parameter. default is 100
     * @... {optional   Number}     pitch       espeak parameter. default is 50
     * @... {optional   Number}     speed       espeak parameter. default is 175
     * @... {optional   Number}     wordgap     espeak parameter. default is 0
     * @... {optional   Boolean}    autoplay    if trueish, sample is played as soon as it's available. default is false
     * @... {optional   Function}   onReady     called when playback can start
     * @... {optional   Function}   onDone      called when playback ended
     * 
     * The returned object has the following interface:
     * {Object}     options (the hash of primitive parameters passed in)
     * {Function}   play
     */
    window.speak = function(o) {
        var audioEl = document.createElement('audio');

        if ('onReady' in o) {
            audioEl.addEventListener('canplay', o.onReady);
            delete o.onReady;
        }

        if ('onDone' in o) {
            audioEl.addEventListener('ended', o.onDone);
            delete o.onDone;
        }

        var api = {
            options: o,
            play: function() {
                audioEl.play();
            },
            pause: function() {
                audioEl.pause();
            }
        };

        var server = '';
        if ('server' in o) {
            server = o.server;
            delete o.server;
        }

        var autoplay = false;
        if ('autoplay' in o) {
            autoplay = !!o.autoplay;
            delete o.autoplay;
        }

        var sourceEl = document.createElement('source');
        sourceEl.setAttribute('src', server + '/speak?' + objectToQueryString(o));
        sourceEl.setAttribute('type', useOgg ? 'audio/ogg' : 'audio/mpeg');
        audioEl.appendChild(sourceEl);

        if (autoplay) {
            audioEl.play();
        }

        return api;
    };
    
})(window, undefined);
