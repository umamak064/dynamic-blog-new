import BlogList from "@/components/bloglist";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Tech Insights Blog</h1>
      <BlogList />
    </main>
  );
}