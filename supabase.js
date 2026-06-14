// BS Investment - Supabase Configuration

const SUPABASE_URL =
"https://plufvijgvrarlkaqccdk.supabase.co";

const SUPABASE_ANON_KEY =
"YOUR_ANON_KEY_HERE";

window.supabaseClient =
window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);