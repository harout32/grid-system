//var mq = window.matchMedia( "(min-width: 992px)" );
//var sr = new ScrollReveal();
//var isMobile = sr.tools.isMobile();
//console.log(isMobile)
//
//// ScrollReveal should proceed if we’re not mobile,
//// or if we’re mobile with a matching minimum width. 
//if (!isMobile || (mq.matches)) {
//  
//  resize();
//}
//else{
//    
//    
//    
//}
//






function resize() {
    var wid= window.innerWidth;
    
    if (wid > 991) {
        window.sr = ScrollReveal();
        sr.reveal(".blue", {
            origin: "top",
            duration: 1500,
            reset: true,
            distance: '100px'
        });
        sr.reveal("#y2", {
            origin: "top",
            duration: 1500,
            reset: true,
            distance: '100px'
        });
        sr.reveal("#y1", {
            origin: "left",
            duration: 1500,
            reset: true,
            distance: '100px'

        });
        sr.reveal("#y3", {
            origin: "right",
            duration: 1500,
            reset: true,
            distance: '100px'

        });
        sr.reveal("#g1", {
            origin: "left",
            duration: 1500,
            reset: true,
            distance: '300px',
            

        });
        sr.reveal("#g2", {

            duration: 1500,
            reset: true,
            

        });
        sr.reveal(".o", {

            duration: 2000,

            reset: true
        }, 200);
        sr.reveal("#g", {
            origin:"bottom",
            duration: 1500,
            distance:"200px",
            reset: true,
            
            

        });

    }
    else{
       window.sr = ScrollReveal();
    sr.reveal(".bord:not(.o)", {

            duration: 2000,
            
            reset: true
        }, 200); 
    }
}
resize();


