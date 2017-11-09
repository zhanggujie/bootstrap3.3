/**
 * Created by zhangguijie on 2017/11/9 9:43.
 */
$(document).ajaxStart(function () {
    $('.container').append(
        `<div class="contentload" >
<div class="loadEffect">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </div></div>`
    )
})
$(document).ajaxSend(function () {
    setTimeout(function () {
        $('.contentload').remove()
    },1000)

})