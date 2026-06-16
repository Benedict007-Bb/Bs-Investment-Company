const SUPABASE_URL = "https://plufvijgvrarlkaqccdk.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_h8EG8EtTh-zm28mycHVriA_6AmOrMr5";

const { createClient } = supabase;

window.supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);