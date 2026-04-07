/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();

  // Day to Night color transformations — Premium Palette
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#F5F0E8", "#1A2F23", "#050D12"] // Warm Ivory, Deep Forest, Midnight Black
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1A2F23", "#F5F0E8", "#E8DCC8"] // Deep Forest, Warm Ivory, Champagne
  );

  const primaryColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1A6B3C", "#C9A84C", "#C9A84C"] // Rich Emerald, Champagne Gold, Champagne Gold
  );

  const surfaceContainerColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FFFFFF", "#122318", "#0A1A20"]
  );

  const headerBackgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(245, 240, 232, 0.92)", "rgba(26, 47, 35, 0.95)", "rgba(5, 13, 18, 0.97)"]
  );

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.55, 0.8]);

  return (
    <motion.div
      style={{ backgroundColor, color: textColor }}
      className="min-h-screen font-body"
    >
      {/* TopAppBar */}
      <motion.header
        style={{ backgroundColor: headerBackgroundColor }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-full shadow-sm"
      >
        <div className="flex items-center gap-2">
          <motion.span style={{ color: primaryColor }} className="text-xl md:text-2xl font-headline italic">
            The Woodside Inn
          </motion.span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="opacity-75 hover:opacity-100 hover:text-yellow-500 transition-all duration-300 font-label uppercase tracking-widest text-xs" href="#about">About</a>
          <a className="opacity-75 hover:opacity-100 hover:text-yellow-500 transition-all duration-300 font-label uppercase tracking-widest text-xs" href="#rooms">Rooms</a>
          <a className="opacity-75 hover:opacity-100 hover:text-yellow-500 transition-all duration-300 font-label uppercase tracking-widest text-xs" href="#dining">Dining</a>
          <a className="opacity-75 hover:opacity-100 hover:text-yellow-500 transition-all duration-300 font-label uppercase tracking-widest text-xs" href="#location">Location</a>
        </nav>
        <a className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white px-4 md:px-6 py-2 rounded-full font-label uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 hover:shadow-yellow-500/40 transition-all shadow-lg whitespace-nowrap" href="https://wa.me/919763429463">
          Book Now
        </a>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="cinematic wide shot of a luxury infinity pool reflecting a tropical sunset with silhouettes of palm trees in South Goa"
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop"
          />
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>

        {/* Birds Animation */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="bird-container bird-container-one">
            <div className="bird bird-one"></div>
          </div>
          <div className="bird-container bird-container-two">
            <div className="bird bird-two"></div>
          </div>
          <div className="bird-container bird-container-three">
            <div className="bird bird-three"></div>
          </div>
          <div className="bird-container bird-container-four">
            <div className="bird bird-four"></div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mt-16"
        >
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Discover Serenity in <span className="italic text-amber-300">South Goa.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
            Your peaceful, premium getaway just steps from Benaulim Beach. Experience the curated sanctuary of The Woodside Inn.
          </p>
          <a className="inline-flex items-center gap-3 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-2xl shadow-yellow-500/30 hover:scale-105 hover:shadow-yellow-500/50 transition-all border border-yellow-300/30" href="https://wa.me/919763429463">
            <span className="material-symbols-outlined">chat</span>
            Book Your Stay via WhatsApp
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="exterior of a boutique tropical hotel" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-500/20 -z-10 rounded-full blur-3xl"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2 style={{ color: primaryColor }} className="font-headline text-4xl md:text-5xl leading-tight">The Art of Stillness</motion.h2>
            <div className="space-y-6 opacity-80 leading-relaxed text-lg">
              <p>Nestled in the heart of Calvaddo, Benaulim, The Woodside Inn offers a refined escape for the discerning traveler. Our boutique property features 15 exquisitely designed rooms, each a haven of modern peace.</p>
              <p>Whether you're seeking a quiet retreat or a tropical adventure, we are perfectly positioned just a 10-minute stroll from the pristine sands of Benaulim and Vaddi Beach.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-amber-500 text-3xl">wifi</span>
                <div>
                  <motion.p style={{ color: primaryColor }} className="font-bold">100+ Mbps</motion.p>
                  <p className="text-xs uppercase tracking-widest opacity-60">High-Speed Wi-Fi</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-amber-500 text-3xl">king_bed</span>
                <div>
                  <motion.p style={{ color: primaryColor }} className="font-bold">15 Rooms</motion.p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Boutique Luxury</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24" id="rooms">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-yellow-500 font-label uppercase tracking-widest text-sm font-bold tracking-[0.3em]">Our Residences</span>
            <motion.h2 style={{ color: primaryColor }} className="font-headline text-4xl md:text-5xl mt-4">Luxury in Every Detail</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="luxury hotel room" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-headline text-3xl mb-2">Deluxe Double Rooms</h3>
                <p className="text-white/80 max-w-md mb-4">Elegant spaces featuring garden views and premium linens.</p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-amber-300">balcony</span>
                  <span className="material-symbols-outlined text-amber-300">cleaning_services</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="spacious hotel suite" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-headline text-3xl mb-2">Premium Suites</h3>
                <p className="text-white/80 max-w-sm mb-4">Indulgence redefined with a private Jacuzzi and expansive space.</p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-amber-300">hot_tub</span>
                  <span className="material-symbols-outlined text-amber-300">window</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: "pool", title: "Infinity Pool", desc: "Adults-only serenity with garden views." },
            { icon: "child_care", title: "Children's Pool", desc: "Safe and fun spaces for our youngest guests." },
            { icon: "park", title: "Lush Gardens", desc: "Curated tropical flora for ultimate peace." },
            { icon: "concierge", title: "24h Reception", desc: "Personalized service around the clock." }
          
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <motion.span style={{ color: primaryColor }} className="material-symbols-outlined text-5xl drop-shadow-sm">{item.icon}</motion.span>
              <h4 className="font-headline text-xl">{item.title}</h4>
              <p className="text-sm opacity-70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dining Section */}
      <section className="relative py-32 overflow-hidden" id="dining">
        <div className="absolute inset-0 -z-10">
          <img className="w-full h-full object-cover" alt="moody cinematic interior of a boutique bistro" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" />
          <motion.div 
            style={{ backgroundColor: surfaceContainerColor }}
            className="absolute inset-0 opacity-90 backdrop-blur-md"
          ></motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label uppercase tracking-widest text-sm text-yellow-500 tracking-[0.3em]">Culinary Journey</span>
            <motion.h2 style={{ color: primaryColor }} className="font-headline text-5xl mt-6 mb-8 leading-tight">The Woodside Bistro</motion.h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">From the vibrant spices of Goa to the classic comforts of the British Isles, our bistro is a celebration of global flavors. Join us for live music evenings and karaoke nights under the stars.</p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div style={{ backgroundColor: surfaceContainerColor }} className="p-6 rounded-xl border border-yellow-500/20 shadow-lg hover:border-yellow-500/40 transition-colors">
                <h5 className="font-bold text-yellow-500 mb-2">Local &amp; Asian</h5>
                <p className="text-sm opacity-70">Authentic Goan, Indian, and Chinese favorites.</p>
              </motion.div>
              <motion.div style={{ backgroundColor: surfaceContainerColor }} className="p-6 rounded-xl border border-yellow-500/20 shadow-lg hover:border-yellow-500/40 transition-colors">
                <h5 className="font-bold text-yellow-500 mb-2">Continental</h5>
                <p className="text-sm opacity-70">Exquisite British and Greek inspired dishes.</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img className="rounded-xl shadow-2xl h-64 w-full object-cover translate-y-8" alt="close up of a traditional goan seafood curry" src="https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=1974&auto=format&fit=crop" />
            <img className="rounded-xl shadow-2xl h-64 w-full object-cover" alt="elegant dining table setup" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" />
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-8" id="location">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <motion.h2 style={{ color: primaryColor }} className="font-headline text-4xl">Your Destination</motion.h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-amber-500">location_on</span>
                  <div>
                    <motion.p style={{ color: primaryColor }} className="font-bold">Address</motion.p>
                    <p className="opacity-80">H.No 1798/B, near Taj Exotica, Calvaddo, Benaulim, South Goa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-amber-500">directions_car</span>
                  <div>
                    <motion.p style={{ color: primaryColor }} className="font-bold">Travel Times</motion.p>
                    <ul className="opacity-80 space-y-1">
                      <li>• 15-20 min from Madgaon (7-9 km)</li>
                      <li>• 35-45 min from Dabolim Airport (23-30 km)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <motion.div style={{ backgroundColor: primaryColor }} className="p-8 rounded-xl text-white shadow-xl">
                <p className="italic font-headline text-lg mb-4">"A hidden gem where the sound of the ocean meets the whispers of the woods."</p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 h-[450px] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-200"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Calvaddo,+Benaulim,+South+Goa&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Benaulim, Goa"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        style={{ backgroundColor: surfaceContainerColor }}
        className="w-full py-16 px-8 mt-auto border-t border-black/10 dark:border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <span className="text-xl font-headline text-yellow-500">The Woodside Inn</span>
            <p className="opacity-70 text-sm leading-relaxed">Redefining tropical luxury in the heart of South Goa's most serene coastal village.</p>
            <div className="flex gap-4">
              <a className="text-yellow-500 hover:text-yellow-400 hover:scale-110 transition-all" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-yellow-500 hover:text-yellow-400 hover:scale-110 transition-all" href="#"><span className="material-symbols-outlined">share</span></a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-yellow-500 font-headline text-lg">Links</h4>
            <nav className="flex flex-col space-y-2">
              <a className="opacity-70 hover:text-yellow-500 hover:opacity-100 transition-all text-sm" href="#about">About</a>
              <a className="opacity-70 hover:text-yellow-500 hover:opacity-100 transition-all text-sm" href="#rooms">Rooms</a>
              <a className="opacity-70 hover:text-yellow-500 hover:opacity-100 transition-all text-sm" href="#dining">Dining</a>
              <a className="opacity-70 hover:text-yellow-500 hover:opacity-100 transition-all text-sm" href="#location">Location</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-yellow-500 font-headline text-lg">Contact</h4>
            <div className="opacity-70 text-sm space-y-2">
              <p>+91 97634 29463</p>
              <p>stay@thewoodsideinngoa.com</p>
              <p>Calvaddo, Benaulim, Goa</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-yellow-500 font-headline text-lg">Newsletter</h4>
            <div className="flex">
              <input className="bg-black/5 dark:bg-white/10 border border-yellow-500/20 text-sm rounded-l-lg w-full focus:ring-yellow-500 px-4 py-2 outline-none" placeholder="Email Address" type="email" />
              <button className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-r-lg hover:from-yellow-400 hover:to-yellow-600 transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-black/10 dark:border-white/10 text-center flex flex-col items-center gap-2">
          <p className="opacity-50 text-xs">© 2026 The Woodside Inn South Goa. All rights reserved.</p>
          <div className="mt-4 flex items-center gap-2 group cursor-default">
            <span className="opacity-60 text-xs uppercase tracking-widest">Developed by</span>
            <span className="font-bold tracking-widest uppercase text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:scale-105">Teched Studios</span>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
