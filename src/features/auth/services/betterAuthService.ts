import { createAuthClient } from "better-auth/client";
import { MIN_PASSWORD_LENGTH } from "../constants";
import type { User } from "../types";
import { AuthError, type AuthService } from "./authService";

const client = createAuthClient({
  baseURL: window.location.origin,
  basePath: "/api/auth",
});

const REAUTHENTICATE = "Per sicurezza, esci e accedi di nuovo prima di continuare.";

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: "Email o password non corretti.",
  INVALID_EMAIL: "L'indirizzo email non è valido.",
  INVALID_PASSWORD: "La password non è corretta.",
  INVALID_NAME: "Inserisci un nome valido.",
  USER_ALREADY_EXISTS: "Esiste già un account con questa email.",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "Esiste già un account con questa email.",
  PASSWORD_TOO_SHORT: `La password deve avere almeno ${MIN_PASSWORD_LENGTH} caratteri.`,
  PASSWORD_TOO_LONG: "La password è troppo lunga.",
  SESSION_EXPIRED: REAUTHENTICATE,
  SESSION_NOT_FRESH: REAUTHENTICATE,
};
const TOO_MANY_REQUESTS = "Troppi tentativi. Attendi qualche minuto e riprova.";
const GENERIC_ERROR = "Operazione non riuscita. Riprova più tardi.";

interface ClientError {
  code?: string;
  status: number;
}

function toAuthError({ code, status }: ClientError): AuthError {
  if (status === 429) return new AuthError(TOO_MANY_REQUESTS);
  return new AuthError((code && ERROR_MESSAGES[code]) || GENERIC_ERROR);
}

function toUser({ id, email, name }: User): User {
  return { id, email, name };
}

async function requireCurrentUser(): Promise<User> {
  const { data, error } = await client.getSession();
  if (error || !data) throw new AuthError(REAUTHENTICATE);
  return toUser(data.user);
}

export const betterAuthService: AuthService = {
  async getCurrentUser() {
    const { data } = await client.getSession();
    return data ? toUser(data.user) : null;
  },

  async login(credentials) {
    const { data, error } = await client.signIn.email(credentials);
    if (error) throw toAuthError(error);
    return toUser(data.user);
  },

  async register(registration) {
    const { data, error } = await client.signUp.email(registration);
    if (error) throw toAuthError(error);
    return toUser(data.user);
  },

  async logout() {
    await client.signOut();
  },

  async updateName(name) {
    const { error } = await client.updateUser({ name });
    if (error) throw toAuthError(error);
    return requireCurrentUser();
  },

  async changePassword(change) {
    const { error } = await client.changePassword({ ...change, revokeOtherSessions: true });
    if (error) throw toAuthError(error);
  },

  async deleteAccount(password) {
    const { error } = await client.deleteUser(password ? { password } : {});
    if (error) throw toAuthError(error);
  },

  async hasPassword() {
    const { data, error } = await client.listAccounts();
    if (error) throw toAuthError(error);
    return data.some((account) => account.providerId === "credential");
  },
};
