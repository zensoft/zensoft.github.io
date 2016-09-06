var add = function(a,b){
  return a + b;
};

QUnit.test( "Add test", function( assert ) {
  assert.notEqual(add(2,2),5);
});

/*
define(['../jquery','app/printer','app/calc'],function ($,Printer,Calc) {



});*/



/*require(['app/calc'], function(calc){
    console.log(calc);

    QUnit.test( "Add amd test", function( assert ) {
      assert.equal(calc.add(2,2),4);
    });

})*/
