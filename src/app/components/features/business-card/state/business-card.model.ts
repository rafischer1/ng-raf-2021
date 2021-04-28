export interface BusinessCardFont {
  color: string;
  family: string;
  size: number;
  weight: string;
}

export interface BusinessCard {
  name: string;
  phone: string;
  email: string;
  background: string;
  doubleSided: boolean;
  primaryFont: BusinessCardFont;
  secondaryFont: BusinessCardFont;
}
