var main = function() {
	
	var slideIndex = 1;
  
  //Slide Navigation
  
	  //Next arrow clicked, go to next slide
	  $('.nextArrow').click(function(){
			var currentSlide = $('.active-slide');
			var nextSlide = currentSlide.next();
			
			
			slideIndex++;
			
			var currentDot = $('.active-dot');
			var nextDot = currentDot.next();
			
			
			if ( nextSlide.length === 0)
			{
			nextSlide = $('.slide').first();
			nextDot =$('.dot').first();
			slideIndex = 1;
			}
			
			currentSlide.fadeOut(0).removeClass('active-slide');
			nextSlide.fadeIn(0).addClass('active-slide');
			
			currentDot.removeClass('active-dot');
			nextDot.addClass('active-dot');
	  })
	  
	  //Previous arrow clicked, go to previous slide
	  $('.prevArrow').click(function(){
			var currentSlide = $('.active-slide');
			var prevSlide = currentSlide.prev();
			
			
			slideIndex--;
			
			var currentDot = $('.active-dot');
			var prevDot = currentDot.prev();
			
			if ( prevSlide.length === 0)
			{
			prevSlide = $('.slide').last();
			prevDot =$('.dot').last();
			slideIndex = 6;
			}
			
			currentSlide.fadeOut(0).removeClass('active-slide');
			prevSlide.fadeIn(0).addClass('active-slide');
			
			currentDot.removeClass('active-dot');
			prevDot.addClass('active-dot');
	  })
	  
	  //Slide Tab clicked jump to slide
	  $('.goToSlide').click(function(){
		
			var currentSlide = $('.active-slide');
			var currentDot = $('.active-dot');
			var goToThisSlide = $(this).attr('id');
			
			switch(goToThisSlide)
			{
				case 'Profile': 
					slideNumber = 1;
					break;
				case 'Education':
					slideNumber = 2;
					break;
				case 'Experience':
					slideNumber = 3;
					break;
				case 'Skills': 
					slideNumber = 4;
					break;
				case 'Projects':
					slideNumber = 5;
					break;
				case 'Contacts':
					slideNumber = 6;
					break;
				default:
					slideNumber = 1;
					break;
			}
			
			var nextSlide = currentSlide;
			var nextDot = currentDot;	

			for( var i = 1; i < 7 ; i++ )
			{					
				if( slideIndex === slideNumber)
				{
					break;
				}
				
				if((slideNumber-slideIndex)>(slideIndex-slideNumber)){
					slideIndex++;
					nextSlide = nextSlide.next();
					nextDot = nextDot.next();  
				}
				else{ 
					slideIndex--;
					nextSlide = nextSlide.prev();
					nextDot = nextDot.prev();  
				}
				
			};
			
			currentSlide.fadeOut(0).removeClass('active-slide');
			nextSlide.fadeIn(0).addClass('active-slide');
			
			currentDot.removeClass('active-dot');
			nextDot.addClass('active-dot');	    
	  })
  
  //Tab navigation for Projects
  $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
  $('.nav-tabs a').on('show.bs.tab', function(){
       
    });
  $('.nav-tabs a').on('shown.bs.tab', function(){
        
    });
  $('.nav-tabs a').on('hide.bs.tab', function(e){
        
    });
  $('.nav-tabs a').on('hidden.bs.tab', function(){
        
    });
		
	
	//Code navigation for projects
	//Smooth Scrolling
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	//Pill navigation for Projects to separate files of code
	$('.nav-pills a').click(function(){
		$(this).pill('show');
	})

	// Select pill by name
	$('.nav-pills a[href="#home"]').pill('show')

	// Select first pill
	$('.nav-pills a:first').pill('show') 

	// Select last pill
	$('.nav-pills a:last').pill('show') 

	// Select fourth pill (zero-based)
	$('.nav-pills li:eq(3) a').pill('show')
}

$(document).ready(main);