import { Heart, Phone, Mail, MapPin, Award, Clock, DollarSign, CheckCircle, User, MessageCircle, Calendar, Star, CreditCard, Shield } from 'react-feather';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-teal-700 mb-2">Naomi's Speech Therapy</h1>
            <p className="text-xl text-gray-600 mb-2">Specialized Cleft Palate Speech Therapy</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><Award className="w-4 h-4 mr-1" />ASHA Certified SLP</span>
              <span className="flex items-center"><Shield className="w-4 h-4 mr-1" />State Licensed</span>
              <span className="flex items-center"><Star className="w-4 h-4 mr-1" />ACPA Team Member</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Expert Cleft Palate Speech Therapy
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
              Naomi Johnson, M.S., CCC-SLP brings over 10 years of specialized experience in cleft palate speech therapy. 
              As a certified Speech-Language Pathologist and member of the American Cleft Palate-Craniofacial Association, 
              I provide evidence-based treatment to help individuals achieve clear, confident communication.
            </p>
            <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition duration-300 mr-4">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300">
              Download Treatment Guide
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Specialized Services & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-600">
              <Clock className="w-12 h-12 text-teal-600 mb-4" />
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
              <button className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition duration-300">
                Book Evaluation
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
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
              <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300">
                Start Therapy
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600">
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
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
              <button className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Treatment Approach</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-700">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Initial Assessment</h4>
              <p className="text-sm text-gray-600">Comprehensive evaluation of speech patterns and oral function</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-700">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Treatment Planning</h4>
              <p className="text-sm text-gray-600">Individualized therapy plan based on specific needs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-700">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Active Treatment</h4>
              <p className="text-sm text-gray-600">Evidence-based therapy techniques with regular progress monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-700">4</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-600">Maintenance therapy and family training for long-term success</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">What Our Families Say</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-teal-600 pl-4">
                <p className="text-gray-600 italic mb-2">"Naomi's expertise in cleft palate therapy transformed our daughter's speech. Her patience and specialized techniques made all the difference."</p>
                <p className="text-sm font-semibold text-gray-800">- Sarah M., Parent</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <p className="text-gray-600 italic mb-2">"Professional, caring, and incredibly knowledgeable. We saw improvement within weeks of starting therapy."</p>
                <p className="text-sm font-semibold text-gray-800">- Michael T., Parent</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <p className="text-gray-600 italic mb-2">"The home program and family training were invaluable. Naomi equipped us with tools for continued success."</p>
                <p className="text-sm font-semibold text-gray-800">- Jennifer L., Parent</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
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

        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
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

        <section className="bg-teal-700 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Don't wait to address speech concerns. Early intervention provides the best outcomes. 
              Schedule your free consultation today and take the first step toward clearer communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Call (555) 123-4567
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition duration-300">
                Request Consultation
              </button>
            </div>
            <p className="text-sm mt-4 opacity-90">Most insurance plans accepted • Free insurance verification</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
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
              <h4 className="font-semibold mb-3">Naomi Johnson, M.S., CCC-SLP</h4>
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