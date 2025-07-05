// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xf0f0f0);

// const textureLoader = new THREE.TextureLoader();
// const myTexture = textureLoader.load("/textures/img2.jpg");

// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// // camera.position.set(2, 2, 2);
// camera.position.z = 4;

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("canvas"),
//   antialias: true,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
// scene.add(ambientLight);

// const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
// dirLight.position.set(8, 10, 7);
// scene.add(dirLight);

// const pointLight = new THREE.PointLight(0xffffff, 0.8);
// pointLight.position.set(5, 5, 2);
// scene.add(pointLight);

// const fileInput = document.getElementById("fileInput");
// fileInput.addEventListener("change", (e) => {
//   const image = e.target.files[0];
//   if (!image) return;

//   const url = URL.createObjectURL(image);

//   const loader = new THREE.TextureLoader();
//   loader.load(url, (texture) => {
//     const meshes = [
//       topMesh,
//       backmesh,
//       bottommesh,
//       leftmesh,
//       rightmesh,
//       MiddleMesh,
//       rightMiddlemesh,
//     ];

//     meshes.forEach((event) => {
//       (event.material.map = texture), (event.material.needsUpdate = true);
//     });
//   });
// });

// // top pannel
// const TopGeometry = new THREE.BoxGeometry(1.2, 0.02, 0.3);
// const topMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const topMesh = new THREE.Mesh(TopGeometry, topMaterial);
// topMesh.position.y = 0.315;
// scene.add(topMesh);

// //back pannel
// const backGeometry = new THREE.BoxGeometry(1.2, 0.65, 0.002);
// const backMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const backmesh = new THREE.Mesh(backGeometry, backMaterial);
// backmesh.position.z = -0.15;
// scene.add(backmesh);

// //bottom part
// const bottomBox = new THREE.BoxGeometry(1.2, 0.02, 0.3);
// const bottomMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const bottommesh = new THREE.Mesh(bottomBox, bottomMaterial);
// bottommesh.position.y = -0.32;
// scene.add(bottommesh);

// //left part
// const leftGeometry = new THREE.BoxGeometry(0.02, 0.619, 0.3);
// const leftMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const leftmesh = new THREE.Mesh(leftGeometry, leftMaterial);
// leftmesh.position.y = -0.001;
// leftmesh.position.x = -0.59;
// scene.add(leftmesh);

// //right part
// const righttGeometry = new THREE.BoxGeometry(0.02, 0.619, 0.3);
// const rrightMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const rightmesh = new THREE.Mesh(righttGeometry, rrightMaterial);
// rightmesh.position.y = -0.0;
// rightmesh.position.x = 0.59;
// scene.add(rightmesh);

// //Middle Pannel
// const middleGeo = new THREE.BoxGeometry(0.02, 0.61, 0.3);
// const middleMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const MiddleMesh = new THREE.Mesh(middleGeo, middleMaterial);
// MiddleMesh.position.x = 0.2;
// scene.add(MiddleMesh);

// const rightMiddleGeometry = new THREE.BoxGeometry(0.375, 0.02, 0.3);
// const rrightMiddleMaterial = new THREE.MeshStandardMaterial({
//   color: 0xb0b0b0,
//   map: myTexture,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const rightMiddlemesh = new THREE.Mesh(
//   rightMiddleGeometry,
//   rrightMiddleMaterial
// );
// rightMiddlemesh.position.x = 0.39;
// scene.add(rightMiddlemesh);

// // door
// const doorGeometry = new THREE.BoxGeometry(0.02, 0.61, 0.3);
// const doorMaterial = new THREE.MeshStandardMaterial({
//   color: 0x888888,
//   roughness: 0.6,
//   metalness: 0.2,
// });
// const doorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
// scene.add(doorMesh);

// // Pivot point
// const doorPivot = new THREE.Object3D();
// doorPivot.add(doorMesh);

// doorMesh.position.x = 0.01;
// doorMesh.position.y = 0;

// doorPivot.position.set(0.59, 0, 0);

// // OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// // Animate
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }
// animate();

// ===================Practice===============

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { depth } from 'three/tsl';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
camera.position.y = 1;


const canvas = document.querySelector("canvas.threejs");

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);



// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(8, 10, 7);
scene.add(dirLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

let meshes=[]

// Default texture
let currentTexture = null;








function createModel(width,height,depth){
  meshes.forEach((mesh)=>{
    scene.remove(mesh)
    mesh.geometry.dispose()
    mesh.material.dispose()
  })
  meshes=[]

  //base Material 
  const material = new THREE.MeshStandardMaterial({
    roughness: 0.5,
    metalness: 0.4,
    map: currentTexture
  });
  

  //top Side 
  const top=new THREE.Mesh(
    new THREE.BoxGeometry(width,0.025,depth),
    material.clone()
  )
  top.position.y=height/2-0.01
  meshes.push(top)
  scene.add(top)

  //Bottom 
  const bottom = new THREE.Mesh(
    new THREE.BoxGeometry(width,0.025,depth),
    material.clone()
  )
  bottom.position.y=-height/2+0.01,
  meshes.push(bottom)
  scene.add(bottom)


  //Back
const back = new THREE.Mesh(
  new THREE.BoxGeometry(width,height-0.04,0.02),
  material.clone()
)
back.position.z= - depth/2+0.01
meshes.push(back)
scene.add(back)

//left
const left= new THREE.Mesh(
  new THREE.BoxGeometry(0.02,height-0.04,depth),
material.clone()
)
left.position.x=-width/2 +0.01
meshes.push(left),
scene.add(left)

//Right
const right = new THREE.Mesh(
  new THREE.BoxGeometry(0.02,height-0.04,depth),
  material.clone()
)
right.position.x=width/2 -0.01
meshes.push(right)
scene.add(right)

document.getElementById("createModola").addEventListener("click",()=>{
 const width =parseFloat(document.getElementById("width").value) 
 const height = parseFloat(document.getElementById("height").value)
 const depth= parseFloat(document.getElementById("depth").value)

 createModel(width,height,depth)
})

} 
// initial model
createModel(1.2,0.7,0.3)


// / File input event: load the texture when user selects file
document.getElementById("fileInput").addEventListener("change", (event) => {
  const image = event.target.files[0];
  if (!image) return;

  const url = URL.createObjectURL(image);
  const loader = new THREE.TextureLoader();
  loader.load(url, (texture) => {
    currentTexture = texture;

    // Update all meshes with the new texture
    meshes.forEach((mesh) => {
      mesh.material.map = texture;
      mesh.material.needsUpdate = true;
    });
  });
});

// Button click: create new model
document.getElementById("createModola").addEventListener("click", () => {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  const depth = parseFloat(document.getElementById("depth").value);
  createModola(width, height, depth);
});


// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();