const flock = []
function setup(){
    createCanvas(windowWidth, windowHeight)
    for (let index = 0; index < 100; index++) {
        flock.push(new Boid()) 
    }
    
}
function draw(){
    background(0);
    for(let boid of flock){
        boid. edges()
        boid.flock(flock)
        boid.update()
        boid.show()
    }
}