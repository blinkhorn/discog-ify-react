export interface Artist {
  id: string;
  discogsId: string;
  name: string;
}

// TODO: determine if this interface is necessary
export interface Release {
  id: string;
  discogsId: string;
  name: string;
  recordLabelName: string;
  artists: Artist[];
  releaseDate: string[];
}

export interface Playlist {
  id: string;
  name: string;
  spotifyUrl: string;
  sharedCount: number;
  recordLabelName: string;
  releases: Release[] | null;
  releaseArtists: Artist[] | null;
  releaseDates: string[] | null;
  createdDate: string;
  lastUpdatedDate: string;
}

export interface User {
  email: string | undefined;
  createdDate: string | undefined;
  username: string | undefined;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  playlists: Playlist[] | null;
}
