#!/bin/bash
echo -e "$@"|espeak --stdin -v en-us -s 130 -p 40 -a 200 --stdout|lame --quiet -
#|cat > y.mp3
