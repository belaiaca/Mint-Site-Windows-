function toggleVideo(){
    const trailer=document.querySelector('.trailer');
    const video=document.getElementById('videotrailer');
    trailer.classList.toggle('active')
    video.currentTime=0;
    video.pause();
  }