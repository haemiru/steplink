import React, { useEffect, useRef, useState } from 'react';

interface ImageSequencePlayerProps {
    folderPath: string; // e.g., "/sequence/"
    fileNamePrefix: string; // e.g., "frame_"
    extension?: string; // e.g., "jpg", default: "jpg"
    frameCount: number; // e.g., 200
    fps?: number; // default: 5
    padLength?: number; // e.g., 3 for frame_001.jpg, 0 for frame_1.jpg. Default: 0
    className?: string;
    width?: number; // Canvas width
    height?: number; // Canvas height
    loop?: boolean; // Default: true
    autoPlay?: boolean; // Default: true
}

const ImageSequencePlayer: React.FC<ImageSequencePlayerProps> = ({
    folderPath,
    fileNamePrefix,
    extension = 'jpg',
    frameCount,
    fps = 5,
    padLength = 0,
    className = '',
    width = 640,
    height = 360,
    loop = true,
    autoPlay = true,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const requestRef = useRef<number | null>(null);
    const frameIndexRef = useRef(0);
    const lastFrameTimeRef = useRef(0);

    // Preload Images
    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            setIsLoading(true);
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= frameCount; i++) {
                if (!isMounted) return;

                const img = new Image();
                const frameNumber = padLength > 0 ? String(i).padStart(padLength, '0') : String(i);
                // Ensure folderPath ends with /
                const infoPath = folderPath.endsWith('/') ? folderPath : `${folderPath}/`;
                img.src = `${infoPath}${fileNamePrefix}${frameNumber}.${extension}`;

                await new Promise((resolve, reject) => {
                    img.onload = () => {
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve(true);
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load image: ${img.src}`, e);
                        // Optionally continue even if one fails
                        resolve(false);
                    };
                });
                loadedImages.push(img);
            }

            if (isMounted) {
                setImages(loadedImages);
                setIsLoading(false);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [folderPath, fileNamePrefix, extension, frameCount, padLength]);

    // Animation Loop
    const animate = (time: number) => {
        if (!isPlaying || images.length === 0) return;

        if (lastFrameTimeRef.current === 0) {
            lastFrameTimeRef.current = time;
        }

        const deltaTime = time - lastFrameTimeRef.current;
        const interval = 1000 / fps;

        if (deltaTime >= interval) {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');

            if (canvas && ctx) {
                // Clear canvas (optional if images are opaque and fill the canvas)
                // ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw current frame
                const currentImage = images[frameIndexRef.current];
                if (currentImage) {
                    // Use object-contain logic or fill? usually fill or contain.
                    // Here we simply draw image to canvas size. 
                    // Ideally we should maintain aspect ratio, but for simplicity we stretch to canvas size
                    // or draw centered.
                    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
                }

                // Update frame index
                frameIndexRef.current++;
                if (frameIndexRef.current >= images.length) {
                    if (loop) {
                        frameIndexRef.current = 0;
                    } else {
                        frameIndexRef.current = images.length - 1;
                        setIsPlaying(false);
                    }
                }
            }

            lastFrameTimeRef.current = time;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (!isLoading && isPlaying) {
            // Start animation
            requestRef.current = requestAnimationFrame(animate);
        } else {
            // Cancel animation
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isLoading, isPlaying, fps, images, loop]);

    // Draw first frame when loaded
    useEffect(() => {
        if (!isLoading && images.length > 0 && canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.drawImage(images[0], 0, 0, width, height);
            }
        }
    }, [isLoading, images, width, height])


    if (isLoading) {
        return (
            <div className={`flex flex-col items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ width, height }}>
                <p className="text-gray-500 mb-2">Loading Sequence...</p>
                <div className="w-1/2 bg-gray-300 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">{progress}%</p>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="block max-w-full h-auto rounded-lg shadow-lg"
            />
            {/* Controls (Optional, currently just play/pause on click for demo purpose) */}
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 hover:opacity-100"
                title={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                )}
            </button>
        </div>
    );
};

export default ImageSequencePlayer;
