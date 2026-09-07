"use client";

import Image from "next/image";
import Link from "next/link";

export default function LiveSession({
    thumbnail = "/assets/images/course/one.jpg",
    title = "Live React.js Development Session",
    description = "Join our live session and learn React.js concepts with practical examples.",
    instructor = "Manish Sir",
    date = "Today",
    time = "8:00 PM",
    viewers = "1.2K",
    youtubeUrl = "",
}) {
    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10">
                    <span className="text-primary font-semibold uppercase text-sm">
                        Live Classes
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Join Our Live Session
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl mx-auto">
                        Learn directly from experienced instructors through
                        interactive live sessions.
                    </p>
                </div>

                {/* Main Card */}
                <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= THUMBNAIL ================= */}
<div className="relative w-full aspect-video overflow-hidden">

    <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* LIVE BADGE */}
    <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            LIVE NOW
        </span>
    </div>

    {/* Play Button */}
    {youtubeUrl && (
        <Link
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex items-center justify-center"
            aria-label="Watch live session"
        >
            <span className="size-20 rounded-full bg-white/95 text-red-600 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9 ml-1"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>

            </span>
        </Link>
    )}

    {/* Viewers */}
    <div className="absolute bottom-5 left-5 z-10">
        <span className="bg-black/70 text-white px-3 py-2 rounded-md text-sm">
            👁 {viewers} watching
        </span>
    </div>

</div>


                        {/* ================= SESSION DETAILS ================= */}
                        <div className="p-6 md:p-10 flex flex-col justify-center">

                            <span className="text-primary font-semibold text-sm uppercase">
                                Live Session
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold mt-3 text-slate-900 dark:text-white">
                                {title}
                            </h3>

                            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                {description}
                            </p>

                            {/* Instructor */}
                            <div className="flex items-center gap-3 mt-7">

                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="w-6 h-6 text-primary"
                                    >
                                        <path d="M20 21a8 8 0 0 0-16 0" />
                                        <circle
                                            cx="12"
                                            cy="7"
                                            r="4"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Instructor
                                    </p>

                                    <p className="font-semibold text-slate-900 dark:text-white">
                                        {instructor}
                                    </p>
                                </div>

                            </div>

                            {/* Date & Time */}
                            <div className="flex flex-wrap gap-6 mt-6 items-center justify-between">

                                <div className="flex items-center gap-2">
                                    <span className="text-primary">
                                        📅
                                    </span>

                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Date
                                        </p>

                                        <p className="font-medium text-slate-900 dark:text-white">
                                            {date}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-primary">
                                        🕐
                                    </span>

                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Time
                                        </p>

                                        <p className="font-medium text-slate-900 dark:text-white">
                                            {time}
                                        </p>
                                    </div>
                                </div>

 {/* Button */}
                            <div className="ml-1">

                                {youtubeUrl ? (
                                    <Link
                                        href={youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-semibold hover:opacity-90 transition"
                                    >
                                        Join Live Session

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-400 text-white font-semibold cursor-not-allowed"
                                    >
                                        Live Session Unavailable
                                    </button>
                                )}

                            </div>
                            </div>

                           

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
