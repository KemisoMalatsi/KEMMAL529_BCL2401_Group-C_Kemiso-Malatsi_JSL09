fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

   .catch(err => {
        // Use a default background image and author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1420745981456-b95fe23f5753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI5MjIxNzB8&ixlib=rb-4.0.3&q=80&w=1080)`

        document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
        .then(res => {
            if (!res.ok) {
                throw Error("Something went wrong")
            }
            return res.json()
        })
        .then(data => {


            document.getElementById("crypto-top").innerHTML = ` <img src=${data.image.small} />
            <span>${data.name}</span>`

            document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
            `
        })
        .catch(err => console.error(err))



function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-za", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            //console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}2x.png`
        })
        .catch(err => console.error(err))
});

async function getLocation() {
    const position = await navigator.geolocation.getCurrentPosition()
    console.log(position)
}
