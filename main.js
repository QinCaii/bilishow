// ==UserScript==
// @name         Bilibili大会员角标显示
// @description  大会员角标
// @namespace    http://127.0.0.1/
// @version      1.0
// @include      *.bilibili.com/*
// @author       QinCaii
// @icon         https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/images/logo-small.png
// ==/UserScript==

window.onload = () => {
    let vnext = document.querySelector('.level-content'),
        helpBut = document.querySelector('.contact-help'),
        vip = document.querySelector('.vip'),
        vp = document.createElement('a'),
        vp_container = document.querySelector('.vp-container'),
        bico = document.querySelectorAll('.bili-avatar-icon'),
        nick = document.querySelectorAll('.nickname'),
        money = document.querySelector('.money'),
        home = document.querySelector('.international-home'),
        coinbut = document.createElement('a');
    const NAMESPACE = '大会员';
    console.log(`${NAMESPACE} loaded`);
    var icoNum = 1;
    var coinNum = 0;
    const attrList = [
        {
            name: "data-v-038b75d4", ////
            value: ""
        },
        {
            name: "href",
            value: "//account.bilibili.com/account/big"
        },
        {
            name: "target",
            value: "_blank"
        },
        {
            name: "style",
            value: "background: rgb(251, 114, 153); color: rgb(255, 255, 255);" //默认粉色background: rgb(251, 114, 153);  愚人节小会员绿色48, 196, 32
        },
        {
            name: "class",
            value: "vip"
        }
    ];
        for (let i of bico) {
        i.setAttribute('class', 'bili-avatar-icon bili-avatar-right-icon  bili-avatar-icon--personal bili-avatar-size-60');//角标   替换：--big-vip大会员 --small-vip小会员 --personal个人小闪电 --business机构
        i.setAttribute('title', '个人小闪电');
        i.setAttribute('style', ''); 
        console.log(`${NAMESPACE}:icon changed，当前序号:`,icoNum);
    }

    for (let i of nick) {
        i.setAttribute('style','padding-top: 42px; color: rgb(251, 114, 153);');
    }

    if(helpBut !== null){ ///////////////////////////////////切换按钮/////////////////////////////////////
        //console.log('找客服',helpBut);
        helpBut.innerHTML = '切换图标'
        helpBut.removeAttribute("href");
        //helpBut.setAttribute('onclick', 'a();');//不做了
        helpBut.onclick = function() {
            switch (icoNum)
            {
            case 0:
            for (let i of bico) {
                i.setAttribute('class', 'bili-avatar-icon bili-avatar-right-icon  bili-avatar-icon--personal bili-avatar-size-60');//角标
                i.setAttribute('title', '个人');
                }
            icoNum++;
                setTimeout(function() {
	            console.log(`${NAMESPACE}:iconchanged，当前图标序号:`,icoNum);
                }, 20);
            break;
            case 1:
            for (let i of bico) {
                i.setAttribute('class', 'bili-avatar-icon bili-avatar-right-icon  bili-avatar-icon--business bili-avatar-size-60');//角标
                i.setAttribute('title', '机构');
                }
            icoNum++;
                setTimeout(function() {
	            console.log(`${NAMESPACE}:iconchanged，当前图标序号:`,icoNum);
                }, 20);
            break;
            case 2:
            for (let i of bico) {
                i.setAttribute('class', 'bili-avatar-icon bili-avatar-right-icon  bili-avatar-icon--big-vip bili-avatar-size-60');//角标   替换：--big-vip大会员 --personal个人 --business机构  --nft高能链数字藏品
                i.setAttribute('title', '大会员');
                }
            icoNum++;
                setTimeout(function() {
	            console.log(`${NAMESPACE}:iconchanged，当前图标序号:`,icoNum);
                }, 20);
            break;
            case 3:
            for (let i of bico) {
                i.setAttribute('class', 'bili-avatar-icon bili-avatar-right-icon  bili-avatar-icon--nft bili-avatar-size-60');//藏品角标
                i.setAttribute('title', '高能链数字藏品');
                }
            icoNum++;
                setTimeout(function() {
	            console.log(`${NAMESPACE}:iconchanged，当前图标序号:`,icoNum);
                }, 20);
            break;
            case 4:
            for (let i of bico) {
                i.setAttribute('class', 'bili-avatar-icon');//应用角标   替换：--big-vip大会员 --personal个人认证 --business机构认证  --nft高能链数字藏品
                i.setAttribute('title', '');
                }
            icoNum = 0;
                setTimeout(function() {
	            console.log(`${NAMESPACE}:iconchanged，当前图标序号:`,icoNum);
                }, 20);
            break;
            default:alert("ERROR: Unexpected;");break;
            }
        }
    }

    for (const i of attrList) {
        vp.setAttribute(i.name, i.value);
    }
    vp.innerHTML = '大会员'
    console.log('vip', vip)
    if(vip !== null){
        vp_container.removeChild(vip);
    }
    if(vnext != null)
    vp_container.insertBefore(vp, vnext);

    //硬币系统
    /*const coinList = [
        {
           name: "target",
            value: "_blank"
        },
        {
            name: "class",
            value: "contact-help"
        }
    ];
        for (const i of coinList) {
        coinbut.setAttribute(i.name, i.value);
    }
    coinbut.innerHTML = 'gime coin'
    home.appendChild(coinbut)
    */
    document.onkeydown=function(){
        if(window.event.keyCode==97){
            coinPlay();
        }
    }
    function coinPlay() {
      coinNum = money.innerHTML
      coinNum++;
      money.innerHTML = coinNum;
      console.log('硬币',coinNum)
      console.log('亮闪闪的硬币',money.innerHTML)
    }
    //coinbut.onclick = coinPlay

    console.log('vp', vp)
}
