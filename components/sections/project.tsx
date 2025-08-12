"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
} from "react-icons/fa"

type Project = {
  id: number
  title: string
  description: string
  image: string
  colorStart: string
  colorEnd: string
  textColor: string
  details: string
  technologies: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    id: 4,
    title: "اپلیکیشن مدیریت دارایی (دارائیست)",
    description:
      "اپلیکیشن تحت وب برای مدیریت دارایی‌ها با قابلیت محاسبه لحظه‌ای و نمایش نمودار تغییرات به همراه امنیت و احراز هویت قوی.",
    image: "https://i.postimg.cc/L6XhsmGv/Screenshot-from-2025-08-12-16-19-29.png",
    colorStart: "from-teal-200",
    colorEnd: "to-teal-700",
    textColor: "text-white",
    details:
      "این برنامه با Next.js و MongoDB توسعه داده شده است و کاربران می‌توانند دارایی‌های مختلفی مثل طلا، ارز، رمز ارز و بورس را وارد و مدیریت کنند. نمودارهای تغییرات به صورت روزانه و ماهانه نمایش داده می‌شوند. اپلیکیشن دارای سیستم لاگین و ثبت‌نام با JWT و امنیت بالا است. می‌توانید با admin و پسورد ۱۲۳۴۵۶ وارد سایت شوید",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "JWT", "Chart.js"],
    github: "https://github.com/saeide1997/daraist_asset_app",
    live: "https://daraist.saeidehtajmehr.me",
  },
  {
    id: 5,
    title: "اپلیکیشن رزرواسیون آنلاین نسخه موبایل",
    description:
      "سیستم رزرو آنلاین با قابلیت نمایش لحظه‌ای ظرفیت، انتخاب هوشمند زمان و ارسال اطلاعیه به کاربران.",
    image: "https://i.postimg.cc/mgSb3Jxh/Screenshot-from-2025-08-12-16-22-09.png",
    colorStart: "from-blue-400",
    colorEnd: "to-blue-800",
    textColor: "text-white",
    details:
      "اپلیکیشن رزرواسیون با React و Firebase توسعه داده شده است. طراحی شده تا کاربر بتواند به راحتی زمان دلخواه خود را انتخاب و رزرو کند. دارای سیستم اطلاع‌رسانی با استفاده از Firebase Cloud Messaging است. طراحی کاملاً واکنش‌گرا و UX روان و ساده.",
    technologies: ["ReactJs", "PHP", "Laravel", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/saeide1997/Clinic-Laravel-ReactJs",
    live: "https://doctoret.saeidehtajmehr.me",
  },
  {
    id: 6,
    title: "اپلیکیشن رزرواسیون آنلاین نسخه وب",
    description:
      "سیستم رزرو آنلاین با قابلیت نمایش لحظه‌ای ظرفیت، انتخاب هوشمند زمان و ارسال اطلاعیه به کاربران.",
    image: "https://i.postimg.cc/tCGdYShY/Screenshot-from-2025-08-12-16-42-42.png",
    colorStart: "from-teal-400",
    colorEnd: "to-blue-900",
    textColor: "text-white",
    details:
      "اپلیکیشن رزرواسیون با React و Firebase توسعه داده شده است. طراحی شده تا کاربر بتواند به راحتی زمان دلخواه خود را انتخاب و رزرو کند. دارای سیستم اطلاع‌رسانی با استفاده از Firebase Cloud Messaging است. طراحی کاملاً واکنش‌گرا و UX روان و ساده.",
    technologies: ["ReactJs", "PHP", "Laravel", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/saeide1997/Clinic-Laravel-ReactJs",
    live: "https://doctoret.saeidehtajmehr.me",
  },
  {
    id: 1,
    title: "پنل مدیریت فروشگاه آنلاین",
    description:
      "داشبورد مدیریت کامل فروشگاه با امکانات پیشرفته تحلیل فروش و مدیریت سفارش‌ها، طراحی ریسپانسیو و UX بی‌نظیر.",
    image: "https://i.postimg.cc/wBVC1bk9/image.png",
    colorStart: "from-red-200",
    colorEnd: "to-red-700",
    textColor: "text-white",
    details:
      "این پنل مدیریت با React و Tailwind CSS توسعه داده شده است و شامل بخش‌های پیشرفته برای مدیریت محصولات، دسته‌بندی‌ها، سفارشات و کاربران می‌باشد. رابط کاربری بسیار روان و مدرن با استفاده از کامپوننت‌های ماژولار طراحی شده تا توسعه و نگهداری آسان باشد. همچنین داشبورد مجهز به نمودارهای تحلیلی است که با D3.js و Recharts ساخته شده‌اند و اطلاعات فروش را بصورت بصری به مدیر ارائه می‌دهد.",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Recharts"],
    github: "https://github.com/saeide1997/React-Dashboard",
    live: "https://sohoedashboard.saeidehtajmehr.me/",
  },
  {
    id: 2,
    title: "سیستم مدیریت آموزش با Next.js",
    description:
      "پلتفرم مدیریت آموزش مدرن با قابلیت‌های متنوع برای مدیران، معلمان و دانش‌آموزان همراه با رابط تعاملی و تقویم هوشمند.",
    image: "https://i.postimg.cc/2yz8ypLD/image.png",
    colorStart: "from-yellow-200",
    colorEnd: "to-yellow-400",
    textColor: "text-white",
    details:
      "این پروژه مبتنی بر Next.js و TypeScript پیاده‌سازی شده و شامل داشبوردهای مختلف برای مدیریت، ارزیابی عملکرد، برنامه‌ریزی دروس، ثبت نمرات و تقویم آموزشی هوشمند است. طراحی رابط کاربری با Tailwind CSS انجام شده و تمامی بخش‌ها واکنش‌گرا و قابل استفاده در موبایل و دسکتاپ هستند. سیستم به گونه‌ای توسعه یافته که به راحتی قابلیت افزودن نقش‌ها و امکانات جدید را داشته باشد.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/saeide1997/School-Management-NextJS-ui",
    live: "https://sohoschool.saeidehtajmehr.me/admin",
  },
  {
    id: 3,
    title: "پورتفولیوی متحرک با Next.js",
    description:
      "سایتی با طراحی مینیمال و انیمیشن‌های حرفه‌ای برای نمایش پروژه‌ها و مهارت‌ها به صورت تعاملی و واکنش‌گرا.",
    image: "https://i.postimg.cc/L6wYdDXF/Screenshot-from-2025-08-03-20-25-54.png",
    colorStart: "from-blue-400",
    colorEnd: "to-gray-800",
    textColor: "text-white",
    details:
      "این پورتفولیو بر پایه Next.js و Tailwind CSS طراحی شده است. طراحی مدرن، مینیمال و تمرکز بر UX عالی باعث شده کاربر بتواند به راحتی پروژه‌ها را مشاهده کند. انیمیشن‌ها با Framer Motion ساخته شده‌اند که باعث ایجاد جذابیت بصری و حس حرفه‌ای بودن می‌شود. کامپوننت‌های واکنش‌گرا و قابل استفاده مجدد، توسعه پروژه را ساده کرده‌اند.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/saeide1997/next-animated-portfolio",
    live: "https://blockchain-supply.example.com",
  },
]

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // انیمیشن‌ها
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" },
    tap: { scale: 0.95 },
  }

  return (
    <section
      id="projects"
      className="relative py-16 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-200 text-white overflow-x-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl z-20 relative">
        <motion.h2
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 via-blue-500 to-teal-700 bg-clip-text text-transparent"
        >
          پروژه‌های اجرا شده
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className={`rounded-xl bg-gradient-to-br ${project.colorStart} ${project.colorEnd} p-6 shadow-lg cursor-pointer flex flex-col justify-between select-none`}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedProject(project)
              }}
              aria-label={`نمایش جزئیات پروژه ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-5 w-full h-48 object-cover shadow-md"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className={`${project.textColor} mt-auto dark:text-white dark:bg-slate-700 text-black`}
                onClick={(e) => {
                  setSelectedProject(project)
                }}
                aria-label={`جزئیات بیشتر پروژه ${project.title}`}
              >
                جزئیات بیشتر <FaChevronLeft className="ml-2" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* دیالوگ جزئیات پروژه */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={Boolean(selectedProject)}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent
              className={`max-w-3xl max-h-screen rounded-2xl p-8 bg-gradient-to-br ${selectedProject.colorStart} ${selectedProject.colorEnd} text-white shadow-2xl`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <DialogHeader>
                  <DialogTitle className="text-4xl font-bold mb-3">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-gray-100 mb-6">
                    {selectedProject.details}
                  </DialogDescription>
                </DialogHeader>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg mb-6 w-full max-h-80 object-cover shadow-lg"
                  loading="lazy"
                />

                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600 bg-opacity-40 px-4 py-1 rounded-full text-white font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 justify-center mt-8">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full text-white font-semibold transition"
                    aria-label={`مشاهده کد پروژه ${selectedProject.title} در گیت‌هاب`}
                  >
                    <FaGithub size={22} /> گیت‌هاب
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-full text-white font-semibold transition"
                    aria-label={`مشاهده نسخه زنده پروژه ${selectedProject.title}`}
                  >
                    <FaExternalLinkAlt size={20} /> مشاهده آنلاین
                  </a>
                </div>

                {/* <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="بستن پنجره جزئیات پروژه"
                  className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
                > */}
                  {/* <FaTimes size={24} />
                </button> */}
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
