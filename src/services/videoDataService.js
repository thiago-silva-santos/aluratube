import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://dodkahylpbcegtmqrjhr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZGthaHlscGJjZWd0bXFyamhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTg4NjEsImV4cCI6MTk4MzkzNDg2MX0.4vBq3_TP4-2K0FY54bf9LiF_bBTiQBjvX9gtpgi2hNk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("videodata")
                    .select("*");
        }
    }
}