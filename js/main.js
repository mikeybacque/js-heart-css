var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $pfirst = $('main p:first-child');
var $h2 = $('h2');
var $mainlist = $('main ul');
var $img = $('img');
var $lifirst = $('li:first-child');
var $lilast = $('li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');

$h1.removeClass('big-heading');
$h1.addClass('logo');

$main.addClass('wrapper');
$pfirst.addClass('intro');

$h2.addClass('slug-head');

$mainlist.addClass('slug-list');

$img.addClass('slug-img');

$lifirst.addClass('slug-list-first');

$lilast.addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');

$lilast.show();
