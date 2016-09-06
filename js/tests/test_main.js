requirejs.config({
    paths: {
      app: '../app',
      jquery:'../lib/jquery'
  }
});

require(['jquery','app/printer','app/calc'],function ($,Printer,Calc) {

  QUnit.test( "Add amd test", function( assert ) {
    var calc = new Calc();
    assert.equal(calc.add(2,2),4);
  });

});
