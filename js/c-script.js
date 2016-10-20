$(".b-hamburger").click(function(event){
        event.preventDefault();
        $("span").toggleClass("active");
        $(".main-menu").toggleClass("active-m");
    
    });