if (!WDET.pasteMod) {
    WDET.pasteMod = {
        now: "off", q: function (v) {
            return document.querySelector(v);
        }, paste: function (v1, v2) {
            let t = this.q("#edit-page-textarea");
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
        }, cnt_char: function () {
            let ev = this.q("#edit-page-textarea").value;
            this.q("#cnt_char").innerHTML = ev.length + " (空格: " + (ev.split(/ |　/).length - 1) + ", 换行: " + (ev.split("\n").length - 1) + ")";
        }, bousen: function () {
            this.paste('[[span class="bousen"]]', '[[/span]]');
        }, namisen: function () {
            this.paste('[[span class="namisen"]]', '[[/span]]');
        }, kenten_now: "kenten-b", kenten_init: function (v) {
            this.kenten_now = v;
        }, kenten: function () {
            this.paste('[[span class="' + this.kenten_now + '"]]', '[[/span]]');
        }, col: function () {
            this.paste('[[collapsible show="+open"hide="-close"]]\n', '\n[[/collapsible]]');
        }, mCol: function () {
            this.paste('[[include :scp-int:component:coltop show=+open|hide=-close]]\n', '\n[[include :scp-int:component:colend]]');
        }, ruby: function () {
            this.paste('[[span class="ruby"]]', '[[span class="rt"]]<ruby>[[/span]][[/span]]');
        }, foot: function () {
            this.paste('[[footnote]]', '[[/footnote]]');
        }, color: function () {
            this.paste('##red|', '##');
        }, size: function () {
            this.paste('[[size 120%]]', '[[/size]]');
        }, bb: function () {
            this.paste('█');
        }, pict: function () {
            this.paste('[[include component:image-block\n|name=<file name>\n|caption=', '\n]]');
        }, rep: function () {
            let t = this.q("#edit-page-textarea");
            t.value = t.value.split(this.q("#repBef").value).join(this.q("#repAft").value);
        }, init: function () {
            let newWikiButtons = `<div class="repEdit"><input type="text"id="repBef"placeholder="XXXX"><button onclick="WDET.pasteMod.rep()">→</button><input type="text"id="repAft"placeholder="9999"></div><button onclick="WDET.pasteMod.col()"><span>折叠块</span></button><button onclick="WDET.pasteMod.mCol()"><span>col模组</span></button><button onclick="WIKIDOT.Editor.buttons.tableWizard()"><span>表格</span></button><button onclick="WDET.pasteMod.foot()"><span>注释</span></button><button onclick="WDET.pasteMod.ruby()"><span>上标</span></button><button onclick="WDET.pasteMod.size()"><span>字体大小</span></button><button onclick="WDET.pasteMod.color()"><span>字体颜色</span></button><button onclick="WIKIDOT.Editor.buttons.quote()"><span>引用</span></button><button onclick="WDET.pasteMod.bb()"><span>黑条(█)</span></button><button onclick="WDET.pasteMod.pict()"class="pmod_mid"><span>图片</span></button><button onclick="WDET.pasteMod.jFire()"data-j="off"class="pmod_mid">JStyles:<span>关</span></button><button onclick="WDET.pasteMod.cnt_char()">字数: <span id="cnt_char"> - </span></button>`;
            let wikiOptionStyle = `#action-area h1{border:2px solid #b01;border-radius:0.25em;display:flex;flex-wrap:wrap;justify-content:space-around;padding:0.25em;}#action-area h1 .pmodBtn,#action-area h1 button{display:block;flex-grow:1;margin:0;padding:0.25em;width:26%;-moz-appearance:none;-webkit-appearance:none;}#action-area h1 .repEdit{background-color:#F4F4F4;border:1px solid #AAA;display:flex;flex-grow:1;justify-content:space-around;margin:0.25em 0;padding:0.25em;width:90%;}#action-area h1 .repEdit input{border:1px solid #AAA;color:#b01;flex-grow:1;font-family:sans-serif;font-size:0.925rem;width:40%;-moz-appearance:none;-webkit-appearance:none;}#action-area h1 .repEdit button{flex-grow:unset;width:2rem;}#action-area h1 .pmod_mid{width:40%;}#action-area h1 .pmod_wide{width:40%;}#action-area h1 button[data-j]{background:#fff0f0;}#action-area h1 button[data-j] span{display:inline-block;text-shadow:0 0 2px;transition:all 0.25s ease-in-out;width:2.5em;}#action-area h1 button[data-j="on"] span{color:green;}#action-area h1 button[data-j="off"] span{color:red;}#action-area h1 .act:after{color:green;content:"(J)";text-shadow:0 0 2px;}#action-area h1 .pmodBtn{background-color:#F4F4F4;border:1px solid #AAA;color:#000;flex-grow:unset;margin:0;padding:0.25em;text-decoration:none;width:2rem;}#action-area h1 .pmodBtn:not(:focus){background-image:url("https://ja.m.wikipedia.org/w/load.php?modules=mobile.ooui.icons&image=expand&format=rasterized&skin=minerva&version=iffcu");background-position:center;background-repeat:no-repeat;background-size:50%;font-size:0;}#wd-editor-toolbar-panel{display:none;}`;
            let wikiOption = this.q("#action-area h1");
            wikiOption.innerHTML = newWikiButtons;
            let newStyle = document.createElement("style");
            newStyle.innerHTML = wikiOptionStyle;
            document.head.appendChild(newStyle);
        }, jFire: function () {
            let t = this.q("#edit-page-textarea");
            let e = this.q("#action-area button[data-j]");
            this.now = e.getAttribute("data-j");
            let rmv = (v) => {
                for (let i = 0; i < v.length; i++) v[i].remove();
            };
            t.value = t.value.split(/(?:\n|^)\[\[include (?:\:.*?:|)component\:jstyles\]\]\n?/g).join("");
            if (this.now == "off") {
                t.value = '[[include :scp-jp:component:jstyles]]\n' + t.value;
                e.setAttribute("data-j", "on");
                this.q("#action-area button[data-j] span").innerHTML = "开";
                this.q("#action-area h1").innerHTML += `<button onclick="WDET.pasteMod.namisen()"class="rmv act"><span>波浪线</span></button><button onclick="WDET.pasteMod.bousen()"class="rmv act"><span>上划线</span></button><button onclick="WDET.pasteMod.kenten()"class="rmv act"style="width:calc(26%-2rem)"><span>上圆点</span></button><select onchange="WDET.pasteMod.kenten_init(this.value)"class="rmv pmodBtn"><option value="kenten-b"selected>小丸(黒)</option><option value="kenten-wb">小丸(白)</option><option value="kenten-c">丸(黒)</option><option value="kenten-wc">丸(白)</option><option value="kenten-goma">ゴマ(黒)</option><option value="kenten-wgoma">ゴマ(白)</option><option value="kenten-t">三角(黒)</option><option value="kenten-wt">三角(白)</option><option value="kenten-janome">蛇の目</option><option value="kenten-doublec">二重丸</option><option value="kenten-hoshi">星</option><option value="kenten-kane">￥</option></select>`;
            } else {
                e.setAttribute("data-j", "off");
                this.q("#action-area button[data-j] span").innerHTML = "关";
                rmv(document.querySelectorAll("#action-area h1 .rmv"));
            }
        }
    }
}
;WDET.pasteMod.init();
