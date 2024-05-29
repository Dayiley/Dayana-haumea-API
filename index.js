const artContainer = document.getElementById("artContainer");
const fetchArtBtn = document.getElementById("fetchArt");
const fetchExhBtn = document.getElementById("fetchExhibition");

// fetchArtBtn.addEventListener("click", () => {
//     fetch(
//       "https://api.artic.edu/api/v1/artworks/"
//      ) 
//      .then((res) => {
//         if (!res.ok) {
//           throw new Error("Invalid Request");
//         }
//         return res.json();
//       })
//       //.then((data) => console.log('mi data', data))//


//       .then((data) => {
//         // Get a random artwork from the response
//         const randomIndex = Math.floor(Math.random() * data.data.length);
//         const artwork = data.data[randomIndex];
//         // Extract the image URL from the artwork object
//         const imageUrl = artwork?.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'No image available';
//         displayImage(imageUrl);
//     })
//     .catch((error) => console.error("Error fetching Artwork:", error));
// });


// fetchExhBtn.addEventListener("click", () => {
//     fetch(
//       "https://api.artic.edu/api/v1/exhibitions/"
//      ) 

//      .then((res) => {
//         if (!res.ok) {
//           throw new Error("Invalid Request");
//         }
//         return res.json();
//       })
//       //.then((data) => console.log('mi data', data))
//       .then((data) => {
//         // Filtrar las exhibiciones que tienen una imagen disponible
//         const exhibitionsWithImages = data.data.filter(exhibition => exhibition.image_url);
        
//         // Verificar si hay exhibiciones con imágenes disponibles
//         if (exhibitionsWithImages.length > 0) {
//             // Seleccionar aleatoriamente una exhibición del subconjunto que contiene imágenes
//             const randomIndex = Math.floor(Math.random() * exhibitionsWithImages.length);
//             const exhibition = exhibitionsWithImages[randomIndex];
//             const exhibitionImageUrl = exhibition.image_url;
//             displayExhibitionImage(exhibitionImageUrl);
//         } else {
//             console.error("No exhibitions with images available");
//         }
//     })
//     .catch((error) => console.error("Error fetching Artwork:", error));
// })

//   function displayImage(imageUrl) {
//     artContainer.innerHTML = ''; // Clear previous image
//     const imageElement = document.createElement('img');
//     imageElement.src = imageUrl;
//     artContainer.appendChild(imageElement);
// }
// function displayExhibitionImage(imageUrl) {
//     artContainer.innerHTML = ''; // Clear previous image
//     // Mostrar la imagen en la interfaz de usuario
//     const imageElement = document.createElement('img');
//     imageElement.src = imageUrl;
//     document.body.appendChild(imageElement); // Agrega la imagen al cuerpo del documento o al contenedor deseado
// }



fetchArtBtn.addEventListener("click", () => {
    fetch(
      "https://api.artic.edu/api/v1/artworks/"
     ) 
     .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid Request");
        }
        return res.json();
      })
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const artwork = data.data[randomIndex];
        const imageUrl = artwork?.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : 'No image available';
        displayImg(imageUrl);
    })
    .catch((error) => console.error("Error fetching Artwork:", error));
});

fetchExhBtn.addEventListener("click", () => {
    fetch(
      "https://api.artic.edu/api/v1/exhibitions/"
     ) 
     .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid Request");
        }
        return res.json();
      })
      .then((data) => {
        const exhibitionsWithImages = data.data.filter(exhibition => exhibition.image_url);
        if (exhibitionsWithImages.length > 0) {
            const randomIndex = Math.floor(Math.random() * exhibitionsWithImages.length);
            const exhibition = exhibitionsWithImages[randomIndex];
            const exhibitionImageUrl = exhibition.image_url;
            displayImg(exhibitionImageUrl);
        } else {
            console.error("No exhibitions with images available");
        }
    })
    .catch((error) => console.error("Error fetching Artwork:", error));
})

function displayImg(imageUrl) {
    artContainer.innerHTML = ''; // Limpiar la imagen anterior
    // Mostrar la imagen en el contenedor de arte
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    artContainer.appendChild(imageElement); // Agregar la imagen al contenedor de arte
}