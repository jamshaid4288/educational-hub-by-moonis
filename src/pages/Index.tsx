import { Book, TestTube, Phone, Mail, Atom, GraduationCap, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Profile Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Avatar className="mx-auto w-32 h-32 mb-6 border-4 border-purple-500">
          <AvatarImage 
            src="/lovable-uploads/30c91fa7-b510-431d-9b88-9f28593f6b86.png" 
            alt="Tutor Profile" 
            className="object-cover"
          />
          <AvatarFallback>
            <UserRound className="w-16 h-16 text-purple-400" />
          </AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold text-white mb-2">Online Study Classes</h2>
        <p className="text-xl text-blue-100 mb-4">Chemistry & Biology Courses Now Available</p>
      
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Online Educational Hub
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Expert Chemistry & Biology Tutoring
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Atom className="mr-2" /> Start Learning
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              <Phone className="mr-2" /> Contact Us
            </Button>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chemistry Card */}
            <Card className="p-6 bg-white/10 backdrop-blur border-purple-500/50">
              <div className="flex items-center mb-4">
                <TestTube className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Chemistry</h2>
              </div>
              <ul className="text-blue-100 space-y-2">
                <li>• Atomic Structure & Bonding</li>
                <li>• Chemical Reactions</li>
                <li>• Organic Chemistry</li>
                <li>• Redox Reactions</li>
              </ul>
            </Card>

            {/* Biology Card */}
            <Card className="p-6 bg-white/10 backdrop-blur border-purple-500/50">
              <div className="flex items-center mb-4">
                <Book className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Biology</h2>
              </div>
              <ul className="text-blue-100 space-y-2">
                <li>• Cell Structure & Function</li>
                <li>• Genetics & Evolution</li>
                <li>• Human Anatomy</li>
                <li>• Ecological Systems</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose Our Educational Hub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="flex justify-center gap-8">
            <a href="tel:0313-9521892" className="flex items-center text-white hover:text-purple-400">
              <Phone className="mr-2" /> 0313-9521892
            </a>
            <a href="mailto:contact@educationalhub.com" className="flex items-center text-white hover:text-purple-400">
              <Mail className="mr-2" /> contact@educationalhub.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
    title: "Expert Tutors",
    description: "Learn from experienced educators specialized in Biology and Chemistry"
  },
  {
    icon: <Atom className="w-8 h-8 text-purple-400" />,
    title: "Interactive Learning",
    description: "Engage with dynamic content and real-world examples"
  },
  {
    icon: <Book className="w-8 h-8 text-purple-400" />,
    title: "Comprehensive Support",
    description: "Get help with assignments, exam prep, and concepts"
  }
];

export default Index;
