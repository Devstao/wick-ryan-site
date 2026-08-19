export type InstagramPost = {
  shortcode: string;
  type: "reel" | "post";
  title: string;
  date: string;
};

export const instagramProfile = "https://www.instagram.com/wickryanam";

const instagramPosts: InstagramPost[] = [
  {
    shortcode: "DcL4dVdOiZ0",
    type: "reel",
    title: "A rodovia fantasma no extremo oeste do Amazonas",
    date: "Infraestrutura",
  },
  {
    shortcode: "DcHKAtKJ424",
    type: "reel",
    title: "Conheça a Lei de Responsabilidade Gerencial",
    date: "Gestão pública",
  },
  {
    shortcode: "DcGPuulus2b",
    type: "reel",
    title: "Transparência no uso do dinheiro público",
    date: "Transparência",
  },
];

export default instagramPosts;
