
var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404" ];
//Function call for stream api 
function apiCall(option,user,index){
	$.ajax({
	url:'https://api.twitch.tv/kraken/'+option+'/'+user,																																																																																																	
	dataType:'JSONP	',
	type:'GET',
	success:function(data){
		addElement(data,user,index);
		console.log(data);
	},
	error:function(error){
		console.log("error",error);
	}	
   });
}

//api call for channel 
function apiCallChannel(user,cloneObj){
	$.ajax({
	url:'https://api.twitch.tv/kraken/channels/'+user,																																																																																																		
	dataType:'JSONP	',
	type:'GET',
	success:function(data){
		cloneObj.find(".image img").attr("src",data.logo);
	},
	error:function(error){
		console.log("error",error);
	}	
   });
}

//Add element into the list 
function addElement(data,user,index){
  var status;
  var imgLink;
  var flag=0;
  var anotherFlag=0;
  if(data.stream===null){
  	status="offline";
  }
  else if(data.error=="Unprocessable Entity"){
  	status="Account Closed";
  	anotherFlag=1;
  }
  else if(data.error=="Not Found"){
  	status="does not exist";
  	anotherFlag=1;																																																																																																																																																																																																																											
  }
  else
  {
  	flag=1;
  	status=data.stream.game+": "+data.stream.channel.status;
  }
  if(flag==1){
      var clone=$("#item").clone().prependTo("#all-item");
      clone.addClass("online");
      clone.find(".image img").attr("src",data.stream.channel.logo);
  }
  else
  var clone=$("#item").clone().appendTo("#all-item");

	//Logo for offline users
	if (status=="offline") {
		apiCallChannel(user,clone);
	}
  clone.find(".user-name a").attr("href","https://www.twitch.tv/"+user);
  clone.find(".user-name a").text(user);
  clone.find(".user-status p").text(status);
  clone.removeAttr("id");
  
}
$(document).ready(function(){
	for (var i = 0; i < users.length; i++) {
			apiCall("streams",users[i]);	
	}
});