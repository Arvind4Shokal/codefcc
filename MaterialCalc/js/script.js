var res="";
var equalRes;
var ans=0;
function changeResult(buttId){
	var buttVal=buttId.slice(4);
	/* console.log(buttVal); */
	if(buttVal=="ca"||buttVal=="co"||buttVal=="equal")
		{
			if(buttVal=="ca"){
				res="";
				$("#input_val2").text(res);
				$("#input_val1").text("Ans= "+ans);
			}
			else if(buttVal==="co")
			{
				res=res.slice(0,-1);
				$("#input_val2").text(res);
				$("#input_val1").text("Ans= "+ans);
			}
			else if(buttVal==="equal"){
                if(res.charAt(res.length-1)!="=")
                {
					try{equalRes=eval(res);
						 }
					catch(e){console.log(e.message);
									equalRes="Syntax Error"}
					console.log(equalRes);
					$("#input_val1").text(res+"=");
					$("#input_val2").text(equalRes);
					ans=equalRes;
					res="";
					$("#input_val2").text(ans);
				}
			}
		}
	else{
		res=res.concat(buttVal);
		$("#input_val2").text(res);
		$("#input_val1").text("Ans= "+ans);
	}
	
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