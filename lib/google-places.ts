import type { Review } from "@/types";

// Google Places API sometimes returns UTF-8 bytes decoded as Windows-1252
function fixEncoding(text: string): string {
  return text
    .replace(/â€™/g, "’") // â€™ → '
    .replace(/â€œ/g, "“") // â€œ → "
    .replace(/â€/g, "”") // â€ → "
    .replace(/â€“/g, "—") // â€" → —
    .replace(/â€”/g, "–"); // â€" → –
}

interface PlacesReview {
  rating: number;
  text?: { text: string };
  authorAttribution?: { displayName: string; photoUri?: string };
  relativePublishTimeDescription?: string;
}

interface PlacesResponse {
  reviews?: PlacesReview[];
  rating?: number;
  userRatingCount?: number;
}

export interface PlacesData {
  reviews: Review[];
  rating: number;
  totalRatings: number;
}

export async function getGoogleReviews(): Promise<PlacesData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: 3600 }, // re-fetch at most once per hour
      }
    );

    if (!res.ok) return null;

    const data: PlacesResponse = await res.json();

    const reviews: Review[] = (data.reviews ?? [])
      .filter((r) => r.text?.text && r.rating >= 4)
      .map((r) => ({
        quote: fixEncoding(r.text!.text),
        name: r.authorAttribution?.displayName ?? "Google Reviewer",
        subtitle: r.relativePublishTimeDescription ?? "",
        avatar: r.authorAttribution?.photoUri,
        rating: r.rating,
      }));

    return {
      reviews,
      rating: data.rating ?? 0,
      totalRatings: data.userRatingCount ?? 0,
    };
  } catch {
    return null;
  }
}
