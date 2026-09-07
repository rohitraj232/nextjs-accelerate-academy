    "use client";

import Image from "next/image";

const toppers = [
  {
    rank: 2,
    name: "Priya Verma",
    exam: "NEET UG",
    score: "97.9%",
    rankText: "AIR 28",
    image: "/assets/images/team/2.jpg",
  },
  {
    rank: 1,
    name: "Aarav Sharma",
    exam: "JEE Advanced",
    score: "98.7%",
    rankText: "AIR 12",
    image: "/assets/images/team/1.jpg",
  },
  {
    rank: 3,
    name: "Rahul Singh",
    exam: "JEE Main",
    score: "97.2%",
    rankText: "AIR 45",
    image: "/assets/images/team/3.jpg",
  },
];

const rankStyle = {
  1: {
    badge: "bg-yellow-400 text-yellow-950",
    glow: "shadow-yellow-200",
    number: "🥇",
  },
  2: {
    badge: "bg-slate-300 text-slate-900",
    glow: "shadow-slate-200",
    number: "🥈",
  },
  3: {
    badge: "bg-orange-400 text-orange-950",
    glow: "shadow-orange-200",
    number: "🥉",
  },
};

export default function TopToppers() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            <span>🏆</span>
            Our Star Performers
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Celebrating Our{" "}
            <span className="text-indigo-600">
              Top Achievers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Meet the brilliant students who turned their dedication,
            consistency and hard work into outstanding results.
          </p>
        </div>

        {/* Podium */}
        <div className="mx-auto mt-20 grid max-w-6xl items-end gap-8 md:grid-cols-3">

          {toppers.map((topper) => {
            const style = rankStyle[topper.rank];

            return (
              <div
                key={topper.rank}
                className={`group relative ${
                  topper.rank === 1
                    ? "md:-translate-y-8"
                    : ""
                }`}
              >

                {/* Main Card */}
                <div
                  className={`relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${style.glow}`}
                >

                  {/* Top Image Area */}
                  <div
                    className={`relative overflow-hidden ${
                      topper.rank === 1
                        ? "h-[330px]"
                        : "h-[280px]"
                    }`}
                  >

                    <Image
                      src={topper.image}
                      alt={topper.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110 object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Rank Badge */}
                    <div
                      className={`absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg ${style.badge}`}
                    >
                      {style.number}
                    </div>

                    {/* Rank Text */}
                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <p className="text-sm font-medium text-white/80">
                        {topper.rank === 1
                          ? "1st Position"
                          : topper.rank === 2
                          ? "2nd Position"
                          : "3rd Position"}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold">
                        {topper.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Exam */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">
                        Examination
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                        {topper.exam}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">

                      <div className="rounded-2xl bg-indigo-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-indigo-500">
                          Score
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-indigo-700">
                          {topper.score}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-100 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Result
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-slate-800">
                          {topper.rankText}
                        </p>
                      </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm">
                          ✓
                        </div>

                        <span className="text-sm font-semibold text-slate-600">
                          Verified Result
                        </span>
                      </div>

                      <span className="text-lg">
                        ✨
                      </span>

                    </div>

                  </div>
                </div>

                {/* Podium Base */}
                {topper.rank === 1 && (
                  <div className="mx-auto mt-3 h-3 w-3/4 rounded-full bg-yellow-300 blur-[1px]" />
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-center">

          <div className="text-3xl">
            🚀
          </div>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            Your Name Could Be Here Next!
          </h3>

          <p className="mt-2 text-slate-600">
            Join our courses, learn from expert mentors and start your
            journey towards achieving your dream score.
          </p>

          <button className="mt-6 rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 hover:shadow-xl">
            Explore Courses →
          </button>

        </div>

      </div>
    </section>
  );
}
