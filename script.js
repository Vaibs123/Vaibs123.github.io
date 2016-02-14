

var pContainerHeight = $('.cover').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.title_text').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
      });

    

  }
});



/*
	      
var pContainerHeight = $('.cover').height();

$(window).scroll(function()
{

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) 
  	{

	    $('.image1').css
	    ({
	      'transform' : 'translate(0px, '+ wScroll /6 +'px)'
	   	});
	}

   
	

      if(wScroll > $('.cover').offset().top + ($(window).height() / 1.8)) 
      {
            $(".image1").delay(3000);
            $(".image1").css('visibility','visible');
      }
      else
      {
        $(".image1").css('visibility','hidden');
      }



if(wScroll > $('.landing').offset().top - ($(window).height() / 1)) 
  {
    $('.landing div').each(function(i)
    {
      setTimeout(function()
      {
        $('.landing-pics div').eq(i).addClass('is-showing');

				 $('#giveborder').fadeIn(30000);
				
				jQuery('#giveborder').css('opacity', '1');

         
      }, 
      (700 * (Math.exp(i * 0.14))) - 700);
    });

  }
	
  // Landing Elements
  if(wScroll > $('.landing').offset().top - ($(window).height() / 2.7)) 
  {
    $('.landing div').each(function(i)
    {
      setTimeout(function()
      {
        $('.landing-pics div').eq(i).addClass('is-showing');
         $('.land1').animate(
			 	{	
					width:'80%',
		    		height: 'inherit'
    			},1000);
         $('.land2').animate(
			 	{	
					width:'80%',
		    		height: 'inherit'
    			},1000);
          $('.land3').animate(
			 	{	
					width:'80%',
		    		height: 'inherit'
    			},1000);
         $('.land4').animate(
			 	{	
					width:'80%',
		    		height: 'inherit'
    			},1000);

      }, 
      (700 * (Math.exp(i * 0.14))) - 700);
    });

  }
	
				
});*/