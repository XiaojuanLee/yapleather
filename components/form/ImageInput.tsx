import { Input } from '../ui/input';
import { Label } from '../ui/label';

function ImageInput() {
  const name = 'images'; 
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Images
      </Label>
      <Input
        id={name}
        name={name}
        type='file'
        required
        accept='image/*'
        multiple 
        className='max-w-xs'
      />
    </div>
  );
}

export default ImageInput;
