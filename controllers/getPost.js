const BlogPost = require("../models/blogPost.js");

module.exports = async (req, res) => {
  const blogpost = await (await BlogPost.findById(req.params.id)).populate(
    "userId"
  );
  console.log(blogpost);
  res.render("post", {
    blogpost,
  });
};
