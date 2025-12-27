"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { leadership } from "@/data/leadership";

export default function About() {
  const [selectedMember, setSelectedMember] = useState<null | number>(null);

  const board = [
    {
      name: "Prof. Dr. Saranjit Singh",
      position: "Vice Chancellor",
      image: "/about/member-1.jpg",
      description:
        "Prof. (Dr.) Saranjit Singh holds a Ph.D. from BIT Mesra and M.Tech. from IIT Varanasi. His expertise spans composites, innovation ecosystems and academic leadership.",
    },
    {
      name: "Prof. Dr. Jnyana Ranjan Mohanty",
      position: "Registrar",
      image: "/about/member-2.jpg",
      description:
        "28+ years in research, academic development & innovation. Registrar of KIIT University; author, conference chair & mentor to Ph.D scholars.",
    },
    {
      name: "Dr. Ajit Kumar Pasayat",
      position: "Faculty Incharge",
      image: "/about/member-3.jpg",
      description:
        "Ph.D & M.Tech from IIT Kharagpur. Research in AI/ML, Data Analytics & Cognitive Systems. Reviewer and innovation leader at KIIT.",
    },
  ];

  return (
    <div className="w-full min-h-screen text-white bg-[#080808] scroll-smooth">

      {/* ------------------------------------------------ HERO ------------------------------------------------ */}
      <section className="relative w-full h-[70vh] rounded-3xl overflow-hidden mb-24">
        <img src="/about/KIIT.jpg" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-[Orbitron] tracking-[0.30em]">
            ABOUT <span className="text-cyan-300">KIIT</span>
          </h1>
          <p className="text-white/80 mt-6 leading-relaxed text-lg md:text-xl">
            Kalinga Institute of Industrial Technology (KIIT), a household name
            in the education sector, has become a sought-after destination in
            India for professional studies. It is admired all over for the
            quality of its academic courses, its community outreach work and as
            a university of compassion and humanitarianism. It has become a case
            study because no other educational institution in India has grown in
            its scope and scale as much as KIIT has in a short span of 25 years.
          </p>
        </div>
      </section>


      {/* ------------------------------------------- FOUNDER SECTION ------------------------------------------- */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-14 py-24 px-6 mb-24">
        <img
          src="/about/Founder.png"
          className="max-w-[480px] w-full rounded-xl object-cover object-[center_20%]"
        />

        <div className="max-w-[650px] text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-[Orbitron] mb-8">
            Our <span className="text-cyan-300">Founder</span>
          </h2>
          <p className="text-white/85 text-xl leading-relaxed">
            Prof. Dr. Achyuta Samanta's life story reads like a powerful saga of
            grit, determination, and social responsibility. Born and brought up
            in poverty in a remote village in Odisha, he was dealt a cruel blow
            at the tender age of four when he lost his father, after which his
            life became a struggle for food and education for 15 long years.
            However, he persevered, and at the age of 22, joined teaching. At
            25, he embarked on a journey that would change his own life, and the
            lives of thousands of people. With just Rs 5000 in his pocket, he
            started KIIT (Kalinga Institute of Industrial Technology) and KISS
            (Kalinga Institute of Social Sciences) in two rented houses.
          </p>
        </div>
      </section>


      {/* ------------------------------------------- BOARD MEMBERS ------------------------------------------- */}
      <section className="py-24 px-6 mb-16">
        <h2 className="text-center text-5xl md:text-6xl font-[Orbitron] tracking-[0.20em] text-cyan-300 mb-20">
          Board Members
        </h2>

        <div className="flex flex-wrap justify-center gap-20 mx-auto max-w-[1300px]">
          {board.map((m, i) => (
            <div key={i} className="text-center">

              {selectedMember === i ? (
                <motion.div
                  layout
                  onClick={() => setSelectedMember(null)}
                  className="w-[330px] p-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl cursor-pointer"
                >
                  <div className="w-[180px] aspect-square rounded-full overflow-hidden mx-auto mb-6">
                    <img src={m.image} className="size-full object-cover object-[center_22%]" />
                  </div>
                  <h3 className="text-3xl font-bold">{m.name}</h3>
                  <p className="text-cyan-300 mb-4">{m.position}</p>
                  <p className="text-white/80 text-lg leading-relaxed">{m.description}</p>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedMember(i)}
                  className="cursor-pointer"
                >
                  <div className="w-[220px] aspect-square rounded-full overflow-hidden mx-auto mb-6">
                    <img src={m.image} className="size-full object-cover object-[center_22%]" />
                  </div>
                  <h3 className="text-2xl font-bold">{m.name}</h3>
                  <p className="text-cyan-300">{m.position}</p>
                </motion.div>
              )}

            </div>
          ))}
        </div>
      </section>


      {/* ---------------------------------------- CORE TEAM CUSTOM GRIDS ---------------------------------------- */}
      <section className="pt-10 pb-28 px-6">
        <h2 className="text-center text-5xl md:text-6xl font-[Orbitron] tracking-[0.20em] mb-24 text-cyan-300">
          Core Team Leaders
        </h2>

        {leadership.hierarchy.map((grp, gi) => {
          let gridClass = "";

          if (grp.title.toLowerCase().includes("senior")) {
            gridClass = "grid-cols-1 sm:grid-cols-2";                // 2x1 Senior Exec
          } else if (grp.title.toLowerCase().includes("junior")) {
            gridClass = "grid-cols-1 sm:grid-cols-2";                // 2x1 Junior Exec
          } else {
            gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"; // 3x3 Directors + Deputies + Others
          }

          return (
            <div key={gi} className="w-full flex flex-col items-center mb-32">

              <h3 className="text-4xl md:text-5xl font-[Orbitron] mb-20 text-white tracking-normal">
                {grp.title}
              </h3>

              <div
                className={`
                  grid ${gridClass}
                  gap-y-28 gap-x-16 justify-items-center max-w-[1200px] w-full
                `}
              >
                {grp.members.map((m, mi) => (
                  <div key={mi} className="flex flex-col items-center text-center">

                    <div className="w-[230px] aspect-square rounded-full overflow-hidden mb-8">
                      <img
                        src={m.image}
                        className="size-full object-cover object-[center_22%]"
                        alt={m.name}
                      />
                    </div>

                    <h4 className="text-2xl font-bold mt-2">{m.name}</h4>
                    <p className="text-cyan-300 text-lg mt-1">{m.position}</p>
                    {m.branch && (
                      <p className="text-white/60 italic mt-2 text-md">{m.branch}</p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}