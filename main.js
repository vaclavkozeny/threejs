import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var xSpeed = 0.0001;
var ySpeed = 0.0001;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const Planegeometry = new THREE.PlaneGeometry(50, 50);
const Planematerial = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(Planegeometry, Planematerial);
const Dlight = new THREE.DirectionalLight(0xffffff, 3);
const Dlight2 = new THREE.DirectionalLight(0xffffff, 3);

const loader = new GLTFLoader();
let smurf;
loader.load(
  "./shaylushay.glb",
  function (gltf) {
    smurf = gltf.scene;
    scene.add(smurf);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 20, 100);
controls.update();
scene.add(Dlight);
scene.add(Dlight2);

scene.add(plane);
plane.rotation.x = Math.PI / 2;

camera.position.z = 30;
Dlight.position.x = 0;
Dlight.position.y = 20;
Dlight2.position.x = 20;
Dlight2.position.y = 0;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
window.onkeydown = function (e) {
  console.log(e.code);
  if (e.code === "ArrowDown") {
    smurf.position.z -= 1;
    smurf.rotation.y = Math.PI;
    e.preventDefault();
  } else if (e.code === "ArrowRight") {
    smurf.position.x -= 1;
    smurf.rotation.y = 2 * Math.PI - Math.PI / 2;
    e.preventDefault();
  } else if (e.code === "ArrowLeft") {
    smurf.position.x += 1;
    smurf.rotation.y = Math.PI / 2;
    e.preventDefault();
  } else if (e.code === "ArrowUp") {
    smurf.position.z += 1;
    smurf.rotation.y = 2 * Math.PI;
    e.preventDefault();
  }
};

animate();
