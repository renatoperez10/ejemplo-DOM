const gatos = [
  {
    nombre: "Barbacoa",
    url: "https://pbs.twimg.com/profile_images/1202494510929977345/76NlkcY2.jpg"
  },
  {
    nombre: "Lorenzo",
    url: "https://i.pinimg.com/originals/3a/f8/0c/3af80cc6e7f3ed65321ec90be975d81e.jpg"
  },
  {
    nombre: "Whisky",
    url: "https://i.pinimg.com/originals/36/5d/5c/365d5c6a433cb984941de4e20aec76bc.png"
  }
]

const liBase = document.querySelector(".gatete");
const gatetes = document.querySelector(".gatetes");

for (const gato of gatos) {
  const nuevoLiGato = liBase.cloneNode();
  const nuevaImgGato = document.createElement("img");
  nuevaImgGato.src = gato.url;
  nuevaImgGato.title = `Este gato se llama ${gato.nombre}`;
  nuevoLiGato.append(nuevaImgGato);
  gatetes.append(nuevoLiGato);
}
liBase.remove();

document.body.addEventListener("click", e => {
  if (e.target.classList.contains("gatete")) {

  }
});
