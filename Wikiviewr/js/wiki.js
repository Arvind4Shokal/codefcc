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
      $(".search-list").remove();
      $(".main-box").append('<ul class="collapsible search-list" data-collapsible="accordion"></ul>')
      for (var i = 0; i < 10; i++) {
        console.log(json.query.search[i].title);
        titleVal=json.query.search[i].title;
        desc=json.query.search[i].snippet;
        $(".search-list").append('<li id="list'+i+'"></li>');
        $("#list"+i).append('<div class="collapsible-header">'+titleVal+'</div>');

      }
      pageWiki();
     },
     error:function(errorText,errorThrown){
      console.log(errorText);      
     }
	});

}
function pageWiki(){
  $.ajax({
    url:'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=India',
    type : 'GET',
     dataType : 'jsonp',
    success: function(json){
      console.log(json.parse.text);
    $("main-box").append(json.parse.text);
    $("#list0").append('<div class="collapsible-body">'+json.parse.text+'</div>');
},
    error:function(errorText){
      console.log(errorText);
    }
  });
}
$(document).ready(function(){
$("#searchButton").on("click",function(){
 /* if(squery)
    {*/
      var squery = $("#queryText").val();
      if(squery){
      
      console.log("hello"+squery);
      wikiSearch(squery);
    }
});
$(".search-list").click(function(event) {
    var clickedId = event.target.id;
    console.log(clickedId);
    pageWIki();
    console.log("cs");
});

}); 