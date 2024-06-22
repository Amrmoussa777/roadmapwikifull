const posts = [
  {
    title: "Community post 0",
    content:
      "The community is the heart of the project. We will be working on building a strong community of users, developers, and contributors. We will be hosting events, meetups, and hackathons to bring the community together.",
    date: "May 2022",
    user: {
      name: "John Doe",
      role: "Software Engineer",
    },
  },
  {
    title: "Community post 1",
    content:
      "The community is the heart of the project. We will be working on building a strong community of users, developers, and contributors. We will be hosting events, meetups, and hackathons to bring the community together.",
    date: "JUne 2023",
    user: {
      name: "John Doe",
      role: "Software Engineer",
    },
  },
  {
    title: "Community post 2 ",
    content:
      "The community is the heart of the project. We will be working on building a strong community of users, developers, and contributors. We will be hosting events, meetups, and hackathons to bring the community together.",
    date: "Oct 2024",
    user: {
      name: "John Doe",
      role: "Software Engineer",
    },
  },
  {
    title: "Community post 1",
    content:
      "The community is the heart of the project. We will be working on building a strong community of users, developers, and contributors. We will be hosting events, meetups, and hackathons to bring the community together.",
    date: "April 2025",
    user: {
      name: "John Doe",
      role: "Software Engineer",
    },
  },
];

export default function RoadmapCommunity() {
  return (
    <div className="bg-white p-4 w-full min-h-[250px] rounded-md cursor-pointer">
      <div className="flex flex-col gap-4 items-center ">
        <div className="flex flex-col gap-2 items-center w-full">
          <div className="self-start flex items-center justify-between w-full">
            <span className="text-[#ADAEB5] inter font-medium text-[16px] ">
              Hot
            </span>
            <div className="flex gap-2 items-center justify-end">
              <img
                src="/icons/expand.svg"
                alt="expand"
                className="h-5 w-5 cursor-pointer hover:scale-125 
              transform ease-in-out duration-500"
              />
              <img
                src="/icons/search.svg"
                alt="search"
                className="h-5 w-5 cursor-pointer hover:scale-125 
              transform ease-in-out duration-500"
              />
            </div>
          </div>
          <div className="bg-slate-100  w-full h-[1px]" />
        </div>
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className="p-2 flex items-start justify-start gap-2 w-full border border-slate-100 rounded-l"
              //   onClick={() => handlePostClick()}
            >
              {/*image*/}
              <img
                src="/pp.jpeg"
                alt="userPP"
                className="h-10 w-10 rounded-full object-cover"
              />

              {/*content*/}
              <div className="flex flex-col gap-1">
                <span className="font-inter font-medium text-[14px]">
                  {post.title}{" "}
                  <span className="font-light text-[#9C9DA4]">
                    {" • " + post.date}
                  </span>
                </span>
                <span className="font-inter font-light text-[14px] max-w-[70%] text-[#606060]">
                  {post.content}
                </span>
                <div className="flex gap-4 items-center justify-start mt-4">
                  <div className="flex gap-1 items-center justify-start cursor-pointer">
                    <img src="/icons/up.svg" alt="up" className="h-[18px] w-[18px]" />
                    <div className="font-inter font-normal text-[16px] text-[#ADAEB5]">1000</div>
                  </div>

                  <div className="flex gap-1 items-center justify-start cursor-pointer">
                    <img src="/icons/comment.svg" alt="up" className="h-[18px] w-[18px]" />
                    <div className="font-inter font-normal text-[16px] text-[#ADAEB5]">17</div>
                  </div>


                  <div className="flex gap-1 items-center justify-start cursor-pointer">
                    <img src="/icons/roadmapShare.svg" alt="up" className="h-[18px] w-[18px]" />
                  </div>

                </div>
              </div>

              {/*utils*/}
              <img src="/icons/more.svg" alt="more" className="h-4 w-4 m-2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const handlePostClick = () => {
  // Handle the click event, e.g., navigate to the post's detail page
  console.log("Post clicked:");
  // You can use a router library like react-router-dom to navigate to the post's detail page
  // navigate(`/posts/${post.id}`);
};
