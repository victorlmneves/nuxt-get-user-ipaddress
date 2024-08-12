import { type H3Event, defineEventHandler, setHeader } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    setHeader(event, 'X-Frame-Options', 'SAMEORIGIN');
});
