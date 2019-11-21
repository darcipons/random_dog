const button = document.querySelector('button') 
const pic = document.querySelector('div')

function getDogPic() {
  fetch(`https://random.dog/woof.json`)
  .then(response => response.json())
  .then(data => { 
    let existingImage = document.getElementById("picture");
    if (!!existingImage) {
      existingImage.remove('picture')
    }
    let ele = document.getElementById("dog-picture");
    let img = document.createElement("img");
    img.setAttribute("src", data.url);
    img.setAttribute("id", 'picture');
    ele.appendChild(img);
})
.catch(error => console.error(error))
}

button.addEventListener('click', getDogPic)
