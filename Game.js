// Name: Junseo Bae
// Assignment Name: Final Project Prototype
// Course Number: CS099
// Term & Year: Spring 2020s

const PATH = 1;
const WALL = 2;
const KEY = 3;
const CHEST = 4;
const PORTAL = 5;

const MAP_SIZE = 15;
const TILE_SIZE = 32;

let googly_eyes;

function preload(){
  googly_eyes = loadImage("Media/googly eyes.jpg");
}

function randomInt(max) {
  return int(random(max));
}

function randomIntMinMax(min, max) {
  return int(random(min, max));
}

class Game {
  constructor() {
    this.playerX = 0;
    this.playerY = 0;
    this.world = make_2d_array(MAP_SIZE, MAP_SIZE);
    this.CreateWorld();
    this.map_count = 0;
    this.key_count = 0;
  }
  
  Interaction(){
    let didPlayerMove = false;
    let newRow = this.playerY;
    let newColumn = this.playerX;
    let keycount = this.key_count;
    if(key == 'w'){
      didPlayerMove = true;
      --newRow;
    }else if(key == 's'){
      didPlayerMove = true;
      ++newRow;
    }
    else if(key == 'a'){
      didPlayerMove = true;
      --newColumn;
    }
    else if(key == 'd'){
      didPlayerMove = true;
      ++newColumn;
    }
    
    if(!didPlayerMove || this.world[newRow][newColumn] == WALL)
      return;
    this.playerX = newColumn;
    this.playerY = newRow;
    
    let tile_type = this.world[newRow][newColumn];
    if(tile_type == KEY){
      this.world[newRow][newColumn] = PATH;
      this.key_count++;
    }else if(tile_type == CHEST){
      this.world[newRow][newColumn] = PATH;
    }else if(tile_type == PORTAL){
       this.CreateWorld();
       this.map_count++;
    }
    
    if(this.map_count == 5){
       GameMode = START_MENU;
       return;
    }
  }
  
  CreateWorld() {
    for (let row = 0; row < MAP_SIZE; row++) {
      for (let column = 0; column < MAP_SIZE; column++) {
        const isTopBottomWall = row == 0 || row == MAP_SIZE - 1;
        const isLeftRightWall = column == 0 || column == MAP_SIZE - 1;
        if (isTopBottomWall || isLeftRightWall || randomInt(10) == 0) {
          this.world[row][column] = WALL;
        } else if (randomInt(100) == 0) {
          this.world[row][column] = KEY;
        } else if (randomInt(100) == 0) {
          this.world[row][column] = CHEST;
        } else {
          this.world[row][column] = PATH;
        }
      }
    }
    this.playerX = randomIntMinMax(1, MAP_SIZE - 1)
    this.playerY = randomIntMinMax(1, MAP_SIZE - 1)
    let portal_x = randomIntMinMax(1, MAP_SIZE - 1)
    let portal_y = randomIntMinMax(1, MAP_SIZE - 1)
    this.world[portal_y][portal_x] = PORTAL;
  }

  Draw() {
    this.DrawWorld();
    push()
    let half_tile = TILE_SIZE / 2;
    translate(this.playerX * TILE_SIZE + half_tile, this.playerY * TILE_SIZE + half_tile);
    scale(0.05);
    imageMode(CENTER);
    image(googly_eyes, 0, 0);
    pop()
  }

  DrawWorld() {
    for (let row = 0; row < MAP_SIZE; row++) {
      let y = TILE_SIZE * row
      for (let column = 0; column < MAP_SIZE; column++) {
        let x = TILE_SIZE * column;
        switch (this.world[row][column]) {
          case PATH:
            break;
          case WALL:
            fill('orange');
            square(x, y, TILE_SIZE);
            break;
          case KEY:
            push()
            fill('gold');
            translate(x, y);
            let key_location = TILE_SIZE / 2;
            let key_size = TILE_SIZE / 4;
            circle(key_location, key_location, key_size);
            pop()
            break;
          case CHEST:
            push()
            fill('silver');
            //rectMode(CENTER);
            rect(x, y + TILE_SIZE / 4, TILE_SIZE, TILE_SIZE / 2);
            pop()
            break;
          case PORTAL:
            fill(0, 0, 255);
            push();
            //ellipseMode(CENTER);
            ellipse(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE / 2, TILE_SIZE);
            pop();
            break;
        }
      }
    }
  }
}