import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Parkinsans } from "next/font/google";
import Script from "next/script";


const parkinsans = Parkinsans({
    subsets: ["latin"],
});

export const metadata = {
    title: "Accelerate Academy | Siwan",
    description: "Accelerate Academy Coaching Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* <!-- favicon --> */}
                <link rel="shortcut icon" href="assets/images/favicon.ico" />

                {/* <!-- Css --> */}
                <link href="assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet" />
                <link href="assets/libs/tobii/css/tobii.min.css" rel="stylesheet" />
                {/* <!-- Main Css --> */}
                <link href="assets/libs/iconoir/css/iconoir.css" rel="stylesheet" type="text/css" />
                <link href="assets/libs/%40mdi/font/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" href="assets/css/tailwind.min.css" />
            </head>

            <body className={parkinsans.className}>

                <Navbar />

                <main>{children}</main>

                <Footer />


                {/* JAVASCRIPTS */}
                <Script src="/assets/libs/tiny-slider/min/tiny-slider.js" />
                <Script src="/assets/libs/tobii/js/tobii.min.js" />
                <Script src="/assets/libs/feather-icons/feather.min.js" />
                <Script src="/assets/js/plugins.init.js" />
                <Script src="/assets/js/app.js" />
            </body>
        </html>
    );
}