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
  position: string;
  catchPhrase: string;
  background: string;
  doubleSided: boolean;
  primaryFont: BusinessCardFont;
  secondaryFont: BusinessCardFont;
  tertiaryFont: BusinessCardFont;
  borderRadius: number;

}
