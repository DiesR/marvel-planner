import { use } from "react";
import { SiteStatusContext } from "../context/SiteStatusContext";

export function useSiteStatus() {
  const context = use(SiteStatusContext);
  if (!context)
    throw new Error("useSiteStatus deve essere usato all'interno di SiteStatusProvider");
  return context;
}
