const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function first

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX,dets.clientY);
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMouseFollower();