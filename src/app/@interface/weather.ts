export interface Weather {
  records: Records;
  result: result;
  success: boolean;
}

export interface Records {
  Locations: Array<Locations>;
}

export interface Locations {
  Dataid: string;
  DatasetDescription: string;
  Location: Location;
  LocationsName: string;
}

export interface Location {
  Geocode: number;
  Latitude: number;
  LocationName: string;
  Longitude: number;
  WeatherElement: Array<WeatherElement>
}

export interface WeatherElement {
  ElementName: string;
  Time: Array<Time>;
}

export interface Time {
  DataTime?: string;
  EndTime?: string;
  StartTime?: string;
  ElementValue: Array<ElementValue>;
}

export interface ElementValue {
  Temperature?: number;
  DewPoint?: number;
  RelativeHumidity?: number;
  ApparentTemperature?: number;
  ComfortIndex?: number;
  ComfortIndexDescription?: string;
  BeaufortScale?: number;
  WindSpeed?: number;
  WindDirection?: string;
  ProbabilityOfPrecipitation?: number;
  Weather?: string;
  WeatherCode?: number;
  WeatherDescription?: string;
}

export interface result {
  fields: Array<Fields>;
  resource_id : string;
}

export interface Fields {
  id: string;
  type: string;
}

// f12> 網路> 找到API> 回應> 複製全部> 到寫interface的地方>
// shift + ctrl + alt + v (兩下)
// 要自己加 export

// interface RootObject {
//   success: string;
//   result: Result;
//   records: Records;
// }

// interface Records {
//   Locations: Location2[];
// }

// interface Location2 {
//   DatasetDescription: string;
//   LocationsName: string;
//   Dataid: string;
//   Location: Location[];
// }

// interface Location {
//   LocationName: string;
//   Geocode: string;
//   Latitude: string;
//   Longitude: string;
//   WeatherElement: WeatherElement[];
// }

// interface WeatherElement {
//   ElementName: string;
//   Time: Time[];
// }

// interface Time {
//   DataTime?: string;
//   ElementValue: ElementValue[];
//   StartTime?: string;
//   EndTime?: string;
// }

// interface ElementValue {
//   Temperature?: string;
//   DewPoint?: string;
//   RelativeHumidity?: string;
//   ApparentTemperature?: string;
//   ComfortIndex?: string;
//   ComfortIndexDescription?: string;
//   WindSpeed?: string;
//   BeaufortScale?: string;
//   WindDirection?: string;
//   ProbabilityOfPrecipitation?: string;
//   Weather?: string;
//   WeatherCode?: string;
//   WeatherDescription?: string;
// }

// interface Result {
//   resource_id: string;
//   fields: Field[];
// }

// interface Field {
//   id: string;
//   type: string;
// }
