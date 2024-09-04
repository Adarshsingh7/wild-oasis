import supabase, { supabaseUrl } from './superbase';

export async function getCabin() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error('cabins could not be laoded');
    throw new Error('failed to laod the cabins data');
  }

  return data;
}

export const createCabin = async function (newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }]);
  if (error) {
    console.error('cabins could not be created');
    throw new Error('failed to create the cabins');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'cabin imagae could not be created hence cabin could not be uploaded  '
    );
  }

  return data;
};

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error('cabins could not be deleted');
    throw new Error('failed to delete the cabins data');
  }

  return data;
}
