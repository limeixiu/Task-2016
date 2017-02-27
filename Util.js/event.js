 var eventUtil ={
 	//增加句柄
 	addHandler:function(ele,type,handler){
 		if(ele.addEventListener){
 			ele.addEventListener(type,handler,false);
 		}else if(ele.attachEvent){
 			ele.attachEvent("on"+type.handler,false)
 		}else{
 			ele["on"+type] = handler;
 		}
 		},
    //删除句柄
 	removeHandler:function(ele,type,handler){
 		if(ele.removeEventListener){
 			ele.removeEventListener(type,handler,false);
 		}else if(ele.detachEvent){
 			ele.detachEvent("on"+type.handler,false);
 		}else{
 			ele["on"+type]=null;
 		}
 	},
 	getEvent:function(event){
 		return event?event:window.event;
 	    },
 	getTarget:function(event){
 		return event.target||event.srcElement;
 	    },
 	//阻止冒泡
 	stopPropagation:function(event){
 		if(event.stopPropagation){
 			event.stopPropagation();
 		}else{
 			event.cancelBubble = true;
 		}
 	},
 	//阻止默认行为
    preventDefault:function(event){
    	if(event.preventDefault)
    	{
    		event.preventDefault();
    	}else{
    	    event.returnValue = false;
    	}
    }
 }
