'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useSpotify } from '@/hooks/useSpotify';
import Layout from '@/components/layout';
import { useGitHub } from '@/hooks/useGithub';
import GitHubContributionsGraph from '@/app/about/githubActivity';
import SpotifyPlaylists from '@/app/about/spotifyPlaylists';
import Link from 'next/link';

export default function About() {
  const starsRef = useRef<HTMLDivElement>(null);
  const {
    playlists,
    isLoading: spotifyLoading,
    error: spotifyError,
    topTracks
  } = useSpotify();

  const {
    githubData,
    isLoading: githubLoading,
    error: githubError
  } = useGitHub();

  useEffect(() => {
    // Animate stars
    if (!starsRef.current) return;
    gsap.to(starsRef.current?.children, {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-360, 360)',
      duration: 3,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#A2CFFE] to-yellow-200">
      <Layout title="I'm Affan" center>
        <div className="relative min-h-screen">
          <div ref={starsRef}>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col gap-10">
                <div className="relative">
                  <div className="rounded-full blur-3xl" />
                  <Image
                    className="relative z-10 mx-auto h-auto w-full max-w-sm rounded-t-full shadow-lg"
                    width={1440}
                    height={1800}
                    src="/images/profile-about.jpg"
                    alt="Profile picture"
                  />
                </div>
                {spotifyLoading ? (
                  <div></div>
                ) : spotifyError ? (
                  <div></div>
                ) : playlists && playlists.length > 0 ? (
                  <SpotifyPlaylists playlists={playlists} />
                ) : null}
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-primary-950/70 dark:text-primary-200/70 space-y-8">
                  <p className="text-2xl font-semibold">
                    Product Marketer and Technical Marketing Manager with 6 years of B2B experience and a Computer Science engineering background. MBA in Business Analytics.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Currently Technical Marketing Manager for HPE Private Cloud AI, leading field enablement and technical content across the mid-funnel. I build and present product demos at NVIDIA GTC and other industry events.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Previously led 0-to-1 go-to-market strategy for two B2B AI products, owning ABM, ICP definition, positioning, messaging, competitive intelligence, sales enablement, and demand generation.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Recognized with 7 American Advertising Awards (ADDYs 2024, Fort Worth) for performance marketing, campaign optimization, and creative execution.
                  </p>
                  <p className="text-lg sm:text-xl">
                    Orchestrated agentic systems on reasoning models (Claude Opus 4.7, Grok 4, GPT-5.4) using LangChain in Python, wired into Pendo, Gong, Fathom, Clay, and Apollo. Reporting layer in Power BI and Tableau. Deployed on Supabase and Railway. Shipped production code alongside engineering and product.
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="flex flex-col gap-10 pt-10"
              href="https://github.com/affansyed321"
            >
              {githubLoading ? (
                <div></div>
              ) : githubError ? (
                <div></div>
              ) : githubData ? (
                <GitHubContributionsGraph
                  contributions={githubData.contributions}
                  totalContributions={githubData.totalContributions}
                  restrictedContributions={githubData.restrictedContributions}
                />
              ) : null}
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
