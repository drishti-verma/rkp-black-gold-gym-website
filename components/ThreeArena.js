"use client";

import { useEffect, useRef } from "react";

export default function ThreeArena() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return undefined;
    let renderer;
    let frame;
    let cleanup = () => {};
    let active = true;
    let running = false;

    import("three").then((THREE) => {
      if (!active || !mountRef.current) return;
      const width = mountRef.current.clientWidth || 320;
      const height = mountRef.current.clientHeight || 320;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
      camera.position.set(0, 0.12, 5.6);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
      renderer.setSize(width, height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      mountRef.current.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const gold = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.88,
        roughness: 0.2,
        emissive: 0x2b1c04,
        emissiveIntensity: 0.4
      });
      const dimGold = new THREE.MeshStandardMaterial({
        color: 0x8b6a2f,
        metalness: 0.86,
        roughness: 0.34,
        transparent: true,
        opacity: 0.42
      });
      const iron = new THREE.MeshStandardMaterial({ color: 0x0b0a08, metalness: 0.72, roughness: 0.38 });

      const haloBack = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.018, 10, 80), dimGold);
      haloBack.position.z = -0.16;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.045, 12, 96), gold);
      const inner = new THREE.Mesh(new THREE.TorusKnotGeometry(0.48, 0.028, 88, 8), gold);
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.7, 18), iron);
      bar.rotation.z = Math.PI / 2;
      const plateA = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.16, 36), gold);
      plateA.rotation.z = Math.PI / 2;
      plateA.position.x = -1.42;
      const plateB = plateA.clone();
      plateB.position.x = 1.42;
      const core = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.018, 8, 72), dimGold);

      group.add(haloBack, ring, core, bar, plateA, plateB, inner);
      group.position.set(0, 0, 0);
      group.rotation.x = -0.08;

      const ambient = new THREE.AmbientLight(0xffffff, 0.36);
      const key = new THREE.DirectionalLight(0xffdf86, 2.1);
      key.position.set(2.4, 3.2, 4);
      const rim = new THREE.PointLight(0xb45a24, 1.5, 7);
      rim.position.set(-2.1, -0.8, 2.4);
      scene.add(ambient, key, rim);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clock = new THREE.Clock();

      function renderScene() {
        const time = clock.getElapsedTime();
        if (!reduced) {
          group.rotation.y = Math.sin(time * 0.55) * 0.28;
          group.rotation.z = Math.sin(time * 0.36) * 0.025;
          inner.rotation.x = time * 0.16;
          inner.rotation.z = time * 0.22;
          haloBack.rotation.z = -time * 0.08;
          ring.position.y = Math.sin(time * 1.1) * 0.025;
        }
        renderer.render(scene, camera);
      }

      function animate() {
        if (!running) return;
        renderScene();
        frame = requestAnimationFrame(animate);
      }

      function startLoop() {
        if (reduced) {
          renderScene();
          return;
        }
        if (running) return;
        running = true;
        animate();
      }

      function stopLoop() {
        running = false;
        if (frame) cancelAnimationFrame(frame);
      }

      function resize() {
        if (!mountRef.current) return;
        const nextWidth = mountRef.current.clientWidth || width;
        const nextHeight = mountRef.current.clientHeight || height;
        camera.aspect = nextWidth / nextHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(nextWidth, nextHeight);
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      }, { threshold: 0.1 });
      observer.observe(mountRef.current);
      window.addEventListener("resize", resize);
      startLoop();

      cleanup = () => {
        window.removeEventListener("resize", resize);
        observer.disconnect();
        stopLoop();
        renderer?.dispose();
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
        if (renderer?.domElement?.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    });

    return () => {
      active = false;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className="mx-auto h-[280px] w-full max-w-[460px] sm:h-[360px]" aria-label="Animated 3D black and gold barbell emblem" role="img" />;
}
