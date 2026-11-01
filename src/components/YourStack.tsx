import { type Technology } from "./types/types";
interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside
      id="your-stack"
      className="w-full shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:w-80"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>

          <p className="mt-1 text-sm text-gray-500">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        <span className="flex h-10 min-w-10 items-center justify-center rounded-full bg-pink-50 px-3 text-sm font-bold text-pink-600">
          {selectedTechnologies.length}
        </span>
      </div>

      {/* Empty state */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 px-4 py-9 text-center">
        

          <h4 className="mt-4 font-semibold text-gray-800">
            Your stack is empty
          </h4>

        
        </div>
      ) : (
        /* Selected technologies */
        <ul className="mt-5 space-y-3">
          {selectedTechnologies.map((technology) => (
            <li
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-white">
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-7 w-7 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-900">
                  {technology.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name} from stack`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-600"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Remove all */}
      {selectedTechnologies.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}

      
    </aside>
  );
};

export default YourStack;