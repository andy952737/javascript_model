$(".js-open-app").click(function(){
    var download_link, iframe, loadDateTime, redirected, scheme_link, t;
    scheme_link = $(this).data("appscheme"); 
    download_link = $(this).data("downloadurl"); 
    redirected = false;   

    if (navigator.userAgent.match(/FBIOS/i)) {
        document.writeln("請按上或下方的箭頭，選擇「在 Safari 開啟」以繼續進行活動。");
        return; 
    } 

    if (navigator.userAgent.match(/Windows Phone/i)) {
        loadDateTime = new Date();
        setTimeout(function() {
        var timeOutDateTime;
        timeOutDateTime = new Date();
        if (timeOutDateTime - loadDateTime < 3000) {
            window.location = download_link;
        }
        }, 1000);
        window.location = scheme_link;
    } else if (navigator.userAgent.match(/Android/i)) {
        if (navigator.userAgent.match(/Chrome/i)) {
        if (+navigator.userAgent.match(/(chrome(?=\/))\/?\s*(\d+)/i)[2] >= 41) {
            window.location = scheme_link;
            setTimeout(function() {
            if (!document.webkitHidden && !redirected) {
                redirected = true;
                window.location = download_link;
            }
            }, 1000);
        } else {
            window.location = scheme_link;
            alert("若您看到錯誤畫面，請先安裝 某某 App 喔！");
        }
        } else {
        iframe = document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "1px";
        iframe.style.height = "1px";
        t = setTimeout(function() {
            window.location = download_link;
        }, 1000);
        iframe.onload = function() {
            clearTimeout(t);
        };
        iframe.src = scheme_link;
        document.body.appendChild(iframe);
        }
    } else if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
        setTimeout(function() {
        if (!document.webkitHidden) {
            window.location = download_link;
        }
        }, 25);
        window.location = scheme_link;
    } else {
        loadDateTime = new Date();
        setTimeout(function() {
        var timeOutDateTime;
        timeOutDateTime = new Date();
        if (timeOutDateTime - loadDateTime < 3000) {
            window.location = download_link;
        }
        }, 1000);
        window.location = scheme_link;
    }
});