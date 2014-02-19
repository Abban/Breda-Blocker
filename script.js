// Hide columnist box
$('.columnist strong:contains(Breda O\'Brien)').parent().parent().hide();

// Hide sidebar feature box
$('.feature_box img[alt="Breda O\'Brien"]').parent().parent().parent().parent().hide();

// Hide from features sidebar
$('.verticalteaserlist .news .author:contains(Breda O\'Brien)').parent().parent().parent().hide();

// Hide articles from listings
$('.index_story li.author span:contains(Breda O\'Brien)').parent().parent().parent().parent().hide();

// Hide content of actual article
if($('.article .author_name a:contains(Breda O\'Brien)').length > 0) $('.article').hide();
