function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}
function load_notebooks() {
    var query = document.querySelectorAll(".notebook");
    var path = null;
    for (const nbenv of query){
        path = nbenv.dataset.nbPath;
        var filecont = loadFile(path);
        var notebook = nb.parse(JSON.parse(filecont));
        var rendered = notebook.render()
        while (nbenv.hasChildNodes()) {
            nbenv.removeChild(nbenv.lastChild);
        }
        nbenv.appendChild(rendered);
        Prism.highlightAll();
    }
}