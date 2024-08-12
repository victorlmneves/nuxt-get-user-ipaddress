import { type H3Event, defineEventHandler } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    event.node.res.setHeader('X-Frame-Options', 'SAMEORIGIN');
});
