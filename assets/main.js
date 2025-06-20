document.addEventListener('DOMContentLoaded', function () {
  // --- Course Data Structure ---
  const courseData = {
    introductory: [
      {
        title: 'Course 1',
        description: 'Fundamental concepts and tools in homological algebra.',
        subCourses: [
          {
            title: 'An introduction to the Basic Homological Algebra',
            duration: '2 hours',
            lecturer: 'Bernhard Keller',
            abstract: `After a reminder on the basic language of categories and functors, we will introduce the notions of projectivity and 
injectivity for modules over (not necessarily commutative) rings. We will then discuss the construction and properties of 
projective and injective resolutions. We will use these to define derived functors and in particular the functors Tor and 
Ext. We will illustrate the notions and constructions using examples from the representation theory of finite groups and 
of path algebras of quivers.`,
          },
          {
            title: 'An introduction to Homological algebra and its dimension',
            duration: '2 hours',
            lecturer: 'Sujatha Ramdorai',
            abstract: `Building on the introductory  lectures in Homological Algebra, we will visit  the properties of projective 
dimension, injective dimension, global dimension  and Krull dimension of commutative Noetherian rings. We will state 
the Auslander-Buchsbaum theorem for regular local rings and give examples.`,
          },
          {
            title: 'An introduction to Tate-homology and cohomology of Modules',
            duration: '1 hour',
            lecturer: 'Umamaheswaran Arunachalam',
            abstract: ` Introduction of Tate-homology, stable homology, unbounded homology and cohomology of modules with some 
standard theorems.`,
          },
        ],
      },
      {
        title: 'Course 2',
        description: 'Key ideas in noncommutative algebra for beginners.',
        subCourses: [
          {
            title: 'Surface combinatorics for categories of modules. ',
            duration: '2 hours',
            lecturer: 'Karin Baur',
            abstract: `Surface combinatorics have been instrumental in describing algebraic structures. In these lectures, I will 
introduce this, starting with an oriented surface with boundary and curves between connecting points on the boundary 
or in the interior. With these curves, we can divide the surface into pieces which are often polygons - called tiles. The 
result is called a dissection or tiling. Any such subdivision gives rise to an oriented graph in the surface, a so-called quiver, 
and also to relations among the paths in the quiver. `,
          },
        ],
      },
      {
        title: 'Course 3',
        description: 'Essential number theory concepts for all.',
        subCourses: [
          {
            title: 'Introduction to Leavitt path algebras',
            duration: '2 hours',
            lecturer: 'K. Ashish Srivastava',
            abstract: `We will introduce Leavitt path algebras and discuss the motivation behind their study. We will characterize 
basic ring theoretic properties of Leavitt path algebras and study their graded structure. We will then discuss (graded) 
ideals and the multiplicative ideal theory of Leavitt path algebras.`,
          },
        ],
      },
      {
        title: 'Course 4',
        description: 'Introduction to modules and their properties.',
        subCourses: [
          {
            title: 'Commutative algebra inspired by modularity lifting ',
            duration: '2 hours',
            lecturer: 'Srikanth Iyengar',
            abstract: `Andrew Wiles, in the course of his proof of the modularity of elliptic curves, discovered a numerical criterion 
for a map of noetherian commutative local rings over a fixed discrete valuation ring, and of relative dimension zero, to be 
an isomorphism of complete intersections.  The criterion is in terms of the lengths of certain congruence modules and 
cotangent modules,  attached to an augmentation of a local ring to the discrete valuation. Diamond generalized this result 
to a numerical criteria for a module over local ring to be free, again involving suitable congruence modules and cotangent 
modules.`,
          },
        ],
      },
      {
        title: 'Course 5',
        description: 'How homological methods are used in mathematics.',
        subCourses: [
          {
            title: 'Special values of Modular L-functions; integral and half-integral',
            duration: '2 hours',
            lecturer: 'Sanoli Gun',
            abstract: `We shall discuss special values as well growth of modular L-functions, both in the integral and half-integral set 
up.`,
          },
        ],
      },
    ],
    advanced: [
      {
        title: 'Course 1',
        description: 'How homological methods are used in mathematics.',
        subCourses: [
          {
            title: ' Introduction to the Basic Homological Algebra',
            duration: '1 hour',
            lecturer: 'Bernhard Keller',
            abstract: `We will consider equivalences between module categories and explain Morita theory. We will introduce the 
homotopy category and the derived category of a category of modules. We will illustrate these constructions using 
modules over path algebras of quivers. We will then give examples of equivalences between derived categories not 
coming from equivalences between module categories. We will present Rickard's theorem, which yields a general 
framework for the study of such equivalences which is analogous to Morita theory. `,
          },
          {
            title: ' Introduction to the Basic Homological Algebra',
            duration: '1 hour',
            lecturer: 'Umamaheswaran Arunachalam',
            abstract: `In the continuation of the basic level course, we study the Tate homology, stable homology and unbounded 
homology and also cohomology of modules. Further, we study the Tate-Hochschild (singular) homology and cohomology 
for general Noetherian algebras and for Gorenstein algebras.`,
          },
        ],
      },
      {
        title: 'Course 2',
        description: 'Geometry in the noncommutative setting.',
        subCourses: [
          {
            title: 'Surface combinatorics for categories of modules.',
            duration: '2 hours',
            lecturer: 'Karin Baur',
            abstract: `In these lectures, we explain how surface dissections define (gentle) algebras, we will discuss the module 
categories for these algebras and show geometric properties related to algebraic properties: curves in the surface 
correspond to modules for the algebra. Moves like rotations around a vertex or inside the surface correspond to 
morphisms between objects or to the so-called Auslander-Reiten translation in the module category.`,
          },
        ],
      },
      {
        title: 'Course 3',
        description: 'Deep results and techniques in number theory.',
        subCourses: [
          {
            title: 'Introduction to Leavitt path algebras ',
            duration: '2 hours',
            lecturer: 'K. Ashish Srivatsva',
            abstract: `We will discuss the construction of graded automorphisms of Leavitt path algebras and as an application study Zhang 
twist of Leavitt path algebras. We will then discuss irreducible representations of Leavitt path algebras and see how twist 
helps us construct new classes of irreducible representations.`,
          },
        ],
      },
      {
        title: 'Course 4',
        description: 'Exploring open problems and conjectures.',
        subCourses: [
          {
            title: 'Commutative algebra inspired by modularity lifting',
            duration: '2 hours',
            lecturer: 'Srikanth Iyengar',
            abstract: `The goal of my lecture series is to present from the Introductory course results, and their extensions that were 
established in recent work by Chandrashekhar Khare and Jeff Manning. While these have applications in number theory, I 
will focus mostly on the commutative algebra aspects, and cover  the necessary background from differential graded 
homological algebra that goes into the proofs. Prerequisites are a  knowledge of commutative algebra to the level of, say, 
Atiyah and Macdonald, and basic homological algebra.`,
          },
        ],
      },
      {
        title: 'Course 5',
        description: 'Current research directions and open questions.',
        subCourses: [
          {
            title: 'Special values of Modular L-functions; integral and half-integral ',
            duration: '2 hours',
            lecturer: 'Sanoli Gun',
            abstract: `We will discuss aspects of cohomology theory relevant to special values of modular L-functions both in the integral and 
half-integral set up, especially at points inside the critical strip.`,
          },
          {
            title: 'Iwasawa Theory with Homological algebra and its arithmetic',
            duration: '2 hours',
            lecturer: 'Sujatha Ramdorai',
            abstract: `We will  define Auslander regular local domains for Non-commutative left and right Noetherian domains, We will then 
consider Iwasawa algebras which are examples of Auslander regular local domains, both in the commutative and 
non-commutative setting and indicate how they arise naturally in Algebraic Number Theory. We will then study the 
analogue of the Auslander-Buchsbaum theorem in this setting.`,
          },
        ],
      },
    ],
  };

  // --- Rendering Logic ---
  function renderCourses(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    courseData[category].forEach((course, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h4 class="card-title">${course.title}</h4>
        <p class="card-text mb-2">${course.description}</p>
        <div>
          <button class="contact-button mt-2" data-category="${category}" data-idx="${idx}">View Sub-Courses</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderCourses('introductory', 'introductoryCourses');
  renderCourses('advanced', 'advancedCourses');

  // --- Modal Logic for Sub-Courses ---
  function showSubCourseModal(category, idx) {
    const course = courseData[category][idx];
    const modal = document.getElementById('subCourseModal');
    const modalContent = document.getElementById('subCourseModalContent');
    if (!course || !modal || !modalContent) return;
    let html = `<h2 class="text-2xl font-semibold mb-4">${course.title} - Sub-Courses</h2>`;
    if (course.subCourses && course.subCourses.length > 0) {
      html += '<div class="space-y-6">';
      course.subCourses.forEach((sub, i) => {
        html += `
          <div class="border rounded-lg p-4 bg-blue-50">
            <h3 class="text-lg font-bold text-[#1a73e8] mb-1">${sub.title}</h3>
            <p class="text-sm text-gray-600 mb-1"><strong>Duration:</strong> ${sub.duration}</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Lecturer:</strong> ${sub.lecturer}</p>
            <p class="text-gray-700"><strong>Abstract:</strong> ${sub.abstract}</p>
          </div>
        `;
      });
      html += '</div>';
    } else {
      html += '<p>No sub-courses available.</p>';
    }
    modalContent.innerHTML = html;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Event delegation for sub-course buttons
  document.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.contact-button[data-category]')) {
      const category = e.target.getAttribute('data-category');
      const idx = e.target.getAttribute('data-idx');
      showSubCourseModal(category, idx);
    }
    // Close modal
    if (e.target && (e.target.classList.contains('close-modal') || e.target.id === 'subCourseModal')) {
      const modal = document.getElementById('subCourseModal');
      if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
      }
    }
  });

  // Close modal on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('subCourseModal');
      if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
      }
    }
  });
});

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('bg-[#0d0d0d]');
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('bg-[#0d0d0d]');
    navbar.classList.remove('shadow-md');
  }
});
