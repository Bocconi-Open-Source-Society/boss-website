import { useState, useEffect, useRef } from "react";

interface EmailValidationTooltipProps {
  email: string;
  showError: boolean;
  onValidationChange?: (isValid: boolean) => void;
}

const EmailValidationTooltip = ({ email, showError, onValidationChange }: EmailValidationTooltipProps) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const validateEmail = () => {
      if (!email || email.trim() === "") {
        setIsValid(false);
        setErrorMessage("Email address is required");
        onValidationChange?.(false);
        return;
      }

      const emailPattern = /[a-zA-Z]+\.[a-zA-Z]+@studbocconi\.it/;
      if (!emailPattern.test(email)) {
        setIsValid(false);
        setErrorMessage("Please use your Bocconi student email (name.surname@studbocconi.it)");
        onValidationChange?.(false);
        return;
      }

      setIsValid(true);
      setErrorMessage("");
      onValidationChange?.(true);
    };

    if (showError) {
      validateEmail();
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  }, [email, showError, onValidationChange]);

  if (isValid || !showError) {
    return null;
  }

  return (
    <div
      ref={tooltipRef}
      className="absolute left-0 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      style={{
        animation: "tooltipFadeIn 0.2s ease-out"
      }}
    >
      {/* Arrow pointer */}
      <div
        className="absolute -top-2 left-6 w-0 h-0"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "8px solid #ff9800"
        }}
      />
      
      {/* Tooltip content */}
      <div
        className="rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 max-w-sm"
        style={{
          backgroundColor: "#ff9800",
          color: "white"
        }}
      >
        <span className="text-lg flex-shrink-0" role="img" aria-label="warning">
          ⚠️
        </span>
        <span className="text-sm font-medium leading-snug">
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default EmailValidationTooltip;
