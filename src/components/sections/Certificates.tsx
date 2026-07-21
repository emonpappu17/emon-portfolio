"use client";

import certificates from "@/data/certificates";
import { ExternalLink, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Lightbox — full-resolution certificate viewer.
 * Closes on backdrop click, close button, or Escape key.
 */
const Lightbox = ({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) => {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Certificate full view"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close certificate viewer"
        className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image container — stop propagation so clicking the image doesn't close */}
      <div
        className="relative z-10 max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={850}
          sizes="(max-width: 768px) 100vw, 90vw"
          className="w-full h-auto object-contain"
          quality={95}
          priority
        />
      </div>

      {/* Open in new tab helper */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open certificate image in a new tab"
        className="absolute bottom-6 right-6 z-10 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="w-4 h-4" />
        Open in new tab
      </a>
    </div>
  );
};

export const Certificates = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxAlt("");
  }, []);

  return (
    <>
      <section
        id="certificates"
        className="py-32 relative overflow-hidden"
        aria-label="Professional Certificates and Achievements"
      >
        {/* Background glows — mirrors the rest of the site */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* ── Section Header ─────────────────────────────────────── */}
          <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Credentials
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Certificates that{" "}
              <span className="font-serif italic font-normal text-white">
                mark milestones.
              </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A collection of certifications earned throughout my learning
              journey — each one a proof of dedication and continuous growth.
            </p>
          </div>

          {/* ── Certificate Grid ────────────────────────────────────── */}
          {certificates.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">
              No certificates to display yet.
            </p>
          ) : (
            <div
              className={`grid gap-8 ${certificates.length === 1
                  ? "grid-cols-1 max-w-2xl"
                  : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
            >
              {certificates.map((cert, idx) => (
                <article
                  key={idx}
                  className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  onClick={() => openLightbox(cert.src, cert.alt)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View full certificate: ${cert.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(cert.src, cert.alt);
                    }
                  }}
                >
                  {/* Certificate image */}
                  <div className="relative overflow-hidden">
                    {/* Subtle hover glow border */}
                    <div className="absolute inset-0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 shadow-[inset_0_0_30px_rgba(32,178,166,0.08)]" />

                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={800}
                      height={566}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                      quality={85}
                    />

                    {/* Hover overlay — zoom hint */}
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 flex items-center justify-center transition-all duration-500">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 flex flex-col items-center gap-2">
                        <span className="p-3 rounded-full bg-primary/90 text-primary-foreground shadow-lg">
                          <ZoomIn className="w-5 h-5" />
                        </span>
                        <span className="text-xs font-medium text-foreground bg-background/80 px-3 py-1 rounded-full backdrop-blur-sm">
                          Click to view
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox portal */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />
      )}
    </>
  );
};
