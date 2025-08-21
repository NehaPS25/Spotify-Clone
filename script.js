console.log("welcome to spotify");
let songIndex =0;
let audioElement = new Audio('songs/2.mp3');;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
let songs = [
    
       { songName:"tum sea milne ka " ,     filePath:"songs/2.mp3" , coverPath : "cover/cover1.jpg"} ,
        {songName:"apna dil awara" ,        filePath:"songs/3.mp3" , coverPath : "cover/2.jpg" },
        {songName:"mere swapno ki rani " ,  filePath:"songs/4.mp3" , coverPath : "cover/3.jpg" },
        {songName:"bhuladen " ,             filePath:"songs/5.mp3" , coverPath : "cover/4.jpg" },
        {songName:"saalame isq" ,           filePath:"songs/6.mp3" , coverPath : "cover/5.jpg" },
        {songName:"tumhari kahani " ,       filePath:"songs/7.mp3" , coverPath : "cover/6.jpg"  },
        {songName:"teri meri kahani " ,       filePath:"songs/8.mp3" , coverPath : "cover/7.jpg" 
    } ,
]
console.log(masterPlay, audioElement, gif);


songItems.forEach((element,i)=>{
    // console.log(element,i);
//  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

console.log(element, i);

// Retrieve the img and songName elements within each songItem
let imgElement = element.getElementsByTagName("img")[0];
let songNameElement = element.getElementsByClassName("songName")[0];

// Check if the img and songName elements exist
if (imgElement && songNameElement) {
    // Set the src attribute of the img element to the coverPath
    imgElement.src = songs[i].coverPath;

    // Set the text content of the songName element
    songNameElement.innerText = songs[i].songName;
} else {
    // Log an error if the elements are not found
    console.error("Image or songName element not found in songItem:", i);
}
})


masterPlay.addEventListener('click',()=>{
   
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');


   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//   console.log(progress);
myProgressBar.value= progress;









})
//listen to event 


myProgressBar.addEventListener('input',()=>{
    
console.log(" is it entering ")
if (!isNaN(myProgressBar.value) && isFinite(audioElement.duration)) {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
}
    // audioElement.currentTime =myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
       element.classList.remove('fa-circle-pause');
element.classList.add('fa-circle-play');

})




}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src=`songs/${songIndex+1}.mp3`;
         mastersong.innerText = songs[songIndex].songName;

         audioElement.currentTime=0;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=6)
  {
    songIndex =0;
  }else{
    songIndex+=1;

  }
  audioElement.src=`songs/${songIndex+1}.mp3`;
  mastersong.innerText = songs[songIndex].songName;
 

  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');



})



document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
      songIndex =0;
    }else{
      songIndex-=1;
  
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersong.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  
  
  
  })


