import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-gray-400 pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Let’s Connect</h3>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://github.com/vikramkkrraj"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin" // ← update this
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-handle" // ← optional
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vikram Kumar Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
