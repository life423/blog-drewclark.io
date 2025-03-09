import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    content
  };
}

// Create a new post
export async function createPost(slug, postData) {
  const { title, date, content } = postData;
  
  // Format the frontmatter and content
  const frontmatter = `---
title: "${title}"
date: "${date}"
---

${content}`;
  
  // Create file
  const filePath = path.join(postsDirectory, `${slug}.md`);
  await fsPromises.writeFile(filePath, frontmatter, 'utf8');
  
  return { slug, title, date };
}

// Update an existing post
export async function updatePost(slug, postData) {
  const { title, date, content } = postData;
  
  // Format the frontmatter and content
  const frontmatter = `---
title: "${title}"
date: "${date}"
---

${content}`;
  
  // Update file
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post with slug "${slug}" does not exist`);
  }
  
  await fsPromises.writeFile(filePath, frontmatter, 'utf8');
  
  return { slug, title, date };
}

// Delete a post
export async function deletePost(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post with slug "${slug}" does not exist`);
  }
  
  await fsPromises.unlink(filePath);
  
  return { success: true };
}
