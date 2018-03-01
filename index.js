// Rachelle Pestanas & Brett Sullivan

const column = document.getElementsByClassName("blocks");
const r = document.getElementsByClassName("block--red")[0];
const b = document.getElementsByClassName("block--blue")[0];
const gre = document.getElementsByClassName("block--green")[0];
const p = document.getElementsByClassName("block--pink")[0];
const gra = document.querySelector("block--gray");


r.addEventListener("click", (event) => {
    r.style.order = -1;
    b.style.order = 0;
    gre.style.order = 0;
    p.style.order = 0;
    gra.style.order = 0;
})

b.addEventListener("click", (event) =>{
    r.style.order = 0;
    b.style.order = -1;
    gre.style.order = 0;
    p.style.order = 0;
    gra.style.order = 0;

})


gre.addEventListener("click", (event) =>{
    r.style.order = 0;
    b.style.order = 0;
    gre.style.order = -1;
    p.style.order = 0;
    gra.style.order = 0;

})

p.addEventListener("click", (event) =>{
    r.style.order = 0;
    b.style.order = 0;
    gre.style.order = 0;
    p.style.order = -1;
    gra.style.order = 0;

})

gra.addEventListener("click", (event) =>{
    r.style.order = 0;
    b.style.order = 0;
    gre.style.order = 0;
    p.style.order = 0;
    gra.style.order = -1;

})
// column.addEventListener("click", (event) => {

//     function eventTarget(blockClass) {
//         if(event.target.id === blockClass){
//             blockClass.style.order = "-1";
//         }
//     }

//     eventTarget(r);
//     eventTarget(b);
//     eventTarget(gre);
//     eventTarget(p);
//     eventTarget(gra);

    
// })

// column.addEventListener("click", (event) => {
//     if(event.target === "b"){
//         event.style.order = -1;
//     }
// })



// b.addEventListener("click", (event) => {

//     // function eventTarget(blockClass) {
//     //     if(event.target.id === blockClass){
//     //         blockClass.style.order = "-1";
//     //     }
//     // }

//     // eventTarget(b);

//     event.order = -1;

// })



