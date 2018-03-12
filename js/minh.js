setInterval(interval,1000);
var a=1;
var e=true;
h=1;
function interval(){
    var b=document.getElementById("move");
    var c=window.innerWidth;
    var d=parseInt(b.style.marginLeft.replace("px",""));
    
    if((d <= c) && e){
        a++;
        b.style.marginLeft=a*10+"px";
        if(d>=c){
            e=false;
        }
        
    }else{
        a--;
        b.style.marginLeft=a*10+"px";
        if(a<0){
            e=true;
        }
    }
    console.log(e,a,d<=c,d>c)
    
    
}



