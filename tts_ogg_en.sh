#!/bin/bash
echo -e "$@"|espeak --stdin -v en-us -s 130 -p 40 -a 200 --stdout|oggenc --quiet -
#|cat > y.ogg
