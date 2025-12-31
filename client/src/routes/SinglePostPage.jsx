import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Welcome to our blog! We're dedicated to bringing you the latest insights, 
            tutorials, and best practices from the world of web development and technology. 
            Whether you're a seasoned developer or just starting your coding journey, you'll 
            find valuable content that helps you grow your skills and stay current with 
            industry trends. Our mission is to create a community where knowledge sharing 
            and continuous learning are at the forefront.
          </p>
          <p>
            In today's rapidly evolving tech landscape, staying informed is crucial for 
            professional growth. We cover a wide range of topics including modern JavaScript 
            frameworks, backend development, database optimization, and deployment strategies. 
            Each article is carefully crafted to provide practical examples and real-world 
            solutions that you can apply to your own projects immediately.
          </p>
          <p>
            Our team of experienced developers and tech enthusiasts works tirelessly to 
            deliver high-quality content that matters. We believe in learning by doing, 
            which is why many of our tutorials include hands-on projects and code examples. 
            From building full-stack applications to mastering DevOps practices, we're here 
            to guide you every step of the way.
          </p>
          <p>
            The tech community thrives on collaboration and knowledge exchange. That's why 
            we encourage our readers to engage with our content, share their experiences, 
            and ask questions in the comments section. Your feedback helps us create better 
            content and build a stronger community together. Don't hesitate to reach out 
            if you have suggestions for topics you'd like us to cover.
          </p>
          <p>
            Beyond technical tutorials, we also explore career development, productivity tips, 
            and the latest industry news. Understanding the bigger picture helps developers 
            make informed decisions about their career paths and technology choices. We 
            regularly feature interviews with industry experts and highlight emerging 
            technologies that are shaping the future of software development.
          </p>
          <p>
            Join our growing community of learners and innovators. Subscribe to our newsletter 
            to receive weekly updates on new articles, exclusive content, and special announcements. 
            Follow us on social media to stay connected and participate in discussions with 
            fellow developers from around the world. Together, we can build amazing things 
            and push the boundaries of what's possible with technology.
          </p>
          <p>
            Thank you for being part of our journey. We're excited to share our knowledge 
            with you and learn from your experiences as well. Remember, every expert was 
            once a beginner, and continuous learning is the key to success in this field. 
            Happy coding, and we look forward to seeing you grow alongside our community!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data}/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id}/>
    </div>
  );
};

export default SinglePostPage;
