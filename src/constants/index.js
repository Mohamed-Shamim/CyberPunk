import { lazy } from "react";

import { mitre, cable, feature_search } from "../assets/index.js";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Pages",
    url: "#pages",
  },
  {
    id: "2",
    title: "Support",
    url: "#support",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "Get start ",
    url: "#signup",
    onlyMobile: true,
  },
];

export const Cybernetic = [
  {
    id: 1,
    label: "Join The Revolution",
    icon: "→",
    color: "bg-[#F0B71F]",
  },
  {
    id: 2,
    label: "Art and Design",
    icon: "→",
    color: "bg-[#E03609]",
  },
  {
    id: 3,
    label: "Tech and Gear",
    icon: "→",
    color: "bg-[#F0B71F]",
  },
  {
    id: 4,
    label: "Stories and Lore",
    icon: "→",
    color: "bg-[#E03609]",
  },
];

export const features = [
  {
    title: "Discover the Future",
    description:
      "Explore the high-tech, low-life world where the lines between humanity blur.",
    icon: mitre,
  },
  {
    title: "Explore Features",
    description:
      "Explore the high-tech, low-life world where the lines between humanity blur.",
    icon: feature_search,
  },
  {
    title: "Stay Connected",
    description:
      "Explore the high-tech, low-life world where the lines between humanity blur.",
    icon: cable,
  },
];
