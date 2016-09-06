define(['jquery','app/printer','app/calc'],function ($,Printer,Calc) {

    var calc = new Calc();
    var printer = new Printer();
    $(function(){
      //$("body").append("<h2>Hello html one more time</h2>");
      //$("body").append("<h2>" + myVal + "</h2>");
      //$("body").append("2 + 2 = " + calc.add(2,2));
      $("body").trigger("my_test_event");
    });

});
