import { posts } from "@/lib/data";
import { SectionHeader } from "../SectionHeader";
import { PostList } from "./PostList";

export const Blog = () => {
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader preTitle="Our blog" title="Latest News" />
        {/* Post list */}
        <PostList posts={posts} />
      </div>
    </section>
  );
};
