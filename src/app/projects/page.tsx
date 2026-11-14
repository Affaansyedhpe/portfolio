'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

type Experience = {
  title: string;
  company: string;
  tag: string;
  color: string;
  location?: string;
  duration?: string;
  details?: string[];
};

const experiences: Experience[] = [
  {
    title: 'Technical Marketing Manager',
    company: 'Hewlett Packard Enterprise · HPE Private Cloud AI',
    tag: 'AI Infrastructure',
    color: '#01A982',
    details: [
      'Lead field enablement and technical content across the mid-funnel for HPE Private Cloud AI, equipping sellers and partners to position private AI infrastructure with enterprise buyers.',
      'Build and present live product demos at NVIDIA GTC and other industry events.',
      'Co-presented HPE and Equinix at AI Infrastructure Field Day 6 with Elias Alagna and Jason Lee, introducing a framework for AI tokenomics: make every token count, pay less per token, and govern every token.',
      'Authored "Stop counting tokens, start counting what ships" in MIT Technology Review, on measuring agentic AI by what reaches production rather than by token spend.'
    ]
  }
];

export default function ProjectsHome() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Layout title={"Where I Work"}>
      <div className="m-0">
        <div className="m-0 overflow-hidden">
          {experiences.map((experience, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index}>
                <div onClick={() => toggleExpanded(index)}>
                  <ProjectLink
                    index={index}
                    title={experience.title}
                    tag={experience.tag}
                    company={experience.company}
                    location={experience.location}
                    duration={experience.duration}
                    clickable={!!experience.details}
                  />
                </div>
                {isExpanded && experience.details && (
                  <div className="border-b border-b-gray-600 px-5 pb-8 pt-4">
                    <ul className="ml-4 space-y-3">
                      {experience.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-black lg:text-base">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
