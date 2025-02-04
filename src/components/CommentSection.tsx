"use client";
import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Comments</h3>
      <ul className="mt-2 space-y-2">
        {comments.map((c, index) => (
          <li key={index} className="p-2 bg-gray-200 rounded">{c}</li>
        ))}
      </ul>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="w-full p-2 mt-4 border rounded"
      />
      <button
        onClick={handleCommentSubmit}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
