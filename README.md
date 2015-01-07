**Scroll Doctor Plugin
If you have some trouble's with touch/track pad or mousewell direction detect, Scroll Doctor help you!

***Use

```
var scroll = new ScrollDoctor();

$(document).on('mousewheel', function(event){
    scroll
        .doctor(event.deltaY)
        .watcher(options);
});

```

***Options

==topUp== - callback called on delta >0 and incresess
==topDown== - callback called on delta >0 and dicresess
==bottomUp== - callback called on delta <0 and incresess
==bottomDown== - callback called on delta <0 and dicresess
==scroll== - callback called on any scroll detected