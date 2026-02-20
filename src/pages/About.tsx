import { NavLink } from "react-router-dom";
import Antigravity from "../components/Antigravity";
import TrueFocus from "../components/TrueFocus";
import TargetCursor from "../components/TargetCursor";
// Removed: import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function About() {
    return (
        <>
           {/* --- SECTION 1: HERO --- */}
<div className="relative w-full min-h-[600px] bg-blue-950 flex items-center justify-center p-10 overflow-hidden">
    
    {/* 1. BACKGROUND LAYER */}
    <div className="absolute inset-0 z-0">
        <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
        />
    </div>

    {/* 2. CONTENT LAYER */}
    <div className="relative z-10 max-w-4xl text-center">
        <TrueFocus 
                    sentence="ABOUT US"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#ffffff"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                    text-white
                />
        {/* <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
            About Us
        </h1> */}
        <p className="text-white mt-6 text-lg md:text-xl leading-relaxed">
            Welcome to Eunica Technologies, Tanzania's trusted leader in Information and Communication Technology. 
            Since our beginning, we have been on a mission to empower businesses by providing reliable, 
            efficient, and affordable technology solutions.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
            <NavLink to="/Services" className="cursor-target bg-white text-blue-700 h-12 px-8 flex items-center justify-center rounded-full font-semibold hover:bg-gray-200 transition-colors">
                View Our Services
            </NavLink>
            <NavLink to="/Contact" className="cursor-target bg-orange-400 text-white h-12 px-8 flex items-center justify-center rounded-full font-semibold hover:bg-orange-500 transition-colors">
                Get a Free Quote
            </NavLink>
        </div>
    </div>
</div>

            {/* --- SECTION 2: SERVICES & PRODUCTS --- */}
            <div className="grid md:grid-cols-2 gap-5 bg-blue-950 p-5">
                <div className="bg-[url(public/Efd Vfd pictures/Untitled-3.png)] bg-no-repeat bg-cover text-center rounded-lg p-12">
                    <h1 className="cursor-target text-3xl font-bold text-white">OUR SERVICES</h1>
                    <p className="text-green-400 mt-4">
                        From EFD machine setup and CCTV installation to custom website design and on-call ICT support, we provide the expert solutions your business needs.
                    </p>
                    <NavLink to="/Services">
                        <button className="cursor-target mt-6 rounded-full bg-orange-400 p-3 px-6 hover:bg-orange-500 text-white font-semibold">
                            See All Services
                        </button>
                    </NavLink>
                </div>
                <div className="bg-[url(public/Efd Vfd pictures/Untitled-3.png)] bg-cover text-center rounded-lg p-12">
                    <h1 className="cursor-target text-3xl font-bold text-white">OUR PRODUCTS</h1>
                    <p className="text-green-400 mt-4">
                        We stock quality hardware, including laptops, computers, accessories, and TRA-approved EFD machines, plus custom printing for all your branding.
                    </p>
                    <NavLink to="/Products">
                        <button className="cursor-target mt-6 rounded-full bg-orange-400 p-3 px-6 hover:bg-orange-500 text-white font-semibold">
                            View All Products
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* --- SECTION 3: MISSION & VISION --- */}
            <div className="w-full bg-white md:grid grid-cols-2 gap-10 p-12 md:items-center">
                <div className="text-blue-950 text-center">
                    <h1 className="cursor-target text-3xl font-bold">Our Mission</h1>
                    <p className="mt-4">
                        To provide seamless, end-to-end ICT services and support that allow our clients to focus on what they do best: running their business.
                    </p>
                </div>
                <div className="text-blue-950 text-center pt-10 md:pt-0">
                    <h1 className="cursor-target text-3xl font-bold">Our Vision</h1>
                    <p className="mt-4">
                        To be the most reliable and innovative ICT solutions provider, powering the growth of businesses across Tanzania.
                    </p>
                </div>
            </div>

            {/* --- NEW SECTION: GALLERY --- */}
            <div className="w-full bg-white p-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-950">Our Solutions in Action</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto mt-4">
                        We provide tangible results. Here’s a glimpse of the products we supply and the services we offer.
                    </p>
                </div>
                
                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-7xl mx-auto">
                    {/* Image 1: Computers */}
                    {/* Product Card 1: Computers & Laptops */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src=".\public\Laptop pictures\WhatsApp Image 2025-11-23 at 22.36.28 (1).jpeg" alt="Computers & Laptops" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Computers & Laptops</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                High-performance laptops and desktop computers for every business need, from top brands.
                            </p>
                            <NavLink to="/Contact" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 2: Computer Accessories */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="public/homemade-media-6l5z2EPrnFc-unsplash.jpg" alt="Computer Accessories" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Computer Accessories</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Monitors, keyboards, mice, printers, routers, and all the accessories to complete your setup.
                            </p>
                            <NavLink to="/Contact" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 3: EFD/VEFD Machines */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="public\Efd Vfd pictures\PRINTA.jpg" alt="EFD/VEFD Machines" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">EFD/VEFD Machines</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                TRA-approved EFD and VEFD machines to keep your business compliant and your sales running smoothly.
                            </p>
                            <NavLink to="/Contact" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 4: CCTV Systems */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="public\michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg" alt="CCTV Systems" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">CCTV & Surveillance</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                High-definition camera kits, DVRs, and complete surveillance systems to protect your property.
                            </p>
                            <NavLink to="/Contact" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 5: Graphics & Printing */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="./public/Graphics pictures/1764765939008.jpeg" alt="Graphics & Printing" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Graphics & Printing</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Custom business cards, banners (mabango), flyers (vipeperushi), invoice books, and receipt books.
                            </p>
                            <NavLink to="/Contact" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>

                    {/* Product Card 6: Branded Apparel */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
                        <img src="./public/Graphics pictures/1764765911213.jpeg" alt="Branded Apparel" className="h-64 w-full object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-950">Branded Apparel</h3>
                            <p className="text-gray-700 mt-4 flex-grow">
                                Professional logos and branding on hats, polo shirts, and other apparel for a unified team look.
                            </p>
                            <NavLink to="/Contact" className="cursor-target bg-yellow-400 text-blue-950 h-10 w-40 mt-8 rounded-full font-semibold flex items-center justify-center hover:bg-yellow-300">
                                Request a Quote
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- END OF NEW SECTION --- */}


            {/* --- SECTION 4: OUR TEAM --- */}
            <div className="w-full bg-blue-950 p-12 md:items-center">
                <h1 className="cursor-target text-center text-white text-3xl font-bold">
                    OUR TEAM
                </h1>
                <p className="text-white p-6 max-w-3xl mx-auto text-center">
                    Meet the dedicated professionals who make Eunica Technologies a leader in ICT. Our team of experts is passionate about technology and committed to your success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-6">
                    
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center">
                        <img src="/ardy-arjun-FApOxeT2NEQ-unsplash.jpg" alt="Neema Jackson" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="cursor-target text-center text-white mt-4 text-xl font-semibold">Neema Jackson</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center">
                        <img src="/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg" alt="Jackson Juma" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="cursor-target text-center text-white mt-4 text-xl font-semibold">Jackson Juma</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center">
                        <img src="/adetola-afolabi-x0A7wgQmmdk-unsplash.jpg" alt="Mwajuma Ally" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="cursor-target text-center text-white mt-4 text-xl font-semibold">Mwajuma Ally</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Team Member 4 */}
                    <div className="flex flex-col items-center">
                        <img src="/zahir-namane-hwc7eIQiTCE-unsplash.jpg" alt="Said Said" className="rounded-full h-48 w-48 object-cover border-4 border-orange-400" />
                        <h1 className="cursor-target text-center text-white mt-4 text-xl font-semibold">Said Said</h1>
                        <div className="flex justify-center gap-4 pt-2">
                            {/* Replaced BsInstagram with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 hover:text-orange-300">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>

                                </svg>
                            </a>
                            {/* Replaced BsFacebook with inline SVG */}
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-orange-300">
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

