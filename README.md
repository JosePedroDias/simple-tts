# install and run

    sudo apt-get install espeak lame vorbis-tools

    git clone git@github.com:JosePedroDias/simple-tts.git

    cd simple-tts

    node speakServer 8888 &


# demo

    go to http://127.0.0.1:8888


# use the service

    <script type="text/javascript" src="http://SERVER_NAME/js/speakClient.js"></script>

	<script type="text/javascript">
		speak({text:'Hello world!', autoplay:true, server:'SERVER_NAME'});
	</script>
