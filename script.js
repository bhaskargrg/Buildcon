var tl=gsap.timeline()

tl.from('nav .nav-item,.navbar-brand',{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.1
    
})
tl.from('.kok p,h5',{
y:100,
duration:2,
stagger:.2,
opacity:0,
scrollTrigger:{
    trigger:'',
    scroller:'body'
}

})
tl.from('#kok1',{
y:100,
stagger:.1,
opacity:0,
duration:.5,
scrollTrigger:{
    trigger:'#services',
    scroller:'body'
    
    
}
})
tl.from('#Building',{
    y:100,
    stagger:.2,
    opacity:0,
    duration:.3,
    scrollTrigger:{
        trigger:'#Building',
        scroller:'body'
        
        
    }
    })
    tl.from('#Faces',{
        y:100,
        stagger:.2,
        opacity:0,
        duration:.3,
        scrollTrigger:{
            trigger:'#Faces',
            scroller:'body'
            
            
        }
        })