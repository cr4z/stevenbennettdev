import { SHOWCASES } from "../data/portfolio_items";

export function validateShowcaseID(requestedID: string | undefined) {
  // Validate that the user is accessing an existing page

  if (requestedID === undefined) return "/404";
  const requestedPortfolioItem = SHOWCASES.find((item) => item.id === requestedID);

  const userHasAccessedDeadPage = requestedPortfolioItem === undefined && requestedID != "";

  if (userHasAccessedDeadPage) {
    return "/404";
  } else {
    return "/portfolio/" + requestedID;
  }
}
