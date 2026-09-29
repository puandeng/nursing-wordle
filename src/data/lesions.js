export const LESIONS = [
  // --- Configurations / Patterns ---
  {
    id: 'annular',
    name: 'Annular',
    category: 'configuration',
    description: 'Ring-shaped lesion with central clearing and a raised, active border.',
    causes: 'Tinea corporis (ringworm), granuloma annulare, erythema multiforme, secondary syphilis.',
  },
  {
    id: 'confluent',
    name: 'Confluent',
    category: 'configuration',
    description: 'Multiple lesions that merge together into larger patches, losing their individual borders.',
    causes: 'Measles, drug eruptions, confluent psoriasis, viral exanthems.',
  },
  {
    id: 'discrete',
    name: 'Discrete',
    category: 'configuration',
    description: 'Individual lesions that remain separate and distinct from one another.',
    causes: 'Molluscum contagiosum, insect bites, warts, cherry angiomas.',
  },
  {
    id: 'grouped',
    name: 'Grouped',
    category: 'configuration',
    description: 'Clusters of lesions appearing close together in a localized area.',
    causes: 'Herpes simplex, herpes zoster (early), contact dermatitis, insect bites.',
  },
  {
    id: 'gyrate',
    name: 'Gyrate',
    category: 'configuration',
    description: 'Lesions with wavy, serpentine, or coiled borders that may slowly migrate.',
    causes: 'Erythema annulare centrifugum, erythema gyratum repens (paraneoplastic).',
  },
  {
    id: 'target',
    name: 'Target (Iris)',
    category: 'configuration',
    description: 'Concentric rings of color resembling a bull\'s eye or target, with a central darker area.',
    causes: 'Erythema multiforme (classic), herpes-associated reactions, drug reactions.',
  },
  {
    id: 'linear',
    name: 'Linear',
    category: 'configuration',
    description: 'Lesions arranged in a straight or curved line.',
    causes: 'Contact dermatitis (e.g., poison ivy), Koebner phenomenon, linear morphea, dermatitis artefacta.',
  },
  {
    id: 'zosteriform',
    name: 'Zosteriform',
    category: 'configuration',
    description: 'Lesions distributed along a dermatome, following the path of a spinal nerve.',
    causes: 'Herpes zoster (shingles), zosteriform metastasis (rare).',
  },

  // --- Primary Lesions: Flat ---
  {
    id: 'macule',
    name: 'Macule',
    category: 'flat',
    description: 'A flat, circumscribed area of color change less than 1 cm in diameter. Not palpable.',
    causes: 'Freckles, flat moles, petechia, vitiligo, café-au-lait spots.',
  },
  {
    id: 'patch',
    name: 'Patch',
    category: 'flat',
    description: 'A flat, non-palpable area of color change greater than 1 cm in diameter.',
    causes: 'Vitiligo, port-wine stain, mongolian spots, tinea versicolor.',
  },

  // --- Primary Lesions: Elevated, Solid ---
  {
    id: 'papule',
    name: 'Papule',
    category: 'elevated-solid',
    description: 'A small, solid, elevated lesion less than 1 cm in diameter.',
    causes: 'Warts, acne, moles, insect bites, eczema.',
  },
  {
    id: 'plaque',
    name: 'Plaque',
    category: 'elevated-solid',
    description: 'A raised, flat-topped lesion greater than 1 cm in diameter, often formed by coalescence of papules.',
    causes: 'Psoriasis, eczema, mycosis fungoides, seborrheic keratosis.',
  },
  {
    id: 'nodule',
    name: 'Nodule',
    category: 'elevated-solid',
    description: 'A solid, raised lesion greater than 1 cm, extending deeper into the dermis or subcutaneous tissue.',
    causes: 'Lipoma, cystic acne, rheumatoid nodules, erythema nodosum, basal cell carcinoma.',
  },
  {
    id: 'tumor',
    name: 'Tumor',
    category: 'elevated-solid',
    description: 'A solid mass larger than 2 cm that may be benign or malignant, extending into deeper tissue.',
    causes: 'Lipoma, hemangioma, melanoma, squamous cell carcinoma, dermatofibrosarcoma.',
  },
  {
    id: 'wheal',
    name: 'Wheal',
    category: 'elevated-solid',
    description: 'A transient, raised, edematous area caused by localized dermal swelling. Characteristically itchy and short-lived.',
    causes: 'Allergic reactions, insect bites, dermatographism, urticaria, angioedema.',
  },
  {
    id: 'urticaria',
    name: 'Urticaria',
    category: 'elevated-solid',
    description: 'Widespread wheals (hives) — raised, erythematous, pruritic plaques caused by histamine release in the dermis.',
    causes: 'Allergic reactions (food, drugs), infections, physical stimuli (cold, pressure), idiopathic.',
  },

  // --- Primary Lesions: Elevated, Fluid-filled ---
  {
    id: 'vesicle',
    name: 'Vesicle',
    category: 'fluid-filled',
    description: 'A small, fluid-filled blister less than 1 cm in diameter, containing clear serous fluid.',
    causes: 'Herpes simplex, varicella (chickenpox), contact dermatitis, burns.',
  },
  {
    id: 'bulla',
    name: 'Bulla',
    category: 'fluid-filled',
    description: 'A large, fluid-filled blister greater than 1 cm in diameter.',
    causes: 'Bullous pemphigoid, second-degree burns, bullous impetigo, friction blisters.',
  },
  {
    id: 'cyst',
    name: 'Cyst',
    category: 'fluid-filled',
    description: 'An enclosed sac containing fluid, semi-solid, or gaseous material, located in the dermis or subcutaneous tissue.',
    causes: 'Epidermoid cyst, pilar cyst, ganglion cyst, acne cyst.',
  },
  {
    id: 'pustule',
    name: 'Pustule',
    category: 'fluid-filled',
    description: 'A small, elevated lesion containing purulent fluid (pus). The fluid may appear white, yellow, or green.',
    causes: 'Acne vulgaris, folliculitis, impetigo, pustular psoriasis.',
  },

  // --- Secondary Lesions ---
  {
    id: 'crust',
    name: 'Crust',
    category: 'secondary',
    description: 'Dried exudate (serum, blood, or pus) overlying a damaged skin surface.',
    causes: 'Impetigo (honey-colored crusts), eczema, healing wounds, herpes lesions.',
  },
  {
    id: 'scale',
    name: 'Scale',
    category: 'secondary',
    description: 'Flakes or plates of dead stratum corneum cells shed from the skin surface.',
    causes: 'Psoriasis (silvery scales), seborrheic dermatitis, tinea infections, ichthyosis.',
  },
  {
    id: 'fissure',
    name: 'Fissure',
    category: 'secondary',
    description: 'A linear crack extending from the epidermis into the dermis, often painful.',
    causes: 'Eczema, athlete\'s foot, angular cheilitis, dry/cracked heels.',
  },
  {
    id: 'ulcer',
    name: 'Ulcer',
    category: 'secondary',
    description: 'A deeper loss of skin extending through the epidermis into the dermis or subcutaneous tissue. May scar.',
    causes: 'Venous stasis ulcers, diabetic ulcers, pressure injuries, arterial insufficiency.',
  },
  {
    id: 'excoriation',
    name: 'Excoriation',
    category: 'secondary',
    description: 'A superficial linear abrasion caused by scratching, often with visible scratch marks.',
    causes: 'Pruritic conditions (eczema, scabies), neurotic excoriation, insect bites.',
  },
  {
    id: 'scar',
    name: 'Scar',
    category: 'secondary',
    description: 'A mark left after wound healing where normal tissue is replaced with fibrous connective tissue.',
    causes: 'Surgical incisions, trauma, acne, burns, deep lacerations.',
  },
  {
    id: 'atrophic-scar',
    name: 'Atrophic Scar',
    category: 'secondary',
    description: 'A depressed, thin scar caused by loss of underlying collagen, sitting below the surrounding skin surface.',
    causes: 'Acne scarring (ice pick, boxcar, rolling scars), varicella, discoid lupus.',
  },
  {
    id: 'lichenification',
    name: 'Lichenification',
    category: 'secondary',
    description: 'Thickened, leathery skin with exaggerated skin lines, caused by chronic rubbing or scratching.',
    causes: 'Chronic eczema, atopic dermatitis, lichen simplex chronicus, habitual scratching.',
  },
  {
    id: 'keloid',
    name: 'Keloid',
    category: 'secondary',
    description: 'An overgrowth of dense fibrous scar tissue that extends beyond the boundaries of the original wound.',
    causes: 'Surgical scars, ear piercings, burns, acne. More common in darker skin tones.',
  },

  // --- Vascular Lesions ---
  {
    id: 'hemangioma',
    name: 'Hemangioma',
    category: 'vascular',
    description: 'A benign proliferation of blood vessels forming a raised, bright red or purple lesion.',
    causes: 'Congenital vascular malformation, infantile hemangioma. Usually appears in infancy.',
  },
  {
    id: 'port-wine-stain',
    name: 'Port-Wine Stain',
    category: 'vascular',
    description: 'A flat, pink-to-dark-red birthmark caused by dilated capillaries. Present at birth and does not fade.',
    causes: 'Congenital capillary malformation. May be associated with Sturge-Weber syndrome when on the face.',
  },
  {
    id: 'strawberry-mark',
    name: 'Strawberry Mark',
    category: 'vascular',
    description: 'A raised, bright red, lobulated lesion that appears in infancy and typically involutes (shrinks) by age 5-10.',
    causes: 'Infantile hemangioma — a benign vascular tumor of endothelial cells.',
  },
  {
    id: 'telangiectasia',
    name: 'Telangiectasia',
    category: 'vascular',
    description: 'Small, permanently dilated superficial blood vessels creating visible fine red lines on the skin.',
    causes: 'Rosacea, sun damage, liver disease, hereditary hemorrhagic telangiectasia (HHT), scleroderma.',
  },
  {
    id: 'spider-angioma',
    name: 'Spider Angioma',
    category: 'vascular',
    description: 'A central arteriole with radiating capillary branches resembling spider legs. Blanches with pressure from the center.',
    causes: 'Liver disease (cirrhosis), pregnancy, oral contraceptive use. Can be normal in small numbers.',
  },
  {
    id: 'venous-lake',
    name: 'Venous Lake',
    category: 'vascular',
    description: 'A soft, compressible, dark blue or purple papule caused by a dilated venule, typically on the lip or ear.',
    causes: 'Sun damage, aging. Most common on the lower lip and ears of older adults.',
  },
  {
    id: 'petechiae',
    name: 'Petechiae',
    category: 'vascular',
    description: 'Tiny, pinpoint (< 2 mm), non-blanching red or purple spots caused by bleeding under the skin.',
    causes: 'Thrombocytopenia, meningococcemia, endocarditis, DIC, vasculitis, straining/vomiting.',
  },
  {
    id: 'purpura',
    name: 'Purpura',
    category: 'vascular',
    description: 'Non-blanching purple or red discolorations (> 2 mm) caused by bleeding into the skin or mucous membranes.',
    causes: 'Thrombocytopenia, anticoagulant use, vasculitis, senile purpura, Henoch-Schönlein purpura.',
  },
];

export const CATEGORIES = {
  configuration: 'Configuration / Pattern',
  flat: 'Flat Lesion',
  'elevated-solid': 'Elevated Solid Lesion',
  'fluid-filled': 'Fluid-Filled Lesion',
  secondary: 'Secondary Lesion',
  vascular: 'Vascular Lesion',
};

export const ROUNDS_PER_GAME = 10;

export function getRandomLesions(count) {
  const shuffled = [...LESIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateOptions(correct, allLesions, count = 4) {
  const sameCategory = allLesions.filter(
    l => l.category === correct.category && l.id !== correct.id
  );
  const otherCategory = allLesions.filter(
    l => l.category !== correct.category && l.id !== correct.id
  );

  const shuffledSame = [...sameCategory].sort(() => Math.random() - 0.5);
  const shuffledOther = [...otherCategory].sort(() => Math.random() - 0.5);

  const distractors = [];
  // Pick from same category first for harder difficulty
  for (const l of shuffledSame) {
    if (distractors.length >= count - 1) break;
    distractors.push(l);
  }
  for (const l of shuffledOther) {
    if (distractors.length >= count - 1) break;
    distractors.push(l);
  }

  const options = [correct, ...distractors];
  return options.sort(() => Math.random() - 0.5);
}
