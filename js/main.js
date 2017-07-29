
$("ul").on("click",function(){

  dataLayer.push({
    'event': 'promotionClick',
    'ecommerce': {
      'promoClick': {
        'promotions': [
         {
           'id': "aaa",                         // Name or ID is required.
           'name': "bbb",
           'creative': "ccc",
           'position': 123
         }]
      }
    },
    'eventCallback': function() {
      console.log("it's works????");
    }
  });


});
