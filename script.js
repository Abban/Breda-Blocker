// Hide columnist box
$('.columnist strong:contains(Breda O\'Brien), .columnist strong:contains(John Waters)').parent().parent().hide();

// Hide sidebar feature box
$('.feature_box img[alt="Breda O\'Brien"], .feature_box img[alt="John Waters"]').parent().parent().parent().parent().hide();

// Hide from features sidebar
$('.verticalteaserlist .news .author:contains(Breda O\'Brien), .verticalteaserlist .news .author:contains(John Waters)').parent().parent().parent().hide();

// Hide articles from listings
$('.index_story li.author span:contains(Breda O\'Brien), .index_story li.author span:contains(John Waters)').parent().parent().parent().parent().hide();

// Hide content of actual article
if($('.article .author_name a:contains(Breda O\'Brien), .article .author_name a:contains(John Waters)').length > 0) $('.article').hide();
