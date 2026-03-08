import { Users, MessageCircle, Github, Twitter, Mail, Heart, Star, GitBranch, Award } from 'lucide-react'
import PageSEO from '../components/PageSEO'

const CommunityPage = () => {
  const waysToContribute = [
    {
      icon: Github,
      title: 'Code Contributions',
      description: 'Help improve Vyom by submitting pull requests, fixing bugs, or adding new features.',
      link: 'https://github.com/Gabrial-8467/vyom',
      linkText: 'View on GitHub'
    },
    {
      icon: MessageCircle,
      title: 'Community Discussions',
      description: 'Join our discussions, ask questions, and share your experience with Vyom.',
      link: 'https://github.com/Gabrial-8467/vyom/discussions',
      linkText: 'Join Discussions'
    },
    {
      icon: Mail,
      title: 'Report Issues',
      description: 'Found a bug or have a suggestion? Help us improve by reporting issues.',
      link: 'https://github.com/Gabrial-8467/vyom/issues',
      linkText: 'Report an Issue'
    },
    {
      icon: Award,
      title: 'Spread the Word',
      description: 'Share Vyom with your network, write blog posts, or create tutorials.',
      link: '#',
      linkText: 'Learn More'
    }
  ]

  const communityGuidelines = [
    'Be respectful and inclusive to all community members',
    'Stay on topic and keep discussions constructive',
    'Help others learn and grow with Vyom',
    'Follow the code of conduct in all interactions',
    'Contribute meaningfully to discussions and projects'
  ]

  return (
    <>
      <PageSEO
        title="Community - Join the Vyom Programming Language Community"
        description="Connect with the Vyom community. Contribute to the project, join discussions, and help shape the future of this modern programming language."
        keywords="Vyom community, Vyom programming language community, open source contribution, Vyom GitHub, Vyom discussions"
        canonicalUrl="/community"
      />
      
      <div className="min-h-screen bg-gray-900 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-xl mr-4">
                <Users className="text-orange-500" size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the growing Vyom community. Connect with developers, contribute to the project, 
              and help shape the future of this modern programming language.
            </p>
          </div>

          {/* Ways to Contribute */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Ways to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {waysToContribute.map((way, index) => (
                <div key={way.title} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4">
                      <way.icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{way.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{way.description}</p>
                  <a
                    href={way.link}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors" 
                target="_blank"
                  >
                    {way.linkText}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30 animate-fadeInUp max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Heart className="text-orange-500 mr-3" size={28} />
                Community Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communityGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-12 border border-orange-500/30 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community today and be part of the future of programming languages.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Gabrial-8467/vyom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300 hover-lift"
              >
                <Github className="mr-2" size={24} />
                Join on GitHub
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityPage
