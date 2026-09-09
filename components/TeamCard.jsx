import Image from "next/image";

export default function TeamCard({
    image,
    name,
    role,
    experience,
    description,
}) {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-80 overflow-hidden">

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Experience Badge */}
                {experience && (
                    <div className="absolute top-5 right-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur">
                        {experience}
                    </div>
                )}

                {/* Name on Image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">

                    <p className="text-sm font-medium text-indigo-200">
                        {role}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                        {name}
                    </h3>

                </div>

            </div>

            {/* Content */}
            <div className="p-6">

                {description && (
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {description}
                    </p>
                )}

                {/* Bottom Row */}
                <div className="mt-5 flex items-center justify-between">

                    <span className="text-sm font-semibold text-primary">
                        Expert Mentor
                    </span>

                    {/* Social Buttons */}
                    <div className="flex gap-2">

                        <button
                            type="button"
                            aria-label={`${name} LinkedIn`}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-slate-300"
                        >
                            in
                        </button>

                        <button
                            type="button"
                            aria-label={`${name} profile`}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-slate-300"
                        >
                            ↗
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}