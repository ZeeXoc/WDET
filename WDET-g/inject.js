if (typeof (window.WDET) == "undefined") {
    window.jq = jQuery;
}
window.WDET = {
    ROOT: "http://localhost/public/WDET-g/",
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
    inject: function (url) {
        let script = jq("<script>", {
            type: "text/javascript",
            src: url,
        });
        script.appendTo("head");
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
            for (let script in this.scripts) {
                this.inject(this.ROOT + WDET.scripts[script].url);
            }
        }
    },
    scripts: {
        WSTP: {
            name: "Wikidot Sandbox Tools Panal",
            short: "WSTP",
            auther: "ZeeXoc",
            homepage: "http://github.com/ZeeXoc",
            version: "1.0.1",

            url: "scripts/WSTP.js"
        }
    }
}
;WDET.init();
