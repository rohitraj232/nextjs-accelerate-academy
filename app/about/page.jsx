import Image from "next/image";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import FeatureCard from "@/components/FeatureCard";
import TeamCard from "@/components/TeamCard";
import CTASection from "@/components/CTASection";

const features = [
    {
        icon: "🎯",
        title: "Goal Oriented Learning",
        description:
            "Our learning programs are designed to help students build strong fundamentals and achieve their academic and career goals.",
    },
    {
        icon: "👨‍🏫",
        title: "Expert Mentors",
        description:
            "Learn from experienced mentors who combine subject knowledge with practical industry experience.",
    },
    {
        icon: "💻",
        title: "Practical Learning",
        description:
            "We focus on hands-on learning, real-world examples, projects and problem-solving instead of only theoretical concepts.",
    },
    {
        icon: "🚀",
        title: "Career Focused",
        description:
            "Our courses help students develop the skills, confidence and knowledge required to succeed in today's competitive environment.",
    },
    {
        icon: "📚",
        title: "Quality Content",
        description:
            "Get structured and easy-to-understand learning material created to make complex concepts simple.",
    },
    {
        icon: "🤝",
        title: "Student Support",
        description:
            "We believe learning becomes easier when students have the right guidance, support and mentorship throughout their journey.",
    },
];

const team = [
    {
        image: "/assets/images/team/1.jpg",
        name: "Rahul Sharma",
        role: "Senior Faculty & Career Mentor",
        experience: "10+ Years",
        description:
            "Passionate educator helping students understand complex concepts and build successful careers.",
    },
    {
        image: "/assets/images/team/2.jpg",
        name: "Priya Singh",
        role: "Academic Mentor",
        experience: "8+ Years",
        description:
            "Dedicated mentor focused on academic excellence, personalized guidance and student growth.",
    },
    {
        image: "/assets/images/team/3.jpg",
        name: "Amit Verma",
        role: "Technical Mentor",
        experience: "7+ Years",
        description:
            "Industry-focused mentor helping students develop practical technical and problem-solving skills.",
    },
];

export default function AboutPage() {
    return (<main>

        {/* ================= HERO ================= */}
        <PageHero
            badge="About Us"
            title="Helping Students Learn, Grow & Succeed"
            description="We are committed to creating a better learning experience through expert mentorship, practical education and career-focused programs."
        />

        {/* ================= WHO WE ARE ================= */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="relative">

                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                            <Image
                                src="/assets/images/team/3.jpg"
                                alt="About our learning platform"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Experience Card */}
                        <div className="absolute -bottom-6 -right-4 md:right-6 rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-xl">

                            <p className="text-3xl font-bold text-primary">
                                10+
                            </p>

                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                Years of Excellence
                            </p>

                        </div>

                    </div>

                    {/* Content */}
                    <div>

                        <SectionHeading
                            center={false}
                            badge="Who We Are"
                            title="Education That Goes Beyond the Classroom"
                            description="Our mission is to make quality education accessible, practical and meaningful for every learner."
                        />

                        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
                            We believe education is not just about completing
                            a syllabus. It is about understanding concepts,
                            developing problem-solving skills and building
                            the confidence to apply knowledge in the real
                            world.
                        </p>

                        <p className="mt-5 text-slate-600 dark:text-slate-300 leading-8">
                            Our platform brings together experienced
                            educators, structured courses, practical
                            projects and continuous mentorship to create
                            an environment where students can learn at
                            their own pace.
                        </p>

                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="flex gap-3">
                                <span className="text-primary text-xl">
                                    ✓
                                </span>
                                <span className="text-slate-700 dark:text-slate-200">
                                    Experienced Faculty
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-primary text-xl">
                                    ✓
                                </span>
                                <span className="text-slate-700 dark:text-slate-200">
                                    Practical Projects
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-primary text-xl">
                                    ✓
                                </span>
                                <span className="text-slate-700 dark:text-slate-200">
                                    Career Guidance
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="text-primary text-xl">
                                    ✓
                                </span>
                                <span className="text-slate-700 dark:text-slate-200">
                                    Continuous Support
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>


        {/* ================= STATS ================= */}
        <StatsSection />
        

        {/* ================= MISSION / VISION ================= */}
        {/* <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">

                <SectionHeading
                    badge="Our Purpose"
                    title="Our Mission & Vision"
                    description="We want to create an ecosystem where learning leads to confidence, skills and meaningful career opportunities."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">

                    <div className="rounded-3xl bg-slate-900 p-8 md:p-10 text-white shadow-xl">
                        <div className="text-4xl">🎯</div>

                        <h3 className="mt-6 text-2xl font-bold">
                            Our Mission
                        </h3>

                        <p className="mt-4 text-slate-300 leading-7">
                            To provide accessible, practical and
                            high-quality education that helps students
                            develop strong skills and achieve their
                            academic and professional goals.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-8 md:p-10 shadow-sm">
                        <div className="text-4xl">🚀</div>

                        <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                            Our Vision
                        </h3>

                        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                            To become a trusted learning platform where
                            every student can discover their potential,
                            acquire future-ready skills and build a
                            successful career.
                        </p>
                    </div>

                </div>

            </div>
        </section> */}

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="container mx-auto px-4">

                <SectionHeading
                    badge="Why Choose Us"
                    title="Everything You Need to Learn Better"
                    description="We combine quality education, practical learning and personal guidance to provide a complete learning experience."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                        />
                    ))}

                </div>

            </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">

                <SectionHeading
                    badge="Our Mentors"
                    title="Meet Our Expert Team"
                    description="Learn from experienced mentors who are passionate about helping students grow and succeed."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">

                    {team.map((member, index) => (
                        <TeamCard
                            key={index}
                            {...member}
                        />
                    ))}

                </div>

            </div>
        </section>

        {/* ================= CTA ================= */}
        <CTASection
            title="Start Your Learning Journey Today"
            description="Explore our courses, learn from experienced mentors and take the next step toward your goals."
            buttonText="Explore Courses"
            buttonLink="/courses"
        />

    </main>
    );
}
