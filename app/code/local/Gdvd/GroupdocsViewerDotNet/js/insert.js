function insertViewerDotNet()
{
    var form = document.forms.form;
    var url = form.url.value;
    var path = form.path.value;
    var handler = form.handler;
    var width = form.width.value;
    var height = form.height.value;
    var content = '';
    var use = '';
    if (url != "") {
        if (width == "") {
            width = "650";
        }
        if (height == "") {
            height = "750";
        }
        if (handler.checked) {
                handler = "Handler";
                use = true;
                content = 'with handler';
        } else {
            use = false;
            handler = "";
            content = 'with out handler'
        }
        var libs = "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/jquery-1.9.1.min.js'></script>" +
                "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/jquery-ui-1.10.3.min.js'></script>" +
                "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/knockout-2.2.1.js'></script>" +
                "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/turn.min.js'></script>" +
                "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/modernizr.2.6.2.Transform2d.min.js'></script>" +
                "<script type='text/javascript' language='JavaScript'>" +
                "if (!window.Modernizr.csstransforms) {"  +
                "$.ajax({url: '" + url + "document-viewer/GetScript" + handler + "?name=libs/turn.html4.min.js'," +
                            "dataType: 'script', type: 'GET', async: false});"+
                "}" +
                "</script>" +
                "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=installableViewer.min.js'><\/script>" +
                "<script type='text/javascript'>$.fn.groupdocsViewer.prototype.applicationPath = '" + url + "';</script>" +
                "<script type='text/javascript'>$.fn.groupdocsViewer.prototype.useHttpHandlers = " + use + ";</script>" +
                "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=GroupdocsViewer.all.min.js'></script>" +
                "<script type='text/javascript' language='JavaScript'>" +
                "$(function() {" +
                "var styleBootstrap = document.createElement('link');" +
                "styleBootstrap.setAttribute('rel', 'stylesheet');" +
                "styleBootstrap.setAttribute('type', 'text/css');" +
                "styleBootstrap.setAttribute('href', '" + url + "document-viewer/CSS/GetCss" + handler + "?name=bootstrap.css');" +
                "var gdCss = document.createElement('link');" +
                "gdCss.setAttribute('rel', 'stylesheet');" +
                "gdCss.setAttribute('type', 'text/css');" +
                "gdCss.setAttribute('href', '" + url + "document-viewer/CSS/GetCss" + handler + "?name=GroupdocsViewer.all.min.css');" +
                "var uiCss = document.createElement('link');" +
                "uiCss.setAttribute('rel', 'stylesheet');" +
                "uiCss.setAttribute('type', 'text/css');" +
                "uiCss.setAttribute('href', '" + url + "document-viewer/CSS/GetCss" + handler + "?name=jquery-ui-1.10.3.dialog.min.css');" +
                "document.getElementsByTagName('head')[0].appendChild(styleBootstrap);" +
                "document.getElementsByTagName('head')[0].appendChild(gdCss);" +
                "document.getElementsByTagName('head')[0].appendChild(uiCss);" +
                "var localizedStrings = null;" +
                "var thumbsImageBase64Encoded = null;" +
                "$('#viewerdotnet').groupdocsViewer({ filePath: '" + path + "', docViewerId: 'doc_viewer1', quality: 100, showHeader: true, showThumbnails: false, openThumbnails: false, initialZoom: 100," +
                "zoomToFitWidth: true, zoomToFitHeight: false, backgroundColor: '', showFolderBrowser: true, showPrint: true, showDownload: true, showZoom: true, showPaging: true," +
                "showViewerStyleControl: true, showSearch: true, preloadPagesCount: 0, viewerStyle: 1, supportTextSelection: true, localizedStrings: localizedStrings," +
                "thumbsImageBase64Encoded: thumbsImageBase64Encoded, showDownloadErrorsInPopup: true });" +
                "});" +
                "</script>";
        var div = '<div id="viewerdotnet" style="width:' + width + 'px;height:' + height + 'px;overflow:hidden;position:relative;margin-bottom:20px;background-color:gray;border:1px solid #ccc;"><span style="visibility:hidden;">' + content + '</span></div>';
        var tinyMceContent = tinyMCE.activeEditor.getContent();
        // set content
        tinyMCE.activeEditor.setContent(tinyMceContent + libs + div);
    } else {
        var tinyMceContent = tinyMCE.activeEditor.getContent();
        // set content

        tinyMCE.activeEditor.setContent(tinyMceContent + "Please fill \"URL of installed GroupDocs Viewer .NET\" field in form");
    }

}

function delFormDotNet() {
    var del = document.getElementById('page_tabs_content_section_content');
    var divToDel = document.getElementById("groupdocsviewerdotnet");
    del.removeChild(divToDel);
}

