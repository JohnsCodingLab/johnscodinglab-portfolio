import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

// Replace with your actual backend URL when in production
const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://portfolio-api-pm4w.onrender.com/api";

async function getPortfolioData() {
    try {
        // Run fetches in parallel
        const [projectsRes, blogRes] = await Promise.all([
            fetch(`${API_URL}/projects`, { next: { revalidate: 60 } }),
            fetch(`${API_URL}/blog`, { next: { revalidate: 60 } }),
        ]);

        const projects = projectsRes.ok ? await projectsRes.json() : [];
        const blogPosts = blogRes.ok ? await blogRes.json() : [];

        // Assuming NestJS backend returns wrapped payload like { data: [...] } depending on your interceptor
        return {
            projects: projects.data || projects,
            blogPosts: blogPosts.data || blogPosts,
        };
    } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
        return { projects: [], blogPosts: [] };
    }
}

export default async function Home() {
    // Top level await to fetch backend data on the server
    const { projects, blogPosts } = await getPortfolioData();

    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Experience /> {/* NEW */}
            {/* Pass fetched data directly into Client Components */}
            <Projects projects={projects} />
            <Blog posts={blogPosts} /> {/* NEW */}
            <Contact />
        </div>
    );
}
