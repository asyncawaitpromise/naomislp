import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle, Send, Loader, AlertCircle } from 'react-feather';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import FormTextarea from '../components/FormTextarea';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email address is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (value && !/^[\d\s\(\)\+\-\.\x20]+$/.test(value)) return 'Please enter a valid phone number';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'phone' && key !== 'serviceType') { // phone and serviceType are optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', serviceType: '' });
      setErrors({});
      setTouched({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('contactFormData');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsedData }));
      } catch (e) {
        // Ignore invalid JSON
      }
    }
  }, []);

  useEffect(() => {
    if (Object.values(formData).some(value => value)) {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const serviceOptions = [
    { value: 'evaluation', label: 'Comprehensive Evaluation ($425)' },
    { value: 'therapy', label: 'Individual Therapy ($175/session)' },
    { value: 'family', label: 'Family Training ($150/session)' },
    { value: 'consultation', label: 'Free Consultation (15 minutes)' }
  ];

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
      <SEOHead
        title="Contact Naomi's Speech Therapy | Schedule Free Consultation"
        description="Contact expert speech therapist Naomi for cleft palate treatment. Schedule your free consultation today. Call (555) 123-4567 or send a message. Most insurance plans accepted."
        keywords="contact speech therapist, schedule speech therapy consultation, cleft palate therapy appointment, speech therapy contact, insurance accepted, free consultation"
        canonical="/contact"
        type="website"
      />
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card padding="lg" className="order-2 lg:order-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
                {submitSuccess && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="text-sm font-medium">Message sent!</span>
                  </div>
                )}
              </div>
              
              {submitSuccess && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <p className="text-green-800 text-sm font-medium">Message sent! We'll respond within 24 hours.</p>
                  </div>
                </div>
              )}
              
              {submitError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    <p className="text-red-800 text-sm font-medium">{submitError}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Enhanced inline layout */}
                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <FormInput
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Your full name"
                    required
                    error={touched.name ? errors.name : ''}
                    success={touched.name && !errors.name && formData.name ? 'Looks good!' : ''}
                    autoComplete="name"
                    maxLength={50}
                    compact={true}
                  />
                  
                  <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    required
                    error={touched.email ? errors.email : ''}
                    success={touched.email && !errors.email && formData.email ? 'Looks good!' : ''}
                    autoComplete="email"
                    inputMode="email"
                    compact={true}
                  />
                </div>
                
                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <FormInput
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="(555) 123-4567"
                    error={touched.phone ? errors.phone : ''}
                    success={touched.phone && !errors.phone && formData.phone ? 'Looks good!' : ''}
                    helpText="Optional"
                    autoComplete="tel"
                    inputMode="tel"
                    compact={true}
                  />
                  
                  <FormSelect
                    label="Service Interest"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    options={serviceOptions}
                    placeholder="Select service (optional)"
                    helpText="Help us prepare"
                    compact={true}
                  />
                </div>
                
                <FormTextarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your needs, questions, or current challenges. Include any relevant medical history or previous therapy experience."
                  required
                  error={touched.message ? errors.message : ''}
                  success={touched.message && !errors.message && formData.message ? 'Great detail!' : ''}
                  rows={3}
                  maxLength={1000}
                  showCounter
                  helpText="Be as detailed as possible"
                  autoResize={true}
                  compact={true}
                />
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={isSubmitting ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    fullWidth
                    disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                  
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </div>
              </form>
            </Card>

            {/* Office Information */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* Quick Actions - Mobile Priority */}
              <Card className="bg-gradient-to-br from-teal-600 to-blue-700 text-white" padding="lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <Button
                    variant="white"
                    size="lg"
                    icon={<Calendar className="w-5 h-5" />}
                    fullWidth
                    className="text-base sm:text-lg font-semibold py-4"
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<Phone className="w-5 h-5" />}
                    fullWidth
                    className="text-base sm:text-lg font-semibold py-4"
                  >
                    Call Now: (555) 123-4567
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-blue-100 text-center font-medium">
                    ✓ Most insurance plans accepted<br/>
                    ✓ Free insurance verification<br/>
                    ✓ Same-day response guaranteed
                  </p>
                </div>
              </Card>

              {/* Office Hours */}
              <Card padding="lg">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Office Hours</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700 text-sm sm:text-base">{schedule.day}</span>
                      <span className="text-gray-600 text-sm sm:text-base font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                  <p className="text-sm text-teal-800">
                    <strong>Emergency Contact:</strong> For urgent concerns outside office hours, 
                    please call our main number. Voicemail is monitored regularly.
                  </p>
                </div>
              </Card>

              {/* Insurance Info */}
              <Card padding="lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Insurance & Payment</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Most major insurance plans accepted</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Payment plans available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">HSA/FSA accepted</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">Free insurance verification</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 font-medium">
                    💡 Tip: Call us for a free insurance verification before your first visit!
                  </p>
                </div>
              </Card>
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