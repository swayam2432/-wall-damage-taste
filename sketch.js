var bullet, thickness, wall;
var speed, weight;

function setup() {
    createCanvas(1600, 400);
    bullet = createSprite(50, 200, 50, 100);
    bullet.shapeColor = "blue";

    wall = createSprite(1200, 200, thickness, height / 2);
    wall.shapeColor = "purple"; 

    thickness = random(22, 83);
    speed = random(10, 20);
    weight = random(30, 52);
}

function draw() {
    background("red");

    bullet.velocityX = speed;

    if (hasCollided(bullet, wall)) {
        bullet.velocityX = 0;

        var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

        if (damage > 10) {
            wall.shapCcolor = "red";
        }

        if (damage < 10) {
            wall.shapeColor = "green";
        }

    }

    drawSprites();
}

function hasCollided(lbullet, lwall) {

    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge >= wallLeftEdge) {
        return true;
    }

    else {
        return false;
    }
}   