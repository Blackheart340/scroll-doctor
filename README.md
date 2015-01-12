#Scroll Doctor Plugin
If you have some trouble's with touch/track pad or mousewell direction detect, Scroll Doctor help you!

##Use

```js
var scroll = new ScrollDoctor();

$(document).on('mousewheel', function(event){
    scroll
        .analize(event.deltaY)
        .watcher(options);
});

```

##Vizyalize

```js

    var scroll = new ScrollDoctor();
    var visylizer = function(delta){
        scroll.visylize(
            event.deltaY,
            {
                target: $('#scroll_visylize'),
                length: 50  //default unlim
            }
        )
    };
    
    $(document).on('mousewheel', function(event){
        scroll
            .analize(event.deltaY)
            .watcher({
                scroll: function(){
                    visylizer(event.deltaY)
                }
            });
    });
    
```

##Options

+ **topUp** - callback called on delta >0 and incresess
+ **topDown** - callback called on delta >0 and dicresess
+ **bottomUp** - callback called on delta <0 and incresess
+ **bottomDown** - callback called on delta <0 and dicresess
+ **scroll** - callback called on any scroll detected