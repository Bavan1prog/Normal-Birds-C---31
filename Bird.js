class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.speedmark =  [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y];
    this.speedmark.push(position);
    }
   
    for(var i = 0; i<this.speedmark.length;i++){
    image(this.smokeImage,this.speedmark[i][0],this.speedmark[i][1]); 
    }
  }
}
