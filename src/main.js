import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const cadaverimages = [
  "./313 A1 Thumbnail images/311 a1 gap image.png",
  "./313 A1 Thumbnail images/311 a1 textures.png",
  "./313 A1 Thumbnail images/311 a1 arches.png",
  "./313 A1 Thumbnail images/311 a1 tech drawings.png",
];

const cadavermain= "./DSGN 313 a1.png";

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
          <div id="model1"><img src = "${cadavermain}" id =largeimage></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cadaverimages
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" id="gallery" />`
              )
              .join("")}
          </div>
          <h4 id="description">This composition examines the inherent disconnect that results from the many transformations each building material goes through on its path to the urban environment. Now more than ever, manufacturing and processing change the optics, tactility, and general quality of materials often to the point of being unrecognizable. To that end, this composition takes materials in the same assembly, in this case, an arch, and contrasts them with similar forms composed of the ground or flora that aid in their creation. The main ‘gap’ between each pair of arches and their divergent forms make the transformations that occur legible. In the background, technical plans for common residential buildings contrast an array of textures corresponding to each material. This process took some reworking, especially representing an abstract set of concepts in such a way that lent itself to an ordered composition. Resorting to different levels of abstraction and accepting some more surreal visual choices served to help tie the work together.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" id="gallery"/>`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>

      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" id="gallery"/>`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
