import { createClient } from '@supabase/supabase-js';

const URL = "https://xdbkywctnuncurqqnbtd.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkYmt5d2N0bnVuY3VycXFuYnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTU3ODQsImV4cCI6MjAzODM3MTc4NH0.tjMot_fKiNr_BgxbxJ1bYyRnvbvKr8cX7Arx4wjlhFI";

const supabase = createClient(URL, API_KEY);

export default supabase;