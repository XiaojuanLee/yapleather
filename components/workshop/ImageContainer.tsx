'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function ImageContainer({ images, name }: { images: string[]; name: string }) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]); // Default display of the first image

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Left-side thumbnail list */}
      <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-y-auto">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className={`cursor-pointer border ${
              selectedImage === imgSrc ? 'border-blue-500' : 'border-transparent'
            } rounded-md`}
            onClick={() => setSelectedImage(imgSrc)} // Update selected image
          >
            <Image
              src={imgSrc}
              alt={`${name} thumbnail ${index + 1}`}
              width={60}
              height={60}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right-side large image display */}
      <div className="relative h-[500px] w-[700px]">
        <Image
          src={selectedImage}
          alt={`${name} selected image`}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="rounded-md object-cover "
        />
      </div>
    </div>
  );
}

export default ImageContainer;
