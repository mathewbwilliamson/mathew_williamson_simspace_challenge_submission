export type DogBreed = keyof DogBreeds;

export interface DogBreeds {
  affenpinscher: [];
  african: [];
  airedale: [];
  akita: [];
  appenzeller: [];
  australian: string[];
  basenji: [];
  beagle: [];
  bluetick: [];
  borzoi: [];
  bouvier: [];
  boxer: [];
  brabancon: [];
  briard: [];
  buhund: string[];
  bulldog: string[];
  bullterrier: string[];
  cattledog: string[];
  chihuahua: [];
  chow: [];
  clumber: [];
  cockapoo: [];
  collie: string[];
  coonhound: [];
  corgi: string[];
  cotondetulear: [];
  dachshund: [];
  dalmatian: [];
  dane: string[];
  deerhound: string[];
  dhole: [];
  dingo: [];
  doberman: [];
  elkhound: string[];
  entlebucher: [];
  eskimo: [];
  finnish: string[];
  frise: string[];
  germanshepherd: [];
  greyhound: string[];
  groenendael: [];
  havanese: [];
  hound: string[];
  husky: [];
  keeshond: [];
  kelpie: [];
  komondor: [];
  kuvasz: [];
  labradoodle: [];
  labrador: [];
  leonberg: [];
  lhasa: [];
  malamute: [];
  malinois: [];
  maltese: [];
  mastiff: string[];
  mexicanhairless: [];
  mix: [];
  mountain: string[];
  newfoundland: [];
  otterhound: [];
  ovcharka: string[];
  papillon: [];
  pekinese: [];
  pembroke: [];
  pinscher: string[];
  pitbull: [];
  pointer: string[];
  pomeranian: [];
  poodle: string[];
  pug: [];
  puggle: [];
  pyrenees: [];
  redbone: [];
  retriever: string[];
  ridgeback: string[];
  rottweiler: [];
  saluki: [];
  samoyed: [];
  schipperke: [];
  schnauzer: string[];
  setter: string[];
  sheepdog: string[];
  shiba: [];
  shihtzu: [];
  spaniel: string[];
  springer: string[];
  stbernard: [];
  terrier: string[];
  tervuren: [];
  vizsla: [];
  waterdog: string[];
  weimaraner: [];
  whippet: [];
  wolfhound: string[];
}

export interface DogBreedResponse {
  message: DogBreeds;
  status: string;
}
