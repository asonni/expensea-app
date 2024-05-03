import { type Context } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import {
  createKindeServerClient,
  GrantType,
  type SessionManager
} from '@kinde-oss/kinde-typescript-sdk';

// Client for authorization code flow
export const kindeClient = createKindeServerClient(
  GrantType.AUTHORIZATION_CODE,
  {
    authDomain: process.env.KINDE_DOMAIN!,
    clientId: process.env.KINDE_CLIENT_ID!,
    clientSecret: process.env.KINDE_CLIENT_SECRET!,
    redirectURL: process.env.KINDE_REDIRECT_URI!,
    logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI!
  }
);

let store: Record<string, unknown> = {};

export const sessionManager = (c: Context): SessionManager => ({
  async getSessionItem(key: string) {
    const result = getCookie(c, key);
    return result;
  },
  async setSessionItem(key: string, value: unknown) {
    const cookieOptions = {
      httpOnly: true, // true means it can't be accessed by JavaScript
      secure: true, // true means should have a SSL connection
      sameSite: 'Lax' // Lax means to avoid cross-site forgery attacks
    } as const;
    if (typeof value === 'string') {
      setCookie(c, key, value, cookieOptions);
    } else {
      setCookie(c, key, JSON.stringify(value), cookieOptions);
    }
  },
  async removeSessionItem(key: string) {
    deleteCookie(c, key);
  },
  async destroySession() {
    ['id_token', 'access_token', 'user', 'refresh_token'].forEach(key => {
      deleteCookie(c, key);
    });
  }
});
