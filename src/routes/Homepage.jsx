import { Heart, Phone, Mail, MapPin, Award, Clock, DollarSign, CheckCircle, User, MessageCircle, Calendar, Star, CreditCard, Shield, Sparkles, TrendingUp, Zap } from 'react-feather';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Hero Section with enhanced design */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="font-medium">Transform Your Communication Journey</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
              Naomi's
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Speech Therapy
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            Specialized Cleft Palate Speech Therapy
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <Award className="w-5 h-5 mr-2 text-yellow-300" />
              <span>ASHA Certified SLP</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <Shield className="w-5 h-5 mr-2 text-green-300" />
              <span>State Licensed</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <Star className="w-5 h-5 mr-2 text-blue-300" />
              <span>ACPA Team Member</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-400">
            <Link
              to="/contact"
              className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Schedule Free Consultation
              </span>
            </Link>
            <Link
              to="/therapy"
              className="px-10 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-teal-700 transform hover:scale-105 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Learn About Treatment
              </span>
            </Link>
          </div>
        </div>
      </section>

      <main className="relative max-w-6xl mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-blue-50/30"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-16 h-16 text-teal-600" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Expert Cleft Palate Speech Therapy
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Naomi, M.S., CCC-SLP brings over 10 years of specialized experience in cleft palate speech therapy. 
                As a certified Speech-Language Pathologist and member of the American Cleft Palate-Craniofacial Association, 
                I provide evidence-based treatment to help individuals achieve clear, confident communication.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-teal-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 mr-4 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/therapy"
                className="inline-block border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Download Treatment Guide
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-4">
              <Zap className="w-4 h-4 mr-2 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">Professional Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Specialized Services & Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transparent pricing for comprehensive cleft palate speech therapy services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-teal-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Evaluation</h3>
                <p className="text-gray-600 mb-4">60-90 minute assessment including speech analysis, oral mechanism exam, and treatment planning</p>
                <div className="text-2xl font-bold text-teal-700 mb-4">$425</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Perceptual speech assessment</li>
                  <li>• Nasometry testing available</li>
                  <li>• Detailed written report</li>
                  <li>• Treatment recommendations</li>
                  <li>• Insurance verification included</li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-teal-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-teal-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                >
                  Book Evaluation
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Individual Therapy</h3>
                <p className="text-gray-600 mb-4">One-on-one sessions tailored to your specific speech goals and needs</p>
                <div className="text-2xl font-bold text-blue-700 mb-4">$175/session</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• 45-minute sessions</li>
                  <li>• Articulation therapy</li>
                  <li>• Resonance management</li>
                  <li>• Home practice materials</li>
                  <li>• Progress tracking</li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                >
                  Start Therapy
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-purple-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Family Training</h3>
                <p className="text-gray-600 mb-4">Parent/caregiver education and home program development</p>
                <div className="text-2xl font-bold text-purple-700 mb-4">$150/session</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Parent coaching techniques</li>
                  <li>• Home exercise programs</li>
                  <li>• Progress monitoring tools</li>
                  <li>• Resource materials</li>
                  <li>• Follow-up support</li>
                </ul>
                <Link
                  to="/about"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-700 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-800 transform hover:scale-105 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

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

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-teal-200">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">What Our Families Say</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-gradient-to-b from-teal-500 to-blue-600 pl-6 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-r-lg p-4 hover:from-teal-100/50 hover:to-blue-100/50 transition-all duration-300">
                <p className="text-gray-600 italic mb-2">"Naomi's expertise in cleft palate therapy transformed our daughter's speech. Her patience and specialized techniques made all the difference."</p>
                <p className="text-sm font-semibold text-gray-800">- Sarah M., Parent</p>
              </div>
              <div className="border-l-4 border-gradient-to-b from-teal-500 to-blue-600 pl-6 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-r-lg p-4 hover:from-teal-100/50 hover:to-blue-100/50 transition-all duration-300">
                <p className="text-gray-600 italic mb-2">"Professional, caring, and incredibly knowledgeable. We saw improvement within weeks of starting therapy."</p>
                <p className="text-sm font-semibold text-gray-800">- Michael T., Parent</p>
              </div>
              <div className="border-l-4 border-gradient-to-b from-teal-500 to-blue-600 pl-6 bg-gradient-to-r from-teal-50/50 to-blue-50/50 rounded-r-lg p-4 hover:from-teal-100/50 hover:to-blue-100/50 transition-all duration-300">
                <p className="text-gray-600 italic mb-2">"The home program and family training were invaluable. Naomi equipped us with tools for continued success."</p>
                <p className="text-sm font-semibold text-gray-800">- Jennifer L., Parent</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Insurance & Payment</h3>
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
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 text-white rounded-2xl p-12 mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce"></div>
          </div>
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
                <Calendar className="w-12 h-12 text-yellow-300" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                Don't wait to address speech concerns. Early intervention provides the best outcomes. 
                Schedule your free consultation today and take the first step toward clearer communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Call (555) 123-4567
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-teal-700 transform hover:scale-105 transition-all duration-300"
                >
                  Request Consultation
                </Link>
              </div>
              <p className="text-sm mt-4 opacity-90">Most insurance plans accepted • Free insurance verification</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
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
        </section>
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