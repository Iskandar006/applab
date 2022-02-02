var owl = $('.owl-carousel1');
owl.owlCarousel({
  items: 5,
  loop: true,
  margin: 40,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})


var owl = $('.owl-carousel2');
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 40,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})