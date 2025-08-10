"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const skills = [
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "Laravel",
  "UI/UX Design",
  "Tailwind CSS",
]

const interests = [
  { icon: "💻", label: "برنامه نویسی" },
  { icon: "📰", label: "مطالعه تازه ترین‌ها در تکنولوژی" },
  { icon: "📚", label: "کتاب‌خوانی" },
  { icon: "🎨", label: "هنر(سفالگری، نقاشی، خیاطی، ...) " },
]

const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [showBio, setShowBio] = useState(false)

  return (
    <section id="about" className="py-10 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* ستون تصویر */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
                alt="تصویر پروفایل"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full"
              animate={floatingAnimation}
            />
          </div>

          {/* ستون محتوا */}
          <div className="space-y-8 text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">درباره من</h2>
              <AnimatePresence mode="wait">
                {showBio ? (
                  <motion.p
                    key="full-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    من یه توسعه‌دهنده‌ی عاشق خلق تجربه‌های مدرن و زیبای وبم. با استفاده از ابزارهای روز، تلاش می‌کنم ایده‌هامو به شکلی تمیز، کاربردی و کاربرپسند پیاده کنم. مسیر من تو دنیای تکنولوژی با علاقه به حل مسئله شروع شد و الان به ساخت راه‌حل‌های دیجیتالی هوشمند رسیده.
                  </motion.p>
                ) : (
                  <motion.p
                    key="short-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    من یه توسعه‌دهنده‌ام که عاشق خلق تجربه‌های زیبا و کاربردی در وب هستم...
                  </motion.p>
                )}
              </AnimatePresence>
              <Button
                variant="link"
                onClick={() => setShowBio(!showBio)}
                className="mt-2 p-0 h-auto font-semibold text-primary hover:text-primary/80"
              >
                {showBio ? "بستن" : "بیشتر بخوانید"}
              </Button>
            </motion.div>

            {/* مهارت‌ها */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">مهارت‌های اصلی</h3>
              <div className="flex ltr flex-wrap gap-2 justify-start">
                {skills.map((skill, index) => (
                  <motion.button
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-3 py-1 rounded-full cursor-default text-sm bg-secondary text-secondary-foreground`}
                  // onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence>
                {activeSkill && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 p-2 bg-secondary/50 rounded-md text-sm text-right"
                  >
                    {`${activeSkill} : پروژه‌هایی با این مهارت رو ببین!`}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* علاقه‌مندی‌ها */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">علاقه‌مندی‌ها</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex justify-start items-center gap-2 p-2 bg-secondary/30 rounded-md"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm text-secondary-foreground">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* دکمه‌ها */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-start"
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground">
                <FaDownload className="ml-2 h-4 w-4" />
                دریافت رزومه
              </Button>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saeiide.tm@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <FaEnvelope className="ml-2 h-4 w-4" />
                  تماس با من
                </Button>
              </a>
              <Link href="https://github.com/saeide1997">
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                  <FaGithub className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="">
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
