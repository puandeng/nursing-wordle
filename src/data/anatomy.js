const PART_POSITIONS = {
  bones: {
    'Skull': { x: 100, y: 30 },
    'Mandible': { x: 100, y: 48 },
    'Cervical vertebrae': { x: 100, y: 60 },
    'Clavicle': { x: 82, y: 72 },
    'Scapula': { x: 68, y: 85 },
    'Sternum': { x: 100, y: 95 },
    'Ribs': { x: 112, y: 110 },
    'Humerus': { x: 55, y: 110 },
    'Thoracic vertebrae': { x: 100, y: 125 },
    'Radius': { x: 42, y: 170 },
    'Ulna': { x: 48, y: 168 },
    'Lumbar vertebrae': { x: 100, y: 165 },
    'Pelvis': { x: 100, y: 195 },
    'Sacrum': { x: 100, y: 208 },
    'Coccyx': { x: 100, y: 218 },
    'Carpals': { x: 36, y: 200 },
    'Metacarpals': { x: 34, y: 213 },
    'Phalanges (hand)': { x: 32, y: 226 },
    'Femur': { x: 85, y: 252 },
    'Patella': { x: 83, y: 282 },
    'Tibia': { x: 81, y: 322 },
    'Fibula': { x: 75, y: 320 },
    'Tarsals': { x: 78, y: 362 },
    'Calcaneus': { x: 76, y: 375 },
    'Metatarsals': { x: 74, y: 388 },
    'Phalanges (foot)': { x: 72, y: 398 },
  },
  arteries: {
    'Aortic arch': { x: 108, y: 82 },
    'Ascending aorta': { x: 105, y: 90 },
    'Descending aorta': { x: 105, y: 140 },
    'Common carotid artery': { x: 108, y: 58 },
    'Internal carotid artery': { x: 108, y: 40 },
    'External carotid artery': { x: 115, y: 45 },
    'Subclavian artery': { x: 78, y: 74 },
    'Axillary artery': { x: 65, y: 80 },
    'Brachial artery': { x: 52, y: 128 },
    'Radial artery': { x: 40, y: 188 },
    'Ulnar artery': { x: 46, y: 185 },
    'Common iliac artery': { x: 94, y: 195 },
    'External iliac artery': { x: 90, y: 210 },
    'Internal iliac artery': { x: 100, y: 205 },
    'Femoral artery': { x: 87, y: 252 },
    'Popliteal artery': { x: 85, y: 285 },
    'Anterior tibial artery': { x: 82, y: 335 },
    'Posterior tibial artery': { x: 78, y: 340 },
    'Dorsalis pedis': { x: 76, y: 380 },
  },
  digestive: {
    'Mouth': { x: 100, y: 42 },
    'Pharynx': { x: 100, y: 58 },
    'Esophagus': { x: 100, y: 100 },
    'Stomach': { x: 112, y: 140 },
    'Duodenum': { x: 120, y: 155 },
    'Jejunum': { x: 95, y: 165 },
    'Ileum': { x: 110, y: 178 },
    'Cecum': { x: 122, y: 192 },
    'Ascending colon': { x: 125, y: 170 },
    'Transverse colon': { x: 100, y: 155 },
    'Descending colon': { x: 76, y: 170 },
    'Sigmoid colon': { x: 82, y: 195 },
    'Rectum': { x: 100, y: 210 },
    'Small intestine': { x: 100, y: 170 },
    'Large intestine': { x: 100, y: 185 },
  },
  heart: {
    'Superior vena cava': { x: 115, y: 78 },
    'Inferior vena cava': { x: 115, y: 130 },
    'Right atrium': { x: 118, y: 95 },
    'Right ventricle': { x: 115, y: 110 },
    'Pulmonary artery': { x: 100, y: 85 },
    'Lungs': { x: 100, y: 105 },
    'Pulmonary veins': { x: 85, y: 92 },
    'Left atrium': { x: 88, y: 98 },
    'Left ventricle': { x: 90, y: 112 },
    'Aorta': { x: 98, y: 80 },
  },
  muscles: {
    'Trapezius': { x: 75, y: 70 },
    'Deltoid': { x: 60, y: 82 },
    'Pectoralis major': { x: 88, y: 98 },
    'Biceps brachii': { x: 54, y: 115 },
    'Triceps brachii': { x: 58, y: 120 },
    'Brachialis': { x: 50, y: 135 },
    'Brachioradialis': { x: 44, y: 160 },
    'Rectus abdominis': { x: 100, y: 155 },
    'External oblique': { x: 85, y: 155 },
    'Gluteus maximus': { x: 92, y: 202 },
    'Quadriceps': { x: 88, y: 248 },
    'Hamstrings': { x: 92, y: 260 },
    'Sartorius': { x: 84, y: 265 },
    'Gastrocnemius': { x: 82, y: 325 },
    'Soleus': { x: 80, y: 345 },
    'Tibialis anterior': { x: 78, y: 330 },
  },
};

const SEARCH_LISTS = {
  bones: [
    'Skull', 'Mandible', 'Cervical vertebrae', 'Thoracic vertebrae', 'Lumbar vertebrae',
    'Sacrum', 'Coccyx', 'Clavicle', 'Scapula', 'Sternum', 'Ribs', 'Humerus', 'Radius',
    'Ulna', 'Carpals', 'Metacarpals', 'Phalanges (hand)', 'Pelvis', 'Femur', 'Patella',
    'Tibia', 'Fibula', 'Tarsals', 'Calcaneus', 'Metatarsals', 'Phalanges (foot)', 'Hyoid',
  ],
  arteries: [
    'Aortic arch', 'Ascending aorta', 'Descending aorta', 'Common carotid artery',
    'Internal carotid artery', 'External carotid artery', 'Subclavian artery',
    'Axillary artery', 'Brachial artery', 'Radial artery', 'Ulnar artery',
    'Common iliac artery', 'Internal iliac artery', 'External iliac artery',
    'Femoral artery', 'Popliteal artery', 'Anterior tibial artery',
    'Posterior tibial artery', 'Dorsalis pedis', 'Celiac trunk',
    'Superior mesenteric artery', 'Inferior mesenteric artery', 'Renal artery',
  ],
  digestive: [
    'Mouth', 'Pharynx', 'Esophagus', 'Stomach', 'Duodenum', 'Jejunum', 'Ileum',
    'Cecum', 'Appendix', 'Ascending colon', 'Transverse colon', 'Descending colon',
    'Sigmoid colon', 'Rectum', 'Liver', 'Gallbladder', 'Pancreas',
    'Small intestine', 'Large intestine',
  ],
  heart: [
    'Superior vena cava', 'Inferior vena cava', 'Right atrium', 'Tricuspid valve',
    'Right ventricle', 'Pulmonary valve', 'Pulmonary artery', 'Pulmonary veins',
    'Left atrium', 'Mitral valve', 'Left ventricle', 'Aortic valve', 'Aorta', 'Lungs',
  ],
  muscles: [
    'Trapezius', 'Deltoid', 'Pectoralis major', 'Pectoralis minor', 'Biceps brachii',
    'Triceps brachii', 'Brachialis', 'Brachioradialis', 'Rectus abdominis',
    'External oblique', 'Internal oblique', 'Latissimus dorsi', 'Gluteus maximus',
    'Gluteus medius', 'Quadriceps', 'Hamstrings', 'Sartorius', 'Adductors',
    'Gastrocnemius', 'Soleus', 'Tibialis anterior',
  ],
};

const CATEGORY_LABELS = {
  bones: 'Bones',
  arteries: 'Arteries',
  digestive: 'Digestive Tract',
  heart: 'Heart & Circulation',
  muscles: 'Muscles',
};

const CATEGORY_COLORS = {
  bones: '#e8d5b7',
  arteries: '#f28b82',
  digestive: '#a0d995',
  heart: '#f6a6c1',
  muscles: '#b4a7d6',
};

const PUZZLES = [
  {
    category: 'bones',
    title: 'Hand to Shoulder',
    path: ['Phalanges (hand)', 'Metacarpals', 'Carpals', 'Radius', 'Humerus', 'Scapula'],
  },
  {
    category: 'bones',
    title: 'Leg to Head',
    path: ['Femur', 'Pelvis', 'Sacrum', 'Lumbar vertebrae', 'Thoracic vertebrae', 'Cervical vertebrae', 'Skull'],
  },
  {
    category: 'bones',
    title: 'Heel to Kneecap',
    path: ['Calcaneus', 'Tarsals', 'Tibia', 'Patella'],
  },
  {
    category: 'bones',
    title: 'Chest to Upper Arm',
    path: ['Sternum', 'Clavicle', 'Scapula', 'Humerus'],
  },
  {
    category: 'bones',
    title: 'Foot to Low Back',
    path: ['Metatarsals', 'Tarsals', 'Tibia', 'Femur', 'Pelvis', 'Sacrum', 'Lumbar vertebrae'],
  },
  {
    category: 'bones',
    title: 'Skull to Tailbone',
    path: ['Skull', 'Cervical vertebrae', 'Thoracic vertebrae', 'Lumbar vertebrae', 'Sacrum', 'Coccyx'],
  },
  {
    category: 'bones',
    title: 'Wrist to Shoulder Blade',
    path: ['Carpals', 'Ulna', 'Humerus', 'Scapula'],
  },
  {
    category: 'arteries',
    title: 'Heart to Wrist',
    path: ['Aortic arch', 'Subclavian artery', 'Axillary artery', 'Brachial artery', 'Radial artery'],
  },
  {
    category: 'arteries',
    title: 'Heart to Foot',
    path: ['Aortic arch', 'Descending aorta', 'Common iliac artery', 'External iliac artery', 'Femoral artery', 'Popliteal artery', 'Anterior tibial artery', 'Dorsalis pedis'],
  },
  {
    category: 'arteries',
    title: 'Foot to Thigh',
    path: ['Dorsalis pedis', 'Anterior tibial artery', 'Popliteal artery', 'Femoral artery'],
  },
  {
    category: 'arteries',
    title: 'Heart to Brain',
    path: ['Aortic arch', 'Common carotid artery', 'Internal carotid artery'],
  },
  {
    category: 'digestive',
    title: 'Mouth to Stomach',
    path: ['Mouth', 'Pharynx', 'Esophagus', 'Stomach'],
  },
  {
    category: 'digestive',
    title: 'Stomach to Cecum',
    path: ['Stomach', 'Duodenum', 'Jejunum', 'Ileum', 'Cecum'],
  },
  {
    category: 'digestive',
    title: 'Cecum to Rectum',
    path: ['Cecum', 'Ascending colon', 'Transverse colon', 'Descending colon', 'Sigmoid colon', 'Rectum'],
  },
  {
    category: 'heart',
    title: 'Veins to Lungs',
    path: ['Superior vena cava', 'Right atrium', 'Right ventricle', 'Pulmonary artery', 'Lungs'],
  },
  {
    category: 'heart',
    title: 'Lungs to Aorta',
    path: ['Lungs', 'Pulmonary veins', 'Left atrium', 'Left ventricle', 'Aorta'],
  },
  {
    category: 'muscles',
    title: 'Shoulder to Forearm',
    path: ['Deltoid', 'Biceps brachii', 'Brachialis', 'Brachioradialis'],
  },
  {
    category: 'muscles',
    title: 'Hip to Calf',
    path: ['Gluteus maximus', 'Hamstrings', 'Gastrocnemius', 'Soleus'],
  },
  {
    category: 'muscles',
    title: 'Neck to Arm',
    path: ['Trapezius', 'Deltoid', 'Biceps brachii'],
  },
  {
    category: 'muscles',
    title: 'Chest to Core',
    path: ['Pectoralis major', 'External oblique', 'Rectus abdominis'],
  },
];

export function getRandomPuzzle(excludeIdx) {
  let idx;
  do {
    idx = Math.floor(Math.random() * PUZZLES.length);
  } while (idx === excludeIdx && PUZZLES.length > 1);
  return { puzzle: PUZZLES[idx], index: idx };
}

export function searchParts(query, category) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  const list = SEARCH_LISTS[category] || [];
  return list
    .filter(p => p.toLowerCase().includes(q))
    .sort((a, b) => {
      const aStarts = a.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.toLowerCase().startsWith(q) ? 0 : 1;
      if (aStarts !== bStarts) return aStarts - bStarts;
      return a.length - b.length;
    })
    .slice(0, 8);
}

export function getPartPosition(category, name) {
  return PART_POSITIONS[category]?.[name] || null;
}

export { PART_POSITIONS, SEARCH_LISTS, CATEGORY_LABELS, CATEGORY_COLORS, PUZZLES };
export default PUZZLES;
