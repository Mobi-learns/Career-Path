const express = require("express");
const ejs = require("ejs");



const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://admin-mohdshahab:SABU%40kv2@cluster0.bmgof.mongodb.net/CollegeDB?retryWrites=true&w=majority', {useNewUrlParser:true});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const collegeSchema= new mongoose.Schema ({
    _id:Number,
    college_name:String,
    full_name:String,
    also_known_as:String,
    location:String,
    Institute_type:String,
    establishment_year:Number,
    campus_area:String,
    ranking:Number,
    mode_of_adm:String,

    courses_offered:{
        course1:{
            name_of_course:String,
            trade_1:String,
            trade_2:String,
            trade_3:String,
            trade_4:String,
            trade_5:String,
            trade_6:String,
            trade_7:String,
            trade_8:String
        },
        course2:{
            name_of_course:String,
            trade_1:String,
            trade_2:String,
            trade_3:String,
            trade_4:String,
            trade_5:String,
        },
        course3:{
            name_of_course:String,
            trade_1:String,
            trade_2:String,
            trade_3:String,
        }
    },

    seat_matrix:{ 
        b_tech:Number,
        bsc:String
    },

    fee:{
        institute_fee:String,
        hostel_fee:String,
        total_fee:String
    },

    cutoff:{
        year_1:{
            general:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            obc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            ews:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            sc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            st:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
        },

        year_2:{
            general:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            obc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            ews:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            sc:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
            st:{
                branch:[{
                    branch_name:String,
                    opening_rank:Number,
                    closing_rank:Number
                }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:String,
            high_sal:String,
            percent_placed:String,
            no_of_companies:Number
        },

        year_2:{
            avg_sal:String,
            high_sal:String,
            percent_placed:String,
            no_of_companies:Number
        }
    }

});

 const College=mongoose.model("College",collegeSchema);

 const iitkgp=new College({
    _id:1,
    college_name:"IIT KHARAGPUR",
    full_name:"INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR",
    also_known_as:"IIT-KGP",
    location:"Indian Institute of Technology, Post Technology, Paschim Midnapur, Kharagpur, West Bengal - 721302",
    Institute_type:"Government Institute",
    establishment_year:1951,
    campus_area:"2100 acre",
    ranking:6,
    mode_of_adm:"JEE(Advanced)",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"B.Sc",
            trade_1:"Physics",
            trade_2:"Chemistry",
            trade_3:"Mathematics",
            trade_4:"Economics",
            trade_5:"Mathematics and Computing"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:700,
        bsc:300
    },

    fee:{
        institute_fee:"₹1,13,063 per semester",
        hostel_fee:"₹35,605 per semester",
        total_fee:"₹1,48,663 per semester"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:207, closing_rank:285 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:311, closing_rank:1132 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"18 lakhs per annum",
            high_sal:"1.5 crore per annum",
            percent_placed:"89%",
            no_of_companies:100
        },

        year_2:{
            avg_sal:"19 lakhs per annum",
            high_sal:"1.2 crore per annum",
            percent_placed:"93%",
            no_of_companies:104
        }
    }

});

const iitdli=new College({
    _id:2,
    college_name:"IIT DELHI",
    full_name:"INDIAN INSTITUTE OF TECHNOLOGY DELHI",
    also_known_as:"IITD",
    location:"Indian Institute of Technology, Hauz Khas, New Delhi, Delhi - 110016",
    Institute_type:"Government Institute",
    establishment_year:1961,
    campus_area:"320 acres",
    ranking:2,
    mode_of_adm:"JEE(Advanced)",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"B.Sc",
            trade_1:"Physics",
            trade_2:"Chemistry",
            trade_3:"Mathematics",
            trade_4:"Economics",
            trade_5:"Mathematics and Computing"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:780,
        bsc:300
    },

    fee:{
        institute_fee:"₹1,13,063 per semester",
        hostel_fee:"₹35,605 per semester",
        total_fee:"₹1,48,663 per semester"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:207, closing_rank:285 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:311, closing_rank:1132 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"21 lakhs per annum",
            high_sal:"1.6 crore per annum",
            percent_placed:"94%",
            no_of_companies:107
        },

        year_2:{
            avg_sal:"17 lakhs per annum",
            high_sal:"1.8 crore per annum",
            percent_placed:"93%",
            no_of_companies:110
        }
    }

});

const iitb=new College({
    _id:3,
    college_name:"IIT BOMBAY",
    full_name:"INDIAN INSTITUTE OF TECHNOLOGY BOMBAY",
    also_known_as:"IITB",
    location:"Indian Institute of Technology, Powai, Mumbai, Maharashtra - 400076",
    Institute_type:"Government Institute",
    establishment_year:1948,
    campus_area:"545 acre",
    ranking:3,
    mode_of_adm:"JEE(Advanced)",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"B.Sc",
            trade_1:"Physics",
            trade_2:"Chemistry",
            trade_3:"Mathematics",
            trade_4:"Economics",
            trade_5:"Mathematics and Computing"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:650,
        bsc:200
    },

    fee:{
        institute_fee:"₹1,18,063 per semester",
        hostel_fee:"₹34,605 per semester",
        total_fee:"₹1,50,663 per semester"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:207, closing_rank:285 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:311, closing_rank:1132 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"16 lakhs per annum",
            high_sal:"1.5 crore per annum",
            percent_placed:"94%",
            no_of_companies:120
        },

        year_2:{
            avg_sal:"18 lakhs per annum",
            high_sal:"1.2 crore per annum",
            percent_placed:"93%",
            no_of_companies:105
        }
    }

});

const nita=new College({
    _id:4,
    college_name:"MNNIT ALLAHABAD",
    full_name:"Motilal Nehru National Institute of Technology Allahabad",
    also_known_as:"MNNIT",
    location:"Motilal Nehru National Institute of Technology Allahabad, Prayagraj, Uttar Pradesh – 211004",
    Institute_type:"Government Institute",
    establishment_year:1951,
    campus_area:"222 acre",
    ranking:42,
    mode_of_adm:"JEE(Main)",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"B.sc",
            trade_1:"-",
            trade_2:"-",
            trade_3:"-",
            trade_4:"-",
            trade_5:"-"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:780,
        bsc:0
    },

    fee:{
        institute_fee:"84,500 per semester",
        hostel_fee:"₹34,000 per semester",
        total_fee:"₹1,14,500 per semester"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:207, closing_rank:285 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:311, closing_rank:1132 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"11 lakhs per annum",
            high_sal:"80 lakhs per annum",
            percent_placed:"89%",
            no_of_companies:78
        },

        year_2:{
            avg_sal:"14 lakhs per annum",
            high_sal:"71 lakhs per annum",
            percent_placed:"93%",
            no_of_companies:84
        }
    }

});

const nitk=new College({
    _id:5,
    college_name:"NITK SURATHKAL",
    full_name:"National Institute of Technology Karnataka Surathkal",
    also_known_as:"NITK",
    location:"National Institute of Technology Karnataka, Srinivasnagar PO, Surathkal, Mangalore, Karnataka - 575025",
    Institute_type:"Government Institute",
    establishment_year:1960,
    campus_area:"295 acres",
    ranking:10,
    mode_of_adm:"JEE(Main))",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"B.Sc",
            trade_1:"Physics",
            trade_2:"Chemistry",
            trade_3:"Mathematics",
            trade_4:"-",
            trade_5:"-"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:780,
        bsc:180
    },

    fee:{
        institute_fee:"₹80,340 per semester",
        hostel_fee:"₹35,605 per semester",
        total_fee:"₹1,15,663 per semester"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:207, closing_rank:285 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:311, closing_rank:1132 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"16 lakhs per annum",
            high_sal:"1 crore per annum",
            percent_placed:"92%",
            no_of_companies:90
        },

        year_2:{
            avg_sal:"17 lakhs per annum",
            high_sal:"1.2 crore per annum",
            percent_placed:"93%",
            no_of_companies:104
        }
    }

});

const bitsp=new College({
    _id:6,
    college_name:"BITS PILANI",
    full_name:"Birla Institute of Technology and Science Pilani",
    also_known_as:"BITS Pilani",
    location:"Birla Institute of Technology & Science, Pilani Campus, Vidya Vihar, Pilani, Rajasthan - 333031",
    Institute_type:"Private Institute",
    establishment_year:1928,
    campus_area:"328 acre",
    ranking:26,
    mode_of_adm:"BITSAT Examination",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"Metallurgical Engineering"
        },
        course2:{
            name_of_course:"-",
            trade_1:"-",
            trade_2:"-",
            trade_3:"-",
            trade_4:"-",
            trade_5:"-"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:940,
        bsc:0
    },

    fee:{
        institute_fee:"₹2,95,500 per semester",
        hostel_fee:"₹25,605 per semester",
        total_fee:"₹3,20,840 per semester"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:207, closing_rank:285 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:311, closing_rank:1132 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:480, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:580 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Science and Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"15 lakhs per annum",
            high_sal:"45 lakhs per annum",
            percent_placed:"89%",
            no_of_companies:92
        },

        year_2:{
            avg_sal:"17 lakhs per annum",
            high_sal:"52 lakhs per annum",
            percent_placed:"93%",
            no_of_companies:84
        }
    }

});

const zhcet=new College({
    _id:7,
    college_name:"ZHCET ALIGARH",
    full_name:"ZAKIR HUSSAIN COLLEGE OF ENGINEERING AND TECHNOLOGY ALIGARH",
    also_known_as:"ZHCET",
    location:"Zakir Husain College of Engineering & Technology, Aligarh Muslim University, Aligarh, Uttar Pradesh - 202002",
    Institute_type:"Government Institute",
    establishment_year:1920,
    campus_area:"1200 acre",
    ranking:35,
    mode_of_adm:"AMUEEE",

    courses_offered:{
        course1:{
            name_of_course:"B.Tech",
            trade_1:"Computer Engineering",
            trade_2:"Electronics and Communication Engineering",
            trade_3:"Electrical Engineering",
            trade_4:"Mechanical Engineering",
            trade_5:"Civil Engineering",
            trade_6:"Chemical Engineering",
            trade_7:"Petrochemical Engineering",
            trade_8:"-"
        },
        course2:{
            name_of_course:"-",
            trade_1:"-",
            trade_2:"-",
            trade_3:"-",
            trade_4:"_",
            trade_5:"_"
        },
        course3:{
            name_of_course:"B.arch",
            trade_1:"Architectre",
            trade_2:"_",
            trade_3:"_"
        }
    },

    seat_matrix:{ 
        b_tech:400,
        bsc:0
    },

    fee:{
        institute_fee:"20,840 rupees",
        hostel_fee:"0 rupees",
        total_fee:"20,840 rupees"
    },

    cutoff:{
        year_1:{
            general:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        },

        year_2:{
            general:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            obc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            ews:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            sc:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
            st:{
                branch:
                [{ branch_name:"Computer Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electronics and Communication Engineeering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Electrical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Mechanical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Civil Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Chemical Engineering",opening_rank:400, closing_rank:560 },
                {  branch_name:"Petrochemical Engineering",opening_rank:400, closing_rank:560 }]
            },
        }

    },

    placements:{
        year_1:{
            avg_sal:"6 lakhs per annum",
            high_sal:"24 lakhs per annum",
            percent_placed:"78%",
            no_of_companies:38
        },

        year_2:{
            avg_sal:"6.2 lakhs per annum",
            high_sal:"20 lakhs per annum",
            percent_placed:"72%",
            no_of_companies:40
        }
    }

});


// College.insertMany([iitkgp,iitdli,iitb,nita,nitk,bitsp,zhcet],function(err){
//     if(err){
//         console.log(err);
//     } else{ 
//         console.log("successfully saved all the documents");
//     }
// });

College.find(function(err,colleges){
    if(err){
        console.log(err);
    } else{ 
        console.log(colleges);
    }
});


let name="a";
let result="";
let name1="";


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Careerpath.html");
});

app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.use('/college', express.static('public'));

app.get("/college", function (req, res) {
    res.sendFile(__dirname + "/college_section.html");

    app.get("/college/engineering", function (req, res) {
        res.sendFile(__dirname + "/eng_clg.html");
    });

    app.get("/college/medical", function (req, res) {
        res.sendFile(__dirname + "/med_clg.html");
    });

});



app.use('/exam', express.static('public'));

app.get("/exam", function (req, res) {
    res.sendFile(__dirname + "/exam_section.html");

    app.get("/exam/engineering", function (req, res) {
        res.sendFile(__dirname + "/eng_exam.html");
    });

    app.get("/exam/medical", function (req, res) {
        res.sendFile(__dirname + "/med_exam.html");
    });
});

app.get("/careerinarts",function(req,res){
    res.sendFile(__dirname+"/careerOptnInArt.html")
})

app.get("/careerincommerce",function(req,res){
    res.sendFile(__dirname+"/careerOptnInCommerce.html")
})

app.get("/careerinscience",function(req,res){
    res.sendFile(__dirname+"/careeroptionsinScience.html")
})

app.use('/exam/engineering', express.static('public'));

app.get("/exam/engineering/jeemain",function(req,res){
    res.sendFile(__dirname+"/jee_main.html");
})

app.get("/exam/engineering/jeeadv",function(req,res){
    res.sendFile(__dirname+"/jee_adv.html");
})

app.use('/exam/medical', express.static('public'));

app.get("/exam/medical/neet",function(req,res){
    res.sendFile(__dirname+"/neet_info.html");
})





app.get("/job",function(req,res){
    res.sendFile(__dirname+"/jobSection.html");

    app.get("/job/nda",function(req,res){
        res.sendFile(__dirname+"/nda_2nd.html");
    })

    app.get("/job/ssc",function(req,res){
        res.sendFile(__dirname+"/ssc.html");
    })
})


app.get("/college/engineering/:col_name",function(request,response){
    let mycollege=request.params.col_name;
    //response.send("hello");
    result=mycollege.toUpperCase();
    console.log(name);
    College.findOne({ $or: [{college_name:result},{full_name:result}]},function(err,foundlist){
        if(!foundlist){
            console.log("cannot find college");
            response.send("<h1>cannot find college</h1>");
        }
        else{
        response.render("college_template",{
            colg_name:foundlist.college_name,
            full_name:foundlist.full_name,
            also_known:foundlist.also_known_as,
            location:foundlist.location,
            institute_type:foundlist.Institute_type,
            yoest:foundlist.establishment_year,
            areaofcampus:foundlist.campus_area,
            ranking:foundlist.ranking,
            moad:foundlist.mode_of_adm, 
            crs1:foundlist.courses_offered.course1.name_of_course,
            trade1:foundlist.courses_offered.course1.trade_1,
            trade2:foundlist.courses_offered.course1.trade_2,
            trade3:foundlist.courses_offered.course1.trade_3,
            trade4:foundlist.courses_offered.course1.trade_4,
            trade5:foundlist.courses_offered.course1.trade_5,
            trade6:foundlist.courses_offered.course1.trade_6,
            trade7:foundlist.courses_offered.course1.trade_7,
            trade8:foundlist.courses_offered.course1.trade_8,
            crs2:foundlist.courses_offered.course2.name_of_course,
            c2trade1:foundlist.courses_offered.course2.trade_1,
            c2trade2:foundlist.courses_offered.course2.trade_2,
            c2trade3:foundlist.courses_offered.course2.trade_3,
            c2trade4:foundlist.courses_offered.course2.trade_4,
            c2trade5:foundlist.courses_offered.course2.trade_5,
            crs3:foundlist.courses_offered.course3.name_of_course,
            arr1:foundlist.cutoff.year_1.general.branch,
            arr2:foundlist.cutoff.year_1.obc.branch,
            arr3:foundlist.cutoff.year_1.ews.branch,
            arr4:foundlist.cutoff.year_1.sc.branch,
            arr5:foundlist.cutoff.year_1.st.branch,
            arry1:foundlist.cutoff.year_2.general.branch,
            arry2:foundlist.cutoff.year_2.obc.branch,
            arry3:foundlist.cutoff.year_2.ews.branch,
            arry4:foundlist.cutoff.year_2.sc.branch,
            arry5:foundlist.cutoff.year_2.st.branch,
            instfee:foundlist.fee.institute_fee,
            hostfee:foundlist.fee.hostel_fee,
            totfee:foundlist.fee.total_fee,
            avgpkg1:foundlist.placements.year_1.avg_sal,
            highpkg1:foundlist.placements.year_1.high_sal,
            percent1:foundlist.placements.year_1.percent_placed,
            noc1:foundlist.placements.year_1.no_of_companies,
            avgpkg2:foundlist.placements.year_2.avg_sal,
            highpkg2:foundlist.placements.year_2.high_sal,
            percent2:foundlist.placements.year_2.percent_placed,
            noc2:foundlist.placements.year_2.no_of_companies,
            btechseats:foundlist.seat_matrix.b_tech,
            bscseats:foundlist.seat_matrix.bsc
        });
    }
    });
    
});



app.post("/college/engineering",function(req,res){
    name=req.body.col_name;
    result=name.toUpperCase();
    name1=name.toLowerCase();
    // console.log(result);
    //res.send("hello");
    // res.render("college_template",{
    // cname:"iitkgp"

    res.redirect("/college/engineering/"+name1);
   
    });
    






/*app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/tools.html");
});*/




let port = process.env.PORT;
if (port == null || port == "") {
    port = 4000;
}
app.listen(port, function () {
    console.log("server has started successfully");
});