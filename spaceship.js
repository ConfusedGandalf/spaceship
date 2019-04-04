var spaceship = document.getElementById("spaceship");
var angle = 0;
var directionangle = 0;
var posX = 230;
var posY = 370;
var speed = 1;

function Game(){
    window.addEventListener("keyup", function(e){
        if (e.keyCode == 38) { speed = 1;}
        directionangle = 0;
    });
    window.addEventListener("keydown", function(e){
        if (e.keyCode == 38) { /* up */
            speed = 4;
        }
        if (e.keyCode == 37) { /* left */
            directionangle = -1;
        }
        if (e.keyCode == 39) { /* right */
            directionangle = 1;
        }
    });
    var rebuilder = setInterval(rebuildcanvas, 10);
}

function turnship() {
    angle += directionangle * (Math.PI / 180);
    spaceship.style.transform = "rotate("+ (angle * 180 / Math.PI) +"deg)";
}

function rebuildcanvas() {
    turnship();
    angle += directionangle * (Math.PI / 180);
    xDir = speed * Math.sin(angle);
    yDir = speed * Math.cos(angle);
    if(posX + xDir > 30 && posX + xDir < 550) {
        posX += xDir;
        spaceship.style.left = posX + 'px';
    }
    if(posY - yDir > 0 && posY - yDir < 520) {
        posY -= yDir
        spaceship.style.top = posY + 'px';
    }
    console.log("speed " + speed);
    console.log("angle " + angle);
    console.log("directionangle " + directionangle);
    console.log("posX " + posX);
    console.log("posY " + posY);    
}