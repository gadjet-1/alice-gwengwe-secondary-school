"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Key,
  ChevronDown,
  XCircle,
  BookOpen,
  ExternalLink,
  Phone,
  Mail,
  Loader,
  Lock,
} from "lucide-react";

// =================================================================
// 🎨 COLORS
// =================================================================
const COLORS = {
  Maroon: "#5A0F19",
  Burgundy: "#7A1F2B",
  Blush: "#F7EDEE",
  Slate: "#1A1A1A",
  Feather: "#F6F6F6",
  Silver: "#C6C6C6",
};

// =================================================================
// 🎞️ MOTION VARIANTS
// =================================================================
const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const SHAKE = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

const STAGGER = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// =================================================================
// 🔐 CREDENTIALS FORM
// =================================================================
const CredentialsForm = ({ setReportStatus, setReportData, setErrorMessage }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    candidateNumber: "",
    formLevel: "Form 4",
    term: "Term 3",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);
  const formRef = useRef(null);

  const inputClass =
    "w-full p-4 bg-[#F6F6F6] text-[#1A1A1A] rounded-lg border border-[#C6C6C6] focus:border-[#5A0F19] focus:ring-1 focus:ring-[#5A0F19] outline-none transition";

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setReportStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setIsSubmitting(false);

      if (credentials.candidateNumber === "12345" && credentials.name.trim()) {
        setReportStatus("success");
        setReportData({
          studentName: credentials.name,
          candidateNumber: credentials.candidateNumber,
          form: credentials.formLevel,
          term: credentials.term,
          mockGrade: "Distinction",
          date: new Date().toLocaleDateString(),
        });
      } else {
        setReportStatus("error");
        setErrorMessage(
          "We couldn't find a report matching the entered details."
        );
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    }, 1500);
  };

  return (
    <motion.div
      initial="hidden"
      animate={shake ? "shake" : "visible"}
      variants={{ ...FADE_UP, ...SHAKE }}
      className="p-6 md:p-10 bg-white rounded-xl shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-[#5A0F19] mb-8 flex items-center">
        <Key className="mr-3" /> Report Credentials
      </h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          required
          placeholder="Full Name (as per records)"
          value={credentials.name}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="candidateNumber"
          required
          placeholder="Student Number"
          value={credentials.candidateNumber}
          onChange={handleChange}
          className={inputClass}
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            name="formLevel"
            value={credentials.formLevel}
            onChange={handleChange}
            className={`${inputClass} appearance-none`}
          >
            {["Form 1", "Form 2", "Form 3", "Form 4"].map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>

          <select
            name="term"
            value={credentials.term}
            onChange={handleChange}
            className={`${inputClass} appearance-none`}
          >
            {["Term 1", "Term 2", "Term 3"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <button
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-semibold text-white transition ${
            isSubmitting
              ? "bg-[#5A0F19]/70"
              : "bg-[#5A0F19] hover:bg-[#7A1F2B]"
          }`}
        >
          {isSubmitting ? (
            <span className="flex justify-center items-center">
              <Loader className="animate-spin mr-2" /> Fetching Report...
            </span>
          ) : (
            <span className="flex justify-center items-center">
              View Report <BookOpen className="ml-2" />
            </span>
          )}
        </button>
      </form>
    </motion.div>
  );
};

// =================================================================
// ❌ ERROR BOX
// =================================================================
const ErrorBox = ({ message }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="p-6 bg-[#F7EDEE] border border-[#5A0F19]/50 rounded-xl shadow-md mt-8"
  >
    <div className="flex">
      <XCircle className="text-red-600 mr-3" />
      <div>
        <h4 className="font-bold text-lg">Authentication Failed</h4>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  </motion.div>
);

// =================================================================
// 📄 REPORT PREVIEW
// =================================================================
const ReportPreview = ({ data }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10">
    <h2 className="text-4xl font-bold text-[#5A0F19] mb-4">
      Official Term Report
    </h2>

    <div className="p-4 bg-[#F6F6F6] rounded border-l-4 border-[#7A1F2B] text-sm flex justify-between">
      <p><strong>Student:</strong> {data.studentName}</p>
      <p><strong>Form:</strong> {data.form}</p>
      <p><strong>Term:</strong> {data.term}</p>
      <p><strong>Date:</strong> {data.date}</p>
    </div>

    <div className="mt-6 p-8 bg-white border rounded shadow text-center">
      <BookOpen className="mx-auto text-[#7A1F2B]" size={40} />
      <p className="mt-4 font-bold text-xl">
        Grade: <span className="text-green-700">{data.mockGrade}</span>
      </p>
    </div>

    <div className="flex justify-between mt-6">
      <button className="bg-[#5A0F19] hover:bg-[#7A1F2B] text-white px-6 py-3 rounded-xl flex items-center">
        <Download className="mr-2" /> Download PDF
      </button>

      <p className="text-sm italic text-gray-600 flex items-center">
        <Lock className="mr-1" /> Keep your details secure
      </p>
    </div>
  </motion.div>
);

// =================================================================
// 🧩 MAIN PAGE
// =================================================================
export default function ResultsPortalPage() {
  const [status, setStatus] = useState("initial");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#1A1A1A]">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-[#5A0F19]">
            Access Your Academic Results
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Enter your credentials exactly as per school records.
          </p>
        </motion.section>

        <CredentialsForm
          setReportStatus={setStatus}
          setReportData={setData}
          setErrorMessage={setError}
        />

        <AnimatePresence>
          {status === "error" && <ErrorBox message={error} />}
          {status === "success" && <ReportPreview data={data} />}
        </AnimatePresence>
      </main>
    </div>
  );
}
