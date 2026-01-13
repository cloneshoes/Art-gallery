const BASE_URL = "https://openaccess-api.clevelandart.org/api/artworks";

/* ---------- GET MULTIPLE ARTWORKS ---------- */
export async function getArtworks(page = 1, limit = 12) {
  try {
    // skip determines pagination: (page 1 starts at 0, page 2 at 12, etc.)
    const skip = (page - 1) * limit;
    
    // has_image=1 ensures we only get pieces with photos
    const res = await fetch(
      `${BASE_URL}/?limit=${limit}&skip=${skip}&has_image=1`
    );

    const json = await res.json();
    if (!json?.data) return [];

    return json.data.map((art) => ({
      id: art.id,
      title: art.title,
      // Cleveland creators are in an array; we take the first one
      artist: art.creators?.[0]?.description || "Unknown Artist",
      // Direct high-res web URL
      image: art.images?.web?.url || art.images?.print?.url,
      year: art.creation_date || "—",
      medium: art.technique || art.type || "—",
      price: Math.floor(Math.random() * 9000) + 1000,
      description: art.tombstone // 'tombstone' is their field for full museum label info
    }));
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
}

/* ---------- GET SINGLE ARTWORK ---------- */
export async function getArtworkById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const json = await res.json();
    const art = json.data;

    if (!art) return null;

    return {
      id: art.id,
      title: art.title,
      artist: art.creators?.[0]?.description || "Unknown Artist",
      image: art.images?.web?.url || art.images?.print?.url,
      year: art.creation_date || "—",
      medium: art.technique || art.type || "—",
      price: Math.floor(Math.random() * 9000) + 1000,
      description: art.tombstone
    };
  } catch (error) {
    console.error(`Error fetching artwork ${id}:`, error);
    return null;
  }
}