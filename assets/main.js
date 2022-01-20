/**
 * 添加AI动画小人
 */
//  小帅哥： https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json
//  萌娘：https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json 
//  小可爱（女）：https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json 
//  小可爱（男）：https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json
//  初音：https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json 
window.onload = function() {
    L2Dwidget.init({
        "model": { "jsonPath": "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json", 
                    "scale": 1, 
                    "hHeadPos": 0.5, 
                    "vHeadPos": 0.618 },
        "mobile": { "show": false, scale: 0.5 },
        "display": {
            "superSample": 2,
            "width": 80,
            "height": 160,
            "position": "left",
            "hOffset": 0,
            "vOffset": 0
        },
        "react": { "opacityDefault": 0.6, "opacityOnHover": 0.1 } 
    });
    initPageContent()
}
/**
 * 初始化内容大小
*/
initPageContent = function(){
    var headerHeight = document.getElementById('header').offsetHeight
    var footerHeight = document.getElementById('footer').offsetHeight
    var pagecontent = document.getElementById('pageContent')
    var bodyHeight = document.body.clientHeight
    pagecontent.style.minHeight = bodyHeight - headerHeight - footerHeight + 'px'
}
/**
     * 手机端添加点击出现菜单
     */
 addPhoneMenu()
    function addPhoneMenu(){
    var menuElement = document.getElementById('menu')
    menuElement.onclick = function() {
        alert('click menu')
    }
 }
 /**
 * dialog 点击确定事件
 */
 function closeDialog(){
     var dialogElement = document.getElementById('dialog')
     var dialogBoxElement = document.getElementById('dialogBox')
     var dialogModalElement = document.getElementById('dialogModal')
     dialogBoxElement.classList.remove('animate__fadeInDown')
     dialogBoxElement.classList.add('animate__fadeOutUp')
     dialogModalElement.classList.add('animate__fadeOut')
     setTimeout(function(){
         dialogElement.style.display = 'none'
     }, 1000)
 }
 function showDialog(title){
     var dialogElement = document.getElementById('dialog')
     var dialogBoxElement = document.getElementById('dialogBox')
     var dialogModalElement = document.getElementById('dialogModal')
     var dialogTitleElement = document.getElementById('dialogTitle')
     var dialogContentElement = document.getElementById('dialogContent')
     dialogBoxElement.classList.add('animate__fadeInDown')
     dialogBoxElement.classList.remove('animate__fadeOutUp')
     dialogModalElement.classList.remove('animate__fadeOut')
     var dialogTitle = ''
     var dialogContent = ''
     switch(title){
         case 'wechat': {
            dialogTitle = '禾肠的微信'
            dialogContent = '<img style="width: 80%;margin-left: 10%;" src="/images/wechat.jpg" />'
            break
         }
         case 'qq': {
            dialogTitle = '禾肠的企鹅'
            dialogContent = '1136192942'
            break
         }
     }
     dialogTitleElement.innerHTML = dialogTitle
     dialogContentElement.innerHTML = dialogContent
     dialogElement.style.display = 'block'
 }
