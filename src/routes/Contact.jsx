import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle, Send } from 'react-feather';
import { useState } from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(555) 123-4567",
      secondary: "24/7 voicemail monitored",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "naomi@speechtherapy.com",
      secondary: "Response within 24 hours",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Office Location",
      primary: "123 Healthcare Plaza, Suite 200",
      secondary: "Free parking available",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Hero
        title="Get in Touch"
        description="Ready to start your journey to clearer communication? Contact us today to schedule your free consultation and learn how we can help."
        badge={
          <MessageSquare className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-300" />
        }
        badges={[
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Free Consultation</span>
          </>,
          <>
            <Clock className="w-5 h-5 mr-2" />
            <span>Quick Response</span>
          </>
        ]}
        className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700"
      />

      <Container>
        <div className="py-16">
        {/* Contact Methods */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 h-full">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${method.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-lg text-gray-700 mb-2 font-medium">{method.primary}</p>
                    <p className="text-sm text-gray-500">{method.secondary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="evaluation">Comprehensive Evaluation</option>
                    <option value="therapy">Individual Therapy</option>
                    <option value="family">Family Training</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your needs or questions..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send className="w-5 h-5" />}
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                  <p className="text-sm text-teal-800">
                    <strong>Emergency Contact:</strong> For urgent concerns outside office hours, 
                    please call our main number. Voicemail is monitored regularly.
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <Button
                    variant="white"
                    size="md"
                    icon={<Calendar className="w-5 h-5" />}
                    fullWidth
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    icon={<Phone className="w-5 h-5" />}
                    fullWidth
                  >
                    Call Now: (555) 123-4567
                  </Button>
                </div>
                <p className="text-sm text-blue-100 mt-4 text-center">
                  Most insurance plans accepted • Free insurance verification
                </p>
              </div>

              {/* Insurance Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Insurance & Payment</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Most major insurance plans accepted</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Payment plans available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">HSA/FSA accepted</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Free insurance verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Our Office</h3>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">123 Healthcare Plaza, Suite 200</p>
                <p className="text-sm">Easy parking • Accessible entrance</p>
              </div>
            </div>
          </div>
        </section>
        </div>
      </Container>
    </div>
  );
};

export default Contact;