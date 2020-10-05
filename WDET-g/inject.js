if (typeof (window.WDET) == "undefined") {
    window.jq = jQuery;
}
window.WDET = {
    ROOT: "https://github.com/ZeeXoc/WDET/tree/master/WDET-g/",
    paste: function (v1, v2) {//该方法来自7happy7的Wikidot Sandbox Editor,CC-BY-SA
        let t = document.querySelector("#edit-page-textarea");
        let all = t.value;
        let start = t.selectionStart;
        let end = t.selectionEnd;
        if (v2 == undefined) {
            t.value = all.substr(0, start) + v1 + all.substr(start, all.length);
        } else if (start == end) {
            t.value = all.substr(0, start) + v1 + "<text>" + v2 + all.substr(start, all.length);
        } else {
            t.value = all.substr(0, end) + v2 + all.substr(end, all.length);
            all = t.value;
            t.value = all.substr(0, start) + v1 + all.substr(start, all.length);
        }
    },
    injectJs: function (url) {
        let script = jq("<script>", {
            type: "text/javascript",
            src: url,
        });
        script.appendTo("head");
    },
    injectLocal: function (short) {
        switch (this.source[short].type) {
            case "js":
                this.injectJs(this.ROOT + this.source[short].url);
                break;
            default:
                console.error("Cannot find WDET.source." + short);
                break;
        }
    },
    init: function () {
        try {
            let meta = this.q('[name="viewport"]');
            meta.setAttribute("content", meta.getAttribute("content") + ",user-scalable=no");
        } catch (e) {}
        if (!document.querySelector("#edit-page-textarea")) {
            if (!window.WIKIDOT) {
                return alert("Detection failed: WIKIDOT object is undefined");
            } else {
                try {
                    WIKIDOT.page.listeners.editClick();
                    let target = this.q("#action-area");
                    let observer = new MutationObserver(records => {
                        observer.disconnect();
                        return this.init();
                    });
                    let options = {childList: true};
                    observer.observe(target, options);
                } catch (e) {
                }
            }
        }else {
            /*for (let script in this.scripts) {
                this.injectJs(this.ROOT + WDET.scripts[script].url);
            }*/

            this.injectLocal("WSTP");
        }
    },
    source: {
        WSTP: {
            type: "js",
            url: "scripts/WSTP.js",
            version: "1.0.1",

            name: "Wikidot Sandbox Tools Panal",
            short: "WSTP",
            auther: "ZeeXoc",
            homepage: "http://github.com/ZeeXoc",
        },
        WIE: {
            type: "js",
            url: "scripts/WIE.js",
            version: "1.0.1",

            name: "Wikidot Improved Editor",
            short: "WIE",
            auther: "unknow",
            homepage: "http://extention.Wikidot.com",
        },
        WSE: {
            type: "js",
            url: "scripts/WSE.js",
            version: "1.0.1",

            name: "Wikidot Sandbox Editor",
            short: "WSE",
            auther: "7happy7",
            homepage: "http://github.com/7happy7/wikidot-sandbox-editor",
        }
    }
}
;WDET.init();
