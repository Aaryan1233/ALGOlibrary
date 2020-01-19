function bounceOff(OBJ1,OBJ2){                                                                                                            
    if(OBJ1.x- OBJ2.x < OBJ1.width/2 + OBJ2.width/2 && 
      OBJ2.x - OBJ1.x < OBJ1.width/2 + OBJ2.width/2 
      ){ 
        OBJ1.velocityX = -1 * OBJ1.velocityX; 
        OBJ2.velocityX = -1 * OBJ2.velocityX;
      } 
      if(OBJ1.y - OBJ2.y < OBJ1.height/2 + OBJ2.height/2 && 
        OBJ2.y - OBJ1.y < OBJ1.height/2 + OBJ2.height/2  
        ){ 
          OBJ1.velocityY = -1 * OBJ1.velocityY; 
          OBJ2.velocityY = -1 * OBJ2.velocityY; 
        }  
      } 
      function isTouching(object1,object2) 
      { if (object1.x - object2.x < object2.width/2 + object1.width/2 && 
        object2.x - object1.x < object2.width/2 + object1.width/2 && 
        object1.y - object2.y < object2.height/2 + object1.height/2 && 
        object2.y - object2.y < object2.height/2 + object1.height/2)  
        { return true; }  
        else { return false;  
        }  
    } 
