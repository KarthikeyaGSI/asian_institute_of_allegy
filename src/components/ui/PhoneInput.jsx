"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import { clsx } from "clsx";

const countries = [
  { name: "India", code: "+91", iso: "IN", flag: "🇮🇳", length: 10 },
  { name: "United States", code: "+1", iso: "US", flag: "🇺🇸", length: 10 },
  { name: "United Kingdom", code: "+44", iso: "GB", flag: "🇬🇧", length: 10 },
  { name: "Kenya", code: "+254", iso: "KE", flag: "🇰🇪", length: 9 },
  { name: "Ethiopia", code: "+251", iso: "ET", flag: "🇪🇹", length: 9 },
  { name: "United Arab Emirates", code: "+971", iso: "AE", flag: "🇦🇪", length: 9 },
  { name: "Canada", code: "+1", iso: "CA", flag: "🇨🇦", length: 10 },
  { name: "Australia", code: "+61", iso: "AU", flag: "🇦🇺", length: 9 },
  { name: "Germany", code: "+49", iso: "DE", flag: "🇩🇪", length: 11 },
  { name: "Singapore", code: "+65", iso: "SG", flag: "🇸🇬", length: 8 },
  { name: "Saudi Arabia", code: "+966", iso: "SA", flag: "🇸🇦", length: 9 },
  { name: "South Africa", code: "+27", iso: "ZA", flag: "🇿🇦", length: 9 },
  { name: "Nigeria", code: "+234", iso: "NG", flag: "🇳🇬", length: 10 },
  { name: "Malaysia", code: "+60", iso: "MY", flag: "🇲🇾", length: 10 },
  { name: "New Zealand", code: "+64", iso: "NZ", flag: "🇳🇿", length: 9 },
  { name: "France", code: "+33", iso: "FR", flag: "🇫🇷", length: 9 },
  { name: "Italy", code: "+39", iso: "IT", flag: "🇮🇹", length: 10 },
  { name: "Japan", code: "+81", iso: "JP", flag: "🇯🇵", length: 10 },
  { name: "China", code: "+86", iso: "CN", flag: "🇨🇳", length: 11 },
  { name: "Brazil", code: "+55", iso: "BR", flag: "🇧🇷", length: 11 },
  { name: "Mexico", code: "+52", iso: "MX", flag: "🇲🇽", length: 10 },
  { name: "Oman", code: "+968", iso: "OM", flag: "🇴🇲", length: 8 },
  { name: "Qatar", code: "+974", iso: "QA", flag: "🇶🇦", length: 8 },
  { name: "Kuwait", code: "+965", iso: "KW", flag: "🇰🇼", length: 8 },
  { name: "Sri Lanka", code: "+94", iso: "LK", flag: "🇱🇰", length: 9 },
  { name: "Bangladesh", code: "+880", iso: "BD", flag: "🇧🇩", length: 10 },
  { name: "Pakistan", code: "+92", iso: "PK", flag: "🇵🇰", length: 10 },
];

export default function PhoneInput({ value, onChange, className, required = false, dark = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Auto-detect location
    const detectLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const country = countries.find(c => c.iso === data.country_code);
        if (country) {
          setSelectedCountry(country);
        }
      } catch (error) {
        console.error("Location detection failed:", error);
      }
    };
    detectLocation();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.includes(search)
  );

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val.length <= selectedCountry.length) {
      onChange(`${selectedCountry.code}${val}`);
    }
  };

  const displayValue = value ? value.replace(selectedCountry.code, "") : "";

  return (
    <div className={clsx("relative w-full flex items-center", className)} ref={dropdownRef}>
      {/* Country Picker Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center gap-2 px-4 py-4 rounded-l-xl border-r-0 border transition-all h-full",
          dark 
            ? "bg-white/5 border-white/20 text-white hover:bg-white/10" 
            : "bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100"
        )}
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      >
        <span className="text-xl leading-none">{selectedCountry.flag}</span>
        <span className="text-sm font-bold">{selectedCountry.code}</span>
        <ChevronDown size={14} className={clsx("transition-transform", isOpen && "rotate-180")} />
      </button>

      {/* Phone Number Input */}
      <input
        type="tel"
        value={displayValue}
        onChange={handlePhoneChange}
        placeholder={`Enter ${selectedCountry.length} digits`}
        required={required}
        className={clsx(
          "flex-1 px-5 py-4 rounded-r-xl border transition-all h-full focus:outline-none focus:ring-2",
          dark
            ? "bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:ring-primary-accent"
            : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary",
          !isOpen && "focus:z-10"
        )}
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      />

      {/* Dropdown */}
      {isOpen && (
        <div className={clsx(
          "absolute top-full left-0 mt-2 w-72 max-h-80 overflow-y-auto rounded-2xl shadow-2xl z-[1000] border overflow-hidden",
          dark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200"
        )}>
          <div className={clsx("sticky top-0 p-3 border-b", dark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200")}>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={clsx(
                  "w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none",
                  dark ? "bg-white/5 text-white" : "bg-slate-100 text-slate-900"
                )}
              />
            </div>
          </div>
          <div className="py-2">
            {filteredCountries.map((c) => (
              <button
                key={c.iso}
                type="button"
                onClick={() => {
                  setSelectedCountry(c);
                  setIsOpen(false);
                  setSearch("");
                  // Update parent value with new code
                  onChange(`${c.code}${displayValue}`);
                }}
                className={clsx(
                  "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
                  dark ? "hover:bg-white/5 text-white" : "hover:bg-slate-50 text-slate-900",
                  selectedCountry.iso === c.iso && (dark ? "bg-white/10" : "bg-slate-100")
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-400">{c.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
