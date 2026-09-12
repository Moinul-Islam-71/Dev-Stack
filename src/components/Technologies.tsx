import { use } from "react";
import type { TechnologyType } from "../type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
    loadTechnologiesData: Promise<TechnologyType[]>,
    addedTechnology: TechnologyType[],
    handleAddedTechnologies: (technology: TechnologyType) => void
}

export default function Technologies({
    loadTechnologiesData,
    addedTechnology,
    handleAddedTechnologies
}: TechnologiesProps) {

    const technologies = use(loadTechnologiesData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                technologies.map(
                    (technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            addedTechnology={addedTechnology}
                            handleAddedTechnologies={handleAddedTechnologies}
                        />
                    )
                )
            }

        </div>
    )
}

