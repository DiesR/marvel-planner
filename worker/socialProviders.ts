import type { Env } from "./env";

interface ProviderCredentials {
  clientId: string;
  clientSecret: string;
}

function credentials(clientId?: string, clientSecret?: string): ProviderCredentials | undefined {
  return clientId && clientSecret ? { clientId, clientSecret } : undefined;
}

export function socialProviders(env: Env) {
  const google = credentials(env.GOOGLE_CLIENT_ID, env.GOOGLE_CLIENT_SECRET);
  return {
    ...(google && { google }),
  };
}
