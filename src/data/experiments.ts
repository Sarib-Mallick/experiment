import { Experiment } from '../types/experiment'

export const chemistryExperiments: Experiment[] = [
  {
    id: 'acid-base-titration',
    title: 'Acid-Base Titration',
    description: 'Determine the concentration of an acid solution using a standard base solution through titration.',
    subject: 'chemistry',
    class: '11',
    chapter: 'Equilibrium',
    difficulty: 'intermediate',
    duration: 45,
    objectives: [
      'Understand the concept of acid-base titration',
      'Learn to use indicators for endpoint detection',
      'Calculate concentration using titration data',
      'Practice proper laboratory techniques'
    ],
    materials: [
      { name: 'Burette', quantity: '1', description: '50ml capacity with stand' },
      { name: 'Pipette', quantity: '1', description: '20ml capacity' },
      { name: 'Conical flask', quantity: '1', description: '250ml capacity' },
      { name: 'NaOH solution', quantity: '0.1M', description: 'Standard base solution' },
      { name: 'HCl solution', quantity: 'Unknown concentration', description: 'Acid to be titrated' },
      { name: 'Phenolphthalein', quantity: 'Few drops', description: 'pH indicator' },
      { name: 'Distilled water', quantity: 'As needed', description: 'For rinsing' }
    ],
    procedure: [
      {
        step: 1,
        title: 'Setup Burette',
        description: 'Rinse the burette with distilled water and then with the NaOH solution. Fill it with 0.1M NaOH solution.',
        duration: 5,
        interactive: true,
        notes: 'Ensure no air bubbles in the burette tip'
      },
      {
        step: 2,
        title: 'Prepare Acid Solution',
        description: 'Using a pipette, transfer 20ml of the unknown HCl solution into a clean conical flask.',
        duration: 3,
        interactive: true,
        notes: 'Rinse the pipette with the acid solution first'
      },
      {
        step: 3,
        title: 'Add Indicator',
        description: 'Add 2-3 drops of phenolphthalein indicator to the acid solution in the conical flask.',
        duration: 2,
        interactive: true,
        notes: 'The solution should remain colorless'
      },
      {
        step: 4,
        title: 'Begin Titration',
        description: 'Slowly add NaOH solution from the burette to the acid solution while swirling the flask.',
        duration: 10,
        interactive: true,
        notes: 'Watch for the first permanent pink color'
      },
      {
        step: 5,
        title: 'Record Endpoint',
        description: 'Note the burette reading when the solution turns permanently pink. This is the endpoint.',
        duration: 2,
        interactive: true,
        notes: 'The pink color should persist for 30 seconds'
      },
      {
        step: 6,
        title: 'Calculate Concentration',
        description: 'Use the titration data to calculate the concentration of the HCl solution.',
        duration: 5,
        interactive: false,
        notes: 'Use the formula: M1V1 = M2V2'
      }
    ],
    theory: {
      overview: 'Acid-base titration is a quantitative analysis technique used to determine the concentration of an acid or base solution by neutralizing it with a solution of known concentration.',
      principles: [
        'Neutralization reaction: Acid + Base → Salt + Water',
        'At equivalence point: moles of acid = moles of base',
        'M1V1 = M2V2 (where M is molarity, V is volume)',
        'Indicators change color at specific pH values'
      ],
      formulas: [
        {
          name: 'Molarity Formula',
          expression: 'M = n/V',
          description: 'Molarity is the number of moles of solute per liter of solution',
          units: 'mol/L',
          variables: [
            { symbol: 'M', name: 'Molarity', unit: 'mol/L', description: 'Concentration of solution' },
            { symbol: 'n', name: 'Number of moles', unit: 'mol', description: 'Amount of solute' },
            { symbol: 'V', name: 'Volume', unit: 'L', description: 'Volume of solution' }
          ]
        },
        {
          name: 'Titration Formula',
          expression: 'M₁V₁ = M₂V₂',
          description: 'At equivalence point, moles of acid equal moles of base',
          units: 'mol',
          variables: [
            { symbol: 'M₁', name: 'Molarity of acid', unit: 'mol/L', description: 'Concentration of acid' },
            { symbol: 'V₁', name: 'Volume of acid', unit: 'L', description: 'Volume of acid used' },
            { symbol: 'M₂', name: 'Molarity of base', unit: 'mol/L', description: 'Concentration of base' },
            { symbol: 'V₂', name: 'Volume of base', unit: 'L', description: 'Volume of base used' }
          ]
        }
      ],
      concepts: [
        {
          name: 'Equivalence Point',
          description: 'The point in titration where the amount of acid equals the amount of base',
          examples: ['When HCl and NaOH are mixed in stoichiometric amounts', 'pH = 7 for strong acid-strong base titration']
        },
        {
          name: 'Endpoint',
          description: 'The point where the indicator changes color, indicating the equivalence point',
          examples: ['Phenolphthalein turns pink at pH 8-10', 'Methyl orange turns orange at pH 3-4']
        },
        {
          name: 'Indicator',
          description: 'A substance that changes color at a specific pH value',
          examples: ['Phenolphthalein: colorless in acid, pink in base', 'Methyl orange: red in acid, yellow in base']
        }
      ],
      realWorldApplications: [
        'Quality control in pharmaceutical industry',
        'Water treatment and purification',
        'Food and beverage industry for pH control',
        'Environmental monitoring of water bodies',
        'Medical diagnostics and blood pH testing'
      ]
    },
    safetyNotes: [
      'Wear safety goggles and lab coat',
      'Handle acids and bases with care',
      'Do not taste or inhale any chemicals',
      'Wash hands thoroughly after the experiment',
      'Dispose of chemicals properly'
    ],
    observations: [
      {
        step: 1,
        description: 'Burette filled with clear NaOH solution',
        expectedResult: 'Burette should be free of air bubbles',
        notes: 'Check for proper setup'
      },
      {
        step: 2,
        description: 'HCl solution in conical flask',
        expectedResult: '20ml of clear acid solution',
        notes: 'Ensure accurate measurement'
      },
      {
        step: 3,
        description: 'Solution after adding indicator',
        expectedResult: 'Colorless solution',
        notes: 'Phenolphthalein is colorless in acidic medium'
      },
      {
        step: 4,
        description: 'During titration',
        expectedResult: 'Gradual color change from colorless to pink',
        notes: 'Add base slowly and swirl continuously'
      },
      {
        step: 5,
        description: 'At endpoint',
        expectedResult: 'Permanent pink color',
        notes: 'Color should persist for 30 seconds'
      }
    ],
    conclusions: [
      'The concentration of HCl solution can be determined using acid-base titration',
      'Phenolphthalein is an effective indicator for strong acid-strong base titration',
      'The equivalence point occurs when moles of acid equal moles of base',
      'Proper technique is essential for accurate results'
    ],
    questions: [
      {
        id: 'q1',
        question: 'What is the purpose of using an indicator in titration?',
        type: 'short-answer',
        correctAnswer: 'To detect the endpoint of the reaction',
        explanation: 'Indicators change color at specific pH values, helping to identify when the acid and base have completely reacted.',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'If 25ml of 0.1M NaOH neutralizes 20ml of HCl, what is the concentration of HCl?',
        type: 'numerical',
        correctAnswer: 0.125,
        explanation: 'Using M1V1 = M2V2: 0.1 × 25 = M2 × 20, therefore M2 = 0.125M',
        difficulty: 'medium'
      },
      {
        id: 'q3',
        question: 'Why is phenolphthalein used as an indicator in this experiment?',
        type: 'short-answer',
        correctAnswer: 'It changes color in the pH range of 8-10, suitable for strong acid-strong base titration',
        explanation: 'Phenolphthalein is colorless in acidic solutions and pink in basic solutions, making it ideal for detecting the endpoint.',
        difficulty: 'medium'
      }
    ],
    tags: ['titration', 'acid-base', 'concentration', 'indicator', 'neutralization'],
    thumbnail: '/images/acid-base-titration.jpg',
    references: [
      'NCERT Chemistry Class 11 - Chapter 7: Equilibrium',
      'Vogel\'s Textbook of Quantitative Chemical Analysis',
      'Harris, D.C. Quantitative Chemical Analysis'
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: 'salt-analysis',
    title: 'Qualitative Analysis of Salts',
    description: 'Identify the cations and anions present in given salt samples using systematic analysis.',
    subject: 'chemistry',
    class: '12',
    chapter: 'Coordination Compounds',
    difficulty: 'advanced',
    duration: 60,
    objectives: [
      'Learn systematic approach to salt analysis',
      'Identify common cations and anions',
      'Understand precipitation reactions',
      'Practice analytical chemistry techniques'
    ],
    materials: [
      { name: 'Test tubes', quantity: '10', description: 'Clean and dry' },
      { name: 'Test tube holder', quantity: '1', description: 'For safe handling' },
      { name: 'Bunsen burner', quantity: '1', description: 'For heating' },
      { name: 'Dilute HCl', quantity: '10ml', description: 'For acid tests' },
      { name: 'Dilute H2SO4', quantity: '10ml', description: 'For sulfate tests' },
      { name: 'BaCl2 solution', quantity: '10ml', description: 'For sulfate detection' },
      { name: 'AgNO3 solution', quantity: '10ml', description: 'For halide detection' },
      { name: 'NaOH solution', quantity: '10ml', description: 'For base tests' },
      { name: 'NH4OH solution', quantity: '10ml', description: 'For ammonia tests' },
      { name: 'Unknown salt samples', quantity: '3', description: 'Different salts to analyze' }
    ],
    procedure: [
      {
        step: 1,
        title: 'Preliminary Tests',
        description: 'Observe the physical properties of the salt: color, odor, solubility in water.',
        duration: 5,
        interactive: true,
        notes: 'Record all observations carefully'
      },
      {
        step: 2,
        title: 'Flame Test',
        description: 'Heat a small amount of salt on a platinum wire in the flame. Observe the color.',
        duration: 8,
        interactive: true,
        notes: 'Different cations give different flame colors'
      },
      {
        step: 3,
        title: 'Test for Carbonate',
        description: 'Add dilute HCl to the salt. Observe for effervescence.',
        duration: 3,
        interactive: true,
        notes: 'CO2 gas is evolved if carbonate is present'
      },
      {
        step: 4,
        title: 'Test for Sulfate',
        description: 'Add BaCl2 solution to the salt solution. Look for white precipitate.',
        duration: 5,
        interactive: true,
        notes: 'BaSO4 is a white insoluble precipitate'
      },
      {
        step: 5,
        title: 'Test for Halides',
        description: 'Add AgNO3 solution to the salt solution. Observe precipitate color.',
        duration: 5,
        interactive: true,
        notes: 'AgCl is white, AgBr is pale yellow, AgI is yellow'
      },
      {
        step: 6,
        title: 'Test for Ammonium',
        description: 'Add NaOH and heat. Test for ammonia gas with red litmus paper.',
        duration: 8,
        interactive: true,
        notes: 'Ammonia turns red litmus blue'
      }
    ],
    theory: {
      overview: 'Qualitative analysis involves identifying the ions present in a salt without determining their exact amounts. It uses characteristic reactions of different ions.',
      principles: [
        'Different ions have characteristic chemical reactions',
        'Precipitation reactions help identify ions',
        'Flame tests identify certain metal ions',
        'Systematic approach ensures no ions are missed'
      ],
      formulas: [
        {
          name: 'Precipitation Reaction',
          expression: 'A⁺ + B⁻ → AB↓',
          description: 'When two ions combine to form an insoluble compound',
          units: 'mol/L',
          variables: [
            { symbol: 'A⁺', name: 'Cation', unit: 'mol/L', description: 'Positive ion' },
            { symbol: 'B⁻', name: 'Anion', unit: 'mol/L', description: 'Negative ion' },
            { symbol: 'AB', name: 'Precipitate', unit: 'solid', description: 'Insoluble compound' }
          ]
        }
      ],
      concepts: [
        {
          name: 'Precipitation',
          description: 'Formation of an insoluble solid when two solutions are mixed',
          examples: ['AgCl formation from AgNO3 and NaCl', 'BaSO4 formation from BaCl2 and Na2SO4']
        },
        {
          name: 'Flame Test',
          description: 'Method to identify metal ions by the color they impart to a flame',
          examples: ['Sodium: yellow flame', 'Potassium: lilac flame', 'Copper: green flame']
        }
      ],
      realWorldApplications: [
        'Quality control in chemical industries',
        'Environmental monitoring',
        'Forensic analysis',
        'Mineral identification',
        'Water quality testing'
      ]
    },
    safetyNotes: [
      'Wear safety goggles and lab coat',
      'Handle acids and bases carefully',
      'Do not inhale gases evolved',
      'Dispose of chemicals properly',
      'Wash hands after the experiment'
    ],
    observations: [
      {
        step: 1,
        description: 'Physical appearance of salt',
        expectedResult: 'Record color, texture, and solubility',
        notes: 'These give initial clues about the salt'
      },
      {
        step: 2,
        description: 'Flame color',
        expectedResult: 'Characteristic color for specific cations',
        notes: 'Compare with known flame colors'
      },
      {
        step: 3,
        description: 'Reaction with HCl',
        expectedResult: 'Effervescence indicates carbonate',
        notes: 'CO2 gas bubbles are observed'
      },
      {
        step: 4,
        description: 'Reaction with BaCl2',
        expectedResult: 'White precipitate indicates sulfate',
        notes: 'BaSO4 is very insoluble'
      },
      {
        step: 5,
        description: 'Reaction with AgNO3',
        expectedResult: 'Colored precipitate indicates halide',
        notes: 'Color depends on the halide present'
      }
    ],
    conclusions: [
      'Systematic analysis helps identify ions present in salts',
      'Different tests confirm the presence of specific ions',
      'Physical and chemical properties aid in identification',
      'Proper technique ensures accurate results'
    ],
    questions: [
      {
        id: 'q1',
        question: 'What is the purpose of flame test in salt analysis?',
        type: 'short-answer',
        correctAnswer: 'To identify metal cations present in the salt',
        explanation: 'Different metal ions give characteristic colors when heated in a flame.',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'Which precipitate indicates the presence of sulfate ion?',
        type: 'multiple-choice',
        options: ['AgCl', 'BaSO4', 'CaCO3', 'Fe(OH)3'],
        correctAnswer: 'BaSO4',
        explanation: 'Barium sulfate (BaSO4) is a white insoluble precipitate formed when BaCl2 reacts with sulfate ions.',
        difficulty: 'medium'
      }
    ],
    tags: ['qualitative analysis', 'salt analysis', 'precipitation', 'flame test', 'ions'],
    thumbnail: '/images/salt-analysis.jpg',
    references: [
      'NCERT Chemistry Class 12 - Chapter 9: Coordination Compounds',
      'Vogel\'s Textbook of Qualitative Inorganic Analysis',
      'Practical Chemistry by N. N. Greenwood'
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  }
]

export const physicsExperiments: Experiment[] = [
  {
    id: 'simple-pendulum',
    title: 'Simple Pendulum - Time Period',
    description: 'Determine the acceleration due to gravity using a simple pendulum and study factors affecting its time period.',
    subject: 'physics',
    class: '11',
    chapter: 'Oscillations',
    difficulty: 'beginner',
    duration: 40,
    objectives: [
      'Understand simple harmonic motion',
      'Study factors affecting time period',
      'Calculate acceleration due to gravity',
      'Learn experimental data analysis'
    ],
    materials: [
      { name: 'Pendulum bob', quantity: '1', description: 'Metal sphere with hook' },
      { name: 'String', quantity: '1m', description: 'Light, inextensible thread' },
      { name: 'Stopwatch', quantity: '1', description: 'Digital or analog' },
      { name: 'Meter scale', quantity: '1', description: 'To measure length' },
      { name: 'Stand with clamp', quantity: '1', description: 'To suspend pendulum' },
      { name: 'Protractor', quantity: '1', description: 'To measure angle' }
    ],
    procedure: [
      {
        step: 1,
        title: 'Setup Pendulum',
        description: 'Suspend the pendulum bob from a fixed point using the string. Ensure it can swing freely.',
        duration: 5,
        interactive: true,
        notes: 'The point of suspension should be rigid'
      },
      {
        step: 2,
        title: 'Measure Length',
        description: 'Measure the length of the pendulum from the point of suspension to the center of the bob.',
        duration: 3,
        interactive: true,
        notes: 'Length should be measured accurately'
      },
      {
        step: 3,
        title: 'Set Amplitude',
        description: 'Displace the bob to a small angle (less than 15°) and release it.',
        duration: 2,
        interactive: true,
        notes: 'Keep amplitude small for simple harmonic motion'
      },
      {
        step: 4,
        title: 'Measure Time Period',
        description: 'Start the stopwatch when the bob passes through the mean position. Count 20 oscillations and stop the timer.',
        duration: 15,
        interactive: true,
        notes: 'Time 20 oscillations for better accuracy'
      },
      {
        step: 5,
        title: 'Calculate Average',
        description: 'Divide the total time by 20 to get the time period for one oscillation.',
        duration: 2,
        interactive: false,
        notes: 'T = Total time / Number of oscillations'
      },
      {
        step: 6,
        title: 'Calculate Gravity',
        description: 'Use the formula T = 2π√(l/g) to calculate the acceleration due to gravity.',
        duration: 5,
        interactive: false,
        notes: 'g = 4π²l/T²'
      }
    ],
    theory: {
      overview: 'A simple pendulum consists of a point mass suspended by a massless, inextensible string. When displaced from its equilibrium position, it executes simple harmonic motion.',
      principles: [
        'Simple harmonic motion: restoring force is proportional to displacement',
        'Time period is independent of mass and amplitude (for small angles)',
        'Time period depends on length and acceleration due to gravity',
        'T = 2π√(l/g) where T is time period, l is length, g is acceleration due to gravity'
      ],
      formulas: [
        {
          name: 'Time Period Formula',
          expression: 'T = 2π√(l/g)',
          description: 'Time period of a simple pendulum',
          units: 'seconds',
          variables: [
            { symbol: 'T', name: 'Time period', unit: 's', description: 'Time for one complete oscillation' },
            { symbol: 'l', name: 'Length', unit: 'm', description: 'Length of pendulum' },
            { symbol: 'g', name: 'Acceleration due to gravity', unit: 'm/s²', description: 'Gravitational acceleration' }
          ]
        },
        {
          name: 'Gravity Calculation',
          expression: 'g = 4π²l/T²',
          description: 'Calculate acceleration due to gravity from pendulum data',
          units: 'm/s²',
          variables: [
            { symbol: 'g', name: 'Acceleration due to gravity', unit: 'm/s²', description: 'Gravitational acceleration' },
            { symbol: 'l', name: 'Length', unit: 'm', description: 'Length of pendulum' },
            { symbol: 'T', name: 'Time period', unit: 's', description: 'Time for one oscillation' }
          ]
        }
      ],
      concepts: [
        {
          name: 'Simple Harmonic Motion',
          description: 'Motion where restoring force is directly proportional to displacement and acts towards equilibrium',
          examples: ['Simple pendulum', 'Mass-spring system', 'Vibrating string']
        },
        {
          name: 'Time Period',
          description: 'Time taken for one complete oscillation',
          examples: ['Pendulum swing from left to right and back', 'One complete cycle of motion']
        },
        {
          name: 'Amplitude',
          description: 'Maximum displacement from equilibrium position',
          examples: ['Maximum angle of pendulum swing', 'Maximum distance from mean position']
        }
      ],
      realWorldApplications: [
        'Clock mechanisms (grandfather clocks)',
        'Seismometers for earthquake detection',
        'Metronomes for music timing',
        'Gravitational field measurements',
        'Timekeeping devices'
      ]
    },
    safetyNotes: [
      'Ensure pendulum swings freely without obstruction',
      'Do not swing pendulum too vigorously',
      'Keep clear of the swinging bob',
      'Use proper equipment handling',
      'Record observations carefully'
    ],
    observations: [
      {
        step: 1,
        description: 'Pendulum setup',
        expectedResult: 'Bob suspended freely from fixed point',
        notes: 'Check for proper suspension'
      },
      {
        step: 2,
        description: 'Length measurement',
        expectedResult: 'Accurate length from suspension to bob center',
        notes: 'Use meter scale carefully'
      },
      {
        step: 3,
        description: 'Amplitude setting',
        expectedResult: 'Small angle displacement (less than 15°)',
        notes: 'Use protractor to measure angle'
      },
      {
        step: 4,
        description: 'Time measurement',
        expectedResult: 'Time for 20 oscillations',
        notes: 'Start and stop timing accurately'
      },
      {
        step: 5,
        description: 'Calculated time period',
        expectedResult: 'Average time for one oscillation',
        notes: 'Divide total time by 20'
      }
    ],
    conclusions: [
      'Time period is independent of mass and amplitude (for small angles)',
      'Time period increases with length of pendulum',
      'Acceleration due to gravity can be calculated using pendulum data',
      'Simple pendulum follows simple harmonic motion'
    ],
    questions: [
      {
        id: 'q1',
        question: 'What factors affect the time period of a simple pendulum?',
        type: 'multiple-choice',
        options: ['Mass and length', 'Length and gravity', 'Amplitude and mass', 'Length only'],
        correctAnswer: 'Length and gravity',
        explanation: 'Time period depends on length and acceleration due to gravity, not on mass or amplitude (for small angles).',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'If the length of a pendulum is doubled, how does the time period change?',
        type: 'short-answer',
        correctAnswer: 'Time period increases by √2 times',
        explanation: 'Since T ∝ √l, doubling the length increases time period by √2.',
        difficulty: 'medium'
      },
      {
        id: 'q3',
        question: 'Calculate g if a pendulum of length 1m has a time period of 2s.',
        type: 'numerical',
        correctAnswer: 9.87,
        explanation: 'Using g = 4π²l/T² = 4π²×1/4 = π² ≈ 9.87 m/s²',
        difficulty: 'medium'
      }
    ],
    tags: ['simple pendulum', 'oscillations', 'simple harmonic motion', 'gravity', 'time period'],
    thumbnail: '/images/simple-pendulum.jpg',
    references: [
      'NCERT Physics Class 11 - Chapter 14: Oscillations',
      'University Physics by Young and Freedman',
      'Fundamentals of Physics by Halliday, Resnick, and Walker'
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: 'ohms-law',
    title: 'Ohm\'s Law Verification',
    description: 'Verify Ohm\'s law by measuring current through a resistor for different applied voltages.',
    subject: 'physics',
    class: '12',
    chapter: 'Current Electricity',
    difficulty: 'intermediate',
    duration: 50,
    objectives: [
      'Verify Ohm\'s law experimentally',
      'Learn to use ammeter and voltmeter',
      'Understand electrical resistance',
      'Practice electrical circuit connections'
    ],
    materials: [
      { name: 'Resistor', quantity: '1', description: 'Known resistance (e.g., 10Ω)' },
      { name: 'Ammeter', quantity: '1', description: 'To measure current' },
      { name: 'Voltmeter', quantity: '1', description: 'To measure voltage' },
      { name: 'Battery', quantity: '1', description: 'Variable voltage source' },
      { name: 'Connecting wires', quantity: 'As needed', description: 'For circuit connections' },
      { name: 'Rheostat', quantity: '1', description: 'To vary voltage' },
      { name: 'Switch', quantity: '1', description: 'To control circuit' }
    ],
    procedure: [
      {
        step: 1,
        title: 'Circuit Setup',
        description: 'Connect the circuit: battery, rheostat, ammeter, resistor, and voltmeter in series. Connect voltmeter across the resistor.',
        duration: 8,
        interactive: true,
        notes: 'Ensure proper polarity of meters'
      },
      {
        step: 2,
        title: 'Initial Reading',
        description: 'Set rheostat to minimum resistance. Close the switch and note the initial readings of ammeter and voltmeter.',
        duration: 3,
        interactive: true,
        notes: 'Start with minimum voltage'
      },
      {
        step: 3,
        title: 'Vary Voltage',
        description: 'Gradually increase the voltage using the rheostat. Record ammeter and voltmeter readings for each setting.',
        duration: 15,
        interactive: true,
        notes: 'Take 5-6 readings at different voltages'
      },
      {
        step: 4,
        title: 'Record Data',
        description: 'Tabulate the voltage (V) and current (I) readings in a table.',
        duration: 5,
        interactive: false,
        notes: 'Ensure accurate readings'
      },
      {
        step: 5,
        title: 'Plot Graph',
        description: 'Plot a graph of current (I) versus voltage (V). The graph should be a straight line.',
        duration: 8,
        interactive: false,
        notes: 'Use graph paper for accuracy'
      },
      {
        step: 6,
        title: 'Calculate Resistance',
        description: 'Calculate resistance using R = V/I for each reading and find the average.',
        duration: 5,
        interactive: false,
        notes: 'Compare with known resistance value'
      }
    ],
    theory: {
      overview: 'Ohm\'s law states that the current flowing through a conductor is directly proportional to the potential difference across it, provided the temperature and other physical conditions remain constant.',
      principles: [
        'Current is directly proportional to voltage: I ∝ V',
        'Resistance is constant for a given conductor at constant temperature',
        'V = IR where V is voltage, I is current, R is resistance',
        'The V-I graph is a straight line passing through origin'
      ],
      formulas: [
        {
          name: 'Ohm\'s Law',
          expression: 'V = IR',
          description: 'Relationship between voltage, current, and resistance',
          units: 'Volts = Amperes × Ohms',
          variables: [
            { symbol: 'V', name: 'Voltage', unit: 'V', description: 'Potential difference' },
            { symbol: 'I', name: 'Current', unit: 'A', description: 'Electric current' },
            { symbol: 'R', name: 'Resistance', unit: 'Ω', description: 'Electrical resistance' }
          ]
        },
        {
          name: 'Resistance Calculation',
          expression: 'R = V/I',
          description: 'Calculate resistance from voltage and current',
          units: 'Ω',
          variables: [
            { symbol: 'R', name: 'Resistance', unit: 'Ω', description: 'Electrical resistance' },
            { symbol: 'V', name: 'Voltage', unit: 'V', description: 'Potential difference' },
            { symbol: 'I', name: 'Current', unit: 'A', description: 'Electric current' }
          ]
        }
      ],
      concepts: [
        {
          name: 'Electric Current',
          description: 'Flow of electric charge through a conductor',
          examples: ['Flow of electrons in a wire', 'Current in household circuits']
        },
        {
          name: 'Potential Difference',
          description: 'Work done per unit charge in moving charge between two points',
          examples: ['Battery voltage', 'Voltage across a resistor']
        },
        {
          name: 'Resistance',
          description: 'Opposition to the flow of electric current',
          examples: ['Resistor in a circuit', 'Resistance of a wire']
        }
      ],
      realWorldApplications: [
        'Electrical circuit design',
        'Power distribution systems',
        'Electronic device design',
        'Electrical safety calculations',
        'Energy efficiency optimization'
      ]
    },
    safetyNotes: [
      'Use low voltage sources only',
      'Check all connections before switching on',
      'Do not touch live wires',
      'Use proper insulated wires',
      'Follow electrical safety guidelines'
    ],
    observations: [
      {
        step: 1,
        description: 'Circuit connections',
        expectedResult: 'Proper series connection with meters',
        notes: 'Verify all connections'
      },
      {
        step: 2,
        description: 'Initial readings',
        expectedResult: 'Low voltage and current readings',
        notes: 'Start with minimum voltage'
      },
      {
        step: 3,
        description: 'Voltage variation',
        expectedResult: 'Increasing voltage readings',
        notes: 'Record each reading carefully'
      },
      {
        step: 4,
        description: 'Current variation',
        expectedResult: 'Current increases with voltage',
        notes: 'Current should be proportional to voltage'
      },
      {
        step: 5,
        description: 'V-I graph',
        expectedResult: 'Straight line through origin',
        notes: 'Graph confirms Ohm\'s law'
      }
    ],
    conclusions: [
      'Current is directly proportional to voltage (Ohm\'s law verified)',
      'V-I graph is a straight line passing through origin',
      'Resistance remains constant for the given resistor',
      'Experimental value of resistance matches the known value'
    ],
    questions: [
      {
        id: 'q1',
        question: 'What does Ohm\'s law state?',
        type: 'short-answer',
        correctAnswer: 'Current is directly proportional to voltage at constant temperature',
        explanation: 'Ohm\'s law states that I ∝ V, or V = IR, where R is constant.',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        question: 'If voltage is 12V and current is 2A, what is the resistance?',
        type: 'numerical',
        correctAnswer: 6,
        explanation: 'Using R = V/I = 12/2 = 6Ω',
        difficulty: 'easy'
      },
      {
        id: 'q3',
        question: 'What should be the shape of V-I graph for a resistor following Ohm\'s law?',
        type: 'short-answer',
        correctAnswer: 'Straight line passing through origin',
        explanation: 'Since V ∝ I, the graph should be a straight line with zero intercept.',
        difficulty: 'medium'
      }
    ],
    tags: ['ohm\'s law', 'current electricity', 'resistance', 'voltage', 'circuit'],
    thumbnail: '/images/ohms-law.jpg',
    references: [
      'NCERT Physics Class 12 - Chapter 3: Current Electricity',
      'University Physics by Young and Freedman',
      'Fundamentals of Physics by Halliday, Resnick, and Walker'
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  }
]

export const allExperiments = [...chemistryExperiments, ...physicsExperiments]