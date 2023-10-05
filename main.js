import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry2 = new THREE.TorusGeometry( 10, 1, 16, 100 );
const geometry3 = new THREE.TorusGeometry( 5, 1, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const torus = new THREE.Mesh(geometry2, material2);
const torus2 = new THREE.Mesh(geometry3, material);
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
renderer.setClearColor( 0xffffff );

scene.add(torus);
scene.add(torus2);

camera.position.z = 30;

function animate() {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.005;
    torus.rotation.y += 0.005;
    torus2.rotation.x -= 0.01;
    torus2.rotation.y -= 0.01;
    renderer.render( scene, camera, light );
}

animate();