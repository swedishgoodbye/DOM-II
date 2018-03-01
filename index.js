// Rachelle Pestanas & Brett Sullivan
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blockParent = document.getElementsByClassName("blocks")[0];
document.getElementsByClassName("blocks")[0].style.width = "100%";


blockParent.style.width = "100%"; 

blockParent.addEventListener("mousedown", (event) =>{
    function slide(blockX){
       
            blockX.style.alignSelf = "center";

            setTimeout(function() {
                blockX.style.alignSelf = "flex-end";
            }, 1000)

            
    }

    redBlock.addEventListener("mousedown", (event) => {
        slide(redBlock);
    })

    blueBlock.addEventListener("mousedown", (event) => {
        slide(blueBlock);
    })

    greenBlock.addEventListener("mousedown", (event) => {
        slide(greenBlock);
    })
    pinkBlock.addEventListener("mousedown", (event) => {
        slide(pinkBlock);
    })
    grayBlock.addEventListener("mousedown", (event) => {
        slide(grayBlock);
    })

} )

blockParent.addEventListener("mouseup", (event) => {
    function unSlide(blockY){
        blockY.style.alignSelf = "center";

        // setTimeout(function() {
        //     blockX.style.alignSelf = "flex-start"
        // }, 5000)
    }

    redBlock.addEventListener("mouseup", (event) => {
        unSlide(redBlock);
    })

    blueBlock.addEventListener("mouseup", (event) => {
        unSlide(blueBlock);
    })

    greenBlock.addEventListener("mouseup", (event) => {
        unSlide(greenBlock);
    })
    pinkBlock.addEventListener("mouseup", (event) => {
        unSlide(pinkBlock);
    })
    grayBlock.addEventListener("mouseup", (event) => {
        unSlide(grayBlock);
    })
})


// slide(redBlock);
// slide(blueBlock);
// redBlock.addEventListener("mousedown", (event) =>{
//     redBlock.style.alignSelf = "center";
// })