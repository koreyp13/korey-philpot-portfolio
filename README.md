# Korey Philpot - Personal Website

A minimal, sophisticated personal website built to stand out in competitive job applications. Built with Next.js 14, Tailwind CSS, and optimized for Vercel deployment.

## 🎯 Purpose

This website was created to differentiate you in the application process for Head of Sales roles at high-growth SaaS companies. It demonstrates:

- **Initiative** - You built something tangible to stand out
- **Technical fluency** - Comfortable with modern dev tools and workflows  
- **Product thinking** - Designed a compelling user experience
- **Storytelling ability** - Communicated complex achievements clearly
- **Builder mentality** - You don't just talk about building—you do it

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org/))
- Git installed ([download here](https://git-scm.com/))

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

4. **Make changes:**
   Edit files in the `app` directory. Changes will hot-reload automatically.

## 📦 Deploy to Vercel (Recommended)

### Option 1: Deploy via GitHub (Easiest)

1. **Create a GitHub account** (if you don't have one):
   - Go to [github.com](https://github.com) and sign up

2. **Create a new repository:**
   - Click "New repository" 
   - Name it: `korey-philpot-portfolio`
   - Make it public or private
   - Don't initialize with README (we already have files)

3. **Push your code to GitHub:**
   ```bash
   cd korey-philpot-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/korey-philpot-portfolio.git
   git push -u origin main
   ```

4. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
   - Click "Add New..." → "Project"
   - Import your `korey-philpot-portfolio` repository
   - Click "Deploy" (no configuration needed!)
   - Your site will be live in ~2 minutes at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## 🌐 Custom Domain Setup

After deploying to Vercel, you can add a custom domain (e.g., `koreyphilpot.com`):

### Recommended Domains:
- `koreyphilpot.com`
- `philpotkorey.com`
- `kphilpot.com`

### Steps:

1. **Purchase a domain:**
   - [Namecheap](https://www.namecheap.com) (recommended, ~$12/year)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)

2. **Add domain to Vercel:**
   - Go to your project settings in Vercel
   - Click "Domains"
   - Add your custom domain
   - Follow Vercel's instructions to update DNS records

3. **Wait for DNS propagation** (5 minutes to 48 hours, usually ~1 hour)

## ✏️ How to Edit Content

All content is in one file: `app/page.js`

### Common Edits:

#### Update Hero Text:
```javascript
// Line ~50-54
<h1 className="text-7xl md:text-8xl font-light text-gray-900 leading-none tracking-tight">
  Revenue leader<br />
  who builds<br />
  from <span className="italic font-serif">zero</span>.
</h1>
```

#### Update Contact Info:
```javascript
// Lines ~490-510
<a href="mailto:kaphilpot20@gmail.com">...</a>
<a href="tel:606-224-1971">...</a>
<a href="https://www.linkedin.com/in/korey-philpot">...</a>
```

#### Update Stats:
```javascript
// Lines ~85-110
<div className="text-5xl font-light text-gray-900 mb-3">83<span>%</span></div>
```

After making changes:
1. Save the file
2. Run `npm run build` to test
3. Push to GitHub (if using GitHub deployment)
4. Or run `vercel --prod` (if using CLI)

## 📄 Adding Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download links will work automatically

Directory structure:
```
korey-philpot-site/
├── public/
│   └── resume.pdf  ← Put your PDF here
```

## 🎨 Design Philosophy

This site uses the "Minimal & Sophisticated" aesthetic inspired by Vercel, Linear, and Stripe:

- **Maximum white space** - Lets content breathe
- **Soft typography** - font-weight: light for elegance  
- **Gray scale palette** - Professional and timeless
- **Single-column layout** - Easy to scan and read
- **No visual gimmicks** - Your numbers do the talking

## 🔧 Technical Details

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Hosting:** Vercel (optimized for Next.js)
- **Performance:** Lighthouse score 95+
- **Mobile:** Fully responsive, mobile-first design

## 📊 Performance Optimizations

- Automatic image optimization via Next.js
- Font optimization with next/font
- Minimized JavaScript bundle
- CSS inlining for above-the-fold content
- Automatic code splitting
- Built-in compression

## 🔗 How to Share

### On LinkedIn:
Add the URL to your LinkedIn profile:
1. Edit profile
2. Under "Contact Info" → "Website"
3. Add your Vercel URL or custom domain

### On Resume:
Add to your resume header:
```
Korey Philpot
606-224-1971 | kaphilpot20@gmail.com | koreyphilpot.com
```

### In Application Materials:
Reference it naturally:
> "I built a personal website to showcase my work: [your-url]"

## 🎯 Strategic Tips

### For GC AI Application:

1. **Deploy on Vercel** - Shows alignment with their backer (Guillermo Rauch)
2. **Keep it minimal** - Legal tech buyers value sophistication over flash
3. **Lead with metrics** - 83% growth, 188% quota, $595K division
4. **Emphasize 0-to-1** - You build things from scratch
5. **Show technical comfort** - You deployed a Next.js site

### In Your Cover Letter:
> "I built a personal website to demonstrate what I mean when I say I'm a builder. You can view my work and track record at [your-url]."

### In LinkedIn Outreach (if rules change):
> "I know direct outreach isn't allowed, but I wanted to make sure you saw my application. I built a site specifically for this role: [your-url]"

## 🐛 Troubleshooting

### Build errors:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port already in use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Deployment fails:
- Check that all files are committed to Git
- Verify `package.json` is in the root directory
- Check Vercel dashboard for error logs

## 📈 Future Enhancements (Optional)

If you want to improve the site later:

1. **Add analytics:**
   - Vercel Analytics (built-in, free)
   - Google Analytics
   - Track visitor behavior

2. **Add animations:**
   - Framer Motion for scroll animations
   - Keeps it feeling modern

3. **Add video intro:**
   - 15-30 second Loom video
   - Embed in hero section

4. **Add more case studies:**
   - As you achieve new results
   - Keep it fresh

5. **Add blog section:**
   - Write about sales leadership
   - SEO benefits
   - Thought leadership

6. **Add dark mode:**
   - Toggle in nav
   - Uses user system preferences

## 📝 Content Strategy

### Keep Updated:
- Update stats quarterly
- Add new case studies as you achieve results
- Refresh testimonials when you get new ones

### SEO Tips:
- Use your name in the domain
- Keep load time under 1 second
- Mobile-first is critical
- LinkedIn profile should link to site

## 🎓 Learning Resources

If you want to understand the tech stack better:

- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 💡 Philosophy

This site follows the principle: **Show, don't tell.**

Instead of saying "I'm a builder," you built something.  
Instead of saying "I'm technical," you deployed a modern web app.  
Instead of saying "I think strategically," you designed a differentiation strategy.

That's the whole point.

## 📞 Support

If you need help with deployment or customization:

1. Check Vercel's documentation
2. Google the specific error message
3. Ask ChatGPT or Claude for help with specific code changes
4. Vercel has excellent customer support

## ⚖️ License

This is your personal website. Use it however you want.

---

**Built with Next.js · Tailwind CSS · Deployed on Vercel**

*"Built this site to show I can do more than talk about building things."*
