import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Environment, Resize } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../types';
import { Model } from './IphoneMockup3D';
import { GridVignetteBackground } from './ui/vignette-grid-background';
import { useOrtoMobile } from './useOrtoMobile';
import { useUrbanActivity } from './useUrbanMobile';

function UrbanHeroVideo() {
  const { ref, isMobile, active } = useUrbanActivity<HTMLVideoElement>();
  const wasMobile = useRef(isMobile);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!isMobile) {
      // Resume after the mobile effect's cleanup when crossing the breakpoint.
      if (wasMobile.current) void video.play().catch(() => {});
      wasMobile.current = false;
      return;
    }
    wasMobile.current = true;
    if (active) void video.play().catch(() => { /* Autoplay may be blocked by power-saving settings. */ });
    else video.pause();
    return () => video.pause();
  }, [active, isMobile, ref]);

  return <video
    ref={ref}
    src="./Video/Project 02/hero_video_02_wide.mp4"
    autoPlay={!isMobile}
    loop muted playsInline
    poster={isMobile ? './Images/Project 02/Mockup/mockup_desktop_2.jpg' : undefined}
    style={{ imageRendering: 'pixelated' }}
    className="w-full h-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] [image-rendering:pixelated]"
  />;
}

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
  const isMobile = useOrtoMobile();
  const isOrtoMobile = isMobile && isAetheris;
  const isItaloMobile = isMobile && isChronos;
  const [canvasProjectId, setCanvasProjectId] = useState<string | null>(() => isItaloMobile ? null : project.id);
  const shouldRenderItaloCanvas = canvasProjectId === project.id;

  useEffect(() => {
    if (!isItaloMobile) setCanvasProjectId(project.id);
  }, [isItaloMobile, project.id]);
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

    // The mobile file contains only the original 3.5–15s segment.
    const startTime = isOrtoMobile ? 0 : 3;
    const endTime = isOrtoMobile ? 11.5 : 15;
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
  }, [isAetheris, isOrtoMobile]);

  useEffect(() => {
    const video = ortoVideoRef.current;
    if (!isOrtoMobile || !video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches) {
        void video.play().catch(() => { /* Keep the poster when autoplay is unavailable. */ });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
      video.pause();
    };
  }, [isOrtoMobile]);

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
            src={isOrtoMobile ? './Video/Project 01/hero_video_mobile.mp4' : './Video/Project 01/hero_video.mov'}
            poster={isOrtoMobile ? './Video/Project 01/hero_video_mobile.jpg' : undefined}
            preload={isOrtoMobile ? 'metadata' : undefined}
            autoPlay={!isOrtoMobile}
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
                <div className="absolute inset-0 z-20 flex translate-y-6 items-center justify-center p-8">
                  <img src="./Images/Project 03/hero_screens/home-mobile-mockup.png" alt="Schermate mobile dell'app Italo" className="h-auto w-full max-w-[400px] object-contain drop-shadow-2xl" />
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#B5103B] rounded-full blur-[150px] md:blur-[200px] opacity-30 z-0" />
              <GridVignetteBackground className="hidden md:block opacity-100 absolute inset-0 z-10 bg-[image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]" horizontalVignetteSize={50} verticalVignetteSize={50} intensity={100} />
            </div>
            {shouldRenderItaloCanvas && <div className="hidden md:flex absolute inset-0 z-10 pointer-events-auto items-center justify-center pt-20">
              <Canvas camera={{ position: [0, 0, 300], fov: 45 }} frameloop={isItaloMobile ? 'never' : 'always'} className="w-full h-full">
                <Suspense fallback={null}>
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
            </div>}
          </>
        ) : isKinetics ? (
          <UrbanHeroVideo />
        ) : (
          <img
            src={heroImage || project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-1000 ease-[0.16,1,0.3,1] ${isKinetics ? 'grayscale brightness-[0.3] contrast-[1.15] hover:grayscale-0' : 'grayscale brightness-[0.4] hover:grayscale-0'}`}
          />
        )}
        <div className={`absolute inset-0 pointer-events-none ${isKinetics ? 'bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(13,13,13,0.85)_100%)]' : isChronos ? 'max-md:bg-none md:bg-gradient-to-t md:from-[#050505] md:from-10% md:via-[#050505]/50 md:to-transparent' : isAetheris ? 'bg-gradient-to-t from-[#050505] from-10% via-[#050505]/50 to-transparent' : 'bg-gradient-to-t from-black via-black/40 to-transparent'}`} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col gap-3">
        {!(isAetheris || isChronos || isKinetics) && (
          <span className="text-sm font-raleway uppercase tracking-[0.25em] text-[#E8302A]">{category}</span>
        )}
        {isKinetics && <h1 className="sr-only">{project.title}</h1>}
        {!isKinetics && (
          <h1 className={`font-black tracking-tighter uppercase mb-2 ${(isAetheris || isChronos) ? 'text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-raleway font-bold text-white' : 'text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-sans text-white'}`}>
            {(isAetheris || isChronos) ? <span className="sr-only">{project.title}</span> : project.title}
          </h1>
        )}
        {(isAetheris || isChronos || isKinetics) && (
          <div className={`flex flex-col gap-1 w-full items-center justify-center mb-4 ${isAetheris || isKinetics || isChronos ? 'hidden md:flex' : ''}`}>
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
