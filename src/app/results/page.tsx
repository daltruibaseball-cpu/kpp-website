import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results | Kirk\'s Pitching Performance',
  description: 'See the measurable results our athletes achieve. Velocity gains, college commits, and transformation stories.',
};

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

const STATS = [
  { value: '+3', label: 'Avg MPH Gain' },
  { value: '92%', label: 'Retention Rate' },
  { value: '150+', label: 'Athletes Trained' },
  { value: '25+', label: 'College Commits' },
];

export default function Results() {
  return (
    <div className="min-h-screen">
      {/* Hero + Stats - One Cohesive Section */}
      <section className="relative bg-black text-white py-10 md:py-16 overflow-hidden">
        {/* Background gradient matching Home hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-800 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="relative max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Results
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              We measure success in real outcomes — velocity gains, improved command, college opportunities, and athletes who stay healthy while performing at their best.
            </p>
          </div>

          {/* Stats Grid - Unified Block */}
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-5 text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Transformations */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">See the Proof</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Athlete Transformations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real athletes, real results. Here are some of the transformations we have been part of.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { before: 84, after: 91, name: 'Chase G.', type: 'College RHP', duration: '6 Month Program', desc: 'Came in as a junior throwing 78. Left touching 87 and earned a D2 scholarship. Focus was on hip-shoulder separation and arm path efficiency.' },
              { before: 75, after: 86, name: 'Tovi S.', type: 'College LHP', duration: '6 Month Program', desc: 'Division III starter who needed more velocity to compete. Remote training over 8 months resulted in 7 mph gain and a conference-leading ERA.' },
              { before: 68, after: 75, name: 'Tommy R.', type: '14U Travel Ball', duration: '1 Year Program', desc: 'Young arm with great work ethic. Built a foundation of proper mechanics and arm care that will serve him for years. Gained 7 mph safely.' },
              { before: 88, after: 94, name: 'Chris D.', type: 'JUCO RHP', duration: '6 Month Progam', desc: 'Transfer portal candidate who needed to stand out. Combination of weighted balls, strength work, and mechanical refinement unlocked 6 mph.' },
              { before: 82, after: 88, name: 'Ryan P.', type: 'High School LHP', duration: 'Remote Program', desc: 'Remote athlete from out of state. Consistent video check-ins and programming over 10 months. Now committed to a D1 program.' },
              { before: 86, after: 92, name: 'Derek S.', type: 'Post-Grad RHP', duration: 'In-Person Training', desc: 'Post-grad year focused on physical development and pitch design. Signed with an independent league team after showcasing improved arsenal.' },
            ].slice(0, 3).map((athlete, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-36 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl md:text-4xl font-bold">{athlete.before} → {athlete.after}</div>
                    <div className="text-sm text-gray-400 mt-1">MPH</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-black mb-1">{athlete.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{athlete.type} • {athlete.duration}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {athlete.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              In Their Words
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { quote: "I've spent the better part of a year working with Jackson. I came along when the business was small but the passion and love for the game he showed just convinced me he was the guy to get me to the next level. I came in fresh out of a JUCO, now I'm at a new program and looking to make a big impression. In just a month of work I had climbed past my old PR and began to raise the floor so even the bad days were what my good ones once were. I'm now poised to be a top arm on my team with a still climbing velocity to pair with a mental aspect I never knew I had. All thanks to KPP.", name: 'Logan D.', type: 'Collegiate RHP' },
              { quote: "When I first started with Jackson in September of Last year I was lost in my throw and struggling to reach the velocity I knew I was capable of. Not only am I now sitting a velocity that used to be my lifetime PR and believe I have even more in the tank, but I'm a new pitcher with a greater mindset. You will find no one more invested in you as a remote coach than him. That's the kind of training he offers those who are willing to put in the effort and trust the process.", name: 'Caleb G.', type: 'Professional Free Agent' },
              { quote: "As a collegiate athlete who had 2 crucial injuries and hadn’t really played in 2 -2.5 years before working with Jackson and Cam I really struggled with getting myself back on many levels mentally physically competitively. When I started working with the guys I instantly felt all of it starting to come back with me. They were the missing pieces that I needed. The program and structure as a whole is everything I needed. I had the work ethic all I needed was a proper plan and they filled that for me. Now I’m feeling dominant then ever but still have work to do and I don’t plan on stopping any time soon. I can’t thank these guys enough, I plan on continuing with these guys as they are the best in the game!", name: 'Eli Dunphy.', type: 'Collegiate RHP' },
              { quote: "The holistic approach is what sets KPP apart. It is not just about throwing hard — it is about being a complete pitcher. Mechanics, mental game, arm health, pitch design. It all comes together.", name: 'Cortland C.', type: 'D1 RHP' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <svg className="w-7 h-7 text-red-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Write Your Own Success Story
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            These athletes committed to the process and saw real results. Your transformation starts with a simple conversation.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
}
