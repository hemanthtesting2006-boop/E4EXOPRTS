import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { EnquiryFormData } from '../types';
import { CheckCircle2, ShieldCheck, ArrowRight, RefreshCw, FileText, Send } from 'lucide-react';

export const RequestPage: React.FC = () => {
  const { queryParams, currentRoute, navigate } = useNavigation();

  // Mode: sample vs quote vs both
  const [enquiryMode, setEnquiryMode] = useState<'sample' | 'quote' | 'both'>('both');

  const [formData, setFormData] = useState<EnquiryFormData>({
    companyName: '',
    contactPerson: '',
    role: '',
    email: '',
    phoneWhatsapp: '',
    country: '',
    destinationPort: '',
    categoryInterest: 'Specialty Coffee (Araku Valley)',
    approxVolume: '',
    volumeUnit: 'Metric Tonnes (MT)',
    preferredIncoterm: 'FOB (Indian Port)',
    enquiryType: 'both',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; timestamp: string } | null>(null);

  // Sync mode and query parameters
  useEffect(() => {
    if (currentRoute === '/sample') {
      setEnquiryMode('sample');
      setFormData((prev) => ({ ...prev, enquiryType: 'sample' }));
    } else if (currentRoute === '/quote') {
      setEnquiryMode('quote');
      setFormData((prev) => ({ ...prev, enquiryType: 'quote' }));
    }

    if (queryParams.product) {
      if (queryParams.product.includes('coffee')) {
        setFormData((prev) => ({
          ...prev,
          categoryInterest: 'Specialty Coffee (Araku Valley)',
          message: queryParams.grade
            ? `Interested in sample evaluation for grade: ${queryParams.grade}.`
            : prev.message,
        }));
      } else {
        setFormData((prev) => ({ ...prev, categoryInterest: queryParams.product }));
      }
    }
  }, [currentRoute, queryParams]);

  const handleModeChange = (mode: 'sample' | 'quote' | 'both') => {
    setEnquiryMode(mode);
    setFormData((prev) => ({ ...prev, enquiryType: mode }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company name is required';
    }
    if (!formData.contactPerson.trim()) {
      errs.contactPerson = 'Contact person is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Work email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.country.trim()) {
      errs.country = 'Destination country is required';
    }
    if (!formData.categoryInterest.trim()) {
      errs.categoryInterest = 'Please specify product/category of interest';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Structure so it can easily connect to any backend or mail endpoint
    setTimeout(() => {
      const referenceId = `E4-${Date.now().toString().slice(-6)}`;
      const submissionRecord = {
        id: referenceId,
        timestamp: new Date().toISOString(),
      };

      // Save locally to session for user persistence & reference
      try {
        const history = JSON.parse(sessionStorage.getItem('e4_enquiries') || '[]');
        history.push({ ...formData, ...submissionRecord });
        sessionStorage.setItem('e4_enquiries', JSON.stringify(history));
      } catch (err) {
        // Storage fallback
      }

      setIsSubmitting(false);
      setSubmittedData(submissionRecord);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }, 600);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      companyName: '',
      contactPerson: '',
      role: '',
      email: '',
      phoneWhatsapp: '',
      country: '',
      destinationPort: '',
      categoryInterest: 'Specialty Coffee (Araku Valley)',
      approxVolume: '',
      volumeUnit: 'Metric Tonnes (MT)',
      preferredIncoterm: 'FOB (Indian Port)',
      enquiryType: enquiryMode,
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              {
                label:
                  enquiryMode === 'sample'
                    ? 'Request a Sample'
                    : enquiryMode === 'quote'
                    ? 'Get a Quote'
                    : 'Request a Sample / Get a Quote',
              },
            ]}
          />
          <div className="max-w-3xl mt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
              Commercial Trade Desk
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
              Start with a sample. Build from there.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
              Wherever you’re sourcing from, start with a sample. Request product samples and an
              indicative quote, and we’ll confirm grading, documentation, and shipping terms suited
              to your destination and order volume.
            </p>
          </div>
        </div>
      </section>

      {/* Main Enquiry Form Area */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submittedData ? (
            /* SUCCESS STATE */
            <div className="bg-white p-8 sm:p-12 border border-[#0B192C] shadow-sm space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-emerald-800">
                <CheckCircle2 className="w-8 h-8 text-[#B8976C]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6D44]">
                  Enquiry Successfully Logged
                </span>
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0B192C] font-normal leading-tight">
                  Thank you. Your enquiry has been received.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#4A5260] leading-relaxed">
                  Our team will review your requirements and get back to you with the relevant
                  sourcing and export details.
                </p>
              </div>

              {/* Reference Details */}
              <div className="p-6 bg-[#FAF8F5] border border-[#E7E5E0] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#707886] border-b border-[#E7E5E0] pb-2">
                  <span>Enquiry Reference</span>
                  <span className="font-mono font-semibold text-[#0B192C]">{submittedData.id}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4A5260] pt-1">
                  <div>
                    <span className="text-[#8A94A6] block">Company</span>
                    <span className="font-medium text-[#0B192C]">{formData.companyName}</span>
                  </div>
                  <div>
                    <span className="text-[#8A94A6] block">Contact</span>
                    <span className="font-medium text-[#0B192C]">{formData.contactPerson} ({formData.email})</span>
                  </div>
                  <div>
                    <span className="text-[#8A94A6] block">Category / Product</span>
                    <span className="font-medium text-[#0B192C]">{formData.categoryInterest}</span>
                  </div>
                  <div>
                    <span className="text-[#8A94A6] block">Destination</span>
                    <span className="font-medium text-[#0B192C]">{formData.country} {formData.destinationPort ? `(${formData.destinationPort})` : ''}</span>
                  </div>
                </div>
              </div>

              {/* Reassurance note */}
              <div className="p-4 bg-[#F4F1EA] border border-[#E7E5E0] text-xs text-[#5C6472] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8A6D44] shrink-0" />
                <span>
                  Your enquiry is reviewed by the E4 Exports team. Sourcing and export
                  specifications will be addressed directly.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#E7E5E0]">
                <Button
                  variant="primary"
                  size="md"
                  onClick={resetForm}
                  iconRight={<RefreshCw className="w-4 h-4" />}
                >
                  Submit Another Enquiry
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => navigate('/products')}
                >
                  Back to Products
                </Button>
              </div>
            </div>
          ) : (
            /* ENQUIRY FORM */
            <div className="bg-white border border-[#E7E5E0] shadow-2xs overflow-hidden">
              {/* Mode Selector Tabs (Functional Buttons) */}
              <div className="bg-[#FAF8F5] p-2 border-b border-[#E7E5E0] flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleModeChange('both')}
                  className={`flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                    enquiryMode === 'both'
                      ? 'bg-[#0B192C] text-[#FAF8F5] border-[#0B192C]'
                      : 'bg-white text-[#5C6472] border-[#E7E5E0] hover:text-[#0B192C]'
                  }`}
                >
                  Sample &amp; Quote
                </button>
                <button
                  type="button"
                  onClick={() => handleModeChange('sample')}
                  className={`flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                    enquiryMode === 'sample'
                      ? 'bg-[#0B192C] text-[#FAF8F5] border-[#0B192C]'
                      : 'bg-white text-[#5C6472] border-[#E7E5E0] hover:text-[#0B192C]'
                  }`}
                >
                  Request a Sample Only
                </button>
                <button
                  type="button"
                  onClick={() => handleModeChange('quote')}
                  className={`flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                    enquiryMode === 'quote'
                      ? 'bg-[#0B192C] text-[#FAF8F5] border-[#0B192C]'
                      : 'bg-white text-[#5C6472] border-[#E7E5E0] hover:text-[#0B192C]'
                  }`}
                >
                  Get a Commercial Quote
                </button>
              </div>

              <form onSubmit={handleSubmit} noValidate className="p-8 sm:p-12 space-y-8">
                {/* Section 1: Company & Contact */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6D44] mb-4 pb-2 border-b border-[#E7E5E0]">
                    01. Company &amp; Contact Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="e.g. Atlas Specialty Imports Ltd"
                        className={`w-full text-sm px-4 py-3 bg-[#FAF8F5] border text-[#1E2229] transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C] ${
                          errors.companyName ? 'border-red-500' : 'border-[#D5D2CA]'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Contact Person <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) =>
                          setFormData({ ...formData, contactPerson: e.target.value })
                        }
                        placeholder="e.g. Julian Henderson"
                        className={`w-full text-sm px-4 py-3 bg-[#FAF8F5] border text-[#1E2229] transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C] ${
                          errors.contactPerson ? 'border-red-500' : 'border-[#D5D2CA]'
                        }`}
                      />
                      {errors.contactPerson && (
                        <p className="mt-1 text-xs text-red-600">{errors.contactPerson}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Professional Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Head of Green Coffee Procurement / Importer"
                        className="w-full text-sm px-4 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="julian@company.com"
                        className={`w-full text-sm px-4 py-3 bg-[#FAF8F5] border text-[#1E2229] transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C] ${
                          errors.email ? 'border-red-500' : 'border-[#D5D2CA]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={formData.phoneWhatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneWhatsapp: e.target.value })
                        }
                        placeholder="+44 20 ..."
                        className="w-full text-sm px-4 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Destination Country <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        placeholder="e.g. United Kingdom, Germany, Japan, UAE"
                        className={`w-full text-sm px-4 py-3 bg-[#FAF8F5] border text-[#1E2229] transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C] ${
                          errors.country ? 'border-red-500' : 'border-[#D5D2CA]'
                        }`}
                      />
                      {errors.country && (
                        <p className="mt-1 text-xs text-red-600">{errors.country}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Trade Specifications */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6D44] mb-4 pb-2 border-b border-[#E7E5E0]">
                    02. Product &amp; Shipment Requirements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Category / Product of Interest <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.categoryInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, categoryInterest: e.target.value })
                        }
                        className="w-full text-sm px-4 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                      >
                        <option value="Specialty Coffee (Araku Valley)">
                          Specialty Coffee (Araku Valley Arabica)
                        </option>
                        <option value="Spices, Botanicals & Extracts">
                          Spices, Botanicals &amp; Nutraceutical Extracts
                        </option>
                        <option value="Grains & Agricultural Commodities">
                          Grains &amp; Agricultural Commodities
                        </option>
                        <option value="Custom Sourcing Requirement">
                          Custom Sourcing Requirement (Indian Origin)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Preferred Incoterm (if known)
                      </label>
                      <select
                        value={formData.preferredIncoterm}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredIncoterm: e.target.value })
                        }
                        className="w-full text-sm px-4 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                      >
                        <option value="FOB (Indian Port)">FOB (Free on Board - Indian Port)</option>
                        <option value="CIF (Cost, Insurance & Freight)">CIF (Destination Port)</option>
                        <option value="CFR (Cost & Freight)">CFR (Destination Port)</option>
                        <option value="EXW (Origin Warehouse)">EXW (Ex Works Origin)</option>
                        <option value="To Discuss">To Discuss with E4 Team</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Approximate Order Volume
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={formData.approxVolume}
                          onChange={(e) =>
                            setFormData({ ...formData, approxVolume: e.target.value })
                          }
                          placeholder="e.g. 5, 20, 1 FCL"
                          className="w-2/3 text-sm px-4 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                        />
                        <select
                          value={formData.volumeUnit}
                          onChange={(e) =>
                            setFormData({ ...formData, volumeUnit: e.target.value })
                          }
                          className="w-1/3 text-xs px-2 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                        >
                          <option value="Bags (60kg)">Bags (60kg)</option>
                          <option value="Metric Tonnes (MT)">MT</option>
                          <option value="Containers (20/40ft)">Containers</option>
                          <option value="Sample Pack (kg)">Sample Pack</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                        Destination Port / City
                      </label>
                      <input
                        type="text"
                        value={formData.destinationPort}
                        onChange={(e) =>
                          setFormData({ ...formData, destinationPort: e.target.value })
                        }
                        placeholder="e.g. Felixstowe, Hamburg, Jebel Ali, Yokohama"
                        className="w-full text-sm px-4 py-3 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Message / Specifications */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#0B192C] mb-2">
                    Message / Additional Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target grades, cup profiles, certification preferences, sample address, or annual procurement schedules..."
                    className="w-full text-sm p-4 bg-[#FAF8F5] border border-[#D5D2CA] text-[#1E2229] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0B192C]"
                  />
                </div>

                {/* Mandatory reassurance note */}
                <div className="p-4 bg-[#F4F1EA] border border-[#E7E5E0] text-xs text-[#5C6472] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#8A6D44] shrink-0" />
                  <span>
                    Your enquiry is reviewed by the E4 Exports team.
                  </span>
                </div>

                {/* Form CTA Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    iconRight={
                      isSubmitting ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {isSubmitting
                      ? 'Transmitting Enquiry...'
                      : enquiryMode === 'sample'
                      ? 'Request a Sample'
                      : enquiryMode === 'quote'
                      ? 'Request a Quote'
                      : 'Request a Sample & Quote'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
