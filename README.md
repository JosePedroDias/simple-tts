# for direct node usage

## install dependencies
    
in debian-like linuxes such as ubuntu:

    sudo apt-get install espeak lame vorbis-tools


## install in node

    npm install simple-tts


## use in node

```javascript
var speak = require('simple-tts');

speak('hello world', {filename:'/tmp/a.mp3'});

// in an HTTP handler
speak('hello world', {stream:response});

```


----


# for checking the server and js examples

## install and run (for demo and serving via HTTP)

    git clone git@github.com:JosePedroDias/simple-tts.git

    cd simple-tts

    node simple-tts-server &


## demo

    go to http://127.0.0.1:8888


## use as a remote service

```html
    <script type="text/javascript" src="http://SERVER_NAME:SERVER_PORT/js/simple-tts-client.js"></script>

    <script type="text/javascript">
        speak('Hello world!');
    </script>
```


----


# Documentation:

see [API.md](https://github.com/JosePedroDias/simple-tts/blob/master/API.md)
