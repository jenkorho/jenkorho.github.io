const svgDoc = document.querySelector(".svg-img");
let svgLines;

svgDoc.addEventListener("load", function(){
    let doc = svgDoc.getSVGDocument();
    console.log(doc);
    let lines = doc.getElementsByTagName("line");
    svgLines = lines;
    console.log(svgLines);
    for(l of svgLines) {
        l.classList.add("svg-line");
    }
    console.log(svgLines);

});


const tl = new TimelineMax();
function animateLines() {


}
