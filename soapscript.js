/* 
$(".shelf-content").mouseover( (event) => {

    //Suurenna hyllyä
    
        const element = event.currentTarget;
        if(element.classList.value == "shelf-content"){
            $(element).css("height", "200px");
    
        }
    
        //Lista näkyviin
    
        let eId = element.id;
        let idNum = eId.slice((eId.length - 2), eId.length);
        let dlId = "dl" + idNum;
        let btnId = "d-btn" + idNum;
    
        $("#"+dlId).css("display", "block");
        $("#"+dlId).css("opacity", "1");
        $("#"+btnId).css("display", "block");
    
    });
    
    $(".shelf-content").mouseleave( (event) => {
    
    //Pienennä hyllyä
    
        let element = event.target;
        $(element).css("height", "100px");
    
        //Lista näkyviin
    
        let eId = element.id;
        let idNum = eId.slice((eId.length - 2), eId.length);
        let dlId = "dl" + idNum;
        let btnId = "d-btn" + idNum;
    
        $("#"+dlId).css("display", "none");
        $("#"+dlId).css("opacity", "0");
        $("#"+btnId).css("display", "none");
    
    });
 */

    //SVG-animaatiot


const pearStick = document.getElementById("pear-stick");
let stickLength = pearStick.getTotalLength();
pearStick.style.strokeDasharray = stickLength + ' ' + stickLength;
pearStick.style.strokeDashoffset = stickLength;



var tl = new TimelineMax();

tl.from("#pear-body", 1, {scaleY: 0, transformOrigin: "center", ease: Power2.easeInOut})

.from("#pear-leaf", 0.7, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeInOut})

.from(".main-h", 0.5, {scaleX: 0, transformOrigin: "left", ease: Power2.easeInOut 
});



$(".shelf-content").mouseover(expandShelf);

function expandShelf(event) {
    const target = event.currentTarget;
    target.style.height = "150px";
    const children_a = target.children;


    for (c of children_a) {

        let grandChildren = c.children;

        for(gc of grandChildren) {
            if(gc.classList.contains("collapse")) {

                gc.classList.add("show");
                gc.classList.remove("hide");


            }
            else {
                continue;
            }

        }
    };

};

$(".shelf-content").mouseout(collapseShelf);

function collapseShelf(event) {
    const target = event.currentTarget;
    target.style.height = "100px";
    const children_a = target.children;


    for (c of children_a) {

        let grandChildren = c.children;

        for(gc of grandChildren) {
            if(gc.classList.contains("collapse")) {
                gc.classList.add("hide");
                gc.classList.remove("show");

                

            }
            else {
                continue;
            }
        }
    };

};
