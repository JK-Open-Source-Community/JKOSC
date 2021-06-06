import React from "react";
import "./Syllabus.css";
import { Scrollbars } from "react-custom-scrollbars";

const Syllabus = (props) => {
  const cseSyllabus = [
    {
      semester: 1,
      papers: [
        {
          paper: 1,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Linear Algebra",
              unit_description:
                "Determinants, Matrices, Elementary row and column operations, Rank of matrix, Inverse of matrix, Eigen values and eigen vectors,, special types of matrices such as symmetric, skew asymmetric, Hermitian and skew hermitian matrices, Linear systems of algebraic equations, Consistency, Gauss elimination method to solve system of linear equations, Homogeneous and inhomogeneous systems of equations,, Cayley-Hamilton theorem,",
            },
            {
              unit: 2,
              unit_title: "Calculus",
              unit_description:
                "Limit, Continuity & differentiability of functions of one variable, Mean-value Theorems, Rolle’s Theorem, Leibnitz formula for nth derivatives of products of functions, Taylor and Maclaurin Theorems, Maxima, Minima, Theorems of integral calculus, Evaluation of definite & improper integrals, Functions of several variables: Partial differentiation, Change of variables in partial differentiation.",
            },
            {
              unit: 3,
              unit_title: "Vector Differential Calculus",
              unit_description:
                "Scalar and vector fields, Directional derivatives, Differentials of functions of several variables, Change of variables, Gradient of a scalar function, Conservative fields and potential functions, Divergence and curl of vector fields, Chain rules, Applications to cylindrical and Spherical polar coordinates,",
            },
            {
              unit: 4,
              unit_title: "Vector Integral Calculus",
              unit_description:
                "Multiple integrals, Evaluation of double and triple integrals, Line, Surface & Volume integrals, Volumes and Surface Areas of Solids using multiple integrals, Green’s, Gauss’s and Stoke’s Theorem and application.",
            },
            {
              unit: 5,
              unit_title: "Fourier Series",
              unit_description:
                "Introduction to Fourier series, trigonometric and exponential forms, Euler formulae for Fourier coefficients, Functions having period 2π and arbitrary period, Even & odd functions, Half range functions, Sine and cosine Fourier series, Fourier integrals,",
            },
          ],
          references: [
            "Advanced Engineering Mathematics, Erwin Kreyszig",
            "Calculus: Volume I, Aposto",
            "Calculus and Analytical Geometry, G.B. Thomas & Finney",
            "A Course in Ordinary Differential Equations, Rai, Chaudhary & Friedman",
            "Higher Engineering Mathematics, B S Grewal",
            "Mathematical Methods, Potter and Goldberg",
            "Matrix Theory, David Lewis",
          ],
        },
        {
          paper: 2,
          paper_title: "Engineering Mathematics II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title:
                "Ordinary Linear Differential Equations of first order and first degree",
              unit_description:
                "Ordinary differential equations of first order, Separable, exact & linear equations, Existence and uniqueness theorems (Statement only), Higher order linear equations, Workinsons Method of variation of parameters for particular solutions, Euler’s and Cauchy’s equations, Systems of first order equations with constant coefficients",
            },
            {
              unit: 2,
              unit_title:
                "Ordinary Linear Differential Equations (LDE) of higher order",
              unit_description:
                "Definition and general form of LDE, the operator D, complete solution of LDE as a sum of complimentary function (CF) and particular integral (PI), inverse operator rule for finding CF & PI, method of variation of parameter to find PI.",
            },
            {
              unit: 3,
              unit_title: "Complex Algebra",
              unit_description:
                "Complex numbers, Complex plane, Roots of complex numbers, Complex functions and mappings, analytical functions, Cauchy-Riemann equations, elementary complex functions such as exponential , logarithmic, trigonometric, hyperbolic functions and Inverse functions, Harmonic functions,",
            },
            {
              unit: 4,
              unit_title: "Complex Integration",
              unit_description:
                "Complex integration, Complex integrals, Contours, the Cauchy Theorem and Contour integrals, The Cauchy integral formulas, Some properties of analytical functions, Complex integration: Line integral, Cauchy’s integral theorem,",
            },
            {
              unit: 5,
              unit_title: "Contour Integration",
              unit_description:
                "Residues and contour integration, Complex power series and Taylor Series, Laurent series and the classification of Singularities, residues and the residues theorem, Evaluation of real integrals by means of residues evaluation of real integrals using integration around unit circle, around the semi circle, integrating contours having poles, on the real axis, Conformal mapping and applications",
            },
          ],
          references: [
            "Advanced Engineering Mathematics, Erwin Kreyszig",
            "Higher Engineering Mathematics, B.S. Grewal",
            "Mathematical Methods, Potter and Goldberg",
            "Mathematics for Engineers and Physicists, L.A. Pipes",
          ],
        },
        {
          paper: 3,
          paper_title: "Engineering Physics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Optics and Lasers",
              unit_description:
                "Interference of light: Interference in thin films, Newton’s rings Diffraction: Fresnel and Fraunhofer diffraction, Plane diffraction grating, Measurement of wave length, Dispersive power of grating, Resolving power, Rayleigh criterion",
            },
            {
              unit: 2,
              unit_title: "Lasers",
              unit_description:
                "Basic principles of laser, spontaneous emission- stimulated emission-population inversion, spatial and temporal coherence- coherence length, optical amplification, laser rate equations, gain coefficient, threshold condition",
            },
            {
              unit: 3,
              unit_title: "Introduction to quantum theory",
              unit_description:
                "Wave particle duality, matter waves, group & phase velocity, uncertainty principle, wave packets, Schrodinger equation",
            },
            {
              unit: 4,
              unit_title: "Solid State Physics",
              unit_description:
                "Bonding in solids, Elastic properties of solids, Defects in crystals, Lattice vibrations and thermal properties of solids, Free electron theory, Band theory of solids, Metals, Semiconductors and insulators, Electrical conductivity of simple metals (Free Electron Theory)",
            },
            {
              unit: 5,
              unit_title: "Nano Physics",
              unit_description:
                "Introduction to nanophysics, energy levels, density of states, quantum wire, single electron tunneling, quantum dot, nano-transistors and FET, NEMS and sensors.",
            },
          ],
          references: [
            "Modern Physics, J.B. Rajam",
            "Solid State Physics, Charles Kittel",
            "Optics, Ajoy Ghatak",
            "Statistical Physics, Charles Kittel",
            "Modern Physics, Beiser",
          ],
        },

        {
          paper: 4,
          paper_title: "Basic Electronics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Semiconductors and PN Junction Diode:",
              unit_description:
                "Properties of semiconductors, Intrinsic and extrinsic semiconductors, P and N type of impurities and doping, Charge densities and potential barrier, Draft and diffusion currents, PN junction working and characteristics, It’s applications as – Rectifier: Half wave, Full wave, Bridge Rectifier and their calculation for ripple, Efficiency and PIV; Clipper, Clamper and voltage doublers, Zener and Avalanch breakdown diodes, Tunnel diode, Varacter diode, Thermister",
            },
            {
              unit: 2,
              unit_title: "Bipolar Transistor:",
              unit_description:
                "Transistor action with simple bias conditions, Working and basic characteristics, CB, CE & CC configuration of transistor amplifiers, Analysis for CB and CE basic amplifiers- Determination of Q-point, dc load line and calculations for gains and impedances, Effect of load and ac load line",
            },
            {
              unit: 3,
              unit_title: "Transistor biasing:",
              unit_description:
                "Biasing circuits for CB and CE configurations, Leakage currents in CB & CE and it’s effect, Thermal stabilization & Stability factor, Different biasing arrangements for CE- their advantages and drawbacks, Transistor thermal power dissipation and rating",
            },
            {
              unit: 4,
              unit_title: "Equivalent Circuits of Transistor:",
              unit_description:
                "Transistor as four port device, Impedance, Z-parameters and circuits representation, Admittance Y parameters and circuit representation, h-parameters and circuit representation; Analysis of CB and CE circuits using h-parameters for gains and impedances",
            },
            {
              unit: 5,
              unit_title: "Field Effect Transistors:",
              unit_description:
                "Basic configuration of JFET, Biasing, Principle of operation and basic characteristics, Basics of MOSFET",
            },
          ],
          references: [
            "Electronic Devices and Circuits, Allen Moterned",
            "Integrated Electronics, Jacob Millman",
            "Electronic Devices and Circuit Theory, L. Boylestad and Nashelsky",
            "Handbook of Electronics, Gupta and Kumar",
          ],
        },
        {
          paper: 5,
          paper_title: "Computer and Programming Fundamentals",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to hardware",
              unit_description:
                "Brief introduction of binary numbers,, Functional block diagram of a computer, Stored program machine, Generation of computers, CPU, I/O, Secondary storage, Memory and its classifications.",
            },
            {
              unit: 2,
              unit_title: "Introduction to software:",
              unit_description:
                "Generations of programming languages, introduction to applications and system software, File storage, DOS and windows environment.",
            },
            {
              unit: 3,
              unit_title: "Algorithms",
              unit_description:
                "Flow charts, Structure and properties of algorithm, Algorithms for g.c.d., Factorial, Fibonacci series, Prime number generation. Linear and binary search, Sorting and bubble sort etc.",
            },
            {
              unit: 4,
              unit_title: "Basics of C Language",
              unit_description:
                "C pre-processor, Variables, Operators, Expressions, Control flow, Data types, Arrays, Pointers, Storage classes, Scope and initialization, Input/output, String processing,",
            },
            {
              unit: 5,
              unit_title: "Pointer Based Programming",
              unit_description:
                "Pointers, Dynamic data structures, Structures and unions, File handling,",
            },
          ],
          references: [
            "The Design and Analysis of Computer Algorithms, A. Aho, J. Hopcraft and J. Ullman (Addison)",
            "Fundamentals of Computer Algorithms, E. Horowitz and S.Sahani (Galgotia, New Delhi)",
            "Introd.ction to the Design and Analysis of Algorithm, S.E. Goodman et al (McGraw Hill)",
            "Algorithms, G. Brassard and P. Bratley (PHI)",
            "Programming Languages, R.Sethi (Addison-Wesley)",
            "Programming Languages Paradigm & Practice, D. Appleby and J.J. Vandekopple (McGraw Hill)",
            "The C Programming Language, B.W. Kernighan and D.M. Ritchie (PHI)",
            "Programming using the C language, R.C. Hutchinson and S.B. Just (McGraw Hill)",
            "Outline of Theory and Problems of Programming with C, B.S. Gottfried (Schaum McGraw Hill)",
            "C: The Complete Reference, H. Schildt (McGraw Hill)",
            "C Programming for Engineering & Computer Science, H.H.Tan (Tata McGraw Hill)",
          ],
        },
        {
          paper: 6,
          paper_title: "Communication Skills I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Communication",
              unit_description:
                "Importance of communication, Communication in primitive societies, Ways of communication: One way & two way, Principles of communication: Clarity, Completeness, Conciseness, Consideration, Courtesy, Correctness, Coherency, Level of communication- inter and intra personal, group to person, group to group, Methods of effective oral, Written and non-verbal communication, Process of communication (flow): Downward, Upward and horizontal communication, Official Hierarchy",
            },
            {
              unit: 2,
              unit_title: "Speaking & Reading Skills:",
              unit_description:
                "Verbal, non-verbal & Visual Communication, Elementary phonetics: speech sounds, Consonant & Vowel Sounds, Phonetic symbols, Horizons-tone, frequency, rate, volume, depth, extempore speech, Rate of speech",
            },
            {
              unit: 3,
              unit_title: "Writing Skills & Business correspondence:",
              unit_description:
                "Comprehension of ideas in a passage, Expansion of an idea for a particular purpose, Change of words into different parts of speech, Idioms, Antonyms and synonyms, Drafting Business letters, CV & Resume, Application for jobs, Power-point presentation, Using Microsoft Office",
            },
          ],
          references: [
            "1. Essentials of Business Communication, Rajendra Pal & J S Korlahalli",
            "2. Business Communication, Gyani",
            "3. Effective Communication, Ludlow and Panthon",
            "4. A Practical English Grammar, Thomson and Marlinet",
            "5. English Conversation Practice, Grount Taylor",
            "6. Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "7. Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "8. Communication Skill, R Datta Roy and K K Dhir",
          ],
        },
      ],
    },
    {
      semester: 2,
      papers: [
        {
          paper: 1,
          paper_title: "ENGINEERING MATHEMATICS III",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Laplace Transform",
              unit_description:
                "Definitions & existence conditions, Laplace transforms of some useful functions, Inverse Laplace Transform, Operational Properties of the Laplace Transform, Linearity, scaling, time shifting, shifting in s-domain, time differentiation and time integration, frequency differentiation & integration, convolutional property, Inversion Integral, Transforms of Periodic functions, Use of Laplace transforms in the solution of differential equations and analysis of electrical circuits.",
            },
            {
              unit: 2,
              unit_title: "Fourier Transform",
              unit_description:
                "Definitions & existence conditions, Fourier transforms of some useful functions, Inverse Fourier Transform, l Properties of the Fourier Transform, Linearity, symmetry, scaling, time & frequency shifting, time differentiation and time integration, frequency differentiation & integration, convolutional property, Transforms of Periodic functions, frequency and amplitude spectra of a function, fourier cosine & sine transforms",
            },
            {
              unit: 3,
              unit_title: "Special Mathematical Functions:",
              unit_description:
                "Series Solutions of differential equations, Power series solutions of homogeneous equations , Singular points of linear differential equations, Gamma function ( Г(n)) , recurrence formula for Г(n) , value of Г(1/2), Beta function, relationship between Gamma & Beta functions, Error functions-definitions and simple properties, complimentary error function & Q function.",
            },
            {
              unit: 4,
              unit_title: "Legendre Functionsr",
              unit_description:
                "Legendre differential equation, Legendre polynomial, Rodrigue’s formulae, generating function, Recurrence formulae, Orthogonality",
            },
            {
              unit: 5,
              unit_title: "Bessel Functions",
              unit_description:
                "Bessel’s differential equation, Bessel functions of first and second types,, Recurrence formulae, Generating function, Orthogonality, Modified Bessel Functions,",
            },
          ],
          references: [
            "1. Applied Mathematics for Mathematician & Engineers: L A Pipes (TMH)",
            "2. Engineering Mathematics: H K Das (S Chand & Co. Ltd.)",
            "3. Engineering Mathematics: B.S. Grewal (Khanna Pub.)",
            "4. Advanced Engineering Mathematics: Wylie C R (TMH)",
            "5. A Course in Ordinary Differential Equations: Rai, Chaudhary & Friedman",
            "6. Advance Engineering Mathematics: E. Kreyszig",
          ],
        },
        {
          paper: 2,
          paper_title: "Applied Numerical Analysis",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description:
                "Errors: Sources and types of errors, measurements. Significant digits. Floating point representation of numbers.  Roots of Non-linear Algebraic and Transcendental Functions , Bisection, Regula-Falsi, Secant and Newton-Raphson Methods, Fixed points iteration, Rate of convergence",
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description:
                "Numerical solution of system of linear equations, Gauss elimination method, LU decomposition, ill-conditioned systems, Gauss-Seidel and Jacobi method, Rate of convergence.",
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description:
                "Polynomial interpolation: Finite differences, Newton’s forward and backward differences interpolation polynomials, Newton’s divided differences interpolation polynomial, Lagrange’s polynomial. Curve fitting: Method of least squares.",
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description:
                "Numerical differentiation and integration, Formulae for derivatives in the case of equally spaced points, Trapezoidal and Simpson’s rules, Errors in integration formulae. Monte-Carlo Method: Basic principles, One dimensional and Multi-dimensional integrals.",
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description:
                "Single-step and multistep methods for solving ordinary differential equations: Taylor series method, Euler’s method, Modified Euler’s method, Runge-Kutta methods.Adam’s & Milne’s method.Numerical solution for boundary value problems, Finite difference methods for solving Laplace’s equation in a rectangular region. Finite Element methods and its applications.",
            },
          ],
          references: [
            "1. Numerical Methods for Science and Engg.: Ralph G. Stanton (Prentice-Hall of India)",
            "2. Elementary Numerical Analysis An algorithmic approach: S.D Conte and Carl de Boor",
          ],
        },
        {
          paper: 3,
          paper_title: "Digital Electronics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Binary systems and Boolean Algebra:",
              unit_description:
                "Digital systems, Number representation in different bases and their inter conversion, Compliments, Arithmetic operations on binary numbers, Binary codes; Basic theorems and properties, Switching algebra, Switching function and their representations. Canonical forms of switching functions and their transformations, operations over switching functions, Digital logic gates- symbols, logic expression and their truth tables.",
            },
            {
              unit: 2,
              unit_title: "Digital ICs & Combinational Logic Circuits:",
              unit_description:
                "Characteristics of digital ICs. Introduction to logic families- RTL,DTL, TTL,ECL,MOS and CMOS circuits and comparison of their performance.  Binary adder and Subtractor circuits, Magnitude comparator, Decoders, Encoders, Multiplexer and demultiplexer, Realization of switching expressions by decoders, encoders, multiplexer and Demultiplexer, Programmable logic circuits, Tri-state logic.",
            },
            {
              unit: 3,
              unit_title: "Combinational Circuit Design:",
              unit_description:
                "Minimization Techniques, Realization of switching expressions by Karnaugh map, VEM and Quinne-Mclusky methods, Combinational circuits and their analysis. Realization of switching expressions by two level AND, OR, NOT gates; NAND gates only; NOR gates only and Ex-OR and AND gates only; MUX based circuit design",
            },
            {
              unit: 4,
              unit_title: "Synchronous Sequential Logic Circuits:",
              unit_description:
                "Sequential circuits, latches and Flip Flops, Analysis of clocked sequential circuits. State reduction and assignment, design of synchronous circuits, shift registers, ripple counters, synchronous counters.",
            },
            {
              unit: 5,
              unit_title: "Asynchronous Sequential Logic:",
              unit_description:
                "Analysis procedure, circuits with latches, Design procedure, reduction of states and flow tables .Races and race Free State assignments, Hazards.",
            },
          ],
          references: [
            "1. Digital Design : Morris Mano (PHI)",
            "2. Digital circuits & logic design: S.C.Lee (PHI)",
            "3. Digital electronics (circuits, systems & ICs) : S.N.Ali (Galgotia)",
            "4. Digital electronics: W.H.Gothmann (PHI)",
            "5. Switching theory : A.K Gautam (Katsons)",
          ],
        },
        {
          paper: 4,
          paper_title: "Electronic Devices and Circuits",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Transistors amplifiers",
              unit_description:
                "Classification of amplifiers , Comparative study of CB,CE and CC amplifiers characteristics RC coupled amplifiers – analysis of gain in different frequency ranges and BW calculations, Multistage coupling –Cascade, cascade Darlington pair ,effect of coupling on gain & BW, Transformer coupled amplifiers, DC coupled amplifiers , Difference amplifiers .",
            },
            {
              unit: 2,
              unit_title: "Power amplifiers:",
              unit_description:
                "Class A, Class B, and Push-Pull amplifiers- Their working , advantages and drawbacks , comparison ; Class C, Class D amplifiers, stagger tuned amplifiers; FET amplifier configurations and analysis.",
            },
            {
              unit: 3,
              unit_title: "Feedback Amplifiers:",
              unit_description:
                "Types of feedback and different feedback schemes in amplifiers ; General characteristics of negative feedback amplifiers and their effect on gain impedances , distortion, and noise , Emitter follower.",
            },
            {
              unit: 4,
              unit_title: "Oscillators:",
              unit_description:
                "Barkhausen criterion for oscillations Tuned collector oscillator, RC phase shift and Wein bridge oscillator, Crystal oscillator, Frequency stabilization.",
            },
            {
              unit: 5,
              unit_title: "Power supplies:",
              unit_description:
                "Block diagram of Power Supply (PS) and it’s constituent circuits , Electronics voltage stabilizer, Zenner and transistor circuits for stabilization, Constant current, and current limited PS, Basics of SMPS and UPS.",
            },
          ],
          references: [
            "1.Integrated Electronics: Jacob Millman",
            "2.Electronics Devices and Circuits Theory: Robert L. Boylestad and Nashelsky",
            "3.Handbook of Electronics: Gupta and Kumar",
          ],
        },
        {
          paper: 5,
          paper_title: "Circuit Theory",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Resistive Circuit Analysis",
              unit_description:
                "Circuit elements and their classification; LLFPB circuits; Nodal and Mesh analysis; Equivalence of networks; Duality; Source trans formations; T- transformation;",
            },
            {
              unit: 2,
              unit_title: "Networks Theorems",
              unit_description:
                "Superposition, Thevenin & Norton, Maximum power transfer, Reciprocity, Millman, Substitution & Tellgene’s theorems and their applications",
            },
            {
              unit: 3,
              unit_title: "Transient Circuit Analysis",
              unit_description:
                "Natural and forced response; Evaluation of initial conditions; Transient and steady state responses of simple RL, RC and RLC circuits to arbitrary excitations.",
            },
            {
              unit: 4,
              unit_title: "Sinusoidal Analysis",
              unit_description:
                "Sinusoidal and Complex forcing functions; Phasor representation of Complex functions; sinusoidal steady-state response; Concept of Complex frequency; Damped Sinusoidal forcing function- Natural and forced response; Frequency response – parallel and series resonance. Mutual Impedance and coefficient of Coupling; Unity Coupled Coils;",
            },
            {
              unit: 5,
              unit_title: "Classical Filters",
              unit_description:
                "Characterization of Two ports, z,y, h and transmission parameters, Interconnection of two ports, Analysis of common two ports.  Filter fundamentals –pass and stop bands, The Constant –K low-pass and high-pass filters; The m-derived T and  sections; Band-pass and Band-elimination filters; Impedance Matching half- sections.",
            },
          ],
          references: [
            "1. Engineering Circuit Analysis: William H. Hayt, Jr. Jac E. Kemmerly. (TMH)",
            "2. Electric Curcuits: David A. Bell (PHI)",
            "3. Network Analysis : Van Valkenburg (PHI)",
            "4. Basic Circuit theory : Desoer and Kuh (TMH)",
            "5. Network & System : D. Roy. Chandhary (New Age International)",
            "6. Circuit theory : Chakarbarti (Dhanpat rai & Sons)",
          ],
        },
        {
          paper: 6,
          paper_title: "Communication Skills II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Advance communication",
              unit_description:
                "Objectives of communication: Information, Advice, Order, suggestion, Persuasion, Education, Warning, Raising morale, Motivation, Audio-visual communication: Use of audio visual aids for effective communication, Role of news papers, Radio, Cinema and TV, Barrier to communication and overcoming barriers",
            },
            {
              unit: 2,
              unit_title:
                "Interactive Communication Skills & Personality Development",
              unit_description:
                "Group Discussions, Debates, Facing an interview, know your body language, confidence building, e-mail etiquette, The art of listening: learning through listening, Hearing vs. Listening,",
            },
            {
              unit: 3,
              unit_title: "Speaking & writing Skill",
              unit_description:
                "Syllable & syllable stress, summarizing a passage for official usage, Précis writing, Report writing- importance of reports, preparing a report, technical report writing, Conversational skill, Telephonic Etiquettes",
            },
          ],
          references: [
            "1. Essentials of Business Communication, Rajendra Pal and J S Korlahalli",
            "2. Business Communication, Gyani",
            "3. Effective Communication, Ludlow and Panton",
            "4. A Practical English Grammar, Thomson and Martinet",
            "5. English Conversation Practice, Grount Taylor",
            "6. Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "7. Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "8. Communication Skill, R Datta Roy and K K Dhir",
          ],
        },
      ],
    },
    {
      semester: 3,
      papers: [
        {
          paper: 1,
          paper_title: "Discrete Mathematical Structure",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Mathematical Logic:",
              unit_description:
                "Statements, Connectives, Statement formulas, Truth functional rules, Interpretation of formulas, Tautologies, Equivalence, Functionally complete set of connectives, Normal forms, Inference, Theory of statement calculus, Consistency of premises,",
            },
            {
              unit: 2,
              unit_title: "Predicate Logic",
              unit_description:
                "Predicates, statement functions, Quantification, Interpretation of predicate formulas, Inference theory for predicate calculus, Informal & formal proofs",
            },
            {
              unit: 3,
              unit_title: "Set Theory:",
              unit_description:
                "Basics of set theory, Properties of relations, equivalence & compatibility relation, Representation of relations, Reflective, symmetric & transitive closures, Characteristic functions of a set and its properties, Principle of inclusion and exclusion, its applications",
            },
            {
              unit: 4,
              unit_title: "Graph Theory:",
              unit_description:
                "Definition Simple digraphs, Matrix representations, Paths, Distances, Connectedness of digraphs, Path and reachability matrices, Boolean sum and product of bit matrices, Warshall’s algorithm for transitive closure of relations",
            },
            {
              unit: 5,
              unit_title: "Lattices",
              unit_description:
                "Partially ordered sets, Hasse diagrams, Elements of poset, Bounds, Lattices, Joint, Meet, Different types of lattices and their examples. Distributive and Modular lattices,",
            },
          ],
          references: [
            "1 Discrete Mathematical Structures with Application to computer Science: Tremblay & Manohar",
            "2. Discrete Mathematical Structures: Preparata and Yeh",
          ],
        },
        {
          paper: 2,
          paper_title: "Database Systems",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction:",
              unit_description:
                "Data, information and knowledge, Characteristics of database approach, Data independence, Architecture of database system, Data dictionary, Types of database language, database system life cycle, Overview of hierarchical, network and relational model. Relations and Codd’s rules, Concepts of keys, Relation Algebra – Select, Project, Joins, Set operations, Update operations – tuple relational calculus, Relational Calculus vs. relational algebra. Data definition, data manipulation, view definition, nested queries, updation, Embedded SQL, Handling of nulls and cursors.",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 4,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 5,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 6,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 7,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 8,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
  ];

  const eceSyllabus = [
    {
      semester: 1,
      papers: [
        {
          paper: 1,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Linear Algebra",
              unit_description:
                "Determinants, Matrices, Elementary row and column operations, Rank of matrix, Inverse of matrix, Eigen values and eigen vectors,, special types of matrices such as symmetric, skew asymmetric, Hermitian and skew hermitian matrices, Linear systems of algebraic equations, Consistency, Gauss elimination method to solve system of linear equations, Homogeneous and inhomogeneous systems of equations,, Cayley-Hamilton theorem,",
            },
            {
              unit: 2,
              unit_title: "Calculus",
              unit_description:
                "Limit, Continuity & differentiability of functions of one variable, Mean-value Theorems, Rolle’s Theorem, Leibnitz formula for nth derivatives of products of functions, Taylor and Maclaurin Theorems, Maxima, Minima, Theorems of integral calculus, Evaluation of definite & improper integrals, Functions of several variables: Partial differentiation, Change of variables in partial differentiation.",
            },
            {
              unit: 3,
              unit_title: "Vector Differential Calculus",
              unit_description:
                "Scalar and vector fields, Directional derivatives, Differentials of functions of several variables, Change of variables, Gradient of a scalar function, Conservative fields and potential functions, Divergence and curl of vector fields, Chain rules, Applications to cylindrical and Spherical polar coordinates,",
            },
            {
              unit: 4,
              unit_title: "Vector Integral Calculus",
              unit_description:
                "Multiple integrals, Evaluation of double and triple integrals, Line, Surface & Volume integrals, Volumes and Surface Areas of Solids using multiple integrals, Green’s, Gauss’s and Stoke’s Theorem and application.",
            },
            {
              unit: 5,
              unit_title: "Fourier Series",
              unit_description:
                "Introduction to Fourier series, trigonometric and exponential forms, Euler formulae for Fourier coefficients, Functions having period 2π and arbitrary period, Even & odd functions, Half range functions, Sine and cosine Fourier series, Fourier integrals,",
            },
          ],
          references: [
            "Advanced Engineering Mathematics, Erwin Kreyszig",
            "Calculus: Volume I, Aposto",
            "Calculus and Analytical Geometry, G.B. Thomas & Finney",
            "A Course in Ordinary Differential Equations, Rai, Chaudhary & Friedman",
            "Higher Engineering Mathematics, B S Grewal",
            "Mathematical Methods, Potter and Goldberg",
            "Matrix Theory, David Lewis",
          ],
        },
        {
          paper: 2,
          paper_title: "Engineering Mathematics II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title:
                "Ordinary Linear Differential Equations of first order and first degree",
              unit_description:
                "Ordinary differential equations of first order, Separable, exact & linear equations, Existence and uniqueness theorems (Statement only), Higher order linear equations, Workinsons Method of variation of parameters for particular solutions, Euler’s and Cauchy’s equations, Systems of first order equations with constant coefficients",
            },
            {
              unit: 2,
              unit_title:
                "Ordinary Linear Differential Equations (LDE) of higher order",
              unit_description:
                "Definition and general form of LDE, the operator D, complete solution of LDE as a sum of complimentary function (CF) and particular integral (PI), inverse operator rule for finding CF & PI, method of variation of parameter to find PI.",
            },
            {
              unit: 3,
              unit_title: "Complex Algebra",
              unit_description:
                "Complex numbers, Complex plane, Roots of complex numbers, Complex functions and mappings, analytical functions, Cauchy-Riemann equations, elementary complex functions such as exponential , logarithmic, trigonometric, hyperbolic functions and Inverse functions, Harmonic functions,",
            },
            {
              unit: 4,
              unit_title: "Complex Integration",
              unit_description:
                "Complex integration, Complex integrals, Contours, the Cauchy Theorem and Contour integrals, The Cauchy integral formulas, Some properties of analytical functions, Complex integration: Line integral, Cauchy’s integral theorem,",
            },
            {
              unit: 5,
              unit_title: "Contour Integration",
              unit_description:
                "Residues and contour integration, Complex power series and Taylor Series, Laurent series and the classification of Singularities, residues and the residues theorem, Evaluation of real integrals by means of residues evaluation of real integrals using integration around unit circle, around the semi circle, integrating contours having poles, on the real axis, Conformal mapping and applications",
            },
          ],
          references: [
            "Advanced Engineering Mathematics, Erwin Kreyszig",
            "Higher Engineering Mathematics, B.S. Grewal",
            "Mathematical Methods, Potter and Goldberg",
            "Mathematics for Engineers and Physicists, L.A. Pipes",
          ],
        },
        {
          paper: 3,
          paper_title: "Engineering Physics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Optics and Lasers",
              unit_description:
                "Interference of light: Interference in thin films, Newton’s rings Diffraction: Fresnel and Fraunhofer diffraction, Plane diffraction grating, Measurement of wave length, Dispersive power of grating, Resolving power, Rayleigh criterion",
            },
            {
              unit: 2,
              unit_title: "Lasers",
              unit_description:
                "Basic principles of laser, spontaneous emission- stimulated emission-population inversion, spatial and temporal coherence- coherence length, optical amplification, laser rate equations, gain coefficient, threshold condition",
            },
            {
              unit: 3,
              unit_title: "Introduction to quantum theory",
              unit_description:
                "Wave particle duality, matter waves, group & phase velocity, uncertainty principle, wave packets, Schrodinger equation",
            },
            {
              unit: 4,
              unit_title: "Solid State Physics",
              unit_description:
                "Bonding in solids, Elastic properties of solids, Defects in crystals, Lattice vibrations and thermal properties of solids, Free electron theory, Band theory of solids, Metals, Semiconductors and insulators, Electrical conductivity of simple metals (Free Electron Theory)",
            },
            {
              unit: 5,
              unit_title: "Nano Physics",
              unit_description:
                "Introduction to nanophysics, energy levels, density of states, quantum wire, single electron tunneling, quantum dot, nano-transistors and FET, NEMS and sensors.",
            },
          ],
          references: [
            "Modern Physics, J.B. Rajam",
            "Solid State Physics, Charles Kittel",
            "Optics, Ajoy Ghatak",
            "Statistical Physics, Charles Kittel",
            "Modern Physics, Beiser",
          ],
        },

        {
          paper: 4,
          paper_title: "Basic Electronics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Semiconductors and PN Junction Diode:",
              unit_description:
                "Properties of semiconductors, Intrinsic and extrinsic semiconductors, P and N type of impurities and doping, Charge densities and potential barrier, Draft and diffusion currents, PN junction working and characteristics, It’s applications as – Rectifier: Half wave, Full wave, Bridge Rectifier and their calculation for ripple, Efficiency and PIV; Clipper, Clamper and voltage doublers, Zener and Avalanch breakdown diodes, Tunnel diode, Varacter diode, Thermister",
            },
            {
              unit: 2,
              unit_title: "Bipolar Transistor:",
              unit_description:
                "Transistor action with simple bias conditions, Working and basic characteristics, CB, CE & CC configuration of transistor amplifiers, Analysis for CB and CE basic amplifiers- Determination of Q-point, dc load line and calculations for gains and impedances, Effect of load and ac load line",
            },
            {
              unit: 3,
              unit_title: "Transistor biasing:",
              unit_description:
                "Biasing circuits for CB and CE configurations, Leakage currents in CB & CE and it’s effect, Thermal stabilization & Stability factor, Different biasing arrangements for CE- their advantages and drawbacks, Transistor thermal power dissipation and rating",
            },
            {
              unit: 4,
              unit_title: "Equivalent Circuits of Transistor:",
              unit_description:
                "Transistor as four port device, Impedance, Z-parameters and circuits representation, Admittance Y parameters and circuit representation, h-parameters and circuit representation; Analysis of CB and CE circuits using h-parameters for gains and impedances",
            },
            {
              unit: 5,
              unit_title: "Field Effect Transistors:",
              unit_description:
                "Basic configuration of JFET, Biasing, Principle of operation and basic characteristics, Basics of MOSFET",
            },
          ],
          references: [
            "Electronic Devices and Circuits, Allen Moterned",
            "Integrated Electronics, Jacob Millman",
            "Electronic Devices and Circuit Theory, L. Boylestad and Nashelsky",
            "Handbook of Electronics, Gupta and Kumar",
          ],
        },
        {
          paper: 5,
          paper_title: "Computer and Programming Fundamentals",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to hardware",
              unit_description:
                "Brief introduction of binary numbers,, Functional block diagram of a computer, Stored program machine, Generation of computers, CPU, I/O, Secondary storage, Memory and its classifications.",
            },
            {
              unit: 2,
              unit_title: "Introduction to software:",
              unit_description:
                "Generations of programming languages, introduction to applications and system software, File storage, DOS and windows environment.",
            },
            {
              unit: 3,
              unit_title: "Algorithms",
              unit_description:
                "Flow charts, Structure and properties of algorithm, Algorithms for g.c.d., Factorial, Fibonacci series, Prime number generation. Linear and binary search, Sorting and bubble sort etc.",
            },
            {
              unit: 4,
              unit_title: "Basics of C Language",
              unit_description:
                "C pre-processor, Variables, Operators, Expressions, Control flow, Data types, Arrays, Pointers, Storage classes, Scope and initialization, Input/output, String processing,",
            },
            {
              unit: 5,
              unit_title: "Pointer Based Programming",
              unit_description:
                "Pointers, Dynamic data structures, Structures and unions, File handling,",
            },
          ],
          references: [
            "The Design and Analysis of Computer Algorithms, A. Aho, J. Hopcraft and J. Ullman (Addison)",
            "Fundamentals of Computer Algorithms, E. Horowitz and S.Sahani (Galgotia, New Delhi)",
            "Introd.ction to the Design and Analysis of Algorithm, S.E. Goodman et al (McGraw Hill)",
            "Algorithms, G. Brassard and P. Bratley (PHI)",
            "Programming Languages, R.Sethi (Addison-Wesley)",
            "Programming Languages Paradigm & Practice, D. Appleby and J.J. Vandekopple (McGraw Hill)",
            "The C Programming Language, B.W. Kernighan and D.M. Ritchie (PHI)",
            "Programming using the C language, R.C. Hutchinson and S.B. Just (McGraw Hill)",
            "Outline of Theory and Problems of Programming with C, B.S. Gottfried (Schaum McGraw Hill)",
            "C: The Complete Reference, H. Schildt (McGraw Hill)",
            "C Programming for Engineering & Computer Science, H.H.Tan (Tata McGraw Hill)",
          ],
        },
        {
          paper: 6,
          paper_title: "Communication Skills I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Communication",
              unit_description:
                "Importance of communication, Communication in primitive societies, Ways of communication: One way & two way, Principles of communication: Clarity, Completeness, Conciseness, Consideration, Courtesy, Correctness, Coherency, Level of communication- inter and intra personal, group to person, group to group, Methods of effective oral, Written and non-verbal communication, Process of communication (flow): Downward, Upward and horizontal communication, Official Hierarchy",
            },
            {
              unit: 2,
              unit_title: "Speaking & Reading Skills:",
              unit_description:
                "Verbal, non-verbal & Visual Communication, Elementary phonetics: speech sounds, Consonant & Vowel Sounds, Phonetic symbols, Horizons-tone, frequency, rate, volume, depth, extempore speech, Rate of speech",
            },
            {
              unit: 3,
              unit_title: "Writing Skills & Business correspondence:",
              unit_description:
                "Comprehension of ideas in a passage, Expansion of an idea for a particular purpose, Change of words into different parts of speech, Idioms, Antonyms and synonyms, Drafting Business letters, CV & Resume, Application for jobs, Power-point presentation, Using Microsoft Office",
            },
          ],
          references: [
            "1. Essentials of Business Communication, Rajendra Pal & J S Korlahalli",
            "2. Business Communication, Gyani",
            "3. Effective Communication, Ludlow and Panthon",
            "4. A Practical English Grammar, Thomson and Marlinet",
            "5. English Conversation Practice, Grount Taylor",
            "6. Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "7. Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "8. Communication Skill, R Datta Roy and K K Dhir",
          ],
        },
      ],
    },
    {
      semester: 2,
      papers: [
        {
          paper: 1,
          paper_title: "ENGINEERING MATHEMATICS III",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Laplace Transform",
              unit_description:
                "Definitions & existence conditions, Laplace transforms of some useful functions, Inverse Laplace Transform, Operational Properties of the Laplace Transform, Linearity, scaling, time shifting, shifting in s-domain, time differentiation and time integration, frequency differentiation & integration, convolutional property, Inversion Integral, Transforms of Periodic functions, Use of Laplace transforms in the solution of differential equations and analysis of electrical circuits.",
            },
            {
              unit: 2,
              unit_title: "Fourier Transform",
              unit_description:
                "Definitions & existence conditions, Fourier transforms of some useful functions, Inverse Fourier Transform, l Properties of the Fourier Transform, Linearity, symmetry, scaling, time & frequency shifting, time differentiation and time integration, frequency differentiation & integration, convolutional property, Transforms of Periodic functions, frequency and amplitude spectra of a function, fourier cosine & sine transforms",
            },
            {
              unit: 3,
              unit_title: "Special Mathematical Functions:",
              unit_description:
                "Series Solutions of differential equations, Power series solutions of homogeneous equations , Singular points of linear differential equations, Gamma function ( Г(n)) , recurrence formula for Г(n) , value of Г(1/2), Beta function, relationship between Gamma & Beta functions, Error functions-definitions and simple properties, complimentary error function & Q function.",
            },
            {
              unit: 4,
              unit_title: "Legendre Functionsr",
              unit_description:
                "Legendre differential equation, Legendre polynomial, Rodrigue’s formulae, generating function, Recurrence formulae, Orthogonality",
            },
            {
              unit: 5,
              unit_title: "Bessel Functions",
              unit_description:
                "Bessel’s differential equation, Bessel functions of first and second types,, Recurrence formulae, Generating function, Orthogonality, Modified Bessel Functions,",
            },
          ],
          references: [
            "1. Applied Mathematics for Mathematician & Engineers: L A Pipes (TMH)",
            "2. Engineering Mathematics: H K Das (S Chand & Co. Ltd.)",
            "3. Engineering Mathematics: B.S. Grewal (Khanna Pub.)",
            "4. Advanced Engineering Mathematics: Wylie C R (TMH)",
            "5. A Course in Ordinary Differential Equations: Rai, Chaudhary & Friedman",
            "6. Advance Engineering Mathematics: E. Kreyszig",
          ],
        },
        {
          paper: 2,
          paper_title: "Applied Numerical Analysis",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description:
                "Errors: Sources and types of errors, measurements. Significant digits. Floating point representation of numbers.  Roots of Non-linear Algebraic and Transcendental Functions , Bisection, Regula-Falsi, Secant and Newton-Raphson Methods, Fixed points iteration, Rate of convergence",
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description:
                "Numerical solution of system of linear equations, Gauss elimination method, LU decomposition, ill-conditioned systems, Gauss-Seidel and Jacobi method, Rate of convergence.",
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description:
                "Polynomial interpolation: Finite differences, Newton’s forward and backward differences interpolation polynomials, Newton’s divided differences interpolation polynomial, Lagrange’s polynomial. Curve fitting: Method of least squares.",
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description:
                "Numerical differentiation and integration, Formulae for derivatives in the case of equally spaced points, Trapezoidal and Simpson’s rules, Errors in integration formulae. Monte-Carlo Method: Basic principles, One dimensional and Multi-dimensional integrals.",
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description:
                "Single-step and multistep methods for solving ordinary differential equations: Taylor series method, Euler’s method, Modified Euler’s method, Runge-Kutta methods.Adam’s & Milne’s method.Numerical solution for boundary value problems, Finite difference methods for solving Laplace’s equation in a rectangular region. Finite Element methods and its applications.",
            },
          ],
          references: [
            "1. Numerical Methods for Science and Engg.: Ralph G. Stanton (Prentice-Hall of India)",
            "2. Elementary Numerical Analysis An algorithmic approach: S.D Conte and Carl de Boor",
          ],
        },
        {
          paper: 3,
          paper_title: "Digital Electronics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Binary systems and Boolean Algebra:",
              unit_description:
                "Digital systems, Number representation in different bases and their inter conversion, Compliments, Arithmetic operations on binary numbers, Binary codes; Basic theorems and properties, Switching algebra, Switching function and their representations. Canonical forms of switching functions and their transformations, operations over switching functions, Digital logic gates- symbols, logic expression and their truth tables.",
            },
            {
              unit: 2,
              unit_title: "Digital ICs & Combinational Logic Circuits:",
              unit_description:
                "Characteristics of digital ICs. Introduction to logic families- RTL,DTL, TTL,ECL,MOS and CMOS circuits and comparison of their performance.  Binary adder and Subtractor circuits, Magnitude comparator, Decoders, Encoders, Multiplexer and demultiplexer, Realization of switching expressions by decoders, encoders, multiplexer and Demultiplexer, Programmable logic circuits, Tri-state logic.",
            },
            {
              unit: 3,
              unit_title: "Combinational Circuit Design:",
              unit_description:
                "Minimization Techniques, Realization of switching expressions by Karnaugh map, VEM and Quinne-Mclusky methods, Combinational circuits and their analysis. Realization of switching expressions by two level AND, OR, NOT gates; NAND gates only; NOR gates only and Ex-OR and AND gates only; MUX based circuit design",
            },
            {
              unit: 4,
              unit_title: "Synchronous Sequential Logic Circuits:",
              unit_description:
                "Sequential circuits, latches and Flip Flops, Analysis of clocked sequential circuits. State reduction and assignment, design of synchronous circuits, shift registers, ripple counters, synchronous counters.",
            },
            {
              unit: 5,
              unit_title: "Asynchronous Sequential Logic:",
              unit_description:
                "Analysis procedure, circuits with latches, Design procedure, reduction of states and flow tables .Races and race Free State assignments, Hazards.",
            },
          ],
          references: [
            "1. Digital Design : Morris Mano (PHI)",
            "2. Digital circuits & logic design: S.C.Lee (PHI)",
            "3. Digital electronics (circuits, systems & ICs) : S.N.Ali (Galgotia)",
            "4. Digital electronics: W.H.Gothmann (PHI)",
            "5. Switching theory : A.K Gautam (Katsons)",
          ],
        },
        {
          paper: 4,
          paper_title: "Electronic Devices and Circuits",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Transistors amplifiers",
              unit_description:
                "Classification of amplifiers , Comparative study of CB,CE and CC amplifiers characteristics RC coupled amplifiers – analysis of gain in different frequency ranges and BW calculations, Multistage coupling –Cascade, cascade Darlington pair ,effect of coupling on gain & BW, Transformer coupled amplifiers, DC coupled amplifiers , Difference amplifiers .",
            },
            {
              unit: 2,
              unit_title: "Power amplifiers:",
              unit_description:
                "Class A, Class B, and Push-Pull amplifiers- Their working , advantages and drawbacks , comparison ; Class C, Class D amplifiers, stagger tuned amplifiers; FET amplifier configurations and analysis.",
            },
            {
              unit: 3,
              unit_title: "Feedback Amplifiers:",
              unit_description:
                "Types of feedback and different feedback schemes in amplifiers ; General characteristics of negative feedback amplifiers and their effect on gain impedances , distortion, and noise , Emitter follower.",
            },
            {
              unit: 4,
              unit_title: "Oscillators:",
              unit_description:
                "Barkhausen criterion for oscillations Tuned collector oscillator, RC phase shift and Wein bridge oscillator, Crystal oscillator, Frequency stabilization.",
            },
            {
              unit: 5,
              unit_title: "Power supplies:",
              unit_description:
                "Block diagram of Power Supply (PS) and it’s constituent circuits , Electronics voltage stabilizer, Zenner and transistor circuits for stabilization, Constant current, and current limited PS, Basics of SMPS and UPS.",
            },
          ],
          references: [
            "1.Integrated Electronics: Jacob Millman",
            "2.Electronics Devices and Circuits Theory: Robert L. Boylestad and Nashelsky",
            "3.Handbook of Electronics: Gupta and Kumar",
          ],
        },
        {
          paper: 5,
          paper_title: "Circuit Theory",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Resistive Circuit Analysis",
              unit_description:
                "Circuit elements and their classification; LLFPB circuits; Nodal and Mesh analysis; Equivalence of networks; Duality; Source trans formations; T- transformation;",
            },
            {
              unit: 2,
              unit_title: "Networks Theorems",
              unit_description:
                "Superposition, Thevenin & Norton, Maximum power transfer, Reciprocity, Millman, Substitution & Tellgene’s theorems and their applications",
            },
            {
              unit: 3,
              unit_title: "Transient Circuit Analysis",
              unit_description:
                "Natural and forced response; Evaluation of initial conditions; Transient and steady state responses of simple RL, RC and RLC circuits to arbitrary excitations.",
            },
            {
              unit: 4,
              unit_title: "Sinusoidal Analysis",
              unit_description:
                "Sinusoidal and Complex forcing functions; Phasor representation of Complex functions; sinusoidal steady-state response; Concept of Complex frequency; Damped Sinusoidal forcing function- Natural and forced response; Frequency response – parallel and series resonance. Mutual Impedance and coefficient of Coupling; Unity Coupled Coils;",
            },
            {
              unit: 5,
              unit_title: "Classical Filters",
              unit_description:
                "Characterization of Two ports, z,y, h and transmission parameters, Interconnection of two ports, Analysis of common two ports.  Filter fundamentals –pass and stop bands, The Constant –K low-pass and high-pass filters; The m-derived T and  sections; Band-pass and Band-elimination filters; Impedance Matching half- sections.",
            },
          ],
          references: [
            "1. Engineering Circuit Analysis: William H. Hayt, Jr. Jac E. Kemmerly. (TMH)",
            "2. Electric Curcuits: David A. Bell (PHI)",
            "3. Network Analysis : Van Valkenburg (PHI)",
            "4. Basic Circuit theory : Desoer and Kuh (TMH)",
            "5. Network & System : D. Roy. Chandhary (New Age International)",
            "6. Circuit theory : Chakarbarti (Dhanpat rai & Sons)",
          ],
        },
        {
          paper: 6,
          paper_title: "Communication Skills II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Advance communication",
              unit_description:
                "Objectives of communication: Information, Advice, Order, suggestion, Persuasion, Education, Warning, Raising morale, Motivation, Audio-visual communication: Use of audio visual aids for effective communication, Role of news papers, Radio, Cinema and TV, Barrier to communication and overcoming barriers",
            },
            {
              unit: 2,
              unit_title:
                "Interactive Communication Skills & Personality Development",
              unit_description:
                "Group Discussions, Debates, Facing an interview, know your body language, confidence building, e-mail etiquette, The art of listening: learning through listening, Hearing vs. Listening,",
            },
            {
              unit: 3,
              unit_title: "Speaking & writing Skill",
              unit_description:
                "Syllable & syllable stress, summarizing a passage for official usage, Précis writing, Report writing- importance of reports, preparing a report, technical report writing, Conversational skill, Telephonic Etiquettes",
            },
          ],
          references: [
            "1. Essentials of Business Communication, Rajendra Pal and J S Korlahalli",
            "2. Business Communication, Gyani",
            "3. Effective Communication, Ludlow and Panton",
            "4. A Practical English Grammar, Thomson and Martinet",
            "5. English Conversation Practice, Grount Taylor",
            "6. Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "7. Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "8. Communication Skill, R Datta Roy and K K Dhir",
          ],
        },
      ],
    },
    {
      semester: 3,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 4,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 5,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 6,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 7,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
    {
      semester: 8,
      papers: [
        {
          paper: 1,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 2,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 3,
          paper_title: "Engineering Mathematics I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 5,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
        {
          paper: 6,
          paper_title: "",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 2,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 3,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 4,
              unit_title: "",
              unit_description: "",
            },
            {
              unit: 5,
              unit_title: "",
              unit_description: "",
            },
          ],
          references: [],
        },
      ],
    },
  ];

  const stream = props.userSyllabus;

  return (
    <div className="Syllabus">
    <Scrollbars
    className="Scollbars"
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={310}
    autoHeightMin={300}
    autoHeightMax={480}
    thumbMinSize={30}
    universal={true}
    style={{ width: 990, height: 480 }}
  >
      {stream &&
        cseSyllabus.map((syllabus) => {
          if (syllabus.semester === props.semester) {
            return (
              <div className="semester-content">
                <h1> Semester : {syllabus.semester}</h1>
                {syllabus.papers.map((getPaper) => {
                  return (
                    <div className="papers-content">
                        <h3>Paper:{getPaper.paper}: &nbsp;&nbsp;{getPaper.paper_title}</h3>
                        {getPaper.common? <p>(Common to both CSE & ECE)</p>: <p>(Only for CSE)</p>}
                        {getPaper.units.map((getUnit,index) => {
                            return (
                                <div className="units-content">
                                    <h4>{getUnit.unit}: {getUnit.unit_title}</h4>
                                    <p>{getUnit.unit_description}</p>
                                </div>
                            )
                        })}
                        <h4 className="reference-heading">References:</h4>
                        {getPaper.references.map((getreference,index) => {
                            return(
                            <div className="units-content">
                                <p>{index+1} &nbsp;&nbsp;&nbsp;&nbsp;{getreference}</p>
                            </div>
                            );
                        })}
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      {!stream &&
        eceSyllabus.map((syllabus, index) => {
          if (syllabus.semester === props.semester) {
            return <h1> {syllabus.papers[0].units[0].unit_title} </h1>;
          }
        })}
        </Scrollbars>
    </div>
  );
};

export default Syllabus;
