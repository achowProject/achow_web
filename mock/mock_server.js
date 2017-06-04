var http = require("http"); 
var url = require("url");  

http.createServer(function(request, response) {  
	 var pathname = url.parse(request.url).pathname;
    console.log('request received' + pathname);  
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    
    
    switch(pathname) {  
            case '/':   
                response.write('server start.');  
                break;
                
                
            //example
            case '/credit':   
                  response.write(JSON.stringify(
                  	
                  	 {
	                    "code": "200",  
	                    "msg": "success"
               		 }
                  	
                  	));
                break;
                
           
            
            //credit_table
            case '/newsList':   
                  response.write(JSON.stringify(
                  	
                  	 {	
                  	 		"code": "200",  
	                    	"msg": "success", 
	                    	"type": "read",
						    "dataList":[
						        {
							        "time":"2017-02-01",
							        "news":"托福阅读10种题型详解、经验、方法论1"
						        },
						        {
							        "time":"2017-02-01",
							        "news":"托福阅读10种题型详解、经验、方法论2"
						        },
						        {
							        "time":"2017-02-01",
							        "news":"托福阅读10种题型详解、经验、方法论3"
						        },
						        {
							        "time":"2017-02-01",
							        "news":"托福阅读10种题型详解、经验、方法论4"
						        },
						        {
							        "time":"2017-02-01",
							        "news":"托福阅读10种题型详解、经验、方法论5"
						        },
						        {
							        "time":"2017-02-01",
							        "news":"托福阅读10种题型详解、经验、方法论6"
						        }
						    ]
						}
                  	
                  	));
                break;
          
                
           
             
            default:  
                response.write('error path!');  
                break;  
       }  

    response.end();  
}).listen(8888);  
console.log('server started');