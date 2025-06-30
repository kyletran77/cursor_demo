import { Solution, Product, ProductCategory, Leader, BusinessSegment, CompanyValue, Benefit } from '../types';

export const solutions: Solution[] = [
  {
    title: 'Enterprise Software',
    description: 'Distributed, SaaS, and security solutions to plan, develop, test, secure, release, monitor, and manage enterprise digital services.',
    icon: 'ES',
    color: 'var(--broadcom-red)',
    features: [
      'DevOps & Continuous Delivery',
      'Application Performance Monitoring',
      'API Management & Security',
      'Test Automation & Quality',
      'IT Service Management'
    ],
    products: ['CA Workload Automation', 'CA API Gateway', 'CA Application Performance Management', 'CA Test Data Manager']
  },
  {
    title: 'Mainframe Software',
    description: 'Comprehensive mainframe software including automation, management, DevOps, and security for mission-critical systems.',
    icon: 'MF',
    color: 'var(--broadcom-blue)',
    features: [
      'Workload Automation',
      'Database Management',
      'Security & Compliance',
      'Performance Optimization',
      'DevOps Integration'
    ],
    products: ['CA 7 Workload Automation', 'CA IDMS', 'CA Top Secret', 'CA SYSVIEW Performance Management']
  },
  {
    title: 'VMware Solutions',
    description: 'VMware Cloud Foundation and infrastructure software for software-defined data centers and hybrid cloud environments.',
    icon: 'VM',
    color: '#607078',
    features: [
      'Cloud Infrastructure',
      'Virtualization Platform',
      'Networking & Security',
      'Container Management',
      'Hybrid Cloud Operations'
    ],
    products: ['VMware vSphere', 'VMware NSX', 'VMware vSAN', 'VMware Tanzu']
  }
];

export const featuredProducts: Product[] = [
  {
    name: 'CA Workload Automation DE',
    category: 'Automation',
    categoryColor: 'var(--broadcom-red)',
    description: 'Comprehensive workload automation solution for managing complex business processes across distributed environments.',
    features: ['Cross-platform Support', 'Event-driven Scheduling', 'REST API', 'Scalable Architecture'],
    benefits: ['Reduced Downtime', 'Improved Efficiency', 'Cost Savings', 'Compliance']
  },
  {
    name: 'VMware vSphere',
    category: 'Virtualization',
    categoryColor: '#607078',
    description: 'Industry-leading virtualization platform that transforms data centers into simplified cloud computing infrastructures.',
    features: ['High Availability', 'Resource Management', 'Security', 'Performance Optimization'],
    benefits: ['Hardware Efficiency', 'Flexibility', 'Disaster Recovery', 'Security']
  },
  {
    name: 'Symantec Endpoint Security',
    category: 'Security',
    categoryColor: '#28a745',
    description: 'Advanced threat protection that combines multiple layers of protection to secure endpoints against sophisticated attacks.',
    features: ['Machine Learning', 'Behavioral Analysis', 'Cloud Management', 'Zero-day Protection'],
    benefits: ['Threat Prevention', 'Compliance', 'Centralized Management', 'Fast Response']
  },
  {
    name: 'CA API Gateway',
    category: 'API Management',
    categoryColor: 'var(--broadcom-blue)',
    description: 'Secure, manage, and monitor APIs across your enterprise with comprehensive gateway capabilities.',
    features: ['API Security', 'Rate Limiting', 'Analytics', 'Developer Portal'],
    benefits: ['API Security', 'Developer Productivity', 'Operational Visibility', 'Scalability']
  }
];

export const homePageSolutions: Solution[] = [
  {
    title: 'Enterprise Software',
    description: 'Comprehensive distributed software solutions for modern enterprises including DevOps, automation, and management tools.',
    icon: 'ES',
    color: 'var(--broadcom-red)',
    features: [],
    products: []
  },
  {
    title: 'Mainframe Software',
    description: 'Complete mainframe solutions including automation, management, DevOps, and security for mission-critical systems.',
    icon: 'MF',
    color: 'var(--broadcom-blue)',
    features: [],
    products: []
  },
  {
    title: 'Security Solutions',
    description: 'Integrated cyber defense solutions providing comprehensive threat protection and compliance for enterprises.',
    icon: 'SEC',
    color: '#28a745',
    features: [],
    products: []
  }
];

export const productCategories: ProductCategory[] = [
  {
    name: 'Enterprise Software',
    description: 'Comprehensive distributed software solutions for modern enterprises.',
    icon: 'ES',
    color: 'var(--broadcom-red)',
    productCount: 25
  },
  {
    name: 'Mainframe Software',
    description: 'Mission-critical mainframe solutions for automation and management.',
    icon: 'MF',
    color: 'var(--broadcom-blue)',
    productCount: 18
  },
  {
    name: 'Security Solutions',
    description: 'Advanced cybersecurity and threat protection technologies.',
    icon: 'SEC',
    color: '#28a745',
    productCount: 12
  }
];

export const leadership: Leader[] = [
  {
    name: 'Hock E. Tan',
    title: 'President and CEO',
    initials: 'HT',
    bio: 'Leading Broadcom\'s strategic vision and global operations since 2006, driving innovation in semiconductor and infrastructure software solutions.'
  },
  {
    name: 'Kirsten Spears',
    title: 'Chief Financial Officer',
    initials: 'KS',
    bio: 'Overseeing financial strategy, investor relations, and corporate development to support Broadcom\'s continued growth and market leadership.'
  },
  {
    name: 'Mark Brazeal',
    title: 'Chief Operating Officer',
    initials: 'MB',
    bio: 'Managing global operations, supply chain, and manufacturing to ensure efficient delivery of Broadcom\'s diverse product portfolio.'
  }
];

export const businessSegments: BusinessSegment[] = [
  {
    name: 'Semiconductor Solutions',
    description: 'Leading provider of analog and digital semiconductor solutions for wired and wireless communications, data center networking, and industrial applications.',
    icon: 'SEMI',
    color: 'var(--broadcom-red)',
    products: [
      'Broadband Access Chips',
      'Wireless Connectivity Solutions',
      'Data Center Networking ASICs',
      'Storage Adapters & Controllers',
      'Fiber Optic Components'
    ]
  },
  {
    name: 'Infrastructure Software',
    description: 'Comprehensive software solutions for enterprise environments including mainframe, distributed systems, and security applications.',
    icon: 'SOFT',
    color: 'var(--broadcom-blue)',
    products: [
      'CA Enterprise Software',
      'Mainframe Software Solutions',
      'VMware Cloud Infrastructure',
      'Symantec Security Products',
      'API Management & Integration'
    ]
  }
];

export const companyValues: CompanyValue[] = [
  {
    title: 'Innovation',
    description: 'Continuously pushing the boundaries of technology to create solutions that transform industries.',
    icon: '💡'
  },
  {
    title: 'Excellence',
    description: 'Delivering the highest quality products and services that exceed customer expectations.',
    icon: '⭐'
  },
  {
    title: 'Integrity',
    description: 'Operating with honesty, transparency, and ethical business practices in all our interactions.',
    icon: '🤝'
  },
  {
    title: 'Collaboration',
    description: 'Working together across teams, disciplines, and borders to achieve common goals.',
    icon: '🤝'
  }
];

export const benefits: Benefit[] = [
  {
    title: 'Proven Enterprise Scale',
    description: 'Trusted by 95% of Fortune 100 companies to run their most critical business processes and infrastructure.',
    icon: '🏢'
  },
  {
    title: 'Comprehensive Integration',
    description: 'Seamlessly integrate across hybrid environments with support for mainframe, distributed, and cloud platforms.',
    icon: '🔗'
  },
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade security features with comprehensive threat protection and compliance capabilities.',
    icon: '🔒'
  },
  {
    title: 'Innovation Leadership',
    description: 'Continuous innovation with AI-powered capabilities, automation, and modern development practices.',
    icon: '💡'
  }
]; 