if (WDET&&!WDET.panal){
    WDET.panal = {
        actArea:jq("#wd-editor-toolbar-panel"),
        init : function (){
            this.actArea.empty();
        },
        source:{
            css:" *{\n" +
                "    padding: 0;\n" +
                "    margin: 0;\n" +
                "    }\n" +
                "    ul{\n" +
                "    list-style-type:none;\n" +
                "    }\n" +
                "    .triangle{\n" +
                "\n" +
                "    font-size: 1em;\n" +
                "    color: white;\n" +
                "    }\n" +
                "    a{\n" +
                "    text-decoration:none;\n" +
                "    text-align: center;\n" +
                "    font-weight: bold;\n" +
                "\n" +
                "    }\n" +
                "    /*一级导航*/\n" +
                "    ul.nav{\n" +
                "    float: left;\n" +
                "    border:1px solid gray;\n" +
                "    margin-left: 10%;\n" +
                "    margin-top:10px;\n" +
                "    border-radius: 4px;\n" +
                "    position: fixed;\n" +
                "    }\n" +
                "    ul.nav li{\n" +
                "    float: left;\n" +
                "    width: 9em;\n" +
                "    background-color:yellowgreen;\n" +
                "    }\n" +
                "    ul.nav a{\n" +
                "    display: block;\n" +
                "    color: white;\n" +
                "    line-height: 1.5em;\n" +
                "    border-right: 1px solid white;\n" +
                "    border-left: 1px solid white;\n" +
                "    padding: 5px;\n" +
                "    }\n" +
                "\n" +
                "    ul.nav a:hover,\n" +
                "    ul.nav a:focus{\n" +
                "    color: black;\n" +
                "    background-color: #98FB98;\n" +
                "    opacity: 0.5;\n" +
                "    }\n" +
                "    ul.nav li:first-child a{\n" +
                "    border-left: 0;\n" +
                "    border-bottom: 0;\n" +
                "    }\n" +
                "    ul.nav li:last-child a{\n" +
                "    border-right: 0;\n" +
                "    border-bottom: 0;\n" +
                "    }\n" +
                "    /*二级导航*/\n" +
                "    ul.nav li ul{\n" +
                "    width: 10em;\n" +
                "    position: absolute;\n" +
                "    left: -1000em;\n" +
                "    }\n" +
                "\n" +
                "    ul.nav li:hover ul{\n" +
                "    width: 10em;\n" +
                "    left:auto;\n" +
                "    }\n" +
                "\n" +
                "    ul.nav li ul a{\n" +
                "    border-top: 1px solid white;\n" +
                "    border-bottom: 1px solid white;\n" +
                "    border-left: 0;\n" +
                "    border-right: 0;\n" +
                "\n" +
                "    }\n" +
                "    /*三级导航*/\n" +
                "    ul.nav li:hover ul li ul{\n" +
                "    width: 10em;\n" +
                "    position: absolute;\n" +
                "    left: -1000em;\n" +
                "\n" +
                "    }\n" +
                "\n" +
                "    ul.nav li:hover ul li:hover ul{\n" +
                "    left: auto;\n" +
                "    margin-left: 9.1em;\n" +
                "    margin-top: -2.1em;\n" +
                "    }\n" +
                "    ul.nav li:hover ul li:hover ul.nav1{\n" +
                "    left: auto;\n" +
                "    margin-left: -9.1em;\n" +
                "    margin-top: -2.1em;\n" +
                "    }",
        }
    }
    WDET.panal.init();
}
