
import { NavLink } from "react-router-dom";
import LightRays from '../components/LightRays';
import TargetCursor from "../components/TargetCursor";
import TrueFocus from "../components/TrueFocus";

// / I've removed the heroicons import that was causing errors.

export default function Home() {
    return (
        <>
            {/* the target cursor import */}
            <div>
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor
                    parallaxOn
                    hoverDuration={0.2}
                />
            </div>
            {/* --- SECTION 1: HERO --- */}



            <section className="relative w-full h-[600px] overflow-hidden bg-blue-950">

                {/* Background Animation */}
                <div className="absolute inset-0">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#e9da0dff"
                        raysSpeed={5}
                        lightSpread={0.5}
                        rayLength={10}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0}
                        distortion={1}
                        pulsating={false}
                        fadeDistance={1}
                        saturation={1}
                    />
                </div>

                {/* Optional Overlay */}
                <div className="absolute inset-0 bg-blue-950/50"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-10 text-center md:text-left">

                        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                            Your All-in-One ICT Partner in Tanzania
                        </h1>

                        <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl">
                            From EFD machines and computer sales to custom website design and CCTV installation, Eunica Technologies (T) LTD provides expert solutions your business needs to succeed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
                            <NavLink
                                to="/Services"
                                className=" cursor-target bg-yellow-400 text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300 transition"
                            >
                                View Our Services
                            </NavLink>

                            <NavLink
                                to="/Contact"
                                className=" cursor-target bg-white text-blue-950 h-12 px-8 rounded-full font-semibold flex items-center justify-center hover:bg-gray-200 transition"
                            >
                                Get a Free Quote
                            </NavLink>
                        </div>

                    </div>
                </div>

            </section>


            {/* --- SECTION 2: WHO ARE WE --- */}
            <div className="text-center p-10 md:p-20 bg-white">
                <TrueFocus 
                    sentence=" WHO ARE WE"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#110245"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />
                {/* <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                    WHO ARE WE
                </h2> */}
                <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-lg">
                    We are Eunica Technologies (T) LTD, a premier ICT solutions and consultancy company based in Tanzania. At our core, we are a dedicated team of technical experts, creative designers, and problem-solvers passionate about helping businesses succeed... We are your all-in-one partner for sales, installation, and ongoing support.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-5xl mx-auto">
                    <img src="./public/Laptop pictures/WhatsApp Image 2025-11-28 at 11.57.07.jpeg" alt="Office meeting" className="rounded-lg shadow-xl w-full h-[85%] object-cover" />
                    <img src="./public/Efd Vfd pictures/74.jpg" alt="Man working on laptop" className="rounded-lg shadow-xl w-full h-[85%] object-cover" />
                </div>
            </div>

            {/* --- SECTION 3: ADVANTAGES ---
              - Replaced Heroicons with inline SVGs to fix rendering errors.
            */}
            <div className="p-10 md:py-20 bg-blue-950">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    The Eunica Technologies Advantage
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16">
                    {/* Advantage 1: Replaced Icon */}
                    <div className="text-center md:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-yellow-400 mx-auto md:mx-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l.02.02M11.42 15.17 6.83 21m0-11.17a4.5 4.5 0 0 1 .09-1.92l-2.06-2.06a.825.825 0 0 0-1.166 0l-1.83 1.83a.825.825 0 0 0 0 1.166l2.06 2.06A4.5 4.5 0 0 1 6.83 9.83m0 0-.02-.02m0 0c-.83 0-1.64-.17-2.38-.49l-2.06 2.06a.825.825 0 0 0 0 1.166l1.83 1.83a.825.825 0 0 0 1.166 0l2.06-2.06A4.5 4.5 0 0 1 6.83 9.83Z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mt-4">All-in-One ICT Solutions</h3>
                        <p className="text-gray-300 mt-2">
                            We are your single partner for every technology need, from purchasing computers and EFD machines to designing your website and installing CCTV.
                        </p>
                    </div>
                    {/* Advantage 2: Replaced Icon */}
                    <div className="text-center md:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-yellow-400 mx-auto md:mx-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.631-.22-3.203-.632-4.7L12 2.714Z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mt-4">Expert Installation & Support</h3>
                        <p className="text-gray-300 mt-2">
                            Our certified technicians provide professional installation and reliable ongoing maintenance to keep your business running with minimal downtime.
                        </p>
                    </div>
                    {/* Advantage 3: Replaced Icon */}
                    <div className="text-center md:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 text-yellow-400 mx-auto md:mx-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75M9 17.25h6.75M12 21v-3.75" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-white mt-4">Local & Accessible Service</h3>
                        <p className="text-gray-300 mt-2">
                            With offices in Kariakoo, Mwananyamala, and Komakoma, we are part of your community and always nearby when you need hands-on support.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 4: SERVICES OVERVIEW --- */}
            <div className=" w-full bg-gray-100 p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
                    Our Core Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                    {/* Service Card 1 */}
                    <div className="text-center bg-white p-3 rounded-lg shadow-xl flex flex-col">
                        <img src="/pakata-goh-Ovb-MejXjOg-unsplash.jpg" alt="Computers" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-blue-950 text-2xl font-semibold mt-6">Computer & Accessories Sales</h3>
                        <p className="text-gray-700 mt-4 flex-grow">
                            We supply top-quality laptops, desktops, printers, and all essential ICT accessories from trusted brands.
                        </p>
                        <NavLink to="/Services" className=" cursor-target bg-blue-950 text-white h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-blue-800">
                            READ MORE
                        </NavLink>
                    </div>
                    {/* Service Card 2 */}
                    <div className="text-center bg-white p-3 rounded-lg shadow-xl flex flex-col">
                        <img src="./public/Efd Vfd pictures/PRINTA.jpg" alt="EFD Machine" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-blue-950 text-2xl font-semibold mt-6">EFD/VEFD Machines</h3>
                        <p className="text-gray-700 mt-4 flex-grow">
                            Stay TRA compliant with our authorized EFD/VEFD machines. We provide complete sales, installation, and support.
                        </p>
                        <NavLink to="/Services" className="cursor-target bg-blue-950 text-white h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-blue-800">
                            READ MORE
                        </NavLink>
                    </div>
                    {/* Service Card 3 */}
                    <div className="text-center bg-white p-3 rounded-lg shadow-xl flex flex-col">
                        <img src="/team-nocoloco-Yt9wUh3ZB3Q-unsplash.jpg" alt="Website Design" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-blue-950 text-2xl font-semibold mt-6">Website Design & Development</h3>
                        <p className="text-gray-700 mt-4 flex-grow">
                            Our team builds modern, responsive websites and custom software applications to automate your operations.
                        </p>
                        <NavLink to="/Services" className=" cursor-target bg-blue-950 text-white h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-blue-800">
                            READ MORE
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* --- SECTION 5: PRODUCTS OVERVIEW --- */}
            <div className="bg-white text-center p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                    Featured Products
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto mt-6 text-lg">
                    We've selected the best products to ensure your business runs efficiently, securely, and professionally.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
                    {/* Product Card 1 */}
                    <div className="text-center bg-blue-950 p-3 rounded-lg shadow-xl flex flex-col">
                        <img src="./public/Laptop pictures/WhatsApp Image 2025-11-27 at 09.33.05.jpeg" alt="Laptops" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-white text-2xl font-semibold mt-6">Computers & Laptops</h3>
                        <p className="text-gray-300 mt-4 flex-grow">
                            Brand-new laptops and desktops perfect for any business, from high-performance machines to reliable daily PCs.
                        </p>
                        <NavLink to="/Products" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-yellow-300">
                            View More
                        </NavLink>
                    </div>
                    {/* Product Card 2 */}
                    <div className="text-center bg-blue-950 p-3 rounded-lg shadow-xl flex flex-col">
                        <img src="/homemade-media-6l5z2EPrnFc-unsplash.jpg" alt="Accessories" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-white text-2xl font-semibold mt-6">Computer Accessories</h3>
                        <p className="text-gray-300 mt-4 flex-grow">
                            Monitors, keyboards, mice, printers, external hard drives, networking cables, routers, and more.
                        </p>
                        <NavLink to="/Products" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-yellow-300">
                            View More
                        </NavLink>
                    </div>
                    {/* Product Card 3 */}
                    <div className="text-center bg-blue-950 p-3 rounded-lg shadow-xl flex flex-col">
                        <img src="/matthias-heil-znkIL3MQnvY-unsplash.jpg" alt="CCTV" className="rounded-md h-48 w-full object-cover" />
                        <h3 className="text-white text-2xl font-semibold mt-6">CCTV & Surveillance</h3>
                        <p className="text-gray-300 mt-4 flex-grow">
                            High-definition CCTV camera kits, including dome and bullet cameras, DVRs, and all necessary cabling.
                        </p>
                        <NavLink to="/Products" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold self-center flex items-center justify-center hover:bg-yellow-300">
                            View More
                        </NavLink>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <NavLink to="/Products" className="cursor-target bg-blue-950 text-white h-12 px-8 rounded-full font-semibold flex items-center justify-center w-60 mx-auto hover:bg-blue-800">
                        VIEW ALL PRODUCTS
                    </NavLink>
                </div>
            </div>

            {/* --- SECTION 6: TESTIMONIAL --- */}
            <div className="bg-gray-100 p-10 md:p-20">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
                    What Our Clients Say
                </h2>
                <div className="mt-16 max-w-3xl mx-auto bg-blue-950 rounded-lg shadow-xl p-10 flex flex-col items-center">
                    <p className="text-white text-xl md:text-2xl italic text-center">
                        "Personally, I have enjoyed all the services this company provides. All the gadgets we buy here are at affordable prices, and they have got the best services ever."
                    </p>
                    <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="Neema J Kituga" className="h-20 w-20 rounded-full mt-8 object-cover border-4 border-yellow-400" />
                    <h3 className="cursor-target text-xl font-semibold text-yellow-400 mt-4">
                        Neema J Kituga
                    </h3>
                    <p className="text-gray-300">Student</p>
                </div>
            </div>
        </>
    );
}




