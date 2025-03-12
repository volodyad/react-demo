import { Listing } from "../types";

interface ApiResponse {
  success: boolean;
  deals: Listing[];
}

const baseUrl =
  "https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production";
export async function getListings() {
  const response = await fetch(`${baseUrl}/get-listings`);
  const data: ApiResponse = await response.json();
  return data.deals;
}
