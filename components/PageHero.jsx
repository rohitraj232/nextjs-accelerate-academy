export default function PageHero({
    badge = "About Us",
    title = "Empowering Students to Build a Better Future",
    description = "We are passionate about providing quality education, practical learning and the right guidance to help students achieve their goals.",
}) {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 md:py-28">
            {/* Background Shapes */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center text-white">

                    <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-200 backdrop-blur">
                        {badge}
                    </span>

                    <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {title}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-8 text-slate-300">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="/courses"
                            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
                        >
                            Explore Courses
                        </a>

                        <a
                            href="/contact"
                            className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}