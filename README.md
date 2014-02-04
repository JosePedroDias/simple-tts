# intro

## what's this for?

Wrote this module to expose a simple API for speech generation from a given text. The adopted approach is to make use of the [espeak TTS engine](http://espeak.sourceforge.net/). Espeak is small, free and the results are crude, but supports many languages (run `espeak --voices` to chec k the ones available in your machine) and is enough for some scenarios. Later on I may offer alternative engines support (you want to help out?).


## why not use X instead?

You can use browser APIs for Chrome, Safari and such, if available. You can also use third-party web services for TTS. The point here is that you keep the dependency on your side, at the server level. Currently espeak can be run in browsers but that's heavy on CPU and memory - using this approach you request the text's speech and get back an encoded mp3/ogg of the generated audio sample.


## helping out

I'm by no means an expert in TTS usage. Feel free to contribute with optimizations, sample usages of alternate engines and/or pull requests of changes to make this work in additional OSs. I've marked this linux-only because I didn't have the chance to try it out in different environments and because I figured out loads of servers run a debian-like flavour of linux anyway.


----


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
