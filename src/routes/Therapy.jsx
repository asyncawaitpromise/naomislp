import { Heart, Users, Clock, Target, CheckCircle, AlertCircle, Book, Mic, Activity, Zap, Layers, TrendingUp } from 'react-feather';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const Therapy = () => {
  const treatmentStages = [
    {
      stage: "Pre-Surgical",
      age: "Birth - 12 months",
      color: "from-pink-500 to-rose-600",
      treatments: ["Feeding support", "Parent education", "Oral stimulation", "Communication development"]
    },
    {
      stage: "Post-Surgical",
      age: "12 - 18 months",
      color: "from-blue-500 to-indigo-600",
      treatments: ["Speech sound development", "Oral-motor exercises", "Articulation therapy", "Resonance training"]
    },
    {
      stage: "School Age",
      age: "3 - 12 years",
      color: "from-green-500 to-teal-600",
      treatments: ["Advanced articulation", "Social communication", "Academic support", "Confidence building"]
    },
    {
      stage: "Adolescent/Adult",
      age: "13+ years",
      color: "from-purple-500 to-violet-600",
      treatments: ["Speech refinement", "Professional communication", "Self-advocacy", "Maintenance therapy"]
    }
  ];

  const speechCharacteristics = [
    {
      issue: "Hypernasality",
      description: "Too much air flowing through the nose during speech",
      symptoms: ["Muffled speech quality", "Difficulty with pressure sounds", "Nasal air emission"],
      treatment: "Resonance therapy, nasometry assessment, possible surgical referral"
    },
    {
      issue: "Articulation Errors",
      description: "Difficulty producing clear speech sounds",
      symptoms: ["Glottal stops", "Pharyngeal fricatives", "Weak pressure consonants"],
      treatment: "Targeted articulation therapy, oral-motor exercises, biofeedback"
    },
    {
      issue: "Nasal Air Emission",
      description: "Air escaping through the nose during speech",
      symptoms: ["Audible nasal airflow", "Reduced speech clarity", "Compensatory behaviors"],
      treatment: "Pressure-flow therapy, speech valve training, surgical consultation"
    }
  ];

  const therapyTechniques = [
    {
      icon: Mic,
      title: "Articulation Therapy",
      description: "Systematic approach to teaching correct speech sound production",
      techniques: ["Phonetic placement", "Auditory discrimination", "Motor practice", "Generalization training"]
    },
    {
      icon: Activity,
      title: "Resonance Management",
      description: "Techniques to improve balance between oral and nasal resonance",
      techniques: ["CPAP therapy", "Speech appliances", "Biofeedback training", "Nasometry monitoring"]
    },
    {
      icon: Activity,
      title: "Oral-Motor Therapy",
      description: "Exercises to improve strength and coordination of speech muscles",
      techniques: ["Lip strengthening", "Tongue mobility", "Soft palate exercises", "Breath support training"]
    },
    {
      icon: Users,
      title: "Family Training",
      description: "Empowering families with knowledge and techniques for home practice",
      techniques: ["Home exercise programs", "Communication strategies", "Progress monitoring", "Support resources"]
    }
  ];

  const expectedOutcomes = [
    { milestone: "Improved speech clarity", timeframe: "3-6 months", percentage: 85 },
    { milestone: "Reduced hypernasality", timeframe: "6-12 months", percentage: 78 },
    { milestone: "Better articulation", timeframe: "6-18 months", percentage: 92 },
    { milestone: "Increased confidence", timeframe: "3-9 months", percentage: 95 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Hero
        title={
          <>
            Cleft Palate
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
              Speech Therapy
            </span>
          </>
        }
        description="Understanding the unique speech challenges of cleft palate and how specialized therapy transforms communication abilities through evidence-based treatment approaches."
        badge={
          <>
            <Activity className="w-5 h-5 mr-2" />
            <span className="font-medium">Specialized Treatment Approach</span>
          </>
        }
        badges={[
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Evidence-Based Methods</span>
          </>,
          <>
            <Target className="w-5 h-5 mr-2" />
            <span>Individualized Plans</span>
          </>,
          <>
            <Heart className="w-5 h-5 mr-2" />
            <span>Family-Centered Care</span>
          </>
        ]}
        className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600"
      />

      <Container>
        <div className="py-16">
        {/* Understanding Cleft Palate Speech */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Understanding Cleft Palate Speech</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cleft palate affects speech in unique ways that require specialized knowledge and treatment approaches.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {speechCharacteristics.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg mr-4">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{item.issue}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Common Symptoms:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {item.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Treatment Approach:</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment by Age Groups */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Treatment Across Life Stages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speech therapy needs evolve as individuals grow, requiring age-appropriate interventions and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentStages.map((stage, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  <div className={`h-2 bg-gradient-to-r ${stage.color}`}></div>
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{stage.stage}</h3>
                      <p className="text-sm text-gray-500 font-medium">{stage.age}</p>
                    </div>
                    <div className="space-y-3">
                      {stage.treatments.map((treatment, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {treatment}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Therapy Techniques */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Specialized Therapy Techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based methodologies specifically designed for cleft palate speech challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {therapyTechniques.map((technique, index) => {
              const Icon = technique.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{technique.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{technique.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {technique.techniques.map((method, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 py-1">
                            <Zap className="w-3 h-3 text-teal-500 mr-2" />
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-teal-600" />
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Expected Treatment Outcomes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Research-based success rates and timelines for cleft palate speech therapy interventions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {expectedOutcomes.map((outcome, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{outcome.milestone}</h3>
                    <span className="text-2xl font-bold text-teal-600">{outcome.percentage}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">Typical timeframe: {outcome.timeframe}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${outcome.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">The Treatment Process</h2>
              <p className="text-xl text-gray-600">A systematic approach to achieving optimal speech outcomes</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { step: 1, title: "Assessment", desc: "Comprehensive evaluation of speech patterns" },
                { step: 2, title: "Planning", desc: "Individualized treatment plan development" },
                { step: 3, title: "Therapy", desc: "Targeted interventions and exercises" },
                { step: 4, title: "Practice", desc: "Home programs and family training" },
                { step: 5, title: "Progress", desc: "Ongoing monitoring and adjustments" }
              ].map((phase, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{phase.step}</span>
                    </div>
                    {index < 4 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-teal-200 to-blue-200 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section>
          <Card className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 text-white relative overflow-hidden text-center" padding="xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <Book className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 px-4 sm:px-0">Start Your Specialized Treatment</h2>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-blue-100 px-4 sm:px-0">
                Don't let speech challenges hold you back. Our specialized cleft palate therapy 
                program is designed to help you achieve clear, confident communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Button
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Schedule Evaluation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Download Treatment Guide
                </Button>
              </div>
            </div>
          </Card>
        </Section>
        </div>
      </Container>
    </div>
  );
};

export default Therapy;