import { SVGProps } from "react";

export enum paragraphType {
  REGULAR = "regular",
  QUOTE = "quote",
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface DBOTP {
  id: string;
  otp: string;
  email: string;
  expires_at: Date;
}

export interface DBParagraph {
  text: string;
  no: number;
  type: paragraphType;
}

export interface DBKegiatan {
  id: string;
  name: string;
  date: Date;
  imageUrl: string;
  paragraph: DBParagraph[];
}

export interface EmailFormData {
  name: string;
  subject: string;
  text: string;
}

export interface WhatsappFormData {
  name: string;
  text: string;
}

export interface Profile {
  id?: string;
  email: string;
  nama_lengkap: string;
  no_tamu: string;
  nta: string;
  tingkatan: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  golongan_darah: string;
  no_hp: string;
  julukan: string;
  avatar_url: string;
  angkatan: string;
  ambalan: string;
  social_media: string;
}
