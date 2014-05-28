$(document).ready(function () {
    var array = [
        { name: 'hanbit media', link: "http://hanb.co.kr" },
        { name: 'NAver', link: "http://www.naver.com" },
        { name: 'paran', link: "http://www.paran.com" }
    ];
    $.each(array, function (index, item) {
        var output = '';
        output += '<a href="' + item.link + '">';
        output += '<h1>' + item.name + '</h1>';
        output += '</a>';
        document.body.innerHTML += output;
    });

}
);