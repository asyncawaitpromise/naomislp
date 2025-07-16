import { Award, BookOpen, Users, Heart, Star, Shield, Briefcase, Clock, Target, CheckCircle } from 'react-feather';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const achievements = [
    { icon: Award, title: "10+ Years Experience", description: "Specialized in cleft palate speech therapy" },
    { icon: BookOpen, title: "Advanced Training", description: "Continuous education in latest treatment methods" },
    { icon: Users, title: "500+ Families Helped", description: "Successful outcomes across all age groups" },
    { icon: Heart, title: "Compassionate Care", description: "Family-centered approach to treatment" }
  ];

  const certifications = [
    "Master of Science in Speech-Language Pathology",
    "Certificate of Clinical Competence (CCC-SLP)",
    "American Speech-Language-Hearing Association Member",
    "American Cleft Palate-Craniofacial Association Member",
    "State Licensed Speech-Language Pathologist",
    "Continuing Education: Cleft Palate Speech Therapy"
  ];

  const expertise = [
    { area: "Articulation Disorders", level: 95 },
    { area: "Resonance Management", level: 98 },
    { area: "Oral-Motor Therapy", level: 90 },
    { area: "Family Training", level: 92 },
    { area: "Pre/Post Surgical Care", level: 88 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Hero
        title={
          <>
            Meet 
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Naomi</span>
          </>
        }
        description="A passionate advocate for clear communication, specializing in transforming the lives of individuals with cleft palate through evidence-based speech therapy."
        badge={
          <>
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Expert Speech-Language Pathologist</span>
          </>
        }
        badges={[
          <>
            <Shield className="w-5 h-5 mr-2" />
            <span>Licensed Professional</span>
          </>,
          <>
            <Users className="w-5 h-5 mr-2" />
            <span>500+ Families Served</span>
          </>,
          <>
            <Clock className="w-5 h-5 mr-2" />
            <span>10+ Years Experience</span>
          </>
        ]}
      />

      <Container>
        <div className="py-16">
        {/* Professional Journey */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic excellence to specialized practice, discover the path that led to expertise in cleft palate speech therapy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Educational Foundation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Earned Master of Science in Speech-Language Pathology with specialization in craniofacial anomalies. 
                      Graduated summa cum laude with extensive clinical training in pediatric speech disorders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Clinical Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Developed specialized skills through work with leading cleft palate teams. Trained in advanced 
                      assessment techniques including nasometry and collaborated with top surgeons and orthodontists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Private Practice</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Founded private practice to provide personalized, family-centered care. Focus on building strong 
                      relationships with families and creating individualized treatment plans for optimal outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Expertise</h3>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{item.area}</span>
                      <span className="text-sm font-bold text-teal-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Achievements</h2>
            <p className="text-xl text-gray-600">Recognition and milestones in specialized speech therapy practice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group-hover:border-teal-300 h-full">
                    <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Credentials & Certifications</h2>
              <p className="text-xl text-gray-600">Professional qualifications ensuring the highest standard of care</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg hover:from-teal-100 hover:to-blue-100 transition-all duration-300">
                  <div className="p-2 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <Target className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h2 className="text-4xl font-bold mb-4">Treatment Philosophy</h2>
                <p className="text-xl text-blue-100">The principles that guide every therapy session</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Family-Centered Care</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Every treatment plan is developed with the family at the center, recognizing that parents and caregivers 
                    are essential partners in the therapeutic process.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Evidence-Based Practice</h3>
                  <p className="text-blue-100 leading-relaxed">
                    All interventions are grounded in the latest research and proven methodologies, ensuring the most 
                    effective treatment approaches for each individual.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">Individualized Approach</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Understanding that every person with cleft palate is unique, treatment plans are carefully tailored 
                    to meet specific needs, goals, and circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section>
          <Card padding="xl" className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Experience the difference that specialized expertise and compassionate care can make. 
              Schedule your consultation today and take the first step toward clearer communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Download Credentials
              </Button>
            </div>
          </Card>
        </Section>
        </div>
      </Container>
    </div>
  );
};

export default About;