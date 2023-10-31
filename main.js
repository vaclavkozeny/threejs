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

const geometry2 = new THREE.TorusGeometry(10, 1, 16, 100);
const geometry3 = new THREE.TorusGeometry(5, 1, 16, 100);
const Planegeometry = new THREE.PlaneGeometry(50, 50);
const Planematerial = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const torus = new THREE.Mesh(geometry2, material2);
const torus2 = new THREE.Mesh(geometry3, material);
const plane = new THREE.Mesh(Planegeometry, Planematerial);
//const light = new THREE.AmbientLight( 0xffffff );
const Dlight = new THREE.DirectionalLight(0xffffff, 3);
const Dlight2 = new THREE.DirectionalLight(0xffffff, 3);
//scene.add( light );
const Dhelper = new THREE.DirectionalLightHelper(Dlight);
const Dhelper2 = new THREE.DirectionalLightHelper(Dlight2);

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

scene.add(torus);
scene.add(torus2);
scene.add(plane);
plane.rotation.x = Math.PI / 2;

camera.position.z = 30;
Dlight.position.x = 0;
Dlight.position.y = 20;
Dlight2.position.x = 20;
Dlight2.position.y = 0;

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;
  torus2.rotation.x -= 0.01;
  torus2.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
window.onkeydown = function (e) {
  console.log(e.code);
  if (e.code === "ArrowDown") {
    smurf.position.x -= 1;
    e.preventDefault();
  } else if (e.code === "ArrowRight") {
    smurf.position.x += 1;
    e.preventDefault();
  } else if (e.code === "ArrowLeft") {
    smurf.position.z -= 1;
    e.preventDefault();
  } else if (e.keyCode === "ArrowUp") {
    smurf.position.z += 1;
    e.preventDefault();
  }
};

animate();
