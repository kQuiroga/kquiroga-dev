export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["C#", ".NET 8", ".NET Framework", "ASP.NET Web API", "ADO.NET", "EF Core", "LINQ"],
  },
  {
    category: "Architecture",
    skills: ["Clean Architecture", "Vertical Slice Architecture", "DDD", "CQRS", "Microservices", "SOLID", "Design Patterns"],
  },
  {
    category: "Data & DevOps",
    skills: ["SQL Server", "T-SQL", "Stored Procedures", "Azure DevOps", "Docker", "Git", "GitFlow", "RabbitMQ", "Service Fabric"],
  },
  {
    category: "Testing",
    skills: ["Unit Testing", "TDD", "Integration Testing", "Postman", "Swagger"],
  },
  {
    category: "Frontend",
    skills: ["Astro", "TypeScript", "JavaScript", "Tailwind CSS", "Razor"],
  },
  {
    category: "Methodology",
    skills: ["Scrum", "Agile", "Code Review", "Technical Mentoring", "CI/CD"],
  },
];
