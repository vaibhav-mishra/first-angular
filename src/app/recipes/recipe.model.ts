export class Recipe {
    public name: string;
    public Description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath:  string){
        this.name = name;
        this.Description = desc;
        this.imagePath = imagePath;
    }
}

