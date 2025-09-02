'use client'
import { motion } from 'framer-motion';

// SVGs as file imports
import githubIcon from '../public/images/github.svg';
import gmailIcon from "@/public/images/gmail.svg";
import whatsappIcon from "@/public/images/whatsapp.svg";
import linkedinIcon from "@/public/images/linkedin.svg";
import Image from 'next/image';

function Footer() {
  const emailAddress = "alihameed7121996programmer@gmail.com";
  const subject = encodeURIComponent("Subject Here");
  const body = encodeURIComponent("Body of the email goes hrer.");
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;

  const linkedinUrl = "https://www.linkedin.com/in/ali-hameed-225706318";

  const phoneNumber = "+964 781 172 9815";
  const message = "Hello! I would like to know more about your services.";
  const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${message}`;

  return (
    <div className="footer p-4 sm:p-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="container mx-auto text-center mt-4">
        <footer className="text-md text-black dark:text-white">
          © 2024 Ali Hameed development. All rights reserved
        </footer>

        <div className="contact mt-6">
          <p className="text-lg  text-black dark:text-white">Contact me</p>

          {/* Social Links */}
          <motion.div className="flex items-center justify-center space-x-6 mt-10 mb-3">
            {[
              { icon: githubIcon, href: "https://github.com/AliHameedAljabiry", label: "GitHub" },
              { icon: linkedinIcon, href: linkedinUrl, label: "LinkedIn" },
              { icon: gmailIcon, href: gmailLink, label: "Email" },
              { icon: whatsappIcon, href: whatsappLink, label: "WhatsApp" },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                aria-label={label}
              >
                <Image src={icon} alt={label} className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
