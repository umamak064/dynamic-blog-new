import Link from "next/link";
import React from 'react';
const blogPosts = [
  { id: "1", title: "The Future of AI in Web Development", image: "/blog1.png" },
  { id: "2", title: "Why TypeScript is Essential for Modern Apps", image: "/blog2.jpg" },
];

export default function BlogList() {
  return (
    <ul className="space-y-4">
      {blogPosts.map((post) => (
        <li key={post.id} className="bg-gray-100 p-4 rounded-md shadow flex items-center space-x-4">
          <img src={post.image} alt={post.title} className="w-16 h-16 rounded-md object-cover" />
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
