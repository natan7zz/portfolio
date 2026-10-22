// Edite este arquivo para atualizar o conteúdo do site inteiro.

export const profile = {
  name: "Natan",
  role: "Software Developer",
  tagline:
    "Olá! Sou Natan Sousa, apaixonado por tecnologia e desenvolvimento de software. Desenvolvo projetos práticos e exploro novas tecnologias, com foco em desenvolvimento de software e automação de processos. Também estou expandindo meus conhecimentos em Dados e Quality Assurance (QA), buscando evolução técnica constante.",
  email: "github.natan7z@gmail.com",
  linkedin: "https://www.linkedin.com/in/natan-sousa-248a152aa",
  github: "https://github.com/Natan7zz",
  location: "São Paulo, Brasil",
  // Fotos em public/ (o caminho começa com "/").
  photo: "/perfil2.jpeg", // tema claro
  photoDark: "/perfil.jpg", // tema escuro
};

export type Skill = {
  name: string;
  detail: string;
  icon: string;
  variant?: string;
  iconUrl?: string; // imagem própria (link ou arquivo em /public)
};

export const skills: Skill[] = [
  { name: "HTML", detail: "Estrutura semântica", icon: "html5" },
  { name: "CSS", detail: "Layouts responsivos", icon: "css3" },
  { name: "JavaScript", detail: "Interatividade", icon: "javascript" },
  { name: "TypeScript", detail: "Em estudo", icon: "typescript" },
  { name: "React", detail: "Em estudo", icon: "react" },
  { name: "Next.js", detail: "Em estudo", icon: "nextjs" },
  { name: "Tailwind CSS", detail: "Estilização rápida", icon: "tailwindcss" },
  { name: "Bootstrap", detail: "Componentes prontos", icon: "bootstrap" },
  { name: "Python", detail: "Em estudo", icon: "python" },
  { name: "Git", detail: "Versionamento", icon: "git" },
  { name: "Figma", detail: "Protótipos e UI", icon: "figma" },
  { name: "Bizagi", detail: "Modelagem de processos", icon: "", iconUrl: "/icons/bizagi.png" },
  { name: "Trello", detail: "Gestão de tarefas", icon: "trello", variant: "plain" },
  { name: "VS Code", detail: "Editor principal", icon: "vscode" },
  { name: "Canva", detail: "Design gráfico", icon: "canva" },
];

// Todas as ferramentas aparecem como etiquetas no início do site (vem da lista acima).
export const highlights = skills.map((s) => s.name);

export type Project = {
  title: string;
  year?: string; // aparece em negrito no canto direito do título
  description: string;
  tags: string[];
  href: string;
  image?: string; // caminho em /public, opcional
};

export const projects: Project[] = [
  {
    title: "TCC Animations Kids",
    year: "2023",
    description:
      "Site com animações voltado ao público infantil, feito com HTML e CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://natan7z.github.io/animationskids/",
    image: "/animations-kids.png",
  },
  // Espaço reservado para o próximo projeto: troque os textos abaixo
  // e descomente a linha "image" quando tiver o banner.
  {
    title: "Novo projeto",
    year: "2026",
    description: "Em breve: a descrição do próximo projeto aparece aqui.",
    tags: ["Em breve"],
    href: "#projetos",
    // image: "/projects/novo-projeto.png",
  },
];
