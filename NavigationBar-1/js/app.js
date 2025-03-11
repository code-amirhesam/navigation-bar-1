// Define Menu, container, nav ul, each li element:
const menuBtn = document.getElementById("hide");
const navUl = document.getElementById("nav__ul");
const navCon = document.getElementById("nav__Con");
const elementLi1 = document.getElementById('1');
const elementLi2 = document.getElementById('2');
const elementLi3 = document.getElementById('3');
const elementLi4 = document.getElementById('4');
const elementLi5 = document.getElementById('5');


// Function for Click on Menu Icon (svg):
function menuAction() {
    if (window.matchMedia("(max-width: 701px)").matches) {
        navUl.style.cssText = "height: 250px; opacity: 1; display: flex; border-radius: 24px;";
        navCon.style.cssText = "max-width: 50%; transition: all 750ms; opacity: 1;";
        elementLi1.style.cssText = "display: block; position: absolute; transform: translateY(-85px); transition: all 1s";
        elementLi2.style.cssText = "display: block; position: absolute; transform: translateY(-45px); transition: all 1s";
        elementLi3.style.cssText = "display: block; position: absolute; transform: translateY(-5px); transition: all 1s";
        elementLi4.style.cssText = "display: block; position: absolute; transform: translateY(45px); transition: all 1s";
        elementLi5.style.cssText = "display: block; position: absolute; transform: translateY(85px); transition: all 1s";
        menuBtn.style.cssText = "opacity: 0;"
    }
    else if (window.matchMedia("(min-width: 702px)").matches) {
        window.location.reload();
    }
}


// Function for Click out side of Menu:
function menuActionReverse() {
    if (window.matchMedia("(max-width: 701px)").matches) {
        navUl.style.cssText = "height: 80px; opacity: 1; display: flex;";
        navCon.style.cssText = "max-width: 20%; transition: all 750ms; opacity: 1;";
        elementLi1.style.cssText = "display: none;";
        elementLi2.style.cssText = "display: none;";
        elementLi3.style.cssText = "display: none;";
        elementLi4.style.cssText = "display: none;";
        elementLi5.style.cssText = "display: none;";
        menuBtn.style.cssText = "opacity: 1;"
    }
    else if (window.matchMedia("(min-width: 702px)").matches) {
        window.location.reload();
    }
}


// Event Listeners:
menuBtn.addEventListener('click', menuAction);
menuBtn.addEventListener('blur', menuActionReverse);
window.addEventListener('resize', menuActionReverse);


// Also developers can convert this code into CSS (not js code) by using Set Class in Js code...
// And remove cssText from js and Add them in CSS (with define them with Class in Js Code)...
