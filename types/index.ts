import { SVGProps } from "react";

export enum paragraphType {
  REGULAR = "regular",
  QUOTE = "quote",
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

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
