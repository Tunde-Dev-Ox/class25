import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import client from "../../lib/contentful";
import MainHeader from "../../components/headers/mainheaders";
import Footer from "../../components/Footer";

const FinalistsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const finalistsPerPage = 12;
  const [finalists, setFinalists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const totalPages = Math.ceil(totalItems / finalistsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    const fetchFinalists = async () => {
      setIsLoading(true);
      try {
        const entries = await client.getEntries({
          content_type: "finalistsProfile",
          limit: finalistsPerPage,
          skip: (currentPage - 1) * finalistsPerPage,
          order: "fields.name", // optional
        });
        setFinalists(entries.items);
        setTotalItems(entries.total);
      } catch (error) {
        console.error("Error fetching finalists:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFinalists();
  }, [currentPage]);

  const categories = [
    { name: "All", to: "/" },
    { name: "Music", to: "/" },
    { name: "Theatre", to: "/" },
    { name: "Visual Arts", to: "/" },
  ];

  return (
    <div className="bg-cover">
      <MainHeader />
      <main>
        <div
          className="w-full relative h-auto"
          style={{
            background:
              "url('https://www.mmu.ac.uk/sites/default/files/styles/1536px_x2/public/2025-07/6302BAP0987.jpg.webp?itok=vu2Ah6-q')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-center max-w-[1200px] !mx-auto h-screen px-4">
            <div className="text-center mb-8 flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl mb-4 text-[#f9f8fb] font-bold">
                Meet the Class of 2025
              </h1>
              <p className="text-lg md:text-xl text-[#eae9e9] max-w-xl leading-relaxed">
                Celebrating five years of creativity, growth, and unforgettable
                memories at the Creative Arts Department, University of Lagos.
              </p>
              <div className="mt-12 text-2xl text-[#f9f8fb] cursor-pointer bg-transparent border border-[#f9f8fb] flex items-center justify-center w-[50px] h-[50px] rounded-full transition-colors hover:text-[#eae9e9]">
                <FaArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full bg-[#f9f8fb] flex justify-start !pt-8 !bg-cover"
          style={{ background: "url('/noise.svg') no-repeat" }}
        >
          <ul className="flex flex-row gap-3 text-base text-[#281085] max-w-[1200px] w-full mx-auto items-center justify-start !pl-4">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to={cat.to}
                  className="no-underline bg-[#281085] !px-4 !py-2 rounded transition font-medium text-base text-[#f9f8fb]"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-full !pt-8 !pb-18 !pl-4 !bg-cover"
          style={{ background: "url('/noise.svg') no-repeat center center" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-4">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              finalists.map((finalist) => {
                const { name, major, image } = finalist.fields;
                const imageUrl = image?.fields?.file?.url;

                return (
                  <Link
                    to={`/finalists/${finalist.fields.slug}`}
                    key={finalist.fields.slug}
                    className="bg-[#f9f8fb] rounded-lg overflow-hidden border border-[#cbcaca] transition-transform hover:-translate-y-1 no-underline"
                  >
                    <figure className="m-0 w-full h-[200px] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover transition-transform"
                      />
                    </figure>
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold my-2 text-black">
                        {name}
                      </h3>
                      <p className="text-base text-gray-600">{major}</p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
        <div
          className="flex justify-center gap-2 !bg-cover !pb-12"
          style={{ background: "url('/noise.svg') no-repeat center center" }}
        >
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="!px-4 !py-2 bg-[#eee] border-none rounded font-bold text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`!px-4 !py-2 bg-[#eee] border-none rounded font-bold text-base cursor-pointer ${
                currentPage === i + 1 ? "bg-[#281085] text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="!px-4 !py-2 bg-[#eee] border-none rounded font-bold text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default FinalistsPage;
