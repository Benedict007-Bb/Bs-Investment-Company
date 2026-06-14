// BS Investment - Supabase Configuration

const SUPABASE_URL = "https://plufvijgvrarlkaqccdk.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_h8EG8EtTh-zm28mycHVriA_6AmOrMr5";

// Load Supabase client
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase.js"></script>