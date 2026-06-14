// BS Investment - Supabase Configuration

const SUPABASE_URL =
"https://plufvijgvrarlkaqccdk.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_h8EG8EtTh-zm28mycHVriA_6AmOrMr5";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);