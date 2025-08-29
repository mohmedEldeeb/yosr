"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * OTP / Verification Code Input (4 digits)
 * - Tailwind CSS styling
 * - One box per digit
 * - Auto-advance, backspace to previous, arrow navigation
 * - Paste support (e.g., paste "1234")
 * - Calls onComplete when all digits are filled
 *
 * Usage:
 * <OtpInput length={4} onComplete={(code) => console.log(code)} />
 */
function OtpInput({
  length = 4,
  onComplete,
  autoFocus = true,
  className = "",
}: {
  length?: number;
  onComplete?: (code: string) => void;
  autoFocus?: boolean;
  className?: string;
}) {
  const [values, setValues] = useState(Array.from({ length }, () => ""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  // Focus first input on mount (optional)
  useEffect(() => {
    if (!autoFocus) return;
    const first = inputsRef.current?.[0];
    first?.focus();
  }, [autoFocus]);

  const code = useMemo(() => values.join(""), [values]);

  useEffect(() => {
    if (onComplete && values.every((v) => v !== "")) {
      onComplete(code);
    }
  }, [code, onComplete, values]);

  const isDigit = (ch) => /\d/.test(ch);

  const handleChange = (idx, e) => {
    const raw = e.target.value;
    // Only keep the last digit if user typed more than one
    const lastChar = raw.slice(-1);
    if (lastChar && !isDigit(lastChar)) return;

    setValues((prev) => {
      const next = [...prev];
      next[idx] = lastChar || "";
      return next;
    });

    // Move to next input if a digit was entered
    if (lastChar && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx, e) => {
    const key = e.key;

    if (key === "Backspace") {
      if (values[idx]) {
        // Clear current box
        setValues((prev) => {
          const next = [...prev];
          next[idx] = "";
          return next;
        });
      } else if (idx > 0) {
        // Move back and clear previous
        inputsRef.current[idx - 1]?.focus();
        setValues((prev) => {
          const next = [...prev];
          next[idx - 1] = "";
          return next;
        });
      }
    }

    // Arrow navigation
    if (key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      inputsRef.current[idx - 1]?.focus();
    }
    if (key === "ArrowRight" && idx < length - 1) {
      e.preventDefault();
      inputsRef.current[idx + 1]?.focus();
    }
    // Home/End
    if (key === "Home") {
      e.preventDefault();
      inputsRef.current[0]?.focus();
    }
    if (key === "End") {
      e.preventDefault();
      inputsRef.current[length - 1]?.focus();
    }
  };

  const handlePaste = (idx, e) => {
    const data = e.clipboardData.getData("text");
    if (!data) return;
    e.preventDefault();

    const digits = data.replace(/\D/g, "").slice(0, length);
    if (!digits) return;

    setValues((prev) => {
      const next = [...prev];
      for (let i = 0; i < digits.length; i++) {
        const pos = idx + i;
        if (pos < length) next[pos] = digits[i];
      }
      return next;
    });

    const nextPos = Math.min(idx + digits.length, length - 1);
    inputsRef.current[nextPos]?.focus();
  };

  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      dir="ltr"
    >
      {values.map((val, idx) => (
        <input
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(idx, e)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          onPaste={(e) => handlePaste(idx, e)}
          aria-label={`Verification digit ${idx + 1}`}
          className="w-14 h-14 text-center text-xl font-semibold tracking-widest border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-gray-300 bg-white disabled:opacity-60"
        />
      ))}
    </div>
  );
}

const VerificationCodePage = () => {
  const handleComplete = (code: string) => {
    console.log("Verification code entered:", code);
  };
  return (
    <div className="min-h-[100%] bg-gray-100">
      {/* Sign-in form goes here */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Enter Verification Code
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          We have sent a verification code to your email.
        </p>
        <OtpInput length={4} onComplete={handleComplete} />
        {/* Resend code button */}
        <button className="mt-6 text-sm text-[#4ABD86] font-600 hover:underline">
          Resend code
        </button>
      </div>
    </div>
  );
};

export default VerificationCodePage;
