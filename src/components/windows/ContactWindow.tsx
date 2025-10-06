import { useState } from "react";
import { toast } from "sonner";

const ContactWindow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submission:", {
      ...formData,
      timestamp: new Date().toISOString(),
    });
    toast.success("Message logged to console! (This is a static portfolio)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 space-y-3">
      <div className="bg-[#0054E3] text-white p-3 rounded">
        <h2 className="text-xl font-bold">📧 Let's Connect</h2>
        <p className="text-sm">Have a project, teaching inquiry, or just want to chat? Reach out!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-bold mb-1 text-gray-700">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border-2 border-gray-400 focus:border-[#0054E3] outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1 text-gray-700">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border-2 border-gray-400 focus:border-[#0054E3] outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-1 text-gray-700">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 py-2 border-2 border-gray-400 focus:border-[#0054E3] outline-none resize-none"
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#ECE9D8] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 hover:bg-[#0054E3] hover:text-white hover:border-[#0054E3] text-sm font-bold transition-colors active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white"
        >
          📨 Send Message
        </button>
      </form>

      <div className="bg-[#ECE9D8] border-2 border-gray-400 p-4 rounded space-y-2">
        <h3 className="font-bold text-sm mb-2 text-[#0054E3]">
          📞 Direct Contact Information
        </h3>
        <div className="text-sm space-y-1">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a
              href="mailto:aliakbarkhana79@gmail.com"
              className="text-blue-600 hover:underline"
            >
              aliakbarkhana79@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <a href="tel:+918000939156" className="text-blue-600 hover:underline">
              +91 8000939156
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
