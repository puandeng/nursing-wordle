/**
 * Canadian drug database — generic name (brand name).
 * Each entry has a generic name and one or more brand names commonly used in Canada.
 */
const DRUGS = [
  // Cardiovascular
  { generic: 'metoprolol', brands: ['Lopressor', 'Betaloc'] },
  { generic: 'atenolol', brands: ['Tenormin'] },
  { generic: 'propranolol', brands: ['Inderal'] },
  { generic: 'bisoprolol', brands: ['Monocor'] },
  { generic: 'carvedilol', brands: ['Coreg'] },
  { generic: 'amlodipine', brands: ['Norvasc'] },
  { generic: 'nifedipine', brands: ['Adalat'] },
  { generic: 'diltiazem', brands: ['Cardizem', 'Tiazac'] },
  { generic: 'verapamil', brands: ['Isoptin'] },
  { generic: 'lisinopril', brands: ['Zestril', 'Prinivil'] },
  { generic: 'ramipril', brands: ['Altace'] },
  { generic: 'enalapril', brands: ['Vasotec'] },
  { generic: 'perindopril', brands: ['Coversyl'] },
  { generic: 'losartan', brands: ['Cozaar'] },
  { generic: 'valsartan', brands: ['Diovan'] },
  { generic: 'candesartan', brands: ['Atacand'] },
  { generic: 'irbesartan', brands: ['Avapro'] },
  { generic: 'telmisartan', brands: ['Micardis'] },
  { generic: 'hydrochlorothiazide', brands: ['Hydrodiuril'] },
  { generic: 'furosemide', brands: ['Lasix'] },
  { generic: 'spironolactone', brands: ['Aldactone'] },
  { generic: 'indapamide', brands: ['Lozide'] },
  { generic: 'digoxin', brands: ['Lanoxin'] },
  { generic: 'amiodarone', brands: ['Cordarone'] },
  { generic: 'warfarin', brands: ['Coumadin'] },
  { generic: 'apixaban', brands: ['Eliquis'] },
  { generic: 'rivaroxaban', brands: ['Xarelto'] },
  { generic: 'dabigatran', brands: ['Pradaxa'] },
  { generic: 'edoxaban', brands: ['Lixiana'] },
  { generic: 'heparin', brands: ['Heparin'] },
  { generic: 'enoxaparin', brands: ['Lovenox'] },
  { generic: 'clopidogrel', brands: ['Plavix'] },
  { generic: 'ticagrelor', brands: ['Brilinta'] },
  { generic: 'acetylsalicylic acid', brands: ['Aspirin'] },
  { generic: 'nitroglycerin', brands: ['Nitrostat', 'Nitro-Dur'] },
  { generic: 'isosorbide dinitrate', brands: ['Isordil'] },
  { generic: 'isosorbide mononitrate', brands: ['Imdur'] },
  { generic: 'atorvastatin', brands: ['Lipitor'] },
  { generic: 'rosuvastatin', brands: ['Crestor'] },
  { generic: 'simvastatin', brands: ['Zocor'] },
  { generic: 'pravastatin', brands: ['Pravachol'] },
  { generic: 'ezetimibe', brands: ['Zetia'] },
  { generic: 'sacubitril/valsartan', brands: ['Entresto'] },
  { generic: 'hydralazine', brands: ['Apresoline'] },

  // Respiratory
  { generic: 'salbutamol', brands: ['Ventolin'] },
  { generic: 'ipratropium', brands: ['Atrovent'] },
  { generic: 'tiotropium', brands: ['Spiriva'] },
  { generic: 'fluticasone', brands: ['Flovent'] },
  { generic: 'budesonide', brands: ['Pulmicort'] },
  { generic: 'fluticasone/salmeterol', brands: ['Advair'] },
  { generic: 'budesonide/formoterol', brands: ['Symbicort'] },
  { generic: 'montelukast', brands: ['Singulair'] },
  { generic: 'prednisone', brands: ['Deltasone'] },
  { generic: 'dexamethasone', brands: ['Decadron'] },
  { generic: 'methylprednisolone', brands: ['Solu-Medrol'] },
  { generic: 'theophylline', brands: ['Theo-Dur'] },

  // Endocrine / Diabetes
  { generic: 'metformin', brands: ['Glucophage'] },
  { generic: 'gliclazide', brands: ['Diamicron'] },
  { generic: 'glimepiride', brands: ['Amaryl'] },
  { generic: 'sitagliptin', brands: ['Januvia'] },
  { generic: 'empagliflozin', brands: ['Jardiance'] },
  { generic: 'dapagliflozin', brands: ['Forxiga'] },
  { generic: 'canagliflozin', brands: ['Invokana'] },
  { generic: 'liraglutide', brands: ['Victoza'] },
  { generic: 'semaglutide', brands: ['Ozempic', 'Rybelsus'] },
  { generic: 'dulaglutide', brands: ['Trulicity'] },
  { generic: 'insulin glargine', brands: ['Lantus', 'Basaglar'] },
  { generic: 'insulin lispro', brands: ['Humalog'] },
  { generic: 'insulin aspart', brands: ['NovoRapid'] },
  { generic: 'insulin NPH', brands: ['Humulin N', 'Novolin ge NPH'] },
  { generic: 'insulin regular', brands: ['Humulin R', 'Novolin ge Toronto'] },
  { generic: 'levothyroxine', brands: ['Synthroid', 'Eltroxin'] },
  { generic: 'methimazole', brands: ['Tapazole'] },
  { generic: 'propylthiouracil', brands: ['PTU'] },

  // GI
  { generic: 'omeprazole', brands: ['Losec'] },
  { generic: 'pantoprazole', brands: ['Pantoloc', 'Tecta'] },
  { generic: 'esomeprazole', brands: ['Nexium'] },
  { generic: 'lansoprazole', brands: ['Prevacid'] },
  { generic: 'ranitidine', brands: ['Zantac'] },
  { generic: 'famotidine', brands: ['Pepcid'] },
  { generic: 'metoclopramide', brands: ['Maxeran', 'Reglan'] },
  { generic: 'ondansetron', brands: ['Zofran'] },
  { generic: 'dimenhydrinate', brands: ['Gravol'] },
  { generic: 'loperamide', brands: ['Imodium'] },
  { generic: 'bisacodyl', brands: ['Dulcolax'] },
  { generic: 'lactulose', brands: ['Duphalac'] },
  { generic: 'polyethylene glycol', brands: ['Lax-A-Day', 'RestoraLAX'] },
  { generic: 'mesalamine', brands: ['Asacol', 'Pentasa', 'Salofalk'] },
  { generic: 'sucralfate', brands: ['Sulcrate'] },

  // Pain / Analgesics
  { generic: 'acetaminophen', brands: ['Tylenol'] },
  { generic: 'ibuprofen', brands: ['Advil', 'Motrin'] },
  { generic: 'naproxen', brands: ['Aleve', 'Naprosyn'] },
  { generic: 'diclofenac', brands: ['Voltaren'] },
  { generic: 'celecoxib', brands: ['Celebrex'] },
  { generic: 'morphine', brands: ['MS Contin', 'Statex'] },
  { generic: 'hydromorphone', brands: ['Dilaudid'] },
  { generic: 'oxycodone', brands: ['OxyNEO', 'Supeudol'] },
  { generic: 'fentanyl', brands: ['Duragesic'] },
  { generic: 'codeine', brands: ['Codeine Contin'] },
  { generic: 'tramadol', brands: ['Ultram', 'Zytram'] },
  { generic: 'gabapentin', brands: ['Neurontin'] },
  { generic: 'pregabalin', brands: ['Lyrica'] },
  { generic: 'amitriptyline', brands: ['Elavil'] },
  { generic: 'naloxone', brands: ['Narcan'] },
  { generic: 'ketorolac', brands: ['Toradol'] },

  // CNS / Psychiatric
  { generic: 'sertraline', brands: ['Zoloft'] },
  { generic: 'escitalopram', brands: ['Cipralex'] },
  { generic: 'citalopram', brands: ['Celexa'] },
  { generic: 'fluoxetine', brands: ['Prozac'] },
  { generic: 'paroxetine', brands: ['Paxil'] },
  { generic: 'venlafaxine', brands: ['Effexor'] },
  { generic: 'duloxetine', brands: ['Cymbalta'] },
  { generic: 'bupropion', brands: ['Wellbutrin'] },
  { generic: 'mirtazapine', brands: ['Remeron'] },
  { generic: 'trazodone', brands: ['Desyrel'] },
  { generic: 'quetiapine', brands: ['Seroquel'] },
  { generic: 'olanzapine', brands: ['Zyprexa'] },
  { generic: 'risperidone', brands: ['Risperdal'] },
  { generic: 'aripiprazole', brands: ['Abilify'] },
  { generic: 'haloperidol', brands: ['Haldol'] },
  { generic: 'lithium', brands: ['Lithane', 'Carbolith'] },
  { generic: 'valproic acid', brands: ['Depakene', 'Epival'] },
  { generic: 'carbamazepine', brands: ['Tegretol'] },
  { generic: 'lamotrigine', brands: ['Lamictal'] },
  { generic: 'phenytoin', brands: ['Dilantin'] },
  { generic: 'levetiracetam', brands: ['Keppra'] },
  { generic: 'lorazepam', brands: ['Ativan'] },
  { generic: 'diazepam', brands: ['Valium'] },
  { generic: 'clonazepam', brands: ['Rivotril'] },
  { generic: 'midazolam', brands: ['Versed'] },
  { generic: 'zopiclone', brands: ['Imovane'] },
  { generic: 'zolpidem', brands: ['Sublinox'] },
  { generic: 'methylphenidate', brands: ['Ritalin', 'Concerta'] },
  { generic: 'lisdexamfetamine', brands: ['Vyvanse'] },
  { generic: 'donepezil', brands: ['Aricept'] },
  { generic: 'memantine', brands: ['Ebixa'] },

  // Anti-infectives
  { generic: 'amoxicillin', brands: ['Amoxil'] },
  { generic: 'amoxicillin/clavulanate', brands: ['Clavulin'] },
  { generic: 'cephalexin', brands: ['Keflex'] },
  { generic: 'ceftriaxone', brands: ['Rocephin'] },
  { generic: 'azithromycin', brands: ['Zithromax'] },
  { generic: 'clarithromycin', brands: ['Biaxin'] },
  { generic: 'ciprofloxacin', brands: ['Cipro'] },
  { generic: 'levofloxacin', brands: ['Levaquin'] },
  { generic: 'moxifloxacin', brands: ['Avelox'] },
  { generic: 'trimethoprim/sulfamethoxazole', brands: ['Septra', 'Bactrim'] },
  { generic: 'metronidazole', brands: ['Flagyl'] },
  { generic: 'clindamycin', brands: ['Dalacin'] },
  { generic: 'vancomycin', brands: ['Vancocin'] },
  { generic: 'piperacillin/tazobactam', brands: ['Tazocin'] },
  { generic: 'meropenem', brands: ['Merrem'] },
  { generic: 'fluconazole', brands: ['Diflucan'] },
  { generic: 'nitrofurantoin', brands: ['MacroBID'] },
  { generic: 'doxycycline', brands: ['Vibramycin'] },
  { generic: 'oseltamivir', brands: ['Tamiflu'] },
  { generic: 'acyclovir', brands: ['Zovirax'] },
  { generic: 'valacyclovir', brands: ['Valtrex'] },

  // Musculoskeletal
  { generic: 'allopurinol', brands: ['Zyloprim'] },
  { generic: 'colchicine', brands: ['Colchicine'] },
  { generic: 'methotrexate', brands: ['Metoject'] },
  { generic: 'hydroxychloroquine', brands: ['Plaquenil'] },
  { generic: 'alendronate', brands: ['Fosamax'] },
  { generic: 'denosumab', brands: ['Prolia'] },
  { generic: 'cyclobenzaprine', brands: ['Flexeril'] },
  { generic: 'baclofen', brands: ['Lioresal'] },

  // Dermatology
  { generic: 'mupirocin', brands: ['Bactroban'] },
  { generic: 'betamethasone', brands: ['Betaderm'] },
  { generic: 'hydrocortisone', brands: ['Cortate'] },
  { generic: 'permethrin', brands: ['Nix', 'Kwellada-P'] },

  // Allergy / Immune
  { generic: 'diphenhydramine', brands: ['Benadryl'] },
  { generic: 'cetirizine', brands: ['Reactine'] },
  { generic: 'loratadine', brands: ['Claritin'] },
  { generic: 'fexofenadine', brands: ['Allegra'] },
  { generic: 'epinephrine', brands: ['EpiPen'] },

  // Renal / Electrolytes
  { generic: 'potassium chloride', brands: ['Slow-K', 'K-Dur'] },
  { generic: 'calcium carbonate', brands: ['Tums', 'Caltrate'] },
  { generic: 'sodium polystyrene sulfonate', brands: ['Kayexalate'] },
  { generic: 'sevelamer', brands: ['Renagel'] },
  { generic: 'desmopressin', brands: ['DDAVP'] },
  { generic: 'epoetin alfa', brands: ['Eprex'] },

  // Hematology
  { generic: 'ferrous sulfate', brands: ['Fer-In-Sol'] },
  { generic: 'ferrous gluconate', brands: ['Fergon'] },
  { generic: 'iron sucrose', brands: ['Venofer'] },
  { generic: 'cyanocobalamin', brands: ['Vitamin B12'] },
  { generic: 'folic acid', brands: ['Folvite'] },
  { generic: 'tranexamic acid', brands: ['Cyklokapron'] },
  { generic: 'filgrastim', brands: ['Neupogen'] },

  // Other
  { generic: 'tamsulosin', brands: ['Flomax'] },
  { generic: 'finasteride', brands: ['Proscar', 'Propecia'] },
  { generic: 'sildenafil', brands: ['Viagra', 'Revatio'] },
  { generic: 'latanoprost', brands: ['Xalatan'] },
  { generic: 'timolol', brands: ['Timoptic'] },
  { generic: 'domperidone', brands: ['Motilium'] },
  { generic: 'oxybutynin', brands: ['Ditropan'] },
  { generic: 'solifenacin', brands: ['Vesicare'] },
  { generic: 'phenazopyridine', brands: ['Pyridium'] },
  { generic: 'succinylcholine', brands: ['Anectine'] },
  { generic: 'propofol', brands: ['Diprivan'] },
  { generic: 'ketamine', brands: ['Ketalar'] },
  { generic: 'atropine', brands: ['Atropine'] },
  { generic: 'dopamine', brands: ['Intropin'] },
  { generic: 'norepinephrine', brands: ['Levophed'] },
  { generic: 'dobutamine', brands: ['Dobutrex'] },
  { generic: 'vasopressin', brands: ['Vasostrict'] },
  { generic: 'alteplase', brands: ['Activase'] },
  { generic: 'calcium gluconate', brands: ['Calcium Gluconate'] },
  { generic: 'magnesium sulfate', brands: ['Magnesium Sulfate'] },
  { generic: 'sodium bicarbonate', brands: ['Sodium Bicarbonate'] },
  { generic: 'mannitol', brands: ['Osmitrol'] },
  { generic: 'dantrolene', brands: ['Dantrium'] },
  { generic: 'flumazenil', brands: ['Anexate'] },
  { generic: 'N-acetylcysteine', brands: ['Mucomyst', 'Acetadote'] },
  { generic: 'activated charcoal', brands: ['Charcodote'] },
  { generic: 'protamine', brands: ['Protamine'] },
  { generic: 'vitamin K', brands: ['Phytonadione', 'Mephyton'] },
];

/**
 * Build a flat searchable list: each entry is { label, generic, brand }.
 * Searching matches against both generic and brand names.
 */
export function buildSearchIndex() {
  const entries = [];
  for (const drug of DRUGS) {
    entries.push({
      label: drug.generic,
      generic: drug.generic,
      brand: drug.brands[0],
      type: 'generic',
    });
    for (const brand of drug.brands) {
      entries.push({
        label: brand,
        generic: drug.generic,
        brand,
        type: 'brand',
      });
    }
  }
  return entries;
}

export function searchDrugs(query, index) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  const matches = index.filter(e => e.label.toLowerCase().includes(q));
  // Deduplicate by generic name, preferring exact prefix matches
  const seen = new Set();
  const sorted = matches.sort((a, b) => {
    const aStarts = a.label.toLowerCase().startsWith(q) ? 0 : 1;
    const bStarts = b.label.toLowerCase().startsWith(q) ? 0 : 1;
    if (aStarts !== bStarts) return aStarts - bStarts;
    return a.label.length - b.label.length;
  });
  const results = [];
  for (const entry of sorted) {
    const key = `${entry.generic}__${entry.label}`;
    if (!seen.has(key)) {
      seen.add(key);
      results.push(entry);
    }
    if (results.length >= 8) break;
  }
  return results;
}

export default DRUGS;
