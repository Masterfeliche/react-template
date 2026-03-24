import ProductGallerySection from "../components/gallery/ProductGallerySection";
import { bodyLead, sectionTitle } from "../lib/ui";

export default function Gallery() {
  return (
    <>
      <div className="relative flex min-h-[22rem] w-full items-center justify-center overflow-hidden bg-blue-950 bg-cover bg-center px-6 py-16 sm:px-8 md:min-h-[26rem] md:py-20 md:bg-[url('/homemade-media-6l5z2EPrnFc-unsplash.jpg')]">
        <div className="absolute inset-0 bg-blue-950/88 md:bg-blue-950/78" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl px-1 text-center sm:px-0">
          <h1 id="gallery-page-heading" className={`${sectionTitle} text-white dark:text-white`}>
            Product gallery
          </h1>
          <p className={`${bodyLead} mt-6 !max-w-2xl !text-base !leading-relaxed !text-gray-100 sm:!text-lg`}>
            Filter by category to explore laptops, EFD machines, printers, and accessories we supply
            and support. Request a quote or message us on WhatsApp for stock and pricing.
          </p>
        </div>
      </div>

      <ProductGallerySection hideHeader className="!border-t-0" />
    </>
  );
}
