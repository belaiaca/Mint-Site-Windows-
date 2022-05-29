

const txtAnime= document.querySelector('h1')

new Typewriter(txtAnime, {
    deleteSpeed:25,
    loop: true 
})
.typeString('Be')
.typeString('come a god')
.pauseFor(500)
.deleteChars(10)
.typeString('<span style="color:#2A293E"> Defiant')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:#798EA4"> Different')
.pauseFor(1000)
.start()
