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
          order: "fields.name",
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
        {/* Hero Section */}
        <section
          className="hero-section w-full relative h-auto"
          style={{
            background: "url('/lecturers-hero.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for shade */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
          <div className="hero-content flex flex-col items-center justify-center min-h-[60vh] md:h-screen !px-4 !py-12 md:!py-0 relative z-10">
            <div className="text-center !mb-8 flex flex-col items-center justify-center">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl !mb-4 text-[#f9f8fb] font-bold">
                Meet our lecturers
              </h1>
              <p className="hero-desc text-base sm:text-lg md:text-xl text-[#eae9e9] max-w-xl leading-relaxed">
                Meet the artists, mentors, and visionaries behind our creative
                journey
              </p>
              <div className="hero-arrow !mt-12 text-2xl text-[#f9f8fb] cursor-pointer bg-transparent border border-[#f9f8fb] flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full transition-colors hover:text-[#eae9e9]">
                <FaArrowDown />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}}
        <section
          className="categories-section w-full bg-[#f9f8fb] !bg-cover !pt-8"
          style={{ background: "url('/noise.svg') no-repeat" }}
        >
          <div className="categories-nav max-w-[1200px] !mx-auto !px-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 text-base text-[#281085] items-center justify-center">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <div
                    to={cat.to}
                    className="category-link no-underline bg-[#281085] !px-3 !py-2 sm:px-4 rounded transition font-medium text-base text-[#f9f8fb]"
                  >
                    {cat.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finalists Grid Section */}
        <section
          className="finalists-section w-full !pt-8 !pb-18 !bg-cover"
          style={{ background: "url('/noise.svg') no-repeat center center" }}
        >
          <div className="flex flex-row flex-wrap justify-center items-center gap-4">
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
                    className="finalist-card min-w-[356px] !min-h-[200px] bg-[#f9f8fb] rounded-lg overflow-hidden border border-[#cbcaca] transition-transform hover:-translate-y-1 no-underline flex flex-col"
                  >
                    <figure className="finalist-image m-0 w-full h-[180px] sm:h-[200px] overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-cover transition-transform"
                      />
                    </figure>
                    <div className="finalist-info p-3 sm:p-4 text-center flex-1 flex flex-col justify-center">
                      <h3 className="finalist-name text-lg sm:text-xl font-semibold my-2 text-black">
                        {name}
                      </h3>
                      <p className="finalist-major text-sm sm:text-base text-gray-600">
                        {major}
                      </p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </section>

        {/* Pagination Section */}
        <section
          className="pagination-section flex flex-wrap !bg-cover justify-center gap-2 !pb-12"
          style={{ background: "url('/noise.svg') no-repeat center center" }}
        >
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="pagination-btn !px-3 !py-2 sm:px-4 bg-[#eee] border-none rounded font-bold text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`pagination-btn !px-3 !py-2 sm:px-4 bg-[#eee] border-none rounded font-bold text-base cursor-pointer ${
                currentPage === i + 1 ? "bg-[#281085] text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="pagination-btn !px-3 !py-2 sm:px-4 bg-[#eee] border-none rounded font-bold text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default FinalistsPage;
