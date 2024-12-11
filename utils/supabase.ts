import { createClient } from '@supabase/supabase-js';

const bucket = 'yapleather';

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  console.log({image});
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' });
  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};


export const deleteImage = async (image: string) => {
  const relativePath = image.replace('https://qqpbudqttafvougiykbp.supabase.co/storage/v1/object/public/yapleather/', '');
  const { data } = await supabase.storage.from(bucket).remove([relativePath]);
    console.log('Attempt to delete image:', relativePath, { data });
    if (!data) throw new Error('Image upload failed');
};
