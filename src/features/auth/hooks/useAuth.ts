import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const context = use(AuthContext);
  if (!context) throw new Error("useAuth deve essere usato all'interno di AuthProvider");
  return context;
}
