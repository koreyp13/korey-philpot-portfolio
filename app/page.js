'use client';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900 tracking-wide">KOREY PHILPOT</div>
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('work')} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Work</button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</button>
            <a href="/resume.pdf" download className="text-sm text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Available for new opportunities
            </div>
            
            <h1 className="text-7xl md:text-8xl font-light text-gray-900 leading-none tracking-tight">
              Revenue leader<br />
              who builds<br />
              from <span className="italic font-serif">zero</span>.
            </h1>
            
            <div className="h-px bg-gray-200 w-24"></div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              5+ years building revenue engines and launching profitable business units from scratch. 
              Currently VP of Sales & Operations. Open to Head of Sales and VP of Sales roles at high-growth companies.
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <button onClick={() => scrollToSection('work')} className="text-gray-900 underline underline-offset-8 text-lg hover:text-gray-600 transition-colors">
                View my work
              </button>
              <span className="text-gray-300">·</span>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 text-lg transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Minimal Presentation */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">83<span className="text-gray-400">%</span></div>
              <div className="text-sm text-gray-600 leading-relaxed">Revenue growth over 2 years</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">$595<span className="text-gray-400">K</span></div>
              <div className="text-sm text-gray-600 leading-relaxed">Division built in 18 months</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">188<span className="text-gray-400">%</span></div>
              <div className="text-sm text-gray-600 leading-relaxed">Quota attainment projected 2025</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">3<span className="text-gray-400">×</span></div>
              <div className="text-sm text-gray-600 leading-relaxed">Business lines launched from zero</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">WHO I AM</h2>
            <div className="h-px bg-gray-200"></div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I've spent the last five years building revenue engines and teams from scratch, 
              usually in environments where the playbook doesn't exist yet.
            </p>
            
            <p>
              Right now I'm VP of Sales & Operations at a regional company where I've grown 
              revenue 83% in two years. The biggest piece of that was launching three profitable 
              business units from scratch—water filtration, postage solutions, and Print SaaS—with 
              no customers, no teams, no infrastructure. The water filtration division alone went 
              from zero to $595K in 18 months. I hired and trained teams, built sales processes, 
              redesigned operations, and carried sales quotas across multiple product lines 
              simultaneously—exceeding both quotas while cross-selling across divisions.
            </p>
            
            <p>
              Before that, I managed a $2.5M SaaS book in the horse racing industry, where I 
              increased MRR by 20% through a cloud migration and grew ad revenue 40% in six 
              months. And before that, I turned around a dormant program at a golf association—went 
              from 16 course ratings a year to 76 in my first year.
            </p>
            
            <p>
              I'm a player-coach. I like leading teams, but I also like staying close to the 
              work—whether that's closing deals, designing systems, or figuring out how to 
              scale something that's held together with duct tape.
            </p>
            
            <p className="text-gray-900 font-medium">
              I'm looking for my next thing—ideally at a growth-stage company where I can 
              build from scratch, lead a team, and own outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies - Clean List */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">WHAT I'VE BUILT</h2>
            <div className="h-px bg-gray-200"></div>
          </div>
          
          <div className="space-y-1">
            {/* Case Study 1 */}
            <div className="group py-10 border-b border-gray-200 hover:bg-white transition-colors">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-3">01 · PRECISION DUPLICATING SOLUTIONS</div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">
                      Built 3 Profitable Business Units and Transformed Operations
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      Precision Duplicating Solutions · December 2023 - Present
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">The Challenge</div>
                    <p className="text-sm">
                      PDS wanted to diversify beyond office equipment and needed leadership to build multiple 
                      new revenue streams from scratch. My job was to launch and scale new business units 
                      (water filtration, postage, Print SaaS), strengthen our competitive position by adding 
                      vendors, and transform operational infrastructure—all while carrying sales quotas across 
                      multiple product lines.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">What I Did</div>
                    <ul className="text-sm space-y-1 list-none">
                      <li>· Built water filtration division from zero: validated demand, designed sales process, recruited team (2 salespeople, 3 technicians)</li>
                      <li>· Launched two additional profitable business units: postage solutions and Print SaaS</li>
                      <li>· Added new office equipment vendor to strengthen competitive positioning</li>
                      <li>· Carried dual sales quotas simultaneously (water filtration + office equipment), exceeded both</li>
                      <li>· Cross-sold products across business units to maximize customer value</li>
                      <li>· Redesigned and transformed inventory/shipping/receiving program to reduce errors and pick time</li>
                      <li>· Created training programs covering product knowledge, objection handling, and service delivery</li>
                      <li>· Implemented CRM tracking to measure and optimize conversion rates across all divisions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">The Results</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                      <div>
                        <div className="text-2xl font-light text-gray-900">3</div>
                        <div className="text-xs text-gray-500">Business Units Launched</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">$595K</div>
                        <div className="text-xs text-gray-500">Water Division Revenue (Year 2)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">198%</div>
                        <div className="text-xs text-gray-500">Water Division YoY Growth</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">188%</div>
                        <div className="text-xs text-gray-500">Combined Quota Attainment (2025)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group py-10 border-b border-gray-200 hover:bg-white transition-colors">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-3">02 · THE JOCKEY CLUB</div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">
                      Grew SaaS MRR 20% During Complex Cloud Migration
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      Account Manager · January 2023 - December 2023
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">The Challenge</div>
                    <p className="text-sm">
                      Inherited a $2.5M book of SaaS customers during a company-wide cloud migration. 
                      Needed to retain revenue through technical disruption while identifying growth 
                      opportunities in a mature market. The racing industry is regulated by AQHA, 
                      making change management critical.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">What I Did</div>
                    <ul className="text-sm space-y-1 list-none">
                      <li>· Led customer communication strategy for cloud migration across 50+ racing organizations</li>
                      <li>· Identified and closed upsell opportunities during migration (increased MRR by 20%)</li>
                      <li>· Built strategic partnerships with 3 racing associations to launch new ad revenue stream</li>
                      <li>· Grew ad revenue 40% in six months through partnership development and pricing optimization</li>
                      <li>· Maintained 98% retention rate despite technical transition</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">The Results</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                      <div>
                        <div className="text-2xl font-light text-gray-900">$2.5M</div>
                        <div className="text-xs text-gray-500">Book Managed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">20%</div>
                        <div className="text-xs text-gray-500">MRR Increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">40%</div>
                        <div className="text-xs text-gray-500">Ad Revenue Growth</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">98%</div>
                        <div className="text-xs text-gray-500">Retention Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group py-10 border-b border-gray-200 hover:bg-white transition-colors">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-3">03 · GOLF HOUSE KENTUCKY</div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">
                      Scaled Output 375% By Building a Volunteer Workforce from Zero
                    </h3>
                    <div className="text-sm text-gray-500 mb-4">
                      Director of Operations · January 2022 - January 2023
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">The Challenge</div>
                    <p className="text-sm">
                      The course rating program had been neglected for 4+ years. Out of 280 member golf 
                      clubs, 98 were out of compliance with USGA standards (35% of the membership). The 
                      previous record was 16 course ratings per year. I needed to rebuild the entire 
                      program: systems, processes, and a volunteer workforce that didn't exist.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">What I Did</div>
                    <ul className="text-sm space-y-1 list-none">
                      <li>· Recruited, vetted, hired, onboarded, and trained 40 volunteer course raters from scratch</li>
                      <li>· Redesigned operational systems: data management, rating workflows, compliance tracking</li>
                      <li>· Built membership sales process and exceeded target by 400% (8 clubs added vs. 2-club goal)</li>
                      <li>· Managed $159K budget and 3 full-time interns</li>
                      <li>· Supported execution of Kentucky's premier golf championships</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">The Results</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                      <div>
                        <div className="text-2xl font-light text-gray-900">76</div>
                        <div className="text-xs text-gray-500">Course Ratings (Year 1)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">375%</div>
                        <div className="text-xs text-gray-500">Output Increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">40</div>
                        <div className="text-xs text-gray-500">Volunteers Recruited</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-gray-900">400%</div>
                        <div className="text-xs text-gray-500">Membership Target Exceeded</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">CAPABILITIES</h2>
            <div className="h-px bg-gray-200"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Revenue Leadership</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="text-sm">0-to-1 Business Building</li>
                <li className="text-sm">Sales Team Hiring & Training</li>
                <li className="text-sm">Process Design & Optimization</li>
                <li className="text-sm">Quota-Carrying Leadership</li>
                <li className="text-sm">Complex Deal Closing</li>
                <li className="text-sm">Strategic Account Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Operations & Systems</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="text-sm">CRM Implementation & Management</li>
                <li className="text-sm">Sales Operations Design</li>
                <li className="text-sm">Metrics & Analytics</li>
                <li className="text-sm">Budget Management</li>
                <li className="text-sm">Cross-Functional Collaboration</li>
                <li className="text-sm">Change Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Market Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="text-sm">Regulated Industries (Racing/AQHA, Golf/USGA)</li>
                <li className="text-sm">Legal, Healthcare, and Education Sectors</li>
                <li className="text-sm">B2B SaaS Sales</li>
                <li className="text-sm">Hardware/Physical Products</li>
                <li className="text-sm">Long Sales Cycles</li>
                <li className="text-sm">Complex Stakeholder Management</li>
                <li className="text-sm">Risk-Averse Buyers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Technical Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="text-sm">Salesforce, HubSpot, Odoo</li>
                <li className="text-sm">Excel, Sheets, Tableau</li>
                <li className="text-sm">Notion, Monday, Trello</li>
                <li className="text-sm">GitHub, VS Code, Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">RECOGNITION</h2>
            <div className="h-px bg-gray-200 w-24 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-900">
              Cannata Report Young Influencer of the Year
            </h3>
            <div className="text-sm text-gray-500">2025</div>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Recognized by the leading office equipment industry publication for exceptional 
              leadership and innovation in building revenue from zero.
            </p>
          </div>
        </div>
      </section>

      {/* Why Startups Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">WHY FAST-PACED STARTUPS</h2>
            <div className="h-px bg-gray-200"></div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I thrive in fast-paced startup environments where the playbook doesn't exist yet. My entire 
              career has been spent building from zero—launching business units, creating sales processes, 
              hiring teams, and designing operations in environments where I had to figure it out as I went.
            </p>
            
            <p>
              I've sold to complex, risk-averse buyers in regulated industries—equine racing governed by 
              AQHA, golf with USGA compliance, healthcare, education, and legal sectors. I know how to 
              navigate long evaluation cycles, multiple stakeholders, security concerns, and procurement 
              friction without losing momentum.
            </p>
            
            <p>
              What excites me about high-growth startups is the 0-to-1 challenge. No established playbook. 
              No legacy systems. No "that's how we've always done it." Just the opportunity to define how 
              a market buys, build the team from scratch, and own the entire outcome.
            </p>
            
            <p className="text-gray-900 font-medium">
              I'm looking for a company that values builders over resume collectors—somewhere I can create 
              the revenue engine, hire and train the team, and prove that scrappy execution beats perfect 
              planning every time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">LET'S TALK</h2>
            <div className="h-px bg-gray-200"></div>
          </div>
          
          <p className="text-2xl text-gray-700 leading-relaxed mb-12">
            I'm currently exploring Head of Sales and VP of Sales roles at high-growth 
            SaaS companies. If you're building something ambitious and need someone who 
            can build your revenue engine from the ground up, let's connect.
          </p>
          
          <div className="space-y-6 mb-16">
            <div className="flex items-start gap-4">
              <span className="text-gray-400 text-sm w-24">Email</span>
              <a href="mailto:kaphilpot20@gmail.com" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 text-lg">
                kaphilpot20@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gray-400 text-sm w-24">Phone</span>
              <a href="tel:606-224-1971" className="text-gray-900 hover:text-gray-600 text-lg">
                606-224-1971
              </a>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gray-400 text-sm w-24">LinkedIn</span>
              <a href="https://www.linkedin.com/in/korey-philpot" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 text-lg">
                linkedin.com/in/korey-philpot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
            <div>© 2025 Korey Philpot</div>
            <div className="text-center">
              Built with Next.js · Tailwind CSS · Deployed on Vercel
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/korey-philpot" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:kaphilpot20@gmail.com" className="hover:text-gray-900 transition-colors">
                Email
              </a>
              <a href="/resume.pdf" download className="hover:text-gray-900 transition-colors">
                Resume
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-8 italic">
            Built this site to show I can do more than talk about building things.
          </div>
        </div>
      </footer>
    </div>
  );
}
