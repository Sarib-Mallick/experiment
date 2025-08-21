# NCERT Virtual Lab - Interactive 3D Physics & Chemistry Experiments

A professional 3D interactive virtual laboratory for NCERT Class 11 & 12 Physics and Chemistry experiments. Built with React, Three.js, and modern web technologies to provide an immersive learning experience for students without access to physical laboratories.

## 🌟 Features

### 🎯 Core Features
- **Interactive 3D Visualizations**: Real-time 3D simulations of laboratory equipment and experiments
- **Step-by-Step Guidance**: Detailed procedure with interactive controls
- **NCERT Curriculum Aligned**: All experiments follow Class 11 & 12 NCERT syllabus
- **Progress Tracking**: Save and resume experiments with localStorage
- **Educational Content**: Theory, formulas, observations, and practice questions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🔬 Chemistry Experiments
- **Acid-Base Titration**: Interactive burette and flask with color change indicators
- **Qualitative Analysis of Salts**: Systematic analysis with flame tests and precipitation reactions
- **More experiments coming soon...**

### ⚡ Physics Experiments
- **Simple Pendulum**: Animated pendulum with time period calculations
- **Ohm's Law Verification**: Interactive circuit with ammeter and voltmeter
- **More experiments coming soon...**

### 🎮 Interactive Controls
- **3D Navigation**: Rotate, zoom, and pan around experiments
- **Experiment Controls**: Start, pause, reset, and step-by-step navigation
- **Real-time Animations**: Dynamic 3D models that respond to user interactions
- **Progress Indicators**: Visual feedback for completed steps

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ncert-virtual-lab.git
   cd ncert-virtual-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

### Deployment

The project is configured for easy deployment on various platforms:

#### GitHub Pages
```bash
npm run deploy
```

#### Netlify/Vercel
- Connect your repository
- Build command: `npm run build`
- Output directory: `dist`

## 🏗️ Project Architecture

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Build Tool**: Vite
- **State Management**: React Context + useReducer

### Directory Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ExperimentViewer.tsx  # Main experiment interface
├── contexts/           # React contexts
│   ├── ThemeContext.tsx    # Dark/light mode
│   └── ExperimentContext.tsx  # Experiment state management
├── data/              # Static experiment data
│   └── experiments.ts # Experiment definitions
├── pages/             # Page components
│   ├── HomePage.tsx   # Landing page
│   ├── ChemistryPage.tsx  # Chemistry experiments listing
│   └── PhysicsPage.tsx    # Physics experiments listing
├── types/             # TypeScript type definitions
│   └── experiment.ts  # Experiment data types
├── utils/             # Utility functions
│   └── cn.ts          # Class name utility
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

### Key Components

#### ExperimentViewer
The core component that provides the 3D experiment interface:
- **3D Canvas**: Three.js integration with React Three Fiber
- **Experiment Controls**: Play, pause, reset, and navigation
- **Content Tabs**: Procedure, theory, observations, and questions
- **Progress Tracking**: Step-by-step progress with visual indicators

#### Experiment Context
Manages experiment state and user progress:
- **Experiment State**: Current step, running status, user answers
- **Progress Persistence**: localStorage integration
- **Timer Management**: Real-time experiment timing
- **Answer Tracking**: User responses to questions

#### 3D Components
Modular 3D components for different experiments:
- **AcidBaseTitration3D**: Burette, flask, and liquid visualization
- **SimplePendulum3D**: Animated pendulum with physics simulation
- **OhmsLaw3D**: Circuit components with meters
- **SaltAnalysis3D**: Test tubes and laboratory equipment

## 📚 Adding New Experiments

### 1. Define Experiment Data
Add your experiment to `src/data/experiments.ts`:

```typescript
export const newExperiment: Experiment = {
  id: 'your-experiment-id',
  title: 'Your Experiment Title',
  description: 'Brief description',
  subject: 'chemistry', // or 'physics'
  class: '11', // or '12'
  chapter: 'Chapter Name',
  difficulty: 'intermediate', // 'beginner', 'intermediate', 'advanced'
  duration: 45, // in minutes
  objectives: ['Objective 1', 'Objective 2'],
  materials: [
    { name: 'Material 1', quantity: '1', description: 'Description' }
  ],
  procedure: [
    {
      step: 1,
      title: 'Step Title',
      description: 'Step description',
      duration: 5,
      interactive: true,
      notes: 'Important notes'
    }
  ],
  theory: {
    overview: 'Theory overview',
    principles: ['Principle 1', 'Principle 2'],
    formulas: [
      {
        name: 'Formula Name',
        expression: 'F = ma',
        description: 'Formula description',
        units: 'N',
        variables: [
          { symbol: 'F', name: 'Force', unit: 'N', description: 'Applied force' }
        ]
      }
    ],
    concepts: [
      {
        name: 'Concept Name',
        description: 'Concept description',
        examples: ['Example 1', 'Example 2']
      }
    ],
    realWorldApplications: ['Application 1', 'Application 2']
  },
  safetyNotes: ['Safety note 1', 'Safety note 2'],
  observations: [
    {
      step: 1,
      description: 'What to observe',
      expectedResult: 'Expected outcome',
      notes: 'Additional notes'
    }
  ],
  conclusions: ['Conclusion 1', 'Conclusion 2'],
  questions: [
    {
      id: 'q1',
      question: 'Your question?',
      type: 'multiple-choice', // 'multiple-choice', 'true-false', 'short-answer', 'numerical'
      options: ['Option A', 'Option B'], // for multiple choice
      correctAnswer: 'Option A',
      explanation: 'Why this is correct',
      difficulty: 'easy' // 'easy', 'medium', 'hard'
    }
  ],
  tags: ['tag1', 'tag2'],
  thumbnail: '/images/your-experiment.jpg',
  references: ['Reference 1', 'Reference 2'],
  createdAt: '2024-01-15',
  updatedAt: '2024-01-15'
}
```

### 2. Create 3D Component
Add your 3D visualization to `src/components/ExperimentViewer.tsx`:

```typescript
const YourExperiment3D: React.FC = () => {
  return (
    <group>
      {/* Your 3D meshes */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </group>
  )
}
```

### 3. Register 3D Component
Add your component to the `get3DComponent` function:

```typescript
const get3DComponent = () => {
  switch (currentExperiment.id) {
    case 'your-experiment-id':
      return <YourExperiment3D />
    // ... other cases
  }
}
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS with a custom design system. Key customization points:

- **Colors**: Defined in `tailwind.config.js` under the `colors` section
- **Animations**: Custom animations in `src/index.css`
- **Components**: Reusable component classes in `src/index.css`

### Themes
The app supports light/dark mode with system preference detection:
- **Theme Context**: `src/contexts/ThemeContext.tsx`
- **CSS Variables**: Dynamic theming with CSS custom properties
- **Component Adaptation**: All components adapt to theme changes

### Adding New Subjects
To add a new subject (e.g., Biology):

1. **Create Subject Page**: `src/pages/BiologyPage.tsx`
2. **Add Experiments**: Define biology experiments in `src/data/experiments.ts`
3. **Update Routing**: Add route in `src/App.tsx`
4. **Update Navigation**: Add to header navigation

## 🔧 Development

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting
- **Component Structure**: Functional components with hooks

### Performance Optimization
- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: React.lazy for route-based splitting
- **3D Optimization**: Efficient Three.js rendering
- **Image Optimization**: WebP format support

### Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **3D Support**: WebGL 2.0 compatible browsers

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Include tests for new functionality
- Update documentation for API changes
- Ensure responsive design for new components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NCERT**: For the comprehensive curriculum and experiment guidelines
- **Three.js Community**: For the excellent 3D graphics library
- **React Team**: For the amazing frontend framework
- **Tailwind CSS**: For the utility-first CSS framework

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/ncert-virtual-lab/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/ncert-virtual-lab/discussions)
- **Email**: contact@ncertvirtuallab.com

## 🚀 Roadmap

### Phase 1 (Current)
- ✅ Basic 3D experiment viewer
- ✅ Chemistry and Physics experiments
- ✅ Progress tracking
- ✅ Responsive design

### Phase 2 (Next)
- 🔄 More Chemistry experiments
- 🔄 More Physics experiments
- 🔄 Advanced 3D interactions
- 🔄 Audio narration

### Phase 3 (Future)
- 📋 Biology experiments
- 📋 Virtual reality support
- 📋 Multiplayer collaboration
- 📋 AI-powered assistance

---

**Built with ❤️ for students who deserve better laboratory access**