const data = require('../shared/data');

module.exports = async function (context, req) {
    try {
        const posts = data.getPosts();
        context.res.status(200).json(posts[0]);
      } catch (error) {
        context.res.status(500).send(error);
      }
    // const post = (req.query.post || (req.body && req.body.post));
    // const responseMessage = post
    //     ? "Hello, " + post + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    // context.res = {
    //     status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
}