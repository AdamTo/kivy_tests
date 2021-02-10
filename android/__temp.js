http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/chatsjs

dropdata = test + 20210209;


curl 'http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/chatsjs' 
-H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0' 
-H 'Accept: */*' 
-H 'Accept-Language: en-US,en;q=0.5' 
--compressed 
-H 'Referer: http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/yesscript' 
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' 
-H 'X-Requested-With: XMLHttpRequest' 
-H 'Origin: http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion' 
-H 'Connection: keep-alive' 
-H 'Cookie: session=eyJfaWQiOiJ5b2VZamYiLCJjb2xvciI6eyIgdCI6WzExNiwxMDEsMThdfX0.YCKFbw.u09iVW7rK2xE7EcJwIatNC-46yc' 
--data-raw 'dropdata=test+20210209'

await fetch("http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/chatsjs", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
    },
    "referrer": "http://slw2du6qpgu6m7qaee6hfw6f37bvedrjh4oobdydk3urxmqgvrnmj7yd.onion/7t4C2tlEyAxFBo46wXSooICMYPijFNQM/yesscript",
    "body": "dropdata=test+20210209",
    "method": "POST",
    "mode": "cors"
});