import { NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/posts';
import { isAuthenticated } from '@/lib/auth';

// GET - get all posts
export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error('Get posts error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching posts' },
      { status: 500 }
    );
  }
}

// POST - create a new post
export async function POST(request) {
  try {
    // Check authentication - isAuthenticated uses await cookies() now
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { slug, title, date, content } = await request.json();
    
    // Validate input
    if (!slug || !title || !date || !content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create post
    const post = await createPost(slug, { title, date, content });
    
    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('Create post error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error creating post' },
      { status: 500 }
    );
  }
}
