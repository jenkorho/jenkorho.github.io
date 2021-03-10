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
/*     animateLines(); */

});

//Underline

$(".nav-link").mouseover((event) => {

    let element = event.currentTarget;
    //let underline = element.firstChild;
    let underline = element.lastChild.previousElementSibling;
    console.log(underline);
    underline.classList.toggle("anim");

});

/* $("#message-btn").mouseover((event) => {

    const element = event.currentTarget;
    //let underline = element.firstChild;
    const underline = element.nextSibling.nextSibling;
    console.log(underline);
    underline.classList.toggle("anim");

}); */

/* $("#message-btn").mouseout((event) => {

    let element = event.currentTarget;
    //let underline = element.firstChild;
    let underline = element.nextSibling.nextSibling;
    console.log(element);
    underline.classList.toggle("anim");

});
 */
$(".nav-link").mouseout((event) => {

    let element = event.currentTarget;
    let underline = element.lastChild.previousElementSibling;
    console.log(underline);
    underline.classList.toggle("anim");

});




/* 

function animateLines() {
    const tl = new TimelineMax();
    for(l of svgLines) {
        let e = l;
        let c = e.getAttribute("class");
        tl.from(("." + c), 1, {scaleX: 0, transformOrigin: "left", ease: Power2.easeIn} );
        console.log(svgLines);
    };
    

};
 */