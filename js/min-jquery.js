$(function () {
    // 下拉菜单
    $('i#dropbtn').click(function () {
        var $state = $('div.dropdown').css('display');
        if ($state = 'none') {
            $('div.dropdown').css('display', 'block');
        } else {
            $('div.dropdown').css('display', 'none');
        };
    });

    // 当前时间
    setInterval(() => {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // 如果小时为0，显示12  
        minutes = minutes < 10 ? '0' + minutes : minutes; // 如果分钟小于10，前面加0  
        seconds = seconds < 10 ? '0' + seconds : seconds; // 如果秒小于10，前面加0  
        var dateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        $('div#time').text(dateTime);
    }, 1000);


    // 文字轮播图效果
    $(function () {
        var $list = $('#list');
        var $items = $list.children('.item-text');
        var count = $items.length;
        var index = 0;
        var intervalId = setInterval(function () {
            var $currentItem = $items.eq(index);
            $currentItem.addClass('active').siblings().removeClass('active');
            index = (index + 1) % count;
        }, 2500);
    });

    // email
    $('#email').click(function () {
        alert('752216116@qq.com & alexhesz@vip.qq.com')
    })
});
