const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
      },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        769: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        993: {
            
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
})

$("a").on('click', function (event) {
    let anchor = $(this);
    $('html, body').animate({
        scrollTop: $(anchor.data('url')).offset().top - 100
    }, 1000);
    event.preventDefault();
});
$(".to-form").on('click', function (event) {
    let anchor = $(this);
    $('html, body').animate({
        scrollTop: $(anchor.data('url')).offset().top - 100
    }, 1000);
    event.preventDefault();
});
let monthNames = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"),
    now = new Date();
now.setTime(now.getTime());
document.querySelector('#date').textContent = now.getDate() + "/" + monthNames[now.getMonth()] + "/" + now.getFullYear()

const   date1 = document.querySelector('#date');

        // добавление нуля если число меньше 10
        function zero_first_format(value)
        {
            if (value < 10)
            {
                value='0'+value;
            }
            return value;
        }
        // дата 
        function date_time(num = 0, arr = 0)
        {
            var g = Date.now()- num; //уменьшение времени в милисекундах
            var current_datetime = new Date(g);
            var day = zero_first_format(current_datetime.getDate());
            var month = zero_first_format(current_datetime.getMonth()+1);
            var year = current_datetime.getFullYear();
            var hours = zero_first_format(current_datetime.getHours());
            
            var minutes = zero_first_format(current_datetime.getMinutes());
            var seconds = zero_first_format(current_datetime.getSeconds());
            if (arr === 0 ){
                month = month
            }else{
                month = arr[month-1]
            }
            return  `${day}/${month}/${year}, ${hours}:${minutes}`;
        }
            date1.innerHTML = date_time(7200000);

$(".invest").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
})