console.warn ("SW starts");


let cacheDataArray = "CDArray";

this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cacheDataArray).then(
            (cache)=>{
                cache.addAll(
                    ["/static/js/bundle.js",
                    "/static/js/0.chunk.js",
                    "/static/js/main.chunk.js",
                    "/logo192.png",
                    "index.html",
                    "/Stops.js",
                    "/Bus.js",
                    "/"]
                )
            }
        )
    );

});

this.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result;
            }
        })
)})

