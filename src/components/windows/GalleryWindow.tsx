import image0 from "@/assets/gallery/0.jpeg";
import image1 from "@/assets/gallery/1.jpg";
import image2 from "@/assets/gallery/2.jpg";
import image3 from "@/assets/gallery/3.jpg";
import image4 from "@/assets/gallery/4.jpg";
import image5 from "@/assets/gallery/5.jpeg";
import image6 from "@/assets/gallery/6.jpeg";
import image7 from "@/assets/gallery/7.jpg";
import image8 from "@/assets/gallery/8.jpeg";

const GalleryWindow = () => {
  const linkedinPosts = [
    { 
      id: 0, 
      thumbnail: image0, 
      title: "Hackathon Achievement",
      description: "First Major Hackathon Win",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_activity-7302279575412035584-RviV"
    },
    { 
      id: 1, 
      thumbnail: image1, 
      title: "Nothing Changes If Nothing Changes",
      description: "The day I realized my potential",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_nothing-changes-if-nothing-changes-the-day-activity-7344402011359977472-4iGP"
    },
    { 
      id: 2, 
      thumbnail: image2, 
      title: "Machine Learning Basics",
      description: "Journey into ML fundamentals",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_machinelearning-ml-basics-activity-7343399197326381056-BP7t"
    },
    { 
      id: 3, 
      thumbnail: image3, 
      title: "Deep Learning with Fast.ai",
      description: "Medical AI project showcase",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_deeplearning-fastai-medicalai-activity-7358952024786284544-tIge"
    },
    { 
      id: 4, 
      thumbnail: image4, 
      title: "Smart India Hackathon",
      description: "SIH at Arya College of Engineering",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_hackethone-sih-aryacollegeofengineering-activity-7239367299986513920-ccps"
    },
    { 
      id: 5, 
      thumbnail: image5, 
      title: "LinkedIn Consistency",
      description: "Motivational quotes and insights",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_linkedin-consistency-quotes-activity-7360496752065482755-k-Ca"
    },
    { 
      id: 6, 
      thumbnail: image6, 
      title: "Women Safety App",
      description: "Tech for Women - UX Design project",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_techforwomen-uxdesign-safetyapp-activity-7251142565582811137-TvGy"
    },
    { 
      id: 7, 
      thumbnail: image7, 
      title: "Computer Vision with OpenCV",
      description: "Python and OpenCV exploration",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_opencv-python-computervision-activity-7354541015636078593-G68c"
    },
    { 
      id: 8, 
      thumbnail: image8, 
      title: "FPS Game Development",
      description: "Tech for Game - FPS project",
      url: "https://www.linkedin.com/posts/aliiakbarkhan_techforgame-gamedev-fps-activity-7254569099580563456-PUcm"
    },
  ];

  return (
    <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">💼 LinkedIn Posts</h2>
        <p className="text-sm">My professional journey and achievements shared on LinkedIn.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {linkedinPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#ECE9D8] to-[#D4D0C8] border-2 border-gray-400 rounded overflow-hidden hover:border-[#0054E3] hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-3 bg-white">
              <h3 className="font-bold text-sm text-[#0054E3] mb-1">{post.title}</h3>
              <p className="text-xs text-gray-600">{post.description}</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-blue-600">
                <span>View on LinkedIn</span>
                <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GalleryWindow;
