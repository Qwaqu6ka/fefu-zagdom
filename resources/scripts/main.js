import "./uikit";
import "./swiper";

document.addEventListener('MapLoaded', () => {
    console.log("MapLoaded!");
    if (window.ymaps !== undefined) {
        ymaps.ready(() => {
            const myMap = new ymaps.Map("map", {
                center: [43.159, 131.945],
                controls: ['geolocationControl', 'zoomControl', 'fullscreenControl'],
                zoom: 11,
            });

            const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../assets/icons/map_mark_green.svg',
                // Размеры метки.
                iconImageSize: [42, 56],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-21, -56],
            });
    
            myMap.geoObjects.add(myPlacemark);
        });
    }
});