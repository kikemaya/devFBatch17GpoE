"use strict"

const d = document

const galleryContainer = d.getElementById('gallery-container')

const url = "https://picsum.photos/v2/list"

const printGallery = (imagen) => {
  const div = d.createElement('div')
  div.classList.add("grid-item")

  div.style.backgroundImage = `url(${imagen})`
  galleryContainer.appendChild(div)
}

const getImages = async () => {
  const response = await fetch(url)
  const data = await response.json()

  data.forEach(element => {
    printGallery(element.download_url)
  });
}

getImages()