export default function FeatureCard({
    icon,
    title,
    description,
}) {
    return (
        <div className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl transition group-hover:bg-primary group-hover:text-white">
                {icon}
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {description}
            </p>

        </div>
    );
}