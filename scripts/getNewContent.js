function getNewContent(){
    var request=getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange= function( ) {

            if(request.readyState==4){

                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                alert(request.responseText);

                para.appendChild(txt);
                alert(document.getElementById("new"));

                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    }
    else{
        alert('Sorry,your browser doesn\'t support XMLHttpRequest');
    }

}
addLoadEvent(getNewContent);