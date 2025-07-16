import { Heart, Phone, Mail, MapPin } from 'react-feather';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-teal-700 mb-2">Naomi's Speech Therapy</h1>
            <p className="text-xl text-gray-600">Specialized Cleft Palate Speech Therapy</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <Heart className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Compassionate Care for Better Communication
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to my private practice where I provide specialized speech therapy services 
              for individuals with cleft palate. With years of experience and a passion for helping 
              others communicate effectively, I'm here to support you on your journey to clearer speech.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">My Specialty</h3>
            <p className="text-gray-600 mb-4">
              I specialize in cleft palate speech therapy, providing comprehensive assessment 
              and treatment for individuals of all ages. My approach is tailored to each 
              person's unique needs and goals.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Articulation therapy</li>
              <li>Resonance management</li>
              <li>Oral-motor exercises</li>
              <li>Parent/caregiver training</li>
              <li>Pre and post-surgical speech support</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Why Choose Private Practice?</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Personalized, one-on-one attention</li>
              <li>Flexible scheduling to fit your needs</li>
              <li>Comfortable, welcoming environment</li>
              <li>Evidence-based treatment approaches</li>
              <li>Collaborative care with your medical team</li>
              <li>Progress tracking and regular updates</li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-6">
              Contact me today to schedule a consultation and learn how I can help 
              you or your loved one achieve better communication.
            </p>
            <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-teal-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-teal-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
              <p className="text-gray-600">naomi@speechtherapy.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-teal-600 mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
              <p className="text-gray-600">Private Practice Office</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Naomi's Speech Therapy. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Specialized Cleft Palate Speech Therapy Services</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;