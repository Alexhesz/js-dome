window.onload = function () {
    // 轮播图
    let _direction = true;
    let _move = () => {
        let lists = document.getElementsByClassName('item');
        if (_direction) {
            document.getElementById('slide').appendChild(lists[0]);
        } else {
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        };
    };

    let timer = setInterval(_move, 2500);
    document.getElementsByClassName('container')[0].onmousemove = () => {
        // alert('检测到鼠标经过！')
        clearInterval(timer);
    };
    document.getElementsByClassName('container')[0].onmouseout = () => {
        // alert('检测到鼠标移除！')
        timer = setInterval(_move, 2500);
    };
    // 切换按钮
    document.getElementsByClassName('s_button')[0].onclick = () => {
        _direction = true;
        _move();
    };
    document.getElementsByClassName('s_button')[1].onclick = () => {
        _direction = false;
        _move();
    };

    
}