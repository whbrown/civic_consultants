// This file holds ambient type declarations.

interface CivicImage {
  id: number,
  "name": string,
  "alternativeText": string,
  "caption": string,
  "width": number,
  "height": number,
  "formats": null,
  "hash": string,
  "ext": string,
  "mime": string,
  "size": number,
  "url": string,
  "previewUrl": null,
  "provider": string,
  "provider_metadata": null,
  "created_at": string,
  "updated_at": string
}

interface CivicAboutUs { 
  company_name: string;
  tagline: string;
  detailed_description: string;
  created_at: string;
  updated_at: string;
  logo: CivicImage;
 }

 interface CivicNavMenuItem {
  id: number, 
  display_name: string,
  path: string,
  created_at: string,
  updated_at: string
}