const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
function moveRight() {
  player.x = player.x + player.speed;
}
function moveLeft() {
  player.x = player.x - player.speed;
}
function moveUp() {
  player.y = player.y - player.speed;
}
function moveDown() {
  player.y = player.y + player.speed;
}

const player = {
  x: 25,
  y: 25,
  height: 50,
  width: 50,
  speed: 10,
  color: "maroon",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.height, this.width);
  },
};

const laser = {
  x: player.x,
  y: player.y,
  width: 2,
  height: 10,
  color: "yellow",
  speed: 20,
  active: false,
  draw: function () {
    ctx.fillStyle = laser.color;
    ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
    laser.y -= laser.speed;
    if (laser.y < 0) {
      laser.active = false;
    }
  },
};
//dev branch


player.draw();

const updateTheCanvas = () => {
  ctx.clearRect(0, 0, 1200, 1200);
  player.draw();
  requestAnimationFrame(updateTheCanvas);
};

updateTheCanvas();

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code == "KeyD") {
    moveRight();
    direction = "right";
  }
  if (event.code == "KeyA") {
    moveLeft();
    direction = "left";
  }
  if (event.code == "KeyS") {
    moveDown();
    direction = "down";
  }
  if (event.code == "KeyW") {
    moveUp();
    direction = "up";
  }
  if (event.code == "ArrowRight") {
    moveRight();
    direction = "right";
  }
  if (event.code == "ArrowLeft") {
    moveLeft();
    direction = "left";
  }
  if (event.code == "ArrowDown") {
    moveDown();
    direction = "down";
  }
  if (event.code == "ArrowUp") {
    moveUp();
    direction = "up";
  }
  if (event.code == "KeyF") {
    laser.draw();
  }
});
