import React from "react";

const StayingHardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
              STAYING <span className="text-red-500">HARD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              The David Goggins Philosophy: Mental Toughness, Accountability,
              and the Pursuit of Excellence
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Core Philosophy */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              The <span className="text-red-500">Goggins</span> Mentality
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              David Goggins represents the pinnacle of mental toughness - a man
              who transformed himself from a 300-pound pest control worker into
              a Navy SEAL, ultramarathon runner, and motivational force.
            </p>
            <p className="text-lg text-gray-300">
              His philosophy isn&apos;t about comfort or shortcuts. It&apos;s
              about embracing the suck, finding your why, and becoming uncommon
              amongst the uncommon.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-red-500">
            <blockquote className="text-2xl font-semibold italic">
              &ldquo;You have to build calluses on your brain just like how you
              build calluses on your hands. Callus your mind through pain and
              suffering.&rdquo;
            </blockquote>
            <cite className="block mt-4 text-red-500 font-medium">
              - David Goggins
            </cite>
          </div>
        </div>
      </section>

      {/* The 40% Rule */}
      <section className="bg-red-900/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">THE 40% RULE</h2>
            <p className="text-xl text-gray-300">
              When your mind says you&apos;re done, you&apos;re really only 40%
              done
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-red-500 mb-4">40%</div>
              <h3 className="text-xl font-semibold mb-3">Mental Barrier</h3>
              <p className="text-gray-300">
                Your mind will quit long before your body does. This is where
                most people stop.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-red-500 mb-4">60%</div>
              <h3 className="text-xl font-semibold mb-3">The Reserve</h3>
              <p className="text-gray-300">
                The untapped potential that lies beyond your comfort zone and
                perceived limitations.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-red-500 mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-3">True Potential</h3>
              <p className="text-gray-300">
                What you&apos;re truly capable of when you push past the mental
                barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Core <span className="text-red-500">Principles</span>
        </h2>

        <div className="space-y-12">
          {[
            {
              title: "The Accountability Mirror",
              description:
                "Face yourself honestly. Strip away the lies, excuses, and victim mentality. Look in the mirror and tell yourself the truth about where you are and where you need to go.",
              icon: "🪞",
            },
            {
              title: "Embrace the Suck",
              description:
                "Don&apos;t run from discomfort - run toward it. Pain is temporary, but quitting lasts forever. Use suffering as fuel for growth.",
              icon: "🔥",
            },
            {
              title: "Calloused Mind",
              description:
                "Build mental calluses through consistent exposure to difficulty. Each challenge you overcome makes the next one easier to handle.",
              icon: "🧠",
            },
            {
              title: "Cookie Jar Method",
              description:
                "Remember your past victories when facing new challenges. Draw strength from times you overcame the impossible.",
              icon: "🍪",
            },
            {
              title: "Take Souls",
              description:
                "When others expect you to quit, that&apos;s when you double down. Use their doubt as motivation to exceed their expectations.",
              icon: "👹",
            },
            {
              title: "Stay Hard",
              description:
                "Maintain your edge. Don&apos;t get comfortable. Keep pushing boundaries and challenging yourself daily.",
              icon: "⚡",
            },
          ].map((principle, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-gray-900/50 p-8 rounded-lg"
            >
              <div className="text-4xl">{principle.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-red-500">
                  {principle.title}
                </h3>
                <p className="text-lg text-gray-300">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mental Warfare */}
      <section className="bg-gradient-to-r from-red-900/20 to-black px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mental <span className="text-red-500">Warfare</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">The Inner Voice</h3>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded border-l-4 border-red-500">
                  <p className="text-red-300 font-medium">Weak Voice Says:</p>
                  <p className="text-gray-300">
                    &ldquo;This is too hard. I can&apos;t do this. I should
                    quit.&rdquo;
                  </p>
                </div>
                <div className="bg-black/50 p-4 rounded border-l-4 border-green-500">
                  <p className="text-green-300 font-medium">
                    Goggins Voice Says:
                  </p>
                  <p className="text-gray-300">
                    &ldquo;Good. This is where I get better. Bring it on.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Daily Battles</h3>
              <ul className="space-y-3">
                {[
                  "Wake up early when you don&apos;t want to",
                  "Exercise when your body resists",
                  "Study when your mind wants to relax",
                  "Face your fears head-on",
                  "Tell yourself the truth",
                  "Choose discipline over comfort",
                ].map((battle, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">{battle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          The <span className="text-red-500">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              phase: "ROCK BOTTOM",
              description:
                "300 pounds, depressed, living a lie. The mirror showed David the truth he&apos;d been avoiding.",
            },
            {
              phase: "THE AWAKENING",
              description:
                "Decided to face reality. Started with brutal honesty about his current state.",
            },
            {
              phase: "THE GRIND",
              description:
                "Lost 106 pounds in 3 months. Passed Navy SEAL training. Became a different person.",
            },
            {
              phase: "ULTRA ENDURANCE",
              description:
                "Pushed beyond what anyone thought possible. Multiple ultramarathons, world records.",
            },
            {
              phase: "SHARING THE MESSAGE",
              description:
                "Helping others find their own path to mental toughness and personal transformation.",
            },
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-500 mb-2">
                  {step.phase}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-900 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-6">
            WHO&apos;S GONNA CARRY THE BOATS?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            The question isn&apos;t whether you have what it takes. The question
            is whether you&apos;re willing to find out.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Start Today</h3>
              <p className="text-red-100">
                Don&apos;t wait for motivation. Action creates momentum.
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Embrace Discomfort</h3>
              <p className="text-red-100">
                Growth lives outside your comfort zone.
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Stay Hard</h3>
              <p className="text-red-100">
                Consistency beats perfection every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-8 border-t border-gray-800">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            &ldquo;The most important conversations you&apos;ll ever have are
            the ones you&apos;ll have with yourself.&rdquo; - David Goggins
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StayingHardPage;
