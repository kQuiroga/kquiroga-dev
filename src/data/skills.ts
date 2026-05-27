export interface SkillGroup {
  category: string;
  skills: string[];
  tier: 'primary' | 'secondary';
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["C#", ".NET 8", ".NET Framework", "ASP.NET Web API", "ADO.NET", "EF Core", "LINQ"],
    tier: 'primary',
  },
  {
    category: "Architecture",
    skills: ["Clean Architecture", "Vertical Slice Architecture", "DDD", "CQRS", "Microservices", "SOLID", "Design Patterns"],
    tier: 'primary',
  },
  {
    category: "Data & DevOps",
    skills: ["SQL Server", "T-SQL", "Stored Procedures", "Azure DevOps", "Docker", "Git", "GitFlow", "RabbitMQ", "Service Fabric"],
    tier: 'secondary',
  },
  {
    category: "Testing",
    skills: ["Unit Testing", "TDD", "Integration Testing", "Postman", "Swagger"],
    tier: 'secondary',
  },
  {
    category: "Frontend",
    skills: ["Astro", "TypeScript", "JavaScript", "Tailwind CSS", "Razor"],
    tier: 'secondary',
  },
  {
    category: "Methodology",
    skills: ["Scrum", "Agile", "Code Review", "Technical Mentoring", "CI/CD"],
    tier: 'secondary',
  },
];
