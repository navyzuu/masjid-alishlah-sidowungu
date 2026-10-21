import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Islamic3DStarProps {
  className?: string;
  size?: number;
}

export const Islamic3DStar: React.FC<Islamic3DStarProps> = ({
  className = '',
  size = 280,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // 2. Lighting Rig: Pure Warm Golden Sunlight (Zero Green Tint, High Luster)
    const ambientLight = new THREE.AmbientLight(0xfff5db, 1.8);
    scene.add(ambientLight);

    const mainSun = new THREE.DirectionalLight(0xffd166, 3.8);
    mainSun.position.set(4, 5, 5);
    scene.add(mainSun);

    const warmFill = new THREE.DirectionalLight(0xf59e0b, 2.5);
    warmFill.position.set(-4, -2, 3);
    scene.add(warmFill);

    const topGlow = new THREE.PointLight(0xffffff, 2.5, 20);
    topGlow.position.set(0, 2, 4);
    scene.add(topGlow);

    // 3. Mathematical Shape Function for Islamic Stars
    const createStarShape = (points: number, outerR: number, innerR: number) => {
      const shape = new THREE.Shape();
      const totalVertices = points * 2;
      for (let i = 0; i < totalVertices; i++) {
        const angle = (i * Math.PI) / points - Math.PI / 2;
        const radius = i % 2 === 0 ? outerR : innerR;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) {
          shape.moveTo(x, y);
        } else {
          shape.lineTo(x, y);
        }
      }
      shape.closePath();
      return shape;
    };

    const mainGroup = new THREE.Group();

    // Materials: Pure Lustrous Surya Gold & Royal Navy Center (High Specular Shine)
    const goldMaterial = new THREE.MeshPhongMaterial({
      color: 0xf59e0b,
      emissive: 0x78350f,
      specular: 0xfffbeb,
      shininess: 90,
      flatShading: false,
    });

    const navyMaterial = new THREE.MeshPhongMaterial({
      color: 0x0c2b4e,
      emissive: 0x031526,
      specular: 0x93c5fd,
      shininess: 120,
    });

    const innerGoldMaterial = new THREE.MeshPhongMaterial({
      color: 0xfbbf24,
      emissive: 0x92400e,
      specular: 0xffffff,
      shininess: 110,
    });

    // Mesh 1: 12-Pointed Beveled Surya Star (Muhammadiyah Symbol)
    const star12Shape = createStarShape(12, 1.45, 0.92);
    const extrudeSettings1 = {
      depth: 0.26,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };
    const star12Geo = new THREE.ExtrudeGeometry(star12Shape, extrudeSettings1);
    star12Geo.center();
    const star12Mesh = new THREE.Mesh(star12Geo, goldMaterial);
    mainGroup.add(star12Mesh);

    // Mesh 2: Concentric Golden Torus Halo
    const ringGeo = new THREE.TorusGeometry(1.58, 0.045, 16, 72);
    const ringMesh = new THREE.Mesh(ringGeo, innerGoldMaterial);
    mainGroup.add(ringMesh);

    // Mesh 3: Inner Counter-Rotating 8-Pointed Star (Rub el Hizb)
    const innerGroup = new THREE.Group();
    const star8Shape = createStarShape(8, 0.72, 0.46);
    const extrudeSettings2 = {
      depth: 0.34,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    };
    const star8Geo = new THREE.ExtrudeGeometry(star8Shape, extrudeSettings2);
    star8Geo.center();
    const star8Mesh = new THREE.Mesh(star8Geo, innerGoldMaterial);
    innerGroup.add(star8Mesh);

    // Mesh 4: Central Royal Navy Medallion
    const centerSphereGeo = new THREE.SphereGeometry(0.28, 32, 32);
    const centerSphereMesh = new THREE.Mesh(centerSphereGeo, navyMaterial);
    innerGroup.add(centerSphereMesh);

    mainGroup.add(innerGroup);
    scene.add(mainGroup);

    // 4. Scroll & Mouse Interactive Rotation
    let currentScroll = window.scrollY;
    let targetRotX = 0;
    let targetRotY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleScroll = () => {
      currentScroll = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.4;
      mouseY = y * 1.4;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation
      mainGroup.rotation.z += delta * 0.4;
      innerGroup.rotation.z -= delta * 0.75;

      // Scroll-driven dynamic 3D tilting
      const scrollProgress = currentScroll * 0.0035;
      targetRotY = mouseX + Math.sin(scrollProgress) * 0.9;
      targetRotX = mouseY + Math.cos(scrollProgress) * 0.7;

      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.07;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.07;

      // Smooth vertical levitation
      mainGroup.position.y = Math.sin(elapsedTime * 2.2) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      star12Geo.dispose();
      ringGeo.dispose();
      star8Geo.dispose();
      centerSphereGeo.dispose();
      goldMaterial.dispose();
      navyMaterial.dispose();
      innerGoldMaterial.dispose();
    };
  }, [size]);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      title="Ornamen Geometris 3D Bintang Islami (Berputar Interaktif)"
    >
      <div ref={mountRef} className="cursor-grab active:cursor-grabbing" />
    </div>
  );
};
