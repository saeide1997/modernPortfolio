"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaGithub, FaExternalLinkAlt, FaChevronLeft } from 'react-icons/fa'

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  details: string;
  technologies: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "پنل کاربری سایت فروشگاهی",
    description: "پنل مدیریت سایت فروشگاهی با React توسعه داده شده و امکانات جامعی برای مدیریت محصولات، سفارشات و تحلیل داده‌ها دارد.",
    image: "https://i.postimg.cc/wBVC1bk9/image.png",
    color: "from-red-400 to-gray-700",
    textColor: "text-blue-100",
    details: "طراحی رابط کاربری با تمرکز بر تجربه کاربری روان و ساده انجام شده و از اصول طراحی واکنش‌گرا (Responsive Design) برای سازگاری با انواع دستگاه‌ها بهره گرفته شده است. استفاده از کامپوننت‌های قابل استفاده مجدد و ساختار ماژولار باعث شده تا نگهداری و توسعه این پروژه در بلندمدت بسیار آسان باشد.همچنین با استفاده از کتابخانه‌های گرافیکی و نموداری، تحلیل داده‌های فروش به‌صورت بصری نمایش داده می‌شود تا مدیر فروشگاه بتواند تصمیم‌گیری بهتری انجام دهد. این پنل قابل اتصال به APIهای سمت سرور و کاملاً انعطاف‌پذیر برای توسعه بیشتر است.",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/saeide1997/React-Dashboard",
    live: "https://sohoedashboard.saeidehtajmehr.me/"
  },
  {
    id: 2,
    title: "پروژه مدیریت سیستم آموزشی با NextJs",
    description: "سایت پنل آموزشی ما یک پلتفرم جامع برای مدیریت و آموزش است. دارای داشبوردهای مجزا برای مدیران و معلمان، تقویم داخلی و نمودارهای پیشرفت است که به تحلیل و بررسی داده‌ها کمک می‌کند.",
    image: "https://i.postimg.cc/2yz8ypLD/image.png",
    color: "from-yellow-300 to-blue-500",
    textColor: "text-green-100",
    details: `از جمله قابلیت‌های کلیدی این پلتفرم می‌توان به موارد زیر اشاره کرد:<br />
              داشبورد مدیریتی پویا برای مشاهده آمار کلی، وضعیت کلاس‌ها، فعالیت کاربران و مدیریت محتوا.<br />
              داشبورد معلمان برای برنامه‌ریزی دروس، ارزیابی عملکرد دانش‌آموزان و ثبت نمرات.<br />
              تقویم داخلی تعاملی برای برنامه‌ریزی جلسات، کلاس‌ها و رویدادهای آموزشی.<br />
              نمودارهای گرافیکی و تحلیلی جهت نمایش روند پیشرفت دانش‌آموزان و ارزیابی اثربخشی آموزش.<br />
              واسط کاربری ساده و واکنش‌گرا که تجربه‌ای روان و کاربرپسند را برای تمام کاربران فراهم می‌سازد.<br />
              این پلتفرم با هدف تسهیل مدیریت آموزشی، تحلیل داده‌ها و ایجاد ارتباط مؤثر بین مدیر، معلم و دانش‌آموز توسعه داده شده و قابلیت گسترش برای افزودن نقش‌ها و امکانات بیشتر را نیز دارد.`,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/saeide1997/School-Management-NextJS-ui",
    live: "https://sohoschool.saeidehtajmehr.me/admin"
  },
  {
    id: 3,
    title: "پورتفولیوی متحرک با NextJs",
    description: "سایت پورتفولیو ما با React طراحی شده تا نمونه‌کارها را با طراحی مدرن و واکنش‌گرا به بهترین شکل نمایش دهد. در تمام دستگاه‌ها به‌خوبی عمل می‌کند.",
    image: "https://i.postimg.cc/L6wYdDXF/Screenshot-from-2025-08-03-20-25-54.png",
    color: "from-blue-300 to-gray-700",
    textColor: "text-red-100",
    details: "سایت پورتفولیوی ما با استفاده از NextJs توسعه داده شده و با طراحی مدرن و مینیمال، بستری حرفه‌ای برای نمایش نمونه‌کارها فراهم می‌کند. این وب‌سایت کاملاً واکنش‌گرا طراحی شده و در تمامی دستگاه‌ها از جمله موبایل، تبلت و دسکتاپ عملکردی روان و دقیق دارد. تمرکز اصلی این پروژه بر تجربه کاربری (UX) و ارائه‌ی تصویری شفاف از مهارت‌ها و پروژه‌ها بوده است.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/saeide1997/next-animated-portfolio",
    live: "https://blockchain-supply.example.com"
  }
];

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-10 bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-secondary/20 to-background animate-pulse" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              پروژه‌های من
            </motion.h2>

            {/* <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              نگاهی به چند تا از پروژه‌هایی بنداز که با تکنولوژی‌های روز و دیدگاه حل مسئله ساختم.
            </motion.p> */}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col justify-between h-[480px] bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  />
                  <motion.h3
                    className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className={`mt-2 ${project.textColor} opacity-90`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="mt-6"
                >
                  <Button
                    size="lg"
                    className={`flex w-56 justify-between bg-white/20 hover:bg-white/30 ${project.textColor}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    جزئیات پروژه
                    <FaChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4 mx-3" dangerouslySetInnerHTML={{ __html: selectedProject.details }} />
                  <h4 className="font-semibold mb-2 mx-3">تکنولوژی‌های استفاده شده:</h4>
                  <div className="flex flex-wrap gap-2 mb-4 mx-3">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mx-3">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-gray-800 text-white hover:bg-gray-700">
                        <FaGithub className="ml-2" />
                        سورس‌کد
                      </Button>
                    </a>
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <Button className="group bg-blue-600 text-white hover:bg-blue-500">
                        <FaExternalLinkAlt className="ml-2" />
                        مشاهده زنده
                      </Button>
                    </a>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
