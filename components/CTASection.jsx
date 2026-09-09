export default function CTASection({
    title = "Ready to Start Your Learning Journey?",
    description = "Join thousands of students and learn from experienced mentors with practical, career-focused courses.",
    buttonText = "Explore Courses",
    buttonLink = "/courses",
}) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center text-white md:px-12">

                    <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl">

                        <h2 className="text-3xl md:text-4xl font-bold">
                            {title}
                        </h2>

                        <p className="mt-5 text-slate-300 leading-7">
                            {description}
                        </p>

                        <a
                            href={buttonLink}
                            className="mt-8 inline-flex rounded-lg bg-primary px-7 py-3 font-semibold text-white transition hover:opacity-90"
                        >
                            {buttonText}
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}