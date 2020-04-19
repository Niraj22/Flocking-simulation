const flock = []
let alignSlider, cohesionSlider, seperationSlider
function setup(){
    textSize(8);
    createCanvas(windowWidth, windowHeight*(0.80))
    createP('Allingment')
    alignSlider = createSlider(0, 5, 1, 0.1)
    createP('Cohesion')
    cohesionSlider = createSlider(0, 5, 1, 0.1)
    createP('Seperation')
    seperationSlider = createSlider(0, 5, 1, 0.1)
    for (let index = 0; index < 150; index++) {
        flock.push(new Boid()) 
    }
    
}
function draw(){
    background(29)
    for(let boid of flock){
        boid. edges()
        boid.flock(flock)
        boid.update()
        boid.show()
    }
}