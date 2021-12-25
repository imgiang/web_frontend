export default interface Industry {
  _id:              string;
  level:            number;
  name:             string;
  id:               string;
  names:            Names;
  source_id:        string;
  source_parent_id: string;
  parent_id:        string;
  types:            string[];
  source:           string;
  source_url:       string;
  synonyms:         Synonyms;
}

export interface Names {
  en: string;
  vi: string;
}

export interface Synonyms {
  en: any[];
  vi: any[];
}
