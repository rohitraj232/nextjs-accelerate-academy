const defaultStats = [
    {
        value: "15K+",
        label: "Students",
    },
    {
        value: "50+",
        label: "Expert Mentors",
    },
    {
        value: "100+",
        label: "Courses",
    },
    {
        value: "95%",
        label: "Student Satisfaction",
    },
];

export default function StatsSection({ stats = defaultStats }) {
    return (
        <section className="py-14 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-primary">
                                {stat.value}
                            </h3>

                            <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}