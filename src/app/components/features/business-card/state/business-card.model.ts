export interface BusinessCardFont {
  color: string;
  family: string;
  size: number;
  weight: string;
}

export interface BusinessCardImage {
  src: string;
  height: number;
  width: number;
  opacity: number;
  active: boolean;
  borderRadius: number;
}

export interface BusinessCard {
  name: string;
  phone: string;
  email: string;
  position: string;
  catchPhrase: string;
  background: string;
  doubleSided: boolean;
  primaryFont: BusinessCardFont;
  secondaryFont: BusinessCardFont;
  tertiaryFont: BusinessCardFont;
  borderRadius: number;
  image?: BusinessCardImage;
}
