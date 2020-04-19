class Boid {
    constructor(){
        this.position = createVector(random(width),random(height))
        this.velocity = p5.Vector.random2D()
        this.velocity.setMag(random(2,4))
        this.acceleration = createVector()
        this.maxForce = 0.2
        this.maxSpeed = 4
    }
    edges(){
        if(this.position.x > width){
            this.position.x =0
        } else if (this.position.x < 0 ){
            this.position.x =width
        }
        if(this.position.y > height){
            this.position.y =0
        } else if (this.position.y < 0 ){
            this.position.y = height
        }
    }

    align(boids){
        let perceptionRadius = 50 //define the perception radius
        let total =0
        let steering = createVector()
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y,other.position.x,other.position.y) //check the distance
            if(other != this && d < perceptionRadius){ //check if someone is near me 
                steering.add(other.velocity)
                total++
            }
        }
        if(total > 0)
        {
            steering.div(total)
            steering.setMag(this.maxSpeed)
            steering.sub(this.velocity)
            steering.limit(this.maxForce)
           
       }
       return steering
    }

    cohesion(boids){
        let perceptionRadius = 50 //define the perception radius
        let total =0
        let steering = createVector()
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y,other.position.x,other.position.y) //check the distance
            if(other != this && d < perceptionRadius){ //check if someone is near me 
                steering.add(other.position)
                total++
            }
        }
        if(total > 0)
        {
            steering.div(total)
            steering.sub(this.position)
            steering.setMag(this.maxSpeed)
            steering.sub(this.velocity)
            steering.limit(this.maxForce)
           
       }
       return steering
    }

    seperation(boids){
        let perceptionRadius = 50 //define the perception radius
        let total =0
        let steering = createVector()
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y,other.position.x,other.position.y) //check the distance
            if(other != this && d < perceptionRadius){ //check if someone is near me 
                let diffrence = p5.Vector.sub(this.position, other.position)
                diffrence.div(d*d)
                steering.add(diffrence)
                total++
            }
        }
        if(total > 0)
        {
            steering.div(total)
            steering.setMag(this.maxSpeed)
            steering.sub(this.velocity)
            steering.limit(this.maxForce)
           
       }
       return steering
    }


    flock(boids){
        this.acceleration.mult(0)
        let allingment = this.align(boids)
        let cohesion = this.cohesion(boids)
        let seperation = this.seperation(boids)
        //accumulating allignment and cohesion force simply by adding
        this.acceleration.add(seperation) 
        this.acceleration.add(allingment) 
        this.acceleration.add(cohesion)
    }



    update(){
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.maxSpeed)
    }

    show(){
        strokeWeight(4)
        stroke(255,9,25)
        point(this.position.x, this.position.y)
    }
}