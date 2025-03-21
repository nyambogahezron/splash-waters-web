import ReadBlog from '@/components/ReadBlog';
import { blogPosts } from '@/lib/data';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((id) => ({
        id: id.toString(),
    }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts[params.id as unknown as keyof typeof blogPosts];

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <main className="bg-background min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative bg-[#F5F9FF] py-20">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="mb-8 inline-flex items-center text-[#0099FF] hover:underline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>

                    <ReadBlog post={post} key={post.title} />
                </div>
            </section>
        </main>
    );
}
