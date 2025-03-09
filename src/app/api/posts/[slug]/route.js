import { NextResponse } from 'next/server';
import { getPostBySlug, updatePost, deletePost } from '@/lib/posts';
import { isAuthenticated } from '@/lib/auth';

// GET - get a specific post
export async function GET(request, { params }) {
  try {
    const paramsObj = await params;
    const { slug } = paramsObj;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error(`Get post error for slug ${params?.slug}:`, error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error fetching post' },
      { status: 500 }
    );
  }
}

// PUT - update a post
export async function PUT(request, { params }) {
  try {
    // Check authentication with fixed cookies handling
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const paramsObj = await params;
    const { slug } = paramsObj;
    const { title, date, content } = await request.json();
    
    // Validate input
    if (!title || !date || !content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Update post
    const post = await updatePost(slug, { title, date, content });
    
    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error(`Update post error for slug ${params?.slug}:`, error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error updating post' },
      { status: 500 }
    );
  }
}

// DELETE - delete a post
export async function DELETE(request, { params }) {
  try {
    // Check authentication with fixed cookies handling
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const paramsObj = await params;
    const { slug } = paramsObj;
    
    // Delete post
    await deletePost(slug);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Delete post error for slug ${params?.slug}:`, error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error deleting post' },
      { status: 500 }
    );
  }
}
