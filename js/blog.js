const blogPostsContainer = document.querySelector(".blog-posts-container");
const url = "https://hreinngylfason.site/projectexam/wp-json/wp/v2/posts?_embed&per_page=12";

getListPosts(blogPostsContainer, url, getBlogs);