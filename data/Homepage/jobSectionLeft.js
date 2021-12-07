import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "Discover and contribute to social impact projects you care about effortlessly",
    subtitle: `You can meet like-minded people and be part of the social impact community.
    Our 1-Click Application feature and AI recommendations will save you time and hassle.
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "Find paid opportunities where you can learn new skills and achieve your goals",
    subtitle: `You can find one-off, part-time, and full-time opportunities at social impact organizations tackling various social issues and Sustainable Development Goals (SDGs).
    Our proprietary algorithms ensure meaningful connections with people you want to meet and reduce the risk of mismatches.
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "Take full control of and monetize your data",
    subtitle: `You are the owner of your data and you can sell it to whomever you please through our blockchain-based platform.
    You can join social impact projects, buy & sell socially conscious products, and monetize your data. All in one platform.
    `
  }
]

export default jobItem
