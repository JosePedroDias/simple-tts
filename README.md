# install and run

    sudo apt-get install espeak lame vorbis-tools

    git clone git@github.com:JosePedroDias/simple-tts.git

    cd simple-tts

    node speakServer 8888 &


# demo

    go to http://127.0.0.1:8888


# use the service

```html
    <script type="text/javascript" src="http://SERVER_NAME:SERVER_PORT/js/speakClient.js"></script>

    <script type="text/javascript">
        speak({text:'Hello world!', autoplay:true, server:'SERVER_NAME:SERVER_PORT'});
    </script>
```


## speakClient API:

see [API.md](https://github.com/JosePedroDias/simple-tts/blob/master/API.md)
