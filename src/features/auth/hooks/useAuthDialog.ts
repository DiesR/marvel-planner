import { use } from "react";
import { AuthDialogContext } from "../context/AuthDialogContext";

export function useAuthDialog() {
  const context = use(AuthDialogContext);
  if (!context)
    throw new Error("useAuthDialog deve essere usato all'interno di AuthDialogProvider");
  return context;
}
