const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")
const move = document.querySelector(".login-btn")
const go = document.querySelector(".login > button")

dropDown.addEventListener("mouseenter", () => {
    menu.classList.remove("hidden")
})
move.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href="login.html";
})
go.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href="login.html";
})
menu.addEventListener("mouseleave", () => {
    menu.classList.add("hidden")
})

let video = document.querySelectorAll("video")
video.forEach(video => {
    let playPromise = video.play()
    if(playPromise !== undefined) {
        playPromise.then(() => {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    video.muted = false
                    if(entry.intersectionRatio !== 1 && !video.paused){
                        video.pause()
                    } else if (entry.intersectionRatio > 0.5 && video.paused) {
                        video.play()
                    }
                })
            }, {threshold: 0.5})
            observer.observe(video)
        })
    }
})
let btnText1 = document.querySelector('#btnText1');
let btnText2 = document.querySelector('#btnText2');
let btnText3= document.querySelector('#btnText3');
let btnText4 = document.querySelector('#btnText4');
let btnText5 = document.querySelector('#btnText5');
let love1= document.querySelector('#love1');
let heart1= document.querySelector('.heart1');
let love2= document.querySelector('#love2');
let heart2= document.querySelector('.heart2');
let love3= document.querySelector('#love3');
let heart3= document.querySelector('.heart3');
let love4= document.querySelector('#love4');
let heart4= document.querySelector('.heart4');
let love5= document.querySelector('#love5');
let heart5= document.querySelector('.heart5');
 btnText1.addEventListener('click', () => {
    btnText1.innerText = 'following';
    
});
 btnText2.addEventListener('click', () => {
    btnText2.innerText = 'following';
    
});
 btnText3.addEventListener('click', () => {
    btnText3.innerText = 'following';
    
});
 btnText4.addEventListener('click', () => {
    btnText4.innerText = 'following';
    
    
});
 btnText5.addEventListener('click', () => {
    btnText5.innerText = 'following';
    
    
});
heart1.addEventListener('click', () => {
    heart1.innerText = '❤️';
    love1.innerText = '11.61M';
    
});
heart2.addEventListener('click', () => {
    heart2.innerText = '❤️';
    love2.innerText = '1.41M';
    
});
heart3.addEventListener('click', () => {
    heart3.innerText = '❤️';
    love3.innerText = '30.61M';
    
});
heart4.addEventListener('click', () => {
    heart4.innerText = '❤️';
    love4.innerText = '171.61k';
    
});
heart5.addEventListener('click', () => {
    heart5.innerText = '❤️';
    love5.innerText = '5.81M';
    document.querySelector('#videoclip5').src="https://v16-webapp.tiktok.com/b5dec7038e0137887a4319d4b679a347/629b2be8/video/tos/alisg/tos-alisg-pve-0037c001/7c9b839b91a947c7a1554cffa3e40db6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=1022&bt=511&btag=80000&cs=0&ds=2&ft=eXd.6HFJMyq8ZT8wkwe2Nwyhml7Gb&mime_type=video_mp4&qs=0&rc=O2g3aDU5ZWkzZzdlMzU4OkBpampyczw6Znk1PDMzODczNEBhMDFjNl9gNTMxMy8zNTQ1YSNvXi5gcjRnZTNgLS1kMS1zcw%3D%3D&l=202206040354360102450431461E0CEBC1";
});


