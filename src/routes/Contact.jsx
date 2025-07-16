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
    { value: 'adult-speech', label: 'Adult Speech Therapy' },
    { value: 'pediatric-speech', label: 'Pediatric Speech Therapy' },
    { value: 'language-assessment', label: 'Language Assessment' },
    { value: 'articulation-therapy', label: 'Articulation Therapy' },
    { value: 'voice-therapy', label: 'Voice Therapy' },
    { value: 'stuttering-treatment', label: 'Stuttering Treatment' },
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
              {/* Header Section with Branding */}
              <div className="text-center mb-8 pb-6 border-b border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Naomi's Speech Therapy</h2>
                <p className="text-gray-600 text-lg">Send us a message and we'll respond within 24 hours</p>
              </div>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg animate-pulse">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 text-sm font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 text-xs mt-1">We'll respond within 24 hours. Next: Check your email for confirmation.</p>
                    </div>
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
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Contact Information Section */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Contact Information
                  </h3>
                  <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                    <FormInput
                      label="Full Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Enter your full name"
                      required
                      error={touched.name ? errors.name : ''}
                      success={touched.name && !errors.name && formData.name ? 'Looks good!' : ''}
                      autoComplete="name"
                      maxLength={50}
                      compact={true}
                      aria-describedby="name-help"
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
                      aria-describedby="email-help"
                    />
                  </div>
                  
                  <div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
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
                      helpText="Optional - for faster response"
                      autoComplete="tel"
                      inputMode="tel"
                      compact={true}
                      aria-describedby="phone-help"
                    />
                    
                    <div className="flex items-center space-x-3 pt-6">
                      <div className="flex-1">
                        <span className="text-sm text-gray-600">Prefer to call directly?</span>
                      </div>
                      <a
                        href="tel:+15551234567"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Selection Section */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Service Selection
                  </h3>
                  <FormSelect
                    label="Which service are you interested in?"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    options={serviceOptions}
                    placeholder="Select a service to help us prepare for your consultation"
                    helpText="Optional - helps us prepare better for your consultation"
                    compact={true}
                    aria-describedby="service-help"
                  />
                </div>

                {/* Message Section */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Tell Us About Your Needs
                  </h3>
                  <FormTextarea
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Please describe your current challenges, goals, or questions. Include any relevant medical history, previous therapy experience, or specific concerns you'd like to address."
                    required
                    error={touched.message ? errors.message : ''}
                    success={touched.message && !errors.message && formData.message ? 'Great detail!' : ''}
                    rows={4}
                    maxLength={1000}
                    showCounter
                    helpText="The more detail you provide, the better we can help you"
                    autoResize={true}
                    compact={true}
                    aria-describedby="message-help"
                  />
                </div>
                
                {/* Submit Section */}
                <div className="pt-6 border-t border-gray-200">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={isSubmitting ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    fullWidth
                    disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                    className="disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 text-center">
                      <strong>What happens next:</strong> We'll respond within 24 hours with next steps and schedule your free consultation.
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center">
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