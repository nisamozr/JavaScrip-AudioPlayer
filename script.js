let fillbar = document.querySelector('.fil')
let audios = ['Audio_one.mp3','Audio_two.mp3','Audio_three.mp3']
let covers = ['1.jpeg','2.jpg','3.jpg']
let currentTime = document.querySelector('.time')





//creat a object of a audio
let audio = new Audio()
let currentSong = 0


///whenever thewindo opentsong willautometicali play

window.onload = playSong

//function to play song when window loaded

function playSong(){
    audio.src=audios[currentSong]
    audio.play()

}

function togglePlayPause(){
    if(audio.paused){
        audio.play()
        let playBtn = document.querySelector(".play-pause")
        playBtn.innerHTML = '<i class="fa fa-pause"></i>'
        playBtn.style.paddingLeft="30px"
        
       
    }
    else{
        audio.pause()
        playBtn = document.querySelector(".play-pause")
        playBtn.innerHTML = '<i class="fa fa-play"></i>'
        playBtn.style.paddingLeft="33px"

    }
}
/// makethe fillbar dinamik

audio.addEventListener('timeupdate',function(){
    let position = audio.currentTime/audio.duration
    fillbar.style.width = position*100+"%"
    //lest work on duration
    convertTime(Math.round(audio.currentTime))
    // play next song when completed
    if(audio.ended){
        nextAudio()
    }
})

function convertTime(seconds){
    let min =Math.floor(seconds/60)
    // let fixe songtime
    let sec = seconds%60
    min = min<10?"0"+min:min
    sec = sec<10?"0"+sec:sec
    currentTime.textContent = min+":"+sec

    //fix thetotal time
    totalTime(Math.round(audio.duration))
}
function totalTime(seconds){
    let min =Math.floor(seconds/60)
    let sec = seconds%60

    min = min<10?"0"+min:min
    sec = sec<10?"0"+sec:sec
    currentTime.textContent += "&"+min+":"+sec

}

/// now lets work on  next and pre butoons

function nextAudio(){
    currentSong++
    if(currentSong>audios.length-1){
        currentSong=0
        
    }
    playSong()
    playBtn = document.querySelector(".play-pause")
    playBtn.innerHTML = '<i class="fa fa-pause"></i>'
    playBtn.style.paddingLeft="30px"

    $(".img img").attr("src",covers[currentSong])
    
}
function preAudio(){
    currentSong--
    if(currentSong<0){
        currentSong=audios.length-1
        
    }
    playSong()
    playBtn = document.querySelector(".play-pause")
    playBtn.innerHTML = '<i class="fa fa-pause"></i>'
    playBtn.style.paddingLeft="30px"

    $(".img img").attr("src",covers[currentSong])
    
}


function volumeUp(){
    
    
    audio.volume += 0.25
    
}

function volumeDown(){
    audio.volume -= 0.25

}

function mute(){
  //  let volumeUp = document.querySelector('.volume-up')
    
        if(audio.volume === 1){
            audio.volume = 0
            document.querySelector('.volume-up i').className="fa fa-volume-mute"
            
        }
        else{
            audio.volume=1
            document.querySelector('.volume-up i').className="fa fa-volume-up"

        }
    
}





