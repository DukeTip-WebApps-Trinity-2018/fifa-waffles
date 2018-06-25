$(".submit").click(function () {
    var city = $('.city').val();
    var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=59fda92777ad63824a08e1ed01211896";
    console.log(uri);
    $.get(uri, onRes);
});

function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description);
}