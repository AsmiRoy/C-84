var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");

var bentley_width=100;
var bentley_height=90;
var bentley_x=200;
var bentley_y=200;
var bg_tag;
var bentley_tag;
 function add(){
     bg_tag=new Image();
     bg_tag.onload=upload_bg;
     bg_tag.src="Gallery.jpg";

     bentley_tag=new Image();
     bentley_tag.onload=upload_bentley;
     bentley_tag.src="Bentley.png";

     audi_tag=new Image();
     audi_tag.onload=upload_Audi;
     audi_tag.src="Audi.png";
 }
 function upload_bg(){
     ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
 }
 function upload_bentley(){
    ctx.drawImage(bentley_tag,bentley_x,bentley_y,bentley_width,bentley_height);
}
function upload_Audi(){
    ctx.drawImage(audi_tag,audi_x,audi_y,audi_width,audi_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var key=e.keyCode;
    console.log(key);
    if (key == '37'){
        console.log("left is pressed");
        Left();
    }
    if (key == '38'){
        console.log("up is pressed");
        up();}
        if (key == '39'){
            console.log("right is pressed");
            Right();}
            if (key == '40'){
                console.log("Down is pressed");
                Down();}
}
function up (){
    if (bentley_y > 0){
        bentley_y=bentley_y-10;
        upload_bg();
        upload_bentley();
    }
    
}
function Down(){
    if (bentley_y < 500){
        bentley_y=bentley_y+10;
        upload_bg();
        upload_bentley();
    }
    
}
function Left (){
    if (bentley_x > 0){
        bentley_x=bentley_x-10;
        upload_bg();
        upload_bentley();
    }
    
}
function Right (){
    if (bentley_x < 900){
        bentley_x=bentley_x+10;
        upload_bg();
        upload_bentley();
    }
    
}
var audi_width=100;
var audi_height=90;
var audi_x=200;
var audi_y=200;
var audi_tag;
