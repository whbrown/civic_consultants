// This file holds ambient type declarations.

interface CivicBasicImage {
  "id": number;
  "hash": string;
  "ext": string;
  "mime": string;
  "width": number;
  "height": number;
  "size": number;
  "path": null;
  "url": string;
}

interface CivicImage extends CivicBasicImage {
  "name": string;
  "alternativeText": string;
  "caption": string;
  "formats": null | {
    "thumbnail": null | CivicBasicImage;
    "large": null | CivicBasicImage;
    "medium": null | CivicBasicImage;
    "small": null | CivicBasicImage;
  };
  "previewUrl": null;
  "provider": string;
  "provider_metadata": null;
  "created_at": string;
  "updated_at": string;
};

interface CivicAboutUs { 
  company_name: string;
  tagline: string;
  detailed_description?: string;
  created_at?: string;
  updated_at?: string;
  logo?: CivicImage;
 };

 interface CivicNavMenuItem {
  id: number;
  display_name: string;
  path: string;
  created_at: string;
  updated_at: string;
};

interface CivicProject {
"id": number;
"title": string;
"sq_footage": null | string;
"contact_name": null | string;
"contact_company": null | string;
"contact_phonenumber": null | string;
"start_date": null | date;
"end_date": null | date;
"description": null | string;
"created_at": string;
"updated_at": string;
"primary_image": CivicImage;
"additional_images": CivicImage[];
};