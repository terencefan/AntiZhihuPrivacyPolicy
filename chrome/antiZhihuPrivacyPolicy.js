var __zhihuTimeout = 1;
var __zhihuDead = false;
function __antiZhihuPrivacyPolicy() {
    var __zhihuPrivacyConfirm = document.querySelector("div.PrivacyConfirm")
    if (__zhihuPrivacyConfirm !== null) {
        var __zhihuDiv = __zhihuPrivacyConfirm
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        ;
        __zhihuDiv.parentElement.removeChild(__zhihuDiv);
        document.querySelector("html").style.overflow = "scroll";
        __zhihuDead = true;
    }
    if (!__zhihuDead) {
        setTimeout(__antiZhihuPrivacyPolicy, __zhihuTimeout);
        __zhihuTimeout *= 2;
    }
}
__antiZhihuPrivacyPolicy();
