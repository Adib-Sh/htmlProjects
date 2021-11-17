const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://data.whicdn.com/images/332200180/original.jpg" alt="team7">'
    title.innerHTML = 'This is a Test H3'
    excerpt.innerHTML = 'This is a Test P'
    name.innerHTML = 'Naruto'
    profile_img.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_7-ENeW9pOztEUM6p0_rEYW4LrpuK5VhEIDUTpDbSofmycuKzErLFRJCUM5JRS46CEA&usqp=CAU" alt="Naruto">'
    date.innerHTML = 'Nov 17 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
};
