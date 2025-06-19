// import React from 'react';
// import './Footer.css';
// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="social-icons">
//         <FaFacebookF />
//         <FaLinkedinIn />
//         <FaTwitter />
//         <FaInstagram />
//       </div>

//       <div className="footer-columns">
//         <div className="footer-col">
//           <h4>Heitech</h4>
//           <ul>
//             <li><a href="#">Homepage</a></li>
//             <li><a href="#">Resume Templates</a></li>
//             <li><a href="#">CV Templates</a></li>
//             <li><a href="#">Cover Letters</a></li>
//             <li><a href="#">Resume Builder</a></li>
//             <li><a href="#">CV Maker</a></li>
//             <li><a href="#">Cover Letter Maker</a></li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Learn</h4>
//           <ul>
//             <li><a href="#">Career Blog</a></li>
//             <li><a href="#">How to Write a Resume</a></li>
//             <li><a href="#">How to Write CV</a></li>
//             <li><a href="#">How to Write a Cover Letter</a></li>
//             <li><a href="#">Resume Examples</a></li>
//             <li><a href="#">Cover Letter Examples</a></li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Other</h4>
//           <ul>
//             <li><a href="#">Pricing</a></li>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">eBook Store</a></li>
//             <li><a href="#">Media Kit</a></li>
//             <li><a href="#">Help Center</a></li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Legal/Contact</h4>
//           <ul>
//             <li><a href="#">Terms of Use</a></li>
//             <li><a href="#">Privacy Policy</a></li>
//             <li><a href="#">Cookie Policy</a></li>
//             <li><a href="mailto:contact@heitechresume.com">contact@heitechresume.com</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Heitech Resume Builder. Powered by Let's Grow Together.</p>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="heitech-footer">
      <div className="footer-top">
        <h2>Let’s Build the Future, One Resume at a Time.</h2>
        <p>Join 1000+ users building standout resumes powered by smart templates & creativity.</p>
      </div>

      <div className="footer-socials">
        <div className="icon"><FaFacebookF /></div>
        <div className="icon"><FaLinkedinIn /></div>
        <div className="icon"><FaTwitter /></div>
        <div className="icon"><FaInstagram /></div>
      </div>

      <div className="footer-links">
        <div className="link-col">
          <h4>Heitech</h4>
          <a href="#">Templates</a>
          <a href="#">Resume Builder</a>
          <a href="#">Cover Letters</a>
        </div>
        <div className="link-col">
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Examples</a>
          <a href="#">Career Tips</a>
        </div>
        <div className="link-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help Center</a>
        </div>
        <div className="link-col contact-box">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:hello@heitechresume.com">hello@heitechresume.com</a></p>
          <p>Support Time: 9AM - 6PM IST</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Heitech Resume Builder — Powered by Let's Grow Together 🌱
      </div>
    </footer>
  );
}

