import { notFound } from "next/navigation";
import CommentSection from "@/components/CommentSection";


const blogPosts: Record<string, { title: string; content: string; image: string }> = {
  "1": {
    title: "The Future of AI in Web Development",
    content: "Artificial Intelligence is transforming web development. From AI-powered chatbots to automated UI generation, the impact is massive.",
    image: "/img1.jpeg",
  },
  "2": {
    title: "Why TypeScript is Essential for Modern Apps",
    content: "TypeScript has become a game-changer in modern app development. It provides static typing, improves code maintainability, and catches errors early in development.",
    image: "/img2.png",
  },
};


export default function BlogPost({ params }: { params: { id: string } }) {
  if (!params?.id || !blogPosts[params.id]) {
    return notFound();
  }

  const post = blogPosts[params.id];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <p className="text-gray-700 mb-4">{post.content}</p>
      <CommentSection />
    </div>
  );
}
