if (typeof (window.WDET) == "undefined") {
    window.WDET = {
        ROOT: "http://github/ZeeXoc/WDET",
        q: function (v) {
            return document.querySelector(v);
        },
        inject: function (url) {
            let head = document.getElementsByTagName("head")[0];
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            head.appendChild(script);

        },
        init: function () {
            /*let setting = document.createElement("img");
            setting.src = "http://scp-wiki-cn.wikidot.com/local--files/component:theme/logo.png";
            setting.style = "position: fixed;";
            this.q("#main-content").insertBefore(setting);*/

            for (let script in this.scripts) {
                this.inject(this.ROOT + WDET.scripts[script].url);
            }
        },
        scripts: {
            WSTP: {
                name: "Wikidot Sandbox Tools Manager",
                short: "WSTP",
                auther: "ZeeXoc",
                homepage: "http://github.com/ZeeXoc",
                version: "1.0.1",

                url: "scripts/WSTP.js"
            },
            WIE: {
                name: "Wikidot Improved Editor",
                short: "WIE",
                auther: "unknow",
                homepage: "http://extention.Wikidot.com",
                version: "1.0.1",

                url: "scripts/WIE.js"
            },
            WSE: {
                name: "Wikidot Sandbox Editor",
                short: "WSE",
                auther: "7happy7",
                homepage: "http://github.com/7happy7/wikidot-sandbox-editor",
                version: "1.0.1",

                url: "scripts/WSE.js"
            },
            CSSP: {
                name: "CSS-Previewer",
                short: "CSSP",
                auther: "ZeeXoc",
                homepage: "http://github.com/ZeeXoc",
                version: "1.0.1",

                url: "scripts/CSSP.js"
            }
        }
    }
}
;WDET.init();