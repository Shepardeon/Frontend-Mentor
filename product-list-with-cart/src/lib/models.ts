export type Dessert = {
  image: ResponsiveImage;
  category: string;
  name: string;
  price: number;
};

export type ResponsiveImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
