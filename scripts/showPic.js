/**
 * Created by Administrator on 2016/3/6.
 */
function showPic(whichpic){
    var source= whichpic.getAttribute("href");
    var placeholder=document.getElementById("display");
    placeholder.setAttribute("src",source);
}