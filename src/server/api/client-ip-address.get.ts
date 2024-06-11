export default defineEventHandler(async (event) => {
    const { res, req } = event.node;

    const reqHeaders = getRequestHeaders(event);
    const forwarded = reqHeaders["x-forwarded-for"];
    const ipAddress = forwarded
        ? forwarded.split(/, /)[0]
        : req.socket.remoteAddress;

    console.info("[🚀 client-api-address.get.ts ~ ipAddress]", ipAddress);

    res.writeHead(200);

    return res.end(ipAddress);
});
