import { Suspense, useState } from "react";
import CartSection from "./CartSection";
import Footer from "./Footer";
import Technologies from "./Technologies";
import type { TechnologyType } from "../type";

const loadTechnologiesPromise = async () => {
    const res = await fetch("/data/technologies.json");
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


    const handleRemove = (id: string): void => {

        const newAddedTechnology = addedTechnology.filter(
            (technology) => technology.id !== id
        );

        setAddedTechnology(newAddedTechnology);
    };


    const handleRemoveAll = (): void => {
        setAddedTechnology([]);
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


            <div className="flex gap-6">

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


            <Footer />

        </div>
    );
}