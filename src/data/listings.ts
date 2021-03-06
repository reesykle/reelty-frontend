import __stayListing from "./json/__stayListing.json";
import { DEMO_STAY_CATEGORIES } from "./taxonomies";
import { DEMO_AUTHORS } from "./authors";
import { StayDataType } from "./types";

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

export { DEMO_STAY_LISTINGS };
