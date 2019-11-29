            $("document").ready(function(){
               
                
                 $('.next').on('click',function(){
                     var currentImg = $('.active');
                     var nextimg = currentImg.next();
                     
                     if(nextimg.length){
                         currentImg.removeClass('active').css('z-index',-10);
                         nextimg.addClass('active').css('z-index',10);
                     }
                         
                         
                        });
                   

                 $('.prev').on('click',function(){
                     var currentImg = $('.active');
                     var previmg = currentImg.prev();
                     
                     if(previmg.length){
                        currentImg.removeClass('active').css('z-index',-10);
                        previmg.addClass('active').css('z-index',10);
                     }
                     
                         
                         
                        
                    });
                 });
