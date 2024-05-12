import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";

export const footerTitle = "© 2020 - 2024 Freecash. All rights reserved.";

export const footerInfoList = [
  {
    title: "Über",
    links: [
      { text: "Artikel", url: "https://freecash.com/blog" },
      {
        text: "Nutzungsbedingungen",
        url: "https://freecash.com/policies/terms",
      },
      {
        text: "Datenschutzerklärung",
        url: "https://freecash.com/policies/terms",
      },
      { text: "Cookie Policy", url: "https://freecash.com/policies/cookies" },
      { text: "Impressum", url: "https://www.almedia.co/imprint" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Wie funktioniert Freecash?", url: "https://www.freecash.com" },
      { text: "FAQ", url: "https://intercom.help/freecash/en" },
      { text: "Business Inquiries", url: "https://www.almedia.co/" },
      { text: "Support", url: "https://www.freecash.co/support" },
    ],
  },
] as const;

export const footerSocialIconList = [
  { link: "https://twitter.com/freecashcom", Icon: TwitterIcon },
  { link: "https://www.facebook.com/freecashsite", Icon: FacebookIcon },
  { link: "https://www.instagram.com/freecash_com", Icon: InstagramIcon },
  { link: "https://www.reddit.com/r/FreeCash/", Icon: RedditIcon },
] as const;
