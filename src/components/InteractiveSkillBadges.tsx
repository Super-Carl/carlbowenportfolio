import React, { useEffect, useState, useMemo } from 'react';

interface SkillBadge {
  id: string;
  name: string;
  color: string;
  delay: number;
}

const InteractiveSkillBadges: React.FC = () => {
  const [activeBadges, setActiveBadges] = useState<SkillBadge[]>([]);
  const [badgeId, setBadgeId] = useState(0);

  // Comprehensive list of skills from across the site
  const allSkills = useMemo(
    () => [
      // AI & GenAI Technologies
      { name: 'GenAI', color: 'bg-purple-500' },
      { name: 'GPT', color: 'bg-purple-600' },
      { name: 'AI SDLC', color: 'bg-purple-700' },
      { name: 'Prompting', color: 'bg-purple-400' },
      { name: 'Cursor', color: 'bg-purple-500' },
      { name: 'Windsurf', color: 'bg-purple-600' },
      { name: 'Copilot', color: 'bg-purple-700' },

      // Frontend Development
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Next.js', color: 'bg-blue-600' },
      { name: 'TypeScript', color: 'bg-blue-700' },
      { name: 'Redux', color: 'bg-blue-400' },
      { name: 'Apollo', color: 'bg-blue-500' },
      { name: 'Atomic Design', color: 'bg-blue-600' },
      { name: 'Design Systems', color: 'bg-blue-700' },
      { name: 'Figma', color: 'bg-blue-400' },

      // Backend & APIs
      { name: 'Node.js', color: 'bg-green-500' },
      { name: 'REST APIs', color: 'bg-green-600' },
      { name: 'GraphQL', color: 'bg-green-700' },
      { name: 'AWS', color: 'bg-green-400' },
      { name: 'MongoDB', color: 'bg-green-500' },
      { name: 'Express.js', color: 'bg-green-600' },
      { name: 'MERN Stack', color: 'bg-green-700' },

      // Testing & Quality
      { name: 'Jest', color: 'bg-yellow-500' },
      { name: 'Cypress', color: 'bg-yellow-600' },
      { name: 'Testing', color: 'bg-yellow-700' },
      { name: 'CI/CD', color: 'bg-yellow-400' },

      // Leadership & Management
      { name: 'Team Leadership', color: 'bg-red-500' },
      { name: 'Mentoring', color: 'bg-red-600' },
      { name: 'Agile', color: 'bg-red-700' },
      { name: 'Scrum', color: 'bg-red-400' },
      { name: 'Project Management', color: 'bg-red-500' },

      // Additional Technologies
      { name: 'Docker', color: 'bg-indigo-500' },
      { name: 'TailwindCSS', color: 'bg-indigo-600' },
      { name: 'HTML5', color: 'bg-indigo-700' },
      { name: 'JavaScript', color: 'bg-indigo-400' },
      { name: 'Phaser.js', color: 'bg-indigo-500' },
      { name: 'Pixi.js', color: 'bg-indigo-600' },
      { name: 'PWA', color: 'bg-indigo-700' },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Add a new badge
      if (activeBadges.length < 6) {
        const randomSkill =
          allSkills[Math.floor(Math.random() * allSkills.length)];
        const newBadge: SkillBadge = {
          id: `badge-${badgeId}`,
          name: randomSkill.name,
          color: randomSkill.color,
          delay: Math.random() * 1000,
        };

        setActiveBadges(prev => [...prev, newBadge]);
        setBadgeId(prev => prev + 1);
      } else {
        // Remove the oldest badge and add a new one
        const randomSkill =
          allSkills[Math.floor(Math.random() * allSkills.length)];
        const newBadge: SkillBadge = {
          id: `badge-${badgeId}`,
          name: randomSkill.name,
          color: randomSkill.color,
          delay: Math.random() * 1000,
        };

        setActiveBadges(prev => {
          const updated = [...prev.slice(1), newBadge];
          return updated;
        });
        setBadgeId(prev => prev + 1);
      }
    }, 2000); // Change badges every 2 seconds

    return () => clearInterval(interval);
  }, [activeBadges.length, badgeId, allSkills]);

  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
      {activeBadges.map((badge, index) => (
        <div
          key={badge.id}
          className={`absolute ${badge.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg transform transition-all duration-1000 ease-in-out animate-pulse`}
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 12}%`,
            animationDelay: `${badge.delay}ms`,
            transform: 'scale(0.8)',
            animation: 'badgeAnimation 3s ease-in-out infinite',
          }}
        >
          {badge.name}
        </div>
      ))}
    </div>
  );
};

export default InteractiveSkillBadges;
