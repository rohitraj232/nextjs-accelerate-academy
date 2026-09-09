export default function SectionHeading({
    badge,
    title,
    description,
    center = true,
}) {
    return (
        <div
            className={`${center ? "text-center mx-auto" : "text-left"
                } max-w-3xl mb-12`}
        >
            {badge && (
                <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm">
                    {badge}
                </span>
            )}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-7">
                    {description}
                </p>
            )}
        </div>
    );
}
