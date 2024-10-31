import { useEffect, useRef } from "react";
import { Scene, PerspectiveCamera, WebGLRenderer, TorusGeometry, MeshBasicMaterial, Mesh,
  PointLight, AmbientLight, SphereGeometry, MathUtils, TextureLoader, BoxGeometry,
  MeshStandardMaterial,
  Texture
 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import woongJPG from '../assets/images/woong.png';
import moonJPG from '../assets/images/moon.jpg';
import normalJPG from '../assets/images/normal.jpg';

function MyThree() {
  const refContainer = useRef(null);

  useEffect(() => {
    const scene: Scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();

    // @ts-ignore
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(0);
    camera.position.setY(0);
    camera.position.setX(0);

    renderer.render(scene, camera);

    // Torus
    const geometry: TorusGeometry = new TorusGeometry(10, 3, 16, 100);
    const material: MeshBasicMaterial = new MeshBasicMaterial({
      color: 0xff6347,
      wireframe: true,
      wireframeLinewidth: 0.1
    });
    const torus: Mesh = new Mesh(geometry, material);

    scene.add(torus);

    // Lights
    const pointLight: PointLight = new PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight: AmbientLight = new AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);

    function addStar() {
      const geometry: SphereGeometry = new SphereGeometry(0.25, 24, 24);
      const colors: string[] = ['yellow', 'red', 'white', 'gray', 'blue'];
      const colorIndex: number = Math.round(Math.random() * (colors.length-1));
      
      const material: MeshBasicMaterial = new MeshBasicMaterial( { color: colors[colorIndex] });
      const star: Mesh = new Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill('')
        .map(() => MathUtils.randFloatSpread(200));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(500).fill('').forEach(addStar);

    // Avatar
    const woongTexture: Texture = new TextureLoader().load(woongJPG);
    const woong: Mesh = new Mesh(new BoxGeometry(3, 3, 3), new MeshBasicMaterial({ map: woongTexture }));
    scene.add(woong);

    // Moon
    const moonTexture: Texture = new TextureLoader().load(moonJPG);
    const normalTexture: Texture = new TextureLoader().load(normalJPG);

    const moon: Mesh = new Mesh(
      new SphereGeometry(3, 32, 32),
      new MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );

    scene.add(moon);

    moon.position.z = 30;
    moon.position.setX(-10);

    woong.position.z = -5;
    woong.position.x = 2;

    // Scroll Animation
    const moveCamera = () => {
      let t = document.body.getBoundingClientRect().top;
      
      moon.rotation.x = t * 0.005;
      moon.rotation.y = t * 0.0075;
      moon.rotation.z = t * 0.005;

      woong.rotation.y = (t * 0.001) * -1;
      woong.rotation.z = (t * 0.001) * -1;

      if (t > -50) {
        t = -50;
      }

      camera.position.x = t * -0.001;
      camera.rotation.y = t * -0.001;
      camera.position.z = t * -0.025;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // Animation Loop
    const animate = ()  => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      moon.rotation.x += 0.005;

      woong.rotation.y += 0.001;
      woong.rotation.z += 0.001;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div ref={refContainer}></div>
  );
}

export default MyThree;