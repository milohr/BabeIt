
function clicked()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
   /* document.getElementById("logo").className = 'rotate';*/
   
        if(i===images.length) i=0;
        console.log('url("'+images[i]+'") no-repeat center center fixed;');
        var image = "url(\""+images[i]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
        
        
        i++;
    
}

function showTracks()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
  
        var image = "url(\""+images[0]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
}

function showTracks()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
  
        var image = "url(\""+images[0]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
}

function showAlbums()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
  
        var image = "url(\""+images[1]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
}
function showArtists()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
  
        var image = "url(\""+images[2]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
}

function showPlaylists()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
  
        var image = "url(\""+images[3]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
}


function showInfo()
{
    //document.getElementById("btn").innerHTML+= ":)";
    console.log("logo was clicked");
  
        var image = "url(\""+images[4]+"\") no-repeat center center";
        document.getElementById("babeImg").style.background= image;
}



var images = ["img/tracks_view.png","img/albums_view.png","img/artists_view.png","img/playlists_view.png","img/info_view.png"]



document.getElementById("sec_2").addEventListener("click", clicked);
document.getElementById("tracks").addEventListener("click", showTracks);
document.getElementById("artists").addEventListener("click", showArtists);
document.getElementById("albums").addEventListener("click", showAlbums);
document.getElementById("playlists").addEventListener("click", showPlaylists);
document.getElementById("online").addEventListener("click", showInfo);

var i=0;
