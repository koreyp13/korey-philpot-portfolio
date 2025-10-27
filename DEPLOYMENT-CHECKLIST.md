# 🚀 Deployment Checklist

Use this checklist to ensure a smooth deployment to production.

## Pre-Deployment

- [ ] **Test locally**
  ```bash
  npm run build
  npm start
  ```
  - [ ] Site loads without errors
  - [ ] All sections display correctly
  - [ ] All links work (LinkedIn, email, etc.)
  - [ ] Contact form opens email client
  - [ ] Smooth scroll navigation works
  - [ ] Mobile responsive on all screen sizes

- [ ] **Content Review**
  - [ ] All personal information is correct (email, phone, LinkedIn)
  - [ ] Stats and metrics are accurate
  - [ ] No placeholder text remains (e.g., "[Manager Name]" in testimonials)
  - [ ] Resume PDF is uploaded to `/public/resume.pdf`
  - [ ] All case study details are accurate

- [ ] **Performance Check**
  - [ ] Images are optimized (if you added any)
  - [ ] No console errors in browser
  - [ ] Page loads in under 2 seconds locally

## GitHub Setup (If Using GitHub Deployment)

- [ ] **Create GitHub Repository**
  - [ ] Go to github.com and create new repository
  - [ ] Name: `korey-philpot-portfolio` (or your choice)
  - [ ] Public or Private (both work with Vercel)
  - [ ] Don't initialize with README

- [ ] **Push Code to GitHub**
  ```bash
  cd korey-philpot-site
  git init
  git add .
  git commit -m "Initial deployment"
  git branch -M main
  git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
  git push -u origin main
  ```

## Vercel Deployment

- [ ] **Create Vercel Account**
  - [ ] Go to vercel.com
  - [ ] Sign up with GitHub (recommended)
  - [ ] Verify email

- [ ] **Import Project**
  - [ ] Click "Add New..." → "Project"
  - [ ] Select your GitHub repository
  - [ ] Vercel auto-detects Next.js settings
  - [ ] Click "Deploy"

- [ ] **Wait for Build** (~2 minutes)
  - [ ] Monitor build logs
  - [ ] Check for any errors
  - [ ] Note your deployment URL

- [ ] **Test Production Site**
  - [ ] Visit your-project.vercel.app
  - [ ] Test all navigation
  - [ ] Test all links
  - [ ] Test contact form
  - [ ] Test on mobile device
  - [ ] Test resume download

## Post-Deployment

- [ ] **Update LinkedIn Profile**
  - [ ] Add website URL to LinkedIn contact info
  - [ ] Consider updating headline to mention website

- [ ] **Update Resume**
  - [ ] Add website URL to resume header
  - [ ] Format: name | phone | email | website

- [ ] **Test All Devices**
  - [ ] Desktop (Chrome, Firefox, Safari)
  - [ ] Mobile (iPhone, Android)
  - [ ] Tablet

- [ ] **SEO Check**
  - [ ] Google your name + "portfolio" to see if site appears
  - [ ] Verify meta tags with [metatags.io](https://metatags.io)

## Optional: Custom Domain

- [ ] **Purchase Domain**
  - [ ] Buy domain (Namecheap, GoDaddy, etc.)
  - [ ] Recommended: koreyphilpot.com

- [ ] **Add to Vercel**
  - [ ] Vercel Dashboard → Project Settings → Domains
  - [ ] Add your custom domain
  - [ ] Follow DNS configuration instructions

- [ ] **Wait for DNS Propagation** (1-48 hours, usually ~1 hour)
  - [ ] Test domain in multiple browsers
  - [ ] Verify HTTPS certificate is active

- [ ] **Update All Links**
  - [ ] LinkedIn profile
  - [ ] Resume
  - [ ] Email signature
  - [ ] Any applications in progress

## Monitoring & Maintenance

- [ ] **Set Up Analytics** (Optional)
  - [ ] Enable Vercel Analytics
  - [ ] Monitor visitor traffic
  - [ ] Track which sections get the most attention

- [ ] **Regular Updates**
  - [ ] Update stats quarterly
  - [ ] Add new achievements
  - [ ] Keep testimonials fresh
  - [ ] Update job search status if needed

## Share Your Site

- [ ] **In Applications**
  - [ ] Reference in cover letter
  - [ ] Link in email signature
  - [ ] Mention in follow-up emails

- [ ] **Social Media**
  - [ ] LinkedIn post announcing site
  - [ ] Share with your network
  - [ ] Add to all professional profiles

## Troubleshooting

If anything goes wrong:

1. **Build Fails**
   - Check build logs in Vercel dashboard
   - Ensure all files are committed to Git
   - Try deploying again

2. **Site Doesn't Update**
   - Clear browser cache
   - Push new commit to trigger rebuild
   - Check Vercel dashboard for latest deployment

3. **Links Don't Work**
   - Verify URLs are correct in code
   - Test in incognito mode
   - Check browser console for errors

4. **Mobile Issues**
   - Test in Chrome DevTools mobile view
   - Test on actual mobile device
   - Check Tailwind responsive classes

## Final Check

Before sharing your site publicly:

- [ ] Site loads quickly (under 2 seconds)
- [ ] All content is accurate
- [ ] All links work
- [ ] Mobile experience is smooth
- [ ] Contact form works
- [ ] Resume downloads correctly
- [ ] No typos or errors
- [ ] You're proud to share it!

---

## Quick Reference

**Your Vercel URL:** `___________________________`  
**Your Custom Domain:** `___________________________`  
**Deployment Date:** `___________________________`

**Next Steps After Deployment:**
1. Add URL to LinkedIn profile
2. Update resume with website link
3. Reference in job applications
4. Share with network

---

**🎉 Congratulations! Your site is live.**

Remember: This site demonstrates you're a builder. The fact that you deployed this is already differentiating you from 99% of other candidates.

Good luck with your Head of Sales applications!
