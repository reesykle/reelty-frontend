import __stayListing from "./json/__stayListing.json";
import __experiencesListing from "./json/__experiencesListing.json";
import {
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
} from "./taxonomies";

import { DEMO_AUTHORS } from "./authors";

const carsImgs = [
 "/images/cars/1.png",
 "/images/cars/2.png",
 "/images/cars/3.png",
 "/images/cars/4.png",
 "/images/cars/5.png",
 "/images/cars/6.png",
 "/images/cars/7.png",
 "/images/cars/8.png",
 "/images/cars/9.png",
 "/images/cars/10.png",
 "/images/cars/11.png",
 "/images/cars/12.png",
 "/images/cars/13.png",
 "/images/cars/14.png",
 "/images/cars/15.png",
 "/images/cars/16.png"
];

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
  };
});

const DEMO_EXPERIENCES_LISTINGS = __experiencesListing.map(
  (post, index): ExperiencesDataType => {
    //  ##########  GET CATEGORY BY CAT ID ######## //
    const category = DEMO_EXPERIENCES_CATEGORIES.filter(
      (taxonomy) => taxonomy.id === post.listingCategoryId
    )[0];

    return {
      ...post,
      saleOff: !index ? "-20% today" : post.saleOff,
      isAds: !index ? true : post.isAds,
      author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
      listingCategory: category,
    };
  }
);


export { DEMO_STAY_LISTINGS, DEMO_EXPERIENCES_LISTINGS };
