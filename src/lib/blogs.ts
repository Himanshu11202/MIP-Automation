export const blogs = [
  {
    id: "blog-id-1",
    img: "/test-img-desktop.png",
    alt: "blog-1-alt-img",
    title: "blog 1",
    body: `
    # 🚀 Pull Request Tags Guide

    Use the format:  
    \`[_TAG_] : Short description of the pull request\`

    Example:  
    \`[FEATURE] : Add biometric login support\`

    ---

    ## ✨ New Features

    | Tag                | Description                  |
    | ------------------ | ---------------------------- |
    | \`[FEATURE]\`        | Introduces a new feature     |
    | \`[ENHANCEMENT]\`    | Improves an existing feature |
    | \`[UI-UPDATE]\`      | Visual or layout improvement |
    | \`[UX-IMPROVEMENT]\` | Enhances user experience     |

    ---
    `,
  },
  {
    id: "blog-id-2",
    img: "/test-img-desktop.png",
    alt: "blog-1-alt-img",
    title: "blog 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
  {
    id: "blog-id-3",
    img: "/test-img-desktop.png",
    alt: "blog-1-alt-img",
    title: "blog 4",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
  {
    id: "blog-id-4",
    img: "/test-img-desktop.png",
    alt: "blog-1-alt-img",
    title: "blog 4",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta qui autem non a! Ipsum, blanditiis. Voluptas atque maiores doloremque sint, praesentium dolorem cum animi tempore optio ratione necessitatibus recusandae?",
  },
];

export const getBlog = (id: string) => {
  const blog = blogs.find((b) => b.id === id);

  return blog;
};
