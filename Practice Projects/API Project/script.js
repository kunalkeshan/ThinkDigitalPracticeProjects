document.addEventListener('DOMContentLoaded', () => {
    var chgQtBtn = document.querySelector('.changeQuoteBtn')
    var charac = document.querySelector('.name')
    var name = document.querySelector('.anime')
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json().then(data => {
            //console.log(data.quote)
            const quote = data["quote"]
            const character = data.character
            const anime = data.anime
            chgQtBtn.onclick = ()=>{
                //document.getElementById('inQuote').innerHTML = quote
                setTimeout(window.location.reload(), 200)
            }
            document.getElementById('inQuote').innerHTML = quote 
            charac.innerHTML = character
            name.innerHTML = anime
        }))
        
        
})