apiready = function() {
    $api.fixStatusBar($api.dom('header'));
    api.setStatusBarStyle({
        style: 'dark',
        color: '#6ab494'
    });
    funIniGroup();
}

function funIniGroup() {
    var eHeaderLis = $api.domAll('header li'),
        frames = [];
    for (var i = 0, len = eHeaderLis.length; i < len; i++) {
        frames.push({
            name: 'frame' + i,
            url: './html/frame' + i + '.html',
            bgColor: 'rgba(0,0,0,.2)',
            bounces: true
        })
    }
    api.openFrameGroup({
        name: 'group',
        scrollEnabled: false,
        rect: {
            x: 0,
            y: $api.dom('header').offsetHeight,
            w: api.winWidth,
            h: $api.dom('#main').offsetHeight
        },
        index: 0,
        frames: frames
    }, function(ret, err) {

    });
}

// 随意切换按钮
function randomSwitchBtn(tag) {
    if (tag == $api.dom('#footer li.active')) return;
    var eFootLis = $api.domAll('#footer li'),
        eHeaderLis = $api.domAll('header li'),
        index = 0;
    for (var i = 0, len = eFootLis.length; i < len; i++) {
        if (tag == eFootLis[i]) {
            index = i;
        } else {
            $api.removeCls(eFootLis[i], 'active');
            $api.removeCls(eHeaderLis[i], 'active');
        }
    }
    $api.addCls(eFootLis[index], 'active');
    $api.addCls(eHeaderLis[index], 'active');
    // main 内容切换
    mainContentSwitch(index);
}

// main 内容切换
function mainContentSwitch(index) {
  switch (index) {
    // 首页
    case 0:indexPage();break;
    // 子页面1
    case 1:;break;
    // 子页面2
    case 2:;break;
    // 子页面3
    case 3:;break;
    default:indexPage();break;
  }
}

function indexPage() {

}
