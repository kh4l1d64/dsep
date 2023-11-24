import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { SearchDTO } from './dto/search.dto';
import { SearchResults } from './dto/search-results.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  computeSearchResults(searchDto: SearchDTO) {


    // dummy
    return {
      "data": {
        "context": {
          "ttl": "PT10M",
          "action": "on_search",
          "timestamp": "2023-11-23T05:50:43.678Z",
          "message_id": "d526162e-afb1-431c-8b2d-ef04f2760548",
          "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
          "domain": `${searchDto.context.domain}`,
          "version": "1.1.0",
          "bap_id": `${searchDto.context.bap_id}`,
          "bap_uri": `${searchDto.context.bap_uri}`,
          "location": {
              "city": {
                  "name": "Bangalore",
                  "code": "std:080"
              },
              "country": {
                  "name": "India",
                  "code": "IND"
              }
          },
          "bpp_id": `${searchDto.context.bpp_id}`,
          "bpp_uri":`${searchDto.context.bpp_uri}`
        },
        "message": {
          "catalog": {
              "descriptor": {
                  "name": "Catalog for undefined"
              },
              "providers": [
                  {
                      "id": "CEC",
                      "descriptor": {
                          "name": "CEC"
                      },
                      "categories": [
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Physics",
                              "parent_category_id": "Physics",
                              "descriptor": {
                                  "name": "Physics"
                              }
                          },
                          {
                              "id": "ELEC_ENGG",
                              "parent_category_id": "ELEC_ENGG",
                              "descriptor": {
                                  "name": "ELEC_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Management",
                              "parent_category_id": "Management",
                              "descriptor": {
                                  "name": "Management"
                              }
                          },
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Law_SUB",
                              "parent_category_id": "Law_SUB",
                              "descriptor": {
                                  "name": "Law_SUB"
                              }
                          },
                          {
                              "id": "SCHOOL",
                              "parent_category_id": "SCHOOL",
                              "descriptor": {
                                  "name": "SCHOOL"
                              }
                          },
                          {
                              "id": "MECH_ENGG",
                              "parent_category_id": "MECH_ENGG",
                              "descriptor": {
                                  "name": "MECH_ENGG"
                              }
                          }
                      ],
                      "items": [
                          {
                              "id": "Q291cnNlTGlzdDovbmQyX2NlYzI0X2NzMDI=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzI0X2NzMDI=",
                              "descriptor": {
                                  "name": ". ANIMATIONs",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec20_cs13/001.gif"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "COMP_SCI_ENGG",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P15W",
                                  "range": {
                                      "start": "2024-01-14T18:30:00.000000Z",
                                      "end": "2024-04-29T18:30:00.000000Z"
                                  }
                              },
                              "rating": "1",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "4"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Dr. Abhishek Kumar & Dr. Achintya Singhal*"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "*Banaras Hindu University II BHU"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.swayam2.ac.in/cec24_cs02/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-02-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          },
                          {
                              "id": "Q291cnNlTGlzdDovbmQyX2NlYzI0X2dlMTc=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzI0X2dlMTc=",
                              "descriptor": {
                                  "name": "ACADEMIC WRITING (With Research & Publication Ethics Part A & Part B)",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec24_ge17/AW%20Logo%20White.png"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "Multidisciplinary",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P15W",
                                  "range": {
                                      "start": "2024-01-14T18:30:00.000000Z",
                                      "end": "2024-05-05T18:29:00.000000Z"
                                  }
                              },
                              "rating": "5",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "4"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Dr Ajay Semalty"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "HNB Garhwal University (A Central University) Srinagar Garhwal (Uttarakhand)"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.swayam2.ac.in/cec24_ge17/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-02-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          },
                          {
                              "id": "Q291cnNlTGlzdDovbmQyX2NlYzI0X2x3MDU=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzI0X2x3MDU=",
                              "descriptor": {
                                  "name": "Access to Justice",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec20_hs25/justice.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "Law_SUB",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P15W",
                                  "range": {
                                      "start": "2024-01-01T18:30:00.000000Z",
                                      "end": "2024-04-29T18:30:00.000000Z"
                                  }
                              },
                              "rating": "0",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "4"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Dr Bharti Yadav"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "National Law University Delhi"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.swayam2.ac.in/cec24_lw05/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-03-15T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          }
                      ]
                  },
                  {
                      "id": "NPTEL",
                      "descriptor": {
                          "name": "NPTEL"
                      },
                      "categories": [
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Physics",
                              "parent_category_id": "Physics",
                              "descriptor": {
                                  "name": "Physics"
                              }
                          },
                          {
                              "id": "ELEC_ENGG",
                              "parent_category_id": "ELEC_ENGG",
                              "descriptor": {
                                  "name": "ELEC_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Management",
                              "parent_category_id": "Management",
                              "descriptor": {
                                  "name": "Management"
                              }
                          },
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Law_SUB",
                              "parent_category_id": "Law_SUB",
                              "descriptor": {
                                  "name": "Law_SUB"
                              }
                          },
                          {
                              "id": "SCHOOL",
                              "parent_category_id": "SCHOOL",
                              "descriptor": {
                                  "name": "SCHOOL"
                              }
                          },
                          {
                              "id": "MECH_ENGG",
                              "parent_category_id": "MECH_ENGG",
                              "descriptor": {
                                  "name": "MECH_ENGG"
                              }
                          }
                      ],
                      "items": [
                          {
                              "id": "Q291cnNlTGlzdDovbmQxX25vYzI0X3BoMDI=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQxX25vYzI0X3BoMDI=",
                              "descriptor": {
                                  "name": "A Brief Course On Superconductivity",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam2-node/Jan%25202020%2520Course%2520card%2520images/noc20_ph06.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "Physics",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P4W",
                                  "range": {
                                      "start": "2024-01-21T18:30:00.000000Z",
                                      "end": "2024-02-15T18:30:00.000000Z"
                                  }
                              },
                              "rating": "3",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "1"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Saurabh Basu"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "IIT Guwahati"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.nptel.ac.in/noc24_ph02/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-01-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          },
                          {
                              "id": "Q291cnNlTGlzdDovbmQxX25vYzI0X2VlMDk=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQxX25vYzI0X2VlMDk=",
                              "descriptor": {
                                  "name": "A brief introduction of Micro - Sensors",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam2-node/Jan%25202020%2520Course%2520card%2520images/noc20_ee52.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "ELEC_ENGG",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P4W",
                                  "range": {
                                      "start": "2024-01-21T18:30:00.000000Z",
                                      "end": "2024-02-15T18:30:00.000000Z"
                                  }
                              },
                              "rating": "1",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "1"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Santanu Talukder"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "IISER Bhopal"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.nptel.ac.in/noc24_ee09/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-01-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          },
                          {
                              "id": "Q291cnNlTGlzdDovbmQxX25vYzI0X21nMDU=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQxX25vYzI0X21nMDU=",
                              "descriptor": {
                                  "name": "AI in Marketing",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam2-node/Jan2024_coursecard_images/noc24-mg05.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "Management",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P12W",
                                  "range": {
                                      "start": "2024-01-21T18:30:00.000000Z",
                                      "end": "2024-04-11T18:30:00.000000Z"
                                  }
                              },
                              "rating": "4",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "3"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Zillur Rahman"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "IIT Roorkee"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.nptel.ac.in/noc24_mg05/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-01-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          },
                          {
                              "id": "Q291cnNlTGlzdDovbmQxX25vYzI0X2NzMTM=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQxX25vYzI0X2NzMTM=",
                              "descriptor": {
                                  "name": "AI:Constraint Satisfaction",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam2-node/Jan_2021_course_cardimage/noc21-cs27.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "COMP_SCI_ENGG",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P8W",
                                  "range": {
                                      "start": "2024-01-21T18:30:00.000000Z",
                                      "end": "2024-03-14T18:30:00.000000Z"
                                  }
                              },
                              "rating": "1",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "2"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Deepak Khemani"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "IIT Madras"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.nptel.ac.in/noc24_cs13/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-01-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          },
                          {
                              "id": "Q291cnNlTGlzdDovbmQxX25vYzI0X21lMDU=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQxX25vYzI0X21lMDU=",
                              "descriptor": {
                                  "name": "Acoustic Materials And Metamaterials",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam2-node/Jan%25202020%2520Course%2520card%2520images/noc20_me09.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "MECH_ENGG",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P8W",
                                  "range": {
                                      "start": "2024-01-21T18:30:00.000000Z",
                                      "end": "2024-03-14T18:30:00.000000Z"
                                  }
                              },
                              "rating": "0",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "2"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Sneha Singh"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "IIT Roorkee"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.nptel.ac.in/noc24_me05/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-01-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          }
                      ]
                  },
                  {
                      "id": "UGC",
                      "descriptor": {
                          "name": "UGC"
                      },
                      "categories": [
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Physics",
                              "parent_category_id": "Physics",
                              "descriptor": {
                                  "name": "Physics"
                              }
                          },
                          {
                              "id": "ELEC_ENGG",
                              "parent_category_id": "ELEC_ENGG",
                              "descriptor": {
                                  "name": "ELEC_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Management",
                              "parent_category_id": "Management",
                              "descriptor": {
                                  "name": "Management"
                              }
                          },
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Law_SUB",
                              "parent_category_id": "Law_SUB",
                              "descriptor": {
                                  "name": "Law_SUB"
                              }
                          },
                          {
                              "id": "SCHOOL",
                              "parent_category_id": "SCHOOL",
                              "descriptor": {
                                  "name": "SCHOOL"
                              }
                          },
                          {
                              "id": "MECH_ENGG",
                              "parent_category_id": "MECH_ENGG",
                              "descriptor": {
                                  "name": "MECH_ENGG"
                              }
                          }
                      ],
                      "items": [
                          {
                              "id": "Q291cnNlTGlzdDovbmQyX3VnYzI0X2dlMDI=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQyX3VnYzI0X2dlMDI=",
                              "descriptor": {
                                  "name": "Abhidhamma (Pali)",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/ugc23_ge06/Abh.jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "Multidisciplinary",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P15W",
                                  "range": {
                                      "start": "2024-01-14T18:30:00.000000Z",
                                      "end": "2024-04-30T18:29:00.000000Z"
                                  }
                              },
                              "rating": "3",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "4"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Bimalendra Kumar"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "Professor, Department Of Pāli And Buddhist Studies, Banaras Hindu University, Varanasi"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.swayam2.ac.in/ugc24_ge02/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-02-29T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          }
                      ]
                  },
                  {
                      "id": "NCERT",
                      "descriptor": {
                          "name": "NCERT"
                      },
                      "categories": [
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Physics",
                              "parent_category_id": "Physics",
                              "descriptor": {
                                  "name": "Physics"
                              }
                          },
                          {
                              "id": "ELEC_ENGG",
                              "parent_category_id": "ELEC_ENGG",
                              "descriptor": {
                                  "name": "ELEC_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Management",
                              "parent_category_id": "Management",
                              "descriptor": {
                                  "name": "Management"
                              }
                          },
                          {
                              "id": "COMP_SCI_ENGG",
                              "parent_category_id": "COMP_SCI_ENGG",
                              "descriptor": {
                                  "name": "COMP_SCI_ENGG"
                              }
                          },
                          {
                              "id": "Multidisciplinary",
                              "parent_category_id": "Multidisciplinary",
                              "descriptor": {
                                  "name": "Multidisciplinary"
                              }
                          },
                          {
                              "id": "Law_SUB",
                              "parent_category_id": "Law_SUB",
                              "descriptor": {
                                  "name": "Law_SUB"
                              }
                          },
                          {
                              "id": "SCHOOL",
                              "parent_category_id": "SCHOOL",
                              "descriptor": {
                                  "name": "SCHOOL"
                              }
                          },
                          {
                              "id": "MECH_ENGG",
                              "parent_category_id": "MECH_ENGG",
                              "descriptor": {
                                  "name": "MECH_ENGG"
                              }
                          }
                      ],
                      "items": [
                          {
                              "id": "Q291cnNlTGlzdDovbmQyX25jZTIzX3NjMjk=",
                              "parent_item_id": "Q291cnNlTGlzdDovbmQyX25jZTIzX3NjMjk=",
                              "descriptor": {
                                  "name": "Accountancy XI Part-I",
                                  "long_desc": "",
                                  "images": [
                                      {
                                          "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg"
                                      }
                                  ]
                              },
                              "price": {
                                  "currency": "INR",
                                  "value": "0"
                              },
                              "category_id": "SCHOOL",
                              "recommended": false,
                              "time": {
                                  "label": "Course Schedule",
                                  "duration": "P24W",
                                  "range": {
                                      "start": "2023-10-16T18:29:00.000000Z",
                                      "end": "2024-03-31T18:29:00.000000Z"
                                  }
                              },
                              "rating": "5",
                              "tags": [
                                  {
                                      "descriptor": {
                                          "name": "courseInfo"
                                      },
                                      "list": [
                                          {
                                              "descriptor": {
                                                  "name": "credits"
                                              },
                                              "value": "0"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "instructors"
                                              },
                                              "value": "Prof. Shipra Vaidya"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "offeringInstitue"
                                              },
                                              "value": "DESS, NCERT, New Delhi"
                                          },
                                          {
                                              "descriptor": {
                                                  "name": "url"
                                              },
                                              "value": "https://onlinecourses.swayam2.ac.in/nce23_sc29/preview"
                                          },
                                          {
                                              "decsriptor": {
                                                  "name": "enrollmentEndDate"
                                              },
                                              "value": "2024-03-01T18:29:00.000000Z"
                                          }
                                      ],
                                      "display": true
                                  }
                              ],
                              "rateable": false
                          }
                      ]
                  }
              ]
          }
        }
      }
    }
  }

  async handleSearch(searchDto: SearchDTO) {
    // TODO: Validate the search request
    // TODO: Figure out how to get the list of all onboarded providers (env vars or something else?)

    // let searchResponse: any = await requestForwarder(
    //   process.env.MOCK_API_URI,
    //   searchDto,
    //   this.httpService,
    // );
    searchDto.context.domain = 'onest:learning-experiences';
    searchDto.context.action = 'search';
    let searchResponse:any = this.computeSearchResults(searchDto);
    // console.log("Here is the search Response: ", searchResponse);
    searchResponse = searchResponse.data;
    console.log('search response: ', JSON.stringify(searchResponse, null, 2));
    // add BPP ID and BPP URI in the context here
    searchResponse.context.action = 'on_search';
    searchResponse.context.bpp_id = 'bpp.sandbox.compass.samagra.io';
    searchResponse.context.bpp_uri = 'https://bpp-compass.loca.lt/';
    try {
      const authHeader = await createAuthorizationHeader(searchResponse).then(
        (res) => {
          console.log("Auth header created and here is the response: ",res);
          return res;
        },
      );
      console.log('auth header: ', authHeader);

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder');
      await lastValueFrom(
        this.httpService.post(
          searchDto.context.bap_uri + 'on_search',
          searchResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
