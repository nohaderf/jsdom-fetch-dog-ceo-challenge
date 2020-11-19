console.log('%c HI', 'color: firebrick')

const dogContainer = document.getElementById("dog-image-container")

fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(data => displayDogs(data.message)) 


function displayDogs(doggos){
    
    // for(dog of doggos){
    //     const image = document.createElement("img")
    //     image.src = dog
    //     dogContainer.append(image)
    // }

    doggos.forEach(dog => {
        const dogImage = document.createElement("img")
        dogImage.src =  dog
        dogContainer.append(dogImage)
    })
}

fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => fetchBreed(data.message))

const dogBreed = document.querySelector("#dog-breeds")

function fetchBreed(breeds){
    for (breed in breeds){
        const dogLi = document.createElement("li")
        dogLi.textContent = breed
        dogBreed.append(dogLi) 
    }
}

dogBreed.addEventListener("click", function(event){
    const li = dogBreed.querySelector("li")

    if (event.target.textContent && event.target.li == "LI") {
        li.style.color = "red"
    }
})
