const flipLeftElement = document?.getElementById("flip-left")
const flipRightElement = document?.getElementById("flip-right")

const foodElement = document?.getElementById("food")
const drinkElement = document?.getElementById("drink")

const foodScrollElement = document?.getElementById("foodScroll")
const drinkScrollElement = document?.getElementById("drinkScroll")

const dragElement = document?.getElementById("menuList")

const removeAll = (element) => {
    element.classList.remove('slide-in-left');
    element.classList.remove('slide-in-right');
    element.classList.remove('slide-out-left');
    element.classList.remove('slide-out-right');
    element.classList.remove('display-none');
}

const slideInLeft = (element) => {
    removeAll(element)
    element.classList.add('slide-in-left');
}

const slideInRight = (element) => {
    removeAll(element)
    element.classList.add('slide-in-right');
}


const slideOutLeft = (element) => {
    removeAll(element)
    element.classList.add('slide-out-left');
}

const slideOutRight = (element) => {
    removeAll(element)
    element.classList.add('slide-out-right');
}


const scrollLeft = () => {
    slideOutRight(drinkElement)
    slideOutRight(drinkScrollElement)

    flipRightElement.classList.remove('display-none');
    flipLeftElement.classList.add('display-none')

    drinkElement.classList.add('slide-out-right');

    setTimeout(()=>{
        drinkElement.classList.add('display-none')
        slideInLeft(foodElement)
        slideInLeft(foodScrollElement)
    },1000)
}

const scrollRight =  ()=>{

    slideOutLeft(foodElement);
    slideOutLeft(foodScrollElement);

    flipRightElement.classList.add('display-none');
    flipLeftElement.classList.remove('display-none')


    foodElement.classList.add('slide-out-left');

    setTimeout(()=>{
        foodElement.classList.add('display-none')
        slideInRight(drinkElement);
        slideInRight(drinkScrollElement);
    },1000)
}

flipLeftElement?.addEventListener("click", scrollLeft); 


flipRightElement?.addEventListener("click", scrollRight); 


var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
    return evt.touches 
}                                                     
                                                                           
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                           
function handleTouchMove(evt) {
    evt.preventDefault()
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                        
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            scrollRight()
        } else {
            /* left swipe */
            scrollLeft()
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

dragElement?.addEventListener("touchstart", handleTouchStart, false);

dragElement?.addEventListener("touchmove", handleTouchMove, false);


