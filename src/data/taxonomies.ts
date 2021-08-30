import __taxonomies from "./jsons/__taxonomies.json";
import __courses from './jsons/courses.json'
import { TaxonomyType } from "./types";

const DEMO_CATEGORIES: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
}));

const DEMO_TAGS: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
}));

const DEMO_TRENDS: TaxonomyType[] = __courses.map(item => ({
  ...item,
  taxonomy: 'category'
}))

export { DEMO_CATEGORIES, DEMO_TAGS, DEMO_TRENDS };
