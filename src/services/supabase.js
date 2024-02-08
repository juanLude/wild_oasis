import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://adeyrahmactlbbfezwkh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkZXlyYWhtYWN0bGJiZmV6d2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDE5ODksImV4cCI6MjAyMjg3Nzk4OX0.hG6Wl1PxB93QVyWY9-nCcI-uYKoZMMYTKhVVGxb9maY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
