console.log("ok");

$(".promos").click(function(){
	var d = $(this).data("promo");
	dataLayer.push({
    'event': 'promotionClick',
    'ecommerce': {
      'promoClick': {
        'promotions': [
         {
           'id': d,                         
           'name': d,
           'creative': 'nie bardzo',
           'position': '-1'
         }]
      }
    },
    'eventCallback': function() {
      console.log("saved promo " + d);
    }
  });
	
	return true;
});
