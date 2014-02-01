#!/bin/bash
echo -e "$@"|espeak --stdin -v pt-pt -s 130 -p 40 -a 200 --stdout|oggenc --quiet -
#|cat > x.ogg
