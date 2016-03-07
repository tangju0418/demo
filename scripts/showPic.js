/**
 * Created by Administrator on 2016/3/6.
 */
function showPic(whichPic){
    var source= whichPic.getAttribute("href");
    var placeholder=document.getElementById("display");
    placeholder.setAttribute("src",source);
    var text=whichPic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
}
//function countBodyChildren(){
//    var body_element=document.getElementsByTagName("body")[0];

   // alert(body_element.childNodes.length);
   // alert(body_element.nodeType);
//}

//window.onload=countBodyChildren;
//window.onload=prepareLinks;
//function prepareLinks(){
//    var links=document.getElementsByTagName("a");
//    for(var i=0;i<links.length;i++){
//        if(links[i].getAttribute("class")=="popup"){
//            links[i].onclick=function(){
//                popUp(this.getAttribute("href"));
//                return false;
//            }
//        }
//    }
//}
//function popUp(winURL){
//    window.open(winURL,"popup","width=320,height=480");
//}


function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    var gallery=document.getElementById("imageGallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            showPic(this);
            return false;
        }
    }
}
window.onload=prepareGallery;