import { supabase } from "../lib/supabase";

export async function getApprovedReviews() {
  const { data, error } = await supabase
    .from("app_reviews")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(15);

  if (error) throw error;

  return data || [];
}