const CONNECTIONS = [
  {
    groups: [
      { theme: 'Beta Blockers (-olol)', difficulty: 0, words: ['Metoprolol', 'Atenolol', 'Propranolol'] },
      { theme: 'ACE Inhibitors (-pril)', difficulty: 1, words: ['Lisinopril', 'Ramipril', 'Enalapril'] },
      { theme: 'ARBs (-sartan)', difficulty: 2, words: ['Losartan', 'Valsartan', 'Candesartan'] },
      { theme: 'Statins (-statin)', difficulty: 3, words: ['Atorvastatin', 'Rosuvastatin', 'Simvastatin'] },
    ],
  },
  {
    groups: [
      { theme: 'Signs of Left Heart Failure', difficulty: 0, words: ['Crackles', 'Orthopnea', 'Dyspnea'] },
      { theme: 'Signs of Right Heart Failure', difficulty: 1, words: ['JVD', 'Ascites', 'Peripheral edema'] },
      { theme: 'Signs of Shock', difficulty: 2, words: ['Tachycardia', 'Hypotension', 'Altered LOC'] },
      { theme: 'Signs of Increased ICP', difficulty: 3, words: ['Bradycardia', 'Widened pulse pressure', 'Irregular respirations'] },
    ],
  },
  {
    groups: [
      { theme: 'Elevated in MI', difficulty: 0, words: ['Troponin', 'CK-MB', 'Myoglobin'] },
      { theme: 'Elevated in Liver Disease', difficulty: 1, words: ['Bilirubin', 'AST', 'ALT'] },
      { theme: 'Elevated in Kidney Disease', difficulty: 2, words: ['Creatinine', 'BUN', 'Potassium'] },
      { theme: 'Elevated in DKA', difficulty: 3, words: ['Blood glucose', 'Ketones', 'Anion gap'] },
    ],
  },
  {
    groups: [
      { theme: 'Cause Hepatotoxicity', difficulty: 0, words: ['Acetaminophen', 'Methotrexate', 'Valproic acid'] },
      { theme: 'Cause Ototoxicity', difficulty: 1, words: ['Furosemide', 'Vancomycin', 'Gentamicin'] },
      { theme: 'Cause QT Prolongation', difficulty: 2, words: ['Amiodarone', 'Ondansetron', 'Haloperidol'] },
      { theme: 'Cause Photosensitivity', difficulty: 3, words: ['Tetracycline', 'Amiodarone', 'Hydrochlorothiazide'] },
    ],
  },
  {
    groups: [
      { theme: 'Low-Flow O₂ Devices', difficulty: 0, words: ['Nasal cannula', 'Simple mask', 'Non-rebreather'] },
      { theme: 'Airway Management', difficulty: 1, words: ['Oral airway', 'Bag-valve mask', 'Endotracheal tube'] },
      { theme: 'IV Insertion Supplies', difficulty: 2, words: ['Tourniquet', 'IV catheter', 'Tegaderm'] },
      { theme: 'Wound Care Supplies', difficulty: 3, words: ['Sterile gauze', 'Normal saline', 'Wound vac'] },
    ],
  },
  {
    groups: [
      { theme: 'Rapid-Acting Insulin', difficulty: 0, words: ['Lispro', 'Aspart', 'Glulisine'] },
      { theme: 'Long-Acting Insulin', difficulty: 1, words: ['Glargine', 'Detemir', 'Degludec'] },
      { theme: 'Oral Antidiabetics', difficulty: 2, words: ['Metformin', 'Gliclazide', 'Sitagliptin'] },
      { theme: 'DKA Treatment Steps', difficulty: 3, words: ['IV fluids', 'Insulin drip', 'Potassium replacement'] },
    ],
  },
  {
    groups: [
      { theme: 'Isotonic IV Fluids', difficulty: 0, words: ['Normal saline', 'Lactated Ringer\'s', 'D5W'] },
      { theme: 'Hypertonic IV Fluids', difficulty: 1, words: ['3% saline', 'D10W', 'D50W'] },
      { theme: 'Blood Products', difficulty: 2, words: ['Packed RBCs', 'Fresh frozen plasma', 'Platelets'] },
      { theme: 'IV Complications', difficulty: 3, words: ['Infiltration', 'Phlebitis', 'Air embolism'] },
    ],
  },
  {
    groups: [
      { theme: 'Contact Precautions', difficulty: 0, words: ['C. difficile', 'MRSA', 'Scabies'] },
      { theme: 'Droplet Precautions', difficulty: 1, words: ['Influenza', 'Pertussis', 'Meningococcal'] },
      { theme: 'Airborne Precautions', difficulty: 2, words: ['Tuberculosis', 'Measles', 'Varicella'] },
      { theme: 'Standard Precautions PPE', difficulty: 3, words: ['Gloves', 'Hand hygiene', 'Sharps disposal'] },
    ],
  },
  {
    groups: [
      { theme: 'Normal Adult Vital Signs', difficulty: 0, words: ['HR 60-100 bpm', 'RR 12-20/min', 'BP 120/80 mmHg'] },
      { theme: 'Pediatric Red Flags', difficulty: 1, words: ['Bulging fontanel', 'Stridor', 'Mottled skin'] },
      { theme: 'Apgar Score Components', difficulty: 2, words: ['Heart rate', 'Muscle tone', 'Reflex irritability'] },
      { theme: 'Cushing Triad (↑ICP)', difficulty: 3, words: ['Hypertension', 'Bradycardia', 'Irregular breathing'] },
    ],
  },
  {
    groups: [
      { theme: 'Respiratory Alkalosis Causes', difficulty: 0, words: ['Hyperventilation', 'Anxiety', 'Pain'] },
      { theme: 'Metabolic Acidosis Causes', difficulty: 1, words: ['DKA', 'Renal failure', 'Lactic acidosis'] },
      { theme: 'Respiratory Acidosis Causes', difficulty: 2, words: ['COPD', 'Opioid overdose', 'Pneumothorax'] },
      { theme: 'Metabolic Alkalosis Causes', difficulty: 3, words: ['Vomiting', 'NG suction', 'Loop diuretics'] },
    ],
  },
  {
    groups: [
      { theme: 'Electrolytes Lost in Vomiting', difficulty: 0, words: ['Potassium', 'Chloride', 'Hydrogen ions'] },
      { theme: 'Signs of Hyponatremia', difficulty: 1, words: ['Confusion', 'Seizures', 'Headache'] },
      { theme: 'Signs of Hypocalcemia', difficulty: 2, words: ['Trousseau sign', 'Chvostek sign', 'Tetany'] },
      { theme: 'Signs of Hyperkalemia', difficulty: 3, words: ['Peaked T waves', 'Muscle weakness', 'Widened QRS'] },
    ],
  },
  {
    groups: [
      { theme: 'Pressure Injury Stage I-II', difficulty: 0, words: ['Non-blanchable redness', 'Partial-thickness', 'Intact blister'] },
      { theme: 'Pressure Injury Stage III-IV', difficulty: 1, words: ['Full-thickness loss', 'Visible bone/tendon', 'Undermining'] },
      { theme: 'Wound Healing Phases', difficulty: 2, words: ['Hemostasis', 'Inflammatory', 'Proliferative'] },
      { theme: 'Wound Infection Signs', difficulty: 3, words: ['Purulent drainage', 'Erythema', 'Warmth'] },
    ],
  },
  {
    groups: [
      { theme: 'Parts of a Nursing Diagnosis', difficulty: 0, words: ['Problem', 'Etiology', 'Signs/symptoms'] },
      { theme: 'Steps of Nursing Process', difficulty: 1, words: ['Assessment', 'Planning', 'Evaluation'] },
      { theme: 'Levels of Maslow\'s Hierarchy', difficulty: 2, words: ['Physiological', 'Safety', 'Self-actualization'] },
      { theme: 'Types of Nursing Leadership', difficulty: 3, words: ['Autocratic', 'Democratic', 'Laissez-faire'] },
    ],
  },
  {
    groups: [
      { theme: 'Opioid Side Effects', difficulty: 0, words: ['Constipation', 'Respiratory depression', 'Sedation'] },
      { theme: 'SSRI Side Effects', difficulty: 1, words: ['Sexual dysfunction', 'GI upset', 'Serotonin syndrome'] },
      { theme: 'Steroid Side Effects', difficulty: 2, words: ['Hyperglycemia', 'Moon face', 'Osteoporosis'] },
      { theme: 'Aminoglycoside Side Effects', difficulty: 3, words: ['Nephrotoxicity', 'Ototoxicity', 'Neuromuscular blockade'] },
    ],
  },
  {
    groups: [
      { theme: 'Foley Catheter Insertion', difficulty: 0, words: ['Sterile field', 'Betadine swabs', 'Prefilled syringe'] },
      { theme: 'NG Tube Insertion', difficulty: 1, words: ['NEX measurement', 'pH testing', 'X-ray confirmation'] },
      { theme: 'Tracheostomy Care', difficulty: 2, words: ['Inner cannula', 'Trach ties', 'Obturator at bedside'] },
      { theme: 'Central Line Dressing Change', difficulty: 3, words: ['Chlorhexidine', 'Biopatch', 'Transparent dressing'] },
    ],
  },
  {
    groups: [
      { theme: 'Medications Given Sublingually', difficulty: 0, words: ['Nitroglycerin', 'Buprenorphine', 'Vitamin B12'] },
      { theme: 'Medications Given Rectally', difficulty: 1, words: ['Acetaminophen', 'Diazepam', 'Mesalamine'] },
      { theme: 'Medications Given via Inhaler', difficulty: 2, words: ['Salbutamol', 'Fluticasone', 'Tiotropium'] },
      { theme: 'Medications Given Transdermally', difficulty: 3, words: ['Fentanyl', 'Nitroglycerin paste', 'Scopolamine'] },
    ],
  },
  {
    groups: [
      { theme: 'ABCDE Assessment', difficulty: 0, words: ['Airway', 'Breathing', 'Circulation'] },
      { theme: 'Stroke Assessment (FAST)', difficulty: 1, words: ['Face drooping', 'Arm weakness', 'Speech difficulty'] },
      { theme: 'Pain Assessment (OLDCARTS)', difficulty: 2, words: ['Onset', 'Location', 'Duration'] },
      { theme: 'Chest Pain Assessment', difficulty: 3, words: ['PQRST', 'Troponin levels', '12-lead ECG'] },
    ],
  },
  {
    groups: [
      { theme: 'ACLS Shockable Rhythms', difficulty: 0, words: ['V-fib', 'Pulseless V-tach', 'Defibrillation'] },
      { theme: 'ACLS Non-Shockable Rhythms', difficulty: 1, words: ['Asystole', 'PEA', 'Epinephrine q3-5min'] },
      { theme: 'Bradycardia Treatment', difficulty: 2, words: ['Atropine', 'Transcutaneous pacing', 'Dopamine drip'] },
      { theme: 'Tachycardia Treatment', difficulty: 3, words: ['Adenosine', 'Cardioversion', 'Amiodarone'] },
    ],
  },
  {
    groups: [
      { theme: 'Types of Anemia', difficulty: 0, words: ['Iron deficiency', 'B12 deficiency', 'Sickle cell'] },
      { theme: 'Types of Leukemia', difficulty: 1, words: ['ALL', 'AML', 'CLL'] },
      { theme: 'Clotting Cascade Tests', difficulty: 2, words: ['PT/INR', 'aPTT', 'Fibrinogen'] },
      { theme: 'Blood Transfusion Reactions', difficulty: 3, words: ['Hemolytic', 'Febrile', 'Anaphylactic'] },
    ],
  },
  {
    groups: [
      { theme: 'Preeclampsia Signs', difficulty: 0, words: ['Hypertension', 'Proteinuria', 'Visual changes'] },
      { theme: 'Labor Stages', difficulty: 1, words: ['Dilation', 'Delivery', 'Placental expulsion'] },
      { theme: 'Fetal Heart Rate Patterns', difficulty: 2, words: ['Early decelerations', 'Late decelerations', 'Variable decelerations'] },
      { theme: 'Postpartum Hemorrhage Causes (4 T\'s)', difficulty: 3, words: ['Tone (atony)', 'Trauma', 'Tissue (retained)'] },
    ],
  },
  {
    groups: [
      { theme: 'Benzodiazepines', difficulty: 0, words: ['Lorazepam', 'Diazepam', 'Midazolam'] },
      { theme: 'Opioid Analgesics', difficulty: 1, words: ['Morphine', 'Hydromorphone', 'Fentanyl'] },
      { theme: 'Antidotes/Reversal Agents', difficulty: 2, words: ['Naloxone', 'Flumazenil', 'Protamine'] },
      { theme: 'Paralytics (NMBAs)', difficulty: 3, words: ['Succinylcholine', 'Rocuronium', 'Vecuronium'] },
    ],
  },
  {
    groups: [
      { theme: 'Cranial Nerves for Eye Movement', difficulty: 0, words: ['Oculomotor (III)', 'Trochlear (IV)', 'Abducens (VI)'] },
      { theme: 'Cranial Nerves for Facial Sensation', difficulty: 1, words: ['Trigeminal (V)', 'Facial (VII)', 'Glossopharyngeal (IX)'] },
      { theme: 'Dermatome Landmarks', difficulty: 2, words: ['C6 = Thumb', 'T4 = Nipple line', 'T10 = Umbilicus'] },
      { theme: 'Types of Aphasia', difficulty: 3, words: ['Broca\'s (expressive)', 'Wernicke\'s (receptive)', 'Global'] },
    ],
  },
  {
    groups: [
      { theme: 'Addison Disease Signs', difficulty: 0, words: ['Hypotension', 'Bronze skin', 'Hyponatremia'] },
      { theme: 'Cushing Syndrome Signs', difficulty: 1, words: ['Moon face', 'Buffalo hump', 'Hyperglycemia'] },
      { theme: 'Hypothyroid Signs', difficulty: 2, words: ['Weight gain', 'Cold intolerance', 'Bradycardia'] },
      { theme: 'Hyperthyroid Signs', difficulty: 3, words: ['Weight loss', 'Heat intolerance', 'Exophthalmos'] },
    ],
  },
  {
    groups: [
      { theme: 'Falls Prevention', difficulty: 0, words: ['Bed alarm', 'Non-slip footwear', 'Call bell in reach'] },
      { theme: 'Aspiration Precautions', difficulty: 1, words: ['HOB 30-45°', 'Thickened liquids', 'Chin tuck'] },
      { theme: 'Seizure Precautions', difficulty: 2, words: ['Padded side rails', 'Suction at bedside', 'O₂ at bedside'] },
      { theme: 'Suicide Precautions', difficulty: 3, words: ['1:1 observation', 'Remove sharps', 'Search belongings'] },
    ],
  },
  {
    groups: [
      { theme: 'Chest Tube Management', difficulty: 0, words: ['Water seal chamber', 'Tidaling', 'Keep below chest'] },
      { theme: 'Ventilator Alarms', difficulty: 1, words: ['High pressure', 'Low pressure', 'Apnea alarm'] },
      { theme: 'Arterial Blood Gas Components', difficulty: 2, words: ['pH', 'PaCO₂', 'HCO₃'] },
      { theme: 'Signs of Pneumothorax', difficulty: 3, words: ['Absent breath sounds', 'Tracheal deviation', 'Subcutaneous emphysema'] },
    ],
  },
  {
    groups: [
      { theme: 'High-Potassium Foods', difficulty: 0, words: ['Bananas', 'Oranges', 'Potatoes'] },
      { theme: 'High-Sodium Foods', difficulty: 1, words: ['Canned soup', 'Deli meats', 'Pickles'] },
      { theme: 'Vitamin K-Rich Foods', difficulty: 2, words: ['Spinach', 'Kale', 'Broccoli'] },
      { theme: 'Foods to Avoid on MAOIs', difficulty: 3, words: ['Aged cheese', 'Red wine', 'Smoked meats'] },
    ],
  },
  {
    groups: [
      { theme: 'Thyroid Storm Treatment', difficulty: 0, words: ['Propranolol', 'PTU', 'Cooling measures'] },
      { theme: 'Anaphylaxis Treatment', difficulty: 1, words: ['Epinephrine IM', 'IV fluids', 'Diphenhydramine'] },
      { theme: 'Status Epilepticus Treatment', difficulty: 2, words: ['Lorazepam IV', 'Phenytoin', 'Airway protection'] },
      { theme: 'Hyperkalemia Treatment', difficulty: 3, words: ['Calcium gluconate', 'Insulin + D50', 'Kayexalate'] },
    ],
  },
  {
    groups: [
      { theme: 'Left-Sided Stroke Deficits', difficulty: 0, words: ['Right hemiplegia', 'Aphasia', 'Slow/cautious'] },
      { theme: 'Right-Sided Stroke Deficits', difficulty: 1, words: ['Left hemiplegia', 'Neglect syndrome', 'Impulsive behavior'] },
      { theme: 'Parkinson Disease Signs', difficulty: 2, words: ['Resting tremor', 'Bradykinesia', 'Shuffling gait'] },
      { theme: 'Multiple Sclerosis Signs', difficulty: 3, words: ['Optic neuritis', 'Intention tremor', 'Uhthoff phenomenon'] },
    ],
  },
  {
    groups: [
      { theme: 'Post-Op Day 1 Priorities', difficulty: 0, words: ['Pain management', 'Ambulation', 'Incentive spirometry'] },
      { theme: 'Paralytic Ileus Signs', difficulty: 1, words: ['Absent bowel sounds', 'Abdominal distension', 'No flatus'] },
      { theme: 'DVT Prevention', difficulty: 2, words: ['SCDs', 'Early ambulation', 'Enoxaparin'] },
      { theme: 'Dehiscence/Evisceration Care', difficulty: 3, words: ['Sterile saline gauze', 'Low Fowler\'s', 'Call surgeon STAT'] },
    ],
  },
  {
    groups: [
      { theme: 'Antidepressant Classes', difficulty: 0, words: ['SSRI', 'SNRI', 'MAOI'] },
      { theme: 'Signs of Serotonin Syndrome', difficulty: 1, words: ['Hyperthermia', 'Clonus', 'Agitation'] },
      { theme: 'Lithium Toxicity Signs', difficulty: 2, words: ['Coarse tremor', 'Ataxia', 'Confusion'] },
      { theme: 'NMS (Neuroleptic Malignant Syndrome)', difficulty: 3, words: ['Lead-pipe rigidity', 'Fever >40°C', 'Elevated CK'] },
    ],
  },
];

// Amiodarone appears in two puzzles (QT prolongation and photosensitivity in puzzle 4)
// Fix puzzle 4 by replacing the duplicate
CONNECTIONS[3].groups[3] = { theme: 'Cause Photosensitivity', difficulty: 3, words: ['Doxycycline', 'Sulfonamides', 'Hydrochlorothiazide'] };

export function getRandomPuzzle(excludeIdx) {
  let idx;
  do {
    idx = Math.floor(Math.random() * CONNECTIONS.length);
  } while (idx === excludeIdx && CONNECTIONS.length > 1);
  return { puzzle: CONNECTIONS[idx], index: idx };
}

export function getPuzzleByIndex(idx) {
  return CONNECTIONS[idx % CONNECTIONS.length];
}

export const TOTAL_CONNECTION_PUZZLES = CONNECTIONS.length;

export default CONNECTIONS;
