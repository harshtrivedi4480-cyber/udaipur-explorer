/**
 * Centralized registry of external, verified image URLs used across the
 * site. Every entry here was checked against Wikimedia Commons file pages
 * (or, where noted, an Unsplash URL supplied directly) to confirm the
 * photo actually depicts the named subject before being wired into the
 * data files.
 *
 * Wikimedia Commons images are referenced through the `Special:FilePath`
 * redirect, which is the stable, hotlink-safe way to reference a Commons
 * file by name   MediaWiki resolves it to the real upload.wikimedia.org
 * path server-side, so it doesn't break if the file's internal storage
 * path changes.
 *
 * If a subject has NO entry here, it intentionally has none: no verified,
 * accurately-matching, hotlink-safe image could be found for it (common
 * for branded hotel interiors, which are almost always copyrighted
 * professional photography with no Commons equivalent). Those items fall
 * through to SmartImage's designed placeholder rather than showing a
 * guessed or mismatched photo.
 */

const COMMONS_BASE = 'https://commons.wikimedia.org/wiki/Special:FilePath/'

/** Build a stable, direct-loading URL for a Wikimedia Commons file by its exact page title. */
function commons(filename: string, width = 1600): string {
  return `${COMMONS_BASE}${encodeURIComponent(filename)}?width=${width}`
}

export const IMAGE_URLS = {
  hero: {
    // Provided directly and confirmed as an Udaipur/Lake Pichola evening scene.
    udaipurPicholaEvening:
      'https://images.unsplash.com/photo-1572980071199-3d874a56b987?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  places: {
    // Direct Unsplash URLs supplied and kept as-is (already valid, direct image endpoints).
    gangaurGhat:
      'https://images.unsplash.com/photo-1623851293886-e9b3618ae902?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
    lakePichola:
      'https://images.unsplash.com/photo-1696032503546-209bfdd36833?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
    cityPalace: '/images/places/city-palace-unsplash.jpg',
    jagdishTemple:
      'https://images.unsplash.com/photo-1675081364310-ab56626eb4c9?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
    sajjangarhPalace:
      'https://images.unsplash.com/photo-1689258887079-22366f1af07d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
    // Wikimedia Commons   verified by file title/category against the named subject.
    ahamCenotaphs: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ahar_Cenotaphs.JPG/1280px-Ahar_Cenotaphs.JPG',
    fatehSagarLake: '/images/places/fateh-sagar-lake-unsplash.jpg',
    saheliyonKiBari: commons('Saheliyon ki Bari Udaipur.jpg'),
    bagoreKiHaveli: commons('20191207 Gangaur Ghat and Bagore Ki Haveli, Udaipur 1524 7266.jpg'),
    ambraiGhat: commons('Ambrai ghat at evening.jpg'),
    badiLake: commons('Badi Lake Udaipur.jpg'),
    // No verified Commons image found specifically of Doodh Talai itself
    // (only broader aerial shots that happen to be filed in its category)  
    // left unset intentionally rather than guessing.
  },

  food: {
    dalBaatiChurma: '/images/food/dal-baati-churma-sharmis.jpg',
    gatteKiSabzi: '/images/food/gatte-ki-sabzi-nehas.jpg',
    kachori: commons('Kachori-1.jpg'),
    kerSangri: '/images/food/ker-sangri-vanitas-corner.jpg',
    pyazKachori: commons('Rajasthani Pyaz ki Kachori.JPG'),
    mirchiVada: commons('Jodhpuri Mirchi Bada.jpg'),
    rabri: commons('Homemade Rabri.jpg'),
    malpua: commons('Indian pancakes-malpua.jpg'),
    jalebi: commons('Jalebi (33427455535).jpg'),
    mohanThal: commons('Mohanthal1.jpg'),
    kulhadChai: commons('Kullad chai.jpg'),
    rajasthaniThali: commons('Thali - Udaipur - Rajasthan - DSC 0009.jpg'),
    // No verified Commons image found specifically of Mawa Kachori   left unset.
  },

  hotels: {
    tajLakePalace: 'https://images.unsplash.com/photo-1633702738734-443da2c18f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    oberoiUdaivilas: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlo9LqqvZXYz-09r_Ccit5cSwJcPet2Xp02cwwq2c7gNb-DySHrMLZ7iUotUCZl1TXp3Yc4GwJyAbDnMYSWBVWvi99tWwW7Gii4skf1fwW5ZwqoWZrrqXUOpRO-qHWR8KNpn-ja=s680-w680-h510-rw',
    // No verified, hotlink-safe images found for the remaining named
    // properties (Leela Palace Udaipur, Amet Haveli, Fateh Garh, Fateh
    // Vilas, Udaigarh, Bloom Boutique, Wyndham Grand, Ananta)   branded
    // hotel photography is almost always copyrighted professional work
    // with no Wikimedia Commons equivalent. Left unset intentionally.
  },
} as const
























