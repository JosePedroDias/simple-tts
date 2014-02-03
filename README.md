# install dependencies
    
in debian-like linuxes such as ubuntu:

    sudo apt-get install espeak lame vorbis-tools


# install in node

    npm install simple-tts


# use in nodejs

```javascript
var speak = require('simple-tts');

speak('hello world', {filename:'/tmp/a.mp3'});

// in an HTTP handler
speak('hello world', {stream:response});

```

# install and run (for demo and for serving via HTTP)

    git clone git@github.com:JosePedroDias/simple-tts.git

    cd simple-tts

    node speakServer 8888 &


# demo

    go to http://127.0.0.1:8888


# use as a remote service

```html
    <script type="text/javascript" src="http://SERVER_NAME:SERVER_PORT/js/speakClient.js"></script>

    <script type="text/javascript">
        speak({text:'Hello world!', autoplay:true, server:'SERVER_NAME:SERVER_PORT'});
    </script>
```


## speakClient API:

see [API.md](https://github.com/JosePedroDias/simple-tts/blob/master/API.md)
