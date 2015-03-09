---
my_name: John
---
$(function(){

  var name = "{{ page.my_name }}";

  console.log(name);

  $.ajax({
    url: "/jsons/test.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      console.log(data);
    }
  });
});
