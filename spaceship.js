var spaceship = document.getElementById("spaceship");
var angle = 0;
var directionangle = 0;
var posX = 230;
var posY = 370;

function Game(){
    window.addEventListener("keyup", function(e){
        e.keyCode = false;
    });
    window.addEventListener("keydown", function(e){
        if (e.keyCode == 37) { /* left */
            directionangle = -1;
            turnship();
        }
        if (e.keyCode == 39) { /* right */
            directionangle = 1;
            turnship();
    }
    });
    var rebuilder = setInterval(rebuildcanvas, 10);
}

function turnship() {
    angle += directionangle * (Math.PI / 180);
    spaceship.style.transform = "rotate("+ (angle * 180 / Math.PI) +"deg)";
}

function rebuildcanvas() {
    angle += directionangle * (Math.PI / 180);
    posX += 1 * Math.sin(angle);
    posY -= 1 * Math.cos(angle);
    spaceship.style.left = posX + 'px';
    spaceship.style.top = posY + 'px';
    console.log("angle " + angle);
    console.log("directionangle " + directionangle);
    console.log("posX " + posX);
    console.log("posY " + posY);
    directionangle = 0;
    
}