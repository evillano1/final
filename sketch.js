let brush = "purple"; //redsquare
let x = 200;
let y = 200;
let extraCanvas;


let ball1 ={x: 10, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball2 ={x: 30, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball3 ={x: 50, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball4 ={x: 70, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball5 ={x: 90, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball6 ={x: 110, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball7 ={x: 130, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball8 ={x: 150, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball9 ={x: 170, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball10 ={x: 190, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball11 ={x: 210, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball12 ={x: 230, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball13 ={x: 250, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball14 ={x: 270, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball15 ={x: 290, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball16 ={x: 310, y:1, size: 12, vx: 0, vy:2, color:[255]}

let balls = [ball1, ball2, ball3, ball4, ball5, ball6,ball7,ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15, ball16]



let ball01 ={x: 630, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball02 ={x: 610, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball03 ={x: 590, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball04 ={x: 570, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball05 ={x: 570 - 20, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball06 ={x: 570 - 40, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball07 ={x: 570 - 60, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball08 ={x: 570 - 80, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball09 ={x: 570 - 100, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball010 ={x: 570 - 120, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball011 ={x: 570 - 140, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball012 ={x: 430 - 20, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball013 ={x: 430 - 40, y:1, size: 12, vx: 0, vy:3, color:[255]}
let ball014 ={x: 430 - 60, y:1, size: 12, vx: 0, vy:2, color:[255]}
let ball015 ={x: 430 - 80, y:1, size: 12, vx: 0, vy:1, color:[255]}
let ball016 ={x: 430 - 100, y:1, size: 12, vx: 0, vy:2, color:[255]}

let balls2 = [ball01, ball02, ball03, ball04, ball05, ball06, ball07, ball08, ball09, ball010, ball011, ball012, ball013, ball014, ball015, ball016]





function setup() {


  createCanvas(640, 480);
  extraCanvas = createGraphics(640, 480);
  extraCanvas.clear();
  background(0);
}



function draw() {

  let color_1 = color(247, 32, 78)//(255, 40, 2)
      let color_2 = color(150, 6, 6)


      let fade_amount = mouseY / height
      let lerped_color = lerpColor(color_1, color_2, fade_amount)

      background(lerped_color)

  // No trails
  // background(255, 40, 2);
  x += random(-5, 5);
  y += random(-5, 5);


  let color_3 = color(150, 6, 6)
  let color_4 = color (247, 32, 78)


      let fade_amount2 = mouseY / height
      let lerped_color2 = lerpColor(color_3, color_4, fade_amount2)

let color_5 = color(121, 237, 140)//(138, 52, 57)
let color_6 = color(232, 255, 236)//(252, 184, 188)

      let fade_amount3 = mouseY / height
      let lerped_color3 = lerpColor(color_6, color_5, fade_amount3)




  // trails
  if (mouseIsPressed) {

    if (brush == "globe"){
    extraCanvas.noFill()
    extraCanvas.stroke(255, 255, 255, 70);
    extraCanvas.strokeWeight(1)
    extraCanvas.noFill()
    extraCanvas.ellipse(320, 240, random(0,600), random(0,300))
    }

    if (brush == "eraser"){
    extraCanvas.stroke (lerped_color2);
    extraCanvas.strokeWeight(1);
    extraCanvas.fill(lerped_color);
    //extraCanvas.rectMode(CORNERS)
    extraCanvas.circle(mouseX + random(-100,100) , mouseY + random(-50,50), random(1, 20)  )
    //extraCanvas.rectMode(CORNER)
    }


    if (brush == "white"){
    extraCanvas.stroke(0,0,0, 100)
    extraCanvas.strokeWeight(1)
    extraCanvas.fill(255)
    extraCanvas.circle(mouseX + random(-320, 320) , mouseY + random(-240, 240), random(1, 20))
    }

    if (brush == "blue"){
    extraCanvas.stroke (199, 240, 206, random(0, 180))//(250, 167, 185, random(180, 280))//(144, 167, 232, random(0, 180))
    extraCanvas.strokeWeight(5)
    extraCanvas.fill(246, 235, 255, 80)
    extraCanvas.circle(mouseX + random(-100, 100), mouseY + random(-200, 200), random(2, 30))
    // line(mouseX, mouseY, pmouseX, pmouseY)
    }

    if (brush == "whiteline"){
    extraCanvas.stroke(255, 255, 255, 100)
    extraCanvas.strokeWeight(1)
    extraCanvas.line(mouseX , 0 , mouseX, 480)
    // line(mouseX, mouseY, pmouseX, pmouseY)
    }

    if (brush == "yellowline"){
    extraCanvas.stroke(random(192,232), random(158,198), 185)//(255, 221, random(0, 255), 100)
    extraCanvas.strokeWeight(1)
    extraCanvas.line(0, mouseY, 640, mouseY)
    // line(mouseX, mouseY, pmouseX, pmouseY)
    }

    if (brush == "pinkline"){
    extraCanvas.stroke(250, 182, 220, 200)
    extraCanvas.strokeWeight(1)
    extraCanvas.line(mouseX + random (0, 640), mouseY , mouseX , mouseY + random (0, 480))
    // line(mouseX, mouseY, pmouseX, pmouseY)
  }

    if (brush == "redsquare"){
    extraCanvas.stroke (lerped_color2)
    extraCanvas.noFill()
    extraCanvas.strokeWeight(1)
    extraCanvas.square(mouseX , mouseY, 0 - random(0, 200))
    // line(mouseX, mouseY, pmouseX, pmouseY)
    }
}





  image(extraCanvas, 0, 0);
    // fill(151, 230, 172);
    // stroke(255);
    // rectMode(CENTER);
    // rect(x, y, 20, 20);



    for (let ball of balls) {

       noStroke()
       fill(ball.color)
       circle(ball.x, ball.y, ball.size)

       ball.x = ball.x + ball.vx

       if (ball.x >= width){
         ball.vx = -ball.vx
       }

       if (ball.x <= 0){
         ball.vx = -ball.vx
       }


       ball.vy = ball.vy //+ .2 //gravity

       ball.y = ball.y + ball.vy

       if (ball.y >= height){
         ball.vy = -ball.vy //* 1.0 //bounce
       }

       if (ball.y <= 0){
         ball.vy = -ball.vy
       }
    }

    for (let ball of balls2) {

       noStroke()
       fill(ball.color)
       circle(ball.x, ball.y, ball.size)

       ball.x = ball.x + ball.vx

       if (ball.x >= width){
         ball.vx = -ball.vx
       }

       if (ball.x <= 0){
         ball.vx = -ball.vx
       }


       ball.vy = ball.vy //+ .3 //gravity

       ball.y = ball.y + ball.vy

       if (ball.y >= height){
         ball.vy = -ball.vy //* 1.0 //bounce
       }

       if (ball.y <= 0){
         ball.vy = -ball.vy
       }
    }





  //buttons
  // fill(204, 162, 252)  //purple
  // rect(10, 10, 30, 30)
  //
  // fill(255, 255, 255)//white
  // rect(210, 10, 30, 30)

  strokeWeight(2)
  stroke(255)
  line(0, 480, ball1.x, ball1.y)
  line(0, 480, ball2.x, ball2.y)
  line(0, 480, ball3.x, ball3.y)
  line(0, 480, ball4.x, ball4.y)
  line(0, 480, ball5.x, ball5.y)
  line(0, 480, ball6.x, ball6.y)
  line(0, 480, ball7.x, ball7.y)
  line(0, 480, ball8.x, ball8.y)
  line(0, 480, ball9.x, ball9.y)
  line(0, 480, ball10.x, ball10.y)
  line(0, 480, ball11.x, ball11.y)
  line(0, 480, ball12.x, ball12.y)
  line(0, 480, ball13.x, ball13.y)
  line(0, 480, ball14.x, ball14.y)
  line(0, 480, ball15.x, ball15.y)
  line(0, 480, ball16.x, ball16.y)


  line(640, 480, ball01.x, ball01.y)
  line(640, 480, ball02.x, ball02.y)
  line(640, 480, ball03.x, ball03.y)
  line(640, 480, ball04.x, ball04.y)
  line(640, 480, ball05.x, ball05.y)
  line(640, 480, ball06.x, ball06.y)
  line(640, 480, ball07.x, ball07.y)
  line(640, 480, ball08.x, ball08.y)
  line(640, 480, ball09.x, ball09.y)
  line(640, 480, ball010.x, ball010.y)
  line(640, 480, ball011.x, ball011.y)
  line(640, 480, ball012.x, ball012.y)
  line(640, 480, ball013.x, ball013.y)
  line(640, 480, ball014.x, ball014.y)
  line(640, 480, ball015.x, ball015.y)
  line(640, 480, ball016.x, ball016.y)

  // line(ball16.x, ball16.y, ball016.x, ball016.y)
  // line(ball15.x, ball15.y, ball015.x, ball015.y)

  line(ball15.x, ball15.y, ball016.x, ball016.y)
  line(ball16.x, ball16.y, ball015.x, ball015.y)



  line(ball14.x, ball14.y, ball013.x, ball013.y)
  line(ball13.x, ball13.y, ball014.x, ball014.y)

  line(ball12.x, ball12.y, ball011.x, ball011.y)
  line(ball11.x, ball11.y, ball012.x, ball012.y)



//   let line1 = { x: ball16.x, y: ball16.y}
//   let line2 = { x: ball016.x, y: ball016.y}




}



function mouseClicked() {

    print(int(mouseX), int(mouseY))


      if (mouseX > 0 && mouseX < 320 && mouseY > 0 && mouseY < 120){
        print("1st button")
        brush = "white"
        }

      else if (mouseX > 320 && mouseX < 640 && mouseY > 0 && mouseY < 120){
        print("2nd button")
        brush = "blue"
        }

      else if (mouseX > 160 && mouseX < 480 && mouseY > 120 && mouseY < 300){
        print("3rd button")
        brush = "globe"
        }

      else if (mouseX > 0 && mouseX < 160 && mouseY > 120 && mouseY < 360){
          print("4th button")
          brush = "pinkline"
          }

      else if (mouseX > 480 && mouseX < 640 && mouseY > 120 && mouseY < 360){
          print("4th button")
          brush = "redsquare"
          }

      else if (mouseX > 0 && mouseX < 640 && mouseY > 360 && mouseY < 420){
        print("5th button")
        brush = "whiteline"
        }

      else if (mouseX > 0 && mouseX < 640 && mouseY > 420 && mouseY < 480){
        print("6th button")
        brush = "yellowline"
        }

        else if (mouseX > 160 && mouseX < 480 && mouseY > 300 && mouseY < 360){
          print("7th button")
          brush = "eraser"
          }



}
