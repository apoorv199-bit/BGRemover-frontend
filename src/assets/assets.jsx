import logo from "./web.png";
import video_banner from "./home-page-banner.mp4";
import people from "./people.png";
import people_org from "./people-org.png";
import credits from "./dollar.png";
import animals from "./animals.png";
import animals_org from "./animals-org.jpg";
import products from "./products.png";
import products_org from "./products-org.jpg";
import cars from "./cars.png";
import cars_org from "./cars-org.jpg";

export const assets = {
  logo,
  video_banner,
  people,
  people_org,
  animals,
  animals_org,
  products,
  products_org,
  cars,
  cars_org,
  credits,
};

export const steps = [
  {
    step: "Step 1",
    title: "Select an image",
    description: (
      <>
        First, choose the image you want to remove background from by clicking
        on "Start from a photo".
        <br />
        Your image format can be PNG or JPG.
        <br />
        We support all image dimensions.
      </>
    ),
  },
  {
    step: "Step 2",
    title: "Let magic remove the background",
    description: (
      <>
        Our tool automatically removes the background from your image. Next, you
        can choose a background color.
        <br />
        Our most popular options are white and transparent backgrounds, but you
        can pick any color you like.
      </>
    ),
  },
  {
    step: "Step 3",
    title: "Download your image",
    description: (
      <>
        After selecting a new background color, download your photo and you're
        done!
        <br />
        You can also save your picture in the photoroom App by creating an
        account.
      </>
    ),
  },
];

export const plans = [
  {
    id: "Basic",
    name: "Basic package",
    price: 499,
    credits: "100 Credits",
    description: "Best for personal use",
    popular: false,
  },
  {
    id: "Premium",
    name: "Premium package",
    price: 899,
    credits: "250 Credits",
    description: "Best for business use",
    popular: true,
  },
  {
    id: "Ultimate",
    name: "Ultimate package",
    price: 1499,
    credits: "1000 Credits",
    description: "Best for enterprise use",
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "We are impressed by the AI and think it's the best choice on the market.",
    author: "Anthony Walker",
    handle: "@_webarchitect_",
  },
  {
    id: 2,
    quote:
      "remove.bg is leaps and bounds ahead of the competitions. A thousands times better. It simplified the whole process.",
    author: "Sarah Johnson",
    handle: "@techlead_sarah",
  },
  {
    id: 3,
    quote:
      "We were impressed by its ability to account for pesky, feathery hair without making an image look jagged and amaturish.",
    author: "Michael Chen",
    handle: "@coding_newbie",
  },
];

export const FOOTER_CONSTANTS = [
  {
    url: "https://in.linkedin.com/in/sahuapoorv",
    logo: "https://img.icons8.com/fluent/30/000000/linkedin-2.png",
  },
  {
    url: "https://www.instagram.com/apoorv_sahu_/?hl=en",
    logo: "https://img.icons8.com/fluent/30/000000/instagram-new.png",
  },
  {
    url: "https://x.com/apoorvsahu199",
    logo: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=4D4D4D",
  },
];

export const categoryData = [
  {
    id: "people",
    label: "People",
    images: {
      original: people_org,
      processed: people,
    },
  },
  {
    id: "products",
    label: "Products",
    images: {
      original: products_org,
      processed: products,
    },
  },
  {
    id: "animals",
    label: "Animals",
    images: {
      original: animals_org,
      processed: animals,
    },
  },
  {
    id: "cars",
    label: "Cars",
    images: {
      original: cars_org,
      processed: cars,
    },
  },
];
