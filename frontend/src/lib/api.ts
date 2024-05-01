import { hc } from 'hono/client';
import { type TApiRoutes } from '@backend/app';

const client = hc<TApiRoutes>('/');

export const api = client.api;
