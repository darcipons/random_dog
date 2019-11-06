const button = document.querySelector('button') 
const pic = document.querySelector('div')

function getDogPic() {
  fetch(`https://random.dog/woof.json`)
  .then(response => response.json())
  .then(data => { // Prints result from `response.json()` in getRequest
    let existingImage = document.getElementById("picture");
    if (!!existingImage) {
      existingImage.remove('picture')
    }
    let ele = document.getElementById("dog-picture");
    let img = document.createElement("img");
    img.setAttribute("src", data.url);
    img.setAttribute("id", 'picture');
    ele.appendChild(img);
    //append ele to parent div
})
.catch(error => console.error(error))
}

button.addEventListener('click', getDogPic)
