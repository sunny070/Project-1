const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,

        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}
function circleChaptakaro(){
    //define default scale value
    var xscale =1;
    var yscale =1;

    var xprev = 0;
    var yprev = 0;


    window.addEventListener("mousemove",function(dets){
        // var xdiff=dets.clientX -xprev;
        // var ydiff=dets.clientY -yprev;
        xscale= gsap.utils.clamp(.8,1.2,dets.clientX -xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY -yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
        cir
     


    })
}
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX,dets.clientY);
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleChaptakaro();
circleMouseFollower();
firstPageAnim();