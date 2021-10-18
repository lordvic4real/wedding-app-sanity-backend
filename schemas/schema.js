// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import home from "./home";
import blockContent from "./blockContent";
import aboutHer from "./aboutHer";
import aboutHim from "./aboutHim";
import gallery from "./gallery";
import proposed from "./proposed";
import location from "./location";
import accomodation from "./accomodation";
import groomsmen from "./groomsmen";
import bridesmaid from "./bridesmaid";
import giftRegistry from "./giftRegistry";
// import sliderImage from "./sliderImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    aboutHer,
    aboutHim,
    gallery,
    proposed,
    location,
    accomodation,
    blockContent,
    groomsmen,
    bridesmaid,
    giftRegistry,
  ]),
});
