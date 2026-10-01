import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Environment, Html, Resize } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types';
import { Model } from './IphoneMockup3D';
import { GridVignetteBackground } from './ui/vignette-grid-background';

interface ProjectHeroSectionProps {
  project: Project;
  isAetheris: boolean;
  isChronos: boolean;
  isKinetics: boolean;
  category: string;
  heroImage?: string;
}

function RotatingPhone({ children, initialRotationY = 0 }: { children: React.ReactNode; initialRotationY?: number }) {
  const groupRef = React.useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) groupRef.current.rotation.y = initialRotationY;
  }, [initialRotationY]);

  useFrame((_state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
  });

  return <group ref={groupRef}>{children}</group>;
}

export function ProjectHeroSection({
  project,
  isAetheris,
  isChronos,
  isKinetics,
  category,
  heroImage,
}: ProjectHeroSectionProps) {
  const ortoVideoRef = useRef<HTMLVideoElement>(null);
  const sectionIdentity = isKinetics
    ? {
        id: 'urban-streetart-hero',
        order: '01-hero',
        label: 'Hero Urban StreetArt Sicily',
      }
    : isChronos
      ? {
          id: 'italo-treni-hero',
          order: '01-hero',
          label: 'Hero Italo Treni',
        }
      : {
          id: 'project-hero',
          order: isAetheris ? '01-hero' : undefined,
          label: isAetheris ? 'Hero Orto Botanico' : undefined,
        };

  useEffect(() => {
    if (!isAetheris) return;

    const video = ortoVideoRef.current;
    if (!video) return;

    const startTime = window.matchMedia('(max-width: 767px)').matches ? 3.5 : 3;
    const endTime = 15;
    const seekToStart = () => {
      if (video.currentTime < startTime || video.currentTime >= endTime) {
        video.currentTime = startTime;
      }
    };
    const keepWithinSegment = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime;
        void video.play();
      }
    };

    video.addEventListener('loadedmetadata', seekToStart);
    video.addEventListener('timeupdate', keepWithinSegment);
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) seekToStart();

    return () => {
      video.removeEventListener('loadedmetadata', seekToStart);
      video.removeEventListener('timeupdate', keepWithinSegment);
    };
  }, [isAetheris]);

  return (
    <section
      id={sectionIdentity.id}
      data-project-section={sectionIdentity.order}
      aria-label={sectionIdentity.label}
      className={`relative w-full pt-20 min-h-[100svh] max-md:min-h-[65svh] flex flex-col justify-end p-6 sm:p-12 md:p-16 overflow-hidden ${isKinetics ? 'bg-[#0D0D0D]' : ''}`}
    >
      <div className="absolute inset-0 z-0">
        {isAetheris ? (
          <video
            ref={ortoVideoRef}
            src="./Video/Project 01/hero_video.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1]"
          />
        ) : isChronos ? (
          <>
            <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
              <div className="block md:hidden absolute inset-0 z-0 bg-[#050505]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#B5103B] rounded-full blur-[100px] opacity-40 z-0" />
                <GridVignetteBackground className="opacity-100 absolute inset-0 z-10 bg-[image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]" horizontalVignetteSize={50} verticalVignetteSize={50} intensity={100} />
                <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
                  <img src="./Images/Project 03/hero_screens/center-home.png" alt="Italo App Mobile" className="w-[80%] max-w-[280px] rounded-3xl shadow-2xl border-2 border-neutral-800" />
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#B5103B] rounded-full blur-[150px] md:blur-[200px] opacity-30 z-0" />
              <GridVignetteBackground className="hidden md:block opacity-100 absolute inset-0 z-10 bg-[image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]" horizontalVignetteSize={50} verticalVignetteSize={50} intensity={100} />
            </div>
            <div className="hidden md:flex absolute inset-0 z-10 pointer-events-auto items-center justify-center pt-20">
              <Canvas camera={{ position: [0, 0, 300], fov: 45 }} className="w-full h-full">
                <Suspense fallback={<Html center><div className="text-white text-xl">Caricamento 3D...</div></Html>}>
                  <Environment preset="city" />
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[10, 20, 15]} intensity={1} />
                  <directionalLight position={[-10, -10, -10]} intensity={3} color="#B5103B" />
                  <pointLight position={[0, 0, 10]} intensity={200} distance={100} color="#B5103B" />
                  <pointLight position={[0, -20, -10]} intensity={300} distance={150} color="#B5103B" />
                  <group>
                    <group position={[-55, 30, -20]} rotation={[0, 0, 0.25]}>
                      <Resize scale={140}><Center><RotatingPhone initialRotationY={Math.PI + 0.2}><Model imagePath="./Images/Project 03/hero_screens/left-ticket.png" /></RotatingPhone></Center></Resize>
                    </group>
                    <group position={[0, 10, 20]} rotation={[0.05, 0, -0.05]}>
                      <Resize scale={150}><Center><RotatingPhone><Model imagePath="./Images/Project 03/hero_screens/center-home.png" /></RotatingPhone></Center></Resize>
                    </group>
                    <group position={[55, 5, -20]} rotation={[0, 0, -0.25]}>
                      <Resize scale={140}><Center><RotatingPhone initialRotationY={Math.PI - 0.2}><Model imagePath="./Images/Project 03/hero_screens/right-search.png" /></RotatingPhone></Center></Resize>
                    </group>
                  </group>
                </Suspense>
              </Canvas>
            </div>
          </>
        ) : isKinetics ? (
          <video
            src="./Video/Project 02/hero_video_02_wide.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ imageRendering: 'pixelated' }}
            className="w-full h-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] [image-rendering:pixelated]"
          />
        ) : (
          <img
            src={heroImage || project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] ${isKinetics ? 'grayscale brightness-[0.3] contrast-[1.15] hover:grayscale-0' : 'grayscale brightness-[0.4] hover:grayscale-0'}`}
          />
        )}
        <div className={`absolute inset-0 pointer-events-none ${isKinetics ? 'bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(13,13,13,0.85)_100%)]' : (isAetheris || isChronos) ? 'bg-gradient-to-t from-[#050505] from-10% via-[#050505]/50 to-transparent' : 'bg-gradient-to-t from-black via-black/40 to-transparent'}`} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col gap-3">
        {!(isAetheris || isChronos || isKinetics) && (
          <span className="text-sm font-raleway uppercase tracking-[0.25em] text-[#E8302A]">{category}</span>
        )}
        {!isKinetics && (
          <h1 className={`font-black tracking-tighter uppercase mb-2 ${(isAetheris || isChronos) ? 'text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-raleway font-bold text-white' : 'text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-sans text-white'}`}>
            {isAetheris ? <span className="sr-only">{project.title}</span> : !(isAetheris || isChronos) ? project.title : null}
          </h1>
        )}
        {(isAetheris || isChronos || isKinetics) && (
          <div className={`flex flex-col gap-1 w-full items-center justify-center mb-4 ${isAetheris || isKinetics ? 'hidden md:flex' : ''}`}>
            <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm">
                <span className={`text-sm font-raleway uppercase tracking-wider ${isKinetics ? 'text-[#FCD306]' : isChronos ? 'text-[#B40E3C]' : 'text-[#068B35]'}`}>Year:</span>
                <span className="text-sm sm:text-sm font-semibold text-white">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm">
                <span className={`text-sm font-raleway uppercase tracking-wider ${isKinetics ? 'text-[#FCD306]' : isChronos ? 'text-[#B40E3C]' : 'text-[#068B35]'}`}>Role:</span>
                <span className="text-sm sm:text-sm font-semibold text-white">{project.role}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm">
                <span className={`text-sm font-raleway uppercase tracking-wider ${isKinetics ? 'text-[#FCD306]' : isChronos ? 'text-[#B40E3C]' : 'text-[#068B35]'}`}>Type:</span>
                <span className="text-sm sm:text-sm font-semibold text-white">{isChronos ? 'Personal Project' : 'Team Project'}</span>
              </div>
            </div>
          </div>
        )}
        {!(isAetheris || isChronos || isKinetics) && <div className="w-12 h-1 bg-[#E8302A]" />}
      </div>
    </section>
  );
}
