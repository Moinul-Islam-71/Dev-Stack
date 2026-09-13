import { toast } from "react-toastify";
import type { TechnologyType } from "../type"

export interface TechnologyCardProps {
  technology: TechnologyType,
  addedTechnology: TechnologyType[],
  handleAddedTechnologies: (technology: TechnologyType) => void
}

export default function TechnologyCard({
  technology,
  addedTechnology,
  handleAddedTechnologies
}: TechnologyCardProps) {

  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge
  } = technology


  const isAdded = addedTechnology.some(
    (item) => item.id === technology.id
  );

  const notify = (isAdded: boolean, techID: string) => {
    const id = techID.toUpperCase();

    return (
      isAdded ? 
      toast.error(`${id} Already Added!`) : 
      toast.success(`${id} Added successfully`)
    )
  }

  const handleAdded = (id: string) => {
    if(isAdded) {
      notify(isAdded, id)
      return;
    }
    
    notify(isAdded, id);
    handleAddedTechnologies(technology);
  }


  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">

      <div>

        
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">

          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">

            <img
              src={icon}
              alt={name}
              className="w-full h-full object-contain"
            />

          </div>


          {badge && (
            <span className="bg-sky-50 text-sky-500 font-medium text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
              {badge}
            </span>
          )}

        </div>


        
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
          {name}
        </h3>

        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
          {description}
        </p>

      </div>


      <div>

        
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 mb-4 sm:mb-5 pt-4 border-t border-slate-50">

          <span className="bg-slate-100 text-slate-700 px-2.5 sm:px-3 py-1.5 rounded-md font-medium">
            {category}
          </span>

          <span className="font-medium text-slate-500">
            {difficulty}
          </span>

          <div className="flex items-center gap-1 font-semibold text-slate-800">

            <span className="text-amber-400 text-sm">
              ★
            </span>

            <span>
              {rating}
            </span>

          </div>

        </div>


        
        <button
          onClick={() => handleAdded(technology.id)}
          className="w-full bg-[#0B0F19] hover:bg-slate-800 text-white font-medium text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors duration-200 cursor-pointer"
        >

          {
            isAdded
              ? "✔ Added To Stack"
              : "Add to Stack"
          }

        </button>

      </div>

    </div>
  )
}

