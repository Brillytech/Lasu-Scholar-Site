import { supabase } from "../lib/supabase";

export async function getApprovedReviews() {
  const { data, error } = await supabase
    .from("app_reviews")
    .select("id, display_name, department, level, rating, review, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(12);

  if (error) throw error;

  return data || [];
}
