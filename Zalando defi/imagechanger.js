let myImage = document.getElementById('img');

myImage.onclick = function (){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "Assets/Night.jpg")
    {
        myImage.setAttribute('src', "Assets/nike1.jpg");
    }
    else if (mySrc === "Assets/nike1.jpg")
    {
        myImage.setAttribute('src', "Assets/photography.jpg")
    }
    else
    {
        myImage.setAttribute('src', "Assets/Night.jpg")
    }
}