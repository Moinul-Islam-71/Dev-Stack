import { Suspense, useState } from "react";
import CartSection from "./CartSection";
import Technologies from "./Technologies";
import type { TechnologyType } from "../type";
import { toast } from "react-toastify";

const loadTechnologiesPromise = async () => {
    const res = await fetch(
        `${import.meta.env.BASE_URL}data/technologies.json`
    );
    const data = await res.json();
    return data;
};

const technologiesPromise = loadTechnologiesPromise();


export default function TechnologiesContainer() {

    const [addedTechnology, setAddedTechnology] = useState<TechnologyType[]>([]);


    const handleAddedTechnologies = (
        technology: TechnologyType
    ): void => {

        if (addedTechnology.includes(technology)) {

            const newAddedTechnology = addedTechnology.filter(
                (item) => item !== technology
            );

            setAddedTechnology(newAddedTechnology);

        }

        else {

            const newAddedTechnology = [
                ...addedTechnology,
                technology
            ];

            setAddedTechnology(newAddedTechnology);

        }
    };


    const handleRemove = (techID: string): void => {

        const id = techID.toUpperCase();

        const newAddedTechnology = addedTechnology.filter(
            (technology) => technology.id !== techID
        );

        setAddedTechnology(newAddedTechnology);
        toast.error(`${id} Removed!`)
    };
    
    
    const handleRemoveAll = (): void => {
        setAddedTechnology([]);
        toast.error(`All Stacks Removed!`)
    };


    return (
        <div className="px-8">

            <h2 className="text-3xl font-bold">
                Explore the{" "}
                <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">
                    Technologies
                </span>
            </h2>

            <p className="mt-3 mb-6 text-slate-500">
                Pick one technology per category to build your ideal stack.
            </p>


            <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-6">

                <Suspense
                    fallback={
                        <div className="mt-20 flex items-center justify-center">
                            <span className="loading loading-spinner loading-lg w-10 text-error md:w-20"></span>
                        </div>
                    }
                >
                    <Technologies
                        loadTechnologiesData={technologiesPromise}
                        addedTechnology={addedTechnology}
                        handleAddedTechnologies={handleAddedTechnologies}
                    />
                </Suspense>


                <CartSection
                    selectedStack={addedTechnology}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />

            </div>


        </div>
    );
}