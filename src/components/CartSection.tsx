import type { TechnologyType } from "../type";

interface CartSectionProps {
    selectedStack: TechnologyType[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

export default function CartSection({
    selectedStack,
    onRemove,
    onRemoveAll,
}: CartSectionProps) {

    return (
        <div className="w-full h-fit max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-md">

            
            <div>
                <h2 className="text-xl font-semibold text-slate-950">
                    Your Stack
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    {selectedStack.length}{" "}
                    {selectedStack.length === 1 || selectedStack.length === 0
                        ? "Technology"
                        : "Technologies"}{" "}
                    Selected
                </p>
            </div>


            
            <div className="mt-4 space-y-2">

                {selectedStack.length > 0 ? (

                    selectedStack.map((technology) => (

                        <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
                        >

                            <div className="flex items-center gap-3">

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-9 w-9 object-contain"
                                />

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-800">
                                        {technology.name}
                                    </h3>

                                    <p className="text-[9px] text-slate-400">
                                        {technology.category}
                                    </p>
                                </div>

                            </div>


                            <button
                                onClick={() => onRemove(technology.id)}
                                className="cursor-pointer text-2xl font-light text-slate-400 hover:text-red-500"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ×
                            </button>

                        </div>

                    ))

                ) : (

                    <p className="py-6 text-center text-sm text-slate-400">
                        No items selected yet.
                    </p>

                )}

            </div>


            
            {selectedStack.length > 0 && (

                <button
                    onClick={onRemoveAll}
                    className="mt-12 w-full cursor-pointer rounded-lg border border-red-300 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50"
                >
                    Remove All
                </button>

            )}

        </div>
    );
}