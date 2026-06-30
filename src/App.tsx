import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Menu, 
  X, 
  Layers, 
  Grid, 
  Droplets, 
  Sparkles, 
  Flame, 
  Snowflake, 
  Box, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Cpu, 
  Plus, 
  Trash, 
  Check, 
  CheckCircle2, 
  Send, 
  Info, 
  Terminal, 
  FileText, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  Building,
  XCircle,
  Loader2,
  Sun,
  Moon,
  GitCompare,
  ArrowLeftRight,
  Printer
} from "lucide-react";
import { 
  productsData, 
  translations, 
  processFlowSteps, 
  mockLeadNotification, 
  mockAutoResponseEmail,
  Product
} from "./data";

// Reusable scroll animation component using motion
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

function ScrollReveal({ children, delay = 0, y = -35, duration = 0.6, className = "" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const partnersData = [
  {
    name: "LEHUI",
    url: "https://www.lehui.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 290 100" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#E30613" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
            {/* L */}
            <path d="M 26,26 L 26,74 L 65,74" />
            {/* E */}
            <path d="M 131,35 L 131,26 L 86,26 L 86,74 L 131,74 L 131,65" />
            <path d="M 86,50 L 123,50" />
            {/* H */}
            <path d="M 152,26 L 152,74" />
            <path d="M 186,26 L 186,74" />
            <path d="M 152,50 L 186,50" />
            {/* U */}
            <path d="M 208,26 L 208,74 L 242,74 L 242,26" />
            {/* I */}
            <path d="M 264,26 L 264,74" />
          </g>
          {/* Subtitle "First for value" aligned to right bottom */}
          <text x="270" y="94" fill="#000000" className="dark:fill-slate-300 fill-black" fontSize="14" fontWeight="600" fontFamily="sans-serif" textAnchor="end">First for value</text>
        </svg>
      </div>
    )
  },
  {
    name: "OMAG",
    url: "https://www.omag-pack.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 160 55" className="h-11 w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Four vertical red blocks above m */}
          <g fill="#E30613">
            <rect x="52" y="2" width="4" height="11" />
            <rect x="61" y="2" width="4" height="11" />
            <rect x="70" y="2" width="4" height="11" />
            <rect x="79" y="2" width="4" height="11" />
          </g>
          <g fill="currentColor" className="text-slate-600 dark:text-slate-400">
            <path d="M25 32 c0-6.6 5.4-12 12-12 s12 5.4 12 12 s-5.4 12-12 12 s-12-5.4-12-12 z M31 32 c0 3.3 2.7 6 6 6 s6-2.7 6-6 s-2.7-6-6-6 s-6 2.7-6 6 z" />
            <path d="M52 22 h6 v3 c1.5-2.5 4-4 7-4 c3 0 5.5 1.5 6.5 4 c1.5-2.5 4-4 7.5-4 c5 0 8 3.5 8 8 v15 h-6 v-13 c0-2.5-1.5-4-3.5-4 s-3.5 1.5-3.5 4 v13 h-6 v-13 c0-2.5-1.5-4-3.5-4 s-3.5 1.5-3.5 4 v13 h-6 z" />
            <path d="M96 32 c0-6 4.5-11 11-11 c4 0 7 2 8 5 v-4 h6 v22 c0 0 0 0 0 0 h-6 v-3 c-1 3-4 5-8 5 c-6.5 0-11-5-11-11 z M115 32 c0-3.3-2.2-5.5-5-5.5 s-5 2.2-5 5.5 s2.2 5.5 5 5.5 s5-2.2 5-5.5 z" />
            <path d="M125 32 c0-6 4.5-11 11-11 c4 0 7 2 8 5 v-5 h6 v20 c0 6.6-5.4 12-12 12 c-4.5 0-8-2-9.5-5.5 l5.5-2 c1 1.8 2.5 3 4 3 c3.3 0 6-2.7 6-6 v-2.5 c-1 3-4 5-8 5 c-6.5 0-11-5-11-11 z M144 32 c0-3.3-2.2-5.5-5-5.5 s-5 2.2-5 5.5 s2.2 5.5 5 5.5 s5-2.2 5-5.5 z" />
          </g>
        </svg>
        <span className="text-[9px] text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-1">Sachet and Stick-pack Machines</span>
      </div>
    )
  },
  {
    name: "HP",
    url: "https://www.highpack.com.my/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
          {/* A vertically elongated diamond (rhombus) split vertically */}
          <path d="M 50,5 L 85,50 L 50,95 L 15,50 Z" fill="#E30613" />
          <path d="M 50,9 L 81,50 L 50,91 L 19,50 Z" fill="none" stroke="white" strokeWidth="2.5" />
          
          {/* Vertical white split line */}
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="3" />

          {/* White horizontal oval centered */}
          <ellipse cx="50" cy="50" rx="22" ry="14" fill="white" />
          
          {/* HP Text inside oval in deep navy blue */}
          <text x="50" y="55" fill="#001A49" fontSize="15" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-0.5">HP</text>
          
          {/* Registered symbol */}
          <text x="82" y="30" fill="#E30613" fontSize="8" fontWeight="bold" fontFamily="sans-serif">®</text>
        </svg>
      </div>
    )
  },
  {
    name: "Atlanta",
    url: "https://www.atlantapackaging.eu/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 180 50" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Three spheres above the letters 'At' */}
          <g fill="#4A5568">
            <circle cx="21" cy="11" r="3.5" />
            <circle cx="15" cy="17" r="3.5" />
            <circle cx="27" cy="17" r="3.5" />
          </g>
          {/* Atlanta wordmark */}
          <g fill="#E30613">
            <path d="M6 38 L16 15 L26 15 L36 38 H28 L25 31 H17 L14 38 Z M21 21 L23 27 H19 Z" />
            <path d="M42 16 v6 h-4 v5 h4 v11 c0 4 2 6 6 6 h4 v-5 h-2 c-2 0-2-1-2-3 v-9 h4 v-5 h-4 v-6 z" />
            <path d="M56 10 h6 v28 h-6 z" />
            <path d="M66 28 c0-6 4.5-10 10-10 c4 0 7 2 8 5 v-4 h6 v23 h-6 v-3 c-1 3-4 5-8 5 c-5.5 0-10-4-10-10 z M80 28 c0-3 1.5-5 4-5 s4 2 4 5 s-1.5 5-4 5 s-4-2-4-5 z" />
            <path d="M96 20 h6 v3 c1.5-2.5 4-4 7.5-4 c5 0 8 3.5 8 8 v11 h-6 v-10 c0-2.5-1.5-4-3.5-4 s-3.5 1.5-3.5 4 v10 h-6 z" />
            <path d="M124 16 v6 h-4 v5 h4 v11 c0 4 2 6 6 6 h4 v-5 h-2 c-2 0-2-1-2-3 v-9 h4 v-5 h-4 v-6 z" />
            <path d="M138 28 c0-6 4.5-10 10-10 c4 0 7 2 8 5 v-4 h6 v23 h-6 v-3 c-1 3-4 5-8 5 c-5.5 0-10-4-10-10 z M152 28 c0-3 1.5-5 4-5 s4 2 4 5 s-1.5 5-4 5 s-4-2-4-5 z" />
          </g>
          <text x="168" y="22" fill="#E30613" fontSize="8" fontWeight="bold" fontFamily="sans-serif">®</text>
        </svg>
        <span className="text-[7px] tracking-widest text-slate-500 dark:text-slate-400 font-mono uppercase font-extrabold mt-1 text-center">
          PACKAGING TECHNOLOGY & MACHINERY
        </span>
      </div>
    )
  },
  {
    name: "FlexBlow",
    url: "https://flexblow.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 160 50" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="36" fill="#3FA9F5" fontSize="30" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-1">
            FlexBlow
            <tspan fontSize="10" dy="-15">®</tspan>
          </text>
        </svg>
      </div>
    )
  },
  {
    name: "Cevolani",
    url: "https://www.cevolani.eu/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 160 50" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g fontStyle="italic" fontWeight="bold" fontFamily="sans-serif">
            {/* Cev and lani in elegant slate gray */}
            <text x="10" y="35" fill="#5B6166" fontSize="28" letterSpacing="-0.5">Cev</text>
            
            {/* Planetary O: Golden sphere with orbital ring crescents */}
            <g transform="translate(68, 27)">
              <circle cx="0" cy="0" r="8" fill="#F2A900" />
              {/* Highlight curve */}
              <path d="M -5,-3 C -7,-1 -7,3 -5,5 C -6,3 -6,-1 -5,-3 Z" fill="white" opacity="0.8" />
              {/* Left-top orbit curve */}
              <path d="M -11,2 C -12,-4 -7,-9 -1,-9 C -6,-8 -9,-4 -8,1 Z" fill="#F2A900" />
              {/* Right-bottom orbit curve */}
              <path d="M 11,-2 C 12,4 7,9 1,9 C 6,8 9,4 8,-1 Z" fill="#F2A900" />
            </g>

            <text x="81" y="35" fill="#5B6166" fontSize="28" letterSpacing="-0.5">lani</text>
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "Royal Apollo Group",
    url: "https://apollovts.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 240 60" className="h-14 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 0)">
            <path d="M 20,12 L 15,4 L 20,8 L 25,2 L 30,8 L 35,4 L 30,12 Z" fill="#E3007E" />
            <circle cx="15" cy="4" r="1" fill="#FFD700" />
            <circle cx="25" cy="2" r="1" fill="#FFD700" />
            <circle cx="35" cy="4" r="1" fill="#FFD700" />
            <path d="M 12,42 L 21,14 H 29 L 38,42 H 31 L 29,34 H 21 L 19,42 Z M 22,28 H 28 L 25,18 Z" fill="#E3007E" />
            <text x="25" y="49" fill="#002F6C" className="dark:fill-slate-300" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.2">ROYAL APOLLO</text>
            <text x="25" y="55" fill="#002F6C" className="dark:fill-slate-300" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Group</text>
          </g>
          <g transform="translate(75, 0)">
            <text x="0" y="32" fontStyle="italic" fontFamily="sans-serif" fontSize="12" fontWeight="bold">
              <tspan fill="#E3007E">Always moving </tspan>
              <tspan fill="currentColor" className="text-slate-800 dark:text-slate-200">forward</tspan>
            </text>
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "DEMARK",
    url: "https://www.demark-pet.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 170 50" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFB300">
            {/* D */}
            <path d="M 10,12 H 24 C 31,12 36,17 36,25 C 36,33 31,38 24,38 H 10 Z M 16,18 V 32 H 24 C 28,32 30,30 30,25 C 30,20 28,18 24,18 Z" />
            {/* E with Arrow in the middle bar */}
            <path d="M 42,12 H 58 V 17.5 H 48 V 22.5 H 52 L 52,20 L 57,25 L 52,30 L 52,27.5 H 48 V 32.5 H 58 V 38 H 42 Z" />
            {/* M */}
            <path d="M 64,12 H 71 L 76,24 L 81,12 H 88 V 38 H 82 V 22 L 77.5,33 H 74.5 L 70,22 V 38 H 64 Z" />
            {/* A */}
            <path d="M 94,12 H 102 L 109,38 H 102.5 L 101,31 H 95 L 93.5,38 H 87 Z M 96,26 H 100 L 98,18 Z" />
            {/* R */}
            <path d="M 115,12 H 128 C 133,12 136,15 136,21 C 136,26 133,29 128,29 L 137,38 H 130 L 122.5,29 H 121 V 38 H 115 Z M 121,17 V 24 H 127 C 129.5,24 130,23 130,20.5 C 130,18 129.5,17 127,17 Z" />
            {/* K with Wedge slash accent at the top-right */}
            <path d="M 143,12 H 149 V 23 L 158,12 H 165 L 155,24 L 166,38 H 159 L 151,27 V 38 H 143 Z" />
            <path d="M 158,10 L 165,10 L 160,16 Z" />
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "DTS",
    url: "https://www.dts-retort.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 240 60" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Logo Graphic on Left */}
          <g transform="translate(10, 10)">
            {/* Three vertical colored bars on the left */}
            <rect x="10" y="19" width="3.5" height="14" fill="#F57F20" />
            <rect x="15.5" y="19" width="3.5" height="14" fill="#FFA726" />
            <rect x="21" y="19" width="3.5" height="14" fill="#FFE082" />
            
            {/* Thick grey bracket channel framing them */}
            <path d="M 23,14 H 40 L 52,26 L 40,38 H 23 L 26,34 H 38 L 47,26 L 38,18 H 26 Z" fill="#707275" />
          </g>
          {/* Text and Chinese characters */}
          <g transform="translate(75, 0)" fill="#707275">
            <text x="0" y="32" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">DTS</text>
            <text x="65" y="30" fontSize="16" fontWeight="bold" fontFamily="sans-serif">鼎泰盛</text>
            <text x="0" y="48" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif" fill="#A0AEC0" letterSpacing="0.5">INNOVATION • WONDERFUL LIFE</text>
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "BBM",
    url: "https://www.bbmpackaging.com/it/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 240 60" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Symmetrical wave pillars in Slate Gray */}
          <g transform="translate(10, 5)" fill="#8E9399">
            {/* Left wave pillar */}
            <path d="M 10,10 C 7,22 7,32 10,44 C 14,45 18,46 22,46 C 20,34 22,22 26,10 C 21,10 15,10 10,10 Z" />
            {/* Right wave pillar */}
            <path d="M 32,10 C 28,22 26,34 28,46 C 33,46 39,45 44,44 C 47,32 47,22 44,10 C 40,10 36,10 32,10 Z" />
          </g>
          {/* BBM text & tagline in deep navy */}
          <g transform="translate(65, 0)">
            <text x="0" y="32" fill="#001A49" className="dark:fill-slate-100" fontSize="30" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">BBM</text>
            <text x="0" y="46" fill="#001A49" className="dark:fill-slate-400" fontSize="7.5" fontFamily="sans-serif" letterSpacing="0.5">
              <tspan fontWeight="900">YOU</tspan>
              <tspan fontWeight="400">ORIENTED SOLUTIONS</tspan>
            </text>
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "Electrolux Professional",
    url: "https://www.electroluxprofessional.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 240 60" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Rounded rectangle block instead of circle */}
          <rect x="7" y="12" width="36" height="36" rx="4" fill="#001E62" />
          <path d="M 25,18 C 30,18 34,22 34,26 C 34,32 25,36 21,38 C 25,41 31,41 33,38 C 31,43 23,44 19,41 C 15,38 15,32 19,28 C 21,26 23,25 25,25 C 23,25 21,27 20,29 C 19,31 19,34 22,36 C 26,34 30,31 30,27 C 30,24 28,21 25,21 C 21,21 18,25 18,30 C 18,36 22,40 27,40 C 23,40 20,37 20,34" fill="white" />
          <g transform="translate(52, 0)">
            <text x="0" y="30" fill="#001E62" className="dark:fill-sky-400" fontSize="21" fontWeight="bold" fontFamily="serif, Georgia">Electrolux</text>
            <text x="0" y="44" fill="#001E62" className="dark:fill-sky-200" fontSize="7" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">PROFESSIONAL</text>
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "CLEVERTECH",
    url: "https://www.clevertech-group.com/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 200 60" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="30" fill="#005CA9" fontSize="22" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">CLEVERTECH</text>
          <line x1="10" y1="36" x2="185" y2="36" stroke="#F15A24" strokeWidth="1.5" />
          <g transform="translate(10, 40)">
            <rect x="0" y="2" width="10" height="6" fill="#005CA9" />
            <rect x="10" y="2" width="10" height="6" fill="#E21A1A" />
            <text x="25" y="8" fill="#4A5568" className="dark:fill-slate-300" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.2">HANDLING YOUR SUCCESS</text>
          </g>
        </svg>
      </div>
    )
  },
  {
    name: "Regina Chain",
    url: "https://www.reginachain.net/",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 200 70" className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(45, 5)">
            <rect x="0" y="0" width="110" height="36" rx="18" fill="#FFF200" stroke="black" strokeWidth="3" />
            <circle cx="18" cy="18" r="5" fill="black" />
            <circle cx="92" cy="18" r="5" fill="black" />
            <text x="55" y="19" fill="black" fontSize="11" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">REGINA</text>
            <text x="55" y="29" fill="black" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">CHAIN</text>
          </g>
          <text x="100" y="58" fill="currentColor" className="text-slate-800 dark:text-slate-300" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">PERFORMANCE IN MOTION</text>
        </svg>
      </div>
    )
  }
];

export default function App() {
  // Localization
  const [lang, setLang] = useState<'en' | 'de' | 'es'>('en');
  const d = translations[lang];

  // UI state
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  
  // Custom Line Simulator state
  const [assembledLine, setAssembledLine] = useState<string[]>([]);
  const [totalCapacityCoeff, setTotalCapacityCoeff] = useState<number>(0);

  // Active step in Solution diagram
  const [activeFlowStep, setActiveFlowStep] = useState<number>(2);

  // Quote Request form modal state
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteTargetProduct, setQuoteTargetProduct] = useState<string>("");

  // Product Comparison state
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [compareMachineAId, setCompareMachineAId] = useState<string>(productsData[0]?.id || "");
  const [compareMachineBId, setCompareMachineBId] = useState<string>(productsData[1]?.id || productsData[0]?.id || "");

  // Contact / Quote Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "ALFA COMPLETE BBF LINE",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activationNeeded, setActivationNeeded] = useState(false);
  
  // SMTP Simulation Terminal output
  const [smtpOutput, setSmtpOutput] = useState<{
    leadLog: string;
    clientEmail: string;
    visible: boolean;
  }>({
    leadLog: "",
    clientEmail: "",
    visible: false
  });

  // Newsletter subscription simulation state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Calculate simulated line capacity whenever the configuration is modified
  useEffect(() => {
    if (assembledLine.length === 0) {
      setTotalCapacityCoeff(0);
      return;
    }
    // Calculate simulated capacity score based on active machines
    let base = 4200; // default standard metric (kg/hr)
    let modifier = 1.0;
    
    if (assembledLine.includes("cooker-alfa")) modifier += 0.25;
    if (assembledLine.includes("bbf-line")) modifier += 0.40;
    if (assembledLine.includes("afm-600")) modifier -= 0.10; // Precision restriction
    if (assembledLine.includes("spiral-freezer")) modifier += 0.15;
    if (assembledLine.includes("batter-mixer")) modifier += 0.10;
    if (assembledLine.includes("breader-mach")) modifier += 0.05;
    if (assembledLine.includes("evap-cooling")) modifier += 0.10;

    // Output bottleneck factor based on line completeness
    const completenessRatio = Math.min(assembledLine.length / 5, 1.25);
    const finalVal = Math.round(base * modifier * completenessRatio);
    setTotalCapacityCoeff(finalVal);
  }, [assembledLine]);

  // Handle addition/removal for the sandbox line builder
  const toggleMachineInSimulator = (id: string) => {
    if (assembledLine.includes(id)) {
      setAssembledLine(assembledLine.filter(item => item !== id));
    } else {
      setAssembledLine([...assembledLine, id]);
    }
  };

  const clearLineSimulator = () => {
    setAssembledLine([]);
  };

  const handlePrintDocument = (type: 'comparison' | 'quote') => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow pop-ups to print the specifications sheet.");
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleDateString() + " " + now.toLocaleTimeString() + " UTC";
    const logoSvgStr = `
      <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 12px;">
        <path d="M 25 15 C 45 15, 68 24, 86 45 C 74 50, 64 54, 54 58 C 64 50, 68 38, 56 35 C 46 33, 35 25, 25 15 Z" fill="#006ac3" />
        <path d="M 25 15 C 45 15, 68 24, 86 45 C 74 50, 64 54, 54 58 C 64 50, 68 38, 56 35 C 46 33, 35 25, 25 15 Z" fill="#b83e1c" transform="rotate(120 50 50)" />
      </svg>
    `;

    let htmlContent = "";

    if (type === 'comparison') {
      const productA = productsData.find(p => p.id === compareMachineAId) || productsData[0];
      const productB = productsData.find(p => p.id === compareMachineBId) || productsData[1] || productsData[0];

      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>BOOMERANG Corp. Model Comparison Specification Sheet</title>
          <style>
            @media print {
              body { margin: 1.5cm; font-family: 'Inter', Arial, sans-serif; color: #1e293b; background: #fff; }
              .no-print { display: none; }
            }
            body { font-family: 'Inter', Arial, sans-serif; color: #1e293b; background: #f8fafc; margin: 0; padding: 40px; }
            .container { max-width: 900px; margin: 0 auto; background: #fff; padding: 40px; border: 1px solid #e2e8f0; border-top: 6px solid #b83e1c; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { display: flex; align-items: center; justify-content: space-between; border-b: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
            .brand { display: flex; align-items: center; }
            .brand-name { font-size: 24px; font-weight: 900; letter-spacing: -0.5px; color: #021a35; text-transform: uppercase; }
            .brand-sub { font-size: 10px; color: #f26419; letter-spacing: 2px; font-weight: bold; text-transform: uppercase; }
            .doc-type { font-size: 11px; font-family: monospace; background: #00204a; color: #fff; padding: 6px 12px; font-weight: bold; text-transform: uppercase; }
            .title { font-size: 20px; font-weight: 800; text-transform: uppercase; margin-top: 0; margin-bottom: 10px; color: #021a35; border-bottom: 2px solid #b83e1c; padding-bottom: 8px; }
            .meta-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 30px; font-size: 12px; background: #f1f5f9; padding: 15px; border: 1px dashed #cbd5e1; }
            .meta-item strong { display: block; text-transform: uppercase; font-size: 10px; color: #64748b; margin-bottom: 2px; }
            .comparison-col-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
            .comp-card { border: 1px solid #e2e8f0; padding: 15px; background: #f8fafc; }
            .comp-card-title { font-size: 14px; font-weight: 800; color: #b83e1c; text-transform: uppercase; border-b: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 12px; }
            th { background: #00204a; color: #fff; font-weight: 800; text-transform: uppercase; text-align: left; padding: 10px 12px; font-size: 10px; letter-spacing: 1px; }
            th, td { border: 1px solid #cbd5e1; }
            td { padding: 12px; vertical-align: middle; }
            .spec-name { font-weight: bold; text-transform: uppercase; font-size: 10px; color: #475569; width: 25%; background: #f8fafc; }
            .spec-val-a { width: 37.5%; }
            .spec-val-b { width: 37.5%; }
            .features-list { font-size: 11px; list-style-type: square; padding-left: 18px; line-height: 1.6; }
            .footer { border-top: 1px solid #cbd5e1; padding-top: 20px; margin-top: 40px; text-align: center; font-size: 10px; color: #94a3b8; font-family: monospace; display: flex; justify-content: space-between; }
            .print-btn { display: inline-block; background: #b83e1c; color: white; padding: 12px 24px; font-weight: bold; font-size: 12px; text-transform: uppercase; border: none; cursor: pointer; margin-bottom: 20px; outline: none; }
            .print-btn:hover { background: #9d3114; }
          </style>
        </head>
        <body>
          <div style="text-align: center;" class="no-print">
            <button class="print-btn" onclick="window.print()">Print / Save Specifications PDF</button>
          </div>
          <div class="container">
            <div class="header">
              <div class="brand">
                ${logoSvgStr}
                <div>
                  <div class="brand-name">Boomerang Corp</div>
                  <div class="brand-sub">Continuous Coating Systems</div>
                </div>
              </div>
              <div class="doc-type">Spec Matrix Compare</div>
            </div>

            <h1 class="title">System Comparison Specification Report</h1>
            <p style="font-size: 11px; color: #475569; margin-top: -5px; margin-bottom: 25px;">
              Technical side-by-side assessment of Boomerang heavy processing systems. ASME compliance grade food machinery.
            </p>

            <div class="meta-grid">
              <div class="meta-item">
                <strong>Proposal Reference</strong>
                BMR-COMP-${Math.floor(100000 + Math.random() * 900000)}
              </div>
              <div class="meta-item">
                <strong>Generated Date (UTC)</strong>
                ${timestamp}
              </div>
            </div>

            <div class="comparison-col-grid">
              <div class="comp-card">
                <div class="comp-card-title">Primary: ${productA.name}</div>
                <div style="font-size: 12px;"><strong>Category:</strong> ${productA.category}</div>
                <div style="font-size: 12px; margin-top: 3px;"><strong>Short Identifier:</strong> ${productA.shortName}</div>
              </div>
              <div class="comp-card">
                <div class="comp-card-title">Comparison: ${productB.name}</div>
                <div style="font-size: 12px;"><strong>Category:</strong> ${productB.category}</div>
                <div style="font-size: 12px; margin-top: 3px;"><strong>Short Identifier:</strong> ${productB.shortName}</div>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Technical Specification Parameter</th>
                  <th>${productA.shortName} Specification</th>
                  <th>${productB.shortName} Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="spec-name">Processing Capacity</td>
                  <td class="spec-val-a">${productA.specs.capacity || "Continuous Feed-In / Variable Flow"}</td>
                  <td class="spec-val-b">${productB.specs.capacity || "Continuous Feed-In / Variable Flow"}</td>
                </tr>
                <tr>
                  <td class="spec-name">Chamber Material</td>
                  <td class="spec-val-a">${productA.specs.material || "ASME SUS316 Food-Grade Stainless Steel"}</td>
                  <td class="spec-val-b">${productB.specs.material || "ASME SUS316 Food-Grade Stainless Steel"}</td>
                </tr>
                <tr>
                  <td class="spec-name">Belt Width Constraints</td>
                  <td class="spec-val-a">${productA.specs.beltWidth || "Custom Configuration Available"}</td>
                  <td class="spec-val-b">${productB.specs.beltWidth || "Custom Configuration Available"}</td>
                </tr>
                <tr>
                  <td class="spec-name">Operational Power</td>
                  <td class="spec-val-a">${productA.specs.power || "Standard Heavy Phase"}</td>
                  <td class="spec-val-b">${productB.specs.power || "Standard Heavy Phase"}</td>
                </tr>
                <tr>
                  <td class="spec-name">Thermal/Air Velocity</td>
                  <td class="spec-val-a">${productA.specs.temperatureRange || productA.specs.airVelocity || "Autonomous Thermo-Control"}</td>
                  <td class="spec-val-b">${productB.specs.temperatureRange || productB.specs.airVelocity || "Autonomous Thermo-Control"}</td>
                </tr>
                <tr>
                  <td class="spec-name">Physical Footprint</td>
                  <td class="spec-val-a">${productA.specs.dimensions || "Modular dimensions tailored to plant drafts"}</td>
                  <td class="spec-val-b">${productB.specs.dimensions || "Modular dimensions tailored to plant drafts"}</td>
                </tr>
              </tbody>
            </table>

            <div class="comparison-col-grid" style="margin-top: 20px;">
              <div>
                <strong style="font-size: 11px; text-transform: uppercase; color: #b83e1c; display: block; margin-bottom: 8px;">
                  ${productA.shortName} Core Standard Attributes
                </strong>
                <ul class="features-list">
                  ${productA.features.map(f => `<li>${f}</li>`).join("")}
                </ul>
              </div>
              <div>
                <strong style="font-size: 11px; text-transform: uppercase; color: #b83e1c; display: block; margin-bottom: 8px;">
                  ${productB.shortName} Core Standard Attributes
                </strong>
                <ul class="features-list">
                  ${productB.features.map(f => `<li>${f}</li>`).join("")}
                </ul>
              </div>
            </div>

            <div class="footer">
              <span>SECURITY FINGERPRINT: SECURE SPEC MATRIX 256</span>
              <span>BOOMERANG CORP INDUSTRIAL HEAVY MACHINERY</span>
              <span>Page 1 of 1</span>
            </div>
          </div>
          <script>
            window.onload = function() {
              setTimeout(() => { window.print(); }, 400);
            }
          </script>
        </body>
        </html>
      `;
    } else {
      const mappedAssembledLine = assembledLine.map(id => {
        const match = productsData.find(p => p.id === id);
        return match ? match.shortName : id;
      });

      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>BOOMERANG Corp. Plant Proposal Request Ticket</title>
          <style>
            @media print {
              body { margin: 1.5cm; font-family: 'Inter', Arial, sans-serif; color: #1e293b; background: #fff; }
              .no-print { display: none; }
            }
            body { font-family: 'Inter', Arial, sans-serif; color: #1e293b; background: #f8fafc; margin: 0; padding: 40px; }
            .container { max-width: 800px; margin: 0 auto; background: #fff; padding: 40px; border: 1px solid #e2e8f0; border-top: 6px solid #00204a; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { display: flex; align-items: center; justify-content: space-between; border-b: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
            .brand { display: flex; align-items: center; }
            .brand-name { font-size: 24px; font-weight: 950; letter-spacing: -0.5px; color: #021a35; text-transform: uppercase; }
            .brand-sub { font-size: 10px; color: #f26419; letter-spacing: 2px; font-weight: bold; text-transform: uppercase; }
            .doc-type { font-size: 11px; font-family: monospace; background: #b83e1c; color: #fff; padding: 6px 12px; font-weight: bold; text-transform: uppercase; }
            .title { font-size: 20px; font-weight: 800; text-transform: uppercase; margin-top: 0; margin-bottom: 5px; color: #021a35; }
            .subtitle { font-size: 12px; color: #b83e1c; font-weight: bold; text-transform: uppercase; margin-bottom: 25px; letter-spacing: 0.5px; }
            .meta-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 30px; font-size: 12px; background: #f8fafc; padding: 15px; border: 1px solid #e2e8f0; }
            .meta-item strong { display: block; text-transform: uppercase; font-size: 9px; color: #64748b; margin-bottom: 3px; }
            .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #021a35; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin-top: 30px; margin-bottom: 15px; letter-spacing: 0.5px; }
            .spec-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 12px; }
            .spec-table th, .spec-table td { border: 1px solid #e2e8f0; padding: 10px 12px; text-align: left; }
            .spec-table th { background: #f1f5f9; font-weight: bold; text-transform: uppercase; font-size: 10px; color: #475569; width: 30%; }
            .box { background: #fffcf9; border: 1px solid #ffedd5; padding: 15px; font-size: 12px; color: #7c2d12; font-style: italic; border-left: 4px solid #f26419; margin-bottom: 25px; }
            .badge { background: #dcfce7; color: #166534; font-weight: bold; font-family: monospace; padding: 3px 8px; border-radius: 3px; font-size: 10px; text-transform: uppercase; display: inline-block; }
            .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 40px; text-align: center; font-size: 10px; color: #94a3b8; font-family: monospace; display: flex; justify-content: space-between; }
            .print-btn { display: inline-block; background: #00204a; color: white; padding: 12px 24px; font-weight: bold; font-size: 12px; text-transform: uppercase; border: none; cursor: pointer; margin-bottom: 20px; outline: none; }
            .print-btn:hover { background: #01142c; }
          </style>
        </head>
        <body>
          <div style="text-align: center;" class="no-print">
            <button class="print-btn" onclick="window.print()">Print Proposal Ticket / Save PDF</button>
          </div>
          <div class="container">
            <div class="header">
              <div class="brand">
                ${logoSvgStr}
                <div>
                  <div class="brand-name">Boomerang Corp</div>
                  <div class="brand-sub">Continuous Coating Systems</div>
                </div>
              </div>
              <div class="doc-type">SSL Proposal Ticket</div>
            </div>

            <h1 class="title">Technical Inquiry Confirmation Ticket</h1>
            <div class="subtitle">System Request & Plant Layout Submission</div>

            <div class="meta-grid">
              <div class="meta-item">
                <strong>Ticket Reference ID</strong>
                BMR-INQ-${Math.floor(100000 + Math.random() * 900000)}
              </div>
              <div class="meta-item">
                <strong>Ticket Delivery Status</strong>
                <span class="badge">✓ DELIVERED SMTP SAFE</span>
              </div>
              <div class="meta-item">
                <strong>Recorded Submission Date</strong>
                ${timestamp}
              </div>
              <div class="meta-item">
                <strong>Assigned Routing Pool</strong>
                parts / industrial sales divisions
              </div>
            </div>

            <div class="section-title">Client Corporate Profiles</div>
            <table class="spec-table">
              <tr>
                <th>Company Client</th>
                <td>${formData.company || "Not Specified"}</td>
              </tr>
              <tr>
                <th>Primary Representative</th>
                <td>${formData.name || "Inquirer Representative"}</td>
              </tr>
              <tr>
                <th>Secured Callback Line</th>
                <td>${formData.phone || "Not Specified / Checked via SSL Protocol"}</td>
              </tr>
              <tr>
                <th>Registered Routing Email</th>
                <td>${formData.email || "Pending Check"}</td>
              </tr>
            </table>

            <div class="section-title">Plant System Configuration Particulars</div>
            <table class="spec-table">
              <tr>
                <th>Primary Machinery Interest</th>
                <td style="font-weight: bold; color: #b83e1c;">${formData.interest || "High Throughput Pack Line"}</td>
              </tr>
              <tr>
                <th>Active Simulations Constructed</th>
                <td>${mappedAssembledLine.length > 0 ? mappedAssembledLine.join(" ➔ ") : "No modular line assembled in the sandbox simulator."}</td>
              </tr>
            </table>

            <div class="section-title">Hourly Food Product Target Output & Custom Demands</div>
            <div class="box">
              "${formData.message || "Representative did not provide hourly volume particulars. Standard baseline design values will apply."}"
            </div>

            <p style="font-size: 11px; line-height: 1.5; color: #475569;">
              <strong>Notice:</strong> This pricing ticket reservation anchors a customized technical quote. A system engineer from the Canadian project headquarters will review your draft and follow up within 12 business hours.
            </p>

            <div class="footer">
              <span>SMTP SECURE TRANSACTION SSL SHA255</span>
              <span>BOOMERANG INDUSTRIAL MACHINERY</span>
              <span>Page 1 of 1</span>
            </div>
          </div>
          <script>
            window.onload = function() {
              setTimeout(() => { window.print(); }, 400);
            }
          </script>
        </body>
        </html>
      `;
    }

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  // Submit Quote Inquiry
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setActivationNeeded(false);

    const now = new Date();
    const currentUTCStr = now.toLocaleDateString() + " " + now.toLocaleTimeString() + " (STATION_LOCAL_TIME)";
    
    const mappedAssembledLine = assembledLine.map(id => {
      const match = productsData.find(p => p.id === id);
      return match ? match.shortName : id;
    });

    const targetEmail = "bauzondiode@gmail.com";

    try {
      // Connect directly via client-side AJAX to FormSubmit.co
      // This bypasses server-side Cloudflare blocks on non-browser agents
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `[BOOMERANG CORP INQUIRY] from ${formData.name} (${formData.company})`,
          _replyto: formData.email,
          _captcha: "false",
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone || "Not specified",
          interest: formData.interest || "High Throughput Pack Line",
          message: formData.message || "No additional needs outline provided.",
          engineered_assembly_line: mappedAssembledLine.length > 0 ? mappedAssembledLine.join(", ") : "None assembled",
          submitted_at_utc: currentUTCStr
        })
      });

      let responseText = "";
      try {
        responseText = await response.text();
      } catch (textErr) {
        throw new Error("Unable to read server response stream.");
      }

      let data: any = {};
      try {
        data = JSON.parse(responseText);
      } catch (jsonErr) {
        data = { success: response.ok, message: responseText };
      }

      const errorMessage = data.message || responseText || "Failed to submit form to email service.";
      const isActivationError = errorMessage.toLowerCase().includes("activation") || errorMessage.toLowerCase().includes("activate");

      if (isActivationError) {
        setActivationNeeded(true);
        setSubmissionComplete(true);

        let leadLogDump = mockLeadNotification(
          { ...formData, assembledLine: mappedAssembledLine },
          currentUTCStr
        );
        leadLogDump += `\n\n[PORTAL ACTIONS REQUIRED]\nStatus: 200 PROMPT FOR ACTIVATION\nRecipient: ${targetEmail}\nService: FormSubmit.co\nDetails: Sent 'Activate Form' email to ${targetEmail}.\nAction Required: Checks your inbox at ${targetEmail} and click the link inside to start receiving forms instantly.`;

        const clientEmailDump = mockAutoResponseEmail(
          { name: formData.name, company: formData.company, interest: formData.interest || "High Throughput Pack Line", email: formData.email },
          currentUTCStr
        );

        setSmtpOutput({
          leadLog: leadLogDump,
          clientEmail: clientEmailDump,
          visible: false
        });

        return; // Handled gracefully, so early return
      }

      if (!response.ok || (data.success && data.success.toString() === "false")) {
        throw new Error(errorMessage);
      }

      let leadLogDump = mockLeadNotification(
        { ...formData, assembledLine: mappedAssembledLine },
        currentUTCStr
      );

      leadLogDump += `\n\n[LIVE SMTP ROUTING - SUCCESS]\nStatus: 200 OK\nRecipient: ${targetEmail}\nService: FormSubmit.co\nMessage: ${data.message || "Form submitted successfully!"}`;

      const clientEmailDump = mockAutoResponseEmail(
        { name: formData.name, company: formData.company, interest: formData.interest || "High Throughput Pack Line", email: formData.email },
        currentUTCStr
      );

      setSmtpOutput({
        leadLog: leadLogDump,
        clientEmail: clientEmailDump,
        visible: false
      });

      setSubmissionComplete(true);

    } catch (err: any) {
      console.error("Submission failed:", err);
      setSubmitError(err.message || "Connection failure communicating with server mail module.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open Quote Modal pre-filled
  const openQuoteForProduct = (pName: string) => {
    setFormData(prev => ({
      ...prev,
      interest: pName
    }));
    setShowQuoteModal(true);
  };

  // Quick reset form
  const resetFormState = () => {
    setSubmissionComplete(false);
    setSubmitError(null);
    setActivationNeeded(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "ALFA COMPLETE BBF LINE",
      message: ""
    });
    setSmtpOutput(prev => ({ ...prev, visible: false }));
  };

  // Filter products by category and input search query
  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          product.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen font-sans selection:bg-brand-orange selection:text-white antialiased transition-colors duration-300 ${
      isDark 
        ? "dark bg-slate-950 text-slate-100" 
        : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* LANGUAGE OVERLAY TOGGLE BAR (Top fixed info matching Sleek Interface precision) */}
      <div className={`py-2 px-4 sm:px-8 text-xs border-b flex justify-between items-center z-50 transition-colors duration-300 ${
        isDark 
          ? "bg-slate-900 text-slate-400 border-slate-800" 
          : "bg-slate-100 text-slate-600 border-slate-200"
      }`}>
        <div className="flex items-center space-x-3.5 divide-x divide-slate-200 dark:divide-slate-800">
          <span className={`font-semibold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-brand-navy"}`}>
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            BOOMERANG SECURE NODE LIVE
          </span>
          <span className={`pl-3 hidden sm:inline font-mono ${isDark ? "text-slate-500" : "text-slate-500"}`}>Tel: +1 (905) 555-0147</span>
          <span className="pl-3 text-brand-orange font-bold hidden md:inline">✓ ASME & CE Certified</span>
        </div>
        <div className="flex items-center gap-2">
          {/* HIGH-CONTRAST THEME TOGGLE */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className={`w-8 h-8 flex items-center justify-center rounded transition-all duration-200 border cursor-pointer ${
              isDark
                ? "bg-slate-950 border-brand-orange text-brand-orange hover:bg-slate-900 shadow-sm shadow-brand-orange/15"
                : "bg-white border-slate-200 hover:border-slate-300 text-slate-705 hover:bg-slate-50 hover:text-slate-950 shadow-sm"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Engineer's Dark Mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-brand-orange animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 hover:text-slate-900" />
            )}
          </button>

          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button 
              type="button"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1 border rounded font-bold text-[10px] sm:text-xs transition active:scale-95 cursor-pointer shadow-sm ${
                isDark
                  ? "bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300"
                  : "bg-white hover:bg-slate-200 border-slate-200 text-slate-700"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span className="uppercase tracking-wider font-mono">{lang === 'en' ? 'English' : lang === 'de' ? 'Deutsch' : 'Español'}</span>
              <span className="text-[8px] text-slate-400">▼</span>
            </button>

            {isLangMenuOpen && (
              <>
                {/* Overlay background to close */}
                <div 
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setIsLangMenuOpen(false)}
                />
                {/* Dropdown Menu */}
                <div className={`absolute right-0 mt-1.5 w-44 border rounded-md shadow-lg py-1 z-50 ${
                  isDark 
                    ? "bg-slate-900 border-slate-800 text-slate-200" 
                    : "bg-white border-slate-200 text-slate-700"
                }`}>
                  <div className={`px-3 py-1.5 text-[9px] font-mono uppercase border-b flex items-center justify-between ${
                    isDark ? "text-slate-500 border-slate-800" : "text-slate-400 border-slate-100"
                  }`}>
                    <span>Select Region</span>
                    <Globe className="w-2.5 h-2.5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => { setLang('en'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition cursor-pointer ${
                      isDark 
                        ? (lang === 'en' ? 'text-brand-orange font-bold bg-slate-950' : 'text-slate-300 hover:bg-slate-950')
                        : (lang === 'en' ? 'text-brand-orange font-bold bg-slate-50' : 'text-slate-700 hover:bg-slate-50')
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🇺🇸</span>
                      <span>English (US/CA)</span>
                    </span>
                    {lang === 'en' && <span className="text-[10px]">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLang('de'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition cursor-pointer ${
                      isDark 
                        ? (lang === 'de' ? 'text-brand-orange font-bold bg-slate-950' : 'text-slate-300 hover:bg-slate-950')
                        : (lang === 'de' ? 'text-brand-orange font-bold bg-slate-50' : 'text-slate-700 hover:bg-slate-50')
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🇩🇪</span>
                      <span>Deutsch (DE)</span>
                    </span>
                    {lang === 'de' && <span className="text-[10px]">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLang('es'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition cursor-pointer ${
                      isDark 
                        ? (lang === 'es' ? 'text-brand-orange font-bold bg-slate-950' : 'text-slate-300 hover:bg-slate-950')
                        : (lang === 'es' ? 'text-brand-orange font-bold bg-slate-50' : 'text-slate-700 hover:bg-slate-50')
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🇪🇸</span>
                      <span>Español (ES/MX)</span>
                    </span>
                    {lang === 'es' && <span className="text-[10px]">✓</span>}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FIXED NAVBAR - Sleek Interface style */}
      <header className={`sticky top-0 backdrop-blur-md border-b z-40 transition-colors duration-300 ${
        isDark 
          ? "bg-slate-900/95 border-slate-800 text-slate-100 shadow-lg shadow-black/20" 
          : "bg-white/95 border-slate-200 text-slate-900 shadow-sm"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between h-16">
          
          {/* Logo Brand top-left */}
          <a href="#home" className="flex items-center gap-2 select-none group">
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50, 50)">
                  {/* Blue Boomerang - top right */}
                  <path 
                    d="M -25 -35 C -5 -35, 18 -26, 36 -5 C 24 0, 14 4, 4 8 C 14 0, 18 -12, 6 -15 C -4 -17, -15 -25, -25 -35 Z" 
                    fill={isDark ? "#38bdf8" : "#006ac3"} 
                  />
                  {/* Red/Rust Boomerang - bottom */}
                  <path 
                    d="M -25 -35 C -5 -35, 18 -26, 36 -5 C 24 0, 14 4, 4 8 C 14 0, 18 -12, 6 -15 C -4 -17, -15 -25, -25 -35 Z" 
                    fill="#b83e1c" 
                    transform="rotate(120)"
                  />
                  {/* Orange Boomerang - left */}
                  <path 
                    d="M -25 -35 C -5 -35, 18 -26, 36 -5 C 24 0, 14 4, 4 8 C 14 0, 18 -12, 6 -15 C -4 -17, -15 -25, -25 -35 Z" 
                    fill="#f07c22" 
                    transform="rotate(240)"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-black tracking-tight font-display uppercase leading-none transition-colors duration-200 ${
                isDark ? "text-slate-100" : "text-[#006ac3]"
              }`}>
                Boomerang
              </span>
              <span className={`text-[9px] uppercase font-bold tracking-[0.24em] font-sans mt-0.5 leading-none transition-colors duration-200 ${
                isDark ? "text-brand-orange" : "text-[#006ac3]"
              }`}>
                GROUP CORP.
              </span>
            </div>
          </a>

          {/* Desktop Links (Center/Right-aligned layout) */}
          <nav className={`hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider transition-colors`}>
            <a href="#home" className={`transition-colors duration-200 ${isDark ? "text-brand-orange hover:text-white" : "text-brand-navy hover:text-brand-orange"}`}>
              {d.navHome}
            </a>
            <a href="#products" className={`transition-colors duration-200 ${isDark ? "text-slate-300 hover:text-brand-orange" : "text-slate-600 hover:text-brand-navy"}`}>
              {d.navProducts}
            </a>
            <a href="#solutions" className={`transition-colors duration-200 ${isDark ? "text-slate-300 hover:text-brand-orange" : "text-slate-600 hover:text-brand-navy"}`}>
              {d.navSolutions}
            </a>
            <a href="#about" className={`transition-colors duration-200 ${isDark ? "text-slate-300 hover:text-brand-orange" : "text-slate-600 hover:text-brand-navy"}`}>
              {d.navAbout}
            </a>
            <a href="#partners" className={`transition-colors duration-200 ${isDark ? "text-slate-300 hover:text-brand-orange" : "text-slate-600 hover:text-brand-navy"}`}>
              {d.navPartners}
            </a>
            <a href="#contact" className={`transition-colors duration-200 ${isDark ? "text-slate-300 hover:text-brand-orange" : "text-slate-600 hover:text-brand-navy"}`}>
              {d.navContact}
            </a>
          </nav>

          {/* Request Quote button in safety orange Accent */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => {
                setQuoteTargetProduct("ALFA COMPLETE BBF LINE");
                setShowQuoteModal(true);
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider shadow-md transition-all uppercase"
            >
              {d.navQuoteBtn}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1 rounded-md transition-colors focus:outline-none cursor-pointer ${
                isDark ? "text-slate-200 hover:text-brand-orange" : "text-slate-700 hover:text-brand-orange"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`md:hidden overflow-hidden border-t ${
                isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"
              }`}
            >
              <div className="px-5 py-4 space-y-4">
                <a 
                  href="#home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider hover:text-brand-orange ${
                    isDark ? "text-brand-orange" : "text-brand-navy"
                  }`}
                >
                  {d.navHome}
                </a>
                <a 
                  href="#products" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider hover:text-brand-orange ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {d.navProducts}
                </a>
                <a 
                  href="#solutions" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider hover:text-brand-orange ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {d.navSolutions}
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider hover:text-brand-orange ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {d.navAbout}
                </a>
                <a 
                  href="#partners" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider hover:text-brand-orange ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {d.navPartners}
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-bold uppercase tracking-wider hover:text-brand-orange ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {d.navContact}
                </a>
                
                <hr className={isDark ? "border-slate-800" : "border-slate-100"} />
                
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setQuoteTargetProduct("ALFA COMPLETE BBF LINE");
                    setShowQuoteModal(true);
                  }}
                  className="w-full bg-brand-orange text-white font-bold text-center py-2.5 rounded hover:bg-brand-orange-hover transition text-xs uppercase"
                >
                  {d.navQuoteBtn}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION - Sleek Interface look with premium industrial overlays */}
      <section id="home" className="relative bg-brand-navy-dark text-white py-28 sm:py-36 overflow-hidden min-h-[520px] flex items-center">
        {/* absolute background illustration overlay */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/boomerang_hero_bg_1781913818080.jpg" 
            alt="Precision industrial packaging engineering" 
            className="w-full h-full object-cover object-center opacity-30 filter grayscale"
            referrerPolicy="no-referrer"
          />
          {/* industrial overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/95 to-transparent z-10" />
          
          {/* technical aesthetic ambient grids */}
          <div className="absolute inset-0 opacity-10 blueprint-pattern-dark z-0" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              {/* Sleek Interface Safety Strip */}
              <div className="h-1 w-12 bg-brand-orange mb-4"></div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Next-Gen Industrial Systems</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase font-display"
              >
                {d.heroHeader}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed"
              >
                {d.heroSub}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a 
                  href="#products" 
                  className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-3 rounded text-xs uppercase tracking-widest shadow-lg transition-transform hover:scale-[1.02]"
                >
                  {d.heroPrimaryBtn}
                </a>
                <a 
                  href="#contact" 
                  className="border border-white text-white font-bold px-8 py-3 rounded hover:bg-white/10 text-xs uppercase tracking-widest transition-transform hover:scale-[1.02]"
                >
                  {d.heroSecondaryBtn}
                </a>
              </motion.div>
            </div>

            {/* Float installations stats on the bottom right matching Sleek theme */}
            <div className="lg:col-span-4 flex lg:flex-col lg:justify-end lg:items-end gap-10 mt-8 lg:mt-0">
              <div className="text-left lg:text-right">
                <div className="text-4xl sm:text-5xl font-black text-brand-orange font-mono">500+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Installations Worldwide</div>
              </div>
              <div className="text-left lg:text-right">
                <div className="text-4xl sm:text-5xl font-black text-brand-orange font-mono">25+</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Years Experience</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTERABLE PRODUCT SHOWCASE CATALOG */}
      <section id="products" className={`py-20 sm:py-28 transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 blueprint-pattern-dark text-white border-t border-b border-slate-900" 
          : "bg-white blueprint-pattern text-slate-900"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-2">Engineered Systems</span>
              <h2 className={`text-3xl font-black tracking-tight uppercase font-display transition-colors ${
                isDark ? "text-slate-100" : "text-brand-navy"
              }`}>
                Industrial Machinery Lines
              </h2>
              <div className="w-12 h-1 bg-brand-orange mx-auto mt-4"></div>
              <p className={`mt-4 text-base leading-relaxed font-light transition-colors ${
                isDark ? "text-slate-450" : "text-slate-600"
              }`}>
                Explore BOOMERANG's heavy industrial machinery lines. All systems are crafted with continuous-feed technology in our high-tolerance facility using premium food-grade alloys.
              </p>
            </div>
          </ScrollReveal>

          {/* Search bar & Live client-side interactive counters */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative shadow-sm rounded-lg">
              <input 
                type="text"
                placeholder={lang === 'en' ? "Search by model name or specs..." : lang === 'de' ? "Nach Modellnamen oder Merkmalen suchen..." : "Buscar por modelo o características..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full border rounded-lg px-4 py-3 pl-10 text-xs focus:outline-none focus:border-brand-orange transition-colors font-mono ${
                  isDark 
                    ? "bg-slate-900 border-slate-800 text-slate-100 placeholder-slate-500" 
                    : "bg-slate-50 border-slate-200 text-slate-800"
                }`}
                id="search-input"
              />
              <span className="absolute left-3.5 top-3.5 text-slate-400 font-bold z-10 text-xs">
                🔍
              </span>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>
            {searchQuery && (
              <p className={`text-xs mt-2 text-center font-mono ${isDark ? "text-slate-550" : "text-slate-500"}`}>
                Found {filteredProducts.length} machines matching "{searchQuery}"
              </p>
            )}
          </div>

          {/* DYNAMIC SIDE-BY-SIDE COMPARE TOOLBAR */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => {
                setCompareMachineAId(productsData[0]?.id || "");
                setCompareMachineBId(productsData[1]?.id || productsData[0]?.id || "");
                setShowCompareModal(true);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm hover:scale-[1.01] active:scale-[0.99] border ${
                isDark 
                  ? "bg-slate-900 hover:bg-slate-850 text-brand-orange border-slate-800 hover:border-brand-orange/30" 
                  : "bg-white hover:bg-slate-50 text-brand-orange border-slate-200 hover:border-brand-orange/30"
              }`}
            >
              <GitCompare className="w-4 h-4 text-brand-orange" />
              <span>{lang === "en" ? "Compare Models Side-by-Side" : lang === "de" ? "Modelle im Vergleich" : "Comparar modelos de lado a lado"}</span>
            </button>
          </div>

          {/* Filtering buttons list */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {[
              { id: 'all', label: d.filterAll },
              { id: 'cooking', label: d.filterCooking },
              { id: 'forming', label: d.filterForming },
              { id: 'freezing', label: d.filterFreezing },
              { id: 'battering', label: d.filterBattering },
              { id: 'breading', label: d.filterBreading },
              { id: 'evaporators', label: d.filterEvaporators },
              { id: 'beverage', label: d.filterBeverage },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-sm cursor-pointer transition-all ${
                  activeCategory === cat.id 
                    ? (isDark ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20' : 'bg-brand-navy text-white shadow-md') 
                    : (isDark ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200')
                }`}
                id={`filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid map list - 3 column responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => {
                const isSelectedInSim = assembledLine.includes(p.id);
                return (
                  <motion.div
                     key={p.id}
                     layout
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     whileHover={{ y: -6, scale: 1.015, transition: { type: "spring", stiffness: 350, damping: 25 } }}
                     transition={{ duration: 0.3 }}
                     className={`flex flex-col rounded-sm overflow-hidden border duration-300 transition-colors ${
                       isDark 
                         ? "bg-slate-900 border-slate-800 shadow-lg shadow-black/25 hover:shadow-brand-orange/5 hover:border-slate-700" 
                         : "bg-white border-slate-200 shadow-sm hover:shadow-lg"
                     }`}
                     id={`card-${p.id}`}
                  >
                    
                    {/* Card visual container */}
                    <div className="relative h-56 bg-slate-900 overflow-hidden group">
                      {p.isCustomAsset && p.imageUrl ? (
                        <img 
                          src={p.imageUrl} 
                          alt={p.name} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        /* Beautiful technical layout fallback fallback */
                        <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-brand-navy-dark to-brand-navy text-slate-300 font-mono relative">
                          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-2.5 py-0.5 rounded font-bold">
                              SYSTEM SCHEMATIC
                            </span>
                            <span className="text-[9px] text-slate-500">REF: {p.id.toUpperCase()}</span>
                          </div>
                          
                          <div className="my-auto py-2">
                            <div className="border-l-2 border-brand-orange pl-3">
                              <span className="block text-white text-sm font-black font-sans tracking-tight">{p.shortName}</span>
                              <span className="block text-[9px] text-slate-400 mt-1 uppercase tracking-wider">Heavy-duty food mechanics line</span>
                            </div>
                          </div>

                          <div className="flex justify-between text-[9px] text-slate-500 border-t border-slate-800 pt-2">
                            <span>ASME CAT V</span>
                            <span>CAD VERIFIED</span>
                          </div>
                        </div>
                      )}

                      {/* category badge */}
                      <span className="absolute top-3 left-3 bg-brand-navy-dark text-brand-orange text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm border border-slate-800">
                        {p.category}
                      </span>

                      {/* Interactive sandbox toggle indicator */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMachineInSimulator(p.id);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full z-10 transition-colors shadow ${
                          isSelectedInSim 
                            ? 'bg-brand-orange text-white hover:bg-brand-orange-hover' 
                            : 'bg-brand-navy/90 text-slate-300 hover:bg-brand-orange hover:text-white'
                        }`}
                        title="Add to Custom Line blueprint"
                        id={`add-simulator-btn-${p.id}`}
                      >
                        {isSelectedInSim ? <Check className="w-4 h-4 text-white font-extrabold" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className={`text-base font-bold tracking-tight leading-tight mb-2 uppercase font-display transition-colors ${
                          isDark ? "text-slate-100" : "text-brand-navy"
                        }`}>
                          {p.name}
                        </h3>
                        {/* Short Spec summary */}
                        <div className={`rounded p-3 mb-4 text-xs font-mono space-y-1 border ${
                          isDark 
                            ? "bg-slate-950 border-slate-850 text-slate-300" 
                            : "bg-slate-50 border-slate-100 text-slate-600"
                        }`}>
                          <div className="flex justify-between">
                            <span className={`uppercase text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Output:</span>
                            <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>{p.specs.capacity || "Continuous Feed"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`uppercase text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Structure:</span>
                            <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>{p.specs.material}</span>
                          </div>
                        </div>

                        <ul className={`text-xs space-y-2 mb-6 font-light transition-colors ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}>
                          {p.features.slice(0, 2).map((f, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-brand-orange font-bold block mt-0.5 select-none">■</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* View Details Link & Request Quote actionable */}
                      <div className={`flex gap-1.5 border-t pt-4 mt-auto ${
                        isDark ? "border-slate-800/80" : "border-slate-100"
                      }`}>
                        <button
                          onClick={() => setSelectedProduct(p)}
                          className={`flex-1 text-[10px] font-bold text-center py-2.5 rounded-sm transition uppercase tracking-widest cursor-pointer ${
                            isDark 
                              ? "bg-slate-800 hover:bg-slate-705 text-white border border-slate-700 hover:border-slate-650" 
                              : "bg-brand-navy hover:bg-brand-navy-dark text-white"
                          }`}
                          id={`detail-link-${p.id}`}
                        >
                          {d.viewDetails}
                        </button>
                        <button
                          onClick={() => {
                            setCompareMachineAId(p.id);
                            // Pre-fill B with the next element in array (wrap around) so B is different from A
                            const pIndex = productsData.findIndex(prod => prod.id === p.id);
                            const otherProduct = productsData[(pIndex + 1) % productsData.length] || p;
                            setCompareMachineBId(otherProduct.id);
                            setShowCompareModal(true);
                          }}
                          className={`px-3 py-2.5 rounded-sm transition border flex items-center justify-center cursor-pointer ${
                            isDark 
                              ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" 
                              : "bg-slate-100 border-slate-205 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                          }`}
                          title="Compare with another machinery system"
                          id={`compare-btn-${p.id}`}
                        >
                          <GitCompare className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => openQuoteForProduct(p.name)}
                          className="bg-brand-orange/10 hover:bg-brand-orange hover:text-white text-brand-orange text-[10px] font-bold px-3 py-2.5 rounded-sm transition border border-brand-orange/20 uppercase tracking-widest cursor-pointer"
                          title="Generate unique quote ticket"
                        >
                          Quote
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* DYNAMIC BLUEPRINT ACCENT CONTAINER: INTERACTIVE PRODUCTION LINE BUILDER */}
      <section className="py-20 bg-brand-navy-dark border-t border-b border-brand-navy text-white relative overflow-hidden">
        {/* aesthetic abstract blueprint overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 blueprint-pattern-dark"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <ScrollReveal className="lg:col-span-5" y={-40}>
              <div className="space-y-5">
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs block font-mono">
                  {d.lineSimulatorHeader}
                </span>
                <h2 className="text-3xl font-black tracking-tight text-white uppercase font-display">
                  {lang === 'en' ? "SIMULATOR LAB" : lang === 'de' ? "ANLAGEN-KONFIGURATOR" : "LABORATORIO DE SIMULACIÓN"}
                </h2>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {d.lineSimulatorText}
                </p>
                
                <div className="p-5 rounded-sm bg-brand-navy border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-mono uppercase mb-1">
                    {d.lineSimulatorTotalCapacity}
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black font-mono text-brand-orange">
                      {totalCapacityCoeff > 0 ? totalCapacityCoeff.toLocaleString() : "0"}
                    </span>
                    <span className="text-slate-400 font-mono text-xs font-semibold">kg / {lang === 'en' ? "hour" : lang === 'de' ? "Stunde" : "hora"}</span>
                  </div>
                  <div className="mt-3.5 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-1.5 bg-brand-orange transition-all duration-500"
                      style={{ width: `${Math.min((totalCapacityCoeff / 6000) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-slate-500 block mt-2 font-mono">
                    *Based on multi-module sequence integration telemetry
                  </span>
                </div>

                {assembledLine.length > 0 && (
                  <button
                    onClick={clearLineSimulator}
                    className="inline-flex items-center space-x-1.5 text-xs text-red-400 hover:text-red-300 transition-colors uppercase font-mono font-bold"
                  >
                    <Trash className="w-3.5 h-3.5" />
                    <span>{d.lineSimulatorClear}</span>
                  </button>
                )}
              </div>
            </ScrollReveal>

            {/* Simulated Line Pipeline Graphics (7-step continuous grid) */}
            <ScrollReveal className="lg:col-span-7" delay={0.15} y={-40}>
              <div className="bg-brand-navy p-6 rounded-sm border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-brand-orange" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Active Configured Line Draft
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-brand-orange/20 text-brand-orange px-2.5 py-0.5 rounded-sm font-bold">
                    {assembledLine.length} Modules Connected
                  </span>
                </div>

              {/* Visual drag array representation */}
              {assembledLine.length === 0 ? (
                <div className="py-14 text-center text-slate-500 border border-dashed border-slate-800 rounded-sm">
                  <p className="text-sm font-mono mt-1 pr-6 pl-6">{d.lineSimulatorEmpty}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {assembledLine.map((id, index) => {
                    const match = productsData.find(p => p.id === id);
                    if (!match) return null;
                    return (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={id}
                        className="flex items-center justify-between p-3 rounded-sm bg-brand-navy-dark border-l-4 border-brand-orange border-t border-r border-b border-slate-800/80"
                      >
                        <div className="flex items-center space-x-3.5">
                          <span className="w-6 h-6 rounded-none bg-slate-800 text-brand-orange flex items-center justify-center font-mono font-bold text-xs border border-slate-700">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-white uppercase font-display">{match.name}</h4>
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{match.category} Unit</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-[10px] font-mono text-brand-orange bg-brand-orange/10 px-20 py-0.5 rounded-sm border border-brand-orange/20">
                            {match.specs.capacity ? match.specs.capacity.split(' ')[0] + ' kg/yr' : 'Integrated'}
                          </span>
                          <button
                            onClick={() => toggleMachineInSimulator(id)}
                            className="text-slate-400 hover:text-red-400 transition"
                            title="Decommission machine from draft"
                          >
                            <Trash className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Quick interactive shortcut list */}
              <div className="mt-6 border-t border-slate-800 pt-4">
                <span className="text-[10px] text-slate-500 block uppercase font-mono mb-2">
                  Click to quickly toggle components in mock blueprint:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {productsData.map(p => {
                    const isSelected = assembledLine.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        onClick={() => toggleMachineInSimulator(p.id)}
                        className={`text-[9px] font-mono px-2.5 py-1 rounded-sm transition border ${
                          isSelected 
                            ? 'bg-brand-orange border-brand-orange text-white font-bold' 
                            : 'bg-brand-navy-dark border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '} {p.shortName}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </ScrollReveal>

          </div>
        </div>
      </section>

      {/* SOLUTIONS & COMPLETE LINES DIAGRAM SECTION */}
      <section id="solutions" className={`py-20 sm:py-28 text-slate-900 border-b transition-colors duration-300 ${
        isDark 
          ? "bg-slate-900 border-slate-850 text-slate-100" 
          : "bg-slate-50 border-slate-200 text-slate-900"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-2">Synchronized Layouts</span>
              <h2 className={`text-3xl font-black tracking-tight uppercase font-display transition-colors ${
                isDark ? "text-slate-100" : "text-brand-navy"
              }`}>
                {d.solutionHeader}
              </h2>
              <div className="w-12 h-1 bg-brand-orange mx-auto mt-4"></div>
              <p className={`mt-4 font-light text-base leading-relaxed transition-colors ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                {d.solutionSub} we design synchronized lines that execute seamless material transitions without manual interventions.
              </p>
            </div>
          </ScrollReveal>

          {/* FLOW CONTOURS VIEW (Interactive visual diagram) */}
          <ScrollReveal delay={0.1}>
            <div className={`rounded-sm overflow-hidden border transition-all duration-300 shadow ${
              isDark ? "bg-slate-950 border-slate-800 shadow-black/25" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="p-6 bg-brand-navy text-white border-b border-slate-800">
              <span className="text-[9px] uppercase font-mono tracking-widest text-brand-orange font-bold">
                INDUSTRIAL PROCESS MAP
              </span>
              <h3 className="text-lg font-bold text-white uppercase mt-0.5 font-display">
                Continuous BBF (Batter-Bread-Fry-Freeze) Segment Line
              </h3>
              <p className="text-xs text-slate-400 font-light mt-1">
                {d.solutionFlowIntro}
              </p>
            </div>

            {/* Horizontal flow track mapping */}
            <div className="p-6 overflow-x-auto">
              <div className="flex justify-between items-center min-w-[900px] py-4 pr-4 pl-4 relative">
                
                {/* Connector line behind */}
                <div className={`absolute top-[37px] left-8 right-8 h-0.5 z-0 ${
                  isDark ? "bg-slate-800" : "bg-slate-200"
                }`} />
                
                {processFlowSteps.map((step) => {
                  const isActive = activeFlowStep === step.step;
                  return (
                    <button
                      key={step.step}
                      onClick={() => setActiveFlowStep(step.step)}
                      className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
                      id={`solution-step-${step.step}`}
                    >
                      <div className={`w-14 h-14 rounded-none flex items-center justify-center transition-all ${
                        isActive 
                          ? (isDark ? 'bg-slate-900 text-brand-orange scale-110 shadow-md border-2 border-brand-orange font-bold' : 'bg-brand-navy text-brand-orange scale-110 shadow-md border-2 border-brand-orange font-bold') 
                          : (isDark ? 'bg-slate-950 text-slate-400 hover:text-white shadow-sm border border-slate-800 group-hover:border-brand-orange' : 'bg-white text-slate-500 hover:text-brand-navy shadow-sm border border-slate-300 group-hover:border-brand-orange')
                      }`}>
                        {/* Dynamic component mapping according to standard rendering */}
                        <span className="font-extrabold font-mono text-sm">{step.step}</span>
                      </div>
                      
                      <span className={`text-xs font-bold mt-3 group-hover:text-brand-orange transition-colors uppercase tracking-wider text-[10px] ${
                        isDark ? "text-slate-300" : "text-slate-800"
                      }`}>
                        {step.title[lang]}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 mt-1 uppercase">
                        {step.machine.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Process step detail screen drawer style */}
            <div className={`p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t transition-colors duration-300 ${
              isDark ? "bg-slate-950 border-slate-850" : "bg-slate-50 border-slate-200"
            }`}>
              
              {/* Left detail column */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-brand-navy text-brand-orange font-mono text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                    STAGE {processFlowSteps[activeFlowStep - 1].step} OF 7
                  </span>
                  <span className="text-slate-400 text-xs">|</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                    Continuous Manufacturing
                  </span>
                </div>

                <h4 className={`text-xl font-bold tracking-tight uppercase font-display transition-colors ${
                  isDark ? "text-white" : "text-brand-navy"
                }`}>
                  {processFlowSteps[activeFlowStep - 1].title[lang]}
                </h4>

                <p className={`text-sm leading-relaxed font-light transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {processFlowSteps[activeFlowStep - 1].description[lang]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className={`p-3.5 rounded-sm border transition-colors ${
                    isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                  }`}>
                    <span className="text-[9px] text-slate-400 block uppercase font-mono font-bold">SPECIFIED MACHINERY MODEL:</span>
                    <span className={`text-xs font-bold block mt-0.5 ${isDark ? "text-slate-100" : "text-brand-navy"}`}>{processFlowSteps[activeFlowStep - 1].machine}</span>
                  </div>
                  <div className={`p-3.5 rounded-sm border transition-colors ${
                    isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                  }`}>
                    <span className="text-[9px] text-slate-400 block uppercase font-mono font-bold">FLOW TELEMETRY SPEC:</span>
                    <span className={`text-xs font-bold block mt-0.5 ${isDark ? "text-slate-100" : "text-brand-navy"}`}>{processFlowSteps[activeFlowStep - 1].specSummary}</span>
                  </div>
                </div>

                {/* Integration link button */}
                <div className="pt-3">
                  <button 
                    onClick={() => openQuoteForProduct(processFlowSteps[activeFlowStep - 1].machine)}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase hover:text-brand-orange-hover hover:underline transition-all cursor-pointer"
                  >
                    <span>Request technical specifications file for this stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right technical layout column */}
              <div className="lg:col-span-4 bg-brand-navy rounded-sm p-5 text-slate-200 border border-slate-800 font-mono relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[9px] text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-sm uppercase font-bold animate-pulse font-sans">
                  SIM_ACTIVE
                </div>
                <h5 className="text-[10px] text-brand-orange uppercase tracking-widest border-b border-slate-800 pb-2 mb-3 font-semibold">
                  INTEGRATION SCHEMATIC
                </h5>
                <ul className="text-[10px] space-y-2 text-slate-300">
                  <li className="flex justify-between">
                    <span>Synchronous Speed:</span>
                    <span className="text-brand-orange font-bold">Var 0-40 m/min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Power Load Ratio:</span>
                    <span className="text-brand-orange font-bold">0.96 (High cos Phi)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hygienic Class:</span>
                    <span className="text-brand-orange font-bold">Class IP69K Resistant</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Belt Overlap Buffer:</span>
                    <span className="text-brand-orange font-bold">2% Anti-Skid Limit</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ABOUT COMPANY & WHY BOOMERANG */}
      <section id="about" className="py-20 sm:py-28 bg-brand-navy-dark text-white relative">
        <div className="absolute inset-0 opacity-5 blueprint-pattern-dark"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal className="lg:col-span-6" y={-40}>
              <div className="space-y-6">
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs block font-mono">
                  Manufacturing Powerhouse
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
                  {d.whyHeader}
                </h2>
                <div className="w-12 h-1 bg-brand-orange"></div>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  {d.whySub} Boomerrang Corp stands for modular precision on all levels of production. For more than 2.5 decades, our factory lines have run continuously around the clock in complex enterprise sites globally.
                </p>

                {/* Company Stats Counters (500+ Worldwide & 25+ Experience) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-brand-navy p-5 rounded-sm border border-slate-800">
                    <span className="block text-4xl font-mono font-black text-brand-orange">500+</span>
                    <span className="block text-xs font-bold text-white uppercase mt-1 tracking-wider">{d.stat1Title}</span>
                    <span className="block text-[11px] text-slate-400 mt-1">{d.stat1Sub}</span>
                  </div>

                  <div className="bg-brand-navy p-5 rounded-sm border border-slate-800">
                    <span className="block text-4xl font-mono font-black text-brand-orange">25+</span>
                    <span className="block text-xs font-bold text-white uppercase mt-1 tracking-wider">{d.stat2Title}</span>
                    <span className="block text-[11px] text-slate-400 mt-1">{d.stat2Sub}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Values grid list */}
            <ScrollReveal className="lg:col-span-6" delay={0.15} y={-40}>
              <div className="space-y-4">
                <div className="bg-brand-navy p-6 rounded-sm border border-slate-800">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="p-1.5 bg-brand-orange/10 text-brand-orange rounded-none">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-base font-bold text-white uppercase font-display">{d.whyVal1Title}</h3>
                  </div>
                  <p className="text-sm text-slate-350 font-light pl-9">
                    {d.whyVal1Text}
                  </p>
                </div>

                <div className="bg-brand-navy p-6 rounded-sm border border-slate-800">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="p-1.5 bg-brand-orange/10 text-brand-orange rounded-none">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-base font-bold text-white uppercase font-display">{d.whyVal2Title}</h3>
                  </div>
                  <p className="text-sm text-slate-350 font-light pl-9">
                    {d.whyVal2Text}
                  </p>
                </div>

                <div className="bg-brand-navy p-6 rounded-sm border border-slate-800">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="p-1.5 bg-brand-orange/10 text-brand-orange rounded-none">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-base font-bold text-white uppercase font-display">{d.whyVal3Title}</h3>
                  </div>
                  <p className="text-sm text-slate-350 font-light pl-9">
                    {d.whyVal3Text}
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* TEAM SECTION (Optional placeholders according to prompt request) */}
          <ScrollReveal>
            <div className="mt-20 pt-16 border-t border-slate-800">
              <div className="text-center mb-10">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-mono">GLOBAL EXPERTS</h3>
                <h4 className="text-xl font-bold uppercase mt-1 font-display">BOOMERANG Leadership & Project Desk</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "John McGregor", role: "VP of Inbound Engineering", location: "Canada HQ" },
                  { name: "Svea Lindstrom", role: "Lead Thermal Systems Designer", location: "Hamburg Off" },
                  { name: "Koji Yoshikawa", role: "Continuous Line Integration Officer", location: "Tokyo Hub" },
                  { name: "Elena Rostova", role: "Global Parts Logistics Manager", location: "Rotterdam Depot" }
                ].map((member, idx) => (
                  <div key={idx} className="bg-brand-navy p-5 rounded-sm border border-slate-800 text-center hover:border-slate-750 transition-colors">
                    <div className="w-14 h-14 bg-brand-navy-dark rounded-none mx-auto flex items-center justify-center text-brand-orange border border-slate-800 mb-3 text-lg font-black uppercase">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h5 className="font-bold text-sm text-white uppercase font-display">{member.name}</h5>
                    <span className="block text-[11px] text-slate-400 mt-1">{member.role}</span>
                    <span className="inline-block text-[9px] bg-brand-navy-dark border border-slate-800 text-brand-orange px-2.5 py-0.5 rounded-none mt-3.5 uppercase font-mono font-bold tracking-wider">
                      {member.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* GLOBAL PARTNERS SECTION */}
      <section id="partners" className={`py-20 sm:py-28 transition-colors duration-300 ${
        isDark 
          ? "bg-gradient-to-br from-slate-950 via-brand-navy-dark to-slate-900 text-white border-t border-b border-slate-900" 
          : "bg-gradient-to-br from-[#b3d4f8] via-[#e6f1fc] to-[#a3cdf4] text-slate-900 border-t border-b border-sky-200"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className={`font-bold uppercase tracking-widest text-xs block mb-2 ${
                isDark ? "text-brand-orange" : "text-[#005CA9]"
              }`}>
                {lang === 'en' ? "TRUSTED ECOSYSTEM" : lang === 'de' ? "VERTRAUTES ECOSYSTEM" : "ECOSISTEMA DE CONFIANZA"}
              </span>
              <h2 className={`text-3xl font-black tracking-tight uppercase font-display transition-colors ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}>
                {lang === 'en' ? "Our Official Partners" : lang === 'de' ? "Unsere offiziellen Partner" : "Nuestros Socios Oficiales"}
              </h2>
              <div className={`w-12 h-1 mx-auto mt-4 ${
                isDark ? "bg-brand-orange" : "bg-[#005CA9]"
              }`}></div>
              <p className={`mt-4 font-light text-sm sm:text-base leading-relaxed transition-colors ${
                isDark ? "text-slate-400" : "text-slate-700"
              }`}>
                {lang === 'en' 
                  ? "We collaborate with global leaders in industrial packaging and process machinery. Click on any logo to visit their official website." 
                  : lang === 'de' 
                    ? "Wir arbeiten mit weltweit führenden Unternehmen für Industrie- und Verpackungsmaschinen zusammen. Klicken Sie auf ein Logo, um die offizielle Website zu besuchen." 
                    : "Colaboramos con líderes mundiales en maquinaria de proceso y envasado industrial. Haga clic en cualquier logotipo para visitar su sitio web oficial."}
              </p>
            </div>
          </ScrollReveal>

          {/* Partners Logos Grid */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {partnersData.slice(0, 12).map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className={`p-8 h-40 flex flex-col items-center justify-center rounded-none border transition-all duration-300 transform hover:-translate-y-1 text-center ${
                    isDark 
                      ? "bg-slate-905/80 hover:bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md shadow-black/30" 
                      : "bg-white/70 hover:bg-white border-white/50 hover:border-sky-300 shadow-sm shadow-sky-900/5"
                  }`}>
                    {partner.logo}
                  </div>
                </a>
              ))}
              {/* Centered Regina Chain Logo */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
                <a
                  href={partnersData[12].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full sm:w-1/2 lg:w-1/4"
                >
                  <div className={`p-8 h-40 flex flex-col items-center justify-center rounded-none border transition-all duration-300 transform hover:-translate-y-1 text-center ${
                    isDark 
                      ? "bg-slate-905/80 hover:bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md shadow-black/30" 
                      : "bg-white/70 hover:bg-white border-white/50 hover:border-sky-300 shadow-sm shadow-sky-900/5"
                  }`}>
                    {partnersData[12].logo}
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CONTACT & QUOTE FORM SECTION */}
      <section id="contact" className={`py-20 sm:py-28 border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-white blueprint-pattern-dark border-slate-900" 
          : "bg-slate-50 text-slate-900 blueprint-pattern border-slate-200"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <ScrollReveal className="lg:col-span-5" y={-40}>
              <div className="space-y-8">
                <div>
                  <span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-2">Project Inquiries</span>
                <h2 className={`text-3xl font-black uppercase tracking-tight font-display transition-colors ${
                  isDark ? "text-slate-100" : "text-brand-navy"
                }`}>
                  {d.contactHeader}
                </h2>
                <div className="w-12 h-1 bg-brand-orange mt-4"></div>
                <p className={`mt-4 font-light text-sm leading-relaxed transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {d.contactSub}
                </p>
              </div>

              {/* Address placeholders according to prompt instructions */}
              <div className="space-y-5">
                
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-navy text-brand-orange h-11 w-11 rounded-none flex items-center justify-center border border-slate-800 shadow-sm animate-pulse-slow">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {d.contactOffice}
                    </span>
                    <address className={`text-sm font-semibold not-italic mt-1 leading-relaxed transition-colors ${
                      isDark ? "text-slate-100" : "text-brand-navy"
                    }`}>
                      {d.contactOfficeVal}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-brand-navy text-brand-orange h-11 w-11 rounded-none flex items-center justify-center border border-slate-800 shadow-sm">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {d.contactPhones}
                    </span>
                    <div className={`text-xs space-y-1 font-bold font-mono transition-colors ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}>
                      <p><span className="text-slate-450 font-normal">Main Line :</span> +1 (905) 555-0147</p>
                      <p><span className="text-slate-450 font-normal">Sales In  :</span> +1 (905) 555-0148</p>
                      <p><span className="text-slate-450 font-normal">Tech Desk :</span> +1 (905) 555-0149</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-brand-navy text-brand-orange h-11 w-11 rounded-none flex items-center justify-center border border-slate-800 shadow-sm">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {d.contactEmails}
                    </span>
                    <div className={`text-xs space-y-1 font-bold font-mono transition-colors ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}>
                      <p><span className="text-slate-450 font-normal">General :</span> info@boomerangcorp.com</p>
                      <p><span className="text-slate-450 font-normal">Sales   :</span> sales@boomerangcorp.com</p>
                      <p><span className="text-slate-450 font-normal">Support :</span> support@boomerangcorp.com</p>
                      <p><span className="text-slate-450 font-normal">Parts   :</span> parts@boomerangcorp.com</p>
                    </div>
                  </div>
                </div>

              </div>
              </div>
            </ScrollReveal>

            {/* Right Form Column */}
            <ScrollReveal className="lg:col-span-7" delay={0.15} y={-40}>
              <div className={`p-8 rounded-none border shadow-sm transition-all duration-300 ${
                isDark ? "bg-slate-900 border-slate-800 shadow-xl shadow-black/25" : "bg-white border-slate-200"
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-lg font-bold uppercase tracking-tight font-display transition-colors ${
                    isDark ? "text-slate-100" : "text-brand-navy"
                  }`}>
                    Inquiry Worksheet
                  </h3>
                  <span className={`text-[9px] font-mono uppercase px-2.5 py-1 rounded-sm border font-semibold transition-colors ${
                    isDark ? "bg-slate-950 border-slate-850 text-slate-450" : "bg-slate-100 border-slate-200 text-slate-500"
                  }`}>
                    SSL SECURED SECURE
                  </span>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formName} *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full rounded-sm px-3.5 py-2 text-xs focus:outline-none focus:border-brand-orange font-semibold transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formCompany} *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className={`w-full rounded-sm px-3.5 py-2 text-xs focus:outline-none focus:border-brand-orange font-semibold transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="International Food Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formEmail} *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full rounded-sm px-3.5 py-2 text-xs focus:outline-none focus:border-brand-orange font-semibold transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="j.doe@foodcorp.com"
                      />
                    </div>
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formPhone}</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full rounded-sm px-3.5 py-2 text-xs focus:outline-none focus:border-brand-orange font-semibold transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}>{d.formInterest}</label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className={`w-full rounded-sm px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-orange font-bold uppercase tracking-wider transition-all ${
                        isDark 
                          ? "bg-slate-950 border-slate-850 text-slate-100 focus:bg-slate-900" 
                          : "bg-slate-50 border-slate-200 text-brand-navy"
                      }`}
                    >
                      <option value="ALFA COMPLETE BBF LINE">ALFA COMPLETE BBF LINE (Full Batter-Bread-Fry Line)</option>
                      <option value="ALFA Cooking Equipment Tunnel">ALFA Cooking Equipment / Fryer</option>
                      <option value="ALFA AFM-600 Automatic Multi Forming Machine">ALFA AFM-600 Forming System</option>
                      <option value="SSF256516 Single Spiral Freezer">SSF256516 Single Spiral Freezer</option>
                      <option value="Batter Mixing System">Batter Mixer & Application Systems</option>
                      <option value="Breading Machine">Breading Machine & Sprayers</option>
                      <option value="Evaporators and Cooling Systems">Evaporators & Cooling System</option>
                      <option value="Custom Project Line">Custom Specialized Greenfield Layout</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}>{d.formMessage}</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full rounded-sm px-3.5 py-2 text-xs focus:outline-none focus:border-brand-orange font-semibold transition-all ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600 focus:bg-slate-900" 
                          : "bg-slate-50 border-slate-200 text-brand-navy"
                      }`} 
                      placeholder="Please outline your hourly target output (e.g. 2,000 kg/hr nuggets) or factory dimensions..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || submissionComplete}
                    className={`w-full font-bold text-xs py-3.5 px-6 rounded-sm uppercase tracking-widest cursor-pointer transition-all duration-300 shadow-md active:scale-98 disabled:opacity-90 flex items-center justify-center space-x-2 overflow-hidden h-12 relative ${
                      submissionComplete 
                        ? "bg-emerald-600 border border-emerald-500 hover:bg-emerald-700 text-white" 
                        : isSubmitting
                        ? "bg-slate-800 border border-slate-700 text-slate-300"
                        : "bg-brand-navy hover:bg-brand-navy-dark text-white border border-transparent"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                           key="submitting"
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -15 }}
                           transition={{ duration: 0.2, ease: "easeOut" }}
                           className="flex items-center justify-center space-x-2"
                        >
                          <Loader2 className="w-4 h-4 animate-spin text-brand-orange" />
                          <span className="font-mono text-[10px] tracking-wider">ROUTING INQUIRY VIA SECURE SMTP...</span>
                        </motion.div>
                      ) : submissionComplete ? (
                        <motion.div
                           key="complete"
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -15 }}
                           transition={{ duration: 0.2, ease: "easeOut" }}
                           className="flex items-center justify-center space-x-2"
                        >
                          <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                          <span className="font-mono text-[10px] tracking-wider">WORKSHEET DISPATCHED</span>
                        </motion.div>
                      ) : (
                        <motion.div
                           key="default"
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -15 }}
                           transition={{ duration: 0.2, ease: "easeOut" }}
                           className="flex items-center justify-center space-x-2"
                        >
                          <span>{d.formSubmit}</span>
                          <Send className="w-4 h-4 ml-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </form>

                {submissionComplete && activationNeeded && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4.5 border rounded-sm text-xs transition-colors ${
                      isDark ? "bg-amber-950/20 text-amber-300 border-amber-500/30" : "bg-amber-500/10 text-amber-900 border-amber-500/20"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1.5 border-b border-amber-500/25 pb-1.5 font-bold">
                      <Mail className="w-4.5 h-4.5 text-amber-600 animate-pulse" />
                      <span className={`font-extrabold uppercase tracking-widest text-[10px] ${isDark ? "text-amber-300" : "text-amber-950"}`}>
                        SMTP Pending One-Time Activation
                      </span>
                    </div>
                    <p className={`text-[11px] pr-4 leading-relaxed font-sans font-light transition-colors ${
                      isDark ? "text-slate-300" : "text-slate-705"
                    }`}>
                      We've routed your inquiry successfully! However, since this is the first submission targetting <strong className="text-amber-950 font-bold">bauzondiode@gmail.com</strong>, FormSubmit has sent an <strong>"Activate Form"</strong> link to your email.
                    </p>
                    <div className={`border-l-2 border-amber-500 p-2 mt-2 font-mono text-[10px] leading-normal transition-colors ${
                      isDark ? "bg-amber-955/10 text-slate-400" : "bg-amber-505/5 text-slate-600"
                    }`}>
                      <strong>Action Required:</strong> Check your inbox at <strong className="text-amber-950 font-semibold">bauzondiode@gmail.com</strong> (and check your Spam folder, just in case). Click the activation link to instantly connect your email to begin receiving instant live inquiries.
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button 
                        onClick={resetFormState}
                        className={`font-bold px-3 py-1.5 rounded-none text-[9px] uppercase tracking-wider transition cursor-pointer ${
                          isDark ? "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300" : "bg-amber-600/15 hover:bg-amber-600/30 text-amber-950"
                        }`}
                      >
                        Fill Another Worksheet
                      </button>
                      <button 
                        onClick={() => handlePrintDocument('quote')}
                        className={`font-bold px-3 py-1.5 rounded-none text-[9px] uppercase tracking-wider transition cursor-pointer flex items-center gap-1 border ${
                          isDark 
                            ? "border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300" 
                            : "border-amber-600/30 bg-amber-600/10 hover:bg-amber-600/20 text-amber-950"
                        }`}
                      >
                        <Printer className="w-3 h-3" />
                        Print Confirmation PDF
                      </button>
                    </div>
                  </motion.div>
                )}
 
                {submissionComplete && !activationNeeded && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4.5 border rounded-sm text-xs transition-colors ${
                      isDark ? "bg-emerald-950/20 text-emerald-300 border-emerald-500/30" : "bg-emerald-505/10 text-emerald-800 border-emerald-550/20"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1.5 border-b border-emerald-500/10 pb-1.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                      <span className={`font-extrabold uppercase tracking-widest text-[10px] ${isDark ? "text-emerald-300" : "text-emerald-950"}`}>
                        {d.autoReplyAlert}
                      </span>
                    </div>
                    <p className={`text-[11px] font-light pr-4 leading-relaxed font-sans transition-colors ${
                      isDark ? "text-slate-300" : "text-slate-705"
                    }`}>
                      SMTP delivery completed safely. The transaction record and automatic auto-replies are drafted in the live monitoring console below.
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      <button 
                        onClick={resetFormState}
                        className={`font-bold px-3 py-1.5 rounded-none text-[9px] uppercase tracking-wider transition cursor-pointer ${
                          isDark ? "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300" : "bg-emerald-600/15 hover:bg-emerald-600/30 text-emerald-950"
                        }`}
                      >
                        Fill Another Worksheet
                      </button>
                      <button 
                        onClick={() => handlePrintDocument('quote')}
                        className={`font-bold px-3 py-1.5 rounded-none text-[9px] uppercase tracking-wider transition cursor-pointer flex items-center gap-1 border ${
                          isDark 
                            ? "border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300" 
                            : "border-emerald-600/30 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-905"
                        }`}
                      >
                        <Printer className="w-3 h-3" />
                        Print Confirmation PDF
                      </button>
                    </div>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4.5 bg-rose-500/10 text-rose-800 border border-rose-500/20 rounded-sm text-xs"
                  >
                    <div className="flex items-center space-x-2 mb-1.5 border-b border-rose-500/10 pb-1.5">
                      <XCircle className="w-4.5 h-4.5 text-rose-600" />
                      <span className="font-extrabold uppercase tracking-widest text-rose-950 text-[10px]">
                        SMTP Transit Failed
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 font-light pr-4 leading-relaxed font-sans">
                      {submitError}
                    </p>
                  </motion.div>
                )}

              </div>
            </ScrollReveal>

          </div>

          {/* DYNAMIC SMTP LIVE EMAIL TRACE TERMINAL VIEW */}
          {false && smtpOutput.visible && (
            <div id="smtp-terminal-view" className="mt-14 scroll-mt-24">
              <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
                
                {/* Terminal Header */}
                <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="flex space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <span className="text-slate-400">|</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-orange-400" />
                      Boomerang Corp SMTP Routing Console Map
                    </span>
                  </div>
                  
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                    MTA CONNECTION: ESTABLISHED (SSL_TLS_v1.3)
                  </span>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
                  
                  {/* Left Column: Lead notification to sales@boomerangcorp.com */}
                  <div className="space-y-3 pb-6 lg:pb-0 lg:pr-6">
                    <span className="text-[10px] text-orange-400 font-mono uppercase tracking-wider block">
                      [1] Outbound Lead Frame JSON to sales@boomerangcorp.com
                    </span>
                    <pre className="bg-slate-900 border border-slate-850 p-4 rounded text-[11px] font-mono text-cyan-300 overflow-x-auto whitespace-pre-wrap max-h-96">
                      {smtpOutput.leadLog}
                    </pre>
                  </div>

                  {/* Right Column: SMTP Customer Auto-Reply with 120px Signature branding */}
                  <div className="pt-6 lg:pt-0 lg:pl-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider block">
                        [2] Client Auto-Responder Inbox (info@boomerangcorp.com)
                      </span>
                      <span className="text-[9px] text-slate-500 font-mono uppercase">Header Logo Width: 120px</span>
                    </div>
                    <pre className="bg-slate-900 border border-slate-850 p-4 rounded text-[11px] font-mono text-emerald-350 overflow-x-auto whitespace-pre-wrap max-h-96">
                      {smtpOutput.clientEmail}
                    </pre>
                  </div>

                </div>

                {/* Signature Brand Disclaimer */}
                <div className="bg-slate-900 px-5 py-2.5 text-[10px] font-mono text-slate-500 flex justify-between items-center border-t border-slate-800">
                  <span>SSL Fingerprint: SHA256_F982A3841BEECC</span>
                  <span>SMTP SMTP RELAY PORT: 25 // 587 (SECURE)</span>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* QUICK FLOATING DETAILED VIEW MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              className="bg-white rounded-none border border-slate-300 w-full max-w-3xl overflow-hidden shadow-2xl relative block"
            >
              <div className="bg-brand-navy text-slate-200 p-6 flex justify-between items-center border-b border-slate-800">
                <div>
                  <span className="text-[10px] text-brand-orange uppercase font-mono tracking-widest font-bold">{selectedProduct.category} Machinery Model</span>
                  <h3 className="text-xl font-black text-white uppercase mt-1 font-display tracking-tight">{selectedProduct.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 rounded-none bg-brand-navy-dark hover:bg-slate-800 hover:text-white transition cursor-pointer border border-slate-800"
                >
                  <X className="w-5 h-5 text-brand-orange" />
                </button>
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[75vh] overflow-y-auto">
                <div className="space-y-4">
                  {selectedProduct.imageUrl ? (
                    <img 
                      src={selectedProduct.imageUrl} 
                      alt={selectedProduct.name} 
                      className="w-full h-48 object-cover rounded-none border border-slate-250"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-48 rounded-none bg-brand-navy flex flex-col justify-between p-4 font-mono text-[9px] text-slate-400 border border-slate-800 relative">
                      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px]"></div>
                      <span className="text-brand-orange font-bold uppercase tracking-widest">BOOMERANG CAD SCHEMATIC</span>
                      <div className="text-center font-sans font-extrabold text-sm text-slate-100 uppercase tracking-wider">
                        {selectedProduct.shortName}
                      </div>
                      <span className="text-right">PLATE MODEL REV 4</span>
                    </div>
                  )}

                  <div className="p-4 rounded-none bg-slate-50 border border-slate-205 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
                      Engineering Guarantee
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Equipped with heavy-duty thermal insulation, noise reduction containment shrouds, and dynamic conveyor synchronization. Built entirely out of food-safety certified components.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Machinery Specs</span>
                    <hr className="border-slate-200 mt-1 mb-3" />
                    
                    <dl className="space-y-2.5 text-xs font-mono">
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <dt className="text-slate-450 uppercase text-[9px] font-bold">{d.specCapacity}:</dt>
                        <dd className="font-semibold text-slate-800 text-right">{selectedProduct.specs.capacity || "Continuous Synchronous"}</dd>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <dt className="text-slate-450 uppercase text-[9px] font-bold">{d.specMaterial}:</dt>
                        <dd className="font-semibold text-slate-800 text-right">{selectedProduct.specs.material}</dd>
                      </div>
                      {selectedProduct.specs.beltWidth && (
                        <div className="flex justify-between border-b border-slate-100 pb-1.5">
                          <dt className="text-slate-450 uppercase text-[9px] font-bold">{d.specBeltWidth}:</dt>
                          <dd className="font-semibold text-slate-800 text-right">{selectedProduct.specs.beltWidth}</dd>
                        </div>
                      )}
                      {selectedProduct.specs.power && (
                        <div className="flex justify-between border-b border-slate-100 pb-1.5">
                          <dt className="text-slate-450 uppercase text-[9px] font-bold">{d.specPower}:</dt>
                          <dd className="font-semibold text-slate-800 text-right">{selectedProduct.specs.power}</dd>
                        </div>
                      )}
                      {selectedProduct.specs.temperatureRange && (
                        <div className="flex justify-between border-b border-slate-100 pb-1.5">
                          <dt className="text-slate-450 uppercase text-[9px] font-bold">{d.specTemp}:</dt>
                          <dd className="font-semibold text-slate-800 text-right">{selectedProduct.specs.temperatureRange}</dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Core Features</span>
                    <hr className="border-slate-200 mt-1 mb-3" />
                    <ul className="text-xs text-slate-650 space-y-2">
                      {selectedProduct.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-orange mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        openQuoteForProduct(selectedProduct.name);
                        setSelectedProduct(null);
                      }}
                      className="w-full bg-brand-orange hover:bg-brand-orange/90 text-brand-navy font-bold py-3 rounded-none uppercase text-xs tracking-widest transition"
                    >
                      request layout pricing for {selectedProduct.shortName}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SIDE-BY-SIDE PRODUCT COMPARISON MODAL */}
      <AnimatePresence>
        {showCompareModal && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`w-full max-w-4xl rounded-none border shadow-2xl my-8 overflow-hidden transition-all duration-300 ${
                isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              {/* Header */}
              <div className="bg-brand-navy text-white p-5 flex justify-between items-center border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <GitCompare className="w-5 h-5 text-brand-orange animate-pulse" />
                  <span className="font-extrabold uppercase text-xs tracking-wider">Side-by-Side System Comparison</span>
                </div>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="p-1.5 rounded-none bg-brand-navy-dark border border-slate-800 hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5 text-brand-orange" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6">
                
                {/* Product Selection Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-dashed border-slate-700/30">
                  {/* Left Column Selector */}
                  <div className="space-y-2">
                    <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Select Primary Machine
                    </label>
                    <select
                      value={compareMachineAId}
                      onChange={(e) => setCompareMachineAId(e.target.value)}
                      className={`w-full rounded-none px-3.5 py-2.5 text-xs font-bold uppercase tracking-wide focus:border-brand-orange focus:outline-none transition-all ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-slate-100 focus:bg-slate-900" 
                          : "bg-slate-50 border-slate-200 text-brand-navy"
                      }`}
                    >
                      {productsData.map(p => (
                        <option key={p.id} value={p.id} className={isDark ? "bg-slate-950 text-slate-100" : ""}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Right Column Selector */}
                  <div className="space-y-2">
                    <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Select Comparison Machine
                    </label>
                    <select
                      value={compareMachineBId}
                      onChange={(e) => setCompareMachineBId(e.target.value)}
                      className={`w-full rounded-none px-3.5 py-2.5 text-xs font-bold uppercase tracking-wide focus:border-brand-orange focus:outline-none transition-all ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-slate-100 focus:bg-slate-900" 
                          : "bg-slate-50 border-slate-200 text-brand-navy"
                      }`}
                    >
                      {productsData.map(p => (
                        <option key={p.id} value={p.id} className={isDark ? "bg-slate-950 text-slate-100" : ""}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Comparison Grid */}
                {(() => {
                  const productA = productsData.find(p => p.id === compareMachineAId) || productsData[0];
                  const productB = productsData.find(p => p.id === compareMachineBId) || productsData[1] || productsData[0];

                  return (
                    <div className="space-y-6 animate-fade-in">
                      
                      {/* Product Overview row: Image and title cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Machine A summary card */}
                        <div className={`p-4 border rounded-none transition ${isDark ? 'bg-slate-950/40 border-slate-850' : 'bg-slate-50 border-slate-205'}`}>
                          <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 mb-3 border border-slate-800 relative shadow-inner">
                            <img 
                              src={productA.imageUrl} 
                              alt={productA.name} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-2 left-2 bg-brand-navy text-brand-orange text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest border border-slate-855">
                              Primary Unit
                            </span>
                          </div>
                          <h4 className={`text-sm font-black uppercase font-display line-clamp-1 ${isDark ? 'text-brand-orange' : 'text-brand-navy'}`}>{productA.shortName}</h4>
                          <span className={`text-[10px] uppercase font-mono tracking-wider ${isDark ? 'text-slate-450' : 'text-slate-500'}`}>Category: {productA.category}</span>
                        </div>

                        {/* Machine B summary card */}
                        <div className={`p-4 border rounded-none transition ${isDark ? 'bg-slate-950/40 border-slate-850' : 'bg-slate-50 border-slate-205'}`}>
                          <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 mb-3 border border-slate-800 relative shadow-inner">
                            <img 
                              src={productB.imageUrl} 
                              alt={productB.name} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-2 left-2 bg-brand-navy text-brand-orange text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest border border-slate-855">
                              Comparison Unit
                            </span>
                          </div>
                          <h4 className={`text-sm font-black uppercase font-display line-clamp-1 ${isDark ? 'text-brand-orange' : 'text-brand-navy'}`}>{productB.shortName}</h4>
                          <span className={`text-[10px] uppercase font-mono tracking-wider ${isDark ? 'text-slate-450' : 'text-slate-500'}`}>Category: {productB.category}</span>
                        </div>
                      </div>

                      {/* Technical specifications table */}
                      <div className={`border rounded-none overflow-hidden ${isDark ? 'border-slate-805 bg-slate-950/20' : 'border-slate-200 bg-white'}`}>
                        <div className={`p-3 text-xs font-bold uppercase tracking-widest border-b ${isDark ? 'bg-slate-950 text-slate-300 border-slate-850' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                          Specification Matrix
                        </div>
                        
                        <div className={`divide-y ${isDark ? 'divide-slate-850/80' : 'divide-slate-100'}`}>
                          {/* Row A: Capacity */}
                          <div className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors py-3 px-4 hover:bg-brand-orange/5">
                            <div className="md:col-span-3 font-bold uppercase tracking-wider text-[10px] text-slate-500 self-center">
                              {d.specCapacity}
                            </div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {productA.specs.capacity || "Continuous Feed-In"}
                            </div>
                            <div className={`md:col-span-1 hidden md:block border-l h-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}></div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pl-2 ${isDark ? 'text-slate-300' : 'text-slate-705'}`}>
                              {productB.specs.capacity || "Continuous Feed-In"}
                            </div>
                          </div>

                          {/* Row B: Material */}
                          <div className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors py-3 px-4 hover:bg-brand-orange/5">
                            <div className="md:col-span-3 font-bold uppercase tracking-wider text-[10px] text-slate-500 self-center">
                              {d.specMaterial}
                            </div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {productA.specs.material || "ASME Food-Grade SUS316"}
                            </div>
                            <div className={`md:col-span-1 hidden md:block border-l h-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}></div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pl-2 ${isDark ? 'text-slate-300' : 'text-slate-705'}`}>
                              {productB.specs.material || "ASME Food-Grade SUS316"}
                            </div>
                          </div>

                          {/* Row C: Belt Width */}
                          <div className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors py-3 px-4 hover:bg-brand-orange/5">
                            <div className="md:col-span-3 font-bold uppercase tracking-wider text-[10px] text-slate-500 self-center">
                              {d.specBeltWidth}
                            </div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {productA.specs.beltWidth || "Custom Configuration"}
                            </div>
                            <div className={`md:col-span-1 hidden md:block border-l h-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}></div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pl-2 ${isDark ? 'text-slate-300' : 'text-slate-705'}`}>
                              {productB.specs.beltWidth || "Custom Configuration"}
                            </div>
                          </div>

                          {/* Row D: Operational Power */}
                          <div className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors py-3 px-4 hover:bg-brand-orange/5">
                            <div className="md:col-span-3 font-bold uppercase tracking-wider text-[10px] text-slate-500 self-center">
                              {d.specPower}
                            </div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {productA.specs.power || "Standard Heavy Phase"}
                            </div>
                            <div className={`md:col-span-1 hidden md:block border-l h-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}></div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pl-2 ${isDark ? 'text-slate-300' : 'text-slate-705'}`}>
                              {productB.specs.power || "Standard Heavy Phase"}
                            </div>
                          </div>

                          {/* Row E: Temperature / Air Flow Environmental Limits */}
                          <div className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors py-3 px-4 hover:bg-brand-orange/5">
                            <div className="md:col-span-3 font-bold uppercase tracking-wider text-[10px] text-slate-500 self-center">
                              Thermal Values
                            </div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {productA.specs.temperatureRange || productA.specs.airVelocity || "Autonomous Thermo-Control"}
                            </div>
                            <div className={`md:col-span-1 hidden md:block border-l h-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}></div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pl-2 ${isDark ? 'text-slate-300' : 'text-slate-705'}`}>
                              {productB.specs.temperatureRange || productB.specs.airVelocity || "Autonomous Thermo-Control"}
                            </div>
                          </div>

                          {/* Row F: Physical Boundaries */}
                          <div className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors py-3 px-4 hover:bg-brand-orange/5">
                            <div className="md:col-span-3 font-bold uppercase tracking-wider text-[10px] text-slate-500 self-center">
                              Physical Footprint
                            </div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pr-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                              {productA.specs.dimensions || "Modular Dimensions — Tailored to Plant Draft"}
                            </div>
                            <div className={`md:col-span-1 hidden md:block border-l h-4 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}></div>
                            <div className={`md:col-span-4 font-mono font-semibold self-center pl-2 ${isDark ? 'text-slate-300' : 'text-slate-755'}`}>
                              {productB.specs.dimensions || "Modular Dimensions — Tailored to Plant Draft"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Side-by-Side Features Detail List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        {/* Machine A features */}
                        <div className={`p-4 border rounded-none transition ${isDark ? 'bg-slate-950/20 border-slate-850' : 'bg-slate-50/50 border-slate-205'}`}>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-3">
                            Key Standard Features
                          </span>
                          <ul className="text-xs space-y-2 font-light">
                            {productA.features.map((feat, index) => (
                              <li key={index} className="flex gap-2 items-start">
                                <span className="text-brand-orange font-bold text-[10px] select-none mt-0.5">■</span>
                                <span className={isDark ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Machine B features */}
                        <div className={`p-4 border rounded-none transition ${isDark ? 'bg-slate-950/20 border-slate-850' : 'bg-slate-50/50 border-slate-205'}`}>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-3">
                            Key Standard Features
                          </span>
                          <ul className="text-xs space-y-2 font-light">
                            {productB.features.map((feat, index) => (
                              <li key={index} className="flex gap-2 items-start">
                                <span className="text-brand-orange font-bold text-[10px] select-none mt-0.5">■</span>
                                <span className={isDark ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Direct Ticket Actions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-dashed border-slate-800/20">
                        <button
                          onClick={() => {
                            openQuoteForProduct(productA.name);
                            setShowCompareModal(false);
                          }}
                          className="bg-brand-navy hover:bg-brand-navy-dark text-white hover:text-brand-orange font-bold py-3 text-xs text-center rounded-none uppercase tracking-widest transition-all cursor-pointer border border-slate-800"
                        >
                          Request Pricing for {productA.shortName}
                        </button>
                        <button
                          onClick={() => {
                            openQuoteForProduct(productB.name);
                            setShowCompareModal(false);
                          }}
                          className="bg-brand-navy hover:bg-brand-navy-dark text-white hover:text-brand-orange font-bold py-3 text-xs text-center rounded-none uppercase tracking-widest transition-all cursor-pointer border border-slate-800"
                        >
                          Request Pricing for {productB.shortName}
                        </button>
                      </div>

                    </div>
                  );
                })()}

              </div>

              {/* Close Footer */}
              <div className={`p-4 border-t flex justify-between items-center ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-50 bg-slate-50'}`}>
                <button
                  onClick={() => handlePrintDocument('comparison')}
                  className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase rounded-none transition-all cursor-pointer tracking-wider bg-brand-orange text-brand-navy hover:bg-brand-orange/90"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print Comparison PDF
                </button>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className={`px-6 py-2.5 text-xs font-bold uppercase rounded-none transition-all cursor-pointer tracking-wider ${
                    isDark ? 'bg-slate-800 hover:bg-slate-750 text-slate-200' : 'bg-slate-200 hover:bg-slate-300 text-slate-705'
                  }`}
                >
                  Close Comparison
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* REQUEST QUOTE GENERIC POPUP MODAL */}
      <AnimatePresence>
        {showQuoteModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              className={`rounded-none border w-full max-w-xl overflow-hidden shadow-2xl relative block transition-all duration-300 ${
                isDark ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-300"
              }`}
            >
              <div className="bg-brand-navy text-white p-5 flex justify-between items-center border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono text-white">
                    Quick Proposal Request
                  </span>
                </div>
                <button 
                  onClick={() => setShowQuoteModal(false)}
                  className="p-1.5 rounded-none bg-brand-navy-dark border border-slate-800 hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5 text-brand-orange" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <p className={`text-[11px] font-light leading-relaxed transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}>
                  Provide your business contact credentials to instant-queue a customized machinery pricing proposal for: <strong className={`font-bold uppercase tracking-wide ${
                    isDark ? "text-brand-orange" : "text-brand-navy"
                  }`}>{formData.interest}</strong>.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}>Target Machine Unit</label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className={`w-full rounded-none px-3 py-2 text-xs font-bold uppercase tracking-wide focus:border-brand-orange focus:outline-none transition-all ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-slate-100 focus:bg-slate-900" 
                          : "bg-slate-50 border-slate-200 text-brand-navy"
                      }`}
                    >
                      {productsData.map(p => (
                        <option key={p.id} value={p.name} className={isDark ? "bg-slate-950 text-slate-100" : ""}>{p.name}</option>
                      ))}
                      <option value="Complete Factory Layout System" className={isDark ? "bg-slate-950 text-slate-100" : ""}>Complete Factory Layout System</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formName}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full rounded-none px-3 py-2 text-xs font-semibold focus:border-brand-orange focus:outline-none transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-650 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formCompany}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className={`w-full rounded-none px-3 py-2 text-xs font-semibold focus:border-brand-orange focus:outline-none transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-650 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="International Food Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formEmail}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full rounded-none px-3 py-2 text-xs font-semibold focus:border-brand-orange focus:outline-none transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-650 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="john@foodcorp.com"
                      />
                    </div>
                    <div>
                      <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}>{d.formPhone}</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full rounded-none px-3 py-2 text-xs font-semibold focus:border-brand-orange focus:outline-none transition-all ${
                          isDark 
                            ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-650 focus:bg-slate-900" 
                            : "bg-slate-50 border-slate-200 text-brand-navy"
                        }`} 
                        placeholder="+1 555-0100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}>Hourly Target Food Product Volume</label>
                    <textarea 
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full rounded-none px-3 py-2 text-xs font-semibold focus:border-brand-orange focus:outline-none transition-all ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-650 focus:bg-slate-900" 
                          : "bg-slate-50 border-slate-200 text-brand-navy"
                      }`} 
                      placeholder="e.g. 1,500 kg/hr tempura style coated foods, or specify layout feet bounds..."
                    />
                  </div>
                </div>

                <div className="flex gap-2.5 pt-3">
                  <button
                    onClick={() => setShowQuoteModal(false)}
                    className={`flex-1 text-xs font-bold py-2.5 rounded-none uppercase cursor-pointer transition-colors ${
                      isDark ? "bg-slate-800 hover:bg-slate-700 text-slate-200" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => {
                      setShowQuoteModal(false);
                      handleFormSubmit(e);
                    }}
                    className="flex-1 bg-brand-orange hover:bg-brand-orange/90 text-brand-navy text-xs font-extrabold py-2.5 rounded-none uppercase tracking-wider cursor-pointer transition"
                  >
                    Generate Quote Form
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER SECTION */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-brand-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1 has the logo same as header but stacked version with icon top and text below */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex flex-col items-start space-y-3">
                <div className="flex-shrink-0 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(50, 50)">
                      {/* Blue Boomerang - top right */}
                      <path 
                        d="M -25 -35 C -5 -35, 18 -26, 36 -5 C 24 0, 14 4, 4 8 C 14 0, 18 -12, 6 -15 C -4 -17, -15 -25, -25 -35 Z" 
                        fill="#006ac3" 
                      />
                      {/* Red/Rust Boomerang - bottom */}
                      <path 
                        d="M -25 -35 C -5 -35, 18 -26, 36 -5 C 24 0, 14 4, 4 8 C 14 0, 18 -12, 6 -15 C -4 -17, -15 -25, -25 -35 Z" 
                        fill="#b83e1c" 
                        transform="rotate(120)"
                      />
                      {/* Orange Boomerang - left */}
                      <path 
                        d="M -25 -35 C -5 -35, 18 -26, 36 -5 C 24 0, 14 4, 4 8 C 14 0, 18 -12, 6 -15 C -4 -17, -15 -25, -25 -35 Z" 
                        fill="#f07c22" 
                        transform="rotate(240)"
                      />
                    </g>
                  </svg>
                </div>
                
                <div className="text-left flex flex-col">
                  <span className="text-lg font-black tracking-tight text-[#006ac3] font-display uppercase leading-none">
                    Boomerang
                  </span>
                  <span className="text-[9px] text-[#006ac3] uppercase font-bold tracking-[0.24em] font-sans mt-0.5 leading-none">
                    GROUP CORP.
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono mt-2">
                    Heavy Industrial Precision
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-light mt-4">
                Continuous high-throughput cooking, frying, forming, battering, breading, and spiral freezing systems. Built robust. Engineered for absolute scale.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                {d.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#home" className="hover:text-brand-orange transition-colors uppercase font-semibold">Home</a></li>
                <li><a href="#products" className="hover:text-brand-orange transition-colors uppercase font-semibold">Our Equipment</a></li>
                <li><a href="#solutions" className="hover:text-brand-orange transition-colors uppercase font-semibold">Solutions</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors uppercase font-semibold">About Us</a></li>
                <li>
                  <a href="#contact" className="hover:text-brand-orange transition-colors uppercase font-semibold inline-flex items-center gap-1">
                    Careers <span className="bg-slate-900 text-[8px] text-brand-orange px-1 rounded-none font-bold uppercase border border-slate-800">Open</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Corporate HQ Bounds
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                378 Zone 4 Brgy<br/>Tanauan City, 4232 Batangas
              </p>
              <div className="text-xs space-y-1 text-slate-300 font-mono">
                <p><span className="text-slate-505">Sales Desk:</span> +1 (905) 555-0148</p>
                <p><span className="text-slate-505">Inbound:</span> info@boomerangcorp.com</p>
              </div>
            </div>

            {/* Column 4: Newsletter & Social */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Stay Updated
              </h4>
              <p className="text-xs text-slate-400 font-light">
                Receive quarterly bulletins on packaging efficiency and thermal continuous machinery design.
              </p>
              
              {newsletterSubscribed ? (
                <div className="bg-emerald-500/10 text-emerald-405 border border-emerald-500/20 p-3 text-[10px] font-bold uppercase tracking-widest">
                  ✓ Successfully Subscribed
                </div>
              ) : (
                <div className="flex bg-slate-900 border border-slate-800 rounded-none p-1">
                  <input 
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="operator@company.com" 
                    className="bg-transparent text-xs w-full px-2.5 py-1.5 focus:outline-none font-semibold text-white"
                  />
                  <button 
                    onClick={() => {
                      if (newsletterEmail) {
                        setNewsletterSubscribed(true);
                      }
                    }}
                    className="bg-brand-orange hover:bg-brand-orange/90 text-brand-navy font-bold text-xs uppercase px-4 py-1 rounded-none cursor-pointer transition"
                  >
                    Join
                  </button>
                </div>
              )}

              <div className="flex space-x-3.5 pt-2">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  className="p-1.5 bg-slate-900 rounded-none text-slate-400 hover:text-white transition border border-slate-850"
                  rel="noreferrer"
                >
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider">LinkedIn</span>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  className="p-1.5 bg-slate-900 rounded-none text-slate-400 hover:text-white transition border border-slate-850"
                  rel="noreferrer"
                >
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider">YouTube</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
            <p className="font-mono text-slate-500">
              © 2026 {d.rightsReserved}
            </p>
            
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-white transition">{d.privacy}</a>
              <span>|</span>
              <a href="#terms" className="hover:text-white transition">{d.terms}</a>
            </div>
            
            <div className="flex items-center space-x-2 text-[10px] text-brand-orange bg-brand-orange/5 px-2.5 py-1 rounded-none font-mono border border-brand-orange/15">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TLS ENCRYPTED CONNECTION</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
