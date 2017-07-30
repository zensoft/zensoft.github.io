
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


dataLayer.push({
  'ecommerce': {
    'currencyCode': 'EUR',                       // Local currency is optional.
    'impressions': [
     {
       'name': 'Triblend Android T-Shirt',       // Name or ID is required.
       'id': '12345',
       'price': '15.25',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Gray',
       'list': 'Search Results',
       'position': 1
     },
     {
       'name': 'Donut Friday Scented T-Shirt',
       'id': '67890',
       'price': '33.75',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Black',
       'list': 'Search Results',
       'position': 2
     }]
  }
});
