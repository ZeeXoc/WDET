if (typeof (WIKIDOT) != "undefined") {
    window._wdextensionset = false;
    jQuery.ajaxSetup({
        cache: true
    });
    if (jQuery("#login-status .printuser a").length > 0) {
        if (jQuery("#login-status .printuser img").attr("src").match(/userid=([0-9]+)\&/)[1]) {
            window._wdextensionuid = jQuery("#login-status .printuser img").attr("src").match(/userid=([0-9]+)\&/)[1];
        } else {
            window._wdextensionuid = "unknown";
        }
        jQuery.getScript("https://extension.wdfiles.com/local--code_/user:" + window._wdextensionuid + "/1", function () {
            if (!window._wdextensionset) {
                jQuery.getScript("https://extension.wdfiles.com/local--code_/user:0");
            }
        });
    } else {
        jQuery.getScript("https://extension.wdfiles.com/local--code_/user:0");
    }
}