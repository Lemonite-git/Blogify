const About = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 max-w-4xl mx-auto px-4">
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About Blogify
        </h1>
        <p className="text-lg text-gray-600">
          Your go-to platform for discovering and sharing amazing tech content
        </p>
      </div>

      {/* MISSION */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Blogify, we believe in the power of knowledge sharing and community-driven learning. 
          Our mission is to create a platform where developers, tech enthusiasts, and learners 
          from all backgrounds can come together to share their experiences, insights, and expertise.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're a seasoned professional or just starting your journey in tech, Blogify 
          provides you with the tools and community to grow, learn, and inspire others.
        </p>
      </div>

      {/* WHAT WE OFFER */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Quality Content
            </h3>
            <p className="text-gray-700">
              In-depth tutorials, articles, and guides covering the latest technologies, 
              frameworks, and best practices in software development.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Active Community
            </h3>
            <p className="text-gray-700">
              Connect with fellow developers, share your knowledge, and engage in 
              meaningful discussions through comments and interactions.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Easy Publishing
            </h3>
            <p className="text-gray-700">
              Simple and intuitive tools to write, format, and publish your stories 
              with support for code snippets and rich media.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Discover & Learn
            </h3>
            <p className="text-gray-700">
              Explore trending topics, popular posts, and curated content across 
              various categories to expand your knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Values
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
          <li>
            <strong>Open Knowledge:</strong> We believe knowledge should be accessible to everyone
          </li>
          <li>
            <strong>Community First:</strong> Building a supportive and inclusive community is our priority
          </li>
          <li>
            <strong>Quality Over Quantity:</strong> We value well-crafted, insightful content
          </li>
          <li>
            <strong>Continuous Learning:</strong> Embracing growth and staying curious about technology
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg mb-6">
          Start sharing your knowledge and connect with thousands of developers worldwide
        </p>
        <a
          href="/write"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Write Your First Post
        </a>
      </div>
    </div>
  );
};

export default About;
