"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, X, ChevronLeft } from 'lucide-react'
import { GlobalStyles } from '@mui/material'

// استایل اختصاصی برای scrollbar که خوشگل‌ترش کنه
const scrollbarStyles = (
  <GlobalStyles
    styles={{
      '*::-webkit-scrollbar': {
        width: '8px',
      },
      '*::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '20px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255, 255, 255, 0.7)',
      },
    }}
  />
);

// تعریف ساختار هر مهارت
interface Skill {
  name: string
  btBg: string
  bg: string
  level: number
  icon: string
  description: string
  projects: string[]
}

// کامپوننت اصلی مربوط به نمایش مهارت‌هام
export function SkillSection() {
  const [showLevel, setShowLevel] = useState(false)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState(10)

  // لیست مهارت‌ها
  const skills: Skill[] = [
  {
    name: "JavaScript",
    btBg: "bg-yellow-400",
    bg: "from-yellow-400 to-yellow-200",
    level: 80,
    icon: "javascript.png",
    description: "زبان پایه‌ و اصلی برنامه‌نویسی در توسعه وب فرانت‌اند و بک‌اند",
    projects: ["ویژوال‌سازی داده", "افزونه مرورگر", "موتور بازی با JS"],
  },
  {
    name: "TypeScript",
    btBg: "bg-blue-600",
    bg: "from-blue-600 to-blue-400",
    level: 70,
    icon: "typescript.png",
    description: "نسخه‌ای از جاوااسکریپت با پشتیبانی از تایپ‌سیستم ایستا برای توسعه پایدارتر",
    projects: ["CRM سازمانی", "کتابخانه تایپ‌اسکریپت", "اپلیکیشن Angular"],
  },
  {
    name: "ReactJS",
    btBg: "bg-cyan-600",
    bg: "from-cyan-600 to-cyan-400",
    level: 70,
    icon: "react.png",
    description: "کتابخانه‌ای برای ساخت رابط کاربری تعاملی و کامپوننت‌محور در وب",
    projects: ["پلتفرم فروشگاه", "داشبورد شبکه اجتماعی", "سایت شخصی"],
  },
  {
    name: "NextJs",
    btBg: "bg-zinc-600",
    bg: "from-zinc-600 to-zinc-400",
    level: 50,
    icon: "nextjs.png",
    description: "فریم‌ورکی برای توسعه وب اپلیکیشن‌های سریع با رندر سمت سرور",
    projects: ["میکروسرویس‌ها", "راه‌اندازی CI/CD", "محیط توسعه‌ای"],
  },
  {
    name: "Node.js",
    btBg: "bg-green-600",
    bg: "from-green-600 to-zinc-600",
    level: 40,
    icon: "nodejs.png",
    description: "اجرای جاوااسکریپت در سمت سرور برای ساخت API و اپلیکیشن‌های بک‌اند",
    projects: ["API رست‌فول", "چت بلادرنگ", "سیستم مدیریت کارها"],
  },
  {
    name: "Tailwind",
    btBg: "bg-cyan-400",
    bg: "from-cyan-400 to-white",
    level: 90,
    icon: "tailwind.png",
    description: "فریم‌ورک CSS کاربردی برای طراحی سریع و واکنش‌گرا",
    projects: ["طراحی رابط کاربری مدرن", "پنل مدیریت", "وب‌سایت‌های واکنش‌گرا"],
  },
  {
    name: "Redux",
    btBg: "bg-purple-600",
    bg: "from-purple-600 to-purple-400",
    level: 50,
    icon: "redux.png",
    description: "مدیریت وضعیت اپلیکیشن‌های React به صورت متمرکز و قابل پیش‌بینی",
    projects: ["اپلیکیشن چندصفحه‌ای", "مدیریت سبد خرید", "هماهنگی بین کامپوننت‌ها"],
  },
  {
    name: "MongoDB",
    btBg: "bg-zinc-600",
    bg: "from-zinc-600 to-white",
    level: 70,
    icon: "mongodb.png",
    description: "دیتابیس NoSQL مبتنی بر سند برای ذخیره‌سازی منعطف داده‌ها",
    projects: ["درگاه API گراف‌کیوال", "سابسکریپشن لحظه‌ای", "اتصال کلاینت به سرور"],
  },
  {
    name: "MySQL",
    btBg: "bg-orange-400",
    bg: "from-orange-400 to-cyan-600",
    level: 70,
    icon: "mysql.png",
    description: "پایگاه داده رابطه‌ای متن‌باز برای ذخیره‌سازی داده‌های ساخت‌یافته",
    projects: ["سیستم حسابداری", "تحلیل داده‌های ساختاری", "پشتیبان‌گیری و بازیابی اطلاعات"],
  },
];


  // باز و بسته کردن جزییات هر مهارت
  const toggleSkillExpansion = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName)
  }

  // نشون دادن مهارت‌های بیشتر
  const showMoreSkills = () => {
    setVisibleSkills(prevVisible => Math.min(prevVisible + 3, skills.length))
  }

  // اموجی مرتبط با مهارت‌ها
  const getSkillEmoji = (skillName: string) => {
    const emojiMap: { [key: string]: string } = {
      "React": "⚛️",
      "Node.js": "🟢",
      "CSS": "🎨",
      "JavaScript": "🟨",
      "TypeScript": "🔷",
      "GraphQL": "🔺",
      "Python": "🐍",
      "Docker": "🐳"
    };
    return emojiMap[skillName] || "🔧";
  };

  return (
    <>
      {scrollbarStyles}
      <section id="skills" className="py-10 bg-gradient-to-br from-background to-secondary overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          {/* تیتر و توضیح */}
          <div className="text-center mb-12">
            {/* <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-primary"
            >
              مهارت‌هام
            </motion.h2> */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl font-bold text-muted-foreground mb-8"
            >
              مجموعه‌ای از مهارت‌هام به همراه درصد تسلطم رو اینجا می‌تونی ببینی.
            </motion.p>
            {/* <Button 
              onClick={() => setShowLevel(!showLevel)} 
              className="mb-8 transition-colors duration-300 hover:bg-purple-600"
            >
              {showLevel ? "مخفی کردن سطح مهارت" : "نمایش سطح مهارت"}
            </Button> */}
          </div>

          {/* کارت‌های مهارت */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            <AnimatePresence>
              {skills.slice(0, visibleSkills).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  }}
                  exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                  className={`relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 bg-gradient-to-br  ${skill.bg}`}
                  // style={{
                  //   background: ``
                  // }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                  
                  <AnimatePresence>
                    {expandedSkill === skill.name ? (
                      // حالت باز شده‌ی کارت
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent max-h-full ${skill.btBg}`}
                      >
                        <Button 
                          size="sm"
                          className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 transition-colors duration-300 z-10"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleSkillExpansion(skill.name)
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <h4 className="text-white font-semibold mb-1 text-base">
                          {skill.name} {getSkillEmoji(skill.name)}
                        </h4>
                        <p className="text-white mb-4 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                          {skill.description}
                        </p>
                        {/* {showLevel && ( */}
                          <>
                            <motion.div className="w-full bg-white/30 rounded-full h-1 mb-2 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  backgroundColor: `hsl(${skill.level * 1.2}, 70%, 50%)`,
                                  width: `${skill.level}%`,
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              />
                            </motion.div>
                            <motion.p className="text-white mb-3 font-semibold text-sm">
                              میزان تسلط: {skill.level}% 🚀
                            </motion.p>
                          </>
                        {/* )} */}
                        <h5 className="text-white font-semibold mb-2 text-base">پروژه‌های مرتبط 📂:</h5>
                        <ul className="list-none text-white">
                          {skill.projects.map((project, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="mb-2 flex items-center text-sm"
                            >
                              <span className="mr-2">🔹</span> {project}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      // حالت بسته‌ی کارت
                      <motion.div 
                        className="p-6 relative z-10"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      >
                        <motion.div className="flex items-center justify-center mb-4">
                          <img src={`/img/${skill.icon}`} alt={`../../img/${skill.icon}`} className="w-20 h-20" />
                        </motion.div>
                        <motion.h3 className="text-2xl font-semibold text-white mb-2">
                          {skill.name}
                        </motion.h3>
                        {/* {showLevel && ( */}
                          <motion.div className="w-full bg-white/30 rounded-full h-2.5 mb-4 overflow-hidden">
                            <motion.div
                              className="bg-primary h-2.5 rounded-full"
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </motion.div>
                        {/* )} */}
                        <Button 
                          size="sm" 
                          className={` relative overflow-hidden duration-300 ${skill.btBg}`}
                          onClick={() => toggleSkillExpansion(skill.name)}
                        >
                          <span className="relative z-10">
                            جزییات بیشتر
                          </span>
                          <motion.span
                            className={`absolute inset-0 `}
                            initial={{ x: "100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3}}
                          />
                          <ChevronLeft className="ml-2 h-4 w-4 relative z-10" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* دکمه نمایش بیشتر */}
          {visibleSkills < skills.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <Button 
                onClick={showMoreSkills} 
                size="lg" 
                className="group transition-colors duration-300 hover:bg-green-600"
              >
                نمایش بیشتر
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  )
}
