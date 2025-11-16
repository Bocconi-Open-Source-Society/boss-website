import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MessageSquare, CheckCircle, Send, AlertCircle } from "lucide-react";
import { useState } from "react";
import EmailValidationTooltip from "./EmailValidationTooltip";
import Footer from "./Footer";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvrwvvl");
  const [showValidationBanner, setShowValidationBanner] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({ email: false, message: false });

  // Magnetic button effect
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.02)`;
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'translate(0, 0) scale(1)';
  };

  // Custom validation functions
  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    const pattern = /^[a-zA-Z]+\.[a-zA-Z]+@studbocconi\.it$/;
    if (!pattern.test(value)) {
      return "Must be a valid Bocconi student email (name.surname@studbocconi.it)";
    }
    return "";
  };

  const validateMessage = (value: string) => {
    if (!value.trim()) return "Message is required";
    return "";
  };

  const emailError = touched.email ? validateEmail(email) : "";
  const messageError = touched.message ? validateMessage(message) : "";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ email: true, message: true });
    
    // Validate all fields
    const emailValidation = validateEmail(email);
    const messageValidation = validateMessage(message);
    
    if (emailValidation || messageValidation) {
      setShowValidationBanner(true);
      setTimeout(() => setShowValidationBanner(false), 5000);
      return;
    }
    
    setShowValidationBanner(false);
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <>
        <section id="contact" className="min-h-screen py-4 md:py-32 px-4 md:px-6 flex items-center relative">
          {/* Backlink */}
          <a href="/" className="absolute top-6 left-6 z-20 font-display font-bold text-2xl text-ctp-lavender hover:text-ctp-mauve transition-colors duration-300">BOSS</a>
          <div className="container mx-auto max-w-2xl text-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-ctp-green/20 to-ctp-teal/20 rounded-3xl blur-2xl animate-pulse-glow" />
              <div className="relative glass-panel-3d rounded-3xl p-16 shadow-elevated scroll-fade-in light-reflection overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ctp-green/20 to-ctp-teal/20 animate-gradient flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-ctp-green" />
                </div>
                <h3 className="text-4xl font-display font-bold gradient-text mb-4">
                  Message Sent!
                </h3>
                <p className="text-ctp-subtext0 text-lg leading-relaxed">
                  Thank you for reaching out. We'll get back to you soon!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section id="contact" className="min-h-screen py-4 md:py-32 px-4 md:px-6 flex items-center relative">
        {/* Backlink */}
        <a href="/" className="absolute top-6 left-6 z-20 font-display font-bold text-2xl text-ctp-lavender hover:text-ctp-mauve transition-colors duration-300">BOSS</a>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-6 md:mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-3 md:mb-6">
              Get In Touch
            </h2>
            <p className="text-base md:text-xl text-ctp-subtext0">
              Ready to join us? Send us a message and we'll get back to you soon.
            </p>
          </div>

          {/* Validation Banner */}
          {showValidationBanner && (
            <div className="mb-6 scroll-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-ctp-red/20 to-ctp-maroon/20 rounded-2xl blur-xl" />
                <div className="relative glass-panel-3d rounded-2xl p-4 border-ctp-red/30 bg-ctp-red/5 backdrop-blur-xl overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-ctp-red/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <AlertCircle className="w-5 h-5 text-ctp-red animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-ctp-red mb-1">Required Fields Missing</h4>
                      <p className="text-xs text-ctp-subtext0">Please fill in all required fields before sending your message.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-ctp-lavender/10 to-ctp-mauve/10 rounded-3xl blur-2xl animate-pulse-glow" />
            <div className="relative glass-panel-3d rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-elevated depth-hover light-reflection overflow-hidden scroll-fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={onSubmit} noValidate className="space-y-5 md:space-y-7">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-semibold text-ctp-text mb-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-ctp-lavender/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-ctp-lavender" />
                  </div>
                  Email <span className="text-ctp-red">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) {
                      setTouched({ ...touched, email: true });
                    }
                  }}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  className={`w-full px-5 py-4 bg-ctp-mantle/50 border rounded-xl text-ctp-text placeholder-ctp-overlay0 focus:outline-none transition-all ${
                    emailError
                      ? 'border-ctp-red focus:ring-2 focus:ring-ctp-red/50'
                      : 'border-ctp-surface1 focus:ring-2 focus:ring-ctp-lavender focus:border-transparent'
                  }`}
                  placeholder="name.surname@studbocconi.it"
                />
                {emailError && (
                  <div className="mt-2 flex items-start gap-2 text-sm text-ctp-red animate-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{emailError}</span>
                  </div>
                )}
                <ValidationError 
                  prefix="Email" 
                  field="email" 
                  errors={state.errors} 
                  className="text-ctp-red text-sm mt-2 flex items-center gap-1 font-medium"
                />
                <p className="text-xs text-ctp-overlay0 mt-2 ml-1">
                  Please use your Bocconi student email
                </p>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-semibold text-ctp-text mb-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-ctp-sapphire/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-ctp-sapphire" />
                  </div>
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-4 bg-ctp-mantle/50 border border-ctp-surface1 rounded-xl text-ctp-text placeholder-ctp-overlay0 focus:outline-none focus:ring-2 focus:ring-ctp-lavender focus:border-transparent transition-all"
                  placeholder="+39 123 456 7890"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone" 
                  errors={state.errors} 
                  className="text-ctp-red text-sm mt-2 flex items-center gap-1 font-medium"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-semibold text-ctp-text mb-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-ctp-mauve/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-ctp-mauve" />
                  </div>
                  Message <span className="text-ctp-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (touched.message) {
                      setTouched({ ...touched, message: true });
                    }
                  }}
                  onBlur={() => setTouched({ ...touched, message: true })}
                  rows={6}
                  className={`w-full px-5 py-4 bg-ctp-mantle/50 border rounded-xl text-ctp-text placeholder-ctp-overlay0 focus:outline-none transition-all resize-none ${
                    messageError
                      ? 'border-ctp-red focus:ring-2 focus:ring-ctp-red/50'
                      : 'border-ctp-surface1 focus:ring-2 focus:ring-ctp-lavender focus:border-transparent'
                  }`}
                  placeholder="Tell us how you'd like to get involved with BOSS..."
                />
                {messageError && (
                  <div className="mt-2 flex items-start gap-2 text-sm text-ctp-red animate-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{messageError}</span>
                  </div>
                )}
                <ValidationError 
                  prefix="Message" 
                  field="message" 
                  errors={state.errors} 
                  className="text-ctp-red text-sm mt-2 flex items-center gap-1 font-medium"
                />
              </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="magnetic w-full bg-gradient-to-r from-ctp-lavender to-ctp-mauve animate-gradient text-ctp-base font-semibold py-4 px-8 rounded-xl transition-all duration-500 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-lg"
                  onMouseMove={handleButtonMouseMove}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  {state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
