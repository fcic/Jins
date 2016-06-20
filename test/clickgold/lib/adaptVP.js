function adaptVP(d)
{
    function e()
    {
        var e, i;
        return o.uWidth = d.uWidth ? d.uWidth : 640, 
        o.dWidth = d.dWidth ? d.dWidth : window.screen.width || window.screen.availWidth, 
        o.ratio = window.devicePixelRatio ? window.devicePixelRatio : 1, o.userAgent = navigator.userAgent, 
        o.bConsole = d.bConsole ? d.bConsole :!1,
        d.mode ? void (o.mode = d.mode) : (e = o.userAgent.match(/Android/i), 
        void (e && (o.mode = "android-2.2", 
        i = o.userAgent.match(/Android\s(\d+.\d+)/i), i && (i = parseFloat(i[1])), 
        2.2 == i || 2.3 == i ? o.mode = "android-2.2" : 4.4 > i ? o.mode = "android-dpi" : i >= 4.4 && (o.mode = o.dWidth > o.uWidth ? "android-dpi" : "android-scale"))))
    }
    function i()
    {
        var e, i, t, a, n = "", r = !1;
        switch (o.mode)
        {
            case "apple":
                n = "width=" + o.uWidth + ", user-scalable=no";
                break;
            case "android-2.2":
                d.dWidth || (o.dWidth = 2 == o.ratio ? 720 : 1.5 == o.ratio ? 480 : 1 == o.ratio ? 320 : .75 == o.ratio ? 240 : 480), 
                e = window.screen.width || window.screen.availWidth, 320 == e ? o.dWidth = o.ratio * e : 640 > e && (o.dWidth = e), 
                o.mode = "android-dpi", r = !0;
            case "android-dpi":
                i = 160 * o.uWidth / o.dWidth * o.ratio, n = "target-densitydpi=" + i + ", width=" + o.uWidth + ", user-scalable=no", 
                r && (o.mode = "android-2.2");
                break;
            case "android-scale":
                //n = "width=" + o.uWidth + ", user-scalable=no";
                i = 160 * o.uWidth / o.dWidth * o.ratio;
                n = "target-densitydpi=" + i + ", width=" + o.uWidth + ", user-scalable=no"; 
        }
        t = document.querySelector("meta[name='viewport']") || document.createElement("meta"), t.name = "viewport", 
        t.content = n, a = document.getElementsByTagName("head"), a.length > 0 && a[0].appendChild(t)
    }
    function t()
    {
        var d = "";
        for (key in o) {
            d += key + ": " + o[key] + "; ";
        }
        alert(d)
    }
    if (d)
    {
        var o = {
            uWidth : 0, dWidth : 0, ratio : 1, mode : "apple", userAgent : null, bConsole :!1
        };
        e(), i(), o.bConsole && t()
    }
}
adaptVP({
    uWidth : 750
});
