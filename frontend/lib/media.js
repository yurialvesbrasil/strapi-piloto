import { getStrapiMediaURL } from "./api"

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiMediaURL(media.url)
    : media.url
  return imageUrl
}
