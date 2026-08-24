export const PERSONAL_INFO = {
    name: "Ashif Ansari",
    firstName: "Ashif",
    lastName: "Ansari",
    title: "Full Stack Developer",
    titleTags: ["Java", "Spring Boot", "React"],
    email: "ashifansari0864@gmail.com",
    phone: "+91 8581814522",
    location: "Hyderabad, Telangana, India",
    hometown: "Gopalganj, Bihar",
    github: "https://github.com/ashif-45",
    linkedin: "https://www.linkedin.com/in/ashif-ansari-b80107261/",
    bio: "Java Full Stack Developer with hands-on experience building web applications using Java, Spring Boot, React.js, REST APIs, Hibernate, and MySQL. A 2023 B.Tech CSE graduate from Hyderabad with a strong foundation in backend and frontend development. Passionate about learning through practical projects and building reliable, responsive, and database-driven applications.",
    education: {
        degree: "B.Tech in Computer Science and Engineering",
        institute: "Global Institute of Engineering and Technology",
        location: "Moinabad, Hyderabad",
        year: "2023",
    },
} as const;

export const SKILLS = [
    { name: "React.js", category: "Frontend", level: 90 },
    { name: "JavaScript", category: "Frontend", level: 88 },
    { name: "HTML", category: "Frontend", level: 95 },
    { name: "CSS", category: "Frontend", level: 90 },
    { name: "Tailwind CSS", category: "Frontend", level: 88 },
    { name: "Bootstrap", category: "Frontend", level: 82 },
    { name: "Java", category: "Backend", level: 80 },
    { name: "Spring Boot", category: "Backend", level: 72 },
    { name: "SQL", category: "Database", level: 75 },
] as const;

export const SKILL_CATEGORIES = ["All", "Frontend", "Backend", "Database", "DevOps"] as const;

export const TECH_COLORS: Record<string, string> = {
    "React.js": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    "Next.js": "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
    "JavaScript": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    "TypeScript": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    "HTML": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    "CSS": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    "Tailwind CSS": "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    "Bootstrap": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    "Java": "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    "Spring Boot": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    "SQL": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    "Docker": "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    "default": "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
};

export const PROJECT_CATEGORIES = [
    "All",
    "React",
    "HTML/CSS/JS",
    "Java",
    "Spring Boot",
    "SQL",
] as const;

export const SORT_OPTIONS = [
    { label: "Newest First", value: "newest" },
    { label: "Oldest First", value: "oldest" },
    { label: "A → Z", value: "az" },
    { label: "Z → A", value: "za" },
    { label: "By Day", value: "day" },
] as const;