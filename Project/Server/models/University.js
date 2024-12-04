import mongoose from 'mongoose';

// Program Schema
const programSchema = new mongoose.Schema({
  Program_Name: {
    type: String,
    required: true,
  },
  degree_name: {
    type: String,
    required: true,
  },
  degree_url: {
    type: String, // degree_url should be a separate field
    required: true,
  },
  faculty_name: {
    type: String,
    required: true,
  },
  full_url: {
    type: String,
    required: true,
  },
  program_details: {
    Faculty: {
      type: String,
      required: true, // 
    },
    Duration: {
      type: String,
      required: true, // 
    },
    Program_Components: {
      type: String,
      required: true, // Specify required here if needed
    },
    Academic_Unit: {
      type: String,
      required: true, // Specify required here if needed
    },
    Specialization: {
      type: String,
      required: true, // Specify required here if needed
    },
    Tuition_Fees: {
      type: String,
      required: true, // Specify required here if needed
    },
  },
  test_scores: {
    english_test_submission_time: {
      type: String,
      required: true, // Specify required if necessary
    },
    toefl_overall_score_requirement: {
      type: Number,
      required: true,
    },
    toefl_score_requirement: {
      reading: {
        type: Number,
        required: true,
      },
      writing: {
        type: Number,
        required: true,
      },
      listening: {
        type: Number,
        required: true,
      },
      speaking: {
        type: Number,
        required: true,
      },
    },
    ielts_overall_score_requirement: {
      type: Number,
      required: true,
    },
    ielts_score_requirement: {
      reading: {
        type: Number,
        required: true,
      },
      writing: {
        type: Number,
        required: true,
      },
      listening: {
        type: Number,
        required: true,
      },
      speaking: {
        type: Number,
        required: true,
      },
    },
    gre_requirement: {
      type: String,
      required: false, // Optional
    },
  },
  intakes: {
    September_2025_Intake: {
      application_date: {
        type: String,
        required: true,
      },
      Canadian_application_deadline: {
        type: String,
        required: true,
      },
      Canadian_transcript_deadline: {
        type: String,
        required: true,
      },
      Canadian_refferee_deadline: {
        type: String,
        required: true,
      },
      international_application_deadline: {
        type: String,
        required: true,
      },
      international_transcript_deadline: {
        type: String,
        required: true,
      },
      international_refferee_deadline: {
        type: String,
        required: true,
      },
    },
    January_2026_Intake: {
      application_date: {
        type: String,
        required: true,
      },
      Canadian_application_deadline: {
        type: String,
        required: true,
      },
      Canadian_transcript_deadline: {
        type: String,
        required: true,
      },
      Canadian_refferee_deadline: {
        type: String,
        required: true,
      },
      international_application_deadline: {
        type: String,
        required: true,
      },
      international_transcript_deadline: {
        type: String,
        required: true,
      },
      international_refferee_deadline: {
        type: String,
        required: true,
      },
    },
  },
  application_details: {
    type: String,
    required: true,
  },
  tuition_info: {
    application_fees: {
      Domestic_application_fees: {
        type: Number,
        required: true,
      },
      International_application_fees: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    tution_fees_Installments_per_year: {
      Domestic_Installments_per_year_fees: {
        type: Number,
        required: true,
      },
      International_Installments_per_year_fees: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    Tuition_Fees_per_installment: {
      Domestic_per_Installments_Tuition_Fees: {
        type: Number,
        required: true,
      },
      International_Installments_Tution_Fees: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    Tuition_fees_per_year: {
      Domestic_Tuition_Fees_per_year: {
        type: Number,
        required: true,
      },
      International_Tution_fees_per_year: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    ITA_per_year: {
      Domestic_ITA_per_year: {
        type: Number,
        required: true,
      },
      International_ITA_per_year: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    Student_Fees_yearly: {
      type: Number,
      required: true,
    },
  },
  Application_links: {
    Application_form: {
      type: String,
      required: true,
    },
    Application_link: {
      type: String,
      required: true,
    },
  },
  further_info: {
    calendar_url: {
      type: String,
      required: true,
    },
    prog_website: {
      type: String,
      required: true,
    },
    Faculty_Overview: {
      type: String,
      required: true,
    },
    classification: {
      type: String,
      required: true,
    },
  },
  ranking: {
    type: Number,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

// University Schema
const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  website: {
    type: String,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  programs: [programSchema], // Embedding the program schema
  otherDetails: {
    type: Map,
    of: String,
  },
});

const University = mongoose.model('University', universitySchema);
export default University;
