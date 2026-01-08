const artworks = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&auto=format&fit=crop",
    artist: "Jane Doe",
    year: 2023,
    medium: "Oil on Canvas",
    price: 4200,
    description: "A contemporary exploration of color and emotion."
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&auto=format&fit=crop",
    artist: "John Smith",
    year: 2022,
    medium: "Digital Art",
    price: 2800,
    description: "Minimalist digital abstraction."
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=1200&auto=format&fit=crop",
    artist: "Anna Lee",
    year: 2024,
    medium: "Sculpture",
    price: 8000,
    description: "Form, balance, and modern material."
  }
];

export function getArtworks() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(artworks), 500);
  });
}

export function getArtworkById(id) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(artworks.find((art) => art.id === id)),
      500
    );
  });
}
