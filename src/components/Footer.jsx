import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#281085] text-[#f9f8fb] !py-8 !px-4 text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm text-[#eae9e9]">
          &copy; 2025 Creative Arts Department, University of Lagos. All rights
          reserved.
        </p>
        <ul className="list-none flex gap-4 justify-center mb-4 md:mb-0">
          <li>
            <a
              href=""
              className="text-[#f9f8fb] no-underline text-2xl transition-colors hover:text-[#eae9e9]"
            >
              <FaTiktok />
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#f9f8fb] no-underline text-2xl transition-colors hover:text-[#eae9e9]"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <p className="text-sm text-[#eae9e9]">
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f9f8fb] transition-colors hover:text-[#eae9e9]"
          >
            Joseph Tunde
          </a>{" "}
          and{" "}
          <a
            href=""
            className="text-[#f9f8fb] transition-colors hover:text-[#eae9e9]"
          >
            Tolu Oduro
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
