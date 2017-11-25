$(function () {
    banner();
});

var banner = function () {

    var getData = function (callback) {
        if (window.data) {
            callback && callback(window.data);
            return false;
        }

        $.ajax({
            type: 'get',
            url: 'js/data.json',
            data:{},
            dataType: 'json',
            success: function (data) {
                window.data = data;
                callback && callback(window.data);
            }
        });
    };
    var render = function () {
        getData(function (data) {
            var isMobile = $(window).width() < 768 ? 1 : 0;
            var pointHtml = template('point', { list: data });
            var imageHtml = template('image', { list: data, isM: isMobile });
            console.log(data);
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imageHtml);
        });
    };
    render();
    $(window).on('resize', function () {
        render();
    });
};
