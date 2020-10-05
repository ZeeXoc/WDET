if (!WDET.CPMode) {
    WDET.CPMode = {
        q: function (v) {
            return document.querySelector(v);
        },
        init: function () {

            let cpArea = document.createElement("style");
            cpArea.id = "cpArea";
            cpArea.contentEditable = "true";
            cpArea.onchange = function () {
                this.q("#cpArea").innerHTML = this.q("#cpArea").innerText;
            }
            this.q("#edit-page-textarea").parentNode.insertBefore(cpArea, this.q("#edit-page-textarea"));

            let newStyle = document.createElement("style");
            newStyle.innerHTML = "#cpArea {display: block;\n" +
                "width:100%;\n" +
                "min-height: 3em;\n" +
                "max-height: 7em;\n" +
                "border: black solid 0.2em;\n" +
                "padding: 0.5em;\n" +
                "overflow-y: auto;\n" +
                "word-break: keep-all;}";
            document.head.appendChild(newStyle);
        }
    }
}
;WDET.CPMode.init();

