type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Eco Footprint Tracker',
    description:
      'A comprehensive solution website to help Australian household to reduce gas emission and save energy',
    link: 'https://eco-footprint-tracker.vercel.app/',
    video:
      'https://lelabezprw18twf9.public.blob.vercel-storage.com/Loom%20_%20Free%20Screen%20%26%20Video%20Recording%20Software%20-%2025%20March%202025-9R8oAQQYoExfV4bBjQ2tuC2z4EhnmJ.mp4',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Space Invader',
    description: 'A classic and most widely known game: Space Invaders.',
    link: 'https://space-invader-lime.vercel.app/',
    video:
      'https://lelabezprw18twf9.public.blob.vercel-storage.com/space%20invader%20video-MWTyDJw0KTHb7L7ttTyAVzi2QAEuSo.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Learnhall',
    title: 'Full Stack Developer',
    start: '2024',
    end: '2025',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Monash Uni',
    title: 'Full Stack Developer',
    start: '2024',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Power Smart',
    title: 'Software Engineer Intern',
    start: '2022',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
//   {
//     title: 'Why I left my job to start my own company',
//     description:
//       'A deep dive into my decision to leave my job and start my own company',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-2',
//   },
//   {
//     title: 'What I learned from my first year of freelancing',
//     description:
//       'A look back at my first year of freelancing and what I learned',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-3',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/JunyIIIChen',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/junyi-chen-b7a423245/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/cjy799255537/profilecard/?igsh=MXI1dDlzMWs4aTFkZQ==',
  },
]

export const EMAIL = 'cjy799255537@gmail.com'
