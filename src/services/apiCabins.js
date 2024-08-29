import supabase from './superbase';

export async function getCabin() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error('cabins could not be laoded');
    throw new Error('failed to laod the cabins data');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error('cabins could not be laoded');
    throw new Error('failed to laod the cabins data');
  }

  return data;
}
