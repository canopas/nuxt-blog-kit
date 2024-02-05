import config from "./config";
import Avatar from "./assets/images/user.png";
import icon from "./assets/images/icon.svg";

function setPostFields(post, slug) {
  post = post.attributes ? post.attributes : post;
  const publishedDate = post.published_on;
  let date = "Draft";

  if (publishedDate) {
    [date] = formateDate(publishedDate);
  }

  post.published_on = date;
  
  post.readingTime = getReadingTime(post.content);

  post.image_url = post.image?.data?.attributes.url || icon;
  post.alternativeText =
    post.image?.data?.attributes.alternativeText || post.title;

  const author = post.author.data?.attributes;
  post.authorName = author?.name || "author";
  post.authorImage = author?.image.data
    ? author.image.data?.attributes.url
    : Avatar;
  post.authorAltText = author ? author.username + " image" : "author";
  post.authorBio = author?.bio || "";
  post.authorRole = author?.role || "Editor for Canopas";

  if (slug && post.tags[0]) {
    post.tags.map((tag) => {
      if (tag.slug == slug) {
        post.tagName = tag.name;
      }
    });
  }

  let newPost = post;
  newPost.id = post.id;
  newPost.tagName = post.tagName;
  newPost.recommandedPosts = post.recommandedPosts;

  if (newPost.recommandedPosts) {
    newPost.recommandedPosts.forEach((p) => {
      p = setPostFields(p);
    });
  }

  return newPost;
}

// Calculate reading time
function getReadingTime(content) {
  if (!content) return;
  const numberOfWords = content
    .replace(/<\/?[^>]+(>|$)/g, "")
    .split(/\s/g)?.length;
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

  return relatedPosts.filter((p) => p.is_resource == post.is_resource);
}

export {
  setPostFields,
  isValidPhone,
  isValidEmail,
  filterPostsByCategoryAndTag,
};
