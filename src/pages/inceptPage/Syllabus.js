import React, { useRef } from "react";
import "./Syllabus.css";
import { Scrollbars } from "react-custom-scrollbars";

import JkoscLogo from "../../assets/jkosc-logo.png";
import { Button,ButtonGroup } from "@material-ui/core";

import ReactToPrint from 'react-to-print';

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
              unit_description: [
                "Determinants, Matrices, Elementary row and column operations, Rank of matrix, Inverse of matrix, Eigen values and eigen vectors, special types of matrices such as symmetric, skew asymmetric, Hermitian and skew hermitian matrices, Linear systems of algebraic equations, Consistency, Gauss elimination method to solve system of linear equations, Homogeneous and inhomogeneous systems of equations, Cayley-Hamilton theorem,",
              ],
            },
            {
              unit: 2,
              unit_title: "Calculus",
              unit_description: [
                "Limit, Continuity & differentiability of functions of one variable, Mean-value Theorems, Rolle’s Theorem, Leibnitz formula for nth derivatives of products of functions, Taylor and Maclaurin Theorems, Maxima, Minima, Theorems of integral calculus, Evaluation of definite & improper integrals, Functions of several variables: Partial differentiation, Change of variables in partial differentiation.",
              ],
            },
            {
              unit: 3,
              unit_title: "Vector Differential Calculus",
              unit_description: [
                "Scalar and vector fields, Directional derivatives, Differentials of functions of several variables, Change of variables, Gradient of a scalar function, Conservative fields and potential functions, Divergence and curl of vector fields, Chain rules, Applications to cylindrical and Spherical polar coordinates,",
              ],
            },
            {
              unit: 4,
              unit_title: "Vector Integral Calculus",
              unit_description: [
                "Multiple integrals, Evaluation of double and triple integrals, Line, Surface & Volume integrals, Volumes and Surface Areas of Solids using multiple integrals, Green’s, Gauss’s and Stoke’s Theorem and application.",
              ],
            },
            {
              unit: 5,
              unit_title: "Fourier Series",
              unit_description: [
                "Introduction to Fourier series, trigonometric and exponential forms, Euler formulae for Fourier coefficients, Functions having period 2π and arbitrary period, Even & odd functions, Half range functions, Sine and cosine Fourier series, Fourier integrals,",
              ],
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
              unit_description: [
                "Ordinary differential equations of first order, Separable, exact & linear equations, Existence and uniqueness theorems (Statement only), Higher order linear equations, Workinsons Method of variation of parameters for particular solutions, Euler’s and Cauchy’s equations, Systems of first order equations with constant coefficients",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Ordinary Linear Differential Equations (LDE) of higher order",
              unit_description: [
                "Definition and general form of LDE, the operator D, complete solution of LDE as a sum of complimentary function (CF) and particular integral (PI), inverse operator rule for finding CF & PI, method of variation of parameter to find PI.",
              ],
            },
            {
              unit: 3,
              unit_title: "Complex Algebra",
              unit_description: [
                "Complex numbers, Complex plane, Roots of complex numbers, Complex functions and mappings, analytical functions, Cauchy-Riemann equations, elementary complex functions such as exponential , logarithmic, trigonometric, hyperbolic functions and Inverse functions, Harmonic functions,",
              ],
            },
            {
              unit: 4,
              unit_title: "Complex Integration",
              unit_description: [
                "Complex integration, Complex integrals, Contours, the Cauchy Theorem and Contour integrals, The Cauchy integral formulas, Some properties of analytical functions, Complex integration: Line integral, Cauchy’s integral theorem,",
              ],
            },
            {
              unit: 5,
              unit_title: "Contour Integration",
              unit_description: [
                "Residues and contour integration, Complex power series and Taylor Series, Laurent series and the classification of Singularities, residues and the residues theorem, Evaluation of real integrals by means of residues evaluation of real integrals using integration around unit circle, around the semi circle, integrating contours having poles, on the real axis, Conformal mapping and applications",
              ],
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
              unit_description: [
                "Interference of light: Interference in thin films, Newton’s rings Diffraction: Fresnel and Fraunhofer diffraction, Plane diffraction grating, Measurement of wave length, Dispersive power of grating, Resolving power, Rayleigh criterion",
              ],
            },
            {
              unit: 2,
              unit_title: "Lasers",
              unit_description: [
                "Basic principles of laser, spontaneous emission- stimulated emission-population inversion, spatial and temporal coherence- coherence length, optical amplification, laser rate equations, gain coefficient, threshold condition",
              ],
            },
            {
              unit: 3,
              unit_title: "Introduction to quantum theory",
              unit_description: [
                "Wave particle duality, matter waves, group & phase velocity, uncertainty principle, wave packets, Schrodinger equation",
              ],
            },
            {
              unit: 4,
              unit_title: "Solid State Physics",
              unit_description: [
                "Bonding in solids, Elastic properties of solids, Defects in crystals, Lattice vibrations and thermal properties of solids, Free electron theory, Band theory of solids, Metals, Semiconductors and insulators, Electrical conductivity of simple metals (Free Electron Theory)",
              ],
            },
            {
              unit: 5,
              unit_title: "Nano Physics",
              unit_description: [
                "Introduction to nanophysics, energy levels, density of states, quantum wire, single electron tunneling, quantum dot, nano-transistors and FET, NEMS and sensors.",
              ],
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
              unit_title: "Semiconductors and PN Junction Diode",
              unit_description: [
                "Properties of semiconductors, Intrinsic and extrinsic semiconductors, P and N type of impurities and doping, Charge densities and potential barrier, Draft and diffusion currents, PN junction working and characteristics, It’s applications as – Rectifier: Half wave, Full wave, Bridge Rectifier and their calculation for ripple, Efficiency and PIV; Clipper, Clamper and voltage doublers, Zener and Avalanch breakdown diodes, Tunnel diode, Varacter diode, Thermister",
              ],
            },
            {
              unit: 2,
              unit_title: "Bipolar Transistor",
              unit_description: [
                "Transistor action with simple bias conditions, Working and basic characteristics, CB, CE & CC configuration of transistor amplifiers, Analysis for CB and CE basic amplifiers- Determination of Q-point, dc load line and calculations for gains and impedances, Effect of load and ac load line",
              ],
            },
            {
              unit: 3,
              unit_title: "Transistor biasing",
              unit_description: [
                "Biasing circuits for CB and CE configurations, Leakage currents in CB & CE and it’s effect, Thermal stabilization & Stability factor, Different biasing arrangements for CE- their advantages and drawbacks, Transistor thermal power dissipation and rating",
              ],
            },
            {
              unit: 4,
              unit_title: "Equivalent Circuits of Transistor",
              unit_description: [
                "Transistor as four port device, Impedance, Z-parameters and circuits representation, Admittance Y parameters and circuit representation, h-parameters and circuit representation; Analysis of CB and CE circuits using h-parameters for gains and impedances",
              ],
            },
            {
              unit: 5,
              unit_title: "Field Effect Transistors",
              unit_description: [
                "Basic configuration of JFET, Biasing, Principle of operation and basic characteristics, Basics of MOSFET",
              ],
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
              unit_description: [
                "Brief introduction of binary numbers, Functional block diagram of a computer, Stored program machine, Generation of computers, CPU, I/O, Secondary storage, Memory and its classifications.",
              ],
            },
            {
              unit: 2,
              unit_title: "Introduction to software",
              unit_description: [
                "Generations of programming languages, introduction to applications and system software, File storage, DOS and windows environment.",
              ],
            },
            {
              unit: 3,
              unit_title: "Algorithms",
              unit_description: [
                "Flow charts, Structure and properties of algorithm, Algorithms for g.c.d., Factorial, Fibonacci series, Prime number generation. Linear and binary search, Sorting and bubble sort etc.",
              ],
            },
            {
              unit: 4,
              unit_title: "Basics of C Language",
              unit_description: [
                "C pre-processor, Variables, Operators, Expressions, Control flow, Data types, Arrays, Pointers, Storage classes, Scope and initialization, Input/output, String processing,",
              ],
            },
            {
              unit: 5,
              unit_title: "Pointer Based Programming",
              unit_description: [
                "Pointers, Dynamic data structures, Structures and unions, File handling,",
              ],
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
              unit_description: [
                "Importance of communication, Communication in primitive societies, Ways of communication: One way & two way, Principles of communication: Clarity, Completeness, Conciseness, Consideration, Courtesy, Correctness, Coherency, Level of communication- inter and intra personal, group to person, group to group, Methods of effective oral, Written and non-verbal communication, Process of communication (flow): Downward, Upward and horizontal communication, Official Hierarchy",
              ],
            },
            {
              unit: 2,
              unit_title: "Speaking & Reading Skills",
              unit_description: [
                "Verbal, non-verbal & Visual Communication, Elementary phonetics: speech sounds, Consonant & Vowel Sounds, Phonetic symbols, Horizons-tone, frequency, rate, volume, depth, extempore speech, Rate of speech",
              ],
            },
            {
              unit: 3,
              unit_title: "Writing Skills & Business correspondence",
              unit_description: [
                "Comprehension of ideas in a passage, Expansion of an idea for a particular purpose, Change of words into different parts of speech, Idioms, Antonyms and synonyms, Drafting Business letters, CV & Resume, Application for jobs, Power-point presentation, Using Microsoft Office",
              ],
            },
          ],
          references: [
            "Essentials of Business Communication, Rajendra Pal & J S Korlahalli",
            "Business Communication, Gyani",
            "Effective Communication, Ludlow and Panthon",
            "A Practical English Grammar, Thomson and Marlinet",
            "English Conversation Practice, Grount Taylor",
            "Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "Communication Skill, R Datta Roy and K K Dhir",
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
              unit_description: [
                `Definitions & existence conditions, Laplace transforms of some useful functions, Inverse Laplace Transform, Operational Properties of the Laplace Transform, Linearity, scaling, time shifting, shifting in s-domain, time differentiation and time integration, frequency differentiation & integration, convolutional property, Inversion Integral, Transforms of Periodic functions, Use of Laplace transforms in the solution of differential equations and analysis of electrical circuits.`,
              ],
            },
            {
              unit: 2,
              unit_title: "Fourier Transform",
              unit_description: [
                "Definitions & existence conditions, Fourier transforms of some useful functions, Inverse Fourier Transform, l Properties of the Fourier Transform, Linearity, symmetry, scaling, time & frequency shifting, time differentiation and time integration, frequency differentiation & integration, convolutional property, Transforms of Periodic functions, frequency and amplitude spectra of a function, fourier cosine & sine transforms",
              ],
            },
            {
              unit: 3,
              unit_title: "Special Mathematical Functions",
              unit_description: [
                "Series Solutions of differential equations, Power series solutions of homogeneous equations , Singular points of linear differential equations, Gamma function ( Г(n)) , recurrence formula for Г(n) , value of Г(1/2), Beta function, relationship between Gamma & Beta functions, Error functions-definitions and simple properties, complimentary error function & Q function.",
              ],
            },
            {
              unit: 4,
              unit_title: "Legendre Functionsr",
              unit_description: [
                "Legendre differential equation, Legendre polynomial, Rodrigue’s formulae, generating function, Recurrence formulae, Orthogonality",
              ],
            },
            {
              unit: 5,
              unit_title: "Bessel Functions",
              unit_description: [
                "Bessel’s differential equation, Bessel functions of first and second types, Recurrence formulae, Generating function, Orthogonality, Modified Bessel Functions,",
              ],
            },
          ],
          references: [
            "Applied Mathematics for Mathematician & Engineers: L A Pipes (TMH)",
            "Engineering Mathematics: H K Das (S Chand & Co. Ltd.)",
            "Engineering Mathematics: B.S. Grewal (Khanna Pub.)",
            "Advanced Engineering Mathematics: Wylie C R (TMH)",
            "A Course in Ordinary Differential Equations: Rai, Chaudhary & Friedman",
            "Advance Engineering Mathematics: E. Kreyszig",
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
              unit_description: [
                "Errors: Sources and types of errors, measurements. Significant digits. Floating point representation of numbers.  Roots of Non-linear Algebraic and Transcendental Functions , Bisection, Regula-Falsi, Secant and Newton-Raphson Methods, Fixed points iteration, Rate of convergence",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Numerical solution of system of linear equations, Gauss elimination method, LU decomposition, ill-conditioned systems, Gauss-Seidel and Jacobi method, Rate of convergence.",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Polynomial interpolation: Finite differences, Newton’s forward and backward differences interpolation polynomials, Newton’s divided differences interpolation polynomial, Lagrange’s polynomial. Curve fitting: Method of least squares.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Numerical differentiation and integration, Formulae for derivatives in the case of equally spaced points, Trapezoidal and Simpson’s rules, Errors in integration formulae. Monte-Carlo Method: Basic principles, One dimensional and Multi-dimensional integrals.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Single-step and multistep methods for solving ordinary differential equations: Taylor series method, Euler’s method, Modified Euler’s method, Runge-Kutta methods.Adam’s & Milne’s method.Numerical solution for boundary value problems, Finite difference methods for solving Laplace’s equation in a rectangular region. Finite Element methods and its applications.",
              ],
            },
          ],
          references: [
            "Numerical Methods for Science and Engg.: Ralph G. Stanton (Prentice-Hall of India)",
            "Elementary Numerical Analysis An algorithmic approach: S.D Conte and Carl de Boor",
          ],
        },
        {
          paper: 3,
          paper_title: "Digital Electronics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Binary systems and Boolean Algebra",
              unit_description: [
                "Digital systems, Number representation in different bases and their inter conversion, Compliments, Arithmetic operations on binary numbers, Binary codes; Basic theorems and properties, Switching algebra, Switching function and their representations. Canonical forms of switching functions and their transformations, operations over switching functions, Digital logic gates- symbols, logic expression and their truth tables.",
              ],
            },
            {
              unit: 2,
              unit_title: "Digital ICs & Combinational Logic Circuits",
              unit_description: [
                "Characteristics of digital ICs. Introduction to logic families- RTL,DTL, TTL,ECL,MOS and CMOS circuits and comparison of their performance.",
                "Binary adder and Subtractor circuits, Magnitude comparator, Decoders, Encoders, Multiplexer and demultiplexer, Realization of switching expressions by decoders, encoders, multiplexer and Demultiplexer, Programmable logic circuits, Tri-state logic.",
              ],
            },
            {
              unit: 3,
              unit_title: "Combinational Circuit Design",
              unit_description: [
                "Minimization Techniques, Realization of switching expressions by Karnaugh map, VEM and Quinne-Mclusky methods, Combinational circuits and their analysis. Realization of switching expressions by two level AND, OR, NOT gates; NAND gates only; NOR gates only and Ex-OR and AND gates only; MUX based circuit design",
              ],
            },
            {
              unit: 4,
              unit_title: "Synchronous Sequential Logic Circuits",
              unit_description: [
                "Sequential circuits, latches and Flip Flops, Analysis of clocked sequential circuits. State reduction and assignment, design of synchronous circuits, shift registers, ripple counters, synchronous counters.",
              ],
            },
            {
              unit: 5,
              unit_title: "Asynchronous Sequential Logic",
              unit_description: [
                "Analysis procedure, circuits with latches, Design procedure, reduction of states and flow tables .Races and race Free State assignments, Hazards.",
              ],
            },
          ],
          references: [
            "Digital Design : Morris Mano (PHI)",
            "Digital circuits & logic design: S.C.Lee (PHI)",
            "Digital electronics (circuits, systems & ICs) : S.N.Ali (Galgotia)",
            "Digital electronics: W.H.Gothmann (PHI)",
            "Switching theory : A.K Gautam (Katsons)",
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
              unit_description: [
                "Classification of amplifiers , Comparative study of CB,CE and CC amplifiers characteristics RC coupled amplifiers – analysis of gain in different frequency ranges and BW calculations, Multistage coupling –Cascade, cascade Darlington pair ,effect of coupling on gain & BW, Transformer coupled amplifiers, DC coupled amplifiers , Difference amplifiers .",
              ],
            },
            {
              unit: 2,
              unit_title: "Power amplifiers",
              unit_description: [
                "Class A, Class B, and Push-Pull amplifiers- Their working , advantages and drawbacks , comparison ; Class C, Class D amplifiers, stagger tuned amplifiers; FET amplifier configurations and analysis.",
              ],
            },
            {
              unit: 3,
              unit_title: "Feedback Amplifiers",
              unit_description: [
                "Types of feedback and different feedback schemes in amplifiers ; General characteristics of negative feedback amplifiers and their effect on gain impedances , distortion, and noise , Emitter follower.",
              ],
            },
            {
              unit: 4,
              unit_title: "Oscillators",
              unit_description: [
                "Barkhausen criterion for oscillations Tuned collector oscillator, RC phase shift and Wein bridge oscillator, Crystal oscillator, Frequency stabilization.",
              ],
            },
            {
              unit: 5,
              unit_title: "Power supplies",
              unit_description: [
                "Block diagram of Power Supply (PS) and it’s constituent circuits , Electronics voltage stabilizer, Zenner and transistor circuits for stabilization, Constant current, and current limited PS, Basics of SMPS and UPS.",
              ],
            },
          ],
          references: [
            "Integrated Electronics: Jacob Millman",
            "Electronics Devices and Circuits Theory: Robert L. Boylestad and Nashelsky",
            "Handbook of Electronics: Gupta and Kumar",
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
              unit_description: [
                "Circuit elements and their classification; LLFPB circuits; Nodal and Mesh analysis; Equivalence of networks; Duality; Source trans formations; T- transformation;",
              ],
            },
            {
              unit: 2,
              unit_title: "Networks Theorems",
              unit_description: [
                "Superposition, Thevenin & Norton, Maximum power transfer, Reciprocity, Millman, Substitution & Tellgene’s theorems and their applications",
              ],
            },
            {
              unit: 3,
              unit_title: "Transient Circuit Analysis",
              unit_description: [
                "Natural and forced response; Evaluation of initial conditions; Transient and steady state responses of simple RL, RC and RLC circuits to arbitrary excitations.",
              ],
            },
            {
              unit: 4,
              unit_title: "Sinusoidal Analysis",
              unit_description: [
                "Sinusoidal and Complex forcing functions; Phasor representation of Complex functions; sinusoidal steady-state response; Concept of Complex frequency; Damped Sinusoidal forcing function- Natural and forced response; Frequency response – parallel and series resonance. Mutual Impedance and coefficient of Coupling; Unity Coupled Coils;",
              ],
            },
            {
              unit: 5,
              unit_title: "Classical Filters",
              unit_description: [
                "Characterization of Two ports, z,y, h and transmission parameters, Interconnection of two ports, Analysis of common two ports.",
                "Filter fundamentals –pass and stop bands, The Constant –K low-pass and high-pass filters; The m-derived T and  sections; Band-pass and Band-elimination filters; Impedance Matching half- sections.",
              ],
            },
          ],
          references: [
            "Engineering Circuit Analysis: William H. Hayt, Jr. Jac E. Kemmerly. (TMH)",
            "Electric Curcuits: David A. Bell (PHI)",
            "Network Analysis : Van Valkenburg (PHI)",
            "Basic Circuit theory : Desoer and Kuh (TMH)",
            "Network & System : D. Roy. Chandhary (New Age International)",
            "Circuit theory : Chakarbarti (Dhanpat rai & Sons)",
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
              unit_description: [
                "Objectives of communication: Information, Advice, Order, suggestion, Persuasion, Education, Warning, Raising morale, Motivation, Audio-visual communication: Use of audio visual aids for effective communication, Role of news papers, Radio, Cinema and TV, Barrier to communication and overcoming barriers",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Interactive Communication Skills & Personality Development",
              unit_description: [
                "Group Discussions, Debates, Facing an interview, know your body language, confidence building, e-mail etiquette, The art of listening: learning through listening, Hearing vs. Listening,",
              ],
            },
            {
              unit: 3,
              unit_title: "Speaking & writing Skill",
              unit_description: [
                "Syllable & syllable stress, summarizing a passage for official usage, Précis writing, Report writing- importance of reports, preparing a report, technical report writing, Conversational skill, Telephonic Etiquettes",
              ],
            },
          ],
          references: [
            "Essentials of Business Communication, Rajendra Pal and J S Korlahalli",
            "Business Communication, Gyani",
            "Effective Communication, Ludlow and Panton",
            "A Practical English Grammar, Thomson and Martinet",
            "English Conversation Practice, Grount Taylor",
            "Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "Communication Skill, R Datta Roy and K K Dhir",
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
              unit_title: "Mathematical Logic",
              unit_description: [
                "Statements, Connectives, Statement formulas, Truth functional rules, Interpretation of formulas, Tautologies, Equivalence, Functionally complete set of connectives, Normal forms, Inference, Theory of statement calculus, Consistency of premises,",
              ],
            },
            {
              unit: 2,
              unit_title: "Predicate Logic",
              unit_description: [
                "Predicates, statement functions, Quantification, Interpretation of predicate formulas, Inference theory for predicate calculus, Informal & formal proofs",
              ],
            },
            {
              unit: 3,
              unit_title: "Set Theory",
              unit_description: [
                "Basics of set theory, Properties of relations, equivalence & compatibility relation, Representation of relations, Reflective, symmetric & transitive closures, Characteristic functions of a set and its properties, Principle of inclusion and exclusion, its applications",
              ],
            },
            {
              unit: 4,
              unit_title: "Graph Theory",
              unit_description: [
                "Definition Simple digraphs, Matrix representations, Paths, Distances, Connectedness of digraphs, Path and reachability matrices, Boolean sum and product of bit matrices, Warshall’s algorithm for transitive closure of relations",
              ],
            },
            {
              unit: 5,
              unit_title: "Lattices",
              unit_description: [
                "Partially ordered sets, Hasse diagrams, Elements of poset, Bounds, Lattices, Joint, Meet, Different types of lattices and their examples. Distributive and Modular lattices,",
              ],
            },
          ],
          references: [
            "Discrete Mathematical Structures with Application to computer Science: Tremblay & Manohar",
            "Discrete Mathematical Structures: Preparata and Yeh",
          ],
        },
        {
          paper: 2,
          paper_title: "Database Systems",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Data, information and knowledge, Characteristics of database approach, Data independence, Architecture of database system, Data dictionary, Types of database language, database system life cycle, Overview of hierarchical, network and relational model.",
                "Relations and Codd’s rules, Concepts of keys, Relation Algebra – Select, Project, Joins, Set operations, Update operations – tuple relational calculus, Relational Calculus vs. relational algebra.",
                "Data definition, data manipulation, view definition, nested queries, updation, Embedded SQL, Handling of nulls and cursors.",
              ],
            },
            {
              unit: 2,
              unit_title: "Data Models",
              unit_description: [
                "Conceptual, Logical and Physical design, ER models, ER diagrams, Strong and weak entity sets, Generalization, Specialization and Aggregation, Conversion of ER model into relational schemas",
              ],
            },
            {
              unit: 3,
              unit_title: "Normalization",
              unit_description: [
                "Normalization concepts, Functional dependencies and dependency preservations, Normal forms – 1NF, 2NF, 3NF, BCNF, 4NF, 5NF, DKNF, Indexing, File organization, De-normalization, Clustering of tables and indexes.",
              ],
            },
            {
              unit: 4,
              unit_title: "Transaction Handling",
              unit_description: [
                "Transaction recovery, System recovery, Two phase commit, concurrency problems, locking, deadlocks, security, discretionary and mandatory access control, data encryption",
              ],
            },
            {
              unit: 5,
              unit_title: "Distributed databases",
              unit_description: [
                "Overview of query processing, concurrency control and recovery in distributed databases, overview of client/server architecture and its relationship with distributed databases, performance benchmark and performance tuning of databases",
              ],
            },
          ],
          references: [
            "Introduction to Database System – C.J. Date",
            "Database Systems – Mcfadden et.al.",
            "Database Concepts – Navathe et.al.",
            "Database Structured Techniques for Design Performance – S. Atre",
          ],
        },
        {
          paper: 3,
          paper_title: "Data Structures",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Data Abstraction and Algorithm, Analysis , Data types / objects / structures, Abstract definition of data structures , Representation and implementation, Time requirements of algorithms, Space requirements of algorithms.",
              ],
            },
            {
              unit: 2,
              unit_title: "Arrays and Linked list",
              unit_description: [
                "Array implementation and addressing with examples Array applications and representation, Polynomials, Sparse matrices, String-pattern Matching",
                "Singly liked lists, list heads, circular list, doubly liked lists, orthogonal lists, generalized (recursive) lists, applications.",
              ],
            },
            {
              unit: 3,
              unit_title: "Stacks and Queues",
              unit_description: [
                "Basic ideas, array and linked representation. Prefix/ infix / postfix expressions and their inter-conversion for evaluation, Priority, queues and simulation, Recursion",
              ],
            },
            {
              unit: 4,
              unit_title: "Trees and Graphs",
              unit_description: [
                "Definition, terminologies and properties , Binary tree representation traversals and applications, Threaded binary trees, Binary Search trees ,AVL Trees",
                "Definition ,terminologies and properties, Graph representations, Minimum spanning trees , Depth-first search , Breadth-first search , Networks",
              ],
            },
            {
              unit: 5,
              unit_title: "Sort and Search Algorithms",
              unit_description: [
                "Internal and External Sorting algorithms , Heap sort, Merge sort, Quick-sort , General radix sort, Symbol tables, sequential search , Binary search , Interpolation search, Tries",
              ],
            },
          ],
          references: [
            "Data Structures and Program Design- Robert Kruse",
            "Data Structures- Horowitz and Sahni",
            "Data Structures through C- A. Tennenbaum",
          ],
        },
        {
          paper: 4,
          paper_title: "Basic Electrical Engineering",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "D C Generators",
              unit_description: [
                "Principles and construction of DC machines; E.M.F Equation; Various types of losses occurring in DC Generators; its efficiency; Commutation; Armature reaction; Series , Shunt and Compound Generators; their characteristics and applications; Parallel operation of shunt generators.",
              ],
            },
            {
              unit: 2,
              unit_title: "D C Motors",
              unit_description: [
                "Types of DC Motors and their Basic characteristics; Torque Equation; Testing of DC motors; Separation of Losses; Need of starters for large motors & their working; Speed control of DC motors",
              ],
            },
            {
              unit: 3,
              unit_title: "A C Fundamentals & Poly phase Circuits",
              unit_description: [
                "Single phase alternating currents; Average R.M.S values; Form factor; Power factor; Power in AC circuits- Instantaneous power, Average power and Apparent power, Complex power- Active and Reactive power; Power factor in terms of Average & Apparent powers; Poly phase systems, Star and Delta connections, Relationship between line and phase values.",
              ],
            },
            {
              unit: 4,
              unit_title:
                "Electrical Measurements and Measuring Instruments (Unit 4 & 5)",
              unit_description: [
                "Principles of operation and construction of moving coil, Moving iron, Dynamometer and induction types of Ammeters & Voltmeters; Extension of their ranges; Measurements of power- Three-ammeters and three voltmeters methods of measuring power in Single phase circuits; Construction of Watt meters; Induction and dynamometers types; Measurement of power in three phase circuit; Balanced and unbalanced three phase loads; Two-wattmeter method; Measurement of very high and very low resistances; measurement of energy; types of single-phase energy meters; errors and adjustments; Measurement of speed",
              ],
            },
          ],
          references: [
            "Basic Electrical Engineering I J Nagrath (TMH)",
            "Electrical Technology B.L. Theraja (S. Chand)",
          ],
        },
        {
          paper: 5,
          paper_title: "Computer Architecture & Organization",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Basic building blocks of digital computer- Essential and non-essential components; Basic functional block diagram of a computer; Stored Program Concepts, Generation of Computers and Programming languages. Computer memory: Types of read/write memories- Static memory, Dynamic Memory, NVRAM etc., various types of ROMs.",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Components of CPU, Bus systems, Data path. Instruction set completeness, Instruction Formats. Control unit, Micro-programmed and hardwired controls. CISC and RISC architecture.",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Memory organization, Primary and secondary storages, Cache and its mapping, Memory hierarchy. Basic I/O methods. Memory mapped and Standard Input-Output.",
                "Memory management techniques – Relocation, Swapping, Partitioning, Paging, Segmentation, Combined Systems; Concept of virtual memory.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Microprocessor: Essential and non-essential components, Microprocessor 8085: Architecture, Instruction set, Addressing modes, Pin diagram, Timing diagram, Interrupts etc. Assembly language programs (for 8085) for simple problems such as Maximum finding, Summation, Sorting, Searching, delay routines etc.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Microprocessor 8086: Architecture, Addressing modes, Pin diagram, classification of interrupts and interrupt Vector Table. Concept of Math co-processor. Comparative study of microprocessors.",
              ],
            },
          ],
          references: [
            "Digital Computer Electronics : Malvino",
            "Microprocessor Architecture Programming Applications with 8085/8080A: Brey",
            "Digital System Design and Microprocessor: Hayes, John P.",
            "Computer Architecture and Organization: Hayes, John P.",
            "Computer System Architecture: Mano, M. M.",
            "Digital Computer Fundamentals: Bartee",
          ],
        },
        {
          paper: 6,
          paper_title: "Industrial Management I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Engineering Economics",
              unit_description: [
                "Nature and scope of economics, Economic decision and Technical decision, Wants and utility, Demand and supply, Elasticity of demand and supply, Concepts of cost and revenue, Concept of equilibrium and margin, Four factors of production and their peculiarities, Money and banking –Function of money, Function of banks, Commercial and central banks, Monetary policy of the Reserve Bank of India.",
                "National Income- Macro Economics approach, GNP, NNP, NI, DI, PI methods of calculation of national income.",
              ],
            },
            {
              unit: 2,
              unit_title: "Organization",
              unit_description: [
                "Concepts of organization, Characteristics of organization, Elements of organization, Organizational structure, Organization charts, Types of organization-formal line, Military or scalar organization, Matrix organization, Authority and responsibility, Span of control, Delegation of authority.",
              ],
            },
            {
              unit: 3,
              unit_title: "Personal Management",
              unit_description: [
                "Recruitment and training, Labour turnover, Operator training, Suggestion systems",
                "Industrial ownership -Types of ownership-single ownership, partnership, Joint stock company, co-operative societies, public sector, private sector, scientific management-review of different schools of thoughts.",
                "Wages and Incentives: Feature of wages, Time and piece rate, Different incentive plans, Profit sharing, Job evaluation and merit rating , Factors of comparison and point rating .",
                "Industrial Relations- Industrial disputes, Collective bargaining, Trade unions, Workers participation in management, Labour welfare",
                "Industrial safety- Working conditions, Environmental factors, Psychological attitude to work and working conditions, Fatigue, Accidents and Hazards.",
              ],
            },
          ],
          references: [
            "Industrial Organization and Management: Bethel et.al",
            "Principles of Industrial Management: Kootnz & Donnel",
            "Financial Management: Prasanna Chandra",
            "Industrial Finance of India S K Basu",
            "Operation Management: Fabricky et al",
          ],
        },
      ],
    },
    {
      semester: 4,
      papers: [
        {
          paper: 1,
          paper_title: "Operating Systems",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Overview",
              unit_description: [
                "Introduction to OS – its functional behavior and responsibilities, Need for some of monitor/command interpreter, Types of operating systems, System structure, Hierarchical and layered organization of OS, Review of I/O and interrupt structure.",
              ],
            },
            {
              unit: 2,
              unit_title: "Process Management",
              unit_description: [
                "Operating system kernel, Data structures for processes and resources, Context switching, Process control primitives, Process scheduling.",
              ],
            },
            {
              unit: 3,
              unit_title: "Memory Management",
              unit_description: [
                "Memory management concepts, Relocation, Linking, Multiprogramming with fixed partitions, Swapping, Variables partitions, Overlays, Virtual memory, Segmentation, Paging, Storage allocation strategies, Load control and thrashing.",
              ],
            },
            {
              unit: 4,
              unit_title: "File and I/O Management",
              unit_description: [
                "Organization of file and I/O subsystems, Directory management, Basic file system, file descriptors, File manipulation, File organization methods, Management of auxiliary storage space, Command language and file system utilities, I/O subsystems, Programmed I/O, DMA, Interrupt driven I/O, Recovery procedures.",
              ],
            },
            {
              unit: 5,
              unit_title: "Protection and Security",
              unit_description: [
                "Protection vs. Security, Safeguards, , Protection problems, Formal models of protection.",
              ],
            },
          ],
          references: [
            "Introduction to Operating Systems: Deitel",
            "Operating System Concepts: Peterson and Silbershatz",
            "Modern Operating Systems: Andrew S Tanenbaum",
          ],
        },
        {
          paper: 2,
          paper_title: "Theory of Computation",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Recursive functions",
              unit_description: [
                "Partial and Total functions, Products and generalized composition, Initial functions, Primitive recursive functions, Regularity, Minimization, Recursive & Partial recursive functions, Bounded sums and products, Bounded minimization, Ackermann’s function",
              ],
            },
            {
              unit: 2,
              unit_title: "Formal Languages",
              unit_description: [
                "Strings, Free Semi-group, Languages, Generative grammars and their languages, Chomsky’s classification of grammars and languages",
              ],
            },
            {
              unit: 3,
              unit_title: "Finite Automata",
              unit_description: [
                "Deterministic and Non-deterministic finite automata, Machines with move on empty strings, Regular sets, Regular expressions, Relationship with regular grammars, Pumping lemma for regular sets and its uses, Closure properties of regular sets, Minimization of finite automata",
              ],
            },
            {
              unit: 4,
              unit_title: "Context Free Grammars",
              unit_description: [
                "Derivation trees, Simplification of context free grammars, Chomsky normal form, Greibach normal form, Decision algorithm",
                "Pushdown automata:  Instantaneous description, Languages accepted by finite states and empty stacks, Deterministic pushdown automata, Relationship with context free language",
              ],
            },
            {
              unit: 5,
              unit_title: "Turing Machines",
              unit_description: [
                "Instantaneous description, Languages, String manipulation, Turing compatibility of functions, Equivalence between Turing compatibility and partial recursiveness",
                "Undecidability:  Recursively enumerable and recursively decidable languages, Undecidability of decision algorithm for type 0 grammars, Church-Turing Thesis, Halting problem",
              ],
            },
          ],
          references: [
            "Automata, Language & Computation – Hopcraft & Ullman",
            "Theory of Computability – Hennie",
            "Formal Languages – Revesz",
            "Discrete Mathematical Structures with application to Computer Science – Tremblay & Manohar",
          ],
        },
        {
          paper: 3,
          paper_title: "Design and Analysis of Algorithms",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Algorithm Analysis Techniques",
              unit_description: [
                "Recurrences: substitution, iteration and master methods, Divide-and-conquer: general approach, binary search, merge sort, quick sort, Strassen’s matrix multiplication, Greedy algorithms: general approach, activity selection, knapsack problem, minimum-spanning tree, Diskstra’s algorithm, Huffman code",
              ],
            },
            {
              unit: 2,
              unit_title: "Dynamic Programming",
              unit_description: [
                "General approach, matrix-chain multiplication, all-pairs shortest paths, binary search tree, traveling salesperson, 0/1 knapsack problem",
              ],
            },
            {
              unit: 3,
              unit_title: "Backtracking",
              unit_description: [
                "N-queen problem, sum of subsets, knapsack problem, generation of all cliques, traveling salesperson problem, Graph coloring",
              ],
            },
            {
              unit: 4,
              unit_title: "Randomizing &Approximation Algorithms",
              unit_description: [
                "Numerical Integration, Primality testing, randomized min-cut, randomized algorithm for n-queens, quick-sort",
                "Job scheduling, Bin packing, Set cover, Max cut",
              ],
            },
            {
              unit: 5,
              unit_title: "Lower Bound Theory",
              unit_description: [
                "Decision tree, Reduction method, Amortized analysis. NP-completeness, Approximation algorithms",
              ],
            },
          ],
          references: [
            "Fundamental of Computer algorithms – Horowitz and Sahni",
            "The art of Computer Programming – Donald Knuth",
            "Design Methods and Analysis of Algorithms – S.K. Basu",
            "The Design and Analysis of Computer Algorithms – Aho, Hopcraft and Ullaman",
            "Genetic Algorithm in Search, Optimization and Machine Learning – David E. Goldberg",
            "Algorithm + Data Structure = Programs – N. Wirth",
          ],
        },
        {
          paper: 4,
          paper_title: "Control Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Control System Concepts",
              unit_description: [
                "The Control Problem; Open-loop and closed-loop control system; Basic characteristics of Feedback Control Systems –Stability, Steady-state accuracy, transient accuracy, Disturbance rejection, Insensitivity & Robustness; Basic modes of feedback control- Proportional, Integral and Derivative",
              ],
            },
            {
              unit: 2,
              unit_title: "Mathematical modeling of Dynamic systems",
              unit_description: [
                "Differential equation modeling; Analogous systems; Transfer function modeling; Block diagrams and their reduction; Signal flow graphs and Mason’s graph gain formula; Modelling in State space; state diagrams.",
              ],
            },
            {
              unit: 3,
              unit_title: "Time-domain Analysis",
              unit_description: [
                "Standard test signals; Steady-state error constants and system types; Response of first and second order systems to standard test signals; Time-domain performance specifications; Derivative feedback control",
                "Stability Analysis: Concepts of stability; Routh-Hurwitz criterion; Stability analysis using Root-Locus plots",
              ],
            },
            {
              unit: 4,
              unit_title: "Frequency-Domain Analysis",
              unit_description: [
                "Frequency-response plots- Bode plots, Polar plots, log-magnitude vs phase plots; Performance specifications in frequency-domain; Evaluation of closed-loop frequency responses ; Constant M&N circles; Nichols chart; Stability analysis using Nyquist stability criterion; Relative stability phase and Gain Margins.",
              ],
            },
            {
              unit: 5,
              unit_title: "Control System Design",
              unit_description: [
                "Preliminary Design consideration; Compensator design using Root-Locus plots- phase-lag, phase-lead and lag-lead compensation; Minor-loop feedback compensation; Compensator design using Frequency-response plots- phase-lag, phase-lead and lag-lead compensation; Minor-loop feedback compensation",
              ],
            },
          ],
          references: [
            "Modern Control Engineering : Katsuhiko Ogata (Pearson)",
            "Control System Engineering: Nagrath & Gopal (New Age)",
            "Control System Engineering: Norman S. Nise (John Wiley & Sons Inc)",
            "Design of Feedback Control Systems: Stefani , Shahian, et al (Oxford)",
            "Automatic Control System: B.C.Kuo. (PHI)",
          ],
        },
        {
          paper: 5,
          paper_title: "Signals and Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Representation & Specification of Signals",
              unit_description: [
                "Continuous time signals-– Periodic Vs Aperiodic, Symmetrical Vs Asymmetrical, Continuous Vs discrete. Elementary signals and associated wave forms- The unit-step, Unit Ramp, Unit-impulse and exponential signals. Periodic signals- Sinusoidal, Square, Sawtooth and impulse train, - Energy Vs Power signals",
              ],
            },
            {
              unit: 2,
              unit_title: "Representation of Systems",
              unit_description: [
                "Classification of systems- Static vs dynamic, Time variant vs time-invariant, Linear vs non-linear, Casual vs non-casual and stable vs unstable. Linear time-invariant (LTI) systems- definitions and properties, impulse response and transfer function, Convolution, signal transmission through LTI systems, Filter characteristics of linear systems, Bandwidth and rise time, Spectral density, Parseval’s theorem, Auto & cross-correlations",
              ],
            },
            {
              unit: 3,
              unit_title: "Probability & Random Variables (Unit 3 & 4)",
              unit_description: [
                "Random Experiments, Sample space, Events, Definitions of probability, Probability of union of events, Conditional Probability, Bayes’ theorem, Independence of events",
                "Random Variables, Distribution functions, Probability Mass Function (PMF) of Discrete Random Variables, Probability Density Function (PDF) of continuous random variables, Mathematical expectation, Moments",
                "Discrete uniform distributions, Bernoulli distribution, Poisson distribution, Binomial distribution, Continuous uniform distribution, Normal distribution, Exponential distribution, Rayleigh & Maxwell distributions.",
              ],
            },
            {
              unit: 5,
              unit_title: "Random Processes",
              unit_description: [
                "Classification of random processes- Stationary, Ergodic & Stochastic processes, Auto Correlation & power spectral density. Sources of noise, Thermal noise & Shot noise, PDF of envelop of narrow band noise and narrowband noise plus sinusoidal signal",
              ],
            },
          ],
          references: [
            "Principle of Digital Communication: J. Das (Wiley)",
            "Network Analysis & Synthesis: F.F. Kuo (Wiley)",
            "Signal & Systems: Simon Haykin (Wiley)",
            "Communication Systems: Simon Haykin (Wiley)",
            "Probability Random Variable & Stochastic Process: Papoulis (TMH)",
            "Signals Systems and Communication : B.P.Lathi (Wiley)",
            "Communication Systems : B.P. Lathi (Wiley)",
          ],
        },
        {
          paper: 6,
          paper_title: "Industrial Management II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Marketing Management",
              unit_description: [
                "Concept of marketing VS sales approach , Consumer behavior and demand concept, Buying motives, Influence of income level, Product design , New product distribution , Pricing methods and tools , Break even analysis and marginal costing in pricing , Sales promotion, Marketing research, Test marketing , Marketing of services, Advertising management-types of advertising , Choice of media , Economic and Psychological factor s in advertising .",
              ],
            },
            {
              unit: 2,
              unit_title: "Finance Management",
              unit_description: [
                "Tasks , Evolution of corporate management , Long term financing , Equity , Preference and Debenture capitals, Term loans , Dividends and share valuation, Legal aspects of dividends , Short term financing , Working capital influencing factors , Cash budgeting , Term of liquidity , Management of receivable and inventories , Budgets and Budgetary control – objectives of budgeting , classification, ratio analysis.",
                "Management Accounting: Fundamentals of Book-keeping, Journalizing, Ledger accounts, Subdivision of journal, Cash book, Banking transactions, Trial balance, Preparation of trading, Profit and Loss account, and Balance sheet, Adjustments",
              ],
            },
          ],
          references: [
            "Industrial Organization and Management: Bethel et.al",
            "Principles of Industrial Management: Kootnz & Donnel",
            "Financial Management: Prasanna Chandra",
            "Industrial Finance of India S K Basu",
            "Operation Management: Fabricky et al",
          ],
        },
      ],
    },
    {
      semester: 5,
      papers: [
        {
          paper: 1,
          paper_title: "Artificial Intelligence",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "What is AI?; Scope of AI: Games, theorem proving, Natural language processing, Vision and speech processing, Robotics & Expert systems, AI techniques, Introduction to intelligent agents.",
              ],
            },
            {
              unit: 2,
              unit_title: "Search Techniques",
              unit_description: [
                "State space search, control strategies: Depth first search, Breadth first search and Production systems; Use of heuristics: Hill climbing, Best first search, A* algorithm- admissibility, AND/OR graph – AO*, Constraint satisfaction; Game playing: Minimax and Alpha-Beta searching, Genetic algorithms.",
              ],
            },
            {
              unit: 3,
              unit_title: "Knowledge Representation (Unit 3 & 4)",
              unit_description: [
                "Propositional logic: its syntax and semantics; Reasoning patterns in propositional logic: Resolution, forward and backward reasoning.First order logic: Syntax and semantics; Inference in first order logic: Unification, Forward & backward chaining, Resolution., Structured knowledge representation: Semantic Net, Frames, and Conceptual graphs.",
                "Uncertain knowledge and reasoning: Introduction to probabilistic reasoning; representing vagueness- fuzzy sets and fuzzy logic.",
              ],
            },
            {
              unit: 5,
              unit_title: "Machine Learning",
              unit_description: [
                "Different forms of learning; Concept learning system; Inductive learning; Learning decision trees; Neural network: single layer feed forward network",
              ],
            },
          ],
          references: [
            "Artificial Intelligence: Rich and Knight",
            ,
            "Artificial Intelligence: A Modern Approach: Stuart Russell and Peter Norvig",
            "Introduction to Artificial Intelligence: Partick Winston",
            "Artificial Intelligence: Nilsson",
          ],
        },
        {
          paper: 2,
          paper_title: "Compiler Design",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Compilers and Translators, Overview of the Compiling Process, Syntactic and Lexical Structure of a Language.",
              ],
            },
            {
              unit: 2,
              unit_title: "Lexical Analysis",
              unit_description: [
                "Regular Expression, Finite Automata, Specification and Recognition of Tokens, Simple Approaches to Lexical Analyzer Design",
              ],
            },
            {
              unit: 3,
              unit_title: "Syntactic Analysis",
              unit_description: [
                "Context free grammar, Syntax and Parse Trees, Derivation of parse trees, ambiguity, Top-Down and Bottom-Up Parsing, Basic parsing techniques: shift reduce, operator- precedence, predictive parsing, LR Parsers.",
              ],
            },
            {
              unit: 4,
              unit_title: "Intermediate Code",
              unit_description: [
                "Postfix notation, syntax trees, three address code (quadruples, triples and indirect triples), Syntax directed translation, Symbol table organization, Run time storage management, Error detection and recovery",
              ],
            },
            {
              unit: 5,
              unit_title: "Code Generation and Optimization",
              unit_description: [
                "Basic issues in code generation and optimization, Elementary idea about loop optimization, DAG, Global data flow analysis, Register utilization, usage count analysis, heuristic ordering algorithm for DAG and optimal ordering algorithm for trees, peephole optimization",
              ],
            },
          ],
          references: [
            "The Theory and Practice of Compiler Writing: -Trembley and Sorenson",
            "Principles of Compiler Design: -Aho and Ullman",
            "Compilers: Principles, Techniques and Tools -Aho, Ullman and Sethi",
            "The Essence of Compilers -Robin Hunter",
          ],
        },
        {
          paper: 3,
          paper_title: "Computer Graphics",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Computer Graphics",
              unit_description: [
                "Introduction, Graphics display devices, Graphics Input & Output devices, Raster scan graphics, Line and Circle generation techniques, Scan conversion, Frame buffer, Filling algorithms",
              ],
            },
            {
              unit: 2,
              unit_title: "Geometrical Transformation",
              unit_description: [
                "Two dimensional transformations, Clipping and windowing methods for 2D images, Three dimensional transformations, Parallel and perspective projections, Viewing transformations and viewing systems.",
              ],
            },
            {
              unit: 3,
              unit_title: "Curves",
              unit_description: [
                "Parametric and non-parametric curves and their representations, Cubic splines, Bezier and B-splines",
              ],
            },
            {
              unit: 4,
              unit_title: "Surfaces",
              unit_description: [
                "Parametric surfaces, Surfaces of revolution, Sweep surfaces, Quadric surfaces, Bilinear surfaces, B-spline and Bezier surfaces, Generalized cylinders and cones, Polygon mesh and wire-frames.",
              ],
            },
            {
              unit: 5,
              unit_title: "Realism in 3-D Graphics",
              unit_description: [
                "Hidden lines and hidden surfaces, Floating horizon algorithm, Roberts algorithm, Phong reflection model, Incremental shading techniques, Gouraud and Phong shading, Rendering process, z-buffer algorithm, Scan line and area coherence methods. Introduction to Ray tracing",
              ],
            },
          ],
          references: [
            "Computer Graphics: Principles and Practice: Foley et al.",
            "Computer Graphics: Hern and Baker",
            "Procedural elements in Computer Graphics: David F. Rogers",
            "Computer Graphics: A. Plastock and Gordon Kelley",
            "Computer Graphics for IBM PC: J. Mcgregger and Alan Watt",
            "Mathematical Elements for Computer Graphics: David F. Rogers and J.A.Adams",
            "Three-Dimensional Computer Graphics: Allan Watt",
          ],
        },
        {
          paper: 4,
          paper_title: "Computer Networks",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "History of data communication, Advantages and Disadvantages of a Computer Networks; Classification of Computer Networks; Active and Passive Components used in a network design; Importance of channel bandwidth and system noise, Protocols and their role in computer network",
              ],
            },
            {
              unit: 2,
              unit_title: "Data Transmission Basics",
              unit_description: [
                "Error detection and correction methods, Data compression, Protocol basic, Circuit, Message, Packet and Cell switching, Connection oriented and connectionless services, ISO-OSI model, TCP/IP model, UDP",
              ],
            },
            {
              unit: 3,
              unit_title: "Computer Network Basics",
              unit_description: [
                "Physical layer communication, Media, Signals and Bits, Time division and frequency division multiplexing, Encoding, Modulation, Delay, Bandwidth and noise; Comparative Study of various media used in Connection oriented networks and connection-less networks; Network and packet communication, Network topology, LAN wired/wireless, Ethernet, CSMA/CD, CSMA/ CA, Token passing rings, FDDI, Wireless networks",
              ],
            },
            {
              unit: 4,
              unit_title: "Network Devices",
              unit_description: [
                "Network Interconnections with repeaters, Switches, Bridges, Routers and gateways, DSU/CSU, XDSL and cable modems, Store and forward, Next-Hop forwarding, Wide Area Network, Router & Routing Techniques",
              ],
            },
            {
              unit: 5,
              unit_title: "Inter-networking",
              unit_description: [
                "IP addressing, Subnetting, CIDR, Address binding with ARP, Datagram encapsulation and fragmentation, Adaptive retransmission, ICMP and error handling; Network applications, Client-Server concepts and application, DNS, HTTP, Email and web browsing, Broadband Multi-Service networks, FDDI- II, Cell based networks, ATM LANs, ISDN; Introduction to IPV6",
              ],
            },
          ],
          references: [
            "Computer Networks :Tanenbum, A.S",
            "Data and Computer communication :Stallings, William",
            "Inter Networking With TCP/IP Vol I, II,III: Comer, D.E. and Stevens D.L.",
            "Computer Network and Distributed Data Processing : Martin.J.",
            "Local Networks : Stalling, William",
            "Data Communication and Networking : Forouzan, B.A",
            "Tele Communication Switching Systems and Networks: Viswanathan Thiagrajan",
          ],
        },
        {
          paper: 5,
          paper_title: "Communication Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Amplitude Modulation and Detection",
              unit_description: [
                "AM equation analysis and its treatment with number of modulating signals, Square law modulator, Linear modulator schemes and circuits, DSB-SC modulators, Quadrature modulation, SSB-SC modulator, AM square law detector, Envelope detection, DSB-SC & SSB-SC detection, VSB modulation",
              ],
            },
            {
              unit: 2,
              unit_title: "Angle Modulation and Detection",
              unit_description: [
                "Frequency and Phase modulation equations and their spectrum; Narrow band modulation and wide band modulation and relationship with AM,FM, and PM, Direct methods of FM generation, Indirect Armstrong method of FM generation, FM slope Amplitude type of detection, Phase discriminator and Ratio detector, Pre-emphasis and De-emphasis, Comparison of AM and FM, Phase locked loops",
              ],
            },
            {
              unit: 3,
              unit_title: "AM, FM Transmitters and Receivers",
              unit_description: [
                "Blocks diagrams of standard AM and FM transmitters, Armstrong FM transmitter, AM and FM Radio receivers, Sensitivity, Selectivity, Fidelity, Stability, etc. TRF, receiver, Super heterodyne radio receiver- Block diagram and Principle of operation, Problems associated with it’s successful operation, their solutions and analysis (selection of intermediate frequency and Local oscillator frequency, Tracking, Rejection of image signal and noise, AGC and AFC)",
              ],
            },
            {
              unit: 4,
              unit_title: "SNR Considerations in AM and FM systems",
              unit_description: [
                "SNR calculations in DSB, DSB-SC and SSB AM receivers, SNR in FM receivers, Comparison of SNR.",
              ],
            },
            {
              unit: 5,
              unit_title: "Pulse Modulations",
              unit_description: [
                "Sampling theorem for LP and BP signals, Channel BW and for PAM signal, Natural and Flat-top sampling, Signal recovery, Pulse time modulations.",
              ],
            },
          ],
          references: [
            "Principles of Communication Systems Taub and Schilling",
            "Communication Systems Simon Haykin",
            "Modern Analog & Digital Communications B.P. Lathi",
            "Analog & Digital Communications Samaugan",
            "Electronic Communication System George Kennedy",
          ],
        },
        {
          paper: 6,
          paper_title: "Digital Communication I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Basic Information Theory & Channel Capacity",
              unit_description: [
                "Mathematical models for information sources; Discrete memory-less source; Logarithmic measure of information; Entropy as a measure of Uncertainty; Interrelations between entropies; Conditional entropies; Average Mutual information, Properties of Mutual information; Binary Symmetric Channels, Discrete memory-less channels, Shannon- Hartley capacity theorem, Shannon’s limit; Capacity of a channel of infinite Bandwidth; Equivocation and effective transmission rate.",
              ],
            },
            {
              unit: 2,
              unit_title: "Source Coding",
              unit_description: [
                "Coding for discrete memory-less source; Fixed length code words; Source coding theorem; Variable length code-words; Unique decodability and prefix conditions; Kraft inequality; Significance of prefix condition; Shannon-Fano coding; Huffmann Coding Technique",
              ],
            },
            {
              unit: 3,
              unit_title: "Channel Coding: Linear block codes-",
              unit_description: [
                "Introduction to Galois field algebra; Linear block Codes- the Generator matrix & Parity check matrix; Construction of standard array; Syndrome calculation; Hamming weight and Hamming distance; Error correcting and detecting capability of linear codes; Hamming codes; Hadamard codes",
                "Definition and algebraic structure of cyclic codes, Binary cycle properties; Encoding in Systematic forms; Circuits for dividing polynomials; Systematic encoding with an (n-k) stage shift register; Syndrome calculation and error detection with an (n-k) stage shift register",
              ],
            },
            {
              unit: 4,
              unit_title: "Channel Coding: Convolutional Codes-",
              unit_description: [
                "Convolutional encoding; Representation of convolutional Encodes; The state diagram; The tree diagram; The trellis diagram; Optimum decoding of the Convolutional codes- The Viterbi algorithm, Sequential decoding; Comparison and Limitations of Viterbi and Sequential decoding; Distance properties of convolutional codes; Error correcting capability of convolutional codes.",
              ],
            },
            {
              unit: 5,
              unit_title: "Pulse Code Modulation",
              unit_description: [
                "Basic elements of a PCM System, Quantization Electrical representation of binary digits, Companding, Differential PCM, Delta Modulation, Adaptive delta modulation, Comparison of ADM & DM",
              ],
            },
          ],
          references: [
            "Modern Digital Communication System: B.Sklar (Addition Wesley)",
            "Principle of Digital Comm: J. Das, S.K. Mullick, P.K. Chatterjee (Wiley)",
            "Digital Communication: John G. Proakis (TMH)",
            "An Introduction to Error Correcting Codes : S. Lin (McGraw Hill)",
            "Digital Communication : S. Haykin (Wiley)",
            "Digital Communication : Fundamentals & Applications : B. Sklar (Pearson)",
          ],
        },
      ],
    },
    {
      semester: 6,
      papers: [
        {
          paper: 1,
          paper_title: "Advanced Concepts of Programming Languages",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Programming language Concepts, Paradigms and models, Typed vs. un-typed languages, Procedural languages, declarative languages, block structured languages, , object oriented languages",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Data types, control structures, I/O statements, User-defined and built-in functions, parameter passing",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Object Oriented Concepts: Data abstraction, Class, object, Polymorphism, inheritance, different types of polymorphism and inheritance, dynamic binding, reference semantics and their implementation",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Horn Clause and their execution, example programs in Prolog",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Case study and Lab: Any two of JAVA/ C++/Prolog/Python/C#",
              ],
            },
          ],
          references: [
            "Concepts Of Programming Languages 10Th Edition by SEBERT ROBERT W",
          ],
        },
        {
          paper: 2,
          paper_title: "Operational Research",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Network Analysis",
              unit_description: [
                "Terminology of network, Shortest route problem, minimal spanning tree problem, max-flow problem.",
              ],
            },
            {
              unit: 2,
              unit_title: "Project Scheduling by PERT, CPM",
              unit_description: [
                "Diagram, representation, critical path calculation, construction of time chart and resource labeling, probability and cost consideration in project scheduling, project control",
              ],
            },
            {
              unit: 3,
              unit_title: "Linear Programming",
              unit_description: [
                "Simplex Method, Revised simplex method, Duality in Linear programming, Application of Linear Programming to Economic and Industrial Problems",
              ],
            },
            {
              unit: 4,
              unit_title: "Nonlinear Programming",
              unit_description: [
                "The Kuhn-Tucker conditions, Quadratic programming, Convex programming",
              ],
            },
            {
              unit: 5,
              unit_title: "Replacement Models & Sequencing Model",
              unit_description: [
                "Introduction, Replacement policies for items whose efficiency deteriorates with time, Replacement policies for items that fail completely",
                "Classification of self problems, processing of n jobs through two machines, three machines, processing of two jobs through m machines",
              ],
            },
          ],
          references: [
            "Operations Research- Taha",
            "Introduction to Operations Research- B.E. Gillet",
            "Optimization Theory and Applications- S.S.Rao",
            "Linear programming- G.Hadley",
          ],
        },
        {
          paper: 3,
          paper_title: "Advanced Computer Architecture",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "CPU architecture",
              unit_description: [
                "Comparative study of 32-bit processors; Comparative study of Microcontrollers; Future Trends",
              ],
            },
            {
              unit: 2,
              unit_title: "Parallel Processing Systems",
              unit_description: [
                "Flynn’s Classification, Pipeline Processors, Instruction Pipelining, Internal Forwarding, Pipeline Hazards, Tightly & Loosely coupled systems; Job Sequencing & Collision prevention, Interleaved Memory; Amdahl’s Law; Vector Processing, Design of Vectorizing compilers, Automatic detection of parallelism,",
              ],
            },
            {
              unit: 3,
              unit_title: "Case Studies of Array & Vector Processors",
              unit_description: [
                "Case studies of vector processors, Array processors, Network design issues, Mesh Network, Barrel Shifter, Cube, Hypercube, Parallel algorithms on hyper cubes, Multiprocessor system, Multiprocessor interfacing schemes",
              ],
            },
            {
              unit: 4,
              unit_title: "Other Architectures",
              unit_description: [
                "RISC; Comparison with CISC; Parameter passing in RISC, Comparison of commercial RISC systems; Systolic Architecture; Data flow architectures; Comparison with control flow systems; Template implementation; Transputer architecture; Communication channels; Occam & programming environment",
              ],
            },
            {
              unit: 5,
              unit_title: "Introduction to Parallel Algorithms",
              unit_description: [
                "Addition on Tree, Cube, Mesh, Linear Array, PSN, etc. Matrix multiplication on Mesh, Cube, Torus, etc.; Parallel Sorting; Associative Processing",
              ],
            },
          ],
          references: [
            "Computer Architecture & Parallel processing – Hwang & Briggs",
            "Computer Architecture – Jean Loop Bear",
            "Introduction to Distributed and Parallel computing- Crichlow",
            "Designing Efficient Algorithms for parallel Computers- M.J.Quinn",
            "Introduction to Parallel Algorithms- Joseph JA",
            "The Design and Analysis of Parallel Algorithms- S.G.Akl",
          ],
        },
        {
          paper: 4,
          paper_title: "Software Engineering",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Evolution and Scope of Software Engineering",
              unit_description: [
                "Introduction to Software Engineering: Definitions, Software development and life-cycle models, Introduction to SEI-CMM",
              ],
            },
            {
              unit: 2,
              unit_title: "Software Project Management",
              unit_description: [
                "Project Planning, Cost and Resource Estimation, Project Scheduling, Project Control, Risk Management",
              ],
            },
            {
              unit: 3,
              unit_title: "Software Requirement Analysis",
              unit_description: [
                "Principles, Tasks, Techniques, Software prototyping, Requirements specifications - Principles and Representation, Structured analysis",
              ],
            },
            {
              unit: 4,
              unit_title: "Software Design Process",
              unit_description: [
                "Fundamental principles, Design Techniques, Structured Design, User Interface Design",
              ],
            },
            {
              unit: 5,
              unit_title: "Software Testing and Debugging",
              unit_description: [
                "Software verification and validation fundamentals, Testing principles- White box and Black box testing, Static analysis, Symbolic execution, Testing strategies, Debugging",
              ],
            },
          ],
          references: [
            "Software Engineering: Ian Sommerville, Pearson Education",
            "Software Engineering: R. S. Pressman, McGraw Hill",
            "An Integrated Approach to Software Engineering: Pankaj Jalote",
          ],
        },
        {
          paper: 5,
          paper_title: "Digital Signal Processing",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Discrete Time Signal and Systems",
              unit_description: [
                "Signal and system classifications, Time and frequency domain representation, Analysis of discrete time linear time invariant system, Discrete time system described by difference equation, Stability and Causality, Frequency domain & time domain stability criteria, frequency response of LTI system",
              ],
            },
            {
              unit: 2,
              unit_title: "Z-Transform & Discrete Fourier Transform (DFT)",
              unit_description: [
                "Z – Transform and its properties, Z – Transform of simple functions, Inverse Z – Transform, Analysis of LTI system in Z – domain. Convergence of DFT, DFT of periodic signals; properties of DFT; DFT & convolution; Application of DFT to LTI system analysis, FFT algorithms and their applications",
              ],
            },
            {
              unit: 3,
              unit_title: "Realization of Digital Systems",
              unit_description: [
                "Recursive and non recursive structure of digital system, Direct, cascaded, parallel, ladder and lattice realization",
              ],
            },
            {
              unit: 4,
              unit_title: "Design of Digital Filters (Unit 4 & 5)",
              unit_description: [
                "IIR Digital Filter- IIR filter designs by approximation of derivatives, impulse invariant and bilinear transformation methods, Frequency transformation",
                "FIR digital Filter- Design of linear phase FIR filters by using windows and frequency sampling methods",
                "Finite Word Length Effects- Quantization errors and their effects on the performance of digital signal processors",
              ],
            },
          ],
          references: [
            "Digital Signal Processing: J.G. Proatais (PHI)",
            "Discrete Time Signal Processing: Openheim & Shafer (PHI)",
            "Signal Processing & Linear Systems: B.P. Lathi (Oxford)",
            "Principles and Application of Signal Processing: Robiner Gold (PHI)",
          ],
        },
        {
          paper: 6,
          paper_title: "Digital Communication II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Multiplexing of PCM signals",
              unit_description: [
                "Multiplexing of PCM signals, Digital Hierarchy (American & European), Pulse stuffing, Power density of digital data, Ortho-normal functions, Representation of signals in terms of ortho-normal functions Gram Schmidt procedure",
              ],
            },
            {
              unit: 2,
              unit_title: "Digital Modulation Schemes",
              unit_description: [
                "BPSK, OOK, BFSK, DPSK, Quadrature phase shift keying, CPFSK and minimum shift keying, M-ary ASK, PSK and FSK schemes, QAM scheme",
              ],
            },
            {
              unit: 3,
              unit_title: "Binary Decision Criteria",
              unit_description: [
                "Maximum likelihood, Neymann Pearson, Probability of error (MAP-criterian), Bayes risk (cost) and Min-Max decision criterions",
              ],
            },
            {
              unit: 4,
              unit_title:
                "Demodulation in Presence of Additive White Gaussian Noise (Unit 4 & 5)",
              unit_description: [
                "Different representation of narrow band signals and systems A baseband receiver, optimum filter, matched filter & cross-correlator receivers, , Spectrum of digital modulated signals, Calculation of probability of error for binary & M-ary signals, digital signaling schemes for coherent and non-coherent demodulation. Comparison of different modulation schemes, Symbol synchronization and carrier recovery circuits",
              ],
            },
          ],
          references: [
            "Principles of Communication: Taub & Schilling (TMH)",
            "Digital Communication : J.G. Proakis (TMH)",
            "Digital Communication : S.Haykin (Wiley)",
          ],
        },
      ],
    },
    {
      semester: 7,
      papers: [
        {
          paper: 1,
          paper_title: "Big Data Analysis",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Data Science, Big Data and its importance, Prediction vs. Inference, Statistical learning, Unsupervised and Supervised learning, Drivers for Big data, Big data analytics, Big data applications, Basic R concepts, Data transformation and data visualization in R.",
              ],
            },
            {
              unit: 2,
              unit_title: "Hadoop",
              unit_description: [
                "Introduction to Hadoop and Hadoop Architecture, Apache Hadoop & Hadoop EcoSystem, Moving Data in and out of Hadoop, Understanding inputs and outputs of MapReduce",
              ],
            },
            {
              unit: 3,
              unit_title: "Querying in Big Data",
              unit_description: [
                "HDFS Overview, Hive Architecture, Comparison with Traditional Database, HiveQL Querying Data, Sorting and Aggregating, Map Reduce Scripts, Joins & Sub queries, HBase concepts, Advanced Usage, Schema Design, Advance Indexing, PIG, Zookeeper,HBase uses Zookeeper",
              ],
            },
            {
              unit: 4,
              unit_title: "Data Base for the Modern Web",
              unit_description: [
                "Introduction to Mongo DB key features, Core Server tools, Mongo DB through the JavaScript’s Shell, Creating and Querying through Indexes, Document-Oriented, principles of schema design, Constructing queries on Databases, collections and Documents, MongoDB Query Language",
              ],
            },
            {
              unit: 5,
              unit_title: "Big Data Security",
              unit_description: [
                "Big Data Privacy, Ethics and Security, Steps to secure big data, Cloud security, Hadoop Security Design, Hadoop Kerberos Security Implementation & Configuration, Audit logging in Hadoop cluster, Data security and event logging.",
              ],
            },
          ],
          references: [
            "Boris lublinsky, Kevin t. Smith, AlexeyYakubovich, “Professional Hadoop Solutions”, Wiley",
            "Chris Eaton,Dirk Derooset. al. , “Understanding Big data ”, McGraw Hill",
            "Kyle Banker,PiterBakkum, Shaun Verch, “MongoDB in Action”, Dream tech Press",
            "Tom White, “HADOOP: The definitive Guide”, O Reilly",
            "VigneshPrajapati, “Big Data Analyticswith R and Hadoop”, Packet Publishing.",
          ],
        },
        {
          paper: 2,
          paper_title: "Cryptography and Network Security",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Security Concepts",
              unit_description: [
                "Security goals, Cryptographic attacks, Security services, Security Mechanisms, Symmetric and Asymmetric key cryptography, Steganography, Traditional Symmetric-Key Ciphers: plain text and cipher text, substitution techniques, transposition techniques, Stream ciphers and Block ciphers, Mathematics of symmetric-key cryptography, modern symmetric-key ciphers.",
              ],
            },
            {
              unit: 2,
              unit_title: "Symmetric Key Cryptography",
              unit_description: [
                "Data Encryption Standard (DES), DES Analysis, Security of DES: Brute-Force attack, Differential and                linear cryptanalysis, 2-DES and Meet in the Middle attack, 3-DES Block ciphers influenced by DES: CAST block Cipher, Blowfish, IDEA, Advanced Encryption Standard(AES), Analysis of AES, Modern Symmetric-Key Ciphers, Modes of operation: Electronic Codebook (ECB), Cipher block Chaining (CBC), Cipher feedback(CFB), Output feedback(OFB), Counter(CTR), Stream Ciphers: RC4 and A5/1, Symmetric key distribution problems and protocols.",
              ],
            },
            {
              unit: 3,
              unit_title: "Public Key Cryptography",
              unit_description: [
                "Mathematics of asymmetric key cryptography: Primes, Euler‘s totient function, Fermat‘s and Euler‘s              Theorem, Primality Testing, Factorization, Chinese Remainder Theorem, Exponentiation and logarithm, Asymmetric key ciphers: Introduction, RSA cryptosystem, Rabin cryptosystem, ElGamal cryptosystem, Elliptic curve cryptosystems, Key management: Diffie-Hellman key agreement protocol, key distribution protocols based on Chinese Remainder theorem and RSA cryptosystem.",
              ],
            },
            {
              unit: 4,
              unit_title: "Integrity and Authentication",
              unit_description: [
                "Message Integrity, Message Authentication: Modification Detection Code (MDC), Message Authentication Code (MAC), Cryptographic Hash functions, MD hash Family, Secure Hash Algorithm: SHA-512, Digital signature, Attacks on digital signature, Digital Signature Schemes: RSA, ElGamal, Schnorr, Digital Signature Standard (DSS) and Elliptic Curve Digital Signature Scheme. Entity Authentication: Passwords, Challenge Responses, Zero-Knowledge, Biometrics.",
              ],
            },
            {
              unit: 5,
              unit_title: "Network Security",
              unit_description: [
                "Security at the Application layer: Pretty Good Privacy (PGP) and Secure/ Multipurpose Internet Mail                Extension(S/MIME), Security at the transport layer: Secure Sockets Layer (SSL) and Transport Layer                Security (TLS), Security at the Network Layer: IPSec, System Security.",
              ],
            },
          ],
          references: [
            "William Stallings, “Cryptography and Network Security: Principals and Practice”, Prentice Hall, New Jersy.",
            "Bruce Schiener, “Applied Cryptography”.",
            "Behrouz A. Foruzan, Cryptography and Network Security, Tata McGraw Hill.",
            "Network Security and Cryptography: Bernard Menezes, CENGAGE Learning",
            "Cryptography and Network Security: Atul Kahate, Mc Graw Hill",
            "V.K. Pachghare, Cryptography and Information Security, PHI Learning Private Limited Delhi.",
          ],
        },
        {
          paper: 3,
          paper_title: "Microcontroller and Microprocessor Interfacing",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Princeton and Harvard Architecture, Microcontrollers, Comparison of microprocessors and microcontrollers, Microcontroller survey – microcontrollers of different word length, make and features, selection criteria for microcontroller, 8051 microcontroller hardware – pin diagram and internal architecture, Memory organization",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Special Function Registers, Interrupts, I/O port circuits, interfacing external memory and external device. Instruction set, addressing modes and assembly language programming, simple Programs",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Memory Interfacing with Microprocessor, Memory Organization and interleaving, Interfacing Read-Write memory chips and ROM/EPROM chips, e.g., IC 8155 (Static Ram with I/O Ports and Timer), 8755 (EPROM with I/O Ports) and other commonly used ICs.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Input –Output Communication. Serial and Parallel communication, Synchronous and Asynchronous Data Transfer, Strobe method, Handshaking. Interrupts, Basic Input-output methods and transfer modes. Polling, daisy chain arrangement, Bus Arbitration, Priority control.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Functions and study of 8251A (USART), 8255A(Programmable Peripheral Interface), 8257 (DMA Controller), 8259A (Programmable Interrupt Controller)",
              ],
            },
          ],
          references: [
            "Mazidi and Mazidi: The 8051 Microcontroller and Embedded Systems, Pearson Education",
            "D. V. Hall: Microprocessors and Interfacing, TMH.",
            "Ayala Kenneth:The 8051 microcontroller, Third Edition, Cengage Learning",
            "Raj Kamal: Embedded Systems- Architecture, Programming and Design, TMH, New Delhi.",
            "P.K. Ghosh and P. R. Sridhar, 0000 to 8085 Introduction to microprocessor for Engineers and Scientists, PHI, 2/e",
            "C. K. Dwivedi, Solid State circuit design with Microcontrollers.",
          ],
        },
        {
          paper: 4,
          paper_title: "Image Processing",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Image representation and modeling, 2-D linear system, Luminance, Contrast and Brightness, Color representation, Visibility functions, Monochrome and color vision model.",
              ],
            },
            {
              unit: 2,
              unit_title: "Image Quantization and Image Transforms",
              unit_description: [
                "Sampling theorem, Anti-aliasing, image quantization, Orthogonal and unitary transforms, DFT, Cosine transform, Hadamard transform, Haar transform, KL transform.",
              ],
            },
            {
              unit: 3,
              unit_title: "Image Enhancement",
              unit_description: [
                "Point operation, Histogram modeling, Filtering and spatial operations, Transform operations, Multispectral Image Enhancement",
              ],
            },
            {
              unit: 4,
              unit_title: "Image Restoration",
              unit_description: [
                "Image formation models, Noise models, Inverse and Wiener filtering, Least square filters, Recursive filters, Maximum entropy method, Blind deconvolution, Bayesian method of noise removal, Image reconstruction, Tomography, Radan transform, Back-projection, Reconstruction algorithm, Algebraic method of reconstruction, Fan-beam reconstruction.",
              ],
            },
            {
              unit: 5,
              unit_title: "Data Compression",
              unit_description: [
                "Data compression vs. Bandwidth, Pixel coding, Predictive coding, Transform coding, Coding of two-tone images.",
              ],
            },
          ],
          references: [
            "Fundamentals of Digital Image Processing: Anil K. Jain",
            "Digital Image Processing: R. Chellappa",
            "Image Processing for Scientific Applications: Bernd Jahne",
            "Digital Image Processing: R.C. Gonzalez & R.E. Woods",
            "The Image Processing Handbook: J.C. Russ",
            "Digital Image Processing: W.K. Pratt",
            "Digital Image Restoration: Andrews & Hunt",
          ],
        },
      ],
    },
    {
      semester: 8,
      papers: [
        {
          paper: 1,
          paper_title: "Cyber Security",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Nature of cyberspace, Technical aspects of threats and vulnerabilities, Vulnerability scanning, vulnerability probe, Open VAS, Networks vulnerability scanning, Network sniffers and injection tools",
              ],
            },
            {
              unit: 2,
              unit_title: "Network Defense tools",
              unit_description: [
                "Firewall Basics, Packet Filter Vs Firewall, How a Firewall Protects a Network, Packet Characteristic to Filter, Stateless Vs Stateful Firewalls, Network Address Translation (NAT) and Port Forwarding, the basic of Virtual Private Networks, Linux Firewall, Windows Firewall, Denial of service attacks, Snort: Introduction Detection System",
              ],
            },
            {
              unit: 3,
              unit_title: "Web Security",
              unit_description: [
                "Basic web security model, Web application security, Session management and user authentication, HTTPS: goals and pitfalls, Content security policies, Web workers and extensions, Introduction to web application tools",
              ],
            },
            {
              unit: 4,
              unit_title: "Security in mobile platform",
              unit_description: [
                "Mobile platform security models, Understanding Android security, Real time privacy monitoring on smartphones, Mobile threats and malware, Mobile web app security",
              ],
            },
            {
              unit: 5,
              unit_title: "Cyber Crime and law",
              unit_description: [
                "Cyber Crimes, Types of Cybercrime, Hacking, Attack vectors, Cyberspace and Criminal Behavior, Introduction to Incident Response, Digital Forensics, Network Language, Computers as Targets, Contaminants and Destruction of Data, Password Cracking, Keyloggers and Spyware, Virus and Warms, Trojan and backdoors, Steganography, SQL injection, Indian IT ACT 2000",
              ],
            },
          ],
          references: [
            "Dieter Gollmann, “Computer Security”, Wiley",
            "Ross Anderson, “Security Engineering”, Wiley",
            "Nina Godbole and SunitBelpure, “Cyber Security Understanding Cyber Crimes, Computer Forensics and Legal Perspectives”, Wiley",
          ],
        },
        {
          paper: 2,
          paper_title: "Multimedia Technology",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Multimedia Technology",
              unit_description: [
                "Elements of Multimedia; Creating multimedia applications; Multimedia file & I/O functions; Multimedia data structures; Multimedia file formats; Multimedia Protocols",
              ],
            },
            {
              unit: 2,
              unit_title: "Multimedia Audio",
              unit_description: [
                "Digital sound; Audio compression & decompression; Companding; ADPCM compression; MPEG audio compression; True Speech; Special effects and Digital Signal Processing; Audio synthesis; FM synthesis; Sound blaster card; Special effect processors on sound cards; Wave table synthesis; MIDI functions; Speech synthesis & Recognition",
              ],
            },
            {
              unit: 3,
              unit_title: "Multimedia Video",
              unit_description: [
                "Representation of Digital video; Video capture; Frame grabbing; Full motion video; Live video in a window; Video processor; Video compression & decompression; Standards for video compression & decompression; Playback acceleration methods",
              ],
            },
            {
              unit: 4,
              unit_title: "Creating Multimedia Animation",
              unit_description: [
                "Icon animation; Bit-map animation; Real-time vs Frame by Frame animation; Object modeling in 3D animation; Motion control in 3D animation; Transparency; Texture, Shadows, Anti-aliasing; Human modeling & Animation; Automatic motion control",
              ],
            },
            {
              unit: 5,
              unit_title: "Multimedia Authoring Tools",
              unit_description: [
                "Project editor; Topic editor; Hot-spot editor; Developing a multimedia title; Multimedia text authoring systems; Usage of authoring tools; Multimedia DBMS; Documents, Hypertext and MHEG; Multimedia on LAN; Video Conferencing techniques",
              ],
            },
          ],
          references: [
            "Multimedia: Computing, Communications & Applications – Nahrstedt & Steinmetz",
            "Computer Speech Processing – Fallside F.",
            "Speech Analysis, Synthesis & Perception – Flanagan,J.L.",
            "Hypertext & Hypermedia- Nielsen J.",
            "Digital Processing of Speech Signala- Rabiner L.R. & Schafer L.W.",
          ],
        },
        {
          paper: 3,
          paper_title: "(Elective): Mobile Adhoc Networks (MANET)",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Mobile Ad Hoc Network",
              unit_description: [
                "Introduction, Wireless Networks, Mobile Ad Hoc Network- Definition, History. MANET Applications and Scenarios, Ad Hoc Network Characteristics, Classification of Ad Hoc Networks",
              ],
            },
            {
              unit: 2,
              unit_title: "MAC Layer Protocols for Ad Hoc Wireless Networks",
              unit_description: [
                "Introduction, Important Issues and the Need for Medium Access Control (MAC) Protocols, Classification of MAC Protocols- Contention-Based MAC Protocols, MAC Protocols Using Directional Antennas, Multiple-Channel MAC Protocols, Power-Aware or Energy-Efficient MAC Protocols",
              ],
            },
            {
              unit: 3,
              unit_title: "Routing Protocols for Ad Hoc Wireless Networks",
              unit_description: [
                "Introduction, Design Issues of Routing Protocols for Ad Hoc Networks, Classification of Routing Protocols. Proactive Routing Protocols – Destination-Sequenced Distance Vector (DSDV), Optimized Link State Routing (OLSR) Protocol. Reactive Routing Protocols- Ad Hoc On-Demand Distance Vector (AODV), Dynamic Source Routing (DSR) Protocol. Hybrid Routing Protocols - Zone Routing Protocol (ZRP).",
              ],
            },
            {
              unit: 4,
              unit_title: "Transport Protocols for Ad Hoc Networks",
              unit_description: [
                "Introduction, Transmission Control Protocol’s (TCP’s) Challenges and Design Issues in Ad Hoc Networks, TCP Performance over That of Mobile Ad Hoc Networks (MANETs), Ad Hoc Transport Protocols, Application-Controlled Transport Protocol (ACTP).",
              ],
            },
            {
              unit: 5,
              unit_title: "Mobility Models for Ad Hoc Networks",
              unit_description: [
                "Introduction, Mobility Metrics, Impact of Mobility Models on MANET, Mobility Model Classifications, Random Walk Mobility, Random Way-point Mobility",
              ],
            },
          ],
          references: [
            "Jonathan Loo,Jaime Lloret, and Jesus Hamilton Ortiz, “Mobile Ad Hoc Networks – Current Status and Future Trends ” CRC Press, Taylor & Francis Group 2012.",
            "Subir Kumar Sarkar,T G Basavaraju and C Puttamadappa, “Ad Hoc Wireless Networks-Principles, Protocols and Applications” Auerbach Publications, Taylor & Francis Group, New York London, 2008.",
            "Radhika Ranjan Roy “Handbook of Mobile Ad Hoc Networks for Mobility Models” Spriger 2011",
          ],
        },
        {
          paper: 4,
          paper_title: "(Elective): Embedded Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Embedded Systems",
              unit_description: [
                "Embedded System Overview,Common Design metrics, General Purpose Processors and Application Specific Processors. Software and hardware combination for making an Embedded System.Concept of various types of memories for implementation of Embedded Systems.",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Selection Criteria of Hardware for Embedded System Design",
              unit_description: [
                "Comparing use of Microprocessor and Microcontroller, PLDs and FPGA for developing an Embedded System. Elementary idea of commonly used microcontroller. Criteria for selection of microcontroller and other interfacing hardware.Architectural block diagram of MCS 51 microcontroller family. Memory organization. Code Memory, Data memory and special function register. Internal circuit and capabilities of various I/O ports pins.",
              ],
            },
            {
              unit: 3,
              unit_title: "Working of microcontrollers",
              unit_description: [
                "Clock cycles, Machine cycle and Instruction cycles and timing diagrams for various essential control signals. Division of Machine cycles in to states and phases",
                "Instruction length and execution time for instructions. Categorization of instruction and various addressing modes. Conditional and unconditional jump instructions.Boolean instructions. Read pin and read latch instructions.SFRs and their purpose. Control of interrupts. Timers, Power status and I/O functions by SFR’s. Addressing of SFR’s. Various modes of Timers and their controls",
              ],
            },
            {
              unit: 4,
              unit_title: "Interfacing",
              unit_description: [
                "Block diagram for Input Output Ports internal Structures and their capabilities for 89C51 and 89C2015 Microcontrollers. Interfacing with external devices. Address for ports and pins. Interfacing with external hardware keys and displays devices. Circuits and criteria for interfacing LEDs,Seven segment display",
              ],
            },
            {
              unit: 5,
              unit_title: "Programming",
              unit_description: [
                "Instruction format for instruction of MCS-51 family microcontrollers. Program and Machine control. Boolean variable manipulation. Data transfer. Arithmetic and Logic Operations. Interrupts and data polling for multiple subroutines in a program. Look up tables and use of data stored in code memory",
              ],
            },
          ],
          references: [
            "Mazidi and Mazidi: The 8051 Microcontroller and Embedded Systems.",
            "C. K. Dwivedi, Solid State circuit design with Microcontrollers.",
            "Ayala Kenneth:The 8051 microcontrollerArcitecture, Programming and Applications.",
            "Raj Kamal: Embedded Systems- Architecture, Programming and Design.",
            "Raj Kamal: Microcontrollers",
          ],
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
              unit_description: [
                "Determinants, Matrices, Elementary row and column operations, Rank of matrix, Inverse of matrix, Eigen values and eigen vectors, special types of matrices such as symmetric, skew asymmetric, Hermitian and skew hermitian matrices, Linear systems of algebraic equations, Consistency, Gauss elimination method to solve system of linear equations, Homogeneous and inhomogeneous systems of equations, Cayley-Hamilton theorem,",
              ],
            },
            {
              unit: 2,
              unit_title: "Calculus",
              unit_description: [
                "Limit, Continuity & differentiability of functions of one variable, Mean-value Theorems, Rolle’s Theorem, Leibnitz formula for nth derivatives of products of functions, Taylor and Maclaurin Theorems, Maxima, Minima, Theorems of integral calculus, Evaluation of definite & improper integrals, Functions of several variables: Partial differentiation, Change of variables in partial differentiation.",
              ],
            },
            {
              unit: 3,
              unit_title: "Vector Differential Calculus",
              unit_description: [
                "Scalar and vector fields, Directional derivatives, Differentials of functions of several variables, Change of variables, Gradient of a scalar function, Conservative fields and potential functions, Divergence and curl of vector fields, Chain rules, Applications to cylindrical and Spherical polar coordinates,",
              ],
            },
            {
              unit: 4,
              unit_title: "Vector Integral Calculus",
              unit_description: [
                "Multiple integrals, Evaluation of double and triple integrals, Line, Surface & Volume integrals, Volumes and Surface Areas of Solids using multiple integrals, Green’s, Gauss’s and Stoke’s Theorem and application.",
              ],
            },
            {
              unit: 5,
              unit_title: "Fourier Series",
              unit_description: [
                "Introduction to Fourier series, trigonometric and exponential forms, Euler formulae for Fourier coefficients, Functions having period 2π and arbitrary period, Even & odd functions, Half range functions, Sine and cosine Fourier series, Fourier integrals,",
              ],
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
              unit_description: [
                "Ordinary differential equations of first order, Separable, exact & linear equations, Existence and uniqueness theorems (Statement only), Higher order linear equations, Workinsons Method of variation of parameters for particular solutions, Euler’s and Cauchy’s equations, Systems of first order equations with constant coefficients",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Ordinary Linear Differential Equations (LDE) of higher order",
              unit_description: [
                "Definition and general form of LDE, the operator D, complete solution of LDE as a sum of complimentary function (CF) and particular integral (PI), inverse operator rule for finding CF & PI, method of variation of parameter to find PI.",
              ],
            },
            {
              unit: 3,
              unit_title: "Complex Algebra",
              unit_description: [
                "Complex numbers, Complex plane, Roots of complex numbers, Complex functions and mappings, analytical functions, Cauchy-Riemann equations, elementary complex functions such as exponential , logarithmic, trigonometric, hyperbolic functions and Inverse functions, Harmonic functions,",
              ],
            },
            {
              unit: 4,
              unit_title: "Complex Integration",
              unit_description: [
                "Complex integration, Complex integrals, Contours, the Cauchy Theorem and Contour integrals, The Cauchy integral formulas, Some properties of analytical functions, Complex integration: Line integral, Cauchy’s integral theorem,",
              ],
            },
            {
              unit: 5,
              unit_title: "Contour Integration",
              unit_description: [
                "Residues and contour integration, Complex power series and Taylor Series, Laurent series and the classification of Singularities, residues and the residues theorem, Evaluation of real integrals by means of residues evaluation of real integrals using integration around unit circle, around the semi circle, integrating contours having poles, on the real axis, Conformal mapping and applications",
              ],
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
              unit_description: [
                "Interference of light: Interference in thin films, Newton’s rings Diffraction: Fresnel and Fraunhofer diffraction, Plane diffraction grating, Measurement of wave length, Dispersive power of grating, Resolving power, Rayleigh criterion",
              ],
            },
            {
              unit: 2,
              unit_title: "Lasers",
              unit_description: [
                "Basic principles of laser, spontaneous emission- stimulated emission-population inversion, spatial and temporal coherence- coherence length, optical amplification, laser rate equations, gain coefficient, threshold condition",
              ],
            },
            {
              unit: 3,
              unit_title: "Introduction to quantum theory",
              unit_description: [
                "Wave particle duality, matter waves, group & phase velocity, uncertainty principle, wave packets, Schrodinger equation",
              ],
            },
            {
              unit: 4,
              unit_title: "Solid State Physics",
              unit_description: [
                "Bonding in solids, Elastic properties of solids, Defects in crystals, Lattice vibrations and thermal properties of solids, Free electron theory, Band theory of solids, Metals, Semiconductors and insulators, Electrical conductivity of simple metals (Free Electron Theory)",
              ],
            },
            {
              unit: 5,
              unit_title: "Nano Physics",
              unit_description: [
                "Introduction to nanophysics, energy levels, density of states, quantum wire, single electron tunneling, quantum dot, nano-transistors and FET, NEMS and sensors.",
              ],
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
              unit_title: "Semiconductors and PN Junction Diode",
              unit_description: [
                "Properties of semiconductors, Intrinsic and extrinsic semiconductors, P and N type of impurities and doping, Charge densities and potential barrier, Draft and diffusion currents, PN junction working and characteristics, It’s applications as – Rectifier: Half wave, Full wave, Bridge Rectifier and their calculation for ripple, Efficiency and PIV; Clipper, Clamper and voltage doublers, Zener and Avalanch breakdown diodes, Tunnel diode, Varacter diode, Thermister",
              ],
            },
            {
              unit: 2,
              unit_title: "Bipolar Transistor",
              unit_description: [
                "Transistor action with simple bias conditions, Working and basic characteristics, CB, CE & CC configuration of transistor amplifiers, Analysis for CB and CE basic amplifiers- Determination of Q-point, dc load line and calculations for gains and impedances, Effect of load and ac load line",
              ],
            },
            {
              unit: 3,
              unit_title: "Transistor biasing",
              unit_description: [
                "Biasing circuits for CB and CE configurations, Leakage currents in CB & CE and it’s effect, Thermal stabilization & Stability factor, Different biasing arrangements for CE- their advantages and drawbacks, Transistor thermal power dissipation and rating",
              ],
            },
            {
              unit: 4,
              unit_title: "Equivalent Circuits of Transistor",
              unit_description: [
                "Transistor as four port device, Impedance, Z-parameters and circuits representation, Admittance Y parameters and circuit representation, h-parameters and circuit representation; Analysis of CB and CE circuits using h-parameters for gains and impedances",
              ],
            },
            {
              unit: 5,
              unit_title: "Field Effect Transistors",
              unit_description: [
                "Basic configuration of JFET, Biasing, Principle of operation and basic characteristics, Basics of MOSFET",
              ],
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
              unit_description: [
                "Brief introduction of binary numbers, Functional block diagram of a computer, Stored program machine, Generation of computers, CPU, I/O, Secondary storage, Memory and its classifications.",
              ],
            },
            {
              unit: 2,
              unit_title: "Introduction to software",
              unit_description: [
                "Generations of programming languages, introduction to applications and system software, File storage, DOS and windows environment.",
              ],
            },
            {
              unit: 3,
              unit_title: "Algorithms",
              unit_description: [
                "Flow charts, Structure and properties of algorithm, Algorithms for g.c.d., Factorial, Fibonacci series, Prime number generation. Linear and binary search, Sorting and bubble sort etc.",
              ],
            },
            {
              unit: 4,
              unit_title: "Basics of C Language",
              unit_description: [
                "C pre-processor, Variables, Operators, Expressions, Control flow, Data types, Arrays, Pointers, Storage classes, Scope and initialization, Input/output, String processing,",
              ],
            },
            {
              unit: 5,
              unit_title: "Pointer Based Programming",
              unit_description: [
                "Pointers, Dynamic data structures, Structures and unions, File handling,",
              ],
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
              unit_description: [
                "Importance of communication, Communication in primitive societies, Ways of communication: One way & two way, Principles of communication: Clarity, Completeness, Conciseness, Consideration, Courtesy, Correctness, Coherency, Level of communication- inter and intra personal, group to person, group to group, Methods of effective oral, Written and non-verbal communication, Process of communication (flow): Downward, Upward and horizontal communication, Official Hierarchy",
              ],
            },
            {
              unit: 2,
              unit_title: "Speaking & Reading Skills",
              unit_description: [
                "Verbal, non-verbal & Visual Communication, Elementary phonetics: speech sounds, Consonant & Vowel Sounds, Phonetic symbols, Horizons-tone, frequency, rate, volume, depth, extempore speech, Rate of speech",
              ],
            },
            {
              unit: 3,
              unit_title: "Writing Skills & Business correspondence",
              unit_description: [
                "Comprehension of ideas in a passage, Expansion of an idea for a particular purpose, Change of words into different parts of speech, Idioms, Antonyms and synonyms, Drafting Business letters, CV & Resume, Application for jobs, Power-point presentation, Using Microsoft Office",
              ],
            },
          ],
          references: [
            "Essentials of Business Communication, Rajendra Pal & J S Korlahalli",
            "Business Communication, Gyani",
            "Effective Communication, Ludlow and Panthon",
            "A Practical English Grammar, Thomson and Marlinet",
            "English Conversation Practice, Grount Taylor",
            "Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "Communication Skill, R Datta Roy and K K Dhir",
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
              unit_description: [
                `Definitions & existence conditions, Laplace transforms of some useful functions, Inverse Laplace Transform, Operational Properties of the Laplace Transform, Linearity, scaling, time shifting, shifting in s-domain, time differentiation and time integration, frequency differentiation & integration, convolutional property, Inversion Integral, Transforms of Periodic functions, Use of Laplace transforms in the solution of differential equations and analysis of electrical circuits.`,
              ],
            },
            {
              unit: 2,
              unit_title: "Fourier Transform",
              unit_description: [
                "Definitions & existence conditions, Fourier transforms of some useful functions, Inverse Fourier Transform, l Properties of the Fourier Transform, Linearity, symmetry, scaling, time & frequency shifting, time differentiation and time integration, frequency differentiation & integration, convolutional property, Transforms of Periodic functions, frequency and amplitude spectra of a function, fourier cosine & sine transforms",
              ],
            },
            {
              unit: 3,
              unit_title: "Special Mathematical Functions",
              unit_description: [
                "Series Solutions of differential equations, Power series solutions of homogeneous equations , Singular points of linear differential equations, Gamma function ( Г(n)) , recurrence formula for Г(n) , value of Г(1/2), Beta function, relationship between Gamma & Beta functions, Error functions-definitions and simple properties, complimentary error function & Q function.",
              ],
            },
            {
              unit: 4,
              unit_title: "Legendre Functionsr",
              unit_description: [
                "Legendre differential equation, Legendre polynomial, Rodrigue’s formulae, generating function, Recurrence formulae, Orthogonality",
              ],
            },
            {
              unit: 5,
              unit_title: "Bessel Functions",
              unit_description: [
                "Bessel’s differential equation, Bessel functions of first and second types, Recurrence formulae, Generating function, Orthogonality, Modified Bessel Functions,",
              ],
            },
          ],
          references: [
            "Applied Mathematics for Mathematician & Engineers: L A Pipes (TMH)",
            "Engineering Mathematics: H K Das (S Chand & Co. Ltd.)",
            "Engineering Mathematics: B.S. Grewal (Khanna Pub.)",
            "Advanced Engineering Mathematics: Wylie C R (TMH)",
            "A Course in Ordinary Differential Equations: Rai, Chaudhary & Friedman",
            "Advance Engineering Mathematics: E. Kreyszig",
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
              unit_description: [
                "Errors: Sources and types of errors, measurements. Significant digits. Floating point representation of numbers.  Roots of Non-linear Algebraic and Transcendental Functions , Bisection, Regula-Falsi, Secant and Newton-Raphson Methods, Fixed points iteration, Rate of convergence",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Numerical solution of system of linear equations, Gauss elimination method, LU decomposition, ill-conditioned systems, Gauss-Seidel and Jacobi method, Rate of convergence.",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Polynomial interpolation: Finite differences, Newton’s forward and backward differences interpolation polynomials, Newton’s divided differences interpolation polynomial, Lagrange’s polynomial. Curve fitting: Method of least squares.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Numerical differentiation and integration, Formulae for derivatives in the case of equally spaced points, Trapezoidal and Simpson’s rules, Errors in integration formulae. Monte-Carlo Method: Basic principles, One dimensional and Multi-dimensional integrals.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Single-step and multistep methods for solving ordinary differential equations: Taylor series method, Euler’s method, Modified Euler’s method, Runge-Kutta methods.Adam’s & Milne’s method.Numerical solution for boundary value problems, Finite difference methods for solving Laplace’s equation in a rectangular region. Finite Element methods and its applications.",
              ],
            },
          ],
          references: [
            "Numerical Methods for Science and Engg.: Ralph G. Stanton (Prentice-Hall of India)",
            "Elementary Numerical Analysis An algorithmic approach: S.D Conte and Carl de Boor",
          ],
        },
        {
          paper: 3,
          paper_title: "Digital Electronics",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Binary systems and Boolean Algebra",
              unit_description: [
                "Digital systems, Number representation in different bases and their inter conversion, Compliments, Arithmetic operations on binary numbers, Binary codes; Basic theorems and properties, Switching algebra, Switching function and their representations. Canonical forms of switching functions and their transformations, operations over switching functions, Digital logic gates- symbols, logic expression and their truth tables.",
              ],
            },
            {
              unit: 2,
              unit_title: "Digital ICs & Combinational Logic Circuits",
              unit_description: [
                "Characteristics of digital ICs. Introduction to logic families- RTL,DTL, TTL,ECL,MOS and CMOS circuits and comparison of their performance.",
                "Binary adder and Subtractor circuits, Magnitude comparator, Decoders, Encoders, Multiplexer and demultiplexer, Realization of switching expressions by decoders, encoders, multiplexer and Demultiplexer, Programmable logic circuits, Tri-state logic.",
              ],
            },
            {
              unit: 3,
              unit_title: "Combinational Circuit Design",
              unit_description: [
                "Minimization Techniques, Realization of switching expressions by Karnaugh map, VEM and Quinne-Mclusky methods, Combinational circuits and their analysis. Realization of switching expressions by two level AND, OR, NOT gates; NAND gates only; NOR gates only and Ex-OR and AND gates only; MUX based circuit design",
              ],
            },
            {
              unit: 4,
              unit_title: "Synchronous Sequential Logic Circuits",
              unit_description: [
                "Sequential circuits, latches and Flip Flops, Analysis of clocked sequential circuits. State reduction and assignment, design of synchronous circuits, shift registers, ripple counters, synchronous counters.",
              ],
            },
            {
              unit: 5,
              unit_title: "Asynchronous Sequential Logic",
              unit_description: [
                "Analysis procedure, circuits with latches, Design procedure, reduction of states and flow tables .Races and race Free State assignments, Hazards.",
              ],
            },
          ],
          references: [
            "Digital Design : Morris Mano (PHI)",
            "Digital circuits & logic design: S.C.Lee (PHI)",
            "Digital electronics (circuits, systems & ICs) : S.N.Ali (Galgotia)",
            "Digital electronics: W.H.Gothmann (PHI)",
            "Switching theory : A.K Gautam (Katsons)",
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
              unit_description: [
                "Classification of amplifiers , Comparative study of CB,CE and CC amplifiers characteristics RC coupled amplifiers – analysis of gain in different frequency ranges and BW calculations, Multistage coupling –Cascade, cascade Darlington pair ,effect of coupling on gain & BW, Transformer coupled amplifiers, DC coupled amplifiers , Difference amplifiers .",
              ],
            },
            {
              unit: 2,
              unit_title: "Power amplifiers",
              unit_description: [
                "Class A, Class B, and Push-Pull amplifiers- Their working , advantages and drawbacks , comparison ; Class C, Class D amplifiers, stagger tuned amplifiers; FET amplifier configurations and analysis.",
              ],
            },
            {
              unit: 3,
              unit_title: "Feedback Amplifiers",
              unit_description: [
                "Types of feedback and different feedback schemes in amplifiers ; General characteristics of negative feedback amplifiers and their effect on gain impedances , distortion, and noise , Emitter follower.",
              ],
            },
            {
              unit: 4,
              unit_title: "Oscillators",
              unit_description: [
                "Barkhausen criterion for oscillations Tuned collector oscillator, RC phase shift and Wein bridge oscillator, Crystal oscillator, Frequency stabilization.",
              ],
            },
            {
              unit: 5,
              unit_title: "Power supplies",
              unit_description: [
                "Block diagram of Power Supply (PS) and it’s constituent circuits , Electronics voltage stabilizer, Zenner and transistor circuits for stabilization, Constant current, and current limited PS, Basics of SMPS and UPS.",
              ],
            },
          ],
          references: [
            "Integrated Electronics: Jacob Millman",
            "Electronics Devices and Circuits Theory: Robert L. Boylestad and Nashelsky",
            "Handbook of Electronics: Gupta and Kumar",
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
              unit_description: [
                "Circuit elements and their classification; LLFPB circuits; Nodal and Mesh analysis; Equivalence of networks; Duality; Source trans formations; T- transformation;",
              ],
            },
            {
              unit: 2,
              unit_title: "Networks Theorems",
              unit_description: [
                "Superposition, Thevenin & Norton, Maximum power transfer, Reciprocity, Millman, Substitution & Tellgene’s theorems and their applications",
              ],
            },
            {
              unit: 3,
              unit_title: "Transient Circuit Analysis",
              unit_description: [
                "Natural and forced response; Evaluation of initial conditions; Transient and steady state responses of simple RL, RC and RLC circuits to arbitrary excitations.",
              ],
            },
            {
              unit: 4,
              unit_title: "Sinusoidal Analysis",
              unit_description: [
                "Sinusoidal and Complex forcing functions; Phasor representation of Complex functions; sinusoidal steady-state response; Concept of Complex frequency; Damped Sinusoidal forcing function- Natural and forced response; Frequency response – parallel and series resonance. Mutual Impedance and coefficient of Coupling; Unity Coupled Coils;",
              ],
            },
            {
              unit: 5,
              unit_title: "Classical Filters",
              unit_description: [
                "Characterization of Two ports, z,y, h and transmission parameters, Interconnection of two ports, Analysis of common two ports.",
                "Filter fundamentals –pass and stop bands, The Constant –K low-pass and high-pass filters; The m-derived T and  sections; Band-pass and Band-elimination filters; Impedance Matching half- sections.",
              ],
            },
          ],
          references: [
            "Engineering Circuit Analysis: William H. Hayt, Jr. Jac E. Kemmerly. (TMH)",
            "Electric Curcuits: David A. Bell (PHI)",
            "Network Analysis : Van Valkenburg (PHI)",
            "Basic Circuit theory : Desoer and Kuh (TMH)",
            "Network & System : D. Roy. Chandhary (New Age International)",
            "Circuit theory : Chakarbarti (Dhanpat rai & Sons)",
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
              unit_description: [
                "Objectives of communication: Information, Advice, Order, suggestion, Persuasion, Education, Warning, Raising morale, Motivation, Audio-visual communication: Use of audio visual aids for effective communication, Role of news papers, Radio, Cinema and TV, Barrier to communication and overcoming barriers",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Interactive Communication Skills & Personality Development",
              unit_description: [
                "Group Discussions, Debates, Facing an interview, know your body language, confidence building, e-mail etiquette, The art of listening: learning through listening, Hearing vs. Listening,",
              ],
            },
            {
              unit: 3,
              unit_title: "Speaking & writing Skill",
              unit_description: [
                "Syllable & syllable stress, summarizing a passage for official usage, Précis writing, Report writing- importance of reports, preparing a report, technical report writing, Conversational skill, Telephonic Etiquettes",
              ],
            },
          ],
          references: [
            "Essentials of Business Communication, Rajendra Pal and J S Korlahalli",
            "Business Communication, Gyani",
            "Effective Communication, Ludlow and Panton",
            "A Practical English Grammar, Thomson and Martinet",
            "English Conversation Practice, Grount Taylor",
            "Developing Communication Skills, Krishna Mohan and Meera Banerji",
            "Business Correspondence and Report Writing, R C Sharma and Krishna Mohan",
            "Communication Skill, R Datta Roy and K K Dhir",
          ],
        },
      ],
    },
    {
      semester: 3,
      papers: [
        {
          paper: 1,
          paper_title: "Network Analysis & Synthesis",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Network Graph Theory",
              unit_description: [
                "Review of Conventional Circuit Analysis Techniques, Analysis of Electrical Circuits using Laplace Transform, Basic definitions and properties of linear graphs, Matrices of graphs, Equilibrium equations, Generalized nodal and loop analysis",
              ],
            },
            {
              unit: 2,
              unit_title: "State Variable Techniques",
              unit_description: [
                "The concept of state variables of networks; Formulation of state equations and their solutions for linear time invariant networks",
              ],
            },
            {
              unit: 3,
              unit_title: "Signal flow Graphs",
              unit_description: [
                "Definition and properties of SFG; SFG models of linear circuits, Reduction of SFG, Mason’s graph gain formula",
              ],
            },
            {
              unit: 4,
              unit_title: "Network Functions",
              unit_description: [
                "Driving point and Transfer functions, Poles and Zeroes of network functions; Properties of Network functions and restrictions on pole and zero locations; Plots of Network functions; Relation between pole zero locations and time domain behavior; Parts of Network functions ; Calculation of Network function from its given parts",
              ],
            },
            {
              unit: 5,
              unit_title: "Network Synthesis",
              unit_description: [
                "Positive real functions; Definition, properties and testing of positive real functions; Herwict polynomials; synthesis of Driving point functions of two-element kind one-port network",
              ],
            },
          ],
          references: [
            "Network Analysis & Synthesis: F.F. Kuo (Wiley)",
            "Network Synthesis: Van Valkenburg (PHI)",
            "Linear Network Theory: N.Balabanian (Matrix Publisher)",
            "Circuit Theory: Ronald A. Rohrer (TMH)",
            "Networks, Filters : Ruston & Bordogna",
          ],
        },
        {
          paper: 2,
          paper_title: "Electronic Instrumentation & Measurement",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Measurement Fundamentals",
              unit_description: [
                "Definition of measurement and instrument, Accuracy, Precision, Sensitivity, Resolution, Range, Stability, Dynamic response and repeatability of measuring instruments",
                "Loading effect, loading effect due to shunt-connected instruments, loading effects due to series connected instruments",
                "Standards – International standards, Primary and secondary standards, Working or industry standards in measurements, Calibration, Calibration check and periodic calibration of instruments",
              ],
            },
            {
              unit: 2,
              unit_title: "Electronic Volt OHM Meters",
              unit_description: [
                "Analog type VOM – Principles of operation, working and construction; Bipolar transistor type electronic multi meter, FET bridge type multi meter ; Comparison of analog, VOM and EMM, Chopper type Electronic DC voltmeter, MOSFET electrometer, Digital Multi meter Error in DMM measurement",
              ],
            },
            {
              unit: 3,
              unit_title: "Waveform Measurement Using CRO",
              unit_description: [
                "Block diagram of CRO, Construction and principle of operation, sensitivity, Trigger synchronization, special features of dual trace, Double beam delayed sweep and storage oscilloscopes, Front Panel controls, oscilloscope probes, Amplitude, Frequency, time period and phase measurement, Amplitude modulation measurement.",
              ],
            },
            {
              unit: 4,
              unit_title: "Time and Frequency Measurement",
              unit_description: [
                "Measurement of frequency by resonance and heterodyne methods, Digital frequency counter, Measurement of frequency, time period and time interval, Errors in frequency counters.",
              ],
            },
            {
              unit: 5,
              unit_title: "Frequency Spectrum, Distortion and Wave Measurement",
              unit_description: [
                "Spectrum analyzer, Harmonic distortion analyzer, Inter-modulation distortion analyzer, Wave analyzer and distortion factor meter- Tuned circuit wave meter for frequency measurements.",
                "Transducers and Sensors: Classification, Selecting a transducer and Sensing element, Strain gauge, Displacement transducers, temperature transducer, Photosensitive transducer, Flow meter",
              ],
            },
          ],
          references: [
            "Modem Electronics Instrumentation and Measurement Techniques: Helfric & Cooper. (PHI)",
            "Instrumentation, Measurement and Analysis: Natra & Choudhary (TMH)",
            "Instrumentation Devices & Systems: Rangan, Sarma & Mani (TMH)",
            "Transducers and Instrumentation: D.V.S. Moorty (PHI)",
          ],
        },
        {
          paper: 3,
          paper_title: "Analog Circuits & Systems",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Linear ICs",
              unit_description: [
                "Linear IC design criteria, commonly used configurations and biasing techniques, current source; Current mirror; Differential amplifier circuits",
              ],
            },
            {
              unit: 2,
              unit_title: "Operational Amplifier",
              unit_description: [
                "Single supply and dual supply concept; Common mode input range; Output swing; Full power bandwidth; Slew rate and gain bandwidth product, Frequency compensation; Study of 741, OP-07, LM358 & LM393",
              ],
            },
            {
              unit: 3,
              unit_title: "Applications of Op-Amp",
              unit_description: [
                "Linear circuit Applications- Differential DC amplifier, Differentiators and Integrators; Voltage to current converters, Nonlinear circuits- Series and shunt limiters, feedback limiters, logarithmic amplifiers, Active filter circuits- LP, BP and HP filters; Sample and Hold circuits, Sine wave, Square wave Triangular wave and saw-tooth wave generator circuits and pulse circuits and their characteristics, Instrumentation Amplifier",
              ],
            },
            {
              unit: 4,
              unit_title: "A/D & D/A Converters",
              unit_description: [
                "Functions and characterization of A/D and D/A converters; Different types of A/D and D/A converters; Study of 08xx series converters and their applications",
              ],
            },
            {
              unit: 5,
              unit_title: "Voltage Regulators",
              unit_description: [
                "Study of Commonly used 3 Terminal regulators (78xx, 79xx;LM 317); Techniques for current limit and thermal shut down; Precision voltage regulators and their characteristics",
              ],
            },
          ],
          references: [
            "Op-Amps and Linear integrated circuits : R.A. Gayakward (Pearson)",
            "Pulse digital and Switching Waveforms : Millman and Taub (TMH)",
            "Operational Amplifiers and Integrated Circuits : Robert F. Coughlin Frederiek F. Discroll (PHI)",
            "Operational Amplifiers and Integrated Circuits : James M. Fiore (Jaico)",
            "Operational Amplifiers ; Design & Applications :J.G.Graeme, G.E.Tobey et.al. (McGraw Hill)",
          ],
        },
        {
          paper: 4,
          paper_title: "Basic Electrical Engineering",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "D C Generators",
              unit_description: [
                "Principles and construction of DC machines; E.M.F Equation; Various types of losses occurring in DC Generators; its efficiency; Commutation; Armature reaction; Series , Shunt and Compound Generators; their characteristics and applications; Parallel operation of shunt generators.",
              ],
            },
            {
              unit: 2,
              unit_title: "D C Motors",
              unit_description: [
                "Types of DC Motors and their Basic characteristics; Torque Equation; Testing of DC motors; Separation of Losses; Need of starters for large motors & their working; Speed control of DC motors",
              ],
            },
            {
              unit: 3,
              unit_title: "A C Fundamentals & Poly phase Circuits",
              unit_description: [
                "Single phase alternating currents; Average R.M.S values; Form factor; Power factor; Power in AC circuits- Instantaneous power, Average power and Apparent power, Complex power- Active and Reactive power; Power factor in terms of Average & Apparent powers; Poly phase systems, Star and Delta connections, Relationship between line and phase values.",
              ],
            },
            {
              unit: 4,
              unit_title:
                "Electrical Measurements and Measuring Instruments (Unit 4 & 5)",
              unit_description: [
                "Principles of operation and construction of moving coil, Moving iron, Dynamometer and induction types of Ammeters & Voltmeters; Extension of their ranges; Measurements of power- Three-ammeters and three voltmeters methods of measuring power in Single phase circuits; Construction of Watt meters; Induction and dynamometers types; Measurement of power in three phase circuit; Balanced and unbalanced three phase loads; Two-wattmeter method; Measurement of very high and very low resistances; measurement of energy; types of single-phase energy meters; errors and adjustments; Measurement of speed",
              ],
            },
          ],
          references: [
            "Basic Electrical Engineering I J Nagrath (TMH)",
            "Electrical Technology B.L. Theraja (S. Chand)",
          ],
        },
        {
          paper: 5,
          paper_title: "Computer Architecture & Organization",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Basic building blocks of digital computer- Essential and non-essential components; Basic functional block diagram of a computer; Stored Program Concepts, Generation of Computers and Programming languages. Computer memory: Types of read/write memories- Static memory, Dynamic Memory, NVRAM etc., various types of ROMs.",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Components of CPU, Bus systems, Data path. Instruction set completeness, Instruction Formats. Control unit, Micro-programmed and hardwired controls. CISC and RISC architecture.",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Memory organization, Primary and secondary storages, Cache and its mapping, Memory hierarchy. Basic I/O methods. Memory mapped and Standard Input-Output.",
                "Memory management techniques – Relocation, Swapping, Partitioning, Paging, Segmentation, Combined Systems; Concept of virtual memory.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Microprocessor: Essential and non-essential components, Microprocessor 8085: Architecture, Instruction set, Addressing modes, Pin diagram, Timing diagram, Interrupts etc. Assembly language programs (for 8085) for simple problems such as Maximum finding, Summation, Sorting, Searching, delay routines etc.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Microprocessor 8086: Architecture, Addressing modes, Pin diagram, classification of interrupts and interrupt Vector Table. Concept of Math co-processor. Comparative study of microprocessors.",
              ],
            },
          ],
          references: [
            "Digital Computer Electronics : Malvino",
            "Microprocessor Architecture Programming Applications with 8085/8080A: Brey",
            "Digital System Design and Microprocessor: Hayes, John P.",
            "Computer Architecture and Organization: Hayes, John P.",
            "Computer System Architecture: Mano, M. M.",
            "Digital Computer Fundamentals: Bartee",
          ],
        },
        {
          paper: 6,
          paper_title: "Industrial Management I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Engineering Economics",
              unit_description: [
                "Nature and scope of economics, Economic decision and Technical decision, Wants and utility, Demand and supply, Elasticity of demand and supply, Concepts of cost and revenue, Concept of equilibrium and margin, Four factors of production and their peculiarities, Money and banking –Function of money, Function of banks, Commercial and central banks, Monetary policy of the Reserve Bank of India.",
                "National Income- Macro Economics approach, GNP, NNP, NI, DI, PI methods of calculation of national income.",
              ],
            },
            {
              unit: 2,
              unit_title: "Organization",
              unit_description: [
                "Concepts of organization, Characteristics of organization, Elements of organization, Organizational structure, Organization charts, Types of organization-formal line, Military or scalar organization, Matrix organization, Authority and responsibility, Span of control, Delegation of authority.",
              ],
            },
            {
              unit: 3,
              unit_title: "Personal Management",
              unit_description: [
                "Recruitment and training, Labour turnover, Operator training, Suggestion systems",
                "Industrial ownership -Types of ownership-single ownership, partnership, Joint stock company, co-operative societies, public sector, private sector, scientific management-review of different schools of thoughts.",
                "Wages and Incentives: Feature of wages, Time and piece rate, Different incentive plans, Profit sharing, Job evaluation and merit rating , Factors of comparison and point rating .",
                "Industrial Relations- Industrial disputes, Collective bargaining, Trade unions, Workers participation in management, Labour welfare",
                "Industrial safety- Working conditions, Environmental factors, Psychological attitude to work and working conditions, Fatigue, Accidents and Hazards.",
              ],
            },
          ],
          references: [
            "Industrial Organization and Management: Bethel et.al",
            "Principles of Industrial Management: Kootnz & Donnel",
            "Financial Management: Prasanna Chandra",
            "Industrial Finance of India S K Basu",
            "Operation Management: Fabricky et al",
          ],
        },
      ],
    },
    {
      semester: 4,
      papers: [
        {
          paper: 1,
          paper_title: "EM Wave Theory",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Static Electric Fields",
              unit_description: [
                "Electrostatics: Coulomb’s law, Gauss’s law, Electric field due to several charges, Potential function, Field due to continuous distribution of charge, Equi-potential surfaces, Divergence theorem, Poisson’s and Laplace’s equations, Capacitance, Energy stored in an Electric field",
              ],
            },
            {
              unit: 2,
              unit_title: "Magnetostatics",
              unit_description: [
                "Magnetic flux, Magnetic flux density Magnetic intensity, Energy stored in a magnetic field, Ampere’s law for a current element, Magnetic vector potential, Magnetic vector potential of a current element, Magnetic dipole",
              ],
            },
            {
              unit: 3,
              unit_title: "Maxwell’s equations",
              unit_description: [
                "Ampere’s law, Current continuity equations, Displacement current, Faradays law, Filled equations in vector and integral forms, Boundary conditions at an interface",
              ],
            },
            {
              unit: 4,
              unit_title: "Plane EM Waves",
              unit_description: [
                "Solution of wave equations in rectangular, Cylindrical and spherical coordinates for Wave Equation free space, Conductors and dielectrics: Polarization, Isotropic and anisotropic media, Reflection and refraction, Skin effect and boundary, value problems, Poynting vector and power flow",
              ],
            },
            {
              unit: 5,
              unit_title: "Waveguides & Transmission Lines",
              unit_description: [
                "Electromagnetic wave in rectangular and cylindrical waveguides, TE and TH modes, Field and propagation characteristics, Formulation of differential equation and its solution, Wave and phase velocity, Characteristics impedance and propagation constant, Amplitude and phase distortion, Quarter wave and eighth wave impedance, Transformers, Impedance matching techniques, Single and double stub impedance matching, Smith chart.",
              ],
            },
          ],
          references: [
            "Electromagnetic Waves & Radiating Systems: Jordan (PHI)",
            "Electromagnetic Theory: K D Prasad (Khanna Pub.)",
            "Electronic Communication Systems: George Kennedy (TMH)",
            "Electromagnetic Theory & Wave Propagation: S N Ghosh (Narosa)",
          ],
        },
        {
          paper: 2,
          paper_title: "Semiconductor Device Technology",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Junctions & Contacts",
              unit_description: [
                "Current voltage characteristics of an ideal p-n Junction under zero bias condition; current-voltage characteristics of an ideal p-n junction (the diode equation);Generation and recombination currents; Depletion capacitance; Diffusion Capacitance and Equivalent circuit of a p-n diode; Junctions Breakdowns; Impact and Avalanche Breakdown; Schottky Barriers; Current-voltage characteristics of Schottky diodes: Thermionics emission and Thermionic-Fieldemission model ; small signal circuit Schottky diode; Ohmic contact ; Tunneling and Tunnel diodes; Hetero junctions",
              ],
            },
            {
              unit: 2,
              unit_title: "Bipolar Junction Transistors",
              unit_description: [
                "Principle of operation; Ebers-Moll Model ; Gummel-poon Model; Current Components and Current gain ; Base Spreading Resistance; Graded base Transistors; Output Characteristics and early effect Operating point and Small signal equivalent circuits",
                "Problems of BJT: Emitter current crowding",
              ],
            },
            {
              unit: 3,
              unit_title: "Field Effect Devices",
              unit_description: [
                "JFET concepts- Basics JFET and MESFET operation, The device characteristics- Internal pinch-off voltage , Pinch-off voltage, and Drain to source saturation voltage, Ideal DC current-voltage relationship, Non-ideal effects channel length modulation; velocity saturation effects; Sub-threshold and gate current effects, small signal equivalent circuit and frequency limitations",
              ],
            },
            {
              unit: 4,
              unit_title: "MOSPHET",
              unit_description: [
                "Fundamentals of Metal-oxide semiconductor field effect transistor energy band diagrams, Depletion layer thickness, Work function differences , Flat band and threshold voltage , capacitance-voltage characteristics and it’s comparison with ideal c-v characteristics , Frequency effects ; The Basic MOSFET operation ,Current-Voltage relationship-concepts and its mathematical derivation",
              ],
            },
            {
              unit: 5,
              unit_title: "Organic Semiconductors",
              unit_description: [
                "Basic Organic semiconductor materials and their classification; Basic concepts of OLEDs, Organic Photovoltaic devices and organic semiconductors for FET, White LED",
              ],
            },
          ],
          references: [
            "Physics of semiconductor devices: Michael Shur (Prentice Hall of India)",
            "Semiconductor Physics & Devices: Basic Principles , Donald A. Neaman (Irwin Book Team)",
          ],
        },
        {
          paper: 3,
          paper_title: "Electrical Technology",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Transformers",
              unit_description: [
                "Construction and principles of working, losses in transformers, Equivalent circuit, Regulation and efficiency of Transformers, Autotransformers, Three phases transformers with different methods of connection using three single phase transformers, Scott connection and its application",
              ],
            },
            {
              unit: 2,
              unit_title: "Alternators",
              unit_description: [
                "Principle of operation, Rotating field and rotating armature types, Armature reaction, Synchronous impedance method of estimating its voltage regulation, Parallel operation of Alternators",
              ],
            },
            {
              unit: 3,
              unit_title: "Synchronous Motors",
              unit_description: [
                "Working principles, Starting of synchronous motors, Motor on load, Effect of increase of load on torque developed, Effect of excitation on armature current and power factor, Constant power operation, V-curves, Hunting, Damper winding",
              ],
            },
            {
              unit: 4,
              unit_title: "Induction Motor",
              unit_description: [
                "General Principle and construction of three-phase induction motor; Phase wound and squirrel cage types of Induction motor; Production of rotating fields, Slip; Rotor emf and frequency; Starting and running torques; Relationship between torque and slip; Equivalent circuit; Vector diagram; No load and blocked rotor tests; Speed control and starting methods",
              ],
            },
            {
              unit: 5,
              unit_title: "Special Purpose Motors",
              unit_description: [
                "Single phase induction motors, Shaded pole motors, Brushless DC motors, Stepper motors, Universal motors, AC Series motors, Reluctance motors, Servomotors and their applications",
              ],
            },
          ],
          references: [
            "Basic Electrical Engineering: I J Nagrath (TMH)",
            "Electrical Technology: B.L. Theraja (S. Chand)",
          ],
        },
        {
          paper: 4,
          paper_title: "Control Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Control System Concepts",
              unit_description: [
                "The Control Problem; Open-loop and closed-loop control system; Basic characteristics of Feedback Control Systems –Stability, Steady-state accuracy, transient accuracy, Disturbance rejection, Insensitivity & Robustness; Basic modes of feedback control- Proportional, Integral and Derivative",
              ],
            },
            {
              unit: 2,
              unit_title: "Mathematical modeling of Dynamic systems",
              unit_description: [
                "Differential equation modeling; Analogous systems; Transfer function modeling; Block diagrams and their reduction; Signal flow graphs and Mason’s graph gain formula; Modelling in State space; state diagrams.",
              ],
            },
            {
              unit: 3,
              unit_title: "Time-domain Analysis",
              unit_description: [
                "Standard test signals; Steady-state error constants and system types; Response of first and second order systems to standard test signals; Time-domain performance specifications; Derivative feedback control",
                "Stability Analysis: Concepts of stability; Routh-Hurwitz criterion; Stability analysis using Root-Locus plots",
              ],
            },
            {
              unit: 4,
              unit_title: "Frequency-Domain Analysis",
              unit_description: [
                "Frequency-response plots- Bode plots, Polar plots, log-magnitude vs phase plots; Performance specifications in frequency-domain; Evaluation of closed-loop frequency responses ; Constant M&N circles; Nichols chart; Stability analysis using Nyquist stability criterion; Relative stability phase and Gain Margins.",
              ],
            },
            {
              unit: 5,
              unit_title: "Control System Design",
              unit_description: [
                "Preliminary Design consideration; Compensator design using Root-Locus plots- phase-lag, phase-lead and lag-lead compensation; Minor-loop feedback compensation; Compensator design using Frequency-response plots- phase-lag, phase-lead and lag-lead compensation; Minor-loop feedback compensation",
              ],
            },
          ],
          references: [
            "Modern Control Engineering : Katsuhiko Ogata (Pearson)",
            "Control System Engineering: Nagrath & Gopal (New Age)",
            "Control System Engineering: Norman S. Nise (John Wiley & Sons Inc)",
            "Design of Feedback Control Systems: Stefani , Shahian, et al (Oxford)",
            "Automatic Control System: B.C.Kuo. (PHI)",
          ],
        },
        {
          paper: 5,
          paper_title: "Signals and Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Representation & Specification of Signals",
              unit_description: [
                "Continuous time signals-– Periodic Vs Aperiodic, Symmetrical Vs Asymmetrical, Continuous Vs discrete. Elementary signals and associated wave forms- The unit-step, Unit Ramp, Unit-impulse and exponential signals. Periodic signals- Sinusoidal, Square, Sawtooth and impulse train, - Energy Vs Power signals",
              ],
            },
            {
              unit: 2,
              unit_title: "Representation of Systems",
              unit_description: [
                "Classification of systems- Static vs dynamic, Time variant vs time-invariant, Linear vs non-linear, Casual vs non-casual and stable vs unstable. Linear time-invariant (LTI) systems- definitions and properties, impulse response and transfer function, Convolution, signal transmission through LTI systems, Filter characteristics of linear systems, Bandwidth and rise time, Spectral density, Parseval’s theorem, Auto & cross-correlations",
              ],
            },
            {
              unit: 3,
              unit_title: "Probability & Random Variables (Unit 3 & 4)",
              unit_description: [
                "Random Experiments, Sample space, Events, Definitions of probability, Probability of union of events, Conditional Probability, Bayes’ theorem, Independence of events",
                "Random Variables, Distribution functions, Probability Mass Function (PMF) of Discrete Random Variables, Probability Density Function (PDF) of continuous random variables, Mathematical expectation, Moments",
                "Discrete uniform distributions, Bernoulli distribution, Poisson distribution, Binomial distribution, Continuous uniform distribution, Normal distribution, Exponential distribution, Rayleigh & Maxwell distributions.",
              ],
            },
            {
              unit: 5,
              unit_title: "Random Processes",
              unit_description: [
                "Classification of random processes- Stationary, Ergodic & Stochastic processes, Auto Correlation & power spectral density. Sources of noise, Thermal noise & Shot noise, PDF of envelop of narrow band noise and narrowband noise plus sinusoidal signal",
              ],
            },
          ],
          references: [
            "Principle of Digital Communication: J. Das (Wiley)",
            "Network Analysis & Synthesis: F.F. Kuo (Wiley)",
            "Signal & Systems: Simon Haykin (Wiley)",
            "Communication Systems: Simon Haykin (Wiley)",
            "Probability Random Variable & Stochastic Process: Papoulis (TMH)",
            "Signals Systems and Communication : B.P.Lathi (Wiley)",
            "Communication Systems : B.P. Lathi (Wiley)",
          ],
        },
        {
          paper: 6,
          paper_title: "Industrial Management II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Marketing Management",
              unit_description: [
                "Concept of marketing VS sales approach , Consumer behavior and demand concept, Buying motives, Influence of income level, Product design , New product distribution , Pricing methods and tools , Break even analysis and marginal costing in pricing , Sales promotion, Marketing research, Test marketing , Marketing of services, Advertising management-types of advertising , Choice of media , Economic and Psychological factor s in advertising .",
              ],
            },
            {
              unit: 2,
              unit_title: "Finance Management",
              unit_description: [
                "Tasks , Evolution of corporate management , Long term financing , Equity , Preference and Debenture capitals, Term loans , Dividends and share valuation, Legal aspects of dividends , Short term financing , Working capital influencing factors , Cash budgeting , Term of liquidity , Management of receivable and inventories , Budgets and Budgetary control – objectives of budgeting , classification, ratio analysis.",
                "Management Accounting: Fundamentals of Book-keeping, Journalizing, Ledger accounts, Subdivision of journal, Cash book, Banking transactions, Trial balance, Preparation of trading, Profit and Loss account, and Balance sheet, Adjustments",
              ],
            },
          ],
          references: [
            "Industrial Organization and Management: Bethel et.al",
            "Principles of Industrial Management: Kootnz & Donnel",
            "Financial Management: Prasanna Chandra",
            "Industrial Finance of India S K Basu",
            "Operation Management: Fabricky et al",
          ],
        },
      ],
    },
    {
      semester: 5,
      papers: [
        {
          paper: 1,
          paper_title: "Antennas & Wave Propagation",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Principles of Radiation",
              unit_description: [
                "Concept of radiation; Isotropic and Directional radiation; Basic Antenna Parameters – Radiation Pattern, Radiation Intensity, Power density, Gain, Directivity, Beam width, Polarization; Effective Height Concept.",
              ],
            },
            {
              unit: 2,
              unit_title: "Thin Wire Antennas",
              unit_description: [
                "Linear wire antennas- Concept of Retarded potential; Radiation from current element and small dipole; Half-wavelength dipole; Long wire Antennas; Linear elements near or on infinite perfect conductors-Image theory, Vertical and Horizontal Eclectic dipole",
                "Loop Antenna- Equivalence of small loop to short Magnetic Dipole; Radiation from short Magnetic Dipole and equivalent small loop; Large circular loop with uniform in-phase current; Radiation resistance & Directing of circular loop with uniform current",
              ],
            },
            {
              unit: 3,
              unit_title: "Antenna Arrays",
              unit_description: [
                "Point sources; Arrays of two isotopic point sources; Non-isotropic but similar point sources; Principles of Pattern Multiplication; Broadside & End-Fire Arrays; Dolph-Teheby Scheff Distribution",
              ],
            },
            {
              unit: 4,
              unit_title: "Antenna Feedings and Antenna Impedance",
              unit_description: [
                "Location and Methods of feeding Antenna; End fed and centre-fed systems;; Reciprocity Theorem; Arrays of Dipoles; Arrays with parasitic elements; Log-periodicdipole array antenna; Phased Arrays; Folded Dipole Antenna; Rhomhrd Antenna. Measurement of radiation pattern, Power gain, directivity",
              ],
            },
            {
              unit: 5,
              unit_title: "Wave Propagation",
              unit_description: [
                "Ground wave; Surface wave and space wave propagation; Earth’s atmosphere; Effective earth’s radius; Tropospheric and duct propagation. Eccles Larmor theory of ionospheric wave propagation; Critical penetration frequency; Maximum usable frequency and Skip distance; Effects of earth’s magnetic field on ionospheric propagation",
              ],
            },
          ],
          references: [
            "Antenna Theory – C.A. Balanis (Wiley)",
            "Antennas – Kraus (TMH)",
            "Antenna Engineering – Weeks (TMH)",
            "Electromagnetic Waves & Radiating Systems – Jordon (PHI)",
            "Antenna Theory & Practice – Rajeswari Chatterjee (New AGE)",
          ],
        },
        {
          paper: 2,
          paper_title: "Digital Telephony",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Introduction, Telecommunication and standards organization, The Analog Network Hierarchy, The Introduction of Digits, Advantages or Digital Voice Networks, Digital Signal Processing, Disadvantages of Digital voice Networks",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Voice Digitization, PAM, PCM, Speech Redundancies, DPCM, Delta Modulation, Adaptive Predictive Coding, Vocoder, Encoder/Decoder Selection Considerations, ITU-T Coding Standards",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Digital Switching, Switching Functions, Space Division Switching, Time Division Switching, Two-dimensional switching, Digital cross-connect Systems, Digital switching in an Analog Environment.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Traffic Analysis, Traffic Characterization, Loss Systems, Network Blocking Probabilities, Delay Systems.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Network Synchronization, Control and Management: Timing, Timing inaccuracies, Network Synchronization, Network Control, Network Management, Routing Control, Flow Control.",
              ],
            },
          ],
          references: [
            "Digital Technology by John C. Bellamy, Wiley.",
            "Telecommunication Switching Systems and Networks by T. Vishwanathan, PHI",
          ],
        },
        {
          paper: 3,
          paper_title: "Fiber Optic Communication I",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Basics of optical fiber communication",
              unit_description: [
                "Basic block diagram of an optical fiber communication. Advantages of optical fiber communication, Classifications of optical fiber. Propagation of light through multi- mode step index, multi-mode graded index fibers and single mode optical fibers. Numerical aperture for meridional and skew rays. Number of guided modes. Ray theory and mode theory analysis.",
              ],
            },
            {
              unit: 2,
              unit_title: "Transmission characteristics of optical fibers",
              unit_description: [
                "Degradation of optical signal due to attenuation in the fiber. Different types of losses in the fiber. Pulse broadening due to dispersion. Different types of dispersion. Intermodal and intramodal dispersion. Material and waveguide dispersion, overall dispersion",
              ],
            },
            {
              unit: 3,
              unit_title: "Optical Sources",
              unit_description: [
                "Essential Requirements for lasing action, Direct & indirect energy gap materials, Homo and hetero junctions. Basic principles of semiconductor lasers and light emitting diodes. Different types of injection laser diodes & light emitting diodes and their characteristics. Rate equations, Internal quantum efficiency and external power efficiency.",
              ],
            },
            {
              unit: 4,
              unit_title: "Photo-detectors",
              unit_description: [
                "Basic principles, types of photo-detectors-PIN diode and Avalanche photo diodes, responsivity, quantum efficiency, Speed of photo diodes, Noises in detectors, signal to noise ratio, equivalent diagrams.",
              ],
            },
            {
              unit: 5,
              unit_title: "Link analysis",
              unit_description: [
                "Receiver structures, performance of receivers, Power budget and rise time budget equations. Splice and joint losses, mis-alignment losses. Source to fiber and fiber to detector coupling losses, Selection of wavelength, source and detectors.",
              ],
            },
          ],
          references: [],
        },
        {
          paper: 4,
          paper_title: "Computer Networks",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "History of data communication, Advantages and Disadvantages of a Computer Networks; Classification of Computer Networks; Active and Passive Components used in a network design; Importance of channel bandwidth and system noise, Protocols and their role in computer network",
              ],
            },
            {
              unit: 2,
              unit_title: "Data Transmission Basics",
              unit_description: [
                "Error detection and correction methods, Data compression, Protocol basic, Circuit, Message, Packet and Cell switching, Connection oriented and connectionless services, ISO-OSI model, TCP/IP model, UDP",
              ],
            },
            {
              unit: 3,
              unit_title: "Computer Network Basics",
              unit_description: [
                "Physical layer communication, Media, Signals and Bits, Time division and frequency division multiplexing, Encoding, Modulation, Delay, Bandwidth and noise; Comparative Study of various media used in Connection oriented networks and connection-less networks; Network and packet communication, Network topology, LAN wired/wireless, Ethernet, CSMA/CD, CSMA/ CA, Token passing rings, FDDI, Wireless networks",
              ],
            },
            {
              unit: 4,
              unit_title: "Network Devices",
              unit_description: [
                "Network Interconnections with repeaters, Switches, Bridges, Routers and gateways, DSU/CSU, XDSL and cable modems, Store and forward, Next-Hop forwarding, Wide Area Network, Router & Routing Techniques",
              ],
            },
            {
              unit: 5,
              unit_title: "Inter-networking",
              unit_description: [
                "IP addressing, Subnetting, CIDR, Address binding with ARP, Datagram encapsulation and fragmentation, Adaptive retransmission, ICMP and error handling; Network applications, Client-Server concepts and application, DNS, HTTP, Email and web browsing, Broadband Multi-Service networks, FDDI- II, Cell based networks, ATM LANs, ISDN; Introduction to IPV6",
              ],
            },
          ],
          references: [
            "Computer Networks :Tanenbum, A.S",
            "Data and Computer communication :Stallings, William",
            "Inter Networking With TCP/IP Vol I, II,III: Comer, D.E. and Stevens D.L.",
            "Computer Network and Distributed Data Processing : Martin.J.",
            "Local Networks : Stalling, William",
            "Data Communication and Networking : Forouzan, B.A",
            "Tele Communication Switching Systems and Networks: Viswanathan Thiagrajan",
          ],
        },
        {
          paper: 5,
          paper_title: "Communication Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Amplitude Modulation and Detection",
              unit_description: [
                "AM equation analysis and its treatment with number of modulating signals, Square law modulator, Linear modulator schemes and circuits, DSB-SC modulators, Quadrature modulation, SSB-SC modulator, AM square law detector, Envelope detection, DSB-SC & SSB-SC detection, VSB modulation",
              ],
            },
            {
              unit: 2,
              unit_title: "Angle Modulation and Detection",
              unit_description: [
                "Frequency and Phase modulation equations and their spectrum; Narrow band modulation and wide band modulation and relationship with AM,FM, and PM, Direct methods of FM generation, Indirect Armstrong method of FM generation, FM slope Amplitude type of detection, Phase discriminator and Ratio detector, Pre-emphasis and De-emphasis, Comparison of AM and FM, Phase locked loops",
              ],
            },
            {
              unit: 3,
              unit_title: "AM, FM Transmitters and Receivers",
              unit_description: [
                "Blocks diagrams of standard AM and FM transmitters, Armstrong FM transmitter, AM and FM Radio receivers, Sensitivity, Selectivity, Fidelity, Stability, etc. TRF, receiver, Super heterodyne radio receiver- Block diagram and Principle of operation, Problems associated with it’s successful operation, their solutions and analysis (selection of intermediate frequency and Local oscillator frequency, Tracking, Rejection of image signal and noise, AGC and AFC)",
              ],
            },
            {
              unit: 4,
              unit_title: "SNR Considerations in AM and FM systems",
              unit_description: [
                "SNR calculations in DSB, DSB-SC and SSB AM receivers, SNR in FM receivers, Comparison of SNR.",
              ],
            },
            {
              unit: 5,
              unit_title: "Pulse Modulations",
              unit_description: [
                "Sampling theorem for LP and BP signals, Channel BW and for PAM signal, Natural and Flat-top sampling, Signal recovery, Pulse time modulations.",
              ],
            },
          ],
          references: [
            "Principles of Communication Systems Taub and Schilling",
            "Communication Systems Simon Haykin",
            "Modern Analog & Digital Communications B.P. Lathi",
            "Analog & Digital Communications Samaugan",
            "Electronic Communication System George Kennedy",
          ],
        },
        {
          paper: 6,
          paper_title: "Digital Communication I",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Basic Information Theory & Channel Capacity",
              unit_description: [
                "Mathematical models for information sources; Discrete memory-less source; Logarithmic measure of information; Entropy as a measure of Uncertainty; Interrelations between entropies; Conditional entropies; Average Mutual information, Properties of Mutual information; Binary Symmetric Channels, Discrete memory-less channels, Shannon- Hartley capacity theorem, Shannon’s limit; Capacity of a channel of infinite Bandwidth; Equivocation and effective transmission rate.",
              ],
            },
            {
              unit: 2,
              unit_title: "Source Coding",
              unit_description: [
                "Coding for discrete memory-less source; Fixed length code words; Source coding theorem; Variable length code-words; Unique decodability and prefix conditions; Kraft inequality; Significance of prefix condition; Shannon-Fano coding; Huffmann Coding Technique",
              ],
            },
            {
              unit: 3,
              unit_title: "Channel Coding: Linear block codes-",
              unit_description: [
                "Introduction to Galois field algebra; Linear block Codes- the Generator matrix & Parity check matrix; Construction of standard array; Syndrome calculation; Hamming weight and Hamming distance; Error correcting and detecting capability of linear codes; Hamming codes; Hadamard codes",
                "Definition and algebraic structure of cyclic codes, Binary cycle properties; Encoding in Systematic forms; Circuits for dividing polynomials; Systematic encoding with an (n-k) stage shift register; Syndrome calculation and error detection with an (n-k) stage shift register",
              ],
            },
            {
              unit: 4,
              unit_title: "Channel Coding: Convolutional Codes-",
              unit_description: [
                "Convolutional encoding; Representation of convolutional Encodes; The state diagram; The tree diagram; The trellis diagram; Optimum decoding of the Convolutional codes- The Viterbi algorithm, Sequential decoding; Comparison and Limitations of Viterbi and Sequential decoding; Distance properties of convolutional codes; Error correcting capability of convolutional codes.",
              ],
            },
            {
              unit: 5,
              unit_title: "Pulse Code Modulation",
              unit_description: [
                "Basic elements of a PCM System, Quantization Electrical representation of binary digits, Companding, Differential PCM, Delta Modulation, Adaptive delta modulation, Comparison of ADM & DM",
              ],
            },
          ],
          references: [
            "Modern Digital Communication System: B.Sklar (Addition Wesley)",
            "Principle of Digital Comm: J. Das, S.K. Mullick, P.K. Chatterjee (Wiley)",
            "Digital Communication: John G. Proakis (TMH)",
            "An Introduction to Error Correcting Codes : S. Lin (McGraw Hill)",
            "Digital Communication : S. Haykin (Wiley)",
            "Digital Communication : Fundamentals & Applications : B. Sklar (Pearson)",
          ],
        },
      ],
    },
    {
      semester: 6,
      papers: [
        {
          paper: 1,
          paper_title: "Microelectronics & VLSI Design",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Hybrid & Monolithic Integrated Circuits",
              unit_description: [
                "Outlines and properties of substrates, Design and construction of thin film based resistors, Capacitors, Inductors, Thick film elements hybrid IC layout, Monolithic ICs",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Bipolar, MOS and BiCMOS I.C. Design Technology - Basic Processes in Integrated Circuit Fabrication",
              unit_description: [
                "Solid state diffusion, Oxidation, Photolithography, Etching, Epitaxial growth, Ion implantation, Chemical vapour deposition etc..",
              ],
            },
            {
              unit: 3,
              unit_title: "Components & Design",
              unit_description: [
                "Fundamentals characteristics, Substrates, Passive components, Resistors, Capacitors, Distributed RC networks, Active components, Integrated diodes, Schottky barrier devices, BJT, Integrated field effect transistor, Stages in monolithic IC design, Construction and design of diodes, Fabrication",
              ],
            },
            {
              unit: 4,
              unit_title: "MOS Integrated Circuit Fabrication",
              unit_description: [
                "Active devices in MOS integrated circuits, Passive components in MOS technology, Introduction to BiCMOS technology",
              ],
            },
            {
              unit: 5,
              unit_title: "Digital & Analog ICs",
              unit_description: [
                "Fabrication of Logic elements, DTL, TTL, ECL, OPAMP, RAM, ROM",
              ],
            },
          ],
          references: [
            "VLSI Technology : S M Sze (McGraw Hill)",
            "VLSI Design: A. Mukherjee (PHI)",
            "VLSI Fabrication Principles: S.K. Gandhi (Wiley)",
            "Micro Electronic Processing: An Introduction to the Manufacture of Integrated Circuits: W.S.Ruska (McGraw Hill)",
            "Microelectronics: Jacob Millman",
          ],
        },
        {
          paper: 2,
          paper_title: "Electronic Materials",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Semiconducting Materials",
              unit_description: [
                "General properties of Semiconductors & their classifications; Hall effect; Photovoltaic effect; Photoluminescence; Cathode luminescence & Electroluminescence processes and materials; Thermistors and their uses.",
              ],
            },
            {
              unit: 2,
              unit_title: "Dielectric Materials",
              unit_description: [
                "Dielectric constant and Polarization; Dielectric losses; Effect of temperature and frequency, Ferroelectric materials and their classifications, Piezo-electrics, Ceramics and their uses",
              ],
            },
            {
              unit: 3,
              unit_title: "Magnetic Materials",
              unit_description: [
                "Classification and elementary properties; Ferrites, soft and hard magnetic materials and their uses, Magnetic memory.",
              ],
            },
            {
              unit: 4,
              unit_title: "Superconductors",
              unit_description: [
                "Classification and general properties; High temperature superconductors and their uses. Josephson effect",
              ],
            },
            {
              unit: 5,
              unit_title: "Nanomaterials",
              unit_description: [
                "Basic ideas of nanomaterials and their synthesis, Electrical, optical and mechanical properties; Carbon nano tubes and nanophosphors.",
              ],
            },
          ],
          references: [
            "Materials Science & Engineering : Raghvan",
            "Electrical Engineering Materials : K.M. Conpha",
            "Solid State Physics : S.G.Prakash",
          ],
        },
        {
          paper: 3,
          paper_title: "Fiber Optic Communication II",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Advanced Fiber-0ptic Devices",
              unit_description: [
                "Advanced lasers and advanced fibers, birefringence and polarization maintaining fibers, Special types of fibers, fibers. Optical Modulators: Types and principles of optical modulation techniques, Modulation bandwidth and limitations, internal and external modulation techniques",
              ],
            },
            {
              unit: 2,
              unit_title: "Optical Fiber Measurements",
              unit_description: [
                "Attenuation measurement, Dispersion measurement, Index profile measurement, Cut-off wavelength measurement, Numerical aperture measurement, OTDR",
              ],
            },
            {
              unit: 3,
              unit_title: "Optical Fiber Couplers",
              unit_description: [
                "Fiber couplers- three port & four port couplers, Star couplers, their characteristics and description, Wavelength division multiplexing and couplers for it, Tunable sources, Fiber optic fixed wavelength and tunable filters",
              ],
            },
            {
              unit: 4,
              unit_title: "Coherent Optical Fiber Systems",
              unit_description: [
                "Basic system configuration, Practical constraints, Modulation formats, Detection Principle and demodulation schemes, Receiver sensitivities and their comparison, Dual-detectors receivers",
              ],
            },
            {
              unit: 5,
              unit_title: "Applications",
              unit_description: [
                "Fiber optic sensors- Classification of fiber sensors, Intrinsic and extrinsic fiber sensors, Microbend sensors; Application of sensors;, Applications of optical fiber in defence, medical and industries",
              ],
            },
          ],
          references: [
            "Optical Fiber Communication: Gerd Keiser",
            "Optical Fiber Communication: John M. Senior",
            "Handbook of Fiber Optics: Chal Yen",
            "Optical Fiber Telecommunication IIIA: Ivon P. Kaminow & Kock",
          ],
        },
        {
          paper: 4,
          paper_title: "Power Electronics",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Power Devices",
              unit_description: [
                "Basic Characteristics and methods of specifications for various power electronics devices-diodes, transistors, MOSFET, IGBT, Thyristor and GTO; Thermal considerations, Second break down in power devices, dv/dt and di/dt protection circuits, Series and parallel operation, relative merits and demerits, Power devices for converter and inverter applications; Control signal requirement of various power electronics devices; Use of pulse transformers, Optical couplers",
              ],
            },
            {
              unit: 2,
              unit_title: "Controlled Rectifiers",
              unit_description: [
                "Principle of phase controlled converter operation; Single phase half wave, Full wave and semi-converters; Three phase half wave , Full wave and semi-converters and inverters; Dual converters, Power factor improvement; Symmetrical angle control, Pulse width modulation control, Effect of load and source inductance; Design of converter circuits, Regulated DC power supplies.",
              ],
            },
            {
              unit: 3,
              unit_title: "Inverter Circuits",
              unit_description: [
                "Principles of operation of voltage source inverter; Single phase and three phase inverters; Voltage control using PWM technique, Forced commutated thyristor inverters; Current source inverters, Inverter circuit design",
              ],
            },
            {
              unit: 4,
              unit_title: "Switched Mode Power Supplies",
              unit_description: [
                "Buck-Boost regulators, PWM Techniques for voltage and current regulations",
              ],
            },
            {
              unit: 5,
              unit_title: "Power Protection Circuits and Earthing",
              unit_description: [
                "Over current protection; Instantaneous and IDMT relays and their solid state versions, Necessity of earthing for prevention of noise and shock hazards",
              ],
            },
          ],
          references: [
            "Power Electronics : PC Sen (TMH)",
            "Power System Protection & Switch gear: Bardri Ram, D.N. Vishwakarma (TMH)",
          ],
        },
        {
          paper: 5,
          paper_title: "Digital Signal Processing",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Discrete Time Signal and Systems",
              unit_description: [
                "Signal and system classifications, Time and frequency domain representation, Analysis of discrete time linear time invariant system, Discrete time system described by difference equation, Stability and Causality, Frequency domain & time domain stability criteria, frequency response of LTI system",
              ],
            },
            {
              unit: 2,
              unit_title: "Z-Transform & Discrete Fourier Transform (DFT)",
              unit_description: [
                "Z – Transform and its properties, Z – Transform of simple functions, Inverse Z – Transform, Analysis of LTI system in Z – domain. Convergence of DFT, DFT of periodic signals; properties of DFT; DFT & convolution; Application of DFT to LTI system analysis, FFT algorithms and their applications",
              ],
            },
            {
              unit: 3,
              unit_title: "Realization of Digital Systems",
              unit_description: [
                "Recursive and non recursive structure of digital system, Direct, cascaded, parallel, ladder and lattice realization",
              ],
            },
            {
              unit: 4,
              unit_title: "Design of Digital Filters (Unit 4 & 5)",
              unit_description: [
                "IIR Digital Filter- IIR filter designs by approximation of derivatives, impulse invariant and bilinear transformation methods, Frequency transformation",
                "FIR digital Filter- Design of linear phase FIR filters by using windows and frequency sampling methods",
                "Finite Word Length Effects- Quantization errors and their effects on the performance of digital signal processors",
              ],
            },
          ],
          references: [
            "Digital Signal Processing: J.G. Proatais (PHI)",
            "Discrete Time Signal Processing: Openheim & Shafer (PHI)",
            "Signal Processing & Linear Systems: B.P. Lathi (Oxford)",
            "Principles and Application of Signal Processing: Robiner Gold (PHI)",
          ],
        },
        {
          paper: 6,
          paper_title: "Digital Communication II",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Multiplexing of PCM signals",
              unit_description: [
                "Multiplexing of PCM signals, Digital Hierarchy (American & European), Pulse stuffing, Power density of digital data, Ortho-normal functions, Representation of signals in terms of ortho-normal functions Gram Schmidt procedure",
              ],
            },
            {
              unit: 2,
              unit_title: "Digital Modulation Schemes",
              unit_description: [
                "BPSK, OOK, BFSK, DPSK, Quadrature phase shift keying, CPFSK and minimum shift keying, M-ary ASK, PSK and FSK schemes, QAM scheme",
              ],
            },
            {
              unit: 3,
              unit_title: "Binary Decision Criteria",
              unit_description: [
                "Maximum likelihood, Neymann Pearson, Probability of error (MAP-criterian), Bayes risk (cost) and Min-Max decision criterions",
              ],
            },
            {
              unit: 4,
              unit_title:
                "Demodulation in Presence of Additive White Gaussian Noise (Unit 4 & 5)",
              unit_description: [
                "Different representation of narrow band signals and systems A baseband receiver, optimum filter, matched filter & cross-correlator receivers, , Spectrum of digital modulated signals, Calculation of probability of error for binary & M-ary signals, digital signaling schemes for coherent and non-coherent demodulation. Comparison of different modulation schemes, Symbol synchronization and carrier recovery circuits",
              ],
            },
          ],
          references: [
            "Principles of Communication: Taub & Schilling (TMH)",
            "Digital Communication : J.G. Proakis (TMH)",
            "Digital Communication : S.Haykin (Wiley)",
          ],
        },
      ],
    },
    {
      semester: 7,
      papers: [
        {
          paper: 1,
          paper_title: "Microwave Technology",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Microwave Sources (Unit 1 & 2)",
              unit_description: [
                "Microwave Tubes: High frequency effects in vacuum tubes, Velocity modulation; Two and multi-cavity klystrons; Reflex Klystrons, Magnetrons Traveling wave tubes Backward wave oscillator",
                "Microwave Semiconductor Devices: Microwave transistor, Microwave oscillators using tunnel diode, Gunn diodes, IMPATT and TRAPATT, Parametric amplifiers masers, Microwave integrated circuits",
              ],
            },
            {
              unit: 3,
              unit_title: "Microwave Passive Devices",
              unit_description: [
                "Microwave transmission structures, Coaxial line, Strip-line, micro-strip and slotted line, Design procedures and design curves, Impedance transformation and matching",
                "Terminations: Matched loads, Transition units, Attenuation, Phase shifters; Directional couplers, Hybrid junction, Microwave propagation in ferrites, Isolators and circulators",
              ],
            },
            {
              unit: 4,
              unit_title: "Microwave Circuits",
              unit_description: [
                "Equivalent voltage and currents, Importance of waveguide elements and circuits, N-port circuits, Scattering and Transmission matrices, Microwave cavities, Rectangular and cylindrical cavity resonators equivalent circuit Q and method of coupling resonators, Aperture coupled resonator, Co-axial resonator, Simple microwave filters",
              ],
            },
            {
              unit: 5,
              unit_title: "Microwave Measurements",
              unit_description: [
                "Components of a typical test bench, Measurement of VSWR and guide wavelength, Measurement of impedance using slotted line and network analyzer, Measurement of power bolometric and calorimetric power meters, Measurement of frequency- wavemeter and heterodyne frequency meter, Measurement of scattering parameters using reflectometer and network analyzer, Spectrum analysis at UHF and microwave frequencies using spectrum analyzers",
              ],
            },
          ],
          references: [
            " Microwave Devices & Circuits: Samuel Y. Liao (PHI)",
            "Microwave Theory & Techniques: H J Reich (East West Press Ltd.)",
            "Microwave Devices: J T Coleman (Reston)",
            "Microwave Engineering: D.M Pozar",
            "Elements of Microwave Engineering: R Chatterjee (East West Press Ltd.)",
          ],
        },
        {
          paper: 2,
          paper_title: "Mobile Communication",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Introduction, Applications, History, A Simplified Reference Model, Wireless Transmission, Frequency For Radio Transmission, Signals, Antennas, Signal Propagation, Multiplexing, Modulation, Spread Spectrum.",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Medium Access Control, Hidden And Exposed Terminals, Near And Far Terminals, SDMA, FDMA, TDMA, CDMA, Elements Of Cellular Radio System Design, Introduction To Cellular Mobile Systems, Why Cellular Mobile Systems, A Basic Cellular System, Elements Of Cellular Radio System Design, Concept Of Frequency Reuse Channels, Hands Off, Cell Splitting",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Mobile Network Layer, Mobile IP, IPv6, Dynamic Host Configuration Protocol, Mobile Ad-Hoc Networks, Routing, Destination Sequence Distance Vector, Dynamic Source Routing",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Mobile Transport Layer, Traditional TCP, Congestion Control, Slow Start, Fast Retransmit/ Fast Recovery, Implication Of Mobility, Classical TCP Improvements, TCP Over 2.5/ 3G Wireless Networks, Performance Enhancing Proxies.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "GSM, Mobile Services, System Architecture, Radio Interface, Protocols, Localization and Calling, Handover, Security, New Data Services.",
              ],
            },
          ],
          references: [
            "Mobile Cellular Telecommunication: Analog and Digital Systems by W.C.Y Lee, Mc Graw- Hill.",
            "Mobile Communications by Jochen Schiller, Pearson Education.",
          ],
        },
        {
          paper: 3,
          paper_title: "Microcontroller and Microprocessor Interfacing",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Unit 1",
              unit_description: [
                "Princeton and Harvard Architecture, Microcontrollers, Comparison of microprocessors and microcontrollers, Microcontroller survey – microcontrollers of different word length, make and features, selection criteria for microcontroller, 8051 microcontroller hardware – pin diagram and internal architecture, Memory organization",
              ],
            },
            {
              unit: 2,
              unit_title: "Unit 2",
              unit_description: [
                "Special Function Registers, Interrupts, I/O port circuits, interfacing external memory and external device. Instruction set, addressing modes and assembly language programming, simple Programs",
              ],
            },
            {
              unit: 3,
              unit_title: "Unit 3",
              unit_description: [
                "Memory Interfacing with Microprocessor, Memory Organization and interleaving, Interfacing Read-Write memory chips and ROM/EPROM chips, e.g., IC 8155 (Static Ram with I/O Ports and Timer), 8755 (EPROM with I/O Ports) and other commonly used ICs.",
              ],
            },
            {
              unit: 4,
              unit_title: "Unit 4",
              unit_description: [
                "Input –Output Communication. Serial and Parallel communication, Synchronous and Asynchronous Data Transfer, Strobe method, Handshaking. Interrupts, Basic Input-output methods and transfer modes. Polling, daisy chain arrangement, Bus Arbitration, Priority control.",
              ],
            },
            {
              unit: 5,
              unit_title: "Unit 5",
              unit_description: [
                "Functions and study of 8251A (USART), 8255A(Programmable Peripheral Interface), 8257 (DMA Controller), 8259A (Programmable Interrupt Controller)",
              ],
            },
          ],
          references: [
            "Mazidi and Mazidi: The 8051 Microcontroller and Embedded Systems, Pearson Education",
            "D. V. Hall: Microprocessors and Interfacing, TMH.",
            "Ayala Kenneth:The 8051 microcontroller, Third Edition, Cengage Learning",
            "Raj Kamal: Embedded Systems- Architecture, Programming and Design, TMH, New Delhi.",
            "P.K. Ghosh and P. R. Sridhar, 0000 to 8085 Introduction to microprocessor for Engineers and Scientists, PHI, 2/e",
            "C. K. Dwivedi, Solid State circuit design with Microcontrollers.",
          ],
        },
        {
          paper: 4,
          paper_title: "Image Processing",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction",
              unit_description: [
                "Image representation and modeling, 2-D linear system, Luminance, Contrast and Brightness, Color representation, Visibility functions, Monochrome and color vision model.",
              ],
            },
            {
              unit: 2,
              unit_title: "Image Quantization and Image Transforms",
              unit_description: [
                "Sampling theorem, Anti-aliasing, image quantization, Orthogonal and unitary transforms, DFT, Cosine transform, Hadamard transform, Haar transform, KL transform.",
              ],
            },
            {
              unit: 3,
              unit_title: "Image Enhancement",
              unit_description: [
                "Point operation, Histogram modeling, Filtering and spatial operations, Transform operations, Multispectral Image Enhancement",
              ],
            },
            {
              unit: 4,
              unit_title: "Image Restoration",
              unit_description: [
                "Image formation models, Noise models, Inverse and Wiener filtering, Least square filters, Recursive filters, Maximum entropy method, Blind deconvolution, Bayesian method of noise removal, Image reconstruction, Tomography, Radan transform, Back-projection, Reconstruction algorithm, Algebraic method of reconstruction, Fan-beam reconstruction.",
              ],
            },
            {
              unit: 5,
              unit_title: "Data Compression",
              unit_description: [
                "Data compression vs. Bandwidth, Pixel coding, Predictive coding, Transform coding, Coding of two-tone images.",
              ],
            },
          ],
          references: [
            "Fundamentals of Digital Image Processing: Anil K. Jain",
            "Digital Image Processing: R. Chellappa",
            "Image Processing for Scientific Applications: Bernd Jahne",
            "Digital Image Processing: R.C. Gonzalez & R.E. Woods",
            "The Image Processing Handbook: J.C. Russ",
            "Digital Image Processing: W.K. Pratt",
            "Digital Image Restoration: Andrews & Hunt",
          ],
        },
      ],
    },
    {
      semester: 8,
      papers: [
        {
          paper: 1,
          paper_title: "Satellite Communications",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Elements of Satellite Communication",
              unit_description: [
                "Satellite frequency bands, Satellite systems, Transmission and multiplexing, Modulation, Multiple Access, Advantages of digital satellite communication",
              ],
            },
            {
              unit: 2,
              unit_title: "Orbits of Satellites",
              unit_description: [
                "Orbital period and velocity; Effects of orbital inclination, Azimuth and elevation, Coverage angle and slant range, Eclipse, Placement of a satellite in geostationary orbit, Low, medium and polar orbits, Satellite description",
              ],
            },
            {
              unit: 3,
              unit_title: "Satellite Links",
              unit_description: [
                "Earth station Antenna-Antenna gain and pointing less, Effective isotropic radiated power antenna, Gain to noise temperature ratio, G/T measurement, Basic link analysis, Carrier to noise plus interference ration",
              ],
            },
            {
              unit: 4,
              unit_title: "Frequency Division Multiple Access",
              unit_description: [
                "Multiple Access- FDM- FM- FDMA; Single Channel per carrier, FM-FDMA Television, Inter-modulation Products",
              ],
            },
            {
              unit: 5,
              unit_title: "Time Division Multiple Access",
              unit_description: [
                "TDMA Frame Structure, Reference burst, Traffic burst and guard time, TDMA burst structure, Carrier and lock recovery sequences, Unique word, Signalling channel, Traffic data, TDMA frame efficiency, TDMA super frame structure, Frame acquisition and synchronization, Satellite position determination, Single station ranging, Three station ranging, Errors in transmit frame delay, Burst time plan, Control and co-ordination by the reference station TDMA timing, Slip rate in digital terrestrial network, Advanced TDMA satellite systems",
              ],
            },
          ],
          references: [
            "Digital Satellite Communication: Tri. T. Ha (T.M.H.)",
            "Satellite Communication: Pratt (Wiley)",
          ],
        },
        {
          paper: 2,
          paper_title: "Radar Engineering & Navigational Aids",
          common: false,
          units: [
            {
              unit: 1,
              unit_title: "Radar Principles",
              unit_description: [
                "Pulsed Radar- Components of radar set, Basic principles, Classification of radars, Radar frequencies, Derivation and significance of radar range equation, Minimum detectable signal, Limitations of pulse radar, Modulator; Duplexers; Displays, Radar antennas, Noise chutter",
              ],
            },
            {
              unit: 2,
              unit_title: "CW and FM Radar",
              unit_description: [
                "Doppler effect, simple CW radar, FMCW radar, Multiple frequency CW radar, Radio altimeter.",
              ],
            },
            {
              unit: 3,
              unit_title: "MTI and Tracking Radar",
              unit_description: [
                "MTI Radar, Delay lines and cancellers, MTI using range gates and filters, Pulse Doppler radar, Non coherent MTI, MTI from a moving platform.",
                "Tracking with radar, Sequential lobing, Conical scan, Mono pulse radar, Tracking in range and Doppler effect, Electronic scanning radar, Satellite tracking",
              ],
            },
            {
              unit: 4,
              unit_title: "Radar Signal Processing",
              unit_description: [
                "Evolution of radar signal processing, Detection of radar signal in noise, Pulse compression fundamentals, Matched filter pulse compression system, Matched filter receiver, Extraction of information from radar signal",
              ],
            },
            {
              unit: 5,
              unit_title: "Navigational and Surveillance aids",
              unit_description: [
                "Introduction, Types of navigation, Classification of radio navigational aids, Non directional beacon (NBD), VHF Direction Finder, Very High Frequency Omni range, Doppler VOR, Distance Measuring Equipments, Application of DME, Instrument Lending system, Microwave Landing System; Application of Radar.",
              ],
            },
          ],
          references: [
            "Introduction to Radar Systems : M.I. Skolnik (PHI)",
            "Radar Signals : Berkowitz (R.L.Sevies)",
            "Principles of Radar : MIT Staff (Mc Graw Hil)",
          ],
        },
        {
          paper: 3,
          paper_title: "(Elective): Mobile Adhoc Networks (MANET)",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Mobile Ad Hoc Network",
              unit_description: [
                "Introduction, Wireless Networks, Mobile Ad Hoc Network- Definition, History. MANET Applications and Scenarios, Ad Hoc Network Characteristics, Classification of Ad Hoc Networks",
              ],
            },
            {
              unit: 2,
              unit_title: "MAC Layer Protocols for Ad Hoc Wireless Networks",
              unit_description: [
                "Introduction, Important Issues and the Need for Medium Access Control (MAC) Protocols, Classification of MAC Protocols- Contention-Based MAC Protocols, MAC Protocols Using Directional Antennas, Multiple-Channel MAC Protocols, Power-Aware or Energy-Efficient MAC Protocols",
              ],
            },
            {
              unit: 3,
              unit_title: "Routing Protocols for Ad Hoc Wireless Networks",
              unit_description: [
                "Introduction, Design Issues of Routing Protocols for Ad Hoc Networks, Classification of Routing Protocols. Proactive Routing Protocols – Destination-Sequenced Distance Vector (DSDV), Optimized Link State Routing (OLSR) Protocol. Reactive Routing Protocols- Ad Hoc On-Demand Distance Vector (AODV), Dynamic Source Routing (DSR) Protocol. Hybrid Routing Protocols - Zone Routing Protocol (ZRP).",
              ],
            },
            {
              unit: 4,
              unit_title: "Transport Protocols for Ad Hoc Networks",
              unit_description: [
                "Introduction, Transmission Control Protocol’s (TCP’s) Challenges and Design Issues in Ad Hoc Networks, TCP Performance over That of Mobile Ad Hoc Networks (MANETs), Ad Hoc Transport Protocols, Application-Controlled Transport Protocol (ACTP).",
              ],
            },
            {
              unit: 5,
              unit_title: "Mobility Models for Ad Hoc Networks",
              unit_description: [
                "Introduction, Mobility Metrics, Impact of Mobility Models on MANET, Mobility Model Classifications, Random Walk Mobility, Random Way-point Mobility",
              ],
            },
          ],
          references: [
            "Jonathan Loo,Jaime Lloret, and Jesus Hamilton Ortiz, “Mobile Ad Hoc Networks – Current Status and Future Trends ” CRC Press, Taylor & Francis Group 2012.",
            "Subir Kumar Sarkar,T G Basavaraju and C Puttamadappa, “Ad Hoc Wireless Networks-Principles, Protocols and Applications” Auerbach Publications, Taylor & Francis Group, New York London, 2008.",
            "Radhika Ranjan Roy “Handbook of Mobile Ad Hoc Networks for Mobility Models” Spriger 2011",
          ],
        },
        {
          paper: 4,
          paper_title: "(Elective): Embedded Systems",
          common: true,
          units: [
            {
              unit: 1,
              unit_title: "Introduction to Embedded Systems",
              unit_description: [
                "Embedded System Overview,Common Design metrics, General Purpose Processors and Application Specific Processors. Software and hardware combination for making an Embedded System.Concept of various types of memories for implementation of Embedded Systems.",
              ],
            },
            {
              unit: 2,
              unit_title:
                "Selection Criteria of Hardware for Embedded System Design",
              unit_description: [
                "Comparing use of Microprocessor and Microcontroller, PLDs and FPGA for developing an Embedded System. Elementary idea of commonly used microcontroller. Criteria for selection of microcontroller and other interfacing hardware.Architectural block diagram of MCS 51 microcontroller family. Memory organization. Code Memory, Data memory and special function register. Internal circuit and capabilities of various I/O ports pins.",
              ],
            },
            {
              unit: 3,
              unit_title: "Working of microcontrollers",
              unit_description: [
                "Clock cycles, Machine cycle and Instruction cycles and timing diagrams for various essential control signals. Division of Machine cycles in to states and phases",
                "Instruction length and execution time for instructions. Categorization of instruction and various addressing modes. Conditional and unconditional jump instructions.Boolean instructions. Read pin and read latch instructions.SFRs and their purpose. Control of interrupts. Timers, Power status and I/O functions by SFR’s. Addressing of SFR’s. Various modes of Timers and their controls",
              ],
            },
            {
              unit: 4,
              unit_title: "Interfacing",
              unit_description: [
                "Block diagram for Input Output Ports internal Structures and their capabilities for 89C51 and 89C2015 Microcontrollers. Interfacing with external devices. Address for ports and pins. Interfacing with external hardware keys and displays devices. Circuits and criteria for interfacing LEDs,Seven segment display",
              ],
            },
            {
              unit: 5,
              unit_title: "Programming",
              unit_description: [
                "Instruction format for instruction of MCS-51 family microcontrollers. Program and Machine control. Boolean variable manipulation. Data transfer. Arithmetic and Logic Operations. Interrupts and data polling for multiple subroutines in a program. Look up tables and use of data stored in code memory",
              ],
            },
          ],
          references: [
            "Mazidi and Mazidi: The 8051 Microcontroller and Embedded Systems.",
            "C. K. Dwivedi, Solid State circuit design with Microcontrollers.",
            "Ayala Kenneth:The 8051 microcontrollerArcitecture, Programming and Applications.",
            "Raj Kamal: Embedded Systems- Architecture, Programming and Design.",
            "Raj Kamal: Microcontrollers",
          ],
        },
      ],
    },
  ];

  const stream = props.userSyllabus;

  const componentRef = useRef();

  return (
    <div className="Syllabus">

      <ReactToPrint
        trigger={() => <Button className="download-button">Download Syllabus</Button>}
        content={() => componentRef.current}
      />


      <Scrollbars
        className="Scollbars"
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={310}
        autoHeightMin={300}
        autoHeightMax={1080}
        thumbMinSize={30}
        universal={true}
        style={{ width: `85%`, height: 1010 }}
      >
        {stream &&
          cseSyllabus.map((syllabus) => {
            if (syllabus.semester === props.semester) {
              return (
                <div className="semester-content" ref={componentRef} >
                  <div className="syllabus-heading1"> Semester : {syllabus.semester}</div>
                  <div className="print-first-page">
                    <div className="print-syllabus-head"> Syllabus : B.Tech </div>
                    <div className="print-btech-sem"> Semester &nbsp;{syllabus.semester} &nbsp; &nbsp;: &nbsp; {stream == true ? "CSE" : "ECE"} </div>
                    <img src={JkoscLogo} alt="JKOSC" className="print-jkosc-logo" />
                    <div className="print-jkosc-head"> JK Open Source Community </div>
                    <div className="print-jkosc-about"> A community of developers run by the students of </div>
                    <div className="print-jk-name"> JK Institute of Applied Physics and Technology </div>
                    <div className="print-jk-loaction"> University of Allahabad, Prayagraj </div>
                    <div className="contact-jkosc-link"> Follow us On : </div>
                    <div className="github-jkosc-link"> https://github.com/JK-Open-Source-Community/JKOSC </div>
                    <div className="web-jkosc-link"> https://jkopenwork.web.app </div>
                  </div>
                  <div className="firstPage-break">
                    <div className="pagebreak" />
                  </div>
                  {syllabus.papers.map((getPaper, index) => {
                    return (
                      <div className="papers-content">
                        <div className="about-Paper">
                          <div className="syllabus-heading2">
                            Paper: {getPaper.paper} &nbsp;: &nbsp;
                            {getPaper.paper_title}
                          </div>
                          {getPaper.common ? (
                            <div className="syllabus-heading4">(Common to both CSE & ECE)</div>
                          ) : (
                            <div className="syllabus-heading4">(Only for CSE)</div>
                          )}
                        </div>
                        <div className="syllabus-content-box">
                          {getPaper.units.map((getUnit) => {
                            return (
                              <div className="units-content">
                                <div className="syllabus-heading3">
                                  {getUnit.unit}:&nbsp;&nbsp; {getUnit.unit_title}
                                </div>
                                {getUnit.unit_description.map(
                                  (description) => {
                                    return (
                                      <div className="syllabus-heading5">
                                        <p> {description} </p>
                                      </div>
                                    );
                                  }
                                )}
                                {/* <p>{getUnit.unit_description}</p> */}
                              </div>
                            );
                          })}
                        </div>
                        <div className="reference-heading">References:</div>
                        {getPaper.references.map((getreference, index) => {
                          return (
                            <div className="reference-content">
                              {index + 1} &nbsp;&nbsp;&nbsp;&nbsp;{getreference}
                            </div>
                          );
                        })}
                        {syllabus.papers.length !== (index + 1) && (
                          <div className="pagebreak" />
                        )}

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
              return (
                <div className="semester-content" ref={componentRef}>
                  <div className="syllabus-heading1"> Semester : {syllabus.semester}</div>
                  <div className="print-first-page">
                    <div className="print-syllabus-head"> Syllabus : B.Tech </div>
                    <div className="print-btech-sem"> Semester &nbsp;{syllabus.semester} &nbsp; &nbsp;: &nbsp; {stream == true ? "CSE" : "ECE"} </div>
                    <img src={JkoscLogo} alt="JKOSC" className="print-jkosc-logo" />
                    <div className="print-jkosc-head"> JK Open Source Community </div>
                    <div className="print-jkosc-about"> A community of developers run by the students of </div>
                    <div className="print-jk-name"> JK Institute of Applied Physics and Technology </div>
                    <div className="print-jk-loaction"> University of Allahabad, Prayagraj </div>
                    <div className="contact-jkosc-link"> Follow us On : </div>
                    <div className="github-jkosc-link"> https://github.com/JK-Open-Source-Community/JKOSC </div>
                    <div className="web-jkosc-link"> https://jkopenwork.web.app </div>
                  </div>
                  <div className="firstPage-break">
                    <div className="pagebreak" />
                  </div>
                  {syllabus.papers.map((getPaper, index) => {
                    return (
                      <div className="papers-content">
                        <div className="syllabus-heading2">
                            Paper: {getPaper.paper} &nbsp;: &nbsp;
                            {getPaper.paper_title}
                          </div>
                        {getPaper.common ? (
                          <div className="syllabus-heading4">(Common to both CSE & ECE)</div>
                        ) : (
                          <div className="syllabus-heading4">(Only for ECE)</div>
                        )}
                        {getPaper.units.map((getUnit, index) => {
                          return (
                            <div className="units-content">
                              <div className="syllabus-heading3">
                                {getUnit.unit}:&nbsp;&nbsp; {getUnit.unit_title}
                              </div>
                              {getUnit.unit_description.map(
                                (description, index) => {
                                  return (
                                    <div className="syllabus-heading5">
                                      <p> {description} </p>
                                    </div>
                                  );
                                }
                              )}
                              {/* <p>{getUnit.unit_description}</p> */}
                            </div>
                          );
                        })}
                        <div className="reference-heading">References:</div>
                        {getPaper.references.map((getreference, index) => {
                          return (
                            <div className="reference-content">
                              {index + 1} &nbsp;&nbsp;&nbsp;&nbsp;{getreference}
                            </div>
                          );
                        })}
                        {syllabus.papers.length !== (index + 1) && (
                          <div className="pagebreak" />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
      </Scrollbars>
    </div>
  );
};

export default Syllabus;
