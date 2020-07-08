// Name: Junseo Bae
// Assignment Name: Final Project Prototype
// Course Number: CS099
// Term & Year: Spring 2020s

class StartMenu{
    constructor(){
        const center_x = width / 2;
        this.play = new Button(center_x, height * 2/5, "Play");
        this.options = new Button(center_x, height * 3/5, "Options");
        this.credits = new Button(center_x, height * 4/5, "Credits");
    }

    Update(){
        if(this.play.DidClickButton()){
            console.log("Play!");
            CurrentScene = GAME_SCREEN;
        } else if(this.options.DidClickButton())
        {
            console.log("Options!");
            CurrentScene = OPTIONS_SCREEN;
        } else if(this.credits.DidClickButton()){
            console.log("Credits!");
            CurrentScene = CREDITS_SCREEN;
        }
      
    }

    Draw(){
        DrawTitle("Main Menu");
        this.play.DrawButton();
        this.options.DrawButton();
        this.credits.DrawButton();
    }
}