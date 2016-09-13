var res="";
var equalRes;
function changeResult(buttId){
	var buttVal=buttId.slice(4);
	/* console.log(buttVal); */
	if(buttVal=="ca"||buttVal=="co"||buttVal=="equal")
		{
			if(buttVal=="ca"){
				res="";
			}
			else if(buttVal==="co")
			{
				res=res.slice(0,-1);
			}
			else if(buttVal==="equal"){
				try{equalRes=eval(res);
					 }
				catch(e){console.log(e.message);
								equalRes="Syntax Error"}
				console.log(equalRes);
				$("#input_val").text(res+"=");
				$("#input_val2").text(equalRes);
				res=equalRes;
			}
		}
	else
		res=res.concat(buttVal);
	$("#input_val2").text(res);
	console.log(res);
}
$(document).ready(function(){
	$(".button-field").click(function(event){
		var clickedId=event.target.id;
		changeResult(clickedId);
		/* console.log(clickedId); */
	});
	console.log("js");
});