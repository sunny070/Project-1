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
        var xdiff=dets.clientX -xprev;
        var ydiff=dets.clientY -yprev;

        xprev=dets.clientX;
        yprev=dets.clientY;
        console.log(gsap.utils.clamp(.8,1.2,xdiff);
        gsap.utils.clamp(.8,1.2,ydiff);


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