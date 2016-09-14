function wikiSearch(squery){
  console.log("serchButton"+squery);
	$.ajax({
     url:'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&list=search&srsearch='+squery+'&rvprop=content',
     type : 'GET',
     dataType : 'jsonp',
     success:function(json){
      console.log(json);
      var titleVal;
      var desc;
  
      
      for (var i = 0; i < 10; i++) {
        console.log(json.query.search[i].title);
        titleVal=json.query.search[i].title;
        desc=json.query.search[i].snippet;
        $(".search-list").append('<li id="list'+i+'"><a href="page.html#'+titleVal+'" target="_blank">'+titleVal+'</a></li>');
       // var currentItem = $("#list"+i);

      }
     },
     error:function(errorText,errorThrown){
      console.log(errorText);      
     }
	});

}
/*function pageWiki(id,searchTerm){
  console.log("strings got"+id+searchTerm);
  $.ajax({
    url:'https://en.wikipedia.org/w/api.php?action=parse&format=json&page='+searchTerm,
    type : 'GET',
     dataType : 'jsonp',
    success: function(json){
   // $("main-box").append(json.parse.text['*']);
    $("#"+id).append('<p>'+json.parse.text['*']+'</p>');
},
    error:function(errorText){
      console.log(errorText);
    }
  });
}*/
$(document).ready(function(){
  $("#queryText").keyup(function(event){
    if(event.keyCode == 13){
        $("#searchButton").click();
    }
});
$("#searchButton").on("click",function(){
 /* if(squery)
    {*/
      $("#main-con").removeClass("main-box");
      var squery = $("#queryText").val();
      if(squery){
      console.log("hello"+squery);
      wikiSearch(squery);
    }
});

/*$(".search-list").on('click',function(event) {
    var clickedId = event.target.id;
    console.log("clicked id is"+clickedId);
    var selectedOp=$("#"+clickedId).text();
    console.log(selectedOp);
    localStorage.setPage=selectedOp;
});*/

}); 