var face="";
var body="";
var legs="";
var right_hand="";
var left_hand="";

function spiderface(){
    face="spiderman_face.png";
    document.getElementById("spider_face").style.border="2px solid black";
    console.log(face);
}

function thorface(){
    face="thor_face.png";
    document.getElementById("thor_face").style.border="2px solid black";
    console.log(face);
}

function ironface(){
    face="iron_face.png";
    document.getElementById("iron_face").style.border="2px solid black";
    console.log(face);
}

function hulkbody(){
    body="hulk_body.png";
    document.getElementById("hulk_body").style.border="2px solid black";
    console.log(body);
}

function spiderbody(){
    body="spiderman_body.png";
    document.getElementById("spider_body").style.border="2px solid black";
    console.log(body);
}

function ironbody(){
    body="ironman_body.png";
    document.getElementById("iron_body").style.border="2px solid black";
    console.log(body);
}

function spiderlegs(){
    legs="spideman_legs.png";
    document.getElementById("spider_legs").style.border="2px solid black";
    console.log(legs);
}

function hulklegs(){
    legs="hulk_legs.png";
    document.getElementById("hulk_legs").style.border="2px solid black";
    console.log(legs);
}

function ironlegs(){
    legs="iron_legs.png";
    document.getElementById("iron_legs").style.border="2px solid black";
    console.log(legs);
}

function thor_rh(){
    right_hand="thor_right_hand.png";
    document.getElementById("thor_right_hand").style.border="2px solid black";
    console.log(right_hand);
}

function iron_rh(){
    right_hand="ironman_right_hand.png";
    document.getElementById("iron_right_hand").style.border="2px solid black";
    console.log(right_hand);
}

function spider_rh(){
    right_hand="spiderman_right_hand.png";
    document.getElementById("spider_right_hand").style.border="2px solid black";
    console.log(right_hand);
}

function spider_lh(){
    left_hand="spiderman_left_hand.png";
    document.getElementById("spider_left_hand").style.border="2px solid black";
    console.log(left_hand);
}

function iron_lh(){
    left_hand="ironman_left_hand.png";
    document.getElementById("iron_left_hand").style.border="2px solid black";
    console.log(left_hand);
}

function thor_lh(){
    left_hand="thor_left_hand.png";
    document.getElementById("thor_left_hand").style.border="2px solid black";
    console.log(left_hand);
}

var canvas= new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
var player_x=30;
var player_y=30;
var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey==true && key_pressed=="80"){
        console.log("shift and p pressed together");
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && key_pressed=="77"){
        console.log("shift and m pressed together");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(key_pressed=="70"){
        new_image(face);
        console.log("f")
    }

    if(key_pressed=="66"){
        new_image(body);
        console.log("b")
    }

    if(key_pressed=="76"){
        new_image(legs);
        console.log("l")
    }

    if(key_pressed=="82"){
        new_image(right_hand);
        console.log("r")
    }

    if(key_pressed=="72"){
        new_image(left_hand);
        console.log("h")
    }

    if(key_pressed=="38"){
        up();
        console.log("up")
    }

    if(key_pressed=="40"){
        down();
        console.log("down")
    }

    if(key_pressed=="37"){
        left();
        console.log("left")
    }

    if(key_pressed=="39"){
        right();
        console.log("right")
    }
 }

 function up(){
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when up arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=350){
        player_y=player_y+block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when down arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when left arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=650){
        player_x=player_x+block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when right arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
