module.exports = {
    routeHandler: (routes, req, res) => {
        const route = routes[req.method.toLowerCase()] || routes['any'];

        return route(req, res);
    } 
}
