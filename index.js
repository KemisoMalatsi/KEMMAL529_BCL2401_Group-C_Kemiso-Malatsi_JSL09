fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

   .catch(err => {









        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1420745981456-b95fe23f5753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI5MjIxNzB8&ixlib=rb-4.0.3&q=80&w=1080)`
    })