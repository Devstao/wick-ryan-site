export type InstagramPost = {
  shortcode: string;
  type: "reel" | "post";
  title: string;
};

export const instagramProfile = "https://www.instagram.com/wickryanam";

/** Fallback exibido enquanto o feed atualizado (a cada 6h) carrega. */
const instagramPosts: InstagramPost[] = [
  {
    shortcode: "DcL4dVdOiZ0",
    type: "reel",
    title: "A rodovia fantasma no extremo oeste do Amazonas",
  },
  {
    shortcode: "DcHKAtKJ424",
    type: "reel",
    title: "Conheça a Lei de Responsabilidade Gerencial",
  },
  {
    shortcode: "DcGPuulus2b",
    type: "reel",
    title: "Transparência no uso do dinheiro público",
  },
];

export default instagramPosts;
