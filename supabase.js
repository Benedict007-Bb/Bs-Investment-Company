const SUPABASE_URL = "https://plufvijgvrarlkaqccdk.supabase.co";

const SUPABASE_ANON_KEY = "PASTE_YOUR_FULL_PUBLISHABLE_KEY_HERE";

const { createClient } = window.supabase;

window.supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);