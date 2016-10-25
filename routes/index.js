var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { foo: 'bar' });
});

router.get('/wirewax', function(req, res, next) {
  res.render('wirewax', { 
    company: 'WIREWAX', 
    location: 'London, UK',
    url: 'https://www.wirewax.com', 
    logo: '/images/wwx_logo.png',
    employed: 'September 2015 - October 2016',
    description: 'WIREWAX uses advanced machine learning to recognize the objects and people inside video, making it possible for the audience to actively engage and explore video like never before.',
    thumbnails: ["https://edge-assets.wirewax.com/creativeData/ww_brand-assets/vans_mobile.jpg", "https://edge-assets.wirewax.com/creativeData/ww_brand-assets/coach_mobile.jpg", "https://edge-assets.wirewax.com/creativeData/ww_brand-assets/ri_laptop.jpg"],
    roles: [{jobTitle: "Product Manager", jobDescription: "Managed the product roadmap, engineering and design teams.", bullets: ["Distilled product requirements and strategy by working closely with the CEO and cofounder.", "Provided my own insight and ideas for improving the user experience of the product.", "Built wireframes to illustrate required functionalities to provide clarity for design and development", "Managed six person developer team using sprints and an agile release schedule", "Jumped into the code-base to make front end improvements"]}]
  });
});

router.get('/proleads', function(req, res, next) {
  res.render('proleads', { 
    company: 'ProLeads',
    location: 'San Francisco, CA', 
    url: 'https://proleads.io', 
    logo: '/images/proleads_logo.png',
    employed: 'February 2015 - July 2015',
    description: 'ProLeads has built the ideal sales automation tool- Allowing small sales teams to craft extremely personal and highly effective emails with very little effort.',
    thumbnails: ["https://proleads.io/assets/imac-27-proleads-flow-transparent-500x485.png", "http://www.fillmurray.com/300/150", "http://www.fillmurray.com/300/150"],
    roles: [{jobTitle: "Product Manager", jobDescription: "Managed the product roadmap, engineering and design teams.", bullets: ["Distilled product requirements and strategy by working closely with the CEO and cofounder.", "Provided my own insight and ideas for improving the user experience of the product.", "Built wireframes to illustrate required functionalities to provide clarity for design and development", "Managed six person developer team using sprints and an agile release schedule", "Jumped into the code-base to make front end improvements"]}]
  });
});

router.get('/tesla', function(req, res, next) {
  res.render('tesla', { 
    company: 'Tesla',
    location: 'Palo Alto, CA', 
    url: 'https://tesla.com', 
    logo: '/images/tesla_logo.png',
    employed: 'June 2008 - September 2013',
    description: 'Tesla develops advanced battery technology used in building world class electric cars and sophisticated energy storage systems under the leadership of Elon Musk.',
    thumbnails: ["http://www.fillmurray.com/300/150", "http://www.fillmurray.com/300/150", "http://www.fillmurray.com/300/150"],
    roles: [{jobTitle: "Product Manager", jobDescription: "Managed the product roadmap, engineering and design teams.", bullets: ["Distilled product requirements and strategy by working closely with the CEO and cofounder.", "Provided my own insight and ideas for improving the user experience of the product.", "Built wireframes to illustrate required functionalities to provide clarity for design and development", "Managed six person developer team using sprints and an agile release schedule", "Jumped into the code-base to make front end improvements"]}]
  });
});

module.exports = router;
