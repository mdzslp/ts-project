import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <div class="lamp_color">
     <div class="back_color"></div>     
     <button class="plus">🢁</button>
     <button class="minus">🢃</button> 
  </div>
  </div>
`;
let lamp: { color: string }[] = [
  { color: "red" },
  { color: "yellow" },
  { color: "green" },
];

let colorIndex = 0;

let colorsContainer = document.querySelector(".back_color") as HTMLDivElement;

for (let i = 0; i < lamp.length; i++) {
  let colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor = lamp[i].color;
  colorsContainer.appendChild(colorDiv);
}
let colors = document.querySelectorAll<HTMLDivElement>(".back_color div");

function switchColor() {
  colors[colorIndex].style.backgroundColor = lamp[colorIndex].color;
  for (let i = 0; i < colors.length; i++) {
    if (i !== colorIndex) {
      colors[i].style.backgroundColor = "gray";
    }
  }
}
switchColor();

document.querySelector(".minus")?.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % lamp.length;
  switchColor();
});

document.querySelector(".plus")?.addEventListener("click", () => {
  colorIndex = (colorIndex - 1 + lamp.length) % lamp.length;
  switchColor();
});
