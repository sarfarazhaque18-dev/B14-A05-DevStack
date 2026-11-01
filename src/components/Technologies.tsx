import { useEffect, useState } from "react";
import { type Technology } from "./types/types";
import YourStack from "./YourStack";
const categories = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Styling",
  "Database",
  "Tools",
];

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load technologies from public/data.json
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies.");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch {
        setError("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Filter technologies by category
  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
        (technology) => technology.category === activeCategory
      );

  // Add a technology to the stack
  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadySelected) {
      window.alert(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: number) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section
      id="technologies"
      className="bg-gray-50/70 px-5 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className=" max-w-2xl text-center">
          

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Discover powerful tools and technologies to build modern web
            applications. Choose your favorites and create your own stack.
          </p>
        </div>


        <div className="mt-10 flex flex-col items-start gap-8 lg:flex-row">
          {/* Left side: technology cards */}
          <div className="min-w-0 flex-1">
            {/* Category filters */}
            <div className="mb-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category
                      ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-md"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-pink-300 hover:text-pink-600"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Loading state */}
            {loading && (
              <p className="py-16 text-center text-gray-500">
                Loading technologies...
              </p>
            )}

            {/* Error state */}
            {!loading && error && (
              <p className="py-16 text-center text-red-500">{error}</p>
            )}

            {/* Empty state */}
            {!loading && !error && filteredTechnologies.length === 0 && (
              <p className="py-16 text-center text-gray-500">
                No technologies found in this category.
              </p>
            )}

            {/* Responsive technology grid */}
            {!loading && !error && filteredTechnologies.length > 0 && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {filteredTechnologies.map((technology) => {
                  const isSelected = selectedTechnologies.some(
                    (item) => item.id === technology.id
                  );

                  return (
                    <article
                      key={technology.id}
                      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
                    >
                      {/* Icon and badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 transition group-hover:bg-pink-50">
                          <img
                            src={technology.icon}
                            alt={`${technology.name} logo`}
                            className="h-10 w-10 object-contain"
                            loading="lazy"
                          />
                        </div>

                        <span className="rounded-full bg-pink-50 px-3 py-1.5 text-xs font-semibold text-pink-600">
                          {technology.badge}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="mt-5 text-lg font-bold text-gray-900">
                        {technology.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
                        {technology.description}
                      </p>

                      {/* Category and difficulty */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                          {technology.category}
                        </span>

                        <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                          {technology.difficulty}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <span className="text-lg text-amber-400">★</span>
                        <span className="font-semibold text-gray-800">
                          {technology.rating}
                        </span>
                        <span className="text-gray-400">/ 5.0</span>
                      </div>

                      {/* Add button */}
                      <button
                        type="button"
                        disabled={isSelected}
                        onClick={() => handleAddToStack(technology)}
                        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${isSelected
                            ? "cursor-not-allowed bg-green-50 text-green-700"
                            : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:shadow-md"
                          }`}
                      >
                        {isSelected ? "✓ Added to Stack" : "+ Add to Stack"}
                      </button>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right side: Your Stack sidebar */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />        
          </div>
      </div>
    </section>
  );
};

export default Technologies;
