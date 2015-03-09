$(function(){
  $.ajax({
    url: "/jsons/test.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      console.log(data);
    }
  });
});
