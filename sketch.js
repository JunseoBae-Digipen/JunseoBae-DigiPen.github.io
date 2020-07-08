// Name: Junseo Bae
// Assignment Name: Final Project Prototype
// Course Number: CS099
// Term & Year: Spring 2020s

const START_MENU = 0;
//const MAIN_MENU = 1;
const PLAY_GAME = 2;
//const CREDIT = 3;
//const OPTIONS = 4;
let GameMode = START_MENU;
let GAME;
/*let InitialScreen;
let MainMenuScreen;
let CreditMenuScreen;
let OptionsMenuScreen;*/

function setup() {
  let dimension = TILE_SIZE * MAP_SIZE;
  createCanvas(dimension, dimension);
  GAME = new Game();
 /* MainMenuScreen = new MainMenu();
  CreditMenuScreen = new Credit();
  OptionsMenuScreen = new Options();
  InitialScreen = new StartMenu();*/
}

function draw() {
  background(255);
  switch (GameMode) {
    case START_MENU:
      /*InitialScreen.Update();
      InitialScreen.Draw();*/
      textAlign(CENTER, CENTER);
      text("Press any key to play the game!", width / 2, height / 2);
      break;
      /*case MAIN_MENU:
      text("Googly Eyes' Adventure", width / 2, 50);
      text("Play the game", width / 2, 150);
      text("Option", width / 2, 250);
      text("Credit", width / 2, 350);
      break;*/
      /*case CREDIT:
      
      break;
      case OPTIONS:
      
      break;*/
      case PLAY_GAME:
      GAME.Draw();
      break;
  }
}

function keyPressed() {
  switch (GameMode) {
    case START_MENU:
      GameMode = PLAY_GAME;
      GAME = new Game();
      break;
    /*case MAIN_MENU:
      GameMode = PLAY_GAME;
      GAME = new Game();
      break;*/
    case PLAY_GAME:
      GAME.Interaction();
      break;
  }
}