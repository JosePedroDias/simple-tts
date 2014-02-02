# API Documentation

`Object`
**speak**(o) *function*

> `Object` **o**

> `String` **o.text** - text to speak

> `Number` [**o.amplitude**]=`200` - espeak parameter. amplitude ~ volume.

> `Number` [**o.pitch**]=`50` - espeak parameter. voice pitch.

> `Number` [**o.speed**]=`130` - espeak parameter. narration speed.

> `Number` [**o.wordgap**]=`3` - espeak parameter. time between words.

> `Boolean` [**o.autoplay**]=`false` - if trueish, sample is played as soon as it's available

> `Function` [**o.onReady**] - called when playback can start

> `Function` [**o.onDone**] - called when playback ended

> **returns** `Object` - The returned object has the following interface:  
>> `Object` **options** (the hash of primitive parameters passed in)  
>> `Function` **play**  
>> `Function` **pause**
