import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mpimlwazgmprizrvpwmp.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPERBASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
