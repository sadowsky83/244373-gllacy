ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.93864690819559, 30.32299012698361],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Магазин мороженого Glacy Shop',
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/marker_218x142.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-39, -139]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.setCenter([59.939338443001946, 30.32927244448849], 16, {
    checkZoomRange: true
  });
});
