import { createMiddleware } from "hono/factory";
import { secureHeaders } from "hono/secure-headers";
import type { AppEnv } from "../types";

const REFERRER_POLICY = "strict-origin-when-cross-origin";

const withoutCsp = secureHeaders({
  referrerPolicy: REFERRER_POLICY,
  permissionsPolicy: {
    camera: [],
    microphone: [],
    geolocation: [],
    payment: [],
    usb: [],
  },
});

const withCsp = secureHeaders({
  referrerPolicy: REFERRER_POLICY,
  contentSecurityPolicy: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'"],
    imgSrc: ["'self'", "data:"],
    connectSrc: ["'self'"],
    fontSrc: ["'self'"],
    frameSrc: ["https://www.youtube-nocookie.com"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
  },
  permissionsPolicy: {
    camera: [],
    microphone: [],
    geolocation: [],
    payment: [],
    usb: [],
  },
});

export const securityHeaders = createMiddleware<AppEnv>((c, next) => {
  const isSecureConnection = new URL(c.req.url).protocol === "https:";
  return (isSecureConnection ? withCsp : withoutCsp)(c, next);
});
