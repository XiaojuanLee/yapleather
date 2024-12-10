'use client';

import { type actionFunction } from '@/utils/types';
import { deleteImageAction } from '@/utils/actions';

type ImageInputContainerProps = {
  images: string[];
  name: string;
  id: string;
  children?: React.ReactNode;
};

function ImageDeleteContainer(props: ImageInputContainerProps) {
  const { images: imagePaths, name, id: workshopId } = props;
 
  return (
      <div className="grid grid-cols-3 gap-4">
        {imagePaths.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
            <button
              type="button"
              onClick={() => deleteImageAction({workshopId, image, imagePaths})}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
  );
}
export default ImageDeleteContainer;
