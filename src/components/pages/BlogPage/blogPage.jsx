import React from "react";
import blog1 from "../../../assets/blog-1.png";
import blog2 from "../../../assets/blog-2.png";
import blog3 from "../../../assets/blog-3.png";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "November 10, 2021",
      title: "LaserNetUs Website Launch",
      description:
        "LaserNetUs has a new brand identity and website designed by eDesign Interactive. The homepage is dynamic and eye-catching. The website aims to highlight the innovative nature of high-intensity laser technology.",
      image: blog1,
    },
    {
      id: 2,
      date: "February 21, 2021",
      title: "How we helped an Orthopedic Practice Increase their traffic",
      description:
        "We are honored and excited to be working with The Orthopedic Institute of New Jersey, the largest practice in northwest New Jersey.",
      image: blog2,
    },
    {
      id: 3,
      date: "July 03, 2021",
      title: "The Increasing Importance of Web Accessibility",
      description: "Is your website accessible to visitors with impairments?",
      image: blog3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-[#797979] text-lg max-w-2xl mx-auto leading-relaxed">
            Insights, thoughts, industry trends, marketing tips, eDesign news,
            <br />
            nerdy stuff, it's all here.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 cursor-pointer">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="text-[#797979] mb-2">
                  <h5>{post.date}</h5>
                </div>
                <h4 className=" text-[#3B3950] mb-3">{post.title}</h4>
                <p className="text-[#797979] leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <button className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white btn-text px-8 py-3 rounded-sm transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
