import { Heart, Phone, Mail, MapPin, Award, Clock, DollarSign, CheckCircle, User, MessageCircle, Calendar, Star, CreditCard, Shield, TrendingUp, Zap } from 'react-feather';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import SectionHeader from '../components/SectionHeader';
import Testimonial from '../components/Testimonial';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <Hero
        title={
          <>
            <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
              Naomi's
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Speech Therapy
            </span>
          </>
        }
        description="Specialized Cleft Palate Speech Therapy"
        badge={
          <>
            <Star className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="font-medium">Transform Your Communication Journey</span>
          </>
        }
        badges={[
          <>
            <Award className="w-5 h-5 mr-2 text-yellow-300" />
            <span>ASHA Certified SLP</span>
          </>,
          <>
            <Shield className="w-5 h-5 mr-2 text-green-300" />
            <span>State Licensed</span>
          </>,
          <>
            <Star className="w-5 h-5 mr-2 text-blue-300" />
            <span>ACPA Team Member</span>
          </>
        ]}
        actions={[
          <Button
            key="consultation"
            as={Link}
            to="/contact"
            variant="gradient"
            size="lg"
            icon={<Calendar className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Schedule Free Consultation
          </Button>,
          <Button
            key="treatment"
            as={Link}
            to="/therapy"
            variant="outline"
            size="lg"
            icon={<TrendingUp className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Learn About Treatment
          </Button>
        ]}
      />

      <main className="relative">
        <Container>
          <Section>
            <div className="text-center mb-16">
              <Card gradient padding="xl" className="mb-8">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 px-4 sm:px-0">
                  Expert Cleft Palate Speech Therapy
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
                  Naomi, M.S., CCC-SLP brings over 10 years of specialized experience in cleft palate speech therapy. 
                  As a certified Speech-Language Pathologist and member of the American Cleft Palate-Craniofacial Association, 
                  I provide evidence-based treatment to help individuals achieve clear, confident communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    as={Link}
                    to="/therapy"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Download Treatment Guide
                  </Button>
                </div>
              </Card>
            </div>
          </Section>

          <Section>
            <SectionHeader
              badge={
                <>
                  <Zap className="w-4 h-4 mr-2 text-teal-600" />
                  <span className="text-sm font-medium text-teal-800">Professional Services</span>
                </>
              }
              title="Specialized Services & Pricing"
              subtitle="Transparent pricing for comprehensive cleft palate speech therapy services"
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <ServiceCard
                icon={<Clock className="w-8 h-8 text-white" />}
                title="Comprehensive Evaluation"
                description="60-90 minute assessment including speech analysis, oral mechanism exam, and treatment planning"
                price="$425"
                features={[
                  "Perceptual speech assessment",
                  "Nasometry testing available",
                  "Detailed written report",
                  "Treatment recommendations",
                  "Insurance verification included"
                ]}
                buttonText="Book Evaluation"
                onButtonClick={() => window.location.href = '/contact'}
                gradient="from-teal-500 to-blue-600"
              />
              <ServiceCard
                icon={<MessageCircle className="w-8 h-8 text-white" />}
                title="Individual Therapy"
                description="One-on-one sessions tailored to your specific speech goals and needs"
                price="$175/session"
                features={[
                  "45-minute sessions",
                  "Articulation therapy",
                  "Resonance management",
                  "Home practice materials",
                  "Progress tracking"
                ]}
                buttonText="Start Therapy"
                onButtonClick={() => window.location.href = '/contact'}
                gradient="from-blue-500 to-purple-600"
              />
              <ServiceCard
                icon={<Heart className="w-8 h-8 text-white" />}
                title="Family Training"
                description="Parent/caregiver education and home program development"
                price="$150/session"
                features={[
                  "Parent coaching techniques",
                  "Home exercise programs",
                  "Progress monitoring tools",
                  "Resource materials",
                  "Follow-up support"
                ]}
                buttonText="Learn More"
                onButtonClick={() => window.location.href = '/about'}
                gradient="from-purple-500 to-pink-600"
              />
            </div>
          </Section>

        <section className="bg-white rounded-2xl shadow-xl p-12 mb-20 border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-blue-50/30"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Treatment Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Initial Assessment</h4>
                <p className="text-sm text-gray-600">Comprehensive evaluation of speech patterns and oral function</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Treatment Planning</h4>
                <p className="text-sm text-gray-600">Individualized therapy plan based on specific needs and goals</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Active Treatment</h4>
                <p className="text-sm text-gray-600">Evidence-based therapy techniques with regular progress monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Ongoing Support</h4>
                <p className="text-sm text-gray-600">Maintenance therapy and family training for long-term success</p>
              </div>
            </div>
          </div>
        </section>

          <Section>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <Card hover padding="lg" className="hover:border-teal-200">
                <h3 className="text-2xl font-bold text-teal-700 mb-6">What Our Families Say</h3>
                <div className="space-y-6">
                  <Testimonial
                    quote="Naomi's expertise in cleft palate therapy transformed our daughter's speech. Her patience and specialized techniques made all the difference."
                    author="Sarah M., Parent"
                    variant="highlight"
                  />
                  <Testimonial
                    quote="Professional, caring, and incredibly knowledgeable. We saw improvement within weeks of starting therapy."
                    author="Michael T., Parent"
                    variant="highlight"
                  />
                  <Testimonial
                    quote="The home program and family training were invaluable. Naomi equipped us with tools for continued success."
                    author="Jennifer L., Parent"
                    variant="highlight"
                  />
                </div>
              </Card>

              <Card hover padding="lg" className="hover:border-blue-200">
                <h3 className="text-2xl font-bold text-teal-700 mb-6">Insurance & Payment</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Insurance Accepted</h4>
                      <p className="text-sm text-gray-600">Most major insurance plans cover speech therapy for cleft palate</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Flexible Payment Options</h4>
                      <p className="text-sm text-gray-600">Payment plans available • HSA/FSA accepted</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Transparent Pricing</h4>
                      <p className="text-sm text-gray-600">No hidden fees • Insurance verification provided</p>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-teal-800 font-semibold">Free 15-minute consultation call to discuss your needs and insurance coverage</p>
                  </div>
                </div>
              </Card>
            </div>
          </Section>

        <section className="bg-white rounded-2xl shadow-xl p-12 mb-20 border border-gray-100">
          <h3 className="text-2xl font-bold text-teal-700 mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">When should my child start speech therapy?</h4>
              <p className="text-gray-600 text-sm mb-4">Speech therapy should begin as soon as possible after cleft repair surgery, typically around 12-18 months. Early intervention leads to better outcomes.</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">How long does treatment typically take?</h4>
              <p className="text-gray-600 text-sm mb-4">Treatment duration varies based on individual needs, but most clients see significant improvement within 6-12 months of consistent therapy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Do you work with surgeons and other specialists?</h4>
              <p className="text-gray-600 text-sm mb-4">Yes, I collaborate closely with cleft teams, surgeons, and other healthcare providers to ensure comprehensive care.</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">Is telehealth available?</h4>
              <p className="text-gray-600 text-sm mb-4">Yes, I offer telehealth sessions for certain treatments and follow-up appointments, providing convenient access to care.</p>
            </div>
          </div>
        </section>

          <Section>
            <Card className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 text-white relative overflow-hidden shadow-2xl" padding="xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce"></div>
              </div>
              <div className="relative text-center">
                <div className="inline-flex p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
                  <Calendar className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 px-4 sm:px-0">Ready to Begin Your Journey?</h3>
                <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto px-4 sm:px-0">
                  Don't wait to address speech concerns. Early intervention provides the best outcomes. 
                  Schedule your free consultation today and take the first step toward clearer communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="white"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Call (555) 123-4567
                  </Button>
                  <Button
                    as={Link}
                    to="/contact"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Request Consultation
                  </Button>
                </div>
                <p className="text-sm mt-4 opacity-90">Most insurance plans accepted • Free insurance verification</p>
              </div>
            </Card>
          </Section>

          <Section>
            <Card padding="xl">
              <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-teal-600 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-xs text-gray-500 mt-1">24/7 voicemail available</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-teal-600 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">naomi@speechtherapy.com</p>
                  <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-teal-600 mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">123 Healthcare Plaza<br/>Suite 200</p>
                  <p className="text-xs text-gray-500 mt-1">Free parking available</p>
                </div>
              </div>
            </Card>
          </Section>
        </Container>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold mb-3">Naomi, M.S., CCC-SLP</h4>
              <p className="text-gray-400 text-sm">Licensed Speech-Language Pathologist</p>
              <p className="text-gray-400 text-sm">State License #SLP12345</p>
              <p className="text-gray-400 text-sm">ASHA Member #123456789</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <p className="text-gray-400 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-gray-400 text-sm">Sunday: Closed</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Emergency Contact</h4>
              <p className="text-gray-400 text-sm">For urgent concerns outside office hours:</p>
              <p className="text-gray-400 text-sm">(555) 123-4567 (voicemail monitored)</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p>&copy; 2024 Naomi's Speech Therapy. All rights reserved.</p>
            <p className="text-gray-400 mt-2 text-sm">Specialized Cleft Palate Speech Therapy Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;