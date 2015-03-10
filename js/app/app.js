define(['jquery','app/printer'], function ($,Printer) {

    var printer = new Printer();
    printer.print("helloooo...");
    $(function(){
      console.log("loaded");
      $("body").append("<h2>Hello</h2>")
    });

});
