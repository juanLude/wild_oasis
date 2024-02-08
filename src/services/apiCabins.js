import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("cabins could not be loaded.");
    throw new Error("cabinas could not be loaded.");
  }
  return data;
}
