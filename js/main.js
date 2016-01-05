var height = (window.innerHeight) - 250;
var width = window.innerWidth;

var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize(width, height);
var scene = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(45, width/(height), 1, 1000);
//var controls = new THREE.OrbitControls(camera, renderer.domElement);

var sun

var pivotMercure
var mercure

var pivotVenus
var venus

var pivotEarth
var earth

var pivotMoon
var moon

var pivotMars
var mars

var pivotJupiter
var jupiter

var pivotSaturn
var saturn

var pivotUranus
var uranus

var pivotNeptune
var neptune

document.body.appendChild(renderer.domElement);

camera.position.z = 200;


/*******************/


$(document).ready(function() {

	drawPlanets();
	drawLight();

	// camera.addTarget({
 //        name: 'myTarget',
 //        targetObject: earth,
 //        cameraPosition: new THREE.Vector3(0, 30, 50),
 //        fixed: false,
 //        stiffness: 0.1,
 //        matchRotation: true
 //    });

	render();

});

$('.story').find('button').on('click', function() {
	//earth.position.y = 30;
	earth.add(camera);
	camera.position.z = -10;
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
})

function render() {
	requestAnimationFrame(render);

	rotatePlanets();
	//camera.update();
	renderer.render(scene, camera);
}

function drawLight() {

	var light = new THREE.PointLight('#fff', 0.8, 10000);
	light.position.set(0,0,0);
	scene.add(light);

}

function drawPlanets() {

	var geometrySun = new THREE.SphereGeometry( 20, 32, 32 );
	var textureSun =  THREE.ImageUtils.loadTexture("images/sunmap.jpg"); 
	var materialSun = new THREE.MeshBasicMaterial( {map: textureSun} );
	sun = new THREE.Mesh(geometrySun, materialSun);
	//sun.position.y = 30;
	scene.add(sun);

	pivotMercure = new THREE.Object3D();
	pivotMercure.rotation.y = 0.09;
	sun.add(pivotMercure);
	var geometryMercure = new THREE.SphereGeometry( 0.48, 32, 32 );
	var textureMercure =  THREE.ImageUtils.loadTexture("images/mercurymap.jpg"); 
	var materialMercure = new THREE.MeshPhongMaterial( {map: textureMercure} );
	mercure = new THREE.Mesh(geometryMercure, materialMercure);
	mercure.position.x = 40;
	pivotMercure.add(mercure);

	pivotVenus = new THREE.Object3D();
	pivotVenus.rotation.y = 0.08;
	sun.add(pivotVenus);
	var geometryVenus = new THREE.SphereGeometry( 1.21, 32, 32 );
	var textureVenus =  THREE.ImageUtils.loadTexture("images/venusmap.jpg"); 
	var materialVenus = new THREE.MeshPhongMaterial( {map: textureVenus} );
	venus = new THREE.Mesh(geometryVenus, materialVenus);
	venus.position.x = 60;
	pivotVenus.add(venus);

	pivotEarth = new THREE.Object3D();
	pivotEarth.rotation.y = 0.07;
	sun.add(pivotEarth);
	var geometryEarth = new THREE.SphereGeometry( 1.275, 32, 32 );
	var textureEarth =  THREE.ImageUtils.loadTexture("images/earthmap.jpg"); 
	var materialEarth = new THREE.MeshPhongMaterial( {map: textureEarth} );
	earth = new THREE.Mesh(geometryEarth, materialEarth);
	earth.position.x = 80;
	pivotEarth.add(earth);

	pivotMoon = new THREE.Object3D();
	pivotMoon.rotation.y = 0.07;
	earth.add(pivotMoon);
	var geometryMoon = new THREE.SphereGeometry( 0.15, 32, 32 );
	var textureMoon =  THREE.ImageUtils.loadTexture("images/moonmap.jpg"); 
	var materialMoon = new THREE.MeshPhongMaterial( {map: textureMoon} );
	moon = new THREE.Mesh(geometryMoon, materialMoon);
	moon.position.x = 4;
	pivotMoon.add(moon);

	pivotMars = new THREE.Object3D();
	pivotMars.rotation.y = 0.06;
	sun.add(pivotMars);
	var geometryMars = new THREE.SphereGeometry( 0.68, 32, 32 );
	var textureMars =  THREE.ImageUtils.loadTexture("images/marsmap.jpg"); 
	var materialMars = new THREE.MeshPhongMaterial( {map: textureMars} );
	mars = new THREE.Mesh(geometryMars, materialMars);
	mars.position.x = 100;
	pivotMars.add(mars);

	pivotJupiter = new THREE.Object3D();
	pivotJupiter.rotation.y = 0.05;
	sun.add(pivotJupiter);
	var geometryJupiter = new THREE.SphereGeometry( 10, 32, 32 );
	var textureJupiter =  THREE.ImageUtils.loadTexture("images/jupitermap.jpg"); 
	var materialJupiter = new THREE.MeshPhongMaterial( {map: textureJupiter} );
	jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
	jupiter.position.x = 120;
	pivotJupiter.add(jupiter);

	pivotSaturn = new THREE.Object3D();
	pivotSaturn.rotation.y = 0.04;
	sun.add(pivotSaturn);
	var geometrySaturn = new THREE.SphereGeometry( 8, 32, 32 );
	var textureSaturn =  THREE.ImageUtils.loadTexture("images/saturnmap.jpg"); 
	var materialSaturn = new THREE.MeshPhongMaterial( {map: textureSaturn} );
	saturn = new THREE.Mesh(geometrySaturn, materialSaturn);
	saturn.position.x = 150;
	pivotSaturn.add(saturn);

	pivotNeptune = new THREE.Object3D();
	pivotNeptune.rotation.y = 0.03;
	sun.add(pivotNeptune);
	var geometryNeptune = new THREE.SphereGeometry( 10, 32, 32 );
	var textureNeptune =  THREE.ImageUtils.loadTexture("images/neptunemap.jpg"); 
	var materialNeptune = new THREE.MeshPhongMaterial( {map: textureNeptune} );
	neptune = new THREE.Mesh(geometryJupiter, materialNeptune);
	neptune.position.x = 180;
	pivotNeptune.add(neptune);

	pivotUranus = new THREE.Object3D();
	pivotUranus.rotation.y = 0.02;
	sun.add(pivotUranus);
	var geometryUranus = new THREE.SphereGeometry( 10, 32, 32 );
	var textureUranus =  THREE.ImageUtils.loadTexture("images/uranusmap.jpg"); 
	var materialUranus = new THREE.MeshPhongMaterial( {map: textureUranus} );
	uranus = new THREE.Mesh(geometryUranus, materialUranus);
	uranus.position.x = 210;
	pivotUranus.add(uranus);

}

function rotatePlanets() {
	sun.rotation.y += 0.0008;

	pivotMercure.rotation.y += 0.015;
	mercure.rotation.y += 0.009;

	pivotVenus.rotation.y += 0.012;
	venus.rotation.y += 0.008;

	pivotEarth.rotation.y += 0.010;
	earth.rotation.y += 0.007;

	pivotMoon.rotation.y += 0.016;
	moon.rotation.y += 0.009;

	pivotMars.rotation.y += 0.009;
	mars.rotation.y += 0.006;

	pivotJupiter.rotation.y += 0.007;
	jupiter.rotation.y += 0.005;

	pivotSaturn.rotation.y += 0.005;
	saturn.rotation.y += 0.004;

	pivotNeptune.rotation.y += 0.003;
	neptune.rotation.y += 0.003;

	pivotUranus.rotation.y += 0.001;
	uranus.rotation.y += 0.002;
}