# 🎨 Customization Guide

This guide shows you exactly how to customize your website. All edits are in `app/page.js`.

## Quick Navigation

- [Hero Section](#hero-section)
- [Stats](#stats)
- [About Section](#about-section)
- [Case Studies](#case-studies)
- [Skills](#skills)
- [Contact Information](#contact-information)
- [Colors & Styling](#colors--styling)

---

## Hero Section

### Change the Main Headline

**Location:** Lines 48-54

**Current:**
```javascript
<h1 className="text-7xl md:text-8xl font-light text-gray-900 leading-none tracking-tight">
  Revenue leader<br />
  who builds<br />
  from <span className="italic font-serif">zero</span>.
</h1>
```

**Alternative Headlines:**

Option 1 - Builder Focus:
```javascript
<h1 className="...">
  I build revenue<br />
  engines from<br />
  <span className="italic font-serif">zero</span>.
</h1>
```

Option 2 - Direct:
```javascript
<h1 className="...">
  Builder. Closer.<br />
  <span className="italic font-serif">Leader</span>.
</h1>
```

### Change the Subheadline

**Location:** Lines 60-63

**Current:**
```javascript
<p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
  5+ years building revenue engines and launching profitable business units from scratch. 
  Currently VP of Sales & Operations. Seeking Head of Sales role at high-growth SaaS company.
</p>
```

**Customize it:**
- Change "5+ years" to your actual experience
- Update your current title
- Modify the role you're seeking

---

## Stats

**Location:** Lines 85-110

### Update the Four Main Stats

**Current Stats:**
```javascript
<div>
  <div className="text-5xl font-light text-gray-900 mb-3">83<span className="text-gray-400">%</span></div>
  <div className="text-sm text-gray-600 leading-relaxed">Revenue growth over 2 years</div>
</div>
```

**To change a stat:**
1. Find the number (e.g., `83`)
2. Replace with your number
3. Update the description text
4. Keep the same format

**Example - Change to 150% growth:**
```javascript
<div>
  <div className="text-5xl font-light text-gray-900 mb-3">150<span className="text-gray-400">%</span></div>
  <div className="text-sm text-gray-600 leading-relaxed">Revenue growth over 3 years</div>
</div>
```

---

## About Section

**Location:** Lines 116-165

### Edit the Narrative

This is your story. Update it with your actual experience:

**Structure:**
1. Opening (what you do)
2. Current role achievements
3. Previous role highlights
4. What you're looking for

**Example edit:**
```javascript
<p>
  I've spent the last [NUMBER] years building revenue engines and teams from scratch, 
  usually in environments where the playbook doesn't exist yet.
</p>
```

Change `[NUMBER]` to your years of experience.

---

## Case Studies

**Location:** Lines 172-390

### Case Study Structure

Each case study has:
1. Title
2. Company & dates
3. Challenge description
4. What you did (bullet points)
5. Results (4 key metrics)

### Example: Update Case Study Results

**Location:** Lines 240-260 (Case Study 1 results)

```javascript
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
  <div>
    <div className="text-2xl font-light text-gray-900">$200K</div>
    <div className="text-xs text-gray-500">Year 1 Revenue</div>
  </div>
  <div>
    <div className="text-2xl font-light text-gray-900">$595K</div>
    <div className="text-xs text-gray-500">Year 2 Revenue</div>
  </div>
  <!-- Add more metrics here -->
</div>
```

**To add a new metric:**
```javascript
<div>
  <div className="text-2xl font-light text-gray-900">150%</div>
  <div className="text-xs text-gray-500">Your Metric Here</div>
</div>
```

---

## Skills

**Location:** Lines 395-460

### Add or Remove Skills

**Current structure:**
```javascript
<div>
  <h3 className="text-lg font-medium text-gray-900 mb-6">Revenue Leadership</h3>
  <ul className="space-y-3 text-gray-600">
    <li className="text-sm">0-to-1 Business Building</li>
    <li className="text-sm">Sales Team Hiring & Training</li>
    <!-- Add more skills here -->
  </ul>
</div>
```

**To add a skill:**
```javascript
<li className="text-sm">Your New Skill</li>
```

**To add a new category:**
```javascript
<div>
  <h3 className="text-lg font-medium text-gray-900 mb-6">Your Category Name</h3>
  <ul className="space-y-3 text-gray-600">
    <li className="text-sm">Skill 1</li>
    <li className="text-sm">Skill 2</li>
    <li className="text-sm">Skill 3</li>
  </ul>
</div>
```

---

## Contact Information

**Location:** Lines 543-565

### Update Email, Phone, LinkedIn

```javascript
<div className="flex items-start gap-4">
  <span className="text-gray-400 text-sm w-24">Email</span>
  <a href="mailto:kaphilpot20@gmail.com" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 text-lg">
    kaphilpot20@gmail.com
  </a>
</div>
```

**To change email:**
1. Replace `kaphilpot20@gmail.com` in both places (href and displayed text)

**To change phone:**
```javascript
<a href="tel:606-224-1971" className="...">
  606-224-1971
</a>
```
Replace both instances of the phone number

**To change LinkedIn:**
```javascript
<a href="https://www.linkedin.com/in/korey-philpot" target="_blank" rel="noopener noreferrer" className="...">
  linkedin.com/in/korey-philpot
</a>
```
Replace the URL and the displayed text

---

## Colors & Styling

### Want to Add a Subtle Accent Color?

The site is intentionally minimal, but if you want one accent color for CTAs:

**Find all instances of:** `text-gray-900` or `bg-gray-900`

**Replace with:** `text-blue-600` or `bg-blue-600`

**Example locations:**
- Submit button (line ~605)
- Underline hover states
- Section headers

### Change Gray Tones

**Current palette:**
- `text-gray-900` - Darkest (headings)
- `text-gray-700` - Medium dark (body)
- `text-gray-600` - Medium (secondary)
- `text-gray-500` - Light (labels)
- `text-gray-400` - Lightest (subtle)

To make it warmer, replace `gray` with `stone`:
```javascript
text-stone-900
bg-stone-50
border-stone-200
```

---

## Typography

### Change Font Weight

**Current:** Uses `font-light` (300 weight) for elegant look

**To make it bolder:**
- Replace `font-light` with `font-normal` (400 weight)
- Or use `font-medium` (500 weight)

**Example:**
```javascript
// Current
<h3 className="text-3xl font-light text-gray-900">

// Bolder
<h3 className="text-3xl font-normal text-gray-900">
```

### Change Font Size

**Headlines:**
- `text-7xl` = Very large
- `text-6xl` = Large
- `text-5xl` = Medium-large
- `text-4xl` = Medium

**Body:**
- `text-xl` = Large body
- `text-lg` = Medium body
- `text-base` = Normal body
- `text-sm` = Small

---

## Mobile Responsiveness

The site uses Tailwind's responsive prefixes:

- No prefix = applies to all screens
- `md:` = applies to medium screens and up (tablets, desktops)

**Example:**
```javascript
className="text-5xl md:text-7xl"
```
This means: 
- Mobile: text-5xl
- Tablet/Desktop: text-7xl

---

## Testing Your Changes

After making any edits:

1. **Save the file**

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

3. **Check mobile view:**
   - Open Chrome DevTools (F12)
   - Click device toolbar icon
   - Test different screen sizes

4. **Build for production:**
   ```bash
   npm run build
   ```
   This catches any errors before deploying

5. **Deploy:**
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
   Vercel will auto-deploy

---

## Common Customizations

### 1. Update Testimonials

**Location:** Lines 527-548

Replace the placeholder text:
```javascript
<p className="text-lg text-gray-700 leading-relaxed italic">
  "Your actual testimonial here..."
</p>
<div className="text-sm text-gray-500">
  — Person's Name, Title<br />Company Name
</div>
```

### 2. Add a New Section

Copy any existing section and modify:

```javascript
<section className="py-32 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="mb-12">
      <h2 className="text-sm font-medium text-gray-400 tracking-widest mb-6">YOUR SECTION TITLE</h2>
      <div className="h-px bg-gray-200"></div>
    </div>
    
    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
      <p>Your content here...</p>
    </div>
  </div>
</section>
```

### 3. Change Navigation Items

**Location:** Lines 21-30

```javascript
<button onClick={() => scrollToSection('work')} className="...">Work</button>
<button onClick={() => scrollToSection('about')} className="...">About</button>
```

Add a new nav item:
```javascript
<button onClick={() => scrollToSection('your-section-id')} className="...">Your Section</button>
```

Make sure your section has the matching ID:
```javascript
<section id="your-section-id" className="...">
```

---

## Need More Help?

1. **Tailwind CSS Documentation:** https://tailwindcss.com/docs
2. **Next.js Documentation:** https://nextjs.org/docs
3. **Ask ChatGPT/Claude:** "How do I [specific thing] in this Next.js code?"

Remember: The site is intentionally simple. Most edits are just changing text and numbers. You don't need to understand all the code to customize it effectively.

---

## Best Practices

✅ **DO:**
- Test changes locally before deploying
- Keep the minimal aesthetic
- Update stats regularly
- Back up your code

❌ **DON'T:**
- Change class names unless you know Tailwind
- Remove the `'use client'` directive at the top
- Change the file structure
- Add heavy animations (kills the minimal vibe)

---

**Happy customizing! 🎨**
