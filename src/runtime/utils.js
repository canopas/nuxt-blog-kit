import config from "./config";
import Avatar from "./assets/images/user.png";
import icon from "./assets/images/icon.svg";

function setPostFields(post, slug) {
  const publishedDate =
    post.attributes.published_on || post.attributes.publishedAt;

  const [date] = formateDate(publishedDate);

  post.attributes.published_on = date || "Draft";

  post.attributes.readingTime = getReadingTime(post.attributes.content);

  post.attributes.image_url =
    post.attributes.image.data?.attributes.url || icon;
  post.attributes.alternativeText =
    post.attributes.image.data?.attributes.alternativeText ||
    post.attributes.title;

  const author = post.attributes.author.data?.attributes;
  post.attributes.authorName = author?.name || "author";
  post.attributes.authorImage = author?.image.data
    ? author.image.data?.attributes.url
    : Avatar;
  post.attributes.authorAltText = author
    ? author.username + " image"
    : "author";
  post.attributes.authorBio = author?.bio || "";
  post.attributes.authorRole = author?.role || "Editor for Canopas";

  if (slug && post.attributes.tags[0]) {
    post.attributes.tags.map((tag) => {
      if (tag.slug == slug) {
        post.tagName = tag.name;
      }
    });
  }

  let newPost = post.attributes;
  newPost.id = post.id;
  newPost.tagName = post.tagName;
  return newPost;
}

// Calculate reading time
function getReadingTime(content) {
  if (!content) return;
  const numberOfWords = content
    .replace(/<\/?[^>]+(>|$)/g, "")
    .split(/\s/g).length;
  return Math.ceil(numberOfWords / config.WORDS_PER_MINUTE);
}

// Formate date and time from millis
function formateDate(date) {
  if (!date) return [null, null];
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // time formate
  const formattedTime = newDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return [formattedDate, formattedTime];
}

function isValidPhone(phoneNumber) {
  const phoneRegex = /^[0-9]{10}$/;
  return !phoneRegex.test(phoneNumber);
}

function isValidEmail(email) {
  const emailRegx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !emailRegx.test(email);
}

function filterPostsByCategoryAndTag(post, posts) {
  const relatedPosts = [];
  const postTags = post?.tags.map((tag) => tag.name);
  const postCategoryName = post?.category.data?.attributes.name ?? null;

  if (posts) {
    if (postCategoryName || postTags?.length > 0) {
      posts.forEach((post) => {
        let index = 0;

        const relatedTags = post.tags.map((tag) => tag.name);
        const relatedCategoryName = post.category.data?.attributes.name ?? null;

        index +=
          postCategoryName &&
          relatedCategoryName &&
          postCategoryName === relatedCategoryName
            ? 3
            : 0;

        index += postTags.filter((tag) => relatedTags.includes(tag)).length;

        if (index > 0) {
          post.index = index;
          relatedPosts.push(post);
        }
      });
    }
  }

  return relatedPosts.filter((p) => (p.is_resource = post.is_resource));
}

export {
  setPostFields,
  isValidPhone,
  isValidEmail,
  filterPostsByCategoryAndTag,
};
