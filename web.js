

var clicked=0;
$("#logo-btn").click(()=>{
    if(clicked%2==0){
        $("#line-3").css("display","none")
        $("#line-1").css({"top":"10px","transform":"rotateZ(-45deg)"})
        $("#line-2").css({"transform":"rotateZ(45deg)"})
        $("header").toggleClass("changed")
        $(".line").css("background-color","white")
        $("#heading").css("color","white");        clicked++;
    }
    else if(clicked%2!=0){
        $("#line-3").css("display","block")
        $("#line-1").css({"top":"0px","transform":"rotateZ(0deg)"})
        $("#line-2").css({"transform":"rotateZ(0deg)"})
        $("header").toggleClass("changed")
        $(".line").css("background-color","#1d272f")
        $("#heading").css("color","#1d272f"); 
        clicked++;
    }
})


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    
    if(scroll==0){
        $("#heading").css({"transform":"rotateX(0deg)","color":"#1d272f","border":"2px solid #1d272f"})
        $("#heading").removeClass("active")
        $("#heading").html("<h1>Welcome</h1>")
        if($("#line-3").css("display")=="none"){
            $("#line-3").css("display","block")
            $("#line-1").css({"top":"0px","transform":"rotateZ(0deg)"})
            $("#line-2").css({"transform":"rotateZ(0deg)"})
            $("header").toggleClass("changed")
            $(".line").css("background-color","#1d272f") 
            clicked++;
        }
    }
});

var ids =["about","tech-text","tech-img","row1","row2","row3","row4","ready"]


ids.forEach(element => {
      
  
  var myElement = document.querySelector( '#'+element );
  
  // Listen for the scroll event
  document.addEventListener( 'scroll', event => {
   
    // Check the viewport status
  
    if( inViewport( myElement )) {
        
      if(myElement.id=="about"){
        $("#heading").css({"transform":"rotateX(360deg)","color":"white","border":"2px solid white"})   
                $("#heading").addClass("active")
                $("#heading").html("<h1>About</h1>")
                if($("#line-3").css("display")=="block"){
                
                $("#line-3").css("display","none")
                $("#line-1").css({"top":"10px","transform":"rotateZ(-45deg)"})
                $("#line-2").css({"transform":"rotateZ(45deg)"})
                $("header").toggleClass("changed")
                $(".line").css("background-color","white")
                clicked++;
                }
      }
      else if(myElement.id=="tech-text"||myElement.id=="tech-img"){
        $("#heading").html("<h1>Technologies</h1>")
        $("#heading").css("transform","rotateX(0deg)")
        if($("#line-3").css("display")=="none"){
        $("#heading").addClass("active")
        
      }
    }
      else if(myElement.id=="row1"||myElement.id=="row2"||myElement.id=="row3"||myElement.id=="row4"){
        $("#heading").html("<h1>Projects</h1>")
                $("#heading").css("transform","rotateX(360deg)")
                if($("#line-3").css("display")=="none"){
                $("#heading").addClass("active")
                }

      }else if(myElement.id=="ready"){
        $("#heading").html("<h1>Download?</h1>")
                $("#heading").css("transform","rotateX(0deg)")
                if($("#line-3").css("display")=="none"){
                $("#heading").addClass("active")   }
      }

         myElement.style.opacity="1";
      
    } else {
      
        myElement.style.opacity="0";
      
    }
    
  
});
});

  function inViewport( element ){
  
    // Get the elements position relative to the viewport
  
    var bb = element.getBoundingClientRect();
    
    // Check if the element is outside the viewport
    // Then invert the returned value because you want to know the opposite
  
    return !(bb.top > innerHeight || bb.bottom < 0);
    
  }
//   animation

var typed = new Typed('.animate', {
    strings:["a Developer",
     "a Student",
     "Divyansh Sao"],
     typeSpeed:50,
     backSpeed:50,
     loop:true
  });
  $(".column-img img").click((event)=>{
   
      url = document.getElementById(event.target.id).getAttribute("data-url")
      console.log(url)
      window.location.href=url
      
  })