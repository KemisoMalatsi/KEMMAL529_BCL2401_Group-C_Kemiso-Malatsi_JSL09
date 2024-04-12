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
        })
        .catch(err => console.error(err))