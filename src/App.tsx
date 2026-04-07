/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();

  // Background: Warm Ivory → Deep Forest Green → Midnight Black
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["#F5F0E8", "#132B1C", "#060D10"]
  );

  // Card/surface backgrounds follow the page
  const surfaceColor = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["rgba(255,255,255,0.85)", "rgba(255,255,255,0.07)", "rgba(255,255,255,0.05)"]
  );

  // Header background
  const headerBg = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["rgba(245,240,232,0.95)", "rgba(19,43,28,0.97)", "rgba(6,13,16,0.97)"]
  );

  // Header text: dark on light, light on dark
  const headerTextColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 1],
    ["#1A2F23", "#1A2F23", "#F0EAD6", "#F0EAD6"]
  );

  // Accent/primary colour: emerald green → champagne gold
  const accentColor = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["#1A6B3C", "#C8A84B", "#C8A84B"]
  );

  // Section text: dark on light bg, light-champagne on dark bg
  const sectionTextColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 1],
    ["#1A2F23", "#1A2F23", "#E8DCC0", "#E8DCC0"]
  );

  // Sub-text opacity stays high throughout
  const subTextColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 1],
    ["#4A5E52", "#4A5E52", "#B0A888", "#A09878"]
  );

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0.75]);

  return (
    <motion.div style={{ backgroundColor }} className="min-h-screen font-body">

      {/* ── HEADER ── */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 py-3 md:py-4 shadow-sm"
      >
        <motion.span style={{ color: accentColor }} className="text-xl md:text-2xl font-headline italic">
          The Woodside Inn
        </motion.span>
        <nav className="hidden md:flex items-center space-x-8">
          {["about", "rooms", "dining", "location"].map(link => (
            <motion.a
              key={link}
              style={{ color: headerTextColor }}
              className="font-label uppercase tracking-widest text-xs opacity-80 hover:opacity-100 transition-opacity"
              href={`#${link}`}
            >
              {link}
            </motion.a>
          ))}
        </nav>
        <a
          className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white px-4 md:px-6 py-2 rounded-full font-label uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all shadow-md whitespace-nowrap font-bold"
          href="https://wa.me/919763429463"
        >
          Book Now
        </a>
      </motion.header>

      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Luxury infinity pool reflecting a tropical sunset in South Goa"
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop"
          />
          <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
        </div>

        {/* Birds */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="bird-container bird-container-one"><div className="bird bird-one" /></div>
          <div className="bird-container bird-container-two"><div className="bird bird-two" /></div>
          <div className="bird-container bird-container-three"><div className="bird bird-three" /></div>
          <div className="bird-container bird-container-four"><div className="bird bird-four" /></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl mt-16"
        >
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Discover Serenity in{" "}
            <span className="italic" style={{ color: "#F5C842" }}>South Goa.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
            Your peaceful, premium getaway just steps from Benaulim Beach. Experience the curated sanctuary of The Woodside Inn.
          </p>
          <a
            className="inline-flex items-center gap-3 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-2xl shadow-yellow-500/30 hover:scale-105 hover:shadow-yellow-400/50 transition-all border border-yellow-300/30"
            href="https://wa.me/919763429463"
          >
            <span className="material-symbols-outlined">chat</span>
            Book Your Stay via WhatsApp
          </a>
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
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
              <img
                className="w-full h-full object-cover"
                alt="Exterior of The Woodside Inn boutique hotel"
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-yellow-500/10 -z-10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2 style={{ color: accentColor }} className="font-headline text-4xl md:text-5xl leading-tight">
              The Art of Stillness
            </motion.h2>
            <motion.div style={{ color: subTextColor }} className="space-y-6 leading-relaxed text-lg">
              <p>Nestled in the heart of Calvaddo, Benaulim, The Woodside Inn offers a refined escape for the discerning traveler. Our boutique property features 15 exquisitely designed rooms, each a haven of modern peace.</p>
              <p>Whether you're seeking a quiet retreat or a tropical adventure, we are perfectly positioned just a 10-minute stroll from the pristine sands of Benaulim and Vaddi Beach.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {[
                { icon: "wifi", label: "100+ Mbps", sub: "High-Speed Wi-Fi" },
                { icon: "king_bed", label: "15 Rooms", sub: "Boutique Luxury" },
              ].map(item => (
                <div key={item.icon} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl" style={{ color: "#C8A84B" }}>{item.icon}</span>
                  <div>
                    <motion.p style={{ color: accentColor }} className="font-bold">{item.label}</motion.p>
                    <motion.p style={{ color: subTextColor }} className="text-xs uppercase tracking-widest">{item.sub}</motion.p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section className="py-24" id="rooms">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="font-label uppercase tracking-[0.3em] text-sm font-bold" style={{ color: "#C8A84B" }}>Our Residences</span>
            <motion.h2 style={{ color: accentColor }} className="font-headline text-4xl md:text-5xl mt-4">
              Luxury in Every Detail
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            {[
              {
                col: "md:col-span-7",
                img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
                alt: "Luxury hotel room",
                title: "Deluxe Double Rooms",
                desc: "Elegant spaces featuring garden views and premium linens.",
                icons: ["balcony", "cleaning_services"],
              },
              {
                col: "md:col-span-5",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
                alt: "Spacious hotel suite",
                title: "Premium Suites",
                desc: "Indulgence redefined with a private Jacuzzi and expansive space.",
                icons: ["hot_tub", "window"],
              },
            ].map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`${room.col} relative group rounded-xl overflow-hidden cursor-pointer shadow-lg`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={room.alt}
                  src={room.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white font-headline text-3xl mb-2">{room.title}</h3>
                  <p className="text-white/80 max-w-md mb-4">{room.desc}</p>
                  <div className="flex gap-4">
                    {room.icons.map(ic => (
                      <span key={ic} className="material-symbols-outlined" style={{ color: "#F5C842" }}>{ic}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: "pool", title: "Infinity Pool", desc: "Adults-only serenity with garden views." },
            { icon: "child_care", title: "Children's Pool", desc: "Safe and fun spaces for our youngest guests." },
            { icon: "park", title: "Lush Gardens", desc: "Curated tropical flora for ultimate peace." },
            { icon: "concierge", title: "24h Reception", desc: "Personalized service around the clock." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <motion.span style={{ color: accentColor }} className="material-symbols-outlined text-5xl drop-shadow-sm">
                {item.icon}
              </motion.span>
              <motion.h4 style={{ color: sectionTextColor }} className="font-headline text-xl">{item.title}</motion.h4>
              <motion.p style={{ color: subTextColor }} className="text-sm">{item.desc}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DINING ── */}
      <section className="relative py-32 overflow-hidden" id="dining">
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover"
            alt="Moody cinematic interior of The Woodside Bistro"
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
          />
          <motion.div style={{ backgroundColor: surfaceColor }} className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label uppercase tracking-[0.3em] text-sm font-bold" style={{ color: "#C8A84B" }}>Culinary Journey</span>
            <motion.h2 style={{ color: accentColor }} className="font-headline text-5xl mt-6 mb-8 leading-tight">
              The Woodside Bistro
            </motion.h2>
            <motion.p style={{ color: sectionTextColor }} className="text-lg mb-10 leading-relaxed">
              From the vibrant spices of Goa to the classic comforts of the British Isles, our bistro is a celebration of global flavors. Join us for live music evenings and karaoke nights under the stars.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Local & Asian", desc: "Authentic Goan, Indian, and Chinese favorites." },
                { label: "Continental", desc: "Exquisite British and Greek inspired dishes." },
              ].map(card => (
                <motion.div
                  key={card.label}
                  style={{ backgroundColor: surfaceColor, borderColor: "rgba(200,168,75,0.25)" }}
                  className="p-6 rounded-xl border shadow-lg hover:border-yellow-400/50 transition-colors backdrop-blur-sm"
                >
                  <h5 className="font-bold mb-2" style={{ color: "#C8A84B" }}>{card.label}</h5>
                  <motion.p style={{ color: subTextColor }} className="text-sm">{card.desc}</motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img className="rounded-xl shadow-2xl h-64 w-full object-cover translate-y-8" alt="Traditional Goan seafood curry" src="https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=1974&auto=format&fit=crop" />
            <img className="rounded-xl shadow-2xl h-64 w-full object-cover" alt="Elegant dining table setup" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" />
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION ── */}
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
              <motion.h2 style={{ color: accentColor }} className="font-headline text-4xl">Your Destination</motion.h2>
              <div className="space-y-6">
                {[
                  { icon: "location_on", label: "Address", text: "H.No 1798/B, near Taj Exotica, Calvaddo, Benaulim, South Goa." },
                  { icon: "directions_car", label: "Travel Times", list: ["15-20 min from Madgaon (7-9 km)", "35-45 min from Dabolim Airport (23-30 km)"] },
                ].map(item => (
                  <div key={item.icon} className="flex gap-4">
                    <span className="material-symbols-outlined" style={{ color: "#C8A84B" }}>{item.icon}</span>
                    <div>
                      <motion.p style={{ color: accentColor }} className="font-bold">{item.label}</motion.p>
                      {item.text && <motion.p style={{ color: subTextColor }}>{item.text}</motion.p>}
                      {item.list && (
                        <motion.ul style={{ color: subTextColor }} className="space-y-1">
                          {item.list.map(l => <li key={l}>• {l}</li>)}
                        </motion.ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-8 rounded-xl shadow-xl" style={{ background: "linear-gradient(135deg, #1A6B3C, #0F4A28)" }}>
                <p className="italic font-headline text-lg text-white/90">"A hidden gem where the sound of the ocean meets the whispers of the woods."</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 h-[450px] rounded-2xl overflow-hidden shadow-2xl"
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
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <motion.footer
        style={{ backgroundColor: surfaceColor }}
        className="w-full py-16 px-8 mt-auto border-t border-white/10 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <span className="text-xl font-headline" style={{ color: "#C8A84B" }}>The Woodside Inn</span>
            <motion.p style={{ color: subTextColor }} className="text-sm leading-relaxed">
              Redefining tropical luxury in the heart of South Goa's most serene coastal village.
            </motion.p>
            <div className="flex gap-4">
              {["public", "share"].map(ic => (
                <a key={ic} className="hover:scale-110 transition-transform" style={{ color: "#C8A84B" }} href="#">
                  <span className="material-symbols-outlined">{ic}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-lg" style={{ color: "#C8A84B" }}>Links</h4>
            <nav className="flex flex-col space-y-2">
              {["about", "rooms", "dining", "location"].map(l => (
                <motion.a key={l} style={{ color: subTextColor }} className="text-sm capitalize hover:text-yellow-400 transition-colors" href={`#${l}`}>
                  {l}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-lg" style={{ color: "#C8A84B" }}>Contact</h4>
            <motion.div style={{ color: subTextColor }} className="text-sm space-y-2">
              <p>+91 97634 29463</p>
              <p>stay@thewoodsideinngoa.com</p>
              <p>Calvaddo, Benaulim, Goa</p>
            </motion.div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-lg" style={{ color: "#C8A84B" }}>Newsletter</h4>
            <div className="flex">
              <input
                className="text-sm rounded-l-lg w-full px-4 py-2 outline-none border border-yellow-500/20 focus:border-yellow-500/50 bg-white/5 backdrop-blur-sm"
                style={{ color: "#E8DCC0" }}
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-gradient-to-br from-yellow-400 to-yellow-700 text-white px-4 py-2 rounded-r-lg hover:from-yellow-300 hover:to-yellow-600 transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/10 text-center flex flex-col items-center gap-2">
          <motion.p style={{ color: subTextColor }} className="text-xs opacity-70">
            © 2026 The Woodside Inn South Goa. All rights reserved.
          </motion.p>
          <div className="mt-4 flex items-center gap-2 group cursor-default">
            <span className="text-xs uppercase tracking-widest" style={{ color: "#8A9E90" }}>Developed by</span>
            <span className="font-bold tracking-widest uppercase text-sm bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:scale-105 transition-transform inline-block">
              Teched Studios
            </span>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
