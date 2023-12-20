import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqzxahttkpjjhycqcnza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxenhhaHR0a3Bqamh5Y3FjbnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNTA5ODgsImV4cCI6MjAxODYyNjk4OH0.RYIqn2qay4_uk-Yyi1zf_yTvEi1RhTOYzNpVZ1_IrqY";
export const supabase = createClient(supabaseUrl, supabaseKey);
